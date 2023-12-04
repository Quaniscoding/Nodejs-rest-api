const { failCode, successCode, errorCode } = require('../../config/reponse');
const BookRoom = require('../../Models/BookRoom.model');
const Room = require('../../Models/Room.model')
const createBookRoom = async (req, res) => {
    const { ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat } = req.body;
    const dataRoom = await Room.findOne({ id: ma_phong });
    console.log(dataRoom);
    if (!dataRoom) {
        failCode(res, "", "Room is not axist!")
    }
    else {
        try {
            const dataRoom = await BookRoom.create({
                ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat
            })
            if (dataRoom == "") {
                failCode(res, "", "Create book room fail!")
            }
            else {
                successCode(res, "", "Create book room success !")
            }
        } catch (error) {
            errorCode(res, "Backend error")
        }
    }

}
module.exports = { createBookRoom }