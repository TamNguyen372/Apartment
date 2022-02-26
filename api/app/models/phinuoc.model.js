const sql = require("./db.js");

const Phinuoc = function(phinuoc){
	this.DinhMuc = phinuoc.DinhMuc;
	this.DonGia = phinuoc.DonGia;
	this.MaLoai = phinuoc.MaLoai;
}

Phinuoc.create = (newPhinuoc, result)=>{
	sql.query("INSERT INTO phinuoc SET ?", newPhinuoc,(err,res)=>{
		if(err){
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("create phi xe: ",{newPhinuoc});
		result(null,{newPhinuoc});
	});
};

Phinuoc.getAll = result =>{
	sql.query("SELECT * FROM phinuoc", (err,res)=>{
		if(err){
			console.log("error: ", res);
			result(null, err);
			return;
		}

		console.log("phinuoc ", res);
		result(null, res);
	});
};

Phinuoc.updateById = (IdNuoc, phinuoc, result)=>{
	sql.query("UPDATE phinuoc SET DinhMuc = ?, DonGia = ?, MaLoai = ? WHERE IdNuoc = ?", 
		[phinuoc.DinhMuc, phinuoc.DonGia, phinuoc.MaLoai, IdNuoc],
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

		console.log("update phinuoc: ", {IdNuoc: IdNuoc,...phinuoc});
		result(null, {IdNuoc: IdNuoc, ...phinuoc});
		});
};

Phinuoc.deleteById = (IdNuoc, result)=>{
	console.log(IdNuoc);
	sql.query('DELETE FROM phinuoc WHERE IdNuoc = ?', [IdNuoc], (err, res) => {
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

    	console.log('deleted phinuoc with id: ', IdNuoc);
    	result(null, res);
	});
};

module.exports = Phinuoc;