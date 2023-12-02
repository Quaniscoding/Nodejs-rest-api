const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getRoom } = require('../../Controllers/Room/getRoom')
userRoute.get('/getRoom', verifyToken, getRoom);

module.exports = userRoute;