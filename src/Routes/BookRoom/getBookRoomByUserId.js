const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getBookRoomByUserId } = require('../../Controllers/BookRoom/getBookRoomByUserId')
userRoute.get('/getBookRoomByUserId/:id', verifyToken, getBookRoomByUserId);

module.exports = userRoute;