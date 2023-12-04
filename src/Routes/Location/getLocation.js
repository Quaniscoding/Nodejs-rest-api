const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getLocation } = require('../../Controllers/Location/getLocation')
userRoute.get('/getLocation', verifyToken, getLocation);

module.exports = userRoute;