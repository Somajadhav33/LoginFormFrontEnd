import { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./index.css";
import { Navigate } from "react-router-dom";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    age: "",
    gender: "",
    no: "",
    isSignedUp: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignUp = async (e) => {
    e.preventDefault();
    const { username, password, age, gender, no } = this.state;
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        username,
        password,
        age,
        gender,
        no,
      });

      if (response.data === true) {
        this.setState({ isSignedUp: true });
      } else {
        alert(response.data || "Signup failed");
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      if (error.code === 'ERR_NETWORK') {
        alert("Cannot connect to server. Please check your connection.");
      } else if (error.response?.status === 404) {
        alert("Server endpoint not found. Please contact support.");
      } else {
        alert("Server error. Try again.");
      }
    }
  };

  render() {
    const jwt_token = Cookies.get("jwt");
    if (jwt_token) return <Navigate to="/" />;
    if (this.state.isSignedUp) return <Navigate to="/login" />;

    return (
      <div className="signup-page">
        <form className="signup-form" onSubmit={this.onSignUp}>
          <label>Username: <input type="text" name="username" onChange={this.handleChange} required /></label>
          <label>Password: <input type="password" name="password" onChange={this.handleChange} required /></label>
          <label>Age: <input type="number" name="age" onChange={this.handleChange} required /></label>
          <label>
            Gender:
            <select name="gender" onChange={this.handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>Phone Number: <input type="tel" name="no" onChange={this.handleChange} required /></label>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Log in</a></p>
        </form>
      </div>
    );
  }
}

export { SignUp };