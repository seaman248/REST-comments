var React = require('react');

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
				<h2> {this.props.author} </h2>
				<p> {this.props.text} </p>
				<span style={date_style} > {this.props.date} </span>
			</div>
			);
	}
});

var CommentList = React.createClass({
	render: function(){
		return (<Comment author='Seaman' text='Lorem ipsum dolor sit.' date='2015-01-27T12:48:32.474Z' />);
	}
});

var Comments = React.createClass({
	render: function(){
		var commentsStyle = {
			padding: '20px'
		}
		return (
			<div style={commentsStyle} >
				<h1>Comments</h1>
				<CommentList />
			</div>
			);
	}
});

React.render(<Comments />, document.getElementById('comment_app'));