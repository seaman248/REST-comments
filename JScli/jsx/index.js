var React = require('react');
var Comments = require('./comment.js');
var Backbone = require('backbone');



var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'comment': 'comment',
		'about': 'about'
	},
	index: function(){
		console.log('index');
	},
	comment: function(){
		React.render(<Comments />, document.body);
	},
	about: function(){
		console.log('about');
	}
});

var router = new Router();

Backbone.history.start();

console.log(router);