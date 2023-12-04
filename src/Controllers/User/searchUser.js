const User = require('../../Models/User.model');
const { successCode, failCode } = require('../../config/reponse');

const searchUser = async (req, res) => {
    const keyWord = req.query.keyWord;

    try {
        const result = await User.find({ username: { $regex: new RegExp(keyWord, 'i') } });
        if (result.length > 0) {
            const mappedResult = result.map(item => ({
                username: item.username,
                email: item.email,
                phone: item.phone,
                birth_day: item.birth_day,
                gender: item.gender,
                role: item.role,
                id: item.id
            }));

            successCode(res, mappedResult, "Get user success!");
        } else {
            failCode(res, "User not found!");
        }
    } catch (error) {
        failCode(res, "Backend error!");
    }
}

module.exports = { searchUser };
