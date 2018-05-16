"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Thumb = undefined;

var _PraiseButton = require("./PraiseButton");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumb = exports.Thumb = function (_Praisebutton) {
	_inherits(Thumb, _Praisebutton);

	function Thumb(el) {
		_classCallCheck(this, Thumb);

		var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, el));

		console.log("success");

		return _this;
	}

	return Thumb;
}(_PraiseButton.Praisebutton);
