const { failCode, successCode } = require('../../config/reponse');
const Data = require('../../Models/Room.model');

const updateRoom = async (req, res) => {
    try {
        const id = req.params.id;
        const options = { new: true };
        const { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri } = req.body;
        const update = await Data.findOneAndUpdate({ id: id }, { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri }, options)
        if (!update) {
            failCode(res, "", "Room does not exist !");
        }
        else {
            successCode(res, {
                ten_phong: ten_phong, khach: khach, phong_ngu: phong_ngu, giuong: giuong, phong_tam: phong_tam, mo_ta: mo_ta, gia_tien: gia_tien, may_giat: may_giat, ban_la: ban_la, ti_vi: ti_vi, dieu_hoa: dieu_hoa, wifi: wifi, bep: bep, do_xe: do_xe, ho_boi: ho_boi, ban_ui: ban_ui, hinh_anh: hinh_anh, ma_vi_tri: ma_vi_tri
            }, "Update Room success !")
        }
    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { updateRoom }