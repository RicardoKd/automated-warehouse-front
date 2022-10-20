import { Route, Link, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn/logIn";
import SignUp from "./Components/SignUp/SignUp";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="appAside" />

      <div className="appForm">
        <div className="pageSwitcher">
          <Link to="/" className="pageSwitcherItem">
            Sign Up
          </Link>

          <Link to="/logIn" className="pageSwitcherItem">
            Sign In
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
