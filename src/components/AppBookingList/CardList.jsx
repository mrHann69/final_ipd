import "./CardList.css";
import React, { useState } from "react";
export default function CardList({ booking, removeComp, editeReservation, index }) {

  return (
    <div>
      <h2>Name: {booking.customerName}</h2>

      {booking.bookingHotel && (
        <>
          {booking.checkInDateHotel ?
            (<h3>Check In Hotel:{booking.checkInDateHotel}</h3>) : 
            (<h3>Check In Flight:{booking.checkInDateFlight}</h3>)}

          {booking.checkOutDateHotel ?
            (<h3>Check Out Hotel:{booking.checkOutDateHotel}</h3>) : 
            (<h3>Check Out Flight:{booking.checkOutDateFlight}</h3>)}
        </>
      )}

      {booking.bookingFlight && (
        <>
          {booking.checkInDateFlight ?
            (<h3>Check In Flight:{booking.checkInDateFlight}</h3>) : 
            (<h3>Check In Hotel:{booking.checkInDateHotel}</h3>)}

          {booking.checkOutDateFlight ?
            (<h3>Check Out Flight:{booking.checkOutDateFlight}</h3>) : 
            (<h3>Check Out Hotel:{booking.checkOutDateHotel}</h3>)}
        </>
      )}

      <button
        className="nav-btn"
        value={"edit"}
        onClick={() => editeReservation(index)}
      >
        Edit reservation
      </button>

      <button
        className="nav-btn"
        value={"borrado"}
        onClick={(e) => removeComp(index)}
      >
        Delete reservation
      </button>
    </div>
  )
}