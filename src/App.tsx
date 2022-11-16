import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import CustomerCabinet from "./Components/CustomerCabinet";
import DefaultPage from "./Components/DefaultPage";
import StartPage from "./Components/StartPage";
import { ROUTES } from "./constants";

const App = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path={ROUTES.GENERAL} element={<DefaultPage />} />
        <Route path={ROUTES.HOME} element={<StartPage />} />
        <Route path={ROUTES.MY_CABINET} element={<CustomerCabinet />} />
      </Routes>
    </div>
  );
};

export default App;
