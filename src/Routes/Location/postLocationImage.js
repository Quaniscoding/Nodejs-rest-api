const express = require('express');
const { postLocationImage } = require('../../Controllers/Location/postLocationImage');
const { verifyToken } = require('../../middlewares/baseToken');
const { upload } = require('../../middlewares/upload');

const userRoute = express.Router();
userRoute.put("/postLocationImage/:id", upload.single("dataUpload"), verifyToken, postLocationImage)
module.exports = userRoute;
