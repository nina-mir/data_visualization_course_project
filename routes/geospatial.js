var express = require('express');
var router = express.Router();

/* GET barchart page. */
router.get('/', function(req, res, next) {
    res.render('geospatial', {
        selected: 'geospatial'
    });
});

module.exports = router;
