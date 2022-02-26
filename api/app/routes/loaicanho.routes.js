module.exports = (app) => {
  const loaicanho = require("../controllers/loaicanho.controller.js");
  //Create
  app.post("/loaicanho", loaicanho.create);
  //GetAll
  app.get("/loaicanho", loaicanho.getAll);
  //Update
  app.put("/loaicanho/:MaLoaiCanHo", loaicanho.updateById);
  //Remove
  app.delete("/loaicanho/:MaLoaiCanHo", loaicanho.remove);
};
