const express = require('express');
const { postImage } = require('../../Controllers/Room/postImage');
const { verifyToken } = require('../../middlewares/baseToken');
const { upload } = require('../../middlewares/upload');

const userRoute = express.Router();
userRoute.put("/postImage/:id", upload.single("dataUpload"), verifyToken, postImage)
module.exports = userRoute;
