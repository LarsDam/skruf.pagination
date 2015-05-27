'use strict';

var React = require('react');
var Item = require('./skruf-pagination/item');
var Segmentize = require('./skruf-pagination/segmentize');

var Pagination = React.createClass({

	statics: {
		start: function(options, fn) {
			var data = options.data || [];

			var page = options.page || 1;
			var pagesize = options.pagesize || 20;

			var pages = Math.ceil(data.length / pagesize);
			var start = page <= pages ? page : 1;

			return {
				pages: pages,
				result: data.slice((start - 1) * pagesize, start * pagesize + pagesize),
				page: start
			};
		}
	},

	propTypes: {
		pages: React.PropTypes.number.isRequired,
		page: React.PropTypes.number.isRequired,
		onChange: React.PropTypes.func.isRequired,
		left: React.PropTypes.number,
		right: React.PropTypes.number
	},

	getDefaultProps: function() {
		return {
			left: 3,
			right: 3
		};
	},

	render: function() {
		var classPrev;
		var classNext;
		var items = [];

		var segments = new Segmentize(this.props.pages, 3, 3);
		var interval = segments.interval(this.props.page);

		interval.forEach(function(item, i) {
			items.push(<Item index={item.index} onClick={this._changePage} key={i} active={item.index === this.props.page} title={item.text} />);
		}, this);

		if(this.props.page <= 1) {
			classPrev = 'disabled';
		}

		if(this.props.page >= this.props.pages) {
			classNext = 'disabled';
		}

		return (
			<nav>
				<ul className="pagination pagination-sm">
					<li className={classPrev} onClick={this._previous}>
						<a href="#" aria-label="Previous">
							<span aria-hidden="true">«</span>
						</a>
					</li>
					{items}
					<li className={classNext} onClick={this._next}>
						<a href="#" aria-label="Next">
							<span aria-hidden="true">»</span>
						</a>
					</li>
				</ul>
			</nav>
		);

	},

	_changePage: function(e, page) {
		this.props.onChange(e, page, this.props.pages);
	},

	_previous: function(e) {
		this.props.onChange(e, this.props.page - 1, this.props.pages);
	},

	_next: function(e) {
		this.props.onChange(e, this.props.page + 1, this.props.pages);
	}

});

module.exports = Pagination;