import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("example@mail.com");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [hasAgreed, sethasAgreed] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
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
            E-Mail Address
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
          <button className="formFieldButton">Sign Up</button>{" "}
        </div>
      </form>
    </div>
  );
};

// class SignUpForm extends Component {
//   constructor() {
//     super();

// this.state = {
//   email: "",
//   password: "",
//   name: "",
//   hasAgreed: false,
// };

// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
//}

// handleChange(event) {
//   let target = event.target;
//   let value = target.type === "checkbox" ? target.checked : target.value;
//   let name = target.name;

//   this.setState({
//     [name]: value,
//   });
// }

// handleSubmit(e) {
//   e.preventDefault();

//   console.log("The form was submitted with the following data:");
//   console.log(this.state);
// }

// render() {
//   return (
//     <div className="formCenter">
//       <form onSubmit={this.handleSubmit} className="formFields">
//         <div className="formField">
//           <label className="formFieldLabel" htmlFor="name">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="formFieldInput"
//             placeholder="Enter your full name"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div className="formField">
//           <label className="formFieldLabel" htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="formFieldInput"
//             placeholder="Enter your password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div className="formField">
//           <label className="formFieldLabel" htmlFor="email">
//             E-Mail Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="formFieldInput"
//             placeholder="Enter your email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//         </div>

//         <div className="formField">
//           <label className="formFieldCheckboxLabel">
//             <input
//               className="formFieldCheckbox"
//               type="checkbox"
//               name="hasAgreed"
//               value={this.state.hasAgreed}
//               onChange={this.handleChange}
//             />{" "}
//             I agree all statements in{" "}
//             <a href="null" className="formFieldTermsLink">
//               terms of service
//             </a>
//           </label>
//         </div>

//         <div className="formField">
//           <button className="formFieldButton">Sign Up</button>{" "}
//           <Link to="/sign-in" className="formFieldLink">
//             I'm already member
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }
//}
export default SignUpForm;
