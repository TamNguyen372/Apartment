const Loaicanho = require("../models/loaicanho.model.js");

//Create
exports.create = (req, res) => {
  //
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  //
  const loaicanho = new Loaicanho({
    MaLoaiCanHo: req.body.MaLoaiCanHo,
    TenLoai: req.body.TenLoai,
  });
  //
  Loaicanho.create(loaicanho, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Loaicanho.",
      });
    else res.send(data);
  });
};

//getALL
exports.getAll = (req, res) => {
  Loaicanho.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Loaicanho.",
      });
    } else res.send(data);
  });
};

//Update
exports.updateById = (req, res) => {
  //
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  //
  Loaicanho.updateById(
    req.params.MaLoaiCanHo,
    new Loaicanho(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: "Not found Loaicanho with id ${req.params.MaLoaiCanHo}.",
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Loaicanho with id " + req.params.MaLoaiCanHo,
          });
        }
      } else res.send(data);
    }
  );
};

//Remove
exports.remove = (req, res) => {
  Loaicanho.remove(req.params.MaLoaiCanHo, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Loaicanho with MaLoaiCanHo ${req.params.MaLoaiCanHo}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Could not delete loaicanho with MaLoaiCanHo " +
            req.params.MaLoaiCanHo,
        });
      }
    } else res.send({ message: "Loaicanho was deleted successfully!" });
  });
};
