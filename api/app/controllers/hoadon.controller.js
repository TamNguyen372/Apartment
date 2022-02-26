const Hoadon = require('../models/hoadon.model');

exports.create = (req, res)=>{
	const newHoadon = new Hoadon({
		MaHoaDon: req.body.MaHoaDon,
    TenHD: req.body.TenHD,
    TinhTrang: req.body.TinhTrang,
    NgayTao: req.body.NgayTao,
    Total: req.body.Total,
    NgayThanhToan: req.body.NgayThanhToan,
    Access_Code: req.body.Access_Code,
    idPTTT: req.body.idPTTT,
    TongThanhToan: req.body.TongThanhToan,
	});
	Hoadon.create(newHoadon, (err, data)=>{
		if(err)
				res.status(500).send({
				message: err.message || 'Đã xảy ra một số khi tạo',
			});
		else res.send(data.newHoadon);
	});
};

exports.findOne = (req, res) =>{
  Hoadon.findById(req.params.MaHoaDon, (err,data)=>{
    console.log(data);
    if(err){
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `không tìm thấy Hoadon với id ${req.params.MaHoaDon}.`
        });
      } else{
        res.status(500).send({
            message: "lỗi truy xuất Hoadon với id " + req.params.MaHoaDon
        });
      }
    }else res.send(data);
  });
};

exports.findAll = (req, res) => {
	Hoadon.getAll((err, data) => {
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

  Hoadon.updateById(req.params.id, new Hoadon(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy vai trò với MaHoaDon ${req.params.MaHoaDon}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật vai trò với MaHoaDon ' + req.params.MaHoaDon,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  Hoadon.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy phí xe với MaHoaDon ${req.params.MaHoaDon}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa vai phí xe MaHoaDon ' + req.params.MaHoaDon,
        });
      }
    } else res.send({message: `Xóa thành công!`+ req.params.id});
  });
};