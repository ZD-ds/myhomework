"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Praisebutton = exports.Praisebutton = function Praisebutton(el) {
	var _this = this;

	_classCallCheck(this, Praisebutton);

	this.el = el;
	this.times = 0;
	this.el.bind("click", function () {

		_this.times = add(_this.times);
		$('.time').text(_this.times);
	});
	console.log(this.el);
};
