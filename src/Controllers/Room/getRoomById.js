const Room = require('../../Models/Room.model');
const { successCode, failCode } = require('../../config/reponse');

const getRoomById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Room.findOne({ id: id });
        if (!result) {
            failCode(res, "", "Room does not exist !")
        }
        else {
            successCode(res, result, "Get room success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getRoomById }