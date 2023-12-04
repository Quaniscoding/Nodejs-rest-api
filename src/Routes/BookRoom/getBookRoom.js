const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getBookRoom } = require('../../Controllers/BookRoom/getBookRoom')
userRoute.get('/getBookRoom', verifyToken, getBookRoom);

module.exports = userRoute;