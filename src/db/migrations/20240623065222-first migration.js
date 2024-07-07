"use strict";
const { FLIGHT_BOOKING_TABLE } = require("../../components/flight/model");
const { HOTEL_BOOKING_TABLE } = require("../../components/hotel/model");

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(FLIGHT_BOOKING_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      customerName: {
        field: "customer_name",
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      checkInDate: {
        field: "check_in_date",
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      checkOutDate: {
        field: "check_out_date",
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      hotelBookingId: {
        field: "hotel_booking_id",
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        default: null,
      },
      hasHotel: {
        field: "hashotel",
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });

    await queryInterface.createTable(HOTEL_BOOKING_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      customerName: {
        field: "customer_name",
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      checkInDate: {
        field: "check_in_date",
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      checkOutDate: {
        field: "check_out_date",
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      flightBookingId: {
        field: "flight_booking_id",
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        default: null,
      },
      hasFlight: {
        field: "hasflight",
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });
    await queryInterface.changeColumn(FLIGHT_BOOKING_TABLE, "hotelBookingId", {
      field: "hotel_booking_id",
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
      default: null,
      references: {
        model: HOTEL_BOOKING_TABLE,
        key: "id",
      },
    });
    await queryInterface.changeColumn(HOTEL_BOOKING_TABLE, "flightBookingId", {
      field: "flight_booking_id",
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
      default: null,
      references: {
        model: FLIGHT_BOOKING_TABLE,
        key: "id",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(HOTEL_BOOKING_TABLE);
    await queryInterface.dropTable(FLIGHT_BOOKING_TABLE);
  },
};
