import { useMemo } from "react";
import ICell from "../../Types/ICell";
import styles from "./index.module.css";

const CellCard = ({ cell }: { cell: ICell }) => {
  console.log("cell render");
  console.log(`is mt: ${cell.isOccupied}`);
  const { description, rentEndDate } = cell;

  const date = new Date(rentEndDate);

  const endDay = date.getDate();
  const endMonth = date.getMonth() + 1;
  const endYear = date.getFullYear();

  const today = new Date();

  const differenceInMs = Math.abs(date.getTime() - today.getTime());
  const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

  const Card = () =>
    useMemo(
      () => (
        <div className={styles.card}>
          <div className={styles.line}></div>
          <p>
            Description:
            <br />
            {description}
          </p>
          <p>Rent end date: {`${endDay}.${endMonth}.${endYear}`}</p>
          <p>Rent days left: {differenceInDays}</p>
        </div>
      ),
      [cell],
    );

  return Card();
};

export default CellCard;
