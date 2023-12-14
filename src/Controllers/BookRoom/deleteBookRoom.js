const { successCode, failCode, errorCode } = require("../../config/reponse");
const Data = require('../../Models/BookRoom.model')
const deleteBookRoom = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Data.deleteOne({ _id: id })
        if (!result) {
            failCode(res, "", 'Book room does not exist.');
        }
        else {
            successCode(res, "", "Delete book room success!");
        }
    } catch (error) {
        errorCode(res, "Backend error !");
    }
};
module.exports = {
    deleteBookRoom,
};
