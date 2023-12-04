const User = require('../../Models/User.model');
const { successCode, failCode } = require('../../config/reponse');
const getUser = async (req, res) => {
    try {
        const result = await User.find({}, { _id: 0 })
        successCode(res, result, "Get list user success!")
    }
    catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { getUser }
