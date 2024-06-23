
const express = require('express');
const hotelController = require('./controller.js')
const router = express.Router();


router.get("/hotels",
    async (req, res) => {
        try {
            const hotels = await hotelController.getHotelBookings();
            res.json(hotels);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    })
// /hotel?id=123
router.get('/hotel',
    async (req, res) => {
        try {
            const getHotel = await hotelController.getHotelBookingById(req.query.id);
            if (getHotel.status) return res.status(200).json(getHotel);
            return res.status(404).json(getHotel)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

router.post('/hotel',
    async (req, res) => {
        try {
            const newHotel = await hotelController.createHotelBooking(req.body);
            res.status(201).json(newHotel);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
// /hotel?id=123
router.put('/hotel',
    async (req, res) => {
        try {
            const hotelUpdated = await hotelController.updateHotelBooking(req.query.id, req.body);
            if (hotelUpdated.status) return res.status(200).json(hotelUpdated);
            return res.status(404).json({msg: 'hotel no actualizado'});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

// /hotel?id=123
router.delete('/hotel',
    async (req, res) => {
        try {
            const message = await hotelController.deleteHotelBooking(req.query.id);
            if (message.status) return res.status(200).json({ msg: message.msg }).end();
            return res.status(404).json({ msg: message.msg }).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

module.exports = router;