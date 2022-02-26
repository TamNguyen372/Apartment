const ThongTinpttt = require('../models/thongtinpttt.model');

exports.create = (req, res) => {
  const newThongTinpttt = new ThongTinpttt({
    SDT: req.body.SDT,
    TenChuTK: req.body. TenChuTK,
    SoTKNganHang: req.body. SoTKNganHang,
    NoiDongTien: req.body. NoiDongTien,
    GioLamViec: req.body.GioLamViec,
    ChiNhanh: req.body.ChiNhanh,
  });
  ThongTinpttt.create(newThongTinpttt, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Đã xảy ra một số lỗi khi tạo ThongTinpttt.',
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
    ThongTinpttt.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Đã xảy ra một số lỗi khi truy xuất ThongTinpttt.',
      });
    else res.send(data);
  });
};

exports.updateById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Không được để trống!',
    });
  }

  ThongTinpttt.updateById(req.params.id, new ThongTinpttt(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy ThongTinpttt với id ${req.params.idThongTin}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật ThongTinpttt với id ' + req.params.idThongTin,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
    ThongTinpttt.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy ThongTinpttt với id ${req.params.idThongTin}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa ThongTinpttt với id ' + req.params.idThongTin,
        });
      }
    } else res.send({message: `Xóa thành công!`});
  });
};
