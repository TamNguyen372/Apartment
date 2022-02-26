const sql = require('./db.js');

const ThongTinpttt = function(ThongTinpttt) {
  this.SDT = thongtinpttt.SDT;
  this.TenChuTK = thongtinpttt.TenChuTK;
  this.SoTKNganHang = SoTKNganHang.NgayDang;
  this.NoiDongTien = thongtinpttt.NoiDongTien;
  this.GioLamViec = thongtinpttt.GioLamViec;
  this.ChiNhanh = thongbao.ChiNhanh;
};

ThongTinpttt.create = (newThongTinpttt, result) => {
  sql.query(`INSERT INTO thongtinpttt SET ?`, SDT,TenChuTK, SoTKNganHang, NoiDongTien, GioLamViec, ChiNhanh, (err, res) => {
    if (err) {
      console.log('err: ', err);
      result(err, null);
      return;
    }
    console.log('created thongtinpttt:', {idTT: res.insertId, ... SDT,TenChuTK, SoTKNganHang, NoiDongTien, GioLamViec, ChiNhanh,});
    result(null, {idThongTin: res.insertId, ... SDT,TenChuTK, SoTKNganHang, NoiDongTien, GioLamViec, ChiNhanh,});
  });
};

ThongTinpttt.getAll = (result) => {
  sql.query('SELECT * FROM thongtinpttt', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('thongtinpttt: ', res);
    result(null, res);
  });
};

ThongTinpttt.updateById = (idTT, thongtinpttt, result) => {
  sql.query(
    'UPDATE thongtinpttt SET SDT = ? ,TenChuTK = ?,SoTKNganHang = ?, NoiDongTien = ?,  GioLamViec = ?,ChiNhanh= ?, WHERE IdTT = ?',
    [thongtinpttt. SDT,TenChuTK, SoTKNganHang, NoiDongTien, GioLamViec, ChiNhanh, idThongTin],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the idThongTin
        result({kind: 'not_found'}, null);
        return;
      }

      console.log('updated thongtinpttt: ', {idThongTin: idThongTin, ...thongtinpttt});
      result(null, {idThongTin: idThongTin, ...thongtinpttt});
    }
  );
};

ThongTinpttt.deleteById = (idThongTin, result) => {
  sql.query('DELETE FROM thongtinpttt WHERE idThongTin = ?', idThongTin, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log(res);
    if (res.affectedRows === 0) {
      // not found Customer with the idTT
      result({kind: 'not_found'}, null);
      return;
    }

    console.log('deleted thongtinpttt with idThongTin: ', idThongTin);
    result(null, res);
  });
};

module.exports = ThongTinpttt;
