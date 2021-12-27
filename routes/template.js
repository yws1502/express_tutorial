const express = require("express");
const router = express.Router();

router.get('/ejs', (req, res) => {
  const contents = {
    data : "hello",
  }
  res.render('template', contents);
});

module.exports = router;
