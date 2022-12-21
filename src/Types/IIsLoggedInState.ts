export default interface IIsLoggedInState {
  status: "idle" | "loading" | "fulfilled" | "failed";
  value: boolean;
  ownerId: string | null;
}
