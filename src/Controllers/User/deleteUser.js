const { successCode, failCode, errorCode } = require("../../config/reponse");
const Data = require('../../Models/User.model')
const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Data.findOne({ id: id })
        if (!result) {
            failCode(res, "", 'User does not exist.');
        }
        else {
            await Data.deleteOne({ id: id });
            successCode(res, "", "Delete User success!");
        }
    } catch (error) {
        errorCode(res, "Backend error !");
    }
};
module.exports = {
    deleteUser,
};
