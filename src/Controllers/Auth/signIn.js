const User = require('../../Models/User.model');
const { successCodeLogin, failCode } = require('../../config/reponse');
const bcrypt = require('bcrypt');
const signIn = async (req, res) => {
    try {
        const { email, pass_word } = req.body;
        const result = await User.findOne({ email: email }, { __v: 0, _id: 0 });
        if (result) {
            const checkPass = bcrypt.compareSync(pass_word, result.pass_word);
            if (checkPass) {
                successCodeLogin(res, {
                    "username": result.username,
                    "email": result.email,
                    "phone": result.phone,
                    "birth_day": result.birth_day,
                    "gender": result.gender,
                    "role": "user",
                    "id": result.id,
                }, "Login success!")
            }
            else {
                failCode(res, "", "Password doesn't match");
            }
        }
        else {
            failCode(res, "", "User doesn't exist");
        }
    }
    catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { signIn }
