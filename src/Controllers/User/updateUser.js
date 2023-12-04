const { failCode, successCode } = require('../../config/reponse');
const User = require('../../Models/User.model');

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const options = { new: true };
        const { name, email, phone, birthday, gender, role } = req.body;
        const update = await User.findOneAndUpdate(id, { name, email, phone, birthday, gender, role }, options)
        if (!update) {
            failCode(res, "", "User does not exist !");
        }
        else {
            successCode(res, {
                "username": update.username,
                "email": update.email,
                "phone": update.phone,
                "birth_day": update.birth_day,
                "gender": update.gender,
                "role": update.role,
                "id": update.id
            }, "Update User success !")
        }
    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { updateUser }