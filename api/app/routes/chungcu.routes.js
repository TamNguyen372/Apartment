module.exports = app =>{
    const chungcu = require("../controllers/chungcu.controller.js");
    //Create
    app.post("/chungcu",chungcu.create);
    //FindByID
    app.get("/chungcu/:MaKhu",chungcu.findById);
    //GetAll
    app.get("/chungcu",chungcu.getAll);
    //Update
    app.put("/chungcu/:MaKhu",chungcu.updateById);
    //Remove
    app.delete("/chungcu/:MaKhu",chungcu.remove);



}