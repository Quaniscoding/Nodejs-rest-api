// 200 , 400 , 500
const { parseToken } = require('../middlewares/baseToken')
const date = new Date();
const sucessCode = (res, data, message) => {
    res.status(200).json({
        "statusCode": 200,
        message,
        content: data,
        DateTime: date
    });
}
const sucessCodeLogin = (res, data, message) => {
    res.status(200).json({
        "statusCode": 200,
        message,
        content: {
            "User": data,
            "Token": parseToken(data),
            DateTime: date
        }
    });
}
//400
const failCode = (res, data, message) => {
    res.status(400).json({
        message,
        content: data,
        DateTime: date
    });
}
//500
const errorCodeNew = (res, message) => {
    res.status(500).send({ statusCode: 500, message: "Xảy ra lỗi chưa xử lý !", content: "The number of rows provided for a FETCH clause must be greater then zero.", dateTime: date });
}
const errorCode = (res, message) => {
    res.status(500).send({ statusCode: 500, message: "Lỗi backend !", dateTime: date });
}
module.exports = {
    sucessCode,
    sucessCodeLogin,
    failCode,
    errorCode,
    errorCodeNew
}