import { useAppDispatch } from "../../app/hooks";
import { fetchCustomerRentedCells } from "../../Reducers/RentedCellsReducer";
import ICell from "../../Types/ICell";
import styles from "./index.module.css";

const CellCard = ({ cell }: { cell: ICell }) => {
  const { description, rentEndDate, id, ownerId } = cell;

  const date = new Date(rentEndDate);

  const endDay = date.getDate();
  const endMonth = date.getMonth() + 1;
  const endYear = date.getFullYear();

  const today = new Date();

  const differenceInMs = Math.abs(date.getTime() - today.getTime());
  const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

  const dispatch = useAppDispatch();

  const GetPhysicalCell = async (ownerId: string, cellsIds: number[]) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ownerId, cellsIds }),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/cells/getPhysicalCell",
        requestOptions,
      );

      if (!response.ok) {
        console.log("failed response:", response);
        throw new Error("fetch getCells failed");
      }

      console.log("responseJSON:", await response.json());

      dispatch(fetchCustomerRentedCells(ownerId));
    } catch (error) {
      console.log("faild to get cells", error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.line}></div>
      <p>
        Description:
        <br />
        {description}
      </p>
      <p>Rent end date: {`${endDay}.${endMonth}.${endYear}`}</p>
      <p>Rent days left: {differenceInDays}</p>
      <button onClick={() => GetPhysicalCell(ownerId, [id])}>
        Get content
      </button>
    </div>
  );
};

export default CellCard;
