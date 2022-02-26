const Loaiphi = require('../models/loaiphi.model');

exports.create = (req, res) => {
  const newLoaiphi = new Loaiphi({
    MaLoai: req.body.MaLoai,
    TenLoai: req.body.TenLoai,
  });
  Loaiphi.create(newLoaiphi, (err, data) => {
    if (err)
        res.status(500).send({
        message: err.message || 'Đã xảy ra một số lỗi khi tạo loại phí.',
      });
    else res.send(data.newLoaiphi);
  });
};

exports.findAll = (req, res) => {
  Loaiphi.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Đã xảy ra một số lỗi khi truy xuất loại phí',
      });
    else res.send(data);
  });
};

exports.updateById = (req, res) => {
  // ValMaLoaiate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Không được để trống!',
    });
  }

  Loaiphi.updateById(req.params.id, new Loaiphi(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy vai trò với MaLoai ${req.params.MaLoai}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật vai trò với MaLoai ' + req.params.MaLoai,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  Loaiphi.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy vai trò với MaLoai ${req.params.MaLoai}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa vai trò với MaLoai ' + req.params.MaLoai,
        });
      }
    } else res.send({message: `Xóa thành công!`});
  });
};
