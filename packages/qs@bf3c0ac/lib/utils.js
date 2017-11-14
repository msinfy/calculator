"use strict";var has=Object.prototype.hasOwnProperty,hexTable=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),compactQueue=function(e){for(var r;e.length;){var t=e.pop();if(r=t.obj[t.prop],Array.isArray(r)){for(var o=[],n=0;n<r.length;++n)"undefined"!=typeof r[n]&&o.push(r[n]);t.obj[t.prop]=o}}return r};exports.arrayToObject=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!=typeof e[o]&&(t[o]=e[o]);return t},exports.merge=function(e,r,t){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(t.plainObjects||t.allowPrototypes||!has.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var o=e;return Array.isArray(e)&&!Array.isArray(r)&&(o=exports.arrayToObject(e,t)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,o){has.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=exports.merge(e[o],r,t):e.push(r):e[o]=r}),e):Object.keys(r).reduce(function(e,o){var n=r[o];return has.call(e,o)?e[o]=exports.merge(e[o],n,t):e[o]=n,e},o)},exports.assign=function(e,r){return Object.keys(r).reduce(function(e,t){return e[t]=r[t],e},e)},exports.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(r){return e}},exports.encode=function(e){if(0===e.length)return e;for(var r="string"==typeof e?e:String(e),t="",o=0;o<r.length;++o){var n=r.charCodeAt(o);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?t+=r.charAt(o):n<128?t+=hexTable[n]:n<2048?t+=hexTable[192|n>>6]+hexTable[128|63&n]:n<55296||n>=57344?t+=hexTable[224|n>>12]+hexTable[128|n>>6&63]+hexTable[128|63&n]:(o+=1,n=65536+((1023&n)<<10|1023&r.charCodeAt(o)),t+=hexTable[240|n>>18]+hexTable[128|n>>12&63]+hexTable[128|n>>6&63]+hexTable[128|63&n])}return t},exports.compact=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],o=0;o<r.length;++o)for(var n=r[o],a=n.obj[n.prop],c=Object.keys(a),p=0;p<c.length;++p){var u=c[p],s=a[u];"object"==typeof s&&null!==s&&t.indexOf(s)===-1&&(r.push({obj:a,prop:u}),t.push(s))}return compactQueue(r)},exports.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},exports.isBuffer=function(e){return null!==e&&"undefined"!=typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};