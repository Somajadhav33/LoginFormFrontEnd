import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      if (response.data.login === true) {
        Cookies.set("jwt", response.data.token);
        this.setState({ isLoggedIn: true });
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Server error. Try again.");
    }
  };

  render() {
    const jwt_token = Cookies.get("jwt");
    if (jwt_token || this.state.isLoggedIn) {
      return <Navigate to="/" />;
    }

    return (
      <div className="login-page">
        <form className="login-form" onSubmit={this.submitForm}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChange} required />
          </label>
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </form>
      </div>
    );
  }
}

export { LoginPage };
