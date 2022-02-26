const Cudan = require("../models/cudan.model");

//getALL
exports.getAll = (req, res) => {
  Cudan.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cudan.",
      });
    } else res.send(data);
  });
};

//Create
exports.create = (req, res) => {
  //
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  //
  const cudan = new Cudan({
    TenCuDan: req.body.TenCuDan,
    GoiTinh: req.body.GioiTinh,
    SoDienThoai: req.body.SoDienThoai,
    mail: req.body.mail,
    NgayDangKy: req.body.NgayDangKy,
    Access_Code: req.body.Access_Code,
  });
  //
  Cudan.create(cudan, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Cudan.",
      });
    else res.send(data);
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
  Cudan.updateById(req.params.idCuDan, new Cudan(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Cudan with id ${req.params.idCuDan}.",
        });
      } else {
        res.status(500).send({
          message: "Error updating Cudan with id " + req.params.idCuDan,
        });
      }
    } else res.send(data);
  });
};

//FindByID
exports.findById = (req, res) => {
  Cudan.findById(req.params.idCuDan, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Error retrieving Cudan with idCuDan" + req.params.idCuDan,
        });
      }
    } else res.send(data);
  });
};

//Remove
exports.remove = (req, res) => {
  Cudan.remove(req.params.idCuDan, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cudan with idCuDan ${req.params.idCuDan}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Cudan with idCudan " + req.params.idCuDan,
        });
      }
    } else res.send({ message: "cudan was deleted successfully!" });
  });
};
