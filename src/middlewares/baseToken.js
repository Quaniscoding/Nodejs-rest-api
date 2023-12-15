// const jwt = require('jsonwebtoken');
// const parseToken = (data) => {
//     let token = jwt.sign({ data }, "bimat", { algorithm: "HS256", expiresIn: "10d" }); //hs256
//     return token;
// }
// const date = new Date();

// const checkToken = (token) => {
//     try {
//         let checkT = jwt.verify(token, "bimat");
//         if (checkT) {
//             return { checkData: true, message: "" };
//         } else {
//             return { checkData: false, message: "Invalid token !" };

//         }
//     } catch (error) {
//         return { checkData: false, message: error.message };
//     }
// }
// const verifyToken = (req, res, next) => {
//     const { token } = req.headers;
//     const verifyToken = checkToken(token);
//     if (verifyToken.checkData) {
//         next();
//     } else {
//         res.status(401).send({
//             "status": 401,
//             "Content": "Token has expired !",
//             "DateTime": date
//         });
//     }
// }
// module.exports = {
//     parseToken,
//     checkToken,
//     verifyToken
// }
const jwt = require('jsonwebtoken');

const generateToken = (data, expiresIn = '10d') => {
    const secretKey = process.env.JWT_SECRET || 'defaultSecret';
    return jwt.sign({ data }, secretKey, { algorithm: 'HS256', expiresIn });
};

const checkToken = (token) => {
    try {
        const secretKey = process.env.JWT_SECRET || 'defaultSecret';
        const decodedToken = jwt.verify(token, secretKey);

        // Check token expiration explicitly
        if (decodedToken.exp < Date.now() / 1000) {
            return { checkData: false, message: 'Token has expired!' };
        }

        return { checkData: true, message: '' };
    } catch (error) {
        return { checkData: false, message: error.message };
    }
};

const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    const verifyTokenResult = checkToken(token);

    if (verifyTokenResult.checkData) {
        next();
    } else {
        res.status(401).send({
            status: 401,
            content: verifyTokenResult.message,
            dateTime: new Date(),
        });
    }
};

module.exports = {
    generateToken,
    checkToken,
    verifyToken,
};
