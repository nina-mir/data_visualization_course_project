var express = require('express');
var router = express.Router();

/* GET bar_charts page. */
router.get('/', function(req, res, next) {
    res.render('bar_charts', {
        selected: 'bar_charts'
    });
});

module.exports = router;
