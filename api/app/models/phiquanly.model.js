const sql = require("./db.js");

const Phiquanly = function(phiquanly){
	// this.idPhi = phiquanly.idPhi;
	this.TenPhi = phiquanly.TenPhi;
	this.DonGia = phiquanly.DonGia;
	this.MaLoai = phiquanly.MaLoai;
	this.MaLoaiCanHo = phiquanly.MaLoaiCanHo;
};

Phiquanly.create = (newPhiquanly, result) =>{
	sql.query("INSERT INTO phiquanly SET ?", newPhiquanly,(err,res)=>{
		if(err){
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("create phiquanly: ", {newPhiquanly});
		result(null,{newPhiquanly});
	});
};

Phiquanly.findById = (idPhi, result) => {
  sql.query(`SELECT * FROM phiquanly WHERE idPhi = ${idPhi}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Phiquanly.getAll = result => {
	sql.query("SELECT * FROM phiquanly", (err,res) =>{
		if(err){
			console.log("error: ", err);
			result(null, err);
			return;
		}

		console.log("phiquanly: ", res);
		result(null, res);
	});
};

Phiquanly.updateById = (idPhi, phiquanly, result) =>{
	sql.query("UPDATE phiquanly SET TenPhi = ?, DonGia = ?, MaLoai = ?, MaLoaiCanHo = ? WHERE idPhi = ?",
		[phiquanly.TenPhi, phiquanly.DonGia, phiquanly.MaLoai, phiquanly.MaLoaiCanHo, idPhi],
		(err, res) =>{
		if(err){
			console.log("error: ", err);
			result(null, err);
			return;
		}

		if(res.affectdRows == 0){
			// không tìm thấy loại phí có ID
			result({kind: "not_found"}, null);
			return;
		}

		console.log("update phiquanly ", {idPhi:idPhi, ...phiquanly});
		result(null,{idPhi:idPhi, ...phiquanly});
	});
};

Phiquanly.deleteById = (idPhi, result) => {
	console.log(idPhi);
  	sql.query('DELETE FROM phiquanly WHERE idPhi = ?', [idPhi], (err, res) => {
    	if (err) {
      	console.log('error: ', err);
      	result(null, err);
      	return;
    	}
   
    	if (res.affectedRows === 0) {
      	// not found Customer with the id
      	result({kind: 'not_found'}, null);
      	return;
    	}

    	console.log('deleted phiquanly with id: ', idPhi);
    	result(null, res);
	});
};

module.exports = Phiquanly;
