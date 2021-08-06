var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    let connection = await mysqlRepo.getConnection();
    mysqlRepo.releaseConnection(connection);
  } catch (e) {
    console.log(e);
  }

  res.render("index", { title: "Express" });
});

module.exports = router;
