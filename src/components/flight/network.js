
const express = require('express');
const FlightController = require('./controller.js')
const router = express.Router();


router.get("/flights",
    async (req, res) => {
        try {
            const flights = await FlightController.getFlightBookings();
            res.json(flights);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    })
// /flight?id=123
router.get('/flight',
    async (req, res) => {
        try {
            const getHotel = await FlightController.getFlightBookingById(req.query.id);
            if (getHotel.status) return res.status(200).json(getHotel);
            return res.status(404).json(getHotel)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

router.post('/flight',
    async (req, res) => {
        try {
            const newHotel = await FlightController.createFlightBooking(req.body);
            res.status(201).json(newHotel);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
// /flight?id=123
router.put('/flight',
    async (req, res) => {
        try {
            const hotelUpdated = await FlightController.updateFlightBooking(req.query.id, req.body);
            if (hotelUpdated.status) return res.status(200).json(hotelUpdated);
            return res.status(404).json({msg: 'flight no actualizado'});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// /flight?id=123
router.delete('/flight',
    async (req, res) => {
        try {
            const message = await FlightController.deleteFlightBooking(req.query.id);
            if (message.status) return res.status(200).json({ msg: message.msg }).end();
            return res.status(404).json({ msg: message.msg }).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

module.exports = router;