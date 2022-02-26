const sql = require("./db.js");

const Chungcu = function (chungcu) {
  this.MaKhu = chungcu.MaKhu;
  this.TenChungCu = chungcu.TenChungCu;
  this.DiaChi = chungcu.DiaChi;
  this.SLBlock = chungcu.SLBlock;
  this.SLTang = chungcu.SLTang;
  this.SLPhong = chungcu.SLPhong;
  this.ChuNhaDauTu = chungcu.ChuNhaDauTu;
};
//them
Chungcu.create = (Chungcu, result) => {
  sql.query(
    "INSERT INTO chungcu SET ? where MaKhu = TenChungCu + AUTO_INCREMENT ",
    Chungcu,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created chungcu: ", { Chungcu });
      result(null, { Chungcu });
    }
  );
};

//tim
Chungcu.findById = (MaKhu, result) => {
  sql.query(`SELECT * FROM chungcu WHERE MaKhu = '${MaKhu}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found chungcu: ", res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};
//xem
Chungcu.getAll = (result) => {
  sql.query("SELECT * FROM chungcu", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("chungcu: ", res);
    result(null, res);
  });
};
//cap nhat
Chungcu.updateById = (MaKhu, chungcu, result) => {
  sql.query(
    "UPDATE chungcu SET TenChungCu = ?, DiaChi = ?, SLBlock = ?, SLTang =?, SLPhong =?, ChuNhaDauTu =?   WHERE MaKhu = ?",
    [
      chungcu.TenChungCu,
      chungcu.DiaChi,
      chungcu.SLBlock,
      chungcu.SLTang,
      chungcu.SLPhong,
      chungcu.ChuNhaDauTu,
      MaKhu,
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

      console.log("updated chungcu: ", { MaKhu: MaKhu, ...chungcu });
      result(null, { MaKhu: MaKhu, ...chungcu });
    }
  );
};
//xoa
Chungcu.remove = (MaKhu, result) => {
  sql.query("DELETE FROM chungcu WHERE MaKhu =?", [MaKhu], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted chungcu with MaKhu:", MaKhu);
    result(null, res);
  });
};

module.exports = Chungcu;
