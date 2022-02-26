const sql = require("./db.js");

//
const DSXe = function (danhsachxe) {
  this.BienSoXe = danhsachxe.BienSoXe;
  this.LoaiXe = danhsachxe.LoaiXe;
  this.idCuDan = danhsachxe.idCuDan;
};

//Xem
DSXe.getAll = (result) => {
  sql.query("SELECT * FROM danhsachxe", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("danhsachxe: ", res);
    result(null, res);
  });
};

//Them
DSXe.create = (DSXe, result) => {
  sql.query("INSERT INTO danhsachxe SET ?", DSXe, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created danhsachxe: ", { DSXe });
    result(null, { DSXe });
  });
};

//tim
DSXe.findById = (BienSoXe, result) => {
  sql.query(
    `SELECT * FROM danhsachxe WHERE BienSoXe = '${BienSoXe}'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found danhsachxe: ", res[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    }
  );
};

//cap nhat
DSXe.updateById = (BienSoXe, danhsachxe, result) => {
  sql.query(
    "UPDATE danhsachxe SET LoaiXe = ?, idCuDan = ?  WHERE BienSoXe = ?",
    [danhsachxe.LoaiXe, danhsachxe.idCuDan, BienSoXe],
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

      console.log("updated danhsachxe: ", {
        BienSoXe: BienSoXe,
        ...danhsachxe,
      });
      result(null, { BienSoXe: BienSoXe, ...danhsachxe });
    }
  );
};

//xoa
DSXe.remove = (BienSoXe, result) => {
  sql.query(
    "DELETE FROM danhsachxe WHERE BienSoXe =?",
    [BienSoXe],
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

      console.log("deleted danhsachxe with BienSoXe:", BienSoXe);
      result(null, res);
    }
  );
};

module.exports = DSXe;
