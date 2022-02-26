const LoaiThongBao = require("../models/loaithongbao.model");

exports.create = (req, res) => {
  const loaithongbao = new LoaiThongBao({
    MaLoai: req.body.MaLoai,
    TenLoai: req.body.TenLoai,
  });
  LoaiThongBao.create(loaithongbao, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Đã xảy ra một số lỗi khi tạo loại thông báo.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  LoaiThongBao.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Đã xảy ra một số lỗi khi truy xuất loại thông báo.",
      });
    else res.send(data);
  });
};

exports.updateById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Không được để trống!",
    });
  }

  LoaiThongBao.updateById(
    req.params.MaLoai,
    new LoaiThongBao(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Không tìm thấy loại thông báo với id ${req.params.MaLoai}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Lỗi khi cập nhật loại thông báo với id " + req.params.MaLoai,
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteById = (req, res) => {
  LoaiThongBao.deleteById(req.params.MaLoai, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Không tìm thấy loại thông báo với MaLoai ${req.params.MaLoai}.`,
        });
      } else {
        res.status(500).send({
          message: "Lỗi khi xóa loại thông báo với MaLoai " + req.params.MaLoai,
        });
      }
    } else res.send({ message: `Xóa thành công!` });
  });
};
