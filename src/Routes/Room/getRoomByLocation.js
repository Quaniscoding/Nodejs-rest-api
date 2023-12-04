const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getRoomByLocation } = require('../../Controllers/Room/getRoomByLocation')
userRoute.get('/getRoom/getRoomByLocation/:id', verifyToken, getRoomByLocation);

module.exports = userRoute;