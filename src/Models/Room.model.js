const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const autoIncrementModelID = require('./counterModel');

const RoomSchema = new Schema({
    ten_phong: {
        type: String,
    },
    khach: {
        type: String
    },
    phong_ngu: {
        type: Number
    },
    giuong: {
        type: Number,
    },
    phong_tam: {
        type: Number,
    },
    mo_ta: {
        type: String,
    },
    gia_tien: {
        type: Number,
    },
    may_giat: {
        type: Boolean,
    },
    ban_la: {
        type: Boolean,
    },
    ti_vi: {
        type: Boolean
    },
    dieu_hoa: {
        type: Boolean
    },
    wifi: {
        type: Boolean,
    },
    bep: {
        type: Boolean,
    },
    do_xe: {
        type: Boolean,
    },
    ho_boi: {
        type: Boolean,
    },
    ban_ui: {
        type: Boolean,
    },
    hinh_anh: {
        data: String,
        contentType: String
    },
    ma_vi_tri: {
        type: String,
    },
}, {
    versionKey: false // Disable the "__v" field
});
RoomSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
    autoIncrementModelID('activities', this, next);
});
RoomSchema.plugin(passportLocalMongoose);
const Room = mongoose.model('room', RoomSchema);
module.exports = Room
