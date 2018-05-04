"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Praisebutton = undefined;

var _jquery = require("jquery");

require("babel-polyfill");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Praisebutton = exports.Praisebutton = function Praisebutton(el) {
	_classCallCheck(this, Praisebutton);

	this.el = el;
	this.times = 0;
	var self = this;
	el.bind("click", function () {
		(0, _jquery.$)('.time').text(++self.times);
	});
};