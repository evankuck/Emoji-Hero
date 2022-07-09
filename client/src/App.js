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
  query Query($token: String!) {
    me(token: $token) {
      _id
      email
      password
      token
    }
  }
  `;

  const { data, loading, error } = useQuery(ME, {
    variables: {
      token: localStorage.getItem("token") || "",
    },
  });

  if (loading) return <p>Loading...</p>;

  console.log({ data, error });
  return (
    <>
      <UserContext.Provider value={data.me}>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute component={HomePage} />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;

// https://reactrouter.com/docs/en/v6/getting-started/overview
