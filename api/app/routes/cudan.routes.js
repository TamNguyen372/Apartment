module.exports = (app) => {
  const cudan = require("../controllers/cudan.controller.js");
  //Create
  app.post("/cudan", cudan.create);
  //FindByID
  app.get("/cudan/:idCuDan", cudan.findById);
  //GetAll
  app.get("/cudan", cudan.getAll);
  //Update
  app.put("/cudan/:idCuDan", cudan.updateById);
  //Remove
  app.delete("/cudan/:idCuDan", cudan.remove);
};
