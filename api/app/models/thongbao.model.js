const sql = require("./db.js");

const ThongBao = function (thongbao) {
  this.TieuDe = thongbao.TieuDe;
  this.NoiDung = thongbao.NoiDung;
  this.NgayDang = thongbao.NgayDang;
  this.NguoiNhan = thongbao.NguoiNhan;
  this.MaLoai = thongbao.MaLoai;
  this.IdTK = thongbao.IdTK;
  this.Access_Code = thongbao.Access_Code;
  this.MaHoaDon = thongbao.MaHoaDon;
};

ThongBao.create = (ThongBao, result) => {
  sql.query("INSERT INTO thongbao SET ?", ThongBao, (err, res) => {
    if (err) {
      console.log("err: ", err);
      result(err, null);
      return;
    }
    console.log("created thongbao:", { ThongBao });
    result(null, { ThongBao });
  });
};

ThongBao.getAll = (result) => {
  sql.query("SELECT * FROM thongbao", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("thongbao: ", res);
    result(null, res);
  });
};

ThongBao.updateById = (idTT, thongbao, result) => {
  sql.query(
    "UPDATE thongbao SET TieuDe = ? ,NoiDung = ?,NgayDang = ?, NguoiNhan = ?, MaLoai = ?,IdTK = ?, Access_Code = ?,MaHoaDon = ?  WHERE IdTT = ?",
    [
      thongbao.TieuDe,
      thongbao.NoiDung,
      thongbao.NgayDang,
      thongbao.NguoiNhan,
      thongbao.MaLoai,
      thongbao.IdTK,
      thongbao.Access_Code,
      thongbao.MaHoaDon,
      idTT,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the idTT
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated thongbao: ", { idTT: idTT, ...thongbao });
      result(null, { idTT: idTT, ...thongbao });
    }
  );
};

ThongBao.deleteById = (idTT, result) => {
  sql.query("DELETE FROM thongbao WHERE idTT = ?", [idTT], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(res);
    if (res.affectedRows === 0) {
      // not found Customer with the idTT
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted thongbao with idTT: ", idTT);
    result(null, res);
  });
};

module.exports = ThongBao;
