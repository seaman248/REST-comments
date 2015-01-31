var React = require('react');
var $ = require('jquery');


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
				React.createElement("h2", null, " ", this.props.data.author, " "), 
				React.createElement("p", null, " ", this.props.data.text, " "), 
				React.createElement("span", {style: date_style}, " ", this.props.data.date, " ")
			)
			);
	}
});

var CommentList = React.createClass({displayName: "CommentList",
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				React.createElement(Comment, {data: comment})
				)
		})
		return (
			React.createElement("div", {className: "commentList"}, 
			commentNodes
			)
			);
	}
});

var Comments = React.createClass({displayName: "Comments",
	getInitialState: function(){
		return {data: []}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/comments',
			dataType: 'json',
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/comments', status, err.toString());
			}.bind(this)
		})
	},
	render: function(){
		var commentsStyle = {
			padding: '20px'
		}
		return (
			React.createElement("div", {style: commentsStyle}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, {data: this.state.data})
			)
			);
	}
});

React.render(React.createElement(Comments, null), document.body);