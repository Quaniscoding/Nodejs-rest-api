const { failCode, successCode } = require('../../config/reponse');
const Data = require('../../Models/BookRoom.model');

const updateBookRoom = async (req, res) => {
    try {
        const id = req.params.id;
        const options = { new: true };
        const { ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat } = req.body;
        const update = await Data.findOneAndUpdate({ id: id }, { ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat }, options)
        if (!update) {
            failCode(res, "", "Book room does not exist !");
        }
        else {
            successCode(res, update, "Update book room success !")
        }
    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { updateBookRoom }