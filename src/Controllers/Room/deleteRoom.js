const { successCode, failCode, errorCode } = require("../../config/reponse");
const Data = require('../../Models/Room.model')
const deleteRoom = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Data.findOne({ id: id })
        if (!result) {
            failCode(res, "", 'Room does not exist.');
        }
        else {
            await Data.deleteOne({ id: id });
            successCode(res, "", "Delete room success!");
        }
    } catch (error) {
        errorCode(res, "Backend error !");
    }
};
module.exports = {
    deleteRoom,
};
