const sql = require("./db.js");

// constructor
const Loaiphi= function(loaiphi){
	this.MaLoai = loaiphi.MaLoai;
	this.TenLoai = loaiphi.TenLoai;
};

Loaiphi.create = (newLoaiphi, result) =>{
	sql.query("INSERT INTO loaiphi SET ?", newLoaiphi,(err,res)=>{
		if(err){
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("create loaiphi: ", {newLoaiphi});
		result(null,{newLoaiphi});
	});
};

Loaiphi.getAll = result => {
	sql.query("SELECT * FROM loaiphi", (err,res) =>{
		if(err){
			console.log("error: ", err);
			result(null, err);
			return;
		}

		console.log("loaiphi: ", res);
		result(null, res);
	});
};

Loaiphi.updateById = (MaLoai, loaiphi, result) =>{
	sql.query("UPDATE loaiphi SET TenLoai = ? WHERE MaLoai = ?",
		[loaiphi.TenLoai, MaLoai],
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

		console.log("update loaiphi ", {MaLoai:MaLoai, ...loaiphi});
		result(null,{MaLoai:MaLoai, ...loaiphi});
	});
};

Loaiphi.deleteById = (MaLoai, result) => {
	console.log(MaLoai);
  	sql.query('DELETE FROM loaiphi WHERE MaLoai = ?', [MaLoai], (err, res) => {
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

    	console.log('deleted loaiphi with id: ', MaLoai);
    	result(null, res);
	});
};

module.exports = Loaiphi;
