import { useMemo } from "react";
import { selectCells } from "../../app/cellsSlice";
import { useAppSelector } from "../../app/hooks";
import CellCard from "../CellCard";
import styles from "./index.module.css";

const CellCardsContainer = () => {
  console.log("Cards container render");
  const rentedCells = useAppSelector(selectCells);

  const emptyRentedCellsCount = useMemo(() => {
    let count = 0;

    rentedCells.forEach((cell) => {
      if (!cell.isOccupied) {
        count++;
      }
    });

    return count;
  }, [rentedCells]);

  const a = useMemo(
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
      <p>Not occupied cells: {emptyRentedCellsCount}</p>
      {rentedCells.length > 0 ? (
        a
      ) : (
        <div className={styles.ldsRipple}>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default CellCardsContainer;
