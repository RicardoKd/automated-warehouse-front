import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsLoggedInState } from "../../app/isLoggedInSlice";
import { selectRentedCellsState } from "../../app/rentedCellsSlice";
import { BASE_URL } from "../../constants";
import { fetchAllCells } from "../../Reducers/AllCellsReducer";
import style from "./index.module.css";

const RobotTracker = () => {
  console.log("RobotTracker render");

  const { value: isLoggedIn, customerId } = useAppSelector(
    selectIsLoggedInState,
  );

  const { status } = useAppSelector(selectRentedCellsState);

  const rp = useRef({});

  const dispatch = useAppDispatch();

  const robotPositionIntervalFetcher = () =>
    setInterval(async () => {
      const response = await fetch(BASE_URL + "robot/position");
      const {
        payload: { robotPosition },
      } = await response.json();
      console.log(robotPosition);
      rp.current = robotPosition;
    }, 4000);

  useEffect(() => {
    if (isLoggedIn && customerId && status === "fulfilled") {
      dispatch(fetchAllCells());
      robotPositionIntervalFetcher();
    }
  }, [status]);

  // const warehouseRepresentations = () => {
  //   for (let index = 0; index < 50; index++) {}
  // };

  return (
    <div className={style.RobotTrackerWrapper}>
      {/* <div>{warehouseRepresentations}</div> */}
    </div>
  );
};

export default RobotTracker;
