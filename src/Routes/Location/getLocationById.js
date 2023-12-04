const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getLocationById } = require('../../Controllers/Location/getLocationById')
userRoute.get('/getLocationById/:id', verifyToken, getLocationById);

module.exports = userRoute;