const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const autoIncrementModelID = require('./counterModel');

const LocationModel = new Schema({
    id: {
        type: Number,
        unique: true,
        min: 1
    },
    ten_vi_tri: {
        type: String,
    },
    tinh_thanh: {
        type: String
    },
    quoc_gia: {
        type: String
    },
    hinh_anh: {
        data: String,
        contentType: String
    }
}, {
    versionKey: false // Disable the "__v" field
});
LocationModel.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
    autoIncrementModelID('activities', this, next);
});
LocationModel.plugin(passportLocalMongoose);
const Location = mongoose.model('location', LocationModel);
module.exports = Location
