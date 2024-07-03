// import product from "./model.js";
// const product = require( "./model.js");

const sequelize = require("../../db/pg.js");
const { models } = sequelize;

// Get all
async function getFlightBookings() {
  try {
    const flights = await models.FlightBooking.findAll({
      include: ["hotelBooking"],
    });
    if (!flights) {
      throw new Error("FlightBookings not found");
    }
    return flights.map((it) => it.dataValues);
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
async function createFlightBooking(flightData) {
  try {
    const newFlightBooking = await models.FlightBooking.create(flightData);
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
    return { status: true, msg: "flight updated", response };
  } catch (error) {
    throw new Error("Error updating flight");
  }
}

// Delete
async function deleteFlightBooking(flightId) {
  try {
    const flight = await models.FlightBooking.findByPk(flightId);
    if (!flight) {
      return { status: false, msg: "flight not found" };
    }
    await flight.destroy();
    return { status: true, msg: "flight deleted" };
  } catch (error) {
    throw new Error("Error deleting flight");
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
