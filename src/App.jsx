import React, { useState } from "react";
import {
  AppContainer,
  AppTitle,
  AppButtons,
  Button,
} from "./components/AppStyles";
import AppBookingList from "./components/AppBookingList/AppBookingList";
import Form from "./components/form/Form.jsx";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [state, setState] = useState("hotel");

  const [list, setList] = useState(bookingList);

  const handleShowForm = (type) => {
    setState(type);
    setShowForm(!showForm);
  }

  return (
    <AppContainer>

      <AppTitle>Booking App</AppTitle>
      <div className="container">
        <div className="box box1">
          <AppButtons >
            <Button
              type="button"
              typeButton="hotel"
              onClick={() => handleShowForm("hotel")}>
              Hotel
            </Button>
            <Button
              type="button"
              typeButton="flight"
              onClick={() => handleShowForm("flight")}>
              Flight
            </Button>
          </AppButtons>

          {!showForm && (
            <Form list={list} setList={setList} type={state} />
          )}
          {showForm && (
            <Form list={list} setList={setList} type={state} />
          )}
        </div>

        <div className="box box2">
          <AppBookingList list={list} />
        </div>
      </div>


    </AppContainer>

  );
}

const bookingList = [
  {
    customerName: "alex",
    bookingHotel: true,
    checkInDateHotel: new Date().toUTCString(),
    checkOutDateHotel: new Date().toUTCString(),
    bookingFlight: true,
    checkInDateFlight: new Date().toUTCString(),
    checkOutDateFlight: new Date().toUTCString(),
  },
  {
    customerName: "alex1",
    bookingHotel: true,
    checkInDateHotel: new Date().toUTCString(),
    checkOutDateHotel: new Date().toUTCString(),
    bookingFlight: false,
    checkInDateFlight: new Date().toUTCString(),
    checkOutDateFlight: new Date().toUTCString(),
  },
  {
    customerName: "alex2",
    bookingHotel: true,
    checkInDateHotel: new Date().toUTCString(),
    checkOutDateHotel: new Date().toUTCString(),
    bookingFlight: false,
    checkInDateFlight: new Date().toUTCString(),
    checkOutDateFlight: new Date().toUTCString(),
  },
];

export default App;
