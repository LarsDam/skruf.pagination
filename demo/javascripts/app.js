var React = require('react');
var Pagination = require('../../lib/skruf-pagination');
var data = require('../data');

var ListItem = React.createClass({

	render: function() {

		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.email}</td>
				<td>{this.props.ip}</td>
			</tr>
		);
	}

});

var App = React.createClass({
	
	getInitialState: function() {
		return {
			page: 1
		}
	},

	onPageChange: function(page) {

		this.setState({
			page: page
		});

	},

	render: function() {

		var pager = Pagination.start({
			page: this.state.page,
			data: data
		});

		var list = pager.result.map(function(person, index) {
			return (
				<ListItem {...person} key={index} />
			);
		});

		return (
			<div>
				<h2>Table</h2>

				<Pagination pages={pager.pages} page={pager.page} onChange={this.onPageChange} size="sm" />

				<table className="table">
					<thead>
						<th>Name</th>
						<th>Email</th>
						<th>IP</th>
					</thead>
					<tbody>{list}</tbody>
				</table>
			</div>
		);

	}

});

React.render(
	<App/>,
	document.getElementById('main')
);