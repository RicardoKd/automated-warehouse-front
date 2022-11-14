import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsLoggedIn } from "../../app/IsLoggedInSlice";
import { logIn } from "../../Reducers/IsLoggedInReducer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function clearPassword() {
    setPassword("");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    clearPassword();
  };

  useEffect(() => {
    console.log(`logInForm useEff. isLoggedIn: ${isLoggedIn}`);
    if (isLoggedIn) {
      navigate(ROUTES.MY_CABINET);
    }
  }, [isLoggedIn]);

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={(event) => handleSubmit(event)}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            Email
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
          <button className="formFieldButton material-bubble" type="submit">
            <span>Log In</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
