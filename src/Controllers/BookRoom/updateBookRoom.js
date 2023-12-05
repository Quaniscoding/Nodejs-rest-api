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
            successCode(res, {
                ma_phong: ma_phong, ngay_den: ngay_den, ngay_di: ngay_di, so_luong_khach: so_luong_khach, ma_nguoi_dat: ma_nguoi_dat
            }, "Update book room success !")
        }
    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { updateBookRoom }