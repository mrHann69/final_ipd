import React, { useState } from "react";
import {
  AppContainer,
  AppTitle,
  AppButtons,
  Button,
  AppContainerRow,
} from "./components/AppStyles";
import AppBookingList from "./components/AppBookingList/AppBookingList";
import Form from "./components/form/Form.jsx";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [state, setState] = useState("hotel");

  const [listHotels, setListHotels] = useState(bookingListHotels);
  const [listFlights, setListFlights] = useState(bookingListFlights);
  const [temp, setTemp] = useState(tempList);

  const [isUpdate, setIsUpdate] = useState({ state: false });

  const handleShowForm = (type) => {
    setState(type);
    setShowForm(type==="hotel"?true:false);
  }

  return (
    <AppContainer>
      <AppTitle>Booking App</AppTitle>
      <AppContainerRow>
        <AppContainer>
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

          {showForm && (
            <Form type={state} update={isUpdate} setUpdate={setIsUpdate}/>
          )}
          {!showForm && (
            <Form type={state} update={isUpdate} setUpdate={setIsUpdate}/>
          )}
        </AppContainer>

        <AppContainer>
          {showForm && (
            <AppBookingList list={listHotels} setListHotels={setListHotels} setIsUpdate={setIsUpdate} type={state}/>
          )}
          {!showForm && (
            <AppBookingList list={listFlights} setListFlights={setListFlights} setIsUpdate={setIsUpdate} type={state}/>
          )}
        </AppContainer>
      </AppContainerRow>
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
const bookingListHotels = [
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
const bookingListFlights = [
  {
    customerName: "mandingo",
    bookingHotel: true,
    checkInDateHotel: new Date().toUTCString(),
    checkOutDateHotel: new Date().toUTCString(),
    bookingFlight: true,
    checkInDateFlight: new Date().toUTCString(),
    checkOutDateFlight: new Date().toUTCString(),
  },
  {
    customerName: "mandingo1",
    bookingHotel: true,
    checkInDateHotel: new Date().toUTCString(),
    checkOutDateHotel: new Date().toUTCString(),
    bookingFlight: false,
    checkInDateFlight: new Date().toUTCString(),
    checkOutDateFlight: new Date().toUTCString(),
  },
  {
    customerName: "mandingo2",
    bookingHotel: true,
    checkInDateHotel: new Date().toUTCString(),
    checkOutDateHotel: new Date().toUTCString(),
    bookingFlight: false,
    checkInDateFlight: new Date().toUTCString(),
    checkOutDateFlight: new Date().toUTCString(),
  },
];
export default App;
