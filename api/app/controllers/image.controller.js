const image = require('../models/image.model');

exports.create = (req, res) => {
  const newimage = new image({
    TieuDe: req.body.TieuDe,
    LinkHinhAnh: req.body.LinkHinhAnh,
    idTB: req.body.idTB,
    idQC: req.body.idQC,
    idTT: req.body.idTT,
   Access_Code: req.body.Access_Code,
   idPTTT: req.body.idPTTT,
  });
  image.create(newimage, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Đã xảy ra một số lỗi khi tạo image.',
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
    image.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Đã xảy ra một số lỗi khi truy xuất image.',
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

  image.updateById(req.params.id, new image(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy image với id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi cập nhật image với id ' + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
    image.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Không tìm thấy image với id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Lỗi khi xóa image với id ' + req.params.id,
        });
      }
    } else res.send({message: `Xóa thành công!`});
  });
};
