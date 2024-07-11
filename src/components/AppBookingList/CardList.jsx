import React from "react";
import {
  ButonContainer,
  Button,
  CardContainer,
  CardInformation,
} from "./CardListStyles";
export default function CardList({
  booking,
  removeComp,
  editeReservation,
  index,
}) {
  return (
    <CardContainer>
      <CardInformation>
        <h3>Name : {booking.customerName}</h3>
        <span>Check in : {booking.checkInDate}</span>
        <span>Check out : {booking.checkOutDate}</span>

        {booking.hotelBookingId && (
          <>
            {booking.checkInDate ? (
              <span>Check In Hotel:{booking.checkInDate}</span>
            ) : (
              <span>Check In Flight:{booking.checkInDate}</span>
            )}

            {booking.checkOutDateHotel ? (
              <span>Check Out Hotel:{booking.checkOutDate}</span>
            ) : (
              <span>Check Out Flight:{booking.checkOutDate}</span>
            )}
          </>
        )}

        {booking.flightBookingId && (
          <>
            {booking.checkInDate ? (
              <span>Check In Flight:{booking.checkInDate}</span>
            ) : (
              <span>Check In Hotel:{booking.checkInDate}</span>
            )}

            {booking.checkOutDateFlight ? (
              <span>Check Out Flight:{booking.checkOutDate}</span>
            ) : (
              <span>Check Out Hotel:{booking.checkOutDate}</span>
            )}
          </>
        )}
      </CardInformation>

      <ButonContainer>
        <Button
          className="nav-btn"
          value={"edit"}
          // onClick={() => editeReservation(index)}
          onClick={editeReservation}
        >
          Edit reservation
        </Button>

        <Button
          className="nav-btn"
          value={"borrado"}
          onClick={() => removeComp(index)}
          typebutton={true}
        >
          Delete reservation
        </Button>
      </ButonContainer>
    </CardContainer>
  );
}
