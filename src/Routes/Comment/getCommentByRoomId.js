const express = require('express');
const userRoute = express.Router();
const { verifyToken } = require('../../middlewares/baseToken');

const { getCommentByRoomId } = require('../../Controllers/Comment/getCommentByRoomId')
userRoute.get('/getCommentByRoomId/:id', verifyToken, getCommentByRoomId);

module.exports = userRoute;