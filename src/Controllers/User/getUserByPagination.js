const User = require('../../Models/User.model');
const { successCode, failCode, errorCode, errorCodeNew } = require('../../config/reponse');
const getUserByPagination = async (req, res) => {
    const { pageIndex, pageSize, keyWord } = req.query;
    try {
        if (!pageSize || isNaN(Number(pageSize)) || Number(pageSize) <= 0) {
            errorCodeNew(res, "The pageSize must be a positive number greater than zero.");
            return;
        }
        let query = {};
        if (keyWord) {
            query.username = keyWord;
        }
        let skip = 0;
        if (pageIndex) {
            skip = (Number(pageIndex) - 1) * Number(pageSize);
        }
        const result = await User.find(query)
            .skip(skip)
            .limit(Number(pageSize));
        if (result.length === 0) {
            failCode(res, "User empty!");
        } else {
            successCode(res, {
                pageIndex,
                pageSize,
                totalRow: result.length,
                result
            }, "Get User success!");
        }
    } catch (error) {
        errorCode(res, "Backend error!");
    }
};
module.exports = {
    getUserByPagination
};
