const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const autoIncrementModelID = require('./counterModel');

const BookRoomModel = new Schema({
    id: {
        type: Number,
        unique: true,
        min: 1
    },
    ma_phong: {
        type: Number,
    },
    ngay_den: {
        type: String
    },
    ngay_di: {
        type: String
    },
    so_luong_khach: {
        type: Number,
    },
    ma_nguoi_dat: {
        type: Number,
    }
}, {
    versionKey: false // Disable the "__v" field
});
BookRoomModel.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
    autoIncrementModelID('activities', this, next);
});
BookRoomModel.plugin(passportLocalMongoose);
const BookRoom = mongoose.model('BookRoom', BookRoomModel);
module.exports = BookRoom
