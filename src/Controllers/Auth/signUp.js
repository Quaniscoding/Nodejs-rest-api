
const bcrypt = require('bcrypt');

const User = require('../../Models/User.model');
const { failCode, sucessCode, errorCode } = require('../../config/reponse');


const signUp = async (req, res, next) => {
    // try {
    const { username, email, pass_word, phone, birth_day, gender, role } = req.body;
    let passWordHash = bcrypt.hashSync(pass_word, 10);
    const checkEmailExist = await User.findOne({ email: email });
    if (checkEmailExist) {
        failCode(res, "", "Email is exist !")
    }
    else {
        const dataSignUp = await User.create({
            username: username,
            email: email,
            pass_word: passWordHash,
            phone: phone,
            birth_day: birth_day,
            gender: gender,
            role: role
        });
        sucessCode(res, dataSignUp, "Create acount success !")
    }

    // } catch (error) {
    //     errorCode(res, "Lỗi Backend")
    // }
}
module.exports = { signUp }
