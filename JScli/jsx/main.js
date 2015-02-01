var React = require('react');
var $ = require('jquery');


var Comment = React.createClass({
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
			<div style={commentListStyle} > 
				<h2> {this.props.data.author} </h2>
				<p> {this.props.data.text} </p>
				<span style={date_style} > {this.props.data.date} </span>
			</div>
			);
	}
});

var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment data={comment} />
				)
		})
		return (
			<div className='commentList'>
			{commentNodes}
			</div>
			);
	}
});

var CommentForm = React.createClass({
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
			margin: '20px none'
		};

		var textInputCommentFormStyle = {
			width: '100%',
			marginBottom: '10px',
			fontSize: '1.3em'
		}
		return (
			<form className='commentForm' onSubmit={this.handleSubmit} style={commentFormStyle} >
				<input style={textInputCommentFormStyle} type='text' placeholder='Your name' ref='author' />
				<textarea rows='5' style={textInputCommentFormStyle} type='text' placeholder='Your message' ref='text' />
				<input type='submit' value='Submit' />
			</form>
			)
	}
})

var Comments = React.createClass({
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
		setInterval(this.loadComments, 5000);
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
			<div style={commentsStyle} >
				<h1>Comments</h1>
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
				<CommentList data={this.state.data} />
			</div>
			);
	}
});

React.render(<Comments />, document.body);