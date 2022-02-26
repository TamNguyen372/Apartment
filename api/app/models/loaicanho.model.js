const sql = require("./db.js");

const Loaicanho = function (loaicanho) {
  this.MaLoaiCanHo = loaicanho.MaLoaiCanHo;
  this.TenLoai = loaicanho.TenLoai;
};

//Them
Loaicanho.create = (Loaicanho, result) => {
  sql.query("INSERT INTO loaicanho SET ?", Loaicanho, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created loaicanho: ", { Loaicanho });
    result(null, { Loaicanho });
  });
};

//Xem
Loaicanho.getAll = (result) => {
  sql.query("SELECT * FROM loaicanho", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("loaicanho: ", res);
    result(null, res);
  });
};

//Sua
Loaicanho.updateById = (MaLoaiCanHo, loaicanho, result) => {
  sql.query(
    "UPDATE loaicanho SET TenLoai = ?   WHERE MaLoaiCanHo = ?",
    [loaicanho.TenLoai, MaLoaiCanHo],
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

      console.log("updated loaicanho: ", {
        MaLoaiCanHo: MaLoaiCanHo,
        ...loaicanho,
      });
      result(null, { MaLoaiCanHo: MaLoaiCanHo, ...loaicanho });
    }
  );
};

//Xoa
Loaicanho.remove = (MaLoaiCanHo, result) => {
  sql.query(
    "DELETE FROM loaicanho WHERE MaLoaiCanHo =?",
    [MaLoaiCanHo],
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

      console.log("deleted loaicanho with MaLoaiCanHo:", MaLoaiCanHo);
      result(null, res);
    }
  );
};

module.exports = Loaicanho;
