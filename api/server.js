const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

require("./app/routes/chungcu.routes")(app);
require("./app/routes/block.routes")(app);
require("./app/routes/loaicanho.routes")(app);
require("./app/routes/canho.routes")(app);
require("./app/routes/chisonuoc.routes")(app);
require("./app/routes/cudan.routes")(app);
require("./app/routes/danhsachxe.routes")(app);
require("./app/routes/loaiphi.routes")(app);
require("./app/routes/phixe.routes")(app);
require("./app/routes/phinuoc.routes")(app);
require("./app/routes/phiquanly.routes")(app);
require("./app/routes/hoadon.routes")(app);
require("./app/routes/chitiethoadon.routes")(app);

require("./app/routes/thongbao.routes")(app);
require("./app/routes/loaithongbao.routes")(app);
require("./app/routes/image.routes")(app);
require("./app/routes/phuongthucthanhtoan.routes")(app);
require("./app/routes/thongtinpttt.routes")(app);

require("./app/routes/vaitro.routes")(app);
require("./app/routes/taikhoan.routes")(app);
require("./app/routes/loaiqc.routes")(app);
require("./app/routes/quangcao.routes")(app);
require("./app/routes/mucdo.routes")(app);
require("./app/routes/phanhoi.routes")(app);
// set port, listen for requests
app.use(express.static(path.join(__dirname, "public")));
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "puclic/index.html"));
});
app.listen(process.env.PORT || 3000, () => console.log(`API running on localhost:`));