'use strict';
const { DataTypes } = require('sequelize');
const { FLIGHT_BOOKING_TABLE } = require('../../components/flight/model');
const { HOTEL_BOOKING_TABLE } = require('../../components/hotel/model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(FLIGHT_BOOKING_TABLE,
      {
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
          default: null
        },
        hotelCustomerName: {
          field: 'hotel_customer_name',
          type: DataTypes.STRING,
          allowNull: true,
          default: null
        },
        hotelCustomerName: {
          field: 'hotel_booking_date',
          type: DataTypes.DATE,
          allowNull: true,
          default: null
        }
      }
    );

    await queryInterface.createTable(HOTEL_BOOKING_TABLE,
      {
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
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(HOTEL_BOOKING_TABLE);
    await queryInterface.dropTable(FLIGHT_BOOKING_TABLE);
  }
};

