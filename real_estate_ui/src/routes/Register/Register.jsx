import "./register.scss";
import { Link, useNavigate} from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import React, { useState } from "react";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);

      // Access and manipulate form data as needed
      // Send the data to MongoDB using your preferred method (e.g., API call
      // Extract values from FormData
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      navigate("/login");
    } catch (err) {
      setError(err.response.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" required />
          <input name="email" type="email" required />
          <input name="password" type="password" required />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
export default Register;