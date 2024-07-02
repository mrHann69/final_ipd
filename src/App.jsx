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
  const [temp, setTemp] = useState(tempList);

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
            <Form list={temp} setList={setTemp} type={state} />
          )}
          {showForm && (
            <Form list={temp} setList={setTemp} type={state} />
          )}
        </div>

        <div className="box box2">
          <AppBookingList list={temp} />
        </div>
      </div>


    </AppContainer>

  );
}
const tempList = [
  {
    customerName: "alex ej",
    bookingHotel: true,
    checkInDateHotel: new Date().toUTCString(),
    checkOutDateHotel: new Date().toUTCString(),
    bookingFlight: true,
    checkInDateFlight: new Date().toUTCString(),
    checkOutDateFlight: new Date().toUTCString(),
  },
];
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
