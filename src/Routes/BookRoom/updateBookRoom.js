const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { updateBookRoom } = require('../../Controllers/BookRoom/updateBookRoom')
userRoute.put('/updateBookRoom/:id', verifyToken, updateBookRoom);

module.exports = userRoute;


