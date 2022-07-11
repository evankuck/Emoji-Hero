import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import Calendar from "react-calendar";
import "./Calendar.css";

import { Cell } from "../Cell/Cell";
import { gql, useQuery } from "@apollo/client";
import { UserContext } from "../../context/UserContext";
const GET_DAYS_BY_USERID = gql`
  query GetDaysByUserId($userId: String!) {
    getDaysByUserId(userId: $userId) {
      _id
      emoji
      date
      userId
    }
  }
`;

function AppCalendar() {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    console.log("day clicked")
    //sets modal open to true to change state
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="app">
      {/*render modal component if open*/}
      {isModalOpen && <Modal date={date} onClose={toggleModal} />}
      <h1 className="text-center">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} onClickDay={() => toggleModal(false)} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}

export default AppCalendar;
