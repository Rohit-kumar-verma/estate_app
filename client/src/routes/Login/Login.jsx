import "./login.scss";
import { Link, useNavigate} from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {updateUser}= useContext(AuthContext)

  const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      setError("")
      const formData = new FormData(event.target);

    // Access and manipulate form data as needed
    // Send the data to MongoDB using your preferred method (e.g., API call
    // Extract values from FormData
    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username);

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      updateUser(res.data)
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="loginPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" minLength={3} maxLength={20} required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Login..." : "Login"}
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
export default Login;