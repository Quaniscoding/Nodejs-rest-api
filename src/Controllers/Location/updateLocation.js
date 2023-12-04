const { failCode, successCode } = require('../../config/reponse');
const Data = require('../../Models/Location.model');

const updateLocation = async (req, res) => {
    try {
        const id = req.params.id;
        const options = { new: true };
        const { ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh } = req.body;
        const update = await Data.findOneAndUpdate({ id: id },
            {
                ten_vi_tri,
                tinh_thanh,
                quoc_gia,
                hinh_anh: {
                    data: hinh_anh.data,
                    contentType: hinh_anh.contentType
                }
            }, options)
        if (!update) {
            failCode(res, "", "Location does not exist !");
        }
        else {
            successCode(res, update, "Update location success !")
        }
    } catch (error) {
        failCode(res, "Backend error !")
    }
}
module.exports = { updateLocation }