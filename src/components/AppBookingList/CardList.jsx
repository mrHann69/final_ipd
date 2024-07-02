import "./CardList.css";
import React, { useState } from "react";
export default function CardList({ booking, removeComp, index }) {

  const [editing, setEditing] = useState(false);

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
        onClick={(e) => setEditing(!editing)}
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
/* {booking.bookingFlight && (
        <>
          {booking.checkInDateFlight ?
            (<h3>Check In Flight:{booking.checkInDateFlight}</h3>) : 
            (<h3>Check In Hotel:{booking.checkInDateHotel}</h3>)}

          {booking.checkOutDateFlight ?
            (<h3>Check Out Flight:{booking.checkOutDateFlight}</h3>) : 
            (<h3>Check Out Hotel:{booking.checkOutDateHotel}</h3>)}
        </>
      )}
        
  <>
        {booking.checkInDateHotel ? <h3>Check In Hotel:{booking.checkInDateHotel}</h3> : null}
        {booking.checkOutDateHotel ? <h3>Check Out Hotel:{booking.checkOutDateHotel}</h3> : null}
        
        {booking.checkInDateFlight ? <h3>Check In Flight:{booking.checkInDateFlight}</h3> : null}
        {booking.checkOutDateFlight ? <h3>Check Out Flight:{booking.checkOutDateFlight}</h3> : null}
      </>      
      */

/**      
     prueba editing

     {editing ?( 
      {booking.bookingHotel && (
        <>
          {booking.checkInDateHotel ?
            (<input>Check In Hotel:{booking.checkInDateHotel}</input>) :
            (<input>Check In Flight:{booking.checkInDateFlight}</input>)}

          {booking.checkOutDateHotel ?
            (<input>Check Out Hotel:{booking.checkOutDateHotel}</input>) :
            (<input>Check Out Flight:{booking.checkOutDateFlight}</input>)}
        </>
      )}
      {booking.bookingFlight && (
          <>
            {booking.checkInDateFlight ?
              (<input>Check In Flight:{booking.checkInDateFlight}</input>) :
              (<input>Check In Hotel:{booking.checkInDateHotel}</input>)}

            {booking.checkOutDateFlight ?
              (<input>Check Out Flight:{booking.checkOutDateFlight}</input>) :
              (<input>Check Out Hotel:{booking.checkOutDateHotel}</input>)}
          </>
        )}
      ): (
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
      )}



 */