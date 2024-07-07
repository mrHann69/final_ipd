const sequelize = require("../../db/pg.js");
const { models } = sequelize;

// Get all
async function getHotelBookings() {
  try {
    const hotels = await models.HotelBooking.findAll({
      include: ["flightBooking"],
    });
    if (!hotels) {
      throw new Error("HotelBookings not found");
    }
    return hotels;
  } catch (error) {
    throw new Error("Error retrieving hotels");
  }
}
// Get One
async function getHotelBookingById(hotelId) {
  try {
    const hotel = await models.HotelBooking.findByPk(hotelId);
    if (!hotel) {
      return { status: false, msg: "hotel not found" };
    }
    return { status: true, msg: "hotel found", hotel };
  } catch (error) {
    throw new Error("Error retrieving hotel");
  }
}
// Create
async function createHotelBooking(hotelData) {
  try {
    if (!hotelData) throw new Error("no hay datos para guardar");
    let fbId = null;
    const { customerName, checkInDate, checkOutDate } = hotelData;
    if (hotelData.bookingFlight !== undefined) {
      const fb = {
        customerName: hotelData.customerName,
        ...hotelData.bookingFlight,
      };
      const response = await models.FlightBooking.create(fb);
      if (response) fbId = response.id;
    }
    const newHotelBooking = await models.HotelBooking.create({
      customerName,
      checkInDate,
      checkOutDate,
      flightBookingId: fbId,
    });
    return newHotelBooking;
  } catch (error) {
    throw new Error("Error creating hotel");
  }
}

// Update
async function updateHotelBooking(hotelId, hotelData) {
  try {
    const hotel = await models.HotelBooking.findByPk(hotelId);
    if (hotel === null) {
      return { status: false, msg: "hotel not found" };
    }
    const response = await hotel.update(hotelData, { where: { id: hotelId } });
    if (hotelData.bookingFlight) {
      const aux = hotelData.bookingFlight;
      if (hotelData.customerName) aux.customerName = hotelData.customerName;
      await models.FlightBooking.update(aux, {
        where: { id: hotel.flightBookingId },
      });
    }
    return { status: true, msg: "hotel updated", response };
  } catch (error) {
    throw new Error("Error updating hotel");
  }
}

// Delete
async function deleteHotelBooking(hotelId) {
  const t = await sequelize.transaction();
  try {
    const hotel = await models.HotelBooking.findByPk(hotelId);
    if (!hotel) {
      return { status: false, msg: "hotel not found" };
    }

    await models.HotelBooking.destroy({
      where: { id: hotel.id },
      transaction: t,
    });

    await models.FlightBooking.destroy({
      where: { id: hotel.flightBookingId },
      transaction: t,
    });

    await t.commit();
    return { status: true, msg: "hotel deleted" };
  } catch (error) {
    console.log("Error deleting a hotel 🚩", error);
    await t.rollback();
    throw new Error("Error deleting hotel 🚩", error);
  }
}
const hotelController = {
  createHotelBooking,
  getHotelBookings,
  getHotelBookingById,
  updateHotelBooking,
  deleteHotelBooking,
};

module.exports = hotelController;
