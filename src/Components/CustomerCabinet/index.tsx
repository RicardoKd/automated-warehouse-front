import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsLoggedInState } from "../../app/IsLoggedInSlice";
import { selectCells } from "../../app/cellsSlice";
import { ROUTES } from "../../constants";
import CellCardsContainer from "../CellCardsContainer";
import { fetchCustomerCells } from "../../Reducers/CellsReducer";

const CustomerCabinet = () => {
  console.log("cabinet");
  const navigate = useNavigate();
  const { value: isLoggedIn, customerId } = useAppSelector(
    selectIsLoggedInState,
  );
  const cells = useAppSelector(selectCells);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn && customerId) {
      console.log("fethiching cells");
      dispatch(fetchCustomerCells(customerId));
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.GENERAL, { state: { errorMessage: "Not logged in!" } });
    }
  }, [isLoggedIn]);

  const renderCardContainer = useMemo(
    () => <CellCardsContainer cells={cells}></CellCardsContainer>,
    [cells],
  );

  return (
    <div>
      <p>U logged in he-he</p>
      {renderCardContainer}
    </div>
  );
};

export default CustomerCabinet;
