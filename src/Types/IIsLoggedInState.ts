export default interface IIsLoggedInState {
  status: "idle" | "loading" | "fulfilled" | "failed";
  value: boolean;
  customerId: string | null;
}
