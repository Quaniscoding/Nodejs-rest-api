const { failCode, successCode, errorCode } = require('../../config/reponse');
const Room = require('../../Models/Room.model');
const User = require('../../Models/User.model')
const createRoom = async (req, res) => {
    const { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri } = req.body;
    const dataUser = await User.findOne({ id: khach });
    if (!dataUser) {
        failCode(res, "", "User is not axist!")
    }
    else {
        try {
            const dataRoom = await Room.create({
                ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, ti_vi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri
            })
            if (dataRoom == "") {
                failCode(res, "", "Create room fail!")
            }
            else {
                successCode(res, "", "Create room success !")
            }
        } catch (error) {
            errorCode(res, "Backend error")
        }
    }

}
module.exports = { createRoom }