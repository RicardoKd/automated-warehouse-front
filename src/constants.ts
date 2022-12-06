const SLICE_NAMES = {
  IS_LOGGED_IN: "isLoggedIn",
  RENTED_CELLS: "rentedCells",
  ALL_CELLS: "allCells",
};

const BASE_URL = "http://localhost:8080/";

const ROUTES = {
  GENERAL: "*",
  HOME: "/",
  MY_CABINET: "/myCabinet",
};

const WAREHOUSE_SIZE = Object.freeze({
  ROWS: 15,
  COLUMNS: 15,
});

export { SLICE_NAMES, BASE_URL, ROUTES, WAREHOUSE_SIZE };
