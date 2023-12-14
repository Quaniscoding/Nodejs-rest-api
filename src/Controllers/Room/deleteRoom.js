const { successCode, failCode, errorCode } = require("../../config/reponse");
const Data = require('../../Models/Room.model')
const deleteRoom = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Data.findOne({ _id: id })
        if (!result) {
            failCode(res, "", 'Room does not exist.');
        }
        else {
            await Data.findByIdAndDelete(id);
            successCode(res, result, "Delete room success!");
        }
    } catch (error) {
        errorCode(res, "Backend error !");
    }
};
module.exports = {
    deleteRoom,
};
