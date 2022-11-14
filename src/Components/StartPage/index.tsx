import { useState } from "react";
import Aside from "../Aside";
import LogInForm from "../LogInForm";
import SignUpForm from "../SignUpForm";
import "./index.css";

const StartPage = () => {
  const [logInComponent, setlogInComponent] = useState(true);

  return (
    <>
      <Aside />

      <div className="appForm">
        <div className="pageSwitcher">
          <span
            onClick={() => setlogInComponent(true)}
            className="pageSwitcherItem"
          >
            Log In
          </span>
          <span
            onClick={() => setlogInComponent(false)}
            className="pageSwitcherItem"
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
