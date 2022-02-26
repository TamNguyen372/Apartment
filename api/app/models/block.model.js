const sql = require("./db.js");

const Block = function(block){
    this.TenBlock = block.TenBlock;
    this.MaKhu = block.MaKhu
};
//Them
Block.create = (Block, result) =>{
    sql.query('INSERT INTO block SET ?',Block,(err,res)=>{
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }

        console.log("created block: ",{Block});
        result(null,{Block});
    });
};
//Xem
Block.getAll = result => {
  sql.query("SELECT * FROM block", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("block: ", res);
    result(null, res);
  });
};
//Sua
Block.updateById = (idBlock, block, result) => {
  sql.query(
    "UPDATE block SET TenBlock = ?, MaKhu =?   WHERE idBlock = ?",
    [block.TenBlock, block.MaKhu, idBlock],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", {idBlock: idBlock, ...block });
      result(null, { idBlock: idBlock, ...block });
    }
  );
};
//Xoa
Block.remove = (idBlock, result) => {
    sql.query('DELETE FROM block WHERE idBlock =?', [idBlock],(err,res)=>{
        if (err) {
            console.log("error: ",err);
            result(null,err);
            return;
        }
        if (res.affectedRows == 0) {
            result({kind:"not_found"}, null);
            return;
            
        }

        console.log('deleted block with idBlock:', idBlock);
        result(null,res)
    }
    
    );
};
module.exports = Block;