import { Link, useLocation } from "react-router-dom";
import Aside from "../Aside";
import styles from "./index.module.css";
import formStyles from "../SignUpForm/formStyles.module.css";

const DefaultPage = () => {
  const location = useLocation();

  return (
    <>
      <Aside />

      <div className={`${styles.appForm} ${styles.appFormDefault}`}>
        <p className="mb-20">
          {location.state && location.state.errorMessage
            ? location.state.errorMessage
            : "Oops! Something went wrong"}
        </p>
        <Link to={"/"}>
          <button
            className={`${formStyles.formFieldButton} materialBubble`}
            type="button"
          >
            <span>Home</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default DefaultPage;
