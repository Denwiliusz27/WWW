var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sala', function(req, res, next) {
  res.render('index', { title: 'sala' });
});

module.exports = router;
