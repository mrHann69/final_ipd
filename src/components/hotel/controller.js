// import product from "./model.js"; 
// const product = require( "./model.js");

const sequelize = require('../../db/pgdatabase.js')
const { models } = sequelize;


// Get all
async function getHotelBookings() {
    try {
      const hotels = await models.HotelBooking.findAll();
      if (!hotels) {
        throw new Error('HotelBookings not found');
      }
      return hotels;
    } catch (error) {
      throw new Error('Error retrieving hotels');
    }
  }
// Get One
async function getHotelBookingById(hotelId) {
  try {
    const hotel = await models.HotelBooking.findByPk(hotelId);
    if (!hotel) {
      return {status:false, msg: 'hotel not found'}; 
    }
    return {status:true, msg: 'hotel found',hotel};
  } catch (error) {
    throw new Error('Error retrieving hotel');
  }
}
// Create
async function createHotelBooking(hotelData) {
  try {
    const newHotelBooking = await models.HotelBooking.create(hotelData);
    return newHotelBooking;
  } catch (error) {
    throw new Error('Error creating hotel');
  }
}

// Update
async function updateHotelBooking(hotelId, hotelData) {
  try {
    const hotel = await models.HotelBooking.findByPk(hotelId);
    if (hotel===null) {
      return {status:false, msg: 'hotel not found'};
    }
    const response = await hotel.update(hotelData,{where:{id:hotelId}});
    return {status:true, msg:'hotel updated', response}
  } catch (error) {
    throw new Error('Error updating hotel');
  }
}

// Delete
async function deleteHotelBooking(hotelId) {
  try {
    const hotel = await models.HotelBooking.findByPk(hotelId);
    if (!hotel) {
      return {status:false,msg: 'hotel not found'};
    }
    await hotel.destroy();
    return {status:true, msg:'hotel deleted'}
  } catch (error) {
    throw new Error('Error deleting hotel');
  }
}
const hotelController = { createHotelBooking, getHotelBookings, getHotelBookingById, updateHotelBooking, deleteHotelBooking };

module.exports = hotelController;