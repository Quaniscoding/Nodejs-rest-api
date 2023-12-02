const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const autoIncrementModelID = require('./counterModel');

const CommentSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        min: 1
    },
    ma_cong_viec: {
        type: String,
    },
    ma_nguoi_binh_luan: {
        type: Number
    },
    ngay_binh_luan: {
        type: Date,
    },
    noi_dung: {
        type: String
    },
    sao_binh_luan: {
        type: Number
    }
}, {
    versionKey: false // Disable the "__v" field
})
CommentSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }

    autoIncrementModelID('activities', this, next);
});
CommentSchema.plugin(passportLocalMongoose);
const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment

