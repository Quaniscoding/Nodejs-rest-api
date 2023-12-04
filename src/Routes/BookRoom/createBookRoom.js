const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { createBookRoom } = require('../../Controllers/BookRoom/createBookRoom.js');
userRoute.post('/createBookRoom', verifyToken, createBookRoom);

module.exports = userRoute;


