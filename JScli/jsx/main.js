var React = require('react');

var CommentList = React.createClass({
	render: function(){
		return (
			<h1>Comments</h1>
			);
	}
});

React.render(<CommentList />, document.getElementById('comment_app'));