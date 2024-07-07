const { DataTypes, Model } = require("sequelize");

// table name
const FLIGHT_BOOKING_TABLE = "flight_booking";

//scheme of flight booking
const FlightBookingSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerName: {
    field: "customer_name",
    type: DataTypes.STRING,
    allowNull: false,
  },
  checkInDate: {
    field: "check_in_date",
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  checkOutDate: {
    field: "check_out_date",
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  hotelBookingId: {
    field: "hotel_booking_id",
    type: DataTypes.INTEGER,
    allowNull: true,
    default: null,
    references: {
      model: "hotel_booking",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
};

// flight booking class
class FlightBooking extends Model {
  static associate(models) {
    this.hasOne(models.HotelBooking, {
      as: "hotelBooking",
      foreignKey: "id",
      onDelete: "CASCADE",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FLIGHT_BOOKING_TABLE,
      modelName: "FlightBooking",
      timestamps: true,
    };
  }
}
module.exports = {
  FLIGHT_BOOKING_TABLE,
  FlightBookingSchema,
  FlightBooking,
};
