const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { deleteLocation } = require('../../Controllers/Location/deleteLocation')
userRoute.delete('/deleteLocation/:id', verifyToken, deleteLocation);

module.exports = userRoute;


