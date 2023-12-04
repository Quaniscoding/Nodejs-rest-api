const express = require('express');

const { deleteRoom } = require('../../Controllers/Room/deleteRoom');
const { verifyToken } = require('../../middlewares/baseToken');
const userRoute = express.Router();

userRoute.delete("/deleteRoom/:id", verifyToken, deleteRoom)
module.exports = userRoute;
