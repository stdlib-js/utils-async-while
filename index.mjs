// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function n(n,e,i,o){var s,l;if(!r(n))throw new TypeError(t("0im3p",n));if(!r(e))throw new TypeError(t("0im2S",e));if(!r(i))throw new TypeError(t("0im3Z",i));function f(r,t){return r?i(r):t?e.call(o,l,m):(s.length&&s.unshift(null),void i.apply(null,s))}function m(r){var t;if(r)return i(r);if(l+=1,arguments.length>1)for(s=new Array(arguments.length-1),t=1;t<arguments.length;t++)s[t-1]=arguments[t];n(l,f)}s=[],n(l=0,f)}export{n as default};
//# sourceMappingURL=index.mjs.map
