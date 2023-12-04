const express = require('express');

const { deleteBookRoom } = require('../../Controllers/BookRoom/deleteBookRoom');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

userRoute.delete("/deleteBookRoom/:id", verifyToken, deleteBookRoom)
module.exports = userRoute;
