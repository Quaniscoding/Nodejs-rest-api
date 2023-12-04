const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getLocationByPagination } = require('../../Controllers/Location/getLocationByPagination')
userRoute.get('/getLocation/getLocationByPagination', verifyToken, getLocationByPagination);

module.exports = userRoute;