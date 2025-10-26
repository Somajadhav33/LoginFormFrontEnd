import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { LoginPage } from "./Components/Login/LoginPage";
import { SignUp } from "./Components/SignUp";
import { HomePage } from "./Components/Home/Home";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;