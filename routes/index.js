var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.status(202);
  res.json({"response" : true});

});

module.exports = router;
