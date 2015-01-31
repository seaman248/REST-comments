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

var Comments = React.createClass({
	getInitialState: function(){
		return {data: [
			 {
    "_id": "54c789208bec42756ffd1741",
    "author": "Seaman",
    "text": "Its awesome",
    "__v": 0,
    "date": "2015-01-27T12:48:32.474Z"
  },
  {
    "_id": "54c789af4fba63cb6f44d982",
    "author": "Seaman 0",
    "text": "Its awesome 0",
    "__v": 0,
    "date": "2015-01-27T12:50:55.966Z"
  }
			]}
	},
	render: function(){
		var commentsStyle = {
			padding: '20px'
		}
		return (
			<div style={commentsStyle} >
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
			</div>
			);
	}
});

React.render(<Comments />, document.body);