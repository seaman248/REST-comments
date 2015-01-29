var React = require('react');

var Comment = React.createClass({displayName: "Comment",
	render: function(){
		var date_style = {
			fontSize: '12px',
			color: 'grey'
		}
		var commentListStyle = {
			backgroundColor: '#E2F3FF',
			margin: '10px 0',
			padding: '15px'
		}
		return (
			React.createElement("div", {style: commentListStyle}, 
				React.createElement("h2", null, " ", this.props.author, " "), 
				React.createElement("p", null, " ", this.props.text, " "), 
				React.createElement("span", {style: date_style}, " ", this.props.date, " ")
			)
			);
	}
});

var CommentList = React.createClass({displayName: "CommentList",
	render: function(){
		return (React.createElement(Comment, {author: "Seaman", text: "Lorem ipsum dolor sit.", date: "2015-01-27T12:48:32.474Z"}));
	}
});

var Comments = React.createClass({displayName: "Comments",
	render: function(){
		var commentsStyle = {
			padding: '20px'
		}
		return (
			React.createElement("div", {style: commentsStyle}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, null)
			)
			);
	}
});

React.render(React.createElement(Comments, null), document.getElementById('comment_app'));