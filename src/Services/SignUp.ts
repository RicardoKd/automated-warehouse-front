import { BASE_URL } from "../constants";

const SignUp = async (name: string, email: string, password: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  };

  try {
    const response = await fetch(BASE_URL + "customer/signUp", requestOptions);

    const rj = await response.json();

    console.log("response:", response);
    console.log("response.json():", rj);

    if (!response.ok) {
      return Promise.reject("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default SignUp;
