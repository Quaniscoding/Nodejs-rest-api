const Data = require('../../Models/Location.model');
const { successCode, failCode } = require('../../config/reponse');

const getLocationById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Data.findOne({ id: id });
        if (!result) {
            failCode(res, "", "Location does not exist !")
        }
        else {
            successCode(res, result, "Get location success!")
        }

    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getLocationById }