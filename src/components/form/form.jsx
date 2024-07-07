import React, { useState, useEffect } from "react";

import "./Form.css";
import { createHotelsReservations, updateHotelsReservations } from "../../services/hotel.service";
import { createFlightsReservations, updateFlightsReservations } from "../../services/flight.service";


export default function Form({ type, update, setUpdate }) {
  const [customerName, setCustomerName] = useState("");

  const [checkInDateHotel, setCheckInDateHotel] = useState("");
  const [checkOutDateHotel, setCheckOutDateHotel] = useState("");

  const [checkInDateFlight, setCheckInDateFlight] = useState("");
  const [checkOutDateFlight, setCheckOutDateFlight] = useState("");

  const [stateCheckbox, setStateCheckbox] = useState(false);
  
  const clearForm = ()=>{
    setCustomerName("");
    setCheckInDateHotel("");
    setCheckOutDateHotel("");
    setCheckInDateFlight("");
    setCheckOutDateFlight("");
    setStateCheckbox(false);
  }

  useEffect(() => {
    if (update.state) {
      const { booking } = update;
      setCustomerName(booking.customerName);
      setCheckInDateHotel(booking.checkInDateHotel);
      setCheckOutDateHotel(booking.checkOutDateHotel);
      setCheckInDateFlight(booking.checkInDateFlight);
      setCheckOutDateFlight(booking.checkOutDateFlight);
      setStateCheckbox(booking.bookingFlight && booking.bookingHotel);
    }
  }, [update, update.state]);

  const handleSubmit = async (e, tp) => {
    e.preventDefault();
    if (update.state) {
      if (update.type === "hotel") {
        // mandar al serivdor → PATCH /api/v1/hotel
        await updateHotelsReservations(update.booking.id, update.booking);
      }
      if (update.type === "flight") {
        // mandar al serivdor → PATCH /pi/v1/flight
        await updateFlightsReservations(update.booking.id, update.booking);//structure
      }
      setUpdate({
        state: false,
        type: "",
        booking: {},
      });
      clearForm();
      return;
    } else {
      if (tp === "hotel") {
        const structure = {
          customerName,
          checkInDate: checkInDateHotel,
          checkOutDate: checkOutDateHotel,
        };

        if(stateCheckbox){
          structure.bookingFlight = {
              checkInDate: checkInDateFlight,
              checkOutDate: checkOutDateFlight,
            }
        }
        // mandar al serivdor → POST /api/v1/hotel
        console.log("structure : 🖕🖕🖕🖕🖕", structure)
        await createHotelsReservations(structure);
        clearForm();
        return;
      } else {
        const structure = {
          customerName,
            checkInDate: checkInDateFlight,
            checkOutDate: checkOutDateFlight,
        };

        if(stateCheckbox){
          structure.bookingHotel = {
              checkInDate: checkInDateHotel,
              checkOutDate: checkOutDateHotel,
            }
        }
        // mandar al serivdor → POST /pi/v1/flight
        console.log("structure : 🌳🌳🌳🌳", structure)
        await createFlightsReservations(structure);
        clearForm();
      }
    }
    return;
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e, type)}>
        {type === "hotel" ? (
          <>
            <div className="form-table">
              <h1>Hotel Bukinham</h1>
              <div className="form-cell">
                <label>Name:</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-cell">
                <label>Check In:</label>
                <input
                  type="date"
                  value={checkInDateHotel}
                  onChange={(e) => setCheckInDateHotel(e.target.value)}
                  required
                />
              </div>
              <div className="form-cell">
                <label>Check Out:</label>
                <input
                  type="date"
                  value={checkOutDateHotel}
                  onChange={(e) => setCheckOutDateHotel(e.target.value)}
                  required
                />
              </div>
              <div className="boxcheck_fix">
                <label htmlFor="checkflight">Fight Reservation ? </label>
                <input
                  type="checkbox"
                  name="checkflight"
                  onChange={() => setStateCheckbox(!stateCheckbox)}
                />
              </div>
              <div className="form-cell">
                <label> </label>
              </div>
              {stateCheckbox && (
                <>
                  <div className="form-cell">
                    <label>Check In:</label>
                    <input
                      type="date"
                      value={checkInDateFlight}//checkInDate
                      onChange={(e) => setCheckInDateFlight(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-cell">
                    <label>Check Out:</label>
                    <input
                      type="date"
                      value={checkOutDateFlight}
                      onChange={(e) => setCheckOutDateFlight(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="form-table">
              <h1>Flight Reservation</h1>
              <div className="form-cell">
                <label>Name:</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-cell">
                <label>Check In:</label>
                <input
                  type="date"
                  value={checkInDateFlight}
                  onChange={(e) => setCheckInDateFlight(e.target.value)}
                  required
                />
              </div>
              <div className="form-cell">
                <label>Check Out:</label>
                <input
                  type="date"
                  value={checkOutDateFlight}
                  onChange={(e) => setCheckOutDateFlight(e.target.value)}
                  required
                />
              </div>
              <div className="boxcheck_fix">
                <label htmlFor="checkhotel">Hotel Reservation ? </label>
                <input
                  type="checkbox"
                  name="checkhotel"
                  onChange={() => setStateCheckbox(!stateCheckbox)}
                />
              </div>
              <div className="form-cell">
                <label> </label>
              </div>
              {stateCheckbox && (
                <>
                  <div className="form-cell">
                    <label>Check In:</label>
                    <input
                      type="date"
                      value={checkInDateHotel}
                      onChange={(e) => setCheckInDateHotel(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-cell">
                    <label>Check Out:</label>
                    <input
                      type="date"
                      value={checkOutDateHotel}
                      onChange={(e) => setCheckOutDateHotel(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}
            </div>
          </>
        )}
        <div className="form-row">
          <button type="submit">
            Accept {type === "hotel" ? "Hotel" : "Flight"}
          </button>
        </div>
      </form>
    </div>
  );
}
