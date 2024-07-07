import React, { useEffect, useState } from "react";
import {
  AppContainer,
  AppTitle,
  AppButtons,
  Button,
  AppContainerRow,
  AppContainerForm,
} from "./components/AppStyles";
import AppBookingList from "./components/AppBookingList/AppBookingList";
import Form from "./components/form/Form.jsx";
import { getHotelsReservations } from "./services/hotel.service.js";
import { getFlightsReservations } from "./services/flight.service.js";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [state, setState] = useState("hotel");

  const [listHotels, setListHotels] = useState([]);
  const [listFlights, setListFlights] = useState([]);

  const [isUpdate, setIsUpdate] = useState({ state: false });

  const handleShowForm = (type) => {
    setState(type);
    setShowForm(type === "hotel" ? true : false);
  };

  useEffect(() => {
    (async () => {
      setListHotels(await getHotelsReservations());
    })();
    (async () => {
      setListFlights(await getFlightsReservations());
    })();
  }, [isUpdate, showForm, state]);

  return (
    <AppContainer>
      <AppTitle>Booking App</AppTitle>
      <AppContainerRow>
        <AppContainer>
          <AppButtons>
            <Button
              type="button"
              typebutton="hotel"
              onClick={() => handleShowForm("hotel")}
            >
              Hotel
            </Button>
            <Button
              type="button"
              typebutton="flight"
              onClick={() => handleShowForm("flight")}
            >
              Flight
            </Button>
          </AppButtons>
          <AppContainerForm>
            {showForm && (
              <Form type={state} update={isUpdate} setUpdate={setIsUpdate} />
            )}
            {!showForm && (
              <Form type={state} update={isUpdate} setUpdate={setIsUpdate} />
            )}
          </AppContainerForm>
        </AppContainer>

        <AppContainer>
          {showForm && (
            <AppBookingList
              list={listHotels}
              setListHotels={setListHotels}
              setIsUpdate={setIsUpdate}
              type={state}
            />
          )}
          {!showForm && (
            <AppBookingList
              list={listFlights}
              setListFlights={setListFlights}
              setIsUpdate={setIsUpdate}
              type={state}
            />
          )}
        </AppContainer>
      </AppContainerRow>
    </AppContainer>
  );
}
export default App;
