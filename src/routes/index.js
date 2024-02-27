const express = require("express");
const router = express.Router();
const fileController = require("../controllers/file.controller")

let routes = (app) => {
    router.post("/upload", fileController.upload);
    router.get("/files", fileController.getListFile);
    router.get("/files/:name",fileController.dowload);
    app.use(router);
}

module.exports = routes;
