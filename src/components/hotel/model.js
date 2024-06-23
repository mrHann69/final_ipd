const { DataTypes, Model } = require( 'sequelize');


// table name
const HOTEL_BOOKING_TABLE = 'hotel_booking';

//scheme of hotel booking
const HotelBookingSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerName: {
    field: 'customer_name',
    type: DataTypes.STRING,
    allowNull: false
  },
  bookingDate: {
    field: 'booking_date',
    type: DataTypes.DATE,
    allowNull: false
  },
  flightBookingId: {
    field: 'flight_booking_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    default:null
  },
  flightCustomerName: {
    field: 'flight_customer_name',
    type: DataTypes.STRING,
    allowNull: true,
    default:null
  },
  flightCustomerName: {
    field: 'flight_booking_date',
    type: DataTypes.DATE,
    allowNull: true,
    default:null
  }
}

// hotel booking class
class HotelBooking extends Model {
  static associate(models) {

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: HOTEL_BOOKING_TABLE,
      modelName: 'HotelBooking',
      timestamps: false
    }
  }
}
module.exports= { HOTEL_BOOKING_TABLE, HotelBookingSchema, HotelBooking }; 