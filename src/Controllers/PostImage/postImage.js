const { sucessCode, errorCode, failCode } = require('../../config/reponse'); // Fix typo in import
const Data = require('../../Models/Image.model');
const fs = require('fs');

const postImage = async (req, res) => {
    try {
        if (req.file.size >= 4000000) {
            fs.unlinkSync(`${process.cwd()}/public/img/${req.file.filename}`);
            failCode(res, "", "Only allowed to upload photos under 4Mb!");
            return;
        }

        if (req.file.mimetype !== "image/jpeg" && req.file.mimetype !== "image/jpg") {
            fs.unlinkSync(`${process.cwd()}/public/img/${req.file.filename}`);
            failCode(res, "", "Image is in wrong format!");
            return;
        }

        const data = fs.readFileSync(`${process.cwd()}/public/img/${req.file.filename}`);
        const dataBase = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;

        setTimeout(() => {
            fs.unlinkSync(`${process.cwd()}/public/img/${req.file.filename}`);
        }, 5000);

        let { hinh_anh } = req.body;
        hinh_anh = dataBase;

        await Data.create({
            name: req.file.filename,
            img: {
                data: hinh_anh,
                contentType: req.file.mimetype
            }
        });
        sucessCode(res, "", "Uploading image successfully!");
    } catch (error) {
        errorCode(res, "Backend error");
    }
};

module.exports = {
    postImage
};
