import React, { useState, useEffect } from "react";

import "./Form.css";

export default function Form({ type, update, setUpdate }) {
  const [customerName, setCustomerName] = useState("");

  const [checkInDateHotel, setCheckInDateHotel] = useState("");
  const [checkOutDateHotel, setCheckOutDateHotel] = useState("");

  const [checkInDateFlight, setCheckInDateFlight] = useState("");
  const [checkOutDateFlight, setCheckOutDateFlight] = useState("");

  const [stateCheckbox, setStateCheckbox] = useState(false);

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

  const handleSubmit = (e, tp) => {
    e.preventDefault();
    const structure = {
      customerName,
      checkInDateHotel,
      checkOutDateHotel,
      checkInDateFlight,
      checkOutDateFlight,
    };
    if (update.state) {
      if (update.type === "hotel") {
        // mandar al serivdor → PATCH /api/v1/hotel
      }
      if (update.type === "flight") {
        // mandar al serivdor → PATCH /pi/v1/flight
      }
      setUpdate({
        state: false,
        type: "",
        booking: {},
      });
      return;
    } else {
      if (tp === "hotel") {
        structure.bookingHotel = true;
        structure.bookingFlight = stateCheckbox;
        return;
        // mandar al serivdor → POST /api/v1/hotel
      }
      structure.bookingHotel = stateCheckbox;
      structure.bookingFlight = true;
      // mandar al serivdor → POST /pi/v1/flight
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
              <div>
                <label htmlFor="checkflight">Fight Reservation ? </label>
                <input
                  type="checkbox"
                  name="checkflight"
                  onChange={() => setStateCheckbox(!stateCheckbox)}
                />
              </div>
              {stateCheckbox && (
                <>
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
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="form-table">
              <h1>Flight Bakiña</h1>
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
              <div>
                <label htmlFor="checkhotel">Hotel Reservation ? </label>
                <input
                  type="checkbox"
                  name="checkhotel"
                  onChange={() => setStateCheckbox(!stateCheckbox)}
                />
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
