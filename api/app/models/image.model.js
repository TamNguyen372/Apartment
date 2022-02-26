const sql = require('./db.js');

const Image = function(image) {
  this.LinhHinkAnh = image.LinhHinkAnh;
  this.idTB = image.idTB;
  this.idQC = image.idQC;
  this.idTT = image.idTT;
  this.Access_Code = image.Access_Code;
  this.idPTTT = thongbao.idPTTT;
};

Image.create = (newImage, result) => {
  sql.query(`INSERT INTO image SET ?`, LinhHinkAnh,idTB, idQC, idTT,Access_Code, idPTTT, (err, res) => {
    if (err) {
      console.log('err: ', err);
      result(err, null);
      return;
    }
    console.log('created image:', {idTT: res.insertId, ... LinhHinkAnh,idTB, idQC, idTT,Access_Code, idPTTT,});
    result(null, {idTT: res.insertId, ... LinhHinkAnh,idTB, idQC, idTT,Access_Code, idPTTT,});
  });
};

Image.getAll = (result) => {
  sql.query('SELECT * FROM image', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('image: ', res);
    result(null, res);
  });
};

Image.updateById = (idTT, image, result) => {
  sql.query(
    'UPDATE image SET LinkHinKAnh = ? ,idTB = ?,idQC = ?, idTT = ?, Access_Code = ?,idPTTT = ?, WHERE IdImage = ?',
    [image. LinhHinkAnh,idTB, idQC, idTT,Access_Code, idPTTT, idImage],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the idTT
        result({kind: 'not_found'}, null);
        return;
      }

      console.log('updated image: ', {idImage: idImage, ...image});
      result(null, {idImage: idImage, ...image});
    }
  );
};

Image.deleteById = (idTT, result) => {
  sql.query('DELETE FROM image WHERE idTT = ?', idTT, (err, res) => {
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

    console.log('deleted image with idImage: ', idImage);
    result(null, res);
  });
};

module.exports = Image;
