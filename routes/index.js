var express = require('express');
var router = express.Router();
var Comment = require('../model').Comment;
/* GET home page. */
router.get('/', function(req, res) {
	Comment.find(function(err, result){
		res.json(result);
	});
});

module.exports = router;
