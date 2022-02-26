const ThongBao = require("../models/thongbao.model");

exports.create = (req, res) => {
  const thongbao = new ThongBao({
    TieuDe: req.body.TieuDe,
    NoiDung: req.body.NoiDung,
    NgayDang: req.body.NgayDang,
    NguoiNhan: req.body.NguoiNhan,
    NoiDung: req.body.NoiDung,
    MaLoai: req.body.MaLoai,
    IdTK: req.body.IdTK,
    Access_Code: req.body.Access_Code,
    MaHoaDon: req.body.MaHoaDon,
  });
  ThongBao.create(thongbao, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Đã xảy ra một số lỗi khi tạo thông báo.",
      });
    else res.send(data);
  });
};

exports.getAll = (req, res) => {
  ThongBao.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Đã xảy ra một số lỗi khi truy xuất thông báo.",
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

  ThongBao.updateById(req.params.idTT, new ThongBao(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Không tìm thấy thông báo với id ${req.params.idTT}.`,
        });
      } else {
        res.status(500).send({
          message: "Lỗi khi cập nhật thông báo với id " + req.params.idTT,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  ThongBao.deleteById(req.params.idTT, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Không tìm thấy thông báo với id ${req.params.idTT}.`,
        });
      } else {
        res.status(500).send({
          message: "Lỗi khi xóa thông báo với id " + req.params.idTT,
        });
      }
    } else res.send({ message: `Xóa thành công!` });
  });
};
