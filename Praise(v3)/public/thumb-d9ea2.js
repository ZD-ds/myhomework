!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";n.r(e);class o{constructor(t){this.el=t,this.times=0,this.el.bind("click",()=>{axios.get("/index/add").then(function(t){setTimeout(function(){console.log(t.data),$(".time").text(t.data)},1e3)})}),console.log(this.el)}}n.d(e,"Thumb",function(){return r});class r extends o{constructor(t){super(t),console.log("121")}}},,,function(t,e,n){t.exports=n(0)}]);