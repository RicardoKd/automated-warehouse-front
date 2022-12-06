/* eslint-disable no-loop-func */
import { useEffect, useRef, useState } from "react";
import { selectAllCellsState } from "../../app/allCellsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsLoggedInState } from "../../app/isLoggedInSlice";
import { selectRentedCellsState } from "../../app/rentedCellsSlice";
import { BASE_URL, WAREHOUSE_SIZE } from "../../constants";
import { fetchAllCells } from "../../Reducers/AllCellsReducer";
import styles from "./index.module.css";

const RobotTracker = () => {
  const { value: isLoggedIn, customerId } = useAppSelector(
    selectIsLoggedInState,
  );

  const { status: rentedCellsStatus } = useAppSelector(selectRentedCellsState);
  const { status: allCellsStatus, value: allCells } =
    useAppSelector(selectAllCellsState);

  const [robotPos, setRobotPosition] = useState({ row: 0, column: 0 });
  const robotPositionIntervalId = useRef(0);

  const dispatch = useAppDispatch();

  const robotPositionIntervalFetcher = () => {
    if (allCellsStatus === "fulfilled") {
      return setInterval(async () => {
        const response = await fetch(BASE_URL + "robot/position");
        const {
          payload: { robotPosition },
        } = await response.json();
        setRobotPosition(robotPosition);
        console.log(robotPosition);
      }, 1000);
    }
  };

  useEffect(() => {
    clearInterval(robotPositionIntervalId.current);
    robotPositionIntervalId.current = Number(robotPositionIntervalFetcher());
  }, [allCellsStatus]);

  useEffect(() => {
    if (isLoggedIn && customerId && rentedCellsStatus === "fulfilled") {
      dispatch(fetchAllCells());
    }
  }, [rentedCellsStatus]);

  const grapichCellRepresentation = () => {
    const rows = [];
    let cellIndex = 0;

    for (let i = 0; i < WAREHOUSE_SIZE.ROWS; i++) {
      rows.push(
        <div className={styles.robotTrackerRow} key={i}>
          {(() => {
            const row = [];

            for (let j = 0; j < WAREHOUSE_SIZE.COLUMNS; j++) {
              row.push(
                <div
                  className={
                    allCells[cellIndex].isOccupied
                      ? `${styles.robotTrackerCell} ${styles.occupiedRobotTrackerCell}`
                      : styles.robotTrackerCell
                  }
                  key={j}
                />,
              );
              cellIndex++;
            }

            return row;
          })()}
        </div>,
      );
    }

    return rows;
  };

  return (
    <div className={styles.RobotTrackerWrapper}>
      {allCellsStatus === "fulfilled" ? grapichCellRepresentation() : null}
      <div
        style={{
          left: robotPos.column * 19 + 3.75,
          bottom: robotPos.row * 30 + 3.75,
        }}
        id={styles.robot}
      ></div>
    </div>
  );
};

export default RobotTracker;
