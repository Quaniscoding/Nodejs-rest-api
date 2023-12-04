const Data = require('../../Models/BookRoom.model');
const { successCode, failCode } = require('../../config/reponse');

const getBookRoomById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Data.findOne({ id: id });
        if (!result) {
            failCode(res, "", "Book room does not exist !")
        }
        else {
            successCode(res, result, "Get Book room success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getBookRoomById }