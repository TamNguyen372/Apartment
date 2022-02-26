const DSXe = require("../models/danhsachxe.model");

//getALL
exports.getAll = (req, res) => {
  DSXe.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving DanhSachXe.",
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
  const danhsachxe = new DSXe({
    BienSoXe: req.body.BienSoXe,
    LoaiXe: req.body.LoaiXe,
    idCuDan: req.body.idCuDan,
  });
  //
  DSXe.create(danhsachxe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Danhsachxe.",
      });
    else res.send(data);
  });
};

//FindByID
exports.findById = (req, res) => {
  DSXe.findById(req.params.BienSoXe, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Error retrieving DSXE with BienSoXe" + req.params.BienSoXe,
        });
      }
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
  DSXe.updateById(req.params.BienSoXe, new DSXe(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found DSXE with id ${req.params.BienSoXe}.",
        });
      } else {
        res.status(500).send({
          message: "Error updating DSXE with id " + req.params.BienSoXe,
        });
      }
    } else res.send(data);
  });
};

//Remove
exports.remove = (req, res) => {
  DSXe.remove(req.params.BienSoXe, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found DanhSachXe with BienSoXe ${req.params.BienSoXe}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Could not delete Danhsachxe with BienSoXe " + req.params.BienSoXe,
        });
      }
    } else res.send({ message: "DanhSachXe was deleted successfully!" });
  });
};
