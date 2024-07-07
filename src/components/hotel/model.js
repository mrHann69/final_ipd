const { DataTypes, Model } = require("sequelize");

// table name
const HOTEL_BOOKING_TABLE = "hotel_booking";

//scheme of hotel booking
const HotelBookingSchema = {
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
  flightBookingId: {
    field: "flight_booking_id",
    type: DataTypes.INTEGER,
    allowNull: true,
    default: null,
    references: {
      model: "flight_booking",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
};

// hotel booking class
class HotelBooking extends Model {
  static associate(models) {
    this.hasOne(models.FlightBooking, {
      foreignKey: "id",
      as: "flightBooking",
      onDelete: "CASCADE",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: HOTEL_BOOKING_TABLE,
      modelName: "HotelBooking",
      timestamps: false,
    };
  }
}
module.exports = {
  HOTEL_BOOKING_TABLE,
  HotelBookingSchema,
  HotelBooking,
};
