const phuongthucthanhtoan = require('../models/phuongthucthanhtoan.model');

exports.create = (req, res) => {
  const newphuongthucthanhtoan = new Tphuongthucthanhtoan({
    TenLoai: req.body.TenLoai,
  });
  phuongthucthanhtoan.create(newphuongthucthanhtoan, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Đã xảy ra một số lỗi khi tạo phương thức thanh toán.',
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  phuongthucthanhtoan.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Đã xảy ra một số lỗi khi truy xuất phương thức thanh toán.',
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

  phuongthucthanhtoan.updateById(req.params.id, new phuongthucthanhtoan(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy phương thứcthanh toán với id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật phương thức thanh toán với id ' + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  phuongthucthanhtoan.deleteById(req.params.idP, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy phương thức thanh toán với id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa phương thức thanh toán với id ' + req.params.id,
        });
      }
    } else res.send({message: `Xóa thành công!`});
  });
};
