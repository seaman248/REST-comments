var React = require('react');

var CommentList = React.createClass({displayName: "CommentList",
	render: function(){
		return (
			React.createElement("h1", null, "Comments")
			);
	}
});

React.render(React.createElement(CommentList, null), document.getElementById('comment_app'));