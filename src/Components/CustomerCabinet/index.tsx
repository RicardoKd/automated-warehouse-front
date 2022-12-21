import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsLoggedInState } from "../../app/isLoggedInSlice";
import { selectRentedCells } from "../../app/rentedCellsSlice";
import { ROUTES } from "../../constants";
import { fetchCustomerRentedCells } from "../../Reducers/RentedCellsReducer";
import CellCardsContainer from "../CellCardsContainer";
import RobotTracker from "../RobotTracker";
import styles from "./index.module.css";

const CustomerCabinet = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { value: isLoggedIn, ownerId } = useAppSelector(selectIsLoggedInState);
  const rentedCells = useAppSelector(selectRentedCells);

  const emptyRentedCellsCount = useMemo(() => {
    let count = 0;

    rentedCells.forEach((cell) => {
      if (!cell.isOccupied) {
        count++;
      }
    });

    return count;
  }, [rentedCells]);

  useEffect(() => {
    if (isLoggedIn && ownerId) {
      dispatch(fetchCustomerRentedCells(ownerId));
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.GENERAL, { state: { errorMessage: "Not logged in!" } });
    }
  }, [isLoggedIn]);

  const rentCell = async () => {
    if (!ownerId) {
      throw new Error("owner not logged in");
    }

    // using stab data
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ownerId,
        rentEndDate: "August 19, 2023 00:00:00 UTC",
        quantityOfCellsToBeUsed: 3,
      }),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/cells/rent",
        requestOptions,
      );

      console.log("responseJSON:", await response.json());

      if (response.status === 470) {
        alert("Not enough money!");
      }

      if (!response.ok) {
        throw new Error("fetch getCells failed");
      }

      dispatch(fetchCustomerRentedCells(ownerId));
    } catch (error) {
      console.log("faild to get cells", error);
    }
  };

  const putContent = async () => {
    console.log(`ownerId=${ownerId}`);
    if (!ownerId) {
      throw new Error("owner not logged in");
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ownerId, cellsDescriptions: ["aa"] }),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/cells/putPhysicalCell",
        requestOptions,
      );

      if (!response.ok) {
        throw new Error("fetch getCells failed");
      }

      dispatch(fetchCustomerRentedCells(ownerId));
    } catch (error) {
      console.log("faild to get cells", error);
    }
  };

  return (
    <div className={styles.CustomerCabinet}>
      <nav className={styles.navigation}>
        <p>Not occupied cells: {emptyRentedCellsCount}</p>
        <button
          onClick={() => rentCell()}
          className={`materialBubble ${styles.CustomerCabinetNavButton}`}
        >
          <span>Rent cells</span>
        </button>
        <button
          onClick={() => putContent()}
          className={`materialBubble ${styles.CustomerCabinetNavButton}`}
        >
          <span>Put content</span>
        </button>
      </nav>
      <main>
        <CellCardsContainer />
        <RobotTracker />
      </main>
    </div>
  );
};

export default CustomerCabinet;
