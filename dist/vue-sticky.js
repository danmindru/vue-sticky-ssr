!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSticky=e():t.VueSticky=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i,o,r=arguments,s=function(t){var e=t.value||{};return{stickyTop:e.stickyTop||0,zIndex:e.zIndex||1e3,disabled:e.disabled}},u=function(){window.removeEventListener("scroll",i)},c=function(){window.addEventListener("scroll",i)},d={},p={};e.default={bind:function(t,e){d=s(e),p=function(t){return{zIndex:t.style.zIndex}}(t);var n=d.disabled,u=d.stickyTop,f=d.zIndex;if(!n){var l=t.style;l.position="-webkit-sticky",l.position="sticky";var a=t.firstElementChild.style;(o=~l.position.indexOf("sticky"))?(l.top=u+"px",l.zIndex=f):(l.position="",a.cssText="left: 0; right: 0; top: "+u+"px; z-index: "+f+"; "+a.cssText);var x=!1;i=function(t,e){var n,i,o,s,u;function c(){t.apply(s,u),i=n}return void 0===e&&(e=100),function(){if(s=void 0,u=r,n=+new Date,o&&(clearTimeout(o),o=null),i){var t=e-(n-i);t<0?c():o=setTimeout(function(){c()},t)}else c()}}(function(){t.getBoundingClientRect().top<=u?o||x||(l.height||(l.height=t.offsetHeight+"px"),a&&(a.position="fixed"),x=!0):!o&&x&&(a.position="static",x=!1)}),c()}},unbind:u,update:function(t,e){var n=(d=s(e)).stickyTop,i=d.zIndex,r=t.firstElementChild.style;o?(t.style.top=n+"px",t.style.zIndex=i):(r.top=n+"px",r.zIndex=i),d.disabled?o?t.style.position="":(r.position="",r.top="",r.zIndex=p.zIndex,u()):o?(t.style.position="-webkit-sticky",t.style.position="sticky"):c()}}}])});