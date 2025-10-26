import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";
import axios from "axios";

class HomePage extends Component {
  state = { name: "", age: "", stclass: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = async (e) => {
    e.preventDefault();
    const { name, age, stclass } = this.state;
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await axios.post(`${API_URL}/`, {
        name,
        age,
        stclass,
      });

      if (response.data.success) {
        alert("✅ Student information submitted successfully");
        this.setState({ name: "", age: "", stclass: "" });
      } else {
        alert("❌ Failed to submit student information");
      }
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert("Server error while submitting");
    }
  };

  logout = () => {
    Cookies.remove("jwt");
    window.location.href = "/login";
  };

  render() {
    return (
      <div className="home-container">
        <h1>Enter Student Information</h1>
        <form onSubmit={this.submitForm} method="POST">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Class:
            <input
              type="text"
              name="stclass"
              value={this.state.stclass}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.logout} className="logout-btn">Logout</button>
      </div>
    );
  }
}

export { HomePage };