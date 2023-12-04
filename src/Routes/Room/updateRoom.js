const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { updateRoom } = require('../../Controllers/Room/updateRoom')
userRoute.put('/updateRoom/:id', verifyToken, updateRoom);

module.exports = userRoute;


