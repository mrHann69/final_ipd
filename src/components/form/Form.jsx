import React, { useState, useEffect } from "react";

import {
  createHotelsReservations,
  updateHotelsReservations,
} from "../../services/hotel.service";
import {
  createFlightsReservations,
  updateFlightsReservations,
} from "../../services/flight.service";
import {
  FormMain,
  FormContainer,
  FormFields,
  Field,
  FormButtom,
} from "./FormStyles";

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

  const handleSubmit = async (e, tp) => {
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
        await updateHotelsReservations(update.booking.id, structure);
      }
      if (update.type === "flight") {
        // mandar al serivdor → PATCH /pi/v1/flight
        await updateFlightsReservations(update.booking.id, structure);
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
        // mandar al serivdor → POST /api/v1/hotel
        await createHotelsReservations(structure);
        return;
      }
      structure.bookingHotel = stateCheckbox;
      structure.bookingFlight = true;
      // mandar al serivdor → POST /pi/v1/flight
      await createFlightsReservations(structure);
    }
    return;
  };

  return (
    <div>
      <FormMain onSubmit={(e) => handleSubmit(e, type)} className="form-table">
        {type === "hotel" ? (
          <>
            <FormContainer>
              <h1>Hotel Reservation</h1>
              <FormFields>
                <Field>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <label>Check In:</label>
                  <input
                    type="date"
                    value={checkInDateHotel}
                    onChange={(e) => setCheckInDateHotel(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <label>Check Out:</label>
                  <input
                    type="date"
                    value={checkOutDateHotel}
                    onChange={(e) => setCheckOutDateHotel(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <label htmlFor="checkflight">Fight Reservation ? </label>
                  <input
                    type="checkbox"
                    name="checkflight"
                    onChange={() => setStateCheckbox(!stateCheckbox)}
                  />
                </Field>
              </FormFields>
              {stateCheckbox && (
                <FormFields>
                  <Field>
                    <label>Check In:</label>
                    <input
                      type="date"
                      value={checkInDateFlight}
                      onChange={(e) => setCheckInDateFlight(e.target.value)}
                      required
                    />
                  </Field>
                  <Field>
                    <label>Check Out:</label>
                    <input
                      type="date"
                      value={checkOutDateFlight}
                      onChange={(e) => setCheckOutDateFlight(e.target.value)}
                      required
                    />
                  </Field>
                </FormFields>
              )}
            </FormContainer>
          </>
        ) : (
          <>
            <FormContainer>
              <h1>Flight Reservation</h1>
              <FormFields>
                <Field>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <label>Check In:</label>
                  <input
                    type="date"
                    value={checkInDateFlight}
                    onChange={(e) => setCheckInDateFlight(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <label>Check Out:</label>
                  <input
                    type="date"
                    value={checkOutDateFlight}
                    onChange={(e) => setCheckOutDateFlight(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <label htmlFor="checkhotel">Hotel Reservation ? </label>
                  <input
                    type="checkbox"
                    name="checkhotel"
                    onChange={() => setStateCheckbox(!stateCheckbox)}
                  />
                </Field>
                {stateCheckbox && (
                  <>
                    <Field>
                      <label>Check In:</label>
                      <input
                        type="date"
                        value={checkInDateHotel}
                        onChange={(e) => setCheckInDateHotel(e.target.value)}
                        required
                      />
                    </Field>
                    <Field>
                      <label>Check Out:</label>
                      <input
                        type="date"
                        value={checkOutDateHotel}
                        onChange={(e) => setCheckOutDateHotel(e.target.value)}
                        required
                      />
                    </Field>
                  </>
                )}
              </FormFields>
            </FormContainer>
          </>
        )}

        <FormButtom type="submit">
          Accept {type === "hotel" ? "Hotel" : "Flight"}
        </FormButtom>
      </FormMain>
    </div>
  );
}
