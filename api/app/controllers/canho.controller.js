const Canho = require("../models/canho.model");

//Tao
exports.create = (req, res) => {
  //
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  //
  const canho = new Canho({
    Access_Code: req.body.Access_Code,
    DienTich: req.body.DienTich,
    SoTang: req.body.SoTang,
    SoPhong: req.body.SoPhong,
    LinkQR: req.body.LinkQR,
    MaLoai: req.body.MaLoai,
    idBlock: req.body.idBlock,
  });
  //
  Canho.create(canho, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Canho.",
      });
    else res.send(data);
  });
};

//getALL
exports.getAll = (req, res) => {
  Canho.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving canho.",
      });
    } else res.send(data);
  });
};

//FindByID
exports.findById = (req, res) => {
  Canho.findById(req.params.Access_Code, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message:
            "Error retrieving Chungcu with Access_Code" +
            req.params.Access_Code,
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
  Canho.updateById(req.params.Access_Code, new Canho(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message:
            "Not found Canho with Access_Code ${req.params.Access_Code}.",
        });
      } else {
        res.status(500).send({
          message:
            "Error updating Canho with Access_Code " + req.params.Access_Code,
        });
      }
    } else res.send(data);
  });
};

//Remove
exports.remove = (req, res) => {
  Canho.remove(req.params.Access_Code, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Canho with Access_Code ${req.params.Access_Code}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Could not delete Canho with Access_Code " + req.params.Access_Code,
        });
      }
    } else res.send({ message: "Canho was deleted successfully!" });
  });
};
