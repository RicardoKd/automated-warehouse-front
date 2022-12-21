import { useMemo } from "react";
import { selectRentedCellsState } from "../../app/rentedCellsSlice";
import { useAppSelector } from "../../app/hooks";
import CellCard from "../CellCard";
import styles from "./index.module.css";

const CellCardsContainer = () => {
  const { value: rentedCells, status } = useAppSelector(selectRentedCellsState);

  const renderCardsContainer = useMemo(
    () => (
      <div className={styles.CellCardsContainer}>
        {rentedCells.map((cell, index) =>
          cell.isOccupied ? <CellCard cell={cell} key={index} /> : null,
        )}
      </div>
    ),
    [rentedCells],
  );

  return (
    <>
      {status === "loading" ? (
        <div className={styles.ldsRipple}>
          <div></div>
          <div></div>
        </div>
      ) : (
        renderCardsContainer
      )}
    </>
  );
};

export default CellCardsContainer;
