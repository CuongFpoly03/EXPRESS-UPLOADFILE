const uploadFile = require("../middlewares/upload");
const fs = require("fs");
const baseUrl = "http://locahost:4000/files/";

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "vui tai file 1 tep" });
    }
    req.status(200).send({
      message: "da tai tep len thanh cong !",
    });
  } catch (error) {
    console.log(error);
    if ((error.code = "LIMIT_FILE_SIZE")) {
      return res.status(500).send({
        message: "kich co tep khong the lon hon 2mb",
      });
    }
    res.status(500).send({
      message: `khong the tai tep len: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFile = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "khong the quet tap tin !",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};

const dowload = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";
  req.dowload(directoryPath + fileName, fileName, (error) => {
    if (error) {
      res.status(500).send({
        message: "khong the tai file" + error,
      });
    }
  });
};

module.exports = {
    upload,
    getListFile,
    dowload
}
