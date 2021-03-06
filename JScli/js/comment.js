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

var CommentForm = React.createClass({displayName: "CommentForm",
	handleSubmit: function(e){
		e.preventDefault();
		var author = this.refs.author.getDOMNode().value.trim();
		var text = this.refs.text.getDOMNode().value.trim();
		if (!text || !author){
			return;
		}
		this.props.onCommentSubmit({author: author, text: text});
		this.refs.author.getDOMNode().value = '';
		this.refs.text.getDOMNode().value = '';
		return;
	},
	render: function(){
		var commentFormStyle = {
			backgroundColor: '#3F92FF',
			width: '100%',
			padding: '20px',
			margin: '20px none',
			borderRadius: '5px'
		};

		var textInputCommentFormStyle = {
			width: '100%',
			marginBottom: '10px',
			fontSize: '1.3em',

		};

		var submitStyle = {
			fontSize: '1.3em',
			backgroundColor: 'white',
			border: 'none',
			padding: '10px',
			borderRadius: '5px'
		}
		return (
			React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit, style: commentFormStyle}, 
				React.createElement("input", {style: textInputCommentFormStyle, type: "text", placeholder: "Your name", ref: "author"}), 
				React.createElement("textarea", {rows: "5", style: textInputCommentFormStyle, type: "text", placeholder: "Your message", ref: "text"}), 
				React.createElement("input", {style: submitStyle, type: "submit", value: "Submit"})
			)
			)
	}
})

var Comments = React.createClass({displayName: "Comments",
	loadComments: function(){
		$.ajax({
			url: '/comments',
			dataType: 'json',
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/comments', status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function(){
		return {data: []}
	},
	componentDidMount: function(){
		this.loadComments();
		setInterval(this.loadComments, 10000);
	},
	handleCommentSubmit: function(comment){
		var comments = this.state.data;
		var newComments = comments.concat([comment]);
		this.setState({data: newComments});
		$.ajax({
			url: '/comments',
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data){
				console.log(data);
				this.loadComments();
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/comments', status, err.toString());
			}
		})
	},
	render: function(){
		var commentsStyle = {
			padding: '20px'
		}
		return (
			React.createElement("div", {style: commentsStyle}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit}), 
				React.createElement(CommentList, {data: this.state.data})
			)
			);
	}
});

module.exports = Comments;