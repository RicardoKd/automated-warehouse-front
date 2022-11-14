import ICell from "./ICell";

export default interface ICellsState {
  status: "idle" | "loading" | "fulfilled" | "failed";
  value: ICell[];
}
