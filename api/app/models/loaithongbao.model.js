const sql = require("./db.js");

const LoaiThongBao = function (loaithongbao) {
  this.MaLoai = loaithongbao.MaLoai;
  this.TenLoai = loaithongbao.TenLoai;
};

LoaiThongBao.create = (LoaiThongBao, result) => {
  sql.query("INSERT INTO loaithongbao SET ?", LoaiThongBao, (err, res) => {
    if (err) {
      console.log("err: ", err);
      result(err, null);
      return;
    }
    console.log("created loaithongbao:", { LoaiThongBao });
    result(null, { LoaiThongBao });
  });
};

LoaiThongBao.getAll = (result) => {
  sql.query("SELECT * FROM loaithongbao", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("loaithongbao: ", res);
    result(null, res);
  });
};

LoaiThongBao.updateById = (MaLoai, loaithongbao, result) => {
  sql.query(
    "UPDATE loaithongbao SET  TenLoai = ? WHERE MaLoai = ?",
    [loaithongbao.TenLoai, MaLoai],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the maloai
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated loaithongbao: ", {
        MaLoai: MaLoai,
        ...loaithongbao,
      });
      result(null, { MaLoai: MaLoai, ...loaithongbao });
    }
  );
};

LoaiThongBao.deleteById = (MaLoai, result) => {
  sql.query(
    "DELETE FROM loaithongbao WHERE MaLoai = ?",
    [MaLoai],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log(res);
      if (res.affectedRows === 0) {
        // not found Customer with the maloai
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted loaithongbao with MaLoai: ", MaLoai);
      result(null, res);
    }
  );
};

module.exports = LoaiThongBao;
