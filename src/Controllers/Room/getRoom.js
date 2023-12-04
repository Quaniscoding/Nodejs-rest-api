const Data = require('../../Models/Room.model');
const { successCode, failCode } = require('../../config/reponse');

const getRoom = async (req, res) => {
    try {
        const result = await Data.find({}, { _id: 0, __v: 0 });
        if (result == "") {
            failCode(res, "", "List Room is emty !")
        }
        else {
            successCode(res, result, "Get room success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getRoom }