const { HotelBookingSchema, HotelBooking } = require('../components/hotel/model');
const { FlightBookingSchema, FlightBooking } = require('../components/flight/model');

function setupModels(sequelize) {
    // init models
    HotelBooking.init(HotelBookingSchema, HotelBooking.config(sequelize));
    FlightBooking.init(FlightBookingSchema, FlightBooking.config(sequelize));

    HotelBooking.associate(sequelize.models);
    FlightBooking.associate(sequelize.models);
}

// export default setupModels;
module.exports = setupModels;
