import { useState } from "react";
import Aside from "../Aside";
import LogInForm from "../LogInForm";
import SignUpForm from "../SignUpForm";
import styles from "./index.module.css";

const StartPage = () => {
  const [logInComponent, setlogInComponent] = useState(true);

  return (
    <>
      <Aside />

      <div className={styles.appForm}>
        <div className={styles.pageSwitcher}>
          <span
            onClick={() => setlogInComponent(true)}
            className={styles.pageSwitcherItem}
          >
            Log In
          </span>
          <span
            onClick={() => setlogInComponent(false)}
            className={styles.pageSwitcherItem}
          >
            Sign Up
          </span>
        </div>
        {logInComponent ? <LogInForm /> : <SignUpForm />}
      </div>
    </>
  );
};

export default StartPage;
