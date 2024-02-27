const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;


let storge = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null__basedir + "/resources/static/assets/uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    }
});

let uploadFile = multer({
    storage: storge,
    limits: {fileSize: maxSize},
}).single("file");

let uploadFileMiddleWare = util.promisify(uploadFile);
module.exports = uploadFileMiddleWare;