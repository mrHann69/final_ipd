const { DataTypes, Model } = require( 'sequelize');


// table name
const FLIGHT_BOOKING_TABLE = 'flight_booking';

//scheme of flight booking
const FlightBookingSchema = {
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
  hotelBookingId: {
    field: 'hotel_booking_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    default:null,
    references:{
      model: 'hotel_booking',
      key: 'id'
    },
  },
  hotelCustomerName: {
    field: 'hotel_customer_name',
    type: DataTypes.STRING,
    allowNull: true,
    default:null
  },
  hotelBookingDate: {
    field: 'hotel_booking_date',
    type: DataTypes.DATE,
    allowNull: true,
    default:null
  }
}

// flight booking class
class FlightBooking extends Model {
  static associate(models) {
    this.hasMany(models.HotelBooking, {
      foreignKey: "hotelBookingId",
      as: 'hotelBooking',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FLIGHT_BOOKING_TABLE,
      modelName: 'FlightBooking',
      timestamps: false
    }
  }
}
module.exports= { 
  FLIGHT_BOOKING_TABLE, 
  FlightBookingSchema, 
  FlightBooking 
}; 