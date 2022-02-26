const sql = require('./db.js');

const phuongthucthanhtoan = function(phuongthucthanhtoan) {
  this.TenLoai = phuongthucthanhtoan.TenLoai;
};

phuongthucthanhtoan.create = (newphuongthucthanhtoan, result) => {
  sql.query(`INSERT INTO phuongthucthanhtoan SET ?`, TieuDe,NoiDung, NgayDang, NguoiNhan, MaLoai, IdTK, Access_Code, MaHoaDon, (err, res) => {
    if (err) {
      console.log('err: ', err);
      result(err, null);
      return;
    }
    console.log('created phuongthucthanhtoan:', {idPTTT: res.insertId, ...TenLoai,});
    result(null, {idPTTT: res.insertId, ...TenLoai,});
  });
};

phuongthucthanhtoan.getAll = (result) => {
  sql.query('SELECT * FROM phuongthucthanhtoan', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('phuongthucthanhtoan: ', res);
    result(null, res);
  });
};

phuongthucthanhtoan.updateById = (idPTTT, phuongthucthanhtoan, result) => {
  sql.query(
    'UPDATE phuongthucthanhtoan SET TenLoai = ?, WHERE IdPTTT = ?',
    [phuongthucthanhtoan.TenLoai, idPTTT],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the idPTTT
        result({kind: 'not_found'}, null);
        return;
      }

      console.log('updated phuongthucthanhtoan: ', {idPTTT: idPTTT, ...phuongthucthanhtoan});
      result(null, {idPTTT: idPTTT, ...phuongthucthanhtoan});
    }
  );
};

phuongthucthanhtoan.deleteById = (id, result) => {
  sql.query('DELETE FROM phuongthucthanhtoan WHERE idTT = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log(res);
    if (res.affectedRows === 0) {
      // not found Customer with the idPTTT
      result({kind: 'not_found'}, null);
      return;
    }

    console.log('deleted phuongthucthanhtoan with idPTTT: ',idPTTT);
    result(null, res);
  });
};

module.exports = phuongthucthanhtoan;
