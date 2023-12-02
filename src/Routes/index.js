const express = require('express');

const signUp = require('./Auth/signUp');
const signIn = require('./Auth/signIn');
const getComment = require('./Comment/getComment')
const postComment = require('./Comment/createComment');
const deleteComment = require('./Comment/deleteComment');
const updateComment = require('./Comment/updateComment');
const getRoom = require('./Room/getRoom')
const createRoom = require('./Room/createRoom')
const postImage = require('./PostImage/postImage')
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
rootRoute.use('/', createRoom)

//image
rootRoute.use('/', postImage)
module.exports = rootRoute;