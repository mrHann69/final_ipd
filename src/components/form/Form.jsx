import React, { useState } from 'react';

import "./Form.css";

export default function Form({ type, list, setList }) {

  const [customerName, setCustomerName] = useState('');

  //const [bookingHotel, setBookingHotel] = useState(false);
  const [checkInDateHotel, setCheckInDateHotel] = useState('');
  const [checkOutDateHotel, setCheckOutDateHotel] = useState('');

  //const [bookingFlight, setBookingFlight] = useState(false);
  const [checkInDateFlight, setCheckInDateFlight] = useState('');
  const [checkOutDateFlight, setCheckOutDateFlight] = useState('');

  const [stateCheckbox, setStateCheckbox] = useState(false);

  const handleSubmitHotel = (e) => {
    e.preventDefault();
    const estructura = {
      customerName,
      bookingHotel:true,
      checkInDateHotel,
      checkOutDateHotel,
      bookingFlight:stateCheckbox,
      checkInDateFlight,
      checkOutDateFlight
    }
    console.log("Datos estructura", estructura)
    setList([estructura, ...list])
    console.log("Datos Hotel", e.target)
  };

  const handleSubmitFlight = (e) => {
    e.preventDefault();
    const estructura = {
      customerName,
      bookingHotel:stateCheckbox,
      checkInDateHotel,
      checkOutDateHotel,
      bookingFlight:true,
      checkInDateFlight,
      checkOutDateFlight
    }
    setList([estructura, ...list])
    console.log("Datos Flight", e.target)
  };

  return (
    <div className="form-container">
      <form onSubmit={type === "hotel" ? (handleSubmitHotel) : (handleSubmitFlight)} >
        {type === "hotel"? (
          <>
            <div className="form-table">
              <h1>
                Hotel Bukinham
              </h1>
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
              <div >
                <label htmlFor="checkflight">Fight Reservation ? </label>
                <input type="checkbox" name="checkflight" onChange={
                  () => setStateCheckbox(!stateCheckbox)} />
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
            <div className="form-row">
              <button type="submit">Accept H</button>
            </div>
          </>
        ) : (
          <>
            <div className="form-table">
              <h1>
                Flight Bakiña
              </h1>
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
              <div >
                <label htmlFor="checkhotel">Hotel Reservation ? </label>
                <input type="checkbox" name="checkhotel" onChange={
                  () => setStateCheckbox(!stateCheckbox)} />
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
            <div className="form-row">
              <button type="submit">Accept F</button>
            </div>
          </>
        )}

      </form>
    </div>
  );
}