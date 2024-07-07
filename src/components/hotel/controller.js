// import product from "./model.js";
// const product = require( "./model.js");

const sequelize = require("../../db/pg.js");
const { models } = sequelize;

// Get all
async function getHotelBookings() {
  try {
    const hotels = await models.HotelBooking.findAll({
      include: ['flightBooking']
    });
    if (!hotels) {
      throw new Error("HotelBookings not found");
    }
    console.log("🔥🔥🔥🔥", hotels)
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
    if(!hotelData) throw new Error("no hay datos para guardar");
    let fbId = null;
    const {customerName, checkInDate, checkOutDate} = hotelData
    if(hotelData.bookingFlight!==undefined){
      const fb = {
        customerName: hotelData.customerName,
        ...hotelData.bookingFlight
      }
      const response = await models.FlightBooking.create(fb);
      if(response) fbId = response.id;
    }
    
    const newHotelBooking = await models.HotelBooking.create({
      customerName, 
      checkInDate, 
      checkOutDate,
      flightBookingId: fbId
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
    return { status: true, msg: "hotel updated", response };
  } catch (error) {
    throw new Error("Error updating hotel");
  }
}

// Delete
async function deleteHotelBooking(hotelId) {
  try {
    const hotel = await models.HotelBooking.findByPk(hotelId);
    if (!hotel) {
      return { status: false, msg: "hotel not found" };
    }
    await hotel.destroy();
    return { status: true, msg: "hotel deleted" };
  } catch (error) {
    throw new Error("Error deleting hotel");
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
