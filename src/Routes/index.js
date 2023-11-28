const express = require('express');

const signUp = require('./Auth/signUp');
const signIn = require('./Auth/signIn');

const rootRoute = express.Router();

//auth 
rootRoute.use('/auth', signUp)

rootRoute.use('/auth', signIn)

module.exports = rootRoute;