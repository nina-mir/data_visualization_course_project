var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Data Visualization Course Project',
    selected: 'home'
  });
});
console.log('Running ...')
module.exports = router;
