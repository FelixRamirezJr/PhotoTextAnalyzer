var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var g_key = process.env.G_API_KEY;
  res.render('index', { g_api_key: g_key });
});

module.exports = router;
