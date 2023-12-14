const { failCode, successCode, errorCode } = require('../../config/reponse');
const DataImage = require('../../Models/Location.model');
const fs = require('fs');

const postLocationImage = async (req, res) => {
    try {
        if (req.file.size >= 4000000) {
            fs.unlinkSync(`${process.cwd()}/${req.file.filename}`);
            failCode(res, "", "Only allowed to upload photos under 4Mb!");
            return;
        }

        if (req.file.mimetype !== "image/jpeg" && req.file.mimetype !== "image/jpg" && req.file.mimetype !== "image/png") {
            fs.unlinkSync(`${process.cwd()}/${req.file.filename}`);
            failCode(res, "", "Image is in wrong format!");
            return;
        }

        const data = fs.readFileSync(`${process.cwd()}/${req.file.filename}`);
        const dataBase = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;

        setTimeout(() => {
            fs.unlinkSync(`${process.cwd()}/${req.file.filename}`);
        }, 5000);
        const id = req.params.id;
        let { hinh_anh } = req.body;
        hinh_anh = dataBase;
        const options = { new: true };
        const dataUpload = await DataImage.findByIdAndUpdate(
            id, {
            hinh_anh: {
                data: hinh_anh,
                contentType: req.file.mimetype
            }
        }, options);
        if (!dataUpload) {
            failCode(res, "", "Location not found");
            return;
        }
        successCode(res, "", "Uploading image successfully!");
    } catch (error) {
        console.log(error);
        errorCode(res, "Backend error!");
    }
};

module.exports = {
    postLocationImage
};
