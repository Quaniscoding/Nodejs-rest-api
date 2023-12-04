const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getRoomById } = require('../../Controllers/Room/getRoomById')
userRoute.get('/getRoomById/:id', verifyToken, getRoomById);

module.exports = userRoute;