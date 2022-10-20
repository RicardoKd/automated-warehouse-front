import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { logIn } from "../../Reducers/IsLoggedInReducer";

// import styles from "./SignIn.module.css";

const LogIn = () => {
  const [email, setEmail] = useState("example@mail.com");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(logIn({ email, password }));

    console.log("The form was submitted with the following data:");
  };

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={(event) => handleSubmit(event)}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton" type="submit">
            Log In
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default LogIn;
