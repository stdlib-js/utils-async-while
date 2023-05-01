// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).whileAsync=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,l=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||c.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&l&&l.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var r,e,n,o,i;if(null==t)return v.call(t);e=t[g],i=g,r=null!=(o=t)&&d.call(o,i);try{t[g]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[g]=e:delete t[g],n}:function(t){return v.call(t)},w=Boolean.prototype.toString;var h=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function j(t){return y(t)||_(t)}function S(){return new Function("return this;")()}p(j,"isPrimitive",y),p(j,"isObject",_);var E="object"==typeof self?self:null,A="object"==typeof window?window:null,T="object"==typeof global?global:null;var O=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=O.document&&O.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function k(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return k(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(k,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(k));var L="function"==typeof t||"object"==typeof P||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function F(t){return"function"===L(t)}function I(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,r,e,n){var o,i;if(!F(t))throw new TypeError(I("0im3p",t));if(!F(r))throw new TypeError(I("0im2S",r));if(!F(e))throw new TypeError(I("0im3Z",e));function u(t,u){return t?e(t):u?r.call(n,i,l):(o.length&&o.unshift(null),void e.apply(null,o))}function l(r){var n;if(r)return e(r);if(i+=1,arguments.length>1)for(o=new Array(arguments.length-1),n=1;n<arguments.length;n++)o[n-1]=arguments[n];t(i,u)}o=[],t(i=0,u)}}));
//# sourceMappingURL=index.js.map
