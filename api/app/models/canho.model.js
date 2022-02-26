const sql = require("./db.js");
//
const Canho = function (canho) {
  this.Access_Code = canho.Access_Code;
  this.DienTich = canho.DienTich;
  this.SoTang = canho.SoTang;
  this.SoPhong = canho.SoPhong;
  this.LinkQR = canho.LinkQR;
  this.MaLoai = canho.MaLoai;
  this.idBlock = canho.idBlock;
};
//them
Canho.create = (Canho, result) => {
  sql.query("INSERT INTO canho SET ?", Canho, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created canho: ", { Canho });
    result(null, { Canho });
  });
};

//tim kiem
Canho.findById = (Access_Code, result) => {
  sql.query(
    `SELECT * FROM canho WHERE Access_Code = '${Access_Code}'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found canho: ", res[0]);
        return;
      }
      result({ kind: "not found" }, null);
    }
  );
};

//xem
Canho.getAll = (result) => {
  sql.query("SELECT * FROM canho", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("canho: ", res);
    result(null, res);
  });
};

//cap nhat
Canho.updateById = (Access_Code, canho, result) => {
  sql.query(
    "UPDATE canho SET DienTich = ?, SoTang = ?, SoPhong = ?, LinkQR =?, MaLoai =?, idBlock =?   WHERE Access_Code = ?",
    [
      canho.DienTich,
      canho.SoTang,
      canho.SoPhong,
      canho.LinkQR,
      canho.MaLoai,
      canho.idBlock,
      Access_Code,
    ],
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

      console.log("updated canho: ", { Access_Code: Access_Code, ...canho });
      result(null, { Access_Code: Access_Code, ...canho });
    }
  );
};

//xoa
Canho.remove = (Access_Code, result) => {
  sql.query(
    "DELETE FROM canho WHERE Access_Code =?",
    [Access_Code],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted canho with Access_Code:", Access_Code);
      result(null, res);
    }
  );
};

module.exports = Canho;
