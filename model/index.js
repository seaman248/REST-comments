var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api_blog')
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));

var commentSchema = new mongoose.Schema({
	author: {
		type: String,
		require: true,
	},
	text: {
		type: String,
		require: true,
	},
	date: {
		type: Date,
		require: true,
		default: Date.now()
	}
});

var Comment = mongoose.model('Comment', commentSchema);
/*
for (var i=0, max = 100; i<=max; i++){
	(function(e){
		var comment = new Comment({
			author: 'Seaman ' + e,
			text: 'Its awesome ' + e
		});
		comment.save(function(err, comment){
			if (err) console.log(err);
			if (e<5) console.log(comment.date);
		});
	})(i);
}

*/
module.exports.Comment = Comment;

/**
*	Menu
*/

var pagesSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	app_name: {
		type: String,
		require: true
	},
	link: {
		type: String,
		require: true
	},

})

var Page = mongoose.model('Page', pagesSchema);
module.exports.Pages = Page;