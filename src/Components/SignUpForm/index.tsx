import { useState } from "react";
import SignUp from "../../Services/SignUp";
import styles from "./formStyles.module.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [hasAgreed, sethasAgreed] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setName("");
    sethasAgreed(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    clearInputs();

    await SignUp(name, email, password);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-40">
          <label className={styles.formFieldLabel} htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className={styles.formFieldInput}
            placeholder="Enter your full name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

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

        <div className="mb-40">
          <label className={styles.formFieldCheckboxLabel}>
            <input
              className={styles.formFieldCheckbox}
              type="checkbox"
              name="hasAgreed"
              required={true}
              value={hasAgreed.toString()}
              onChange={() => sethasAgreed((prevState) => !prevState)}
            />{" "}
            I agree all statements in{" "}
            <a href="#" className={styles.formFieldTermsLink}>
              terms of service
            </a>
          </label>
        </div>

        <div>
          <button
            className={`${styles.formFieldButton} materialBubble`}
            type="submit"
          >
            <span>Sign Up</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
