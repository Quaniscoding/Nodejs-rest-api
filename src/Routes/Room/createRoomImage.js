const express = require('express');
const { createRoomImage } = require('../../Controllers/Room/createRoomImage');
const { verifyToken } = require('../../middlewares/baseToken');
const { upload } = require('../../middlewares/upload');

const userRoute = express.Router();
userRoute.put("/createRoomImage/:id", upload.single("dataUpload"), verifyToken, createRoomImage)
module.exports = userRoute;
