import { useMemo, useState } from "react";
import ICell from "../../Types/ICell";
import CellCard from "../CellCard";
import styles from "./index.module.css";

const CellCardsContainer = ({ cells }: { cells: ICell[] }) => {
  console.log("card container rerender");

  const [emptyRentedCells, setEmptyRentedCells] = useState(0);

  const increment = useMemo(() => {
    console.log("increment started");
    //setEmptyRentedCells((prevState) => prevState + 1);

    return emptyRentedCells;
  }, [emptyRentedCells]);

  const emptyCell = () => {
    console.log("mt");
    setEmptyRentedCells((prevState) => prevState + 1);
    return <></>;
  };

  return (
    <>
      <p>Empty but not used cells: {increment}</p>
      <button onClick={() => setEmptyRentedCells((prevState) => prevState + 1)}>
        +++
      </button>
      <div className={styles.CellCardsContainer}>
        {cells.map((cell, index) =>
          cell.isOccupied ? <CellCard cell={cell} key={index} /> : emptyCell(),
        )}
      </div>
    </>
  );
};
export default CellCardsContainer;
