// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var u=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,w,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var x=String.fromCharCode,S=isNaN,k=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,o,c,u,p,f;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",u=1,p=0;p<e.length;p++)if(l(n=e[p]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,S(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),c+=n.arg||"",u+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){return"string"==typeof e}function I(e){var r,t,n;if(!O(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var C,R=Object.prototype,P=R.toString,G=R.__defineGetter__,Z=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var B=C;function N(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function z(){return M&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,J=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",K=z()?function(e){var r,t,n,i,a;if(null==e)return H.call(e);t=e[D],a=D,r=null!=(i=e)&&J.call(i,a);try{e[D]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[D]=t:delete e[D],n}:function(e){return H.call(e)},Q=Boolean,Y=Boolean.prototype.toString,ee=z();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return U(e)||re(e)}function ne(){return new Function("return this;")()}N(te,"isPrimitive",U),N(te,"isObject",re);var ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,oe="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!U(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(oe)return oe;if(ie)return ie;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ce.document&&ce.document.childNodes,le=Int8Array,ue=X(),pe=Object.prototype.toString,fe=Object.prototype.hasOwnProperty,ge="function"==typeof q?q.toStringTag:"",de=ue&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n,i,a;if(null==e)return pe.call(e);t=e[ge],a=ge,r=null!=(i=e)&&fe.call(i,a);try{e[ge]=void 0}catch(r){return pe.call(e)}return n=pe.call(e),r?e[ge]=t:delete e[ge],n}:function(e){return pe.call(e)},he="function"==typeof Object.defineProperty?Object.defineProperty:null,ye=Object.defineProperty;function we(e){return"number"==typeof e}function be(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ve(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+be(i):be(i)+e,n&&(e="-"+e)),e}var me=String.prototype.toLowerCase,_e=String.prototype.toUpperCase;function Ee(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!we(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=ve(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=ve(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===_e.call(e.specifier)?_e.call(t):me.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function je(e){return"string"==typeof e}var xe=Math.abs,Se=String.prototype.toLowerCase,ke=String.prototype.toUpperCase,Te=String.prototype.replace,Ae=/e\+(\d)$/,Ve=/e-(\d)$/,$e=/^(\d+)$/,Fe=/^(\d+)e/,Oe=/\.0$/,Ie=/\.0*e/,Ce=/(\..*[^0])0*e/;function Re(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!we(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":xe(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Te.call(t,Ce,"$1e"),t=Te.call(t,Ie,"e"),t=Te.call(t,Oe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Te.call(t,Ae,"e+0$1"),t=Te.call(t,Ve,"e-0$1"),e.alternate&&(t=Te.call(t,$e,"$1."),t=Te.call(t,Fe,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ke.call(e.specifier)?ke.call(t):Se.call(t)}function Pe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ge(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Pe(n):Pe(n)+e}var Ze=String.fromCharCode,Le=isNaN,We=Array.isArray;function Be(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ne(e){var r,t,n,i,a,o,c,s,l;if(!We(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(je(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Be(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Le(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Le(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Ee(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Le(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Le(a)?String(n.arg):Ze(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Re(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ve(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ge(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Ue=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Me(e){var r,t,n,i;for(t=[],i=0,n=Ue.exec(e);n;)(r=e.slice(i,Ue.lastIndex-n[0].length)).length&&t.push(r),t.push(Xe(n)),i=Ue.lastIndex,n=Ue.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function ze(e){return"string"==typeof e}function He(e){var r,t,n;if(!ze(e))throw new TypeError(He("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Me(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Ne.apply(null,t)}var Je,qe=Object.prototype,De=qe.toString,Ke=qe.__defineGetter__,Qe=qe.__defineSetter__,Ye=qe.__lookupGetter__,er=qe.__lookupSetter__;Je=function(){try{return he({},"x",{}),!0}catch(e){return!1}}()?ye:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===De.call(e))throw new TypeError(He("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===De.call(t))throw new TypeError(He("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Ye.call(e,r)||er.call(e,r)?(n=e.__proto__,e.__proto__=qe,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ke&&Ke.call(e,r,t.get),o&&Qe&&Qe.call(e,r,t.set),e};var rr=Je;function tr(e,r,t){rr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function nr(){return/^\s*function\s*([^(]*)/i}var ir=/^\s*function\s*([^(]*)/i;tr(nr,"REGEXP",ir);var ar=Array.isArray?Array.isArray:function(e){return"[object Array]"===de(e)};function or(e){return null!==e&&"object"==typeof e}function cr(e){var r,t,n,i;if(("Object"===(t=de(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ir.exec(n.toString()))return r[1]}return or(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}tr(or,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(He("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ar(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(or));var sr="function"==typeof e||"object"==typeof le||"function"==typeof se?function(e){return cr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?cr(e).toLowerCase():r};function lr(e){return"function"===sr(e)}function ur(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,r,t,n){var i,a;if(!lr(e))throw new TypeError(ur("1Rr3c,J9",e));if(!lr(r))throw new TypeError(ur("1Rr2H,G6",r));if(!lr(t))throw new TypeError(ur("1Rr3N,G4",t));function o(e,o){return e?t(e):o?r.call(n,a,c):(i.length&&i.unshift(null),void t.apply(null,i))}function c(r){var n;if(r)return t(r);if(a+=1,arguments.length>1)for(i=new Array(arguments.length-1),n=1;n<arguments.length;n++)i[n-1]=arguments[n];e(a,o)}i=[],e(a=0,o)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).whileAsync=r();
//# sourceMappingURL=browser.js.map
