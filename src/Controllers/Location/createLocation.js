const { failCode, successCode, errorCode } = require('../../config/reponse');
const Data = require('../../Models/Location.model');

const createLocation = async (req, res) => {
    const { ten_vi_tri, tinh_thanh, quoc_gia } = req.body;
    try {
        const result = await Data.create({
            ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh: {
                data: "",
                contentType: ""
            }
        })
        if (result == "") {
            failCode(res, "", "Create location fail!")
        }
        else {
            successCode(res, "", "Create location success !")
        }
    } catch (error) {
        errorCode(res, "Backend error")
    }

}
module.exports = { createLocation }