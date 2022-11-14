import { Link, useLocation } from "react-router-dom";
import Aside from "../Aside";

import "./index.css";

const DefaultPage = () => {
  const location = useLocation();

  return (
    <>
      <Aside />

      <div className="appForm appFormDefault">
        <p className="errorMessage">
          {location.state && location.state.errorMessage
            ? location.state.errorMessage
            : "Oops! Something went wrong"}
        </p>
        <Link to={"/"}>
          <button className="formFieldButton material-bubble" type="button">
            <span>Home</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default DefaultPage;
