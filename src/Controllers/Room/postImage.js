const { failCode, successCode, errorCode } = require('../../config/reponse');
const DataImage = require('../../Models/Room.model');
const fs = require('fs');

const postImage = async (req, res) => {
    try {
        if (req.file.size >= 4000000) {
            fs.unlinkSync(`${process.cwd()}/public/img/${req.file.filename}`);
            failCode(res, "", "Only allowed to upload photos under 4Mb!");
            return;
        }

        if (req.file.mimetype !== "image/jpeg" && req.file.mimetype !== "image/jpg" && req.file.mimetype !== "image/png") {
            fs.unlinkSync(`${process.cwd()}/public/img/${req.file.filename}`);
            failCode(res, "", "Image is in wrong format!");
            return;
        }

        const data = fs.readFileSync(`${process.cwd()}/public/img/${req.file.filename}`);
        const dataBase = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;

        setTimeout(() => {
            fs.unlinkSync(`${process.cwd()}/public/img/${req.file.filename}`);
        }, 5000);
        const id = req.params.id;
        let { hinh_anh } = req.body;
        hinh_anh = dataBase;
        const options = { new: true };
        await DataImage.findOneAndUpdate(
            { id: id }, {
            hinh_anh: {
                data: hinh_anh,
                contentType: req.file.mimetype
            }
        }, options);
        successCode(res, "", "Uploading image successfully!");
    } catch (error) {
        console.log(error);
        errorCode(res, "Backend error!");
    }
};

module.exports = {
    postImage
};
