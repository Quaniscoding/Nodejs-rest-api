const Room = require('../../Models/Room.model');
const { successCode, failCode } = require('../../config/reponse');

const getRoomByLocation = async (req, res) => {
    const id = req.params.id;
    try {
        const dataComment = await Room.find({ ma_vi_tri: id });
        if (dataComment == "") {
            failCode(res, "", "Room does not exist !")
        }
        else {
            successCode(res, dataComment, "Get room success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getRoomByLocation }