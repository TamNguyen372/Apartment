const sql = require("./db.js");

//
const Cudan = function (cudan) {
  this.TenCuDan = cudan.TenCuDan;
  this.GioiTinh = cudan.GioiTinh;
  this.SoDienThoai = cudan.SoDienThoai;
  this.mail = cudan.mail;
  this.NgayDangKy = cudan.NgayDangKy;
  this.Access_Code = cudan.Access_Code;
};

//Xem
Cudan.getAll = (result) => {
  sql.query("SELECT * FROM cudan", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("cudan: ", res);
    result(null, res);
  });
};

//Them
Cudan.create = (Cudan, result) => {
  sql.query("INSERT INTO cudan SET ?", Cudan, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created cudan: ", { Cudan });
    result(null, { Cudan });
  });
};

//tim
Cudan.findById = (idCuDan, result) => {
  sql.query(`SELECT * FROM cudan WHERE idCuDan = '${idCuDan}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found cudan: ", res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

//cap nhat
Cudan.updateById = (idCuDan, cudan, result) => {
  sql.query(
    "UPDATE cudan SET TenCuDan = ?, GioiTinh = ?, SoDienThoai = ?, mail =?,NgayDangKy=?, Access_Code =?   WHERE idCuDan = ?",
    [
      cudan.TenCuDan,
      cudan.GioiTinh,
      cudan.SoDienThoai,
      cudan.mail,
      cudan.NgayDangKy,
      cudan.Access_Code,
      idCuDan,
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

      console.log("updated cudan: ", { idCuDan: idCuDan, ...cudan });
      result(null, { idCuDan: idCuDan, ...cudan });
    }
  );
};

//xoa
Cudan.remove = (idCuDan, result) => {
  sql.query("DELETE FROM cudan WHERE idCuDan =?", [idCuDan], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted cudan with idCuDan:", idCuDan);
    result(null, res);
  });
};

module.exports = Cudan;
