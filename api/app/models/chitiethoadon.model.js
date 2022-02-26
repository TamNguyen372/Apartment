const sql = require("./db.js");

// constructor
const Chitiethoadon= function(chitiethoadon){
	this.MaHoaDon = chitiethoadon.MaHoaDon;
	this.idPhi = chitiethoadon.idPhi;
	this.idPhiXe = chitiethoadon.idPhiXe;
	this.IdNuoc = chitiethoadon.IdNuoc;
	this.SLXeMay = chitiethoadon.SLXeMay;
	this.SLXeOto = chitiethoadon.SLXeOto
	this.ChiSoMoi = chitiethoadon.ChiSoMoi;
	this.GhiChu = chitiethoadon.GhiChu;
};

Chitiethoadon.create = (newchitiethoadon, result) =>{
	sql.query("INSERT INTO chitiethoadon SET ?", newchitiethoadon,(err,res)=>{
		if(err){
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("create chitiethoadon: ", {newchitiethoadon});
		result(null,{newchitiethoadon});
	});
};

Chitiethoadon.getAll = result => {
	sql.query("SELECT * FROM chitiethoadon", (err,res) =>{
		if(err){
			console.log("error: ", err);
			result(null, err);
			return;
		}

		console.log("chitiethoadon: ", res);
		result(null, res);
	});
};

Chitiethoadon.updateById = (MaHoaDon, chitiethoadon, result) =>{
	sql.query("UPDATE chitiethoadon SET idPhi = ?, idPhiXe = ?, IdNuoc = ?, SLXeMay = ?, SLXeOto = ?, ChiSoMoi = ?, GhiChu = ? WHERE MaHoaDon = ?",
		[chitiethoadon.idPhi, chitiethoadon.idPhiXe, chitiethoadon.IdNuoc, chitiethoadon.SLXeMay, chitiethoadon.SLXeOto, chitiethoadon.ChiSoMoi, chitiethoadon.GhiChu, MaHoaDon],
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

		console.log("update chitiethoadon ", {MaHoaDon:MaHoaDon, ...chitiethoadon});
		result(null,{MaHoaDon:MaHoaDon, ...chitiethoadon});
	});
};

Chitiethoadon.deleteById = (MaHoaDon, result) => {
	console.log(MaHoaDon);
  	sql.query('DELETE FROM chitiethoadon WHERE MaHoaDon = ?', [MaHoaDon], (err, res) => {
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

    	console.log('deleted chitiethoadon with id: ', MaHoaDon);
    	result(null, res);
	});
};

module.exports = Chitiethoadon;
