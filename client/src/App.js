import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomDayCalendar as Calendar } from "./components/Calendar/Calendar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { UserContext } from "./context/UserContext";
import { gql, useQuery } from "@apollo/client";

function App() {
  const ME = gql`
    query {
      me {
        _id
        email
        days {
          _id
          date
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(ME);
  console.log({ data, error });
  return (
    <>
      {/* <UserContext.Provider value={user}> */}
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute component={HomePage} />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;

// https://reactrouter.com/docs/en/v6/getting-started/overview
