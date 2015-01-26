var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/comments');

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

