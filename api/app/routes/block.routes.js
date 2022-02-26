module.exports = app =>{
    const block = require("../controllers/block.controller.js");
    //Create
    app.post("/block",block.create);
    //GetAll
    app.get("/block",block.getAll);
    //Update
    app.put("/block/:idBlock",block.updateById);
    //Remove
    app.delete("/block/:idBlock",block.remove);



}