const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const autoIncrementModelID = require('./counterModel');

const ImageModel = new Schema({
    id: {
        type: Number,
        unique: true,
        min: 1
    },
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }

}, {
    versionKey: false // Disable the "__v" field
})
ImageModel.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
    autoIncrementModelID('activities', this, next);
});
ImageModel.plugin(passportLocalMongoose);
const Comment = mongoose.model('image', ImageModel);
module.exports = Comment

