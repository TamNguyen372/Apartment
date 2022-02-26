const CSN = require("../models/chisonuoc.model");

//getALL
exports.getAll = (req, res) => {
  CSN.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving CSN.",
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
  const chisonuoc = new CSN({
    ChiSoNuocCu: req.body.ChiSoNuocCu,
    ChiSoNuocMoi: req.body.ChiSoNuocMoi,
    NgayCapNhat: req.body.NgayCapNhat,
    Access_Code: req.body.Access_Code,
  });
  //
  CSN.create(chisonuoc, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ChiSoNuoc.",
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
  CSN.updateById(req.params.IdCSN, new CSN(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found CSN with id ${req.params.IdCSN}.",
        });
      } else {
        res.status(500).send({
          message: "Error updating CSN with id " + req.params.IdCSN,
        });
      }
    } else res.send(data);
  });
};
