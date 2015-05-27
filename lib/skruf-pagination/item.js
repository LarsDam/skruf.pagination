var React = require('react');

var Item = React.createClass({

	getDefaultProps: function() {
		return {
			active: false
		};
	},

	render: function() {
		var cls;

		if(this.props.active) {
			cls = 'active';
		}

		return (
			<li className={cls}>
				<a href="#" onClick={this._onClick}>{this.props.title}</a>
			</li>
		);
	},

	_onClick: function(e) {
		this.props.onClick(e, this.props.index);
	}

});

module.exports = Item;