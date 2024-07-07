import "./CardList.css";
import React, { useState } from "react";
export default function CardList({ booking, removeComp, editeReservation, index }) {

  /*const structuredb_F= {
    checkInDate,                          //"2024-07-05T20:16:22.876Z"
    checkOutDate,                         //"2024-07-05T20:16:22.876Z"
    createdAt,                            //"2024-07-05T20:22:38.021Z"
    customerName,                         //"1_2_Flight"
    hotelBooking,                         //null
    hotelBookingId,                       //null
    id,                                   //15
    updatedAt,                            //"2024-07-05T20:22:38.021Z"
  };

  const structuredb_H= {
    checkInDate,                          //"2024-07-05T20:16:22.876Z"
    checkOutDate,                         //"2024-07-05T20:16:22.876Z"
    createdAt,                            //"2024-07-05T20:22:38.021Z"
    customerName,                         //"1_2_Flight"
    flightBooking,                        //null
    flightBookingId,                      //null
    id,                                   //15
    updatedAt,                            //"2024-07-05T20:22:38.021Z"
  };*/

  /*const Fab= {
    "id": 11,
    "customerName": "javier",
    "checkInDate": "2024-07-03T04:26:11.1962" 
    "checkOutDate": "2024-07-03T04:26:11.1962",
    "flightBookingId": null,
    "flightBooking": {
                        "id": 11,
                        "customerName": "javier",
                        "checkInDate": "2024-07-03T04:26:11.1962",
                        "checkOutDate": "2024-07-03T04:26:11.1962",
                        "hotelBookingId": null,
                        "createdAt": "2024-07-04T17:51:00.999Z",
                        "updatedAt": "2024-07-04T17:51:00.999Z"
                      }
    }                   
    

  const Matheo= {
    "id": 1,
    "customerName": "javier",
    "checkInDate": "2024-07-03T04:26:11.196Z",
    "checkOutDate": "2024-07-03T04:26:11.196Z",
    "flightBookingId": null,
    "flightBooking": {
                        "id": 1,
                        "customerName": "javier",
                        "checkInDate": "2024-07-03T04:26:11.184Z",
                        "checkOutDate": "2024-07-03T04:26:11.184Z",
                        "hotelBookingId": 1,
                        "createdAt": null,
                        "updatedAt": null
                      }
  }                      
  
  ;*/
  // console.log("booking ✅✅✅✅", booking)
  return (
    <div className="box">
      <h2>Name : {booking.customerName}</h2>
      <h2>Check in : {booking.checkInDate}</h2>
      <h2>Check out : {booking.checkOutDate}</h2>


      {booking.hotelBookingId && (
        <>
          {booking.checkInDate ?
            (<h3>Check In Hotel:{booking.checkInDate}</h3>) :
            (<h3>Check In Flight:{booking.checkInDate}</h3>)}

          {booking.checkOutDateHotel ?
            (<h3>Check Out Hotel:{booking.checkOutDateHotel}</h3>) :
            (<h3>Check Out Flight:{booking.checkOutDateFlight}</h3>)}
        </>
      )}

      {booking.flightBookingId && (
        <>
          {booking.checkInDate ?
            (<h3>Check In Flight:{booking.checkInDate}</h3>) :
            (<h3>Check In Hotel:{booking.checkInDate}</h3>)}

          {booking.checkOutDateFlight ?
            (<h3>Check Out Flight:{booking.checkOutDateFlight}</h3>) :
            (<h3>Check Out Hotel:{booking.checkOutDateHotel}</h3>)}
        </>
      )}

      <div className="buttons_nav-btn">
        <div className="button_edit">
          <button
            className="nav-btn"
            value={"edit"}
            // onClick={() => editeReservation(index)}
            onClick={editeReservation}
          >
            Edit reservation
          </button>
        </div>
        <div className="space">
        </div>
        <div className="button_delete">
          <button
            className="nav-btn"
            value={"borrado"}
            onClick={() => removeComp(index)}//out param
            // onClick={removeComp}//out param
          >
            Delete reservation
          </button>
        </div>



      </div>
    </div>
  )
}

/*

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
        */