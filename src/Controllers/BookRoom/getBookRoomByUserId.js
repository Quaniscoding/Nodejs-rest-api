const Data = require('../../Models/BookRoom.model');
const User = require('../../Models/User.model');
const { successCode, failCode } = require('../../config/reponse');

const getBookRoomByUserId = async (req, res) => {
    const id = req.params.id;
    try {
        const checkUser = await User.findOne({ id: id })
        if (!checkUser) {
            failCode(res, "", "This user has not booked a room yet !")
        }
        else {
            const result = await Data.find({ ma_nguoi_dat: id });
            if (!result) {
                failCode(res, "", "Book room does not exist !")
            }
            else {
                successCode(res, result, "Get Book room success!")
            }
        }
    } catch (error) {
        console.log(error);
        failCode(res, "Backend error !")
    }
}
module.exports = { getBookRoomByUserId }