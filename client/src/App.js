import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomDayCalendar as Calendar } from "./components/Calendar/Calendar";
import HomePage from "./pages/HomePage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <ProtectedRoute path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// https://reactrouter.com/docs/en/v6/getting-started/overview
