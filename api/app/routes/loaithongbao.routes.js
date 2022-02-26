module.exports = (app) => {
  const loaithongbao = require("../controllers/loaithongbao.controller");

  app.post("/loaithongbao", loaithongbao.create);

  app.get("/loaithongbao", loaithongbao.findAll);

  app.put("/loaithongbao/:MaLoai", loaithongbao.updateById);

  app.delete("/loaithongbao/:MaLoai", loaithongbao.deleteById);
};
