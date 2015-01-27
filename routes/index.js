var express = require('express');
var router = express.Router();
var Comment = require('../model').Comment;
/* GET comments*/
router.get('/', function(req, res) {
	res.render('index');
});

router.get('/comments', function(req, res){
	Comment.find(function(err, result){
		res.json(result);
	});
})

router.get('/comments/:id', function(req, res) {
	console.log(req.body);
	Comment.findOne({_id:req.params.id},function(err, result){
		res.json(result);
	});
});

module.exports = router;
