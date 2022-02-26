const Phinuoc = require('../models/phinuoc.model');

exports.create = (req, res)=>{
	const newPhinuoc = new Phinuoc({
		DinhMuc: req.body.DinhMuc,
		DonGia: req.body.DonGia,
    MaLoai: req.body.MaLoai,
		IdNuoc: req.body.IdNuoc,
	});
	Phinuoc.create(newPhinuoc, (err, data)=>{
		if(err)
				res.status(500).send({
				message: err.message || 'Đã xảy ra một số khi tạo phí nước',
			});
		else res.send(data.newPhinuoc);
	});
};

exports.findAll = (req, res) => {
	Phinuoc.getAll((err, data) => {
		if(err)
			res.status(500).send({
				message: err.message|| 'đã xảy ra một số lỗi khi truy xuất phí nước',
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

  Phinuoc.updateById(req.params.id, new Phinuoc(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy phí nước với IdNuoc ${req.params.IdNuoc}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật phí nước với IdNuoc ' + req.params.IdNuoc,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  Phinuoc.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy phí nước với  IdNuoc ${req.params. IdNuoc}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa vai phí nước IdNuoc ' + req.params.IdNuoc,
        });
      }
    } else res.send({message: `Xóa thành công!`});
  });
};