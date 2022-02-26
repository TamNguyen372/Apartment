const sql = require("./db.js");

const Hoadon = function(hoadon){
	this.MaHoaDon = hoadon.MaHoaDon;
	this.TenHD = hoadon.TenHD;
	this.TinhTrang = hoadon.TinhTrang;
	this.NgayTao = hoadon.NgayTao;
	this.Total = hoadon.Total;
	this.NgayThanhToan = hoadon.NgayThanhToan;
	this.Access_Code = hoadon.Access_Code;
	this.idPTTT = hoadon.idPTTT;
	this.TongThanhToan = hoadon.TongThanhToan;
}

Hoadon.create = (newhoadon, result)=>{
	console.log('hgjh',newhoadon);
	sql.query("INSERT INTO hoadon SET ?", newhoadon,(err,res)=>{
		if(err){
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("create : ",{newhoadon});
		result(null,{newhoadon});
	});
};

Hoadon.getAll = result =>{
	sql.query(
		"SELECT `hoadon`.`MaHoaDon`,`canho`.`Access_Code` AS `căn hộ`,`block`.`TenBlock`, `cudan`.`TenCuDan`,`hoadon`.`Total`,`hoadon`.`NgayThanhToan`,`hoadon`.`TinhTrang`" +
		"FROM `hoadon` LEFT JOIN `canho` ON `hoadon`.`Access_Code` = `canho`.`Access_Code` LEFT JOIN `cudan` ON `cudan`.`Access_Code` = `canho`.`Access_Code` " + 
		"LEFT JOIN `block` ON `canho`.`idBlock` = `block`.`idBlock`", (err,res)=>{
		if(err){
			console.log("error: ", res);
			result(null, err);
			return;
		}

		console.log("hoadon ", res);
		result(null, res);
	});
};

Hoadon.findById = (MaHoaDon, result) => {
  sql.query(`SELECT hoadon.MaHoaDon ,canho.Access_Code, block.TenBlock, cudan.TenCuDan, hoadon.Total, hoadon.NgayThanhToan, hoadon.TinhTrang
FROM hoadon 
	LEFT JOIN canho ON hoadon.Access_Code = canho.Access_Code 
	LEFT JOIN cudan ON cudan.Access_Code = canho.Access_Code
	LEFT JOIN block ON canho.idBlock = block.idBlock
WHERE hoadon.MaHoaDon = "${MaHoaDon}"`, (err, res) => {
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

Hoadon.updateById = (MaHoaDon, hoadon, result)=>{
	sql.query("UPDATE hoadon SET TenHD = ?, TinhTrang = ?, NgayTao = ?, Total = ?, NgayThanhToan = ?, Access_code = ?, idPTTT = ?, TongThanhToan = ? WHERE MaHoaDon = ?", 
		[hoadon.TenHD, hoadon.TinhTrang, hoadon.NgayTao, hoadon.Total, hoadon.NgayThanhToan, hoadon.Access_code, hoadon.idPTTT,hoadon.TongThanhToan, MaHoaDon],
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

		console.log("update hoadon: ", {MaHoaDon: MaHoaDon,...hoadon});
		result(null, {MaHoaDon: MaHoaDon, ...hoadon});
		});
};

Hoadon.deleteById = (MaHoaDon, result)=>{
	console.log(MaHoaDon);
	sql.query('DELETE FROM hoadon WHERE MaHoaDon = ?', [MaHoaDon], (err, res) => {
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

    	console.log('deleted hoadon with id: ', MaHoaDon);
    	result(null, res);
	});
};

module.exports = Hoadon;