const { FlightBookingSchema, FlightBooking } = require('../components/flight/model');

function setupModels(sequelize) {
    // init models
    FlightBooking.init(FlightBookingSchema, FlightBooking.config(sequelize));

    FlightBooking.associate(sequelize.models);
}

// export default setupModels;
module.exports = setupModels;
