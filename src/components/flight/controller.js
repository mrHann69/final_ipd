const { Op } = require("sequelize");
const sequelize = require("../../db/pg.js");
const { models } = sequelize;

// Get all
async function getFlightBookings() {
  try {
    const flights = await models.FlightBooking.findAll({
      where: {
        id: {
          [Op.notIn]: sequelize.literal(
            "(SELECT hb.flight_booking_id FROM hotel_booking hb WHERE hb.flight_booking_id IS NOT NULL)",
          ),
        },
      },
    });
    if (!flights) {
      throw new Error("FlightBookings not found");
    }
    const response = await Promise.all(
      flights.map(async (it) => {
        if (it.hasHotel) {
          const hotelBooking = await models.HotelBooking.findByPk(
            it.hotelBookingId,
          );
          if (hotelBooking !== null || hotelBooking !== undefined)
            return {
              ...it.dataValues,
              hotelBooking: hotelBooking.dataValues,
            };
        }
        return it.dataValues;
      }),
    ).then((res) => res);
    return response;
  } catch (error) {
    console.error("Error retrieving flightssss 😡", error);
    throw new Error("Error retrieving flights");
  }
}
// Get One
async function getFlightBookingById(flightId) {
  try {
    const flight = await models.FlightBooking.findByPk(flightId);
    if (!flight) {
      return { status: false, msg: "flight not found" };
    }
    return { status: true, msg: "flight found", flight };
  } catch (error) {
    throw new Error("Error retrieving flight");
  }
}
// Create
async function createFlightBooking(flight) {
  try {
    if (!flight) throw new Error("no hay datos para guardar");
    let htId = null;
    const { customerName, checkInDate, checkOutDate, hasHotel } = flight;
    if (flight.bookingHotel !== undefined) {
      const ht = {
        customerName: flight.customerName,
        hasFlight: false,
        ...flight.bookingHotel,
      };
      const response = await models.HotelBooking.create(ht);
      if (response) htId = response.id;
    }
    const newFlightBooking = await models.FlightBooking.create({
      customerName,
      checkInDate,
      checkOutDate,
      hasHotel,
      hotelBookingId: htId,
    });
    return newFlightBooking;
  } catch (error) {
    throw new Error("Error creating flight");
  }
}

// Update
async function updateFlightBooking(flightId, flightData) {
  try {
    const flight = await models.FlightBooking.findByPk(flightId);
    if (flight === null) {
      return { status: false, msg: "flight not found" };
    }
    const response = await flight.update(flightData, {
      where: { id: flightId },
    });
    if (flightData.bookingHotel) {
      const aux = flightData.bookingHotel;
      if (flightData.customerName) aux.customerName = flightData.customerName;
      await models.HotelBooking.update(aux, {
        where: { id: flight.hotelBookingId },
      });
    }
    return { status: true, msg: "flight updated", response };
  } catch (error) {
    throw new Error("Error updating flight");
  }
}

// Delete
async function deleteFlightBooking(flightId) {
  const t = await sequelize.transaction();
  try {
    const flight = await models.FlightBooking.findByPk(flightId);
    if (!flight) {
      return { status: false, msg: "flight not found" };
    }

    await models.FlightBooking.destroy({
      where: { id: flight.id },
      transaction: t,
    });

    await models.HotelBooking.destroy({
      where: { id: flight.hotelBookingId },
      transaction: t,
    });

    await t.commit();
    return { status: true, msg: "flight deleted" };
  } catch (error) {
    console.log("Error deleting a flight 🚩", error);
    await t.rollback();
    throw new Error("Error deleting flight 🚩", error);
  }
}
const flightController = {
  createFlightBooking,
  getFlightBookings,
  getFlightBookingById,
  updateFlightBooking,
  deleteFlightBooking,
};

module.exports = flightController;
