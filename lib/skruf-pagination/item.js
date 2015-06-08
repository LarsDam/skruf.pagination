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

		if(this.props.type === 'dotted') {
			cls = 'disabled';
		}

		return (
			<li className={cls}>
				<a href="#" onClick={this._onClick}>{this.props.text}</a>
			</li>
		);
	},

	_onClick: function(e) {
		this.props.onClick(e, this.props.index, this.props.type);
	}

});

module.exports = Item;