module.exports = (app) => {
  const canho = require("../controllers/canho.controller.js");
  //Create
  app.post("/canho", canho.create);
  //FindByID
  app.get("/canho/:Access_Code", canho.findById);
  //GetAll
  app.get("/canho", canho.getAll);
  //Update
  app.put("/canho/:Access_Code", canho.updateById);
  //Remove
  app.delete("/canho/:Access_Code", canho.remove);
};
