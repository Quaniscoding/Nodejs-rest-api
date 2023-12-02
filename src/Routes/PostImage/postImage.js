const express = require('express');
const { postImage } = require('../../Controllers/PostImage/postImage');
const { verifyToken } = require('../../middlewares/baseToken');
const { upload } = require('../../middlewares/upload');

const userRoute = express.Router();
userRoute.post("/postImage", upload.single("dataUpload"), verifyToken, postImage)
module.exports = userRoute;
