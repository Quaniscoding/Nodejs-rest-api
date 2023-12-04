const Data = require('../../Models/Comments.model');
const { successCode, failCode } = require('../../config/reponse');

const getCommentByRoomId = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Data.find({ ma_phong: id }, { _id: 0 });
        if (!result) {
            failCode(res, "", "Room does not exist !")
        }
        else {
            successCode(res, result, "Get comment success!")
        }
    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getCommentByRoomId }