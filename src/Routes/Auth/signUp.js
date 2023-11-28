const express = require('express');
const userRoute = express.Router();

const { signUp } = require('../../Controllers/Auth/signUp')

userRoute.post('/signup', signUp);

module.exports = userRoute;
