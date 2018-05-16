"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Praisebutton = exports.Praisebutton = function Praisebutton(el) {
	_classCallCheck(this, Praisebutton);

	this.el = el;
	this.times = 0;
	this.el.bind("click", function () {
		// $.ajax({
		// 	type: 'get',
		// 	url: '/index/add',
		//  success: function ( data ) {
		// 	$(".time").text(data);
		//  },
		// error: function ( data ) {
		//   alert(data);
		// }
		// });
		axios.get('/index/add').then(function (response) {
			setTimeout(function () {
				console.log(response.data);
				$(".time").text(response.data);
			}, 1000);
		});
	});
	console.log(this.el);
};
