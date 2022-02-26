const Block = require("../models/block.model");

//Create
exports.create = (req, res) =>{
    //
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    //
    const block = new Block({
       TenBlock : req.body.TenBlock,
       MaKhu : req.body.MaKhu
    });
    //
    Block.create(block, (err,data) => {
        if (err) 
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Block."
            });
        else 
            res.send(data);
    });
};
//getALL
exports.getAll = (req, res) =>{
    Block.getAll((err,data)=>{
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Block."
            });
        } else 
            res.send(data);
        
    });
};
//Update
exports.updateById = (req, res) =>{
    //
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    //
    Block.updateById(
    req.params.idBlock,
    new Block(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: 'Not found Block with id ${req.params.idBlock}.'
          });
        } else {
          res.status(500).send({
            message: "Error updating Block with id " + req.params.idBlock
          });
        }
      } else res.send(data);
    }
  );
};
//Remove
exports.remove = (req, res) =>{
    Block.remove(req.params.idBlock, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Chungcu with id ${req.params.idBlock}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete block with id " + req.params.idBlock
        });
      }
    } else res.send({ message: 'Block was deleted successfully!' });
  });
};