// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n},r=function(){var n,r=0;return function(t){if(0===arguments.length)return n?r:null;return n=!0,r+=t*t}};var t=function(){var t=r();return function(r){if(0===arguments.length||n(r))return t();return t(r)}};export{t as default};
//# sourceMappingURL=mod.js.map
