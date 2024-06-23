import React from "react";
import {
  AppContainer,
  AppTitle,
  AppButtons,
  Button,
} from "./components/AppStyles";
import AppBookingList from "./components/AppBookingList/AppBookingList";

function App() {
  return (
    <AppContainer>
      <AppTitle>Booking App</AppTitle>
      <AppButtons>
        <Button
          type="button"
          text="Hotels"
          typeButton="hotel"
          onClick={() => console.log()}
        />
        <Button
          type="button"
          text="Flights"
          typeButton="flight"
          onClick={() => {}}
        />
      </AppButtons>
      <AppBookingList />
    </AppContainer>
  );
}

export default App;
