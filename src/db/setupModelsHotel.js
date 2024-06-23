const { HotelBookingSchema, HotelBooking } = require('../components/hotel/model');

function setupModels(sequelize) {
    // init models
    HotelBooking.init(HotelBookingSchema, HotelBooking.config(sequelize));

    HotelBooking.associate(sequelize.models);
}

// export default setupModels;
module.exports = setupModels;
