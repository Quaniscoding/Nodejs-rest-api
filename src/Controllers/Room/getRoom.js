const Room = require('../../Models/Room.model');
const { successCode, failCode } = require('../../config/reponse');

const getRoom = async (req, res) => {
    try {
        const dataComment = await Room.find({}, { _id: 0, __v: 0 });
        if (dataComment == "") {
            failCode(res, "", "List Room is emty !")
        }
        else {
            successCode(res, dataComment, "Get list comment success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getRoom }