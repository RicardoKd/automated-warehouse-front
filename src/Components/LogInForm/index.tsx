import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsLoggedIn } from "../../app/isLoggedInSlice";
import { logIn } from "../../Reducers/IsLoggedInReducer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "../SignUpForm/formStyles.module.css";

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
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-40">
          <label className={styles.formFieldLabel} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.formFieldInput}
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-40">
          <label className={styles.formFieldLabel} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.formFieldInput}
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <button
            className={`${styles.formFieldButton} materialBubble`}
            type="submit"
          >
            <span>Log In</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
