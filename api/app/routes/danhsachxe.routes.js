module.exports = (app) => {
  const danhsachxe = require("../controllers/danhsachxe.controller.js");
  //Create
  app.post("/danhsachxe", danhsachxe.create);
  //FindByID
  app.get("/danhsachxe/:BienSoXe", danhsachxe.findById);
  //GetAll
  app.get("/danhsachxe", danhsachxe.getAll);
  //Update
  app.put("/danhsachxe/:BienSoXe", danhsachxe.updateById);
  //Remove
  app.delete("/danhsachxe/:BienSoXe", danhsachxe.remove);
};
