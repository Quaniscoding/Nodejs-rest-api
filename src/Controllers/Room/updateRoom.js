const { failCode, successCode } = require('../../config/reponse');
const Data = require('../../Models/Room.model');

const updateRoom = async (req, res) => {
    try {
        const id = req.params.id;
        const options = { new: true };
        const { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri } = req.body;
        const update = await Data.findByIdAndUpdate(id, { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri }, options)
        if (!update) {
            failCode(res, "", "Room does not exist !");
        }
        else {
            successCode(res, update, "Update Room success !")
        }
    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { updateRoom }