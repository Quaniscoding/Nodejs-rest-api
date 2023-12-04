const Data = require('../../Models/Location.model');
const { successCode, failCode } = require('../../config/reponse');

const getLocation = async (req, res) => {
    try {
        const result = await Data.find({}, { _id: 0, __v: 0 });
        if (result == "") {
            failCode(res, "", "List location is emty !")
        }
        else {
            successCode(res, result, "Get location success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getLocation }