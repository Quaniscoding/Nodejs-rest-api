const BookRoom = require('../../Models/BookRoom.model');
const { successCode, failCode } = require('../../config/reponse');

const getBookRoom = async (req, res) => {
    try {
        const dataComment = await BookRoom.find({}, { _id: 0, __v: 0 });
        if (dataComment == "") {
            failCode(res, "", "List BookRoom is emty !")
        }
        else {
            successCode(res, dataComment, "Get BookRoom success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getBookRoom }