const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getRoomByPagination } = require('../../Controllers/Room/getRoomByPagination')
userRoute.get('/getRoom/getRoomByPagination', verifyToken, getRoomByPagination);

module.exports = userRoute;