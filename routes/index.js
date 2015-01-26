var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({
  	title: 'Something',
  	posts: [{title1: 'title1'},{title1: 'title1'},{title1: 'title1'},{title1: 'title1'},{title1: 'title1'}]
  })
});

module.exports = router;
