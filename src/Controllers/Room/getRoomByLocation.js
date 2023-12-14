const Room = require('../../Models/Room.model');
const { successCode, failCode } = require('../../config/reponse');

const getRoomByLocation = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Room.find({ ma_vi_tri: id });
        if (data == "") {
            failCode(res, "", "Room does not exist !")
        }
        else {
            successCode(res, data, "Get room success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getRoomByLocation }