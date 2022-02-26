const Phixe = require('../models/phixe.model');

exports.create = (req, res)=>{
	const newPhixe = new Phixe({
		TenPhi: req.body.TenPhi,
		DonGia: req.body.DonGia,
    MaLoai: req.body.MaLoai,
		idPhiXe: req.body.idPhiXe,
	});
	Phixe.create(newPhixe, (err, data)=>{
		if(err)
				res.status(500).send({
				message: err.message || 'Đã xảy ra một số khi tạo phí xe',
			});
		else res.send(data.newPhixe);
	});
};

exports.findAll = (req, res) => {
	Phixe.getAll((err, data) => {
		if(err)
			res.status(500).send({
				message: err.message|| 'đã xảy ra một số lỗi khi truy xuất phí xe',
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

  Phixe.updateById(req.params.id, new Phixe(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy vai trò với idPhiXe ${req.params.idPhiXe}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật vai trò với idPhiXe ' + req.params.idPhiXe,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  Phixe.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy phí xe với idPhiXe ${req.params.idPhiXe}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa vai phí xe idPhiXe ' + req.params.idPhiXe,
        });
      }
    } else res.send({message: `Xóa thành công!`+ req.params.idPhiXe});
  });
};