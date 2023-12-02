const User = require('../../Models/User.model');
const { successCodeLogin, failCode } = require('../../config/reponse');
const bcrypt = require('bcrypt');
const signIn = async (req, res) => {
    try {
        const { email, pass_word } = req.body;
        const user = await User.findOne({ email: email }, { __v: 0, _id: 0 });
        if (user) {
            const checkPass = bcrypt.compareSync(pass_word, user.pass_word);
            if (checkPass) {
                successCodeLogin(res, user, "Login success!")
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
