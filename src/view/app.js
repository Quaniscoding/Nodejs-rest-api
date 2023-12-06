const express = require('express'),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const createError = require('http-errors');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static("."));
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT);
require('../config/initDB')();
const rootRoute = require('../Routes');
const { tags } = require("../../docs/tags.js");
const { components } = require('../../docs/components/components.js');
//auth
const { "/api/auth/signin": signIn } = require("../../docs/auth/signIn");
const { "/api/auth/signup": signUp } = require("../../docs/auth/signUp");
//comment
const { "/api/getComment": getComment } = require("../../docs/Comment/getComment.js");
const { "/api/createComment": createComment } = require("../../docs/Comment/createComment.js");
const { "/api/deleteComment/{id}": deleteComment } = require("../../docs/Comment/deleteComment.js");
const { "/api/getCommentByRoomId/{roomId}": getCommentByRoomId } = require("../../docs/Comment/getCommentByRoomId.js");
const { "/api/updateComment/{id}": updateComment } = require("../../docs/Comment/updateComment.js");
//bookRoom
const { "/api/getBookRoom": getBookRoom } = require("../../docs/BookRoom/getBookRoom.js");
const { "/api/createBookRoom": createBookRoom } = require("../../docs/BookRoom/createBookRoom.js");
const { "/api/deleteBookRoom/{id}": deleteBookRoom } = require("../../docs/BookRoom/deleteBookRoom.js");
const { "/api/updateBookRoom/{id}": updateBookRoom } = require("../../docs/BookRoom/updateBookRoom.js");
const { "/api/getBookRoomByUserId/{id}": getBookRoomByUserId } = require("../../docs/BookRoom/getBookRoomByUserId.js");
const { "/api/getBookRoomById/{id}": getBookRoomById } = require("../../docs/BookRoom/getBookRoomById.js");
//user
const { "/api/getUser": getUser } = require("../../docs/User/getUser.js");
const { "/api/getUserById/{id}": getUserById } = require("../../docs/User/getUserById.js");
const { "/api/searchUser": getSearchUser } = require("../../docs/User/getSearchUser.js");
const { "/api/getUser/getUserByPagination?{pageIndex}?{pageSize}": getUserByPagination } = require("../../docs/User/getUserByPagination.js");
const { "/api/createUser": createUser } = require("../../docs/User/createUser.js");
const { "/api/postAvatarUser/{id}": postAvatarUser } = require("../../docs/User/postAvatarUser.js");
const { "/api/deleteUser/{id}": deleteUser } = require("../../docs/User/deleteUser.js");
const { "/api/updateUser/{id}": updateUser } = require("../../docs/User/updateUser.js");
//room
const { "/api/getRoom": getRoom } = require('../../docs/Room/getRoom.js');
const { "/api/createRoom": createRoom } = require('../../docs/Room/createRoom.js');
const { "/api/createRoomImage/{id}": createRoomImage } = require("../../docs/Room/postImage.js")
const { "/api/updateRoom/{id}": updateRoom } = require("../../docs/Room/updateRoom.js")
const { "/api/deleteRoom/{id}": deleteRoom } = require("../../docs/Room/deleteRoom.js")
const { "/api/getRoom/getRoomByLocation/{id}": getRoomByLocation } = require("../../docs/Room/getRoomByLocation.js")
const { "/api/getRoom/getRoomByPagination?{pageIndex}?{pageSize}": getRoomByPagination } = require("../../docs/Room/getRoomByPagination.js")
const { "/api/getRoomById/{id}": getRoomById } = require("../../docs/Room/getRoomById.js")
//location
const { "/api/getLocation": getLocation } = require('../../docs/Location/getLocation.js');
const { "/api/createLocation": createLocation } = require('../../docs/Location/createLocation.js');
const { "/api/getLocation/getLocationByPagination?{pageIndex}?{pageSize}": getLocationByPagination } = require('../../docs/Location/getLocationByPagination.js');
const { "/api/getLocationById/{id}": getLocationById } = require('../../docs/Location/getLocationById.js');
const { "/api/updateLocation/{id}": updateLocation } = require('../../docs/Location/updateLocation.js');
const { "/api/deleteLocation/{id}": deleteLocation } = require('../../docs/Location/deleteLocation.js');
const { "/api/createLocationImage/{id}": createLocationImage } = require('../../docs/Location/createLocationImage');



const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      "version": "v1",
      "title": "Airbnb",
    },
    tags,
    components,
    paths: {
      //auth
      "/api/auth/signin": signIn,
      "/api/auth/signup": signUp,
      //comment
      "/api/getComment": getComment,
      "/api/getCommentByRoomId/{roomId}": getCommentByRoomId,
      "/api/createComment": createComment,
      "/api/updateComment/{id}": updateComment,
      "/api/deleteComment/{id}": deleteComment,
      //bookRoom
      "/api/getBookRoom": getBookRoom,
      "/api/getBookRoomByUserId/{id}": getBookRoomByUserId,
      "/api/getBookRoomById/{id}": getBookRoomById,
      "/api/createBookRoom": createBookRoom,
      "/api/updateBookRoom/{id}": updateBookRoom,
      "/api/deleteBookRoom/{id}": deleteBookRoom,
      //room
      "/api/getRoom": getRoom,
      "/api/getRoom/getRoomByLocation/{id}": getRoomByLocation,
      "/api/getRoom/getRoomByPagination?{pageIndex}?{pageSize}": getRoomByPagination,
      "/api/getRoomById/{id}": getRoomById,
      "/api/createRoom": createRoom,
      "/api/createRoomImage/{id}": createRoomImage,
      "/api/deleteRoom/{id}": deleteRoom,
      "/api/updateRoom/{id}": updateRoom,
      //user
      "/api/getUser": getUser,
      "/api/getUserById/{id}": getUserById,
      "/api/searchUser": getSearchUser,
      "/api/getUser/getUserByPagination?{pageIndex}?{pageSize}": getUserByPagination,
      "/api/createUser": createUser,
      "/api/updateUser/{id}": updateUser,
      "/api/postAvatarUser/{id}": postAvatarUser,
      "/api/deleteUser/{id}": deleteUser,
      //location
      "/api/getLocation": getLocation,
      "/api/getLocation/getLocationByPagination?{pageIndex}?{pageSize}": getLocationByPagination,
      "/api/getLocationById/{id}": getLocationById,
      "/api/createLocation": createLocation,
      "/api/deleteLocation/{id}": deleteLocation,
      "/api/updateLocation/{id}": updateLocation,
      "/api/createLocationImage/{id}": createLocationImage
    }
  },
  apis: ["../routes/index.js", "../controllers/Auth/*.js"],
};
const specs = swaggerJsdoc(options);
app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);
app.use("/api", rootRoute)

