const sql = require("./db.js");
//

const CSN = function (chisonuoc) {
  this.ChiSoNuocCu = chisonuoc.ChiSoNuocCu;
  this.ChiSoNuocMoi = chisonuoc.ChiSoNuocMoi;
  this.NgayCapNhat = chisonuoc.NgayCapNhat;
  this.Access_Code = chisonuoc.Access_Code;
};

//Xem
CSN.getAll = (result) => {
  sql.query("SELECT * FROM chisonuoc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("chisonuoc: ", res);
    result(null, res);
  });
};

//Them
CSN.create = (CSN, result) => {
  sql.query("INSERT INTO chisonuoc SET ?", CSN, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created chisonuoc: ", { CSN });
    result(null, { CSN });
  });
};

//Sua
CSN.updateById = (IdCSN, chisonuoc, result) => {
  sql.query(
    "UPDATE chisonuoc SET ChiSoNuocCu = ?, ChiSoNuocMoi =?, NgayCapNhat=?, Access_Code=?   WHERE IdCSN = ?",
    [
      chisonuoc.ChiSoNuocCu,
      chisonuoc.ChiSoNuocMoi,
      chisonuoc.NgayCapNhat,
      chisonuoc.Access_Code,
      IdCSN,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated chisonuoc: ", { IdCSN: IdCSN, ...chisonuoc });
      result(null, { IdCSN: IdCSN, ...chisonuoc });
    }
  );
};

module.exports = CSN;
