const Chungcu = require("../models/chungcu.model");

//Create
exports.create = (req, res) => {
  //
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  //
  const chungcu = new Chungcu({
    MaKhu: req.body.MaKhu,
    TenChungCu: req.body.TenChungCu,
    DiaChi: req.body.DiaChi,
    SLBlock: req.body.SLBlock,
    SLTang: req.body.SLTang,
    SLPhong: req.body.SLPhong,
    ChuNhaDauTu: req.body.ChuNhaDauTu,
  });
  //
  Chungcu.create(chungcu, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Chungcu.",
      });
    else res.send(data);
  });
};
//FindByID
exports.findById = (req, res) => {
  Chungcu.findById(req.params.MaKhu, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Error retrieving Chungcu with MaKhu" + req.params.MaKhu,
        });
      }
    } else res.send(data);
  });
};

//getALL
exports.getAll = (req, res) => {
  Chungcu.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving chungcu.",
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
  Chungcu.updateById(req.params.MaKhu, new Chungcu(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Chungcu with MaKhu ${req.params.MaKhu}.",
        });
      } else {
        res.status(500).send({
          message: "Error updating Chungcu with makhu " + req.params.MaKhu,
        });
      }
    } else res.send(data);
  });
};

//Remove
exports.remove = (req, res) => {
  Chungcu.remove(req.params.MaKhu, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Chungcu with MaKhu ${req.params.MaKhu}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Chungcu with makhu " + req.params.MaKhu,
        });
      }
    } else res.send({ message: "Chungcu was deleted successfully!" });
  });
};
