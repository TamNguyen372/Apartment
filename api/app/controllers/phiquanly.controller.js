const Phiquanly = require('../models/phiquanly.model');

exports.create = (req, res)=>{
	const newPhiquanly = new Phiquanly({
		idPhi: req.body.idPhi,
    TenPhi: req.body.TenPhi,
    DonGia: req.body.DonGia,
    MaLoai: req.body.MaLoai,
    MaLoaiCanHo: req.body.MaLoaiCanHo,
	});
	Phiquanly.create(newPhiquanly, (err, data)=>{
		if(err)
				res.status(500).send({
				message: err.message || 'Đã xảy ra một số khi tạo',
			});
		else res.send(data.newPhiquanly);
	});
};

exports.findOne = (req, res) =>{
  Phiquanly.findById(req.params.idPhi, (err,data)=>{
    if(err){
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `không tìm thấy Phiquanly với id ${req.params.idPhi}.`
        });
      } else{
        res.status(500).send({
            message: "lỗi truy xuất Phiquanly với id " + req.params.idPhi
        });
      }
    }else res.send(data);
  });
};

exports.findAll = (req, res) => {
	Phiquanly.getAll((err, data) => {
		if(err)
			res.status(500).send({
				message: err.message|| 'đã xảy ra một số lỗi khi truy xuất',
			});
		else res.send(data);
	});
};

exports.updateById = (req, res) => {
 
  if (!req.body) {
    res.status(400).send({
      message: 'Không được để trống!',
    });
  }

  Phiquanly.updateById(req.params.id, new Phiquanly(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy vai trò với idPhi ${req.params.idPhi}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật vai trò với idPhi ' + req.params.idPhi,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  Phiquanly.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy phí xe với idPhi ${req.params.idPhi}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa vai phí xe idPhi ' + req.params.idPhi,
        });
      }
    } else res.send({message: `Xóa thành công!`+ req.params.id});
  });
};