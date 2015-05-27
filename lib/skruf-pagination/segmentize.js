function isNumeric(index, left, right, pages, page) {

	/* first, last, current */
	if(index === 1 || index === page || index === pages) {
		return true;
	}

	/* left */
	if((index >= (page - left)) && (index < page)) {
		return true;
	}

	/* right */
	if((index <= (page + right)) && (index > page)) {
		return true;
	}

	return false;
}

function isDotted(index, left, right, pages, page) {

	if(index === (page - left - 1) && index !== 1) {
		return true;
	}

	if(index === (page + right + 1) && index !== pages) {
		return true;
	}

	return false;
}

function Segmentize(pages, left, right) {

	this.settings = {
		left: (left || 3),
		right: (right || 3),
		pages: pages
	};

	return this;
}

Segmentize.prototype.interval = function(page, pages) {
	var arr = [];
	var left;
	var right;
	var show;

	pages = (pages || this.settings.pages);
	show = this.settings.left + this.settings.right + 1;

	if(page > (pages / 2)) {
		right = Math.min(pages - page, this.settings.right);
		left = show - right - 1;
	} else {
		left = Math.min(page, this.settings.left);
		right = show - left - 1;
	}

	for(var i = 1; i <= pages; i++) {

		if(isNumeric(i, left, right, pages, page)) {

			arr.push({
				index: i,
				text: i,
				type: 'numeric'
			});

		} else if(isDotted(i, left, right, pages, page)) {

			arr.push({
				index: i,
				text: '…',
				type: 'dotted'
			});

		}

	}

	return arr;
};

module.exports = Segmentize;