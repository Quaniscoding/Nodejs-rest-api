const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { createRoom } = require('../../Controllers/Room/createRoom')
userRoute.post('/createRoom', verifyToken, createRoom);

module.exports = userRoute;


