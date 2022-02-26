module.exports = (app) => {
  const thongbao = require("../controllers/thongbao.controller");

  app.post("/thongbao", thongbao.create);

  app.get("/thongbao", thongbao.getAll);

  app.put("/thongbao/:idTT", thongbao.updateById);

  app.delete("/thongbao/:idTT", thongbao.deleteById);
};
