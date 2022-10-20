export default interface IIsLoggedInState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  value: boolean;
}
