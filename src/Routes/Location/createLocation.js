const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { createLocation } = require('../../Controllers/Location/createLocation')
userRoute.post('/createLocation', verifyToken, createLocation);

module.exports = userRoute;


