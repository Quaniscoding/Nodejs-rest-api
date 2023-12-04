const Room = require('../../Models/Room.model')
const { successCode, failCode, errorCode, errorCodeNew } = require('../../config/reponse');
const getRoomByPagination = async (req, res) => {
    const { pageIndex, pageSize, keyWord } = req.query;
    try {
        if (!pageSize || isNaN(Number(pageSize)) || Number(pageSize) <= 0) {
            errorCodeNew(res, "The pageSize must be a positive number greater than zero.");
            return;
        }
        let query = {};
        if (keyWord) {
            query.ten_phong = keyWord;
        }
        let skip = 0;
        if (pageIndex) {
            skip = (Number(pageIndex) - 1) * Number(pageSize);
        }
        const result = await Room.find(query, { _id: 0 })
            .skip(skip)
            .limit(Number(pageSize));
        if (result.length === 0) {
            failCode(res, "Room empty!");
        } else {
            successCode(res, {
                pageIndex,
                pageSize,
                totalRow: result.length,
                result
            }, "Get Room success!");
        }
    } catch (error) {
        console.error(error);
        errorCode(res, "Backend error!");
    }
}
module.exports = {
    getRoomByPagination
}
