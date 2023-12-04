const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getBookRoomById } = require('../../Controllers/BookRoom/getBookRoomById')
userRoute.get('/getBookRoomById/:id', verifyToken, getBookRoomById);

module.exports = userRoute;