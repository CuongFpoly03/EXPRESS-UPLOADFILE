const express = require("express");
const app = express();
const  initRoutes = require("./src/routes");
const cors = require("cors");
global.__basedir = __dirname;

var corsOption = {
    origin: "http://localhost:4001"
};
app.use(cors(corsOption));

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(4000, () => {
    console.log("success !")
})