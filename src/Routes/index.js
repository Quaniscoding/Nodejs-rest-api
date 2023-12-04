const express = require('express');

const signUp = require('./Auth/signUp');
const signIn = require('./Auth/signIn');

const getComment = require('./Comment/getComment')
const postComment = require('./Comment/createComment');
const deleteComment = require('./Comment/deleteComment');
const updateComment = require('./Comment/updateComment');

const getRoom = require('./Room/getRoom')
const getRoomById = require('./Room/getRoomById')
const getRoomByLocation = require('./Room/getRoomByLocation')
const getRoomByPagination = require('./Room/getRoomByPagination')
const createRoom = require('./Room/createRoom')
const deleteRoom = require('./Room/deleteRoom');
const updateRoom = require('./Room/updateRoom');
const postImage = require('./Room/postImage');

const getUser = require('./User/getUser')
const deleteUser = require('./User/deleteUser')
const getUserById = require('./User/getUserById')
const searchUser = require('./User/searchUser')
const createUser = require('./User/createUser')
const updateUser = require('./User/updateUser')
const getUserByPagination = require('./User/getUserByPagination')
const postAvatarUser = require('./User/postAvatarUser')

const createBookRoom = require('./BookRoom/createBookRoom')
const deleteBookRoom = require('./BookRoom/deleteBookRoom')
const getBookRoom = require('./BookRoom/getBookRoom')
const updateBookRoom = require('./BookRoom/updateBookRoom')
const getBookRoomById = require('./BookRoom/getBookRoomById')
const getBookRoomByUserId = require('./BookRoom/getBookRoomByUserId')

const getLocation = require('./Location/getLocation')
const getLocationById = require('./Location/getLocationById')
const getLocationByPagination = require('./Location/getLocationByPagination')
const createLocation = require('./Location/createLocation')
const deleteLocation = require('./Location/deleteLocation');
const updateLocation = require('./Location/updateLocation');
const postLocationImage = require('./Location/postLocationImage');

const rootRoute = express.Router();

//auth 
rootRoute.use('/auth', signUp)
rootRoute.use('/auth', signIn)

//comment
rootRoute.use('/', getComment)
rootRoute.use('/', postComment)
rootRoute.use('/', deleteComment)
rootRoute.use('/', updateComment)

//room
rootRoute.use('/', getRoom)
rootRoute.use('/', getRoomById)
rootRoute.use('/', getRoomByLocation)
rootRoute.use('/', getRoomByPagination)
rootRoute.use('/', createRoom)
rootRoute.use('/', deleteRoom)
rootRoute.use('/', updateRoom)
rootRoute.use('/', postImage)

//user
rootRoute.use('/', getUser)
rootRoute.use('/', deleteUser)
rootRoute.use('/', getUserById)
rootRoute.use('/', searchUser)
rootRoute.use('/', createUser)
rootRoute.use('/', updateUser)
rootRoute.use('/', getUserByPagination)
rootRoute.use('/', postAvatarUser)


//bookRoom
rootRoute.use('/', createBookRoom)
rootRoute.use('/', getBookRoom)
rootRoute.use('/', deleteBookRoom)
rootRoute.use('/', updateBookRoom)
rootRoute.use('/', getBookRoomById)
rootRoute.use('/', getBookRoomByUserId)

//location
rootRoute.use('/', getLocation)
rootRoute.use('/', getLocationById)
rootRoute.use('/', getLocationByPagination)
rootRoute.use('/', createLocation)
rootRoute.use('/', deleteLocation)
rootRoute.use('/', updateLocation)
rootRoute.use('/', postLocationImage)

module.exports = rootRoute;