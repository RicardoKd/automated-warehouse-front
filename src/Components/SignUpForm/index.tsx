import { useState } from "react";
import SignUp from "../../Services/SignUp";

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
    <div className="formCenter">
      <form onSubmit={(event) => handleSubmit(event)} className="formFields">
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your full name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

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
          <label className="formFieldCheckboxLabel">
            <input
              className="formFieldCheckbox"
              type="checkbox"
              name="hasAgreed"
              required={true}
              value={hasAgreed.toString()}
              onChange={() => sethasAgreed((prevState) => !prevState)}
            />{" "}
            I agree all statements in{" "}
            <a href="#" className="formFieldTermsLink">
              terms of service
            </a>
          </label>
        </div>

        <div className="formField">
          <button className="formFieldButton material-bubble" type="submit">
            <span>Sign Up</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
