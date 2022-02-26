const Chitiethoadon = require('../models/chitiethoadon.model');

exports.create = (req, res)=>{
	const newChitiethoadon = new Chitiethoadon({
		MaHoaDon: req.body.MaHoaDon,
    idPhi: req.body.idPhi,
    idPhiXe: req.body.idPhiXe,
    IdNuoc: req.body.IdNuoc,
    SLXeMay: req.body.SLXeMay,
    SLXeOto: req.body.SLXeOto,
    ChiSoMoi: req.body.ChiSoMoi,
    GhiChu: req.body.GhiChu,
	});
	Chitiethoadon.create(newChitiethoadon, (err, data)=>{
		if(err)
				res.status(500).send({
				message: err.message || 'Đã xảy ra một số khi tạo',
			});
		else res.send(data.newChitiethoadon);
	});
};

// exports.findOne = (req, res) =>{
//   Chitiethoadon.findById(req.params.MaHoaDon, (err,data)=>{
//     console.log(data);
//     if(err){
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `không tìm thấy Hoadon với id ${req.params.MaHoaDon}.`
//         });
//       } else{
//         res.status(500).send({
//             message: "lỗi truy xuất Hoadon với id " + req.params.MaHoaDon
//         });
//       }
//     }else res.send(data);
//   });
// };

exports.findAll = (req, res) => {
	Chitiethoadon.getAll((err, data) => {
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

  Chitiethoadon.updateById(req.params.id, new Chitiethoadon(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy chi tiết hóa đơn với MaHoaDon ${req.params.MaHoaDon}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật chi tiết hóa đơn với MaHoaDon ' + req.params.MaHoaDon,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  Chitiethoadon.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy chi tiết hóa đơn với MaHoaDon ${req.params.MaHoaDon}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa chi tiết hóa đơn  với MaHoaDon: ' + req.params.MaHoaDon,
        });
      }
    } else res.send({message: `Xóa thành công!`+ req.params.id});
  });
};