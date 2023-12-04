const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { updateLocation } = require('../../Controllers/Location/updateLocation')
userRoute.put('/updateLocation/:id', verifyToken, updateLocation);

module.exports = userRoute;


