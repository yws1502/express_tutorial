var express = require('express');
var router = express.Router();
const loginCheck = require('../module/loginCheck');

router.get('/', loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success",
  });
});

module.exports = router;
