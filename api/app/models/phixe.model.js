const sql = require("./db.js");

const Phixe = function(phixe){
	// this.idPhiXe = phixe.idPhiXe;
	this.TenPhi	= phixe.TenPhi;
	this.DonGia = phixe.DonGia;
	this.MaLoai = phixe.MaLoai;
}

Phixe.create = (newPhixe, result)=>{
	sql.query("INSERT INTO phixe SET ?", newPhixe,(err,res)=>{
		if(err){
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("create phi xe: ",{newPhixe});
		result(null,{newPhixe});
	});
};

Phixe.getAll = result =>{
	sql.query("SELECT * FROM phixe", (err,res)=>{
		if(err){
			console.log("error: ", res);
			result(null, err);
			return;
		}

		console.log("phixe ", res);
		result(null, res);
	});
};

Phixe.updateById = (idPhiXe, phixe, result)=>{
	sql.query("UPDATE phixe SET TenPhi = ?, DonGia = ?, MaLoai = ? WHERE idPhiXe = ?", 
		[phixe.TenPhi, phixe.DonGia, phixe.MaLoai, idPhiXe],
		(err, res)=>{
		if(err){
			console.log("error: ", err);
			result(null, err);
			return;
		}

		if(res.affectRows == 0){
			result({kinhd: "not_found"}, null);
			return;
		}

		console.log("update phixe: ", {idPhiXe:idPhiXe,...phixe});
		result(null, {idPhiXe:idPhiXe, ...phixe});
		});
};

Phixe.deleteById = (idPhiXe, result)=>{
	console.log(idPhiXe);
	sql.query('DELETE FROM phixe WHERE idPhiXe = ?', [idPhiXe], (err, res) => {
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

    	console.log('deleted phixe with id: ', idPhiXe);
    	result(null, res);
	});
};

module.exports = Phixe;