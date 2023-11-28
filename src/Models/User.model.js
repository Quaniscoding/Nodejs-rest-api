const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String, require: true
    },
    pass_word: {
        type: String, require: true
    },
    phone: {
        type: Number,
    },
    birth_day: {
        type: String,
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
    },
    avatar: {
        type: String,
    },
});
UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('user', UserSchema);
module.exports = User
