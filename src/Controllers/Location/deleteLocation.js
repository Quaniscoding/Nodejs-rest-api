const { successCode, failCode, errorCode } = require("../../config/reponse");
const Data = require('../../Models/Location.model')
const deleteLocation = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Data.findOne({ id: id })
        if (!result) {
            failCode(res, "", 'Location does not exist.');
        }
        else {
            await Data.deleteOne({ id: id });
            successCode(res, "", "Delete location success!");
        }
    } catch (error) {
        errorCode(res, "Backend error !");
    }
};
module.exports = {
    deleteLocation,
};
