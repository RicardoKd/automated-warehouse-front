import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsLoggedInState } from "../../app/IsLoggedInSlice";
import { ROUTES } from "../../constants";
import CellCardsContainer from "../CellCardsContainer";
import { fetchCustomerCells } from "../../Reducers/CellsReducer";

const CustomerCabinet = () => {
  console.log("cabinet");

  const navigate = useNavigate();
  const { value: isLoggedIn, customerId } = useAppSelector(
    selectIsLoggedInState,
  );

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

  return (
    <div>
      <nav>Navbar</nav>
      <CellCardsContainer />
    </div>
  );
};

export default CustomerCabinet;
