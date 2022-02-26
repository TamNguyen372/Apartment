module.exports = (app) => {
  const chisonuoc = require("../controllers/chisonuoc.controller.js");
  //Create
  app.post("/chisonuoc", chisonuoc.create);
  //GetAll
  app.get("/chisonuoc", chisonuoc.getAll);
  //Update
  app.put("/chisonuoc/:IdCSN", chisonuoc.updateById);
};
