montageDefine("2b669b9","js/release/debuggability",{dependencies:["./errors","./util"],factory:function(t,n,e){"use strict";e.exports=function(n,e){function r(t,n){return{promise:n}}function o(){return!1}function i(t,n,e){var r=this;try{t(n,e,function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+A.toString(t));r._attachCancellationCallback(t)})}catch(o){return o}}function a(t){if(!this._isCancellable())return this;var n=this._onCancel();void 0!==n?A.isArray(n)?n.push(t):this._setOnCancel([n,t]):this._setOnCancel(t)}function c(){return this._onCancelField}function s(t){this._onCancelField=t}function l(){this._cancellationParent=void 0,this._onCancelField=void 0}function u(t,n){if(0!==(1&n)){this._cancellationParent=t;var e=t._branchesRemainingToCancel;void 0===e&&(e=0),t._branchesRemainingToCancel=e+1}0!==(2&n)&&t._isBound()&&this._setBoundTo(t._boundTo)}function f(t,n){0!==(2&n)&&t._isBound()&&this._setBoundTo(t._boundTo)}function d(){var t=this._boundTo;return void 0!==t&&t instanceof n?t.isFulfilled()?t.value():void 0:t}function p(){this._trace=new N(this._peekContext())}function h(t,n){if(G(t)){var e=this._trace;if(void 0!==e&&n&&(e=e._parent),void 0!==e)e.attachExtraTrace(t);else if(!t.__stackCleaned__){var r=T(t);A.notEnumerableProp(t,"stack",r.message+"\n"+r.stack.join("\n")),A.notEnumerableProp(t,"__stackCleaned__",!0)}}}function v(t,n,e,r,o){if(void 0===t&&null!==n&&X){if(void 0!==o&&o._returnedNonUndefined())return;if(0===(65535&r._bitField))return;e&&(e+=" ");var i="",a="";if(n._trace){for(var c=n._trace.stack.split("\n"),s=b(c),l=s.length-1;l>=0;--l){var u=s[l];if(!H.test(u)){var f=u.match(W);f&&(i="at "+f[1]+":"+f[2]+":"+f[3]+" ");break}}if(s.length>0)for(var d=s[0],l=0;l<c.length;++l)if(c[l]===d){l>0&&(a="\n"+c[l-1]);break}}var p="a promise was created in a "+e+"handler "+i+"but was not returned from it, see http://goo.gl/rRqMUw"+a;r._warn(p,!0,n)}}function _(t,n){var e=t+" is deprecated and will be removed in a future version.";return n&&(e+=" Use "+n+" instead."),g(e)}function g(t,e,r){if(it.warnings){var o,i=new O(t);if(e)r._attachExtraTrace(i);else if(it.longStackTraces&&(o=n._peekContext()))o.attachExtraTrace(i);else{var a=T(i);i.stack=a.message+"\n"+a.stack.join("\n")}tt("warning",i)||w(i,"",!0)}}function y(t,n){for(var e=0;e<n.length-1;++e)n[e].push("From previous event:"),n[e]=n[e].join("\n");return e<n.length&&(n[e]=n[e].join("\n")),t+"\n"+n.join("\n")}function m(t){for(var n=0;n<t.length;++n)(0===t[n].length||n+1<t.length&&t[n][0]===t[n+1][0])&&(t.splice(n,1),n--)}function k(t){for(var n=t[0],e=1;e<t.length;++e){for(var r=t[e],o=n.length-1,i=n[o],a=-1,c=r.length-1;c>=0;--c)if(r[c]===i){a=c;break}for(var c=a;c>=0;--c){var s=r[c];if(n[o]!==s)break;n.pop(),o--}n=r}}function b(t){for(var n=[],e=0;e<t.length;++e){var r=t[e],o="    (No stack trace)"===r||$.test(r),i=o&&et(r);o&&!i&&(M&&" "!==r.charAt(0)&&(r="    "+r),n.push(r))}return n}function E(t){for(var n=t.stack.replace(/\s+$/g,"").split("\n"),e=0;e<n.length;++e){var r=n[e];if("    (No stack trace)"===r||$.test(r))break}return e>0&&"SyntaxError"!=t.name&&(n=n.slice(e)),n}function T(t){var n=t.stack,e=t.toString();return n="string"==typeof n&&n.length>0?E(t):["    (No stack trace)"],{message:e,stack:"SyntaxError"==t.name?n:b(n)}}function w(t,n,e){if("undefined"!=typeof console){var r;if(A.isObject(t)){var o=t.stack;r=n+q(o,t)}else r=n+String(t);"function"==typeof I?I(r,e):"function"!=typeof console.log&&"object"!=typeof console.log||console.log(r)}}function C(t,n,e,r){var o=!1;try{"function"==typeof n&&(o=!0,"rejectionHandled"===t?n(r):n(e,r))}catch(i){x.throwLater(i)}"unhandledRejection"===t?tt(t,e,r)||o||w(e,"Unhandled rejection "):tt(t,r)}function R(t){var n;if("function"==typeof t)n="[function "+(t.name||"anonymous")+"]";else{n=t&&"function"==typeof t.toString?t.toString():A.toString(t);var e=/\[object [a-zA-Z0-9$_]+\]/;if(e.test(n))try{var r=JSON.stringify(t);n=r}catch(o){}0===n.length&&(n="(empty array)")}return"(<"+S(n)+">, no stack trace)"}function S(t){var n=41;return t.length<n?t:t.substr(0,n-3)+"..."}function j(){return"function"==typeof ot}function U(t){var n=t.match(rt);if(n)return{fileName:n[1],line:parseInt(n[2],10)}}function F(t,n){if(j()){for(var e,r,o=t.stack.split("\n"),i=n.stack.split("\n"),a=-1,c=-1,s=0;s<o.length;++s){var l=U(o[s]);if(l){e=l.fileName,a=l.line;break}}for(var s=0;s<i.length;++s){var l=U(i[s]);if(l){r=l.fileName,c=l.line;break}}a<0||c<0||!e||!r||e!==r||a>=c||(et=function(t){if(P.test(t))return!0;var n=U(t);return!!(n&&n.fileName===e&&a<=n.line&&n.line<=c)})}}function N(t){this._parent=t,this._promisesCreated=0;var n=this._length=1+(void 0===t?0:t._length);ot(this,N),n>32&&this.uncycle()}var L,B,I,D=n._getDomain,x=n._async,O=t("./errors").Warning,A=t("./util"),G=A.canAttachTrace,P=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,H=/\((?:timers\.js):\d+:\d+\)/,W=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,$=null,q=null,M=!1,Q=!(0==A.env("BLUEBIRD_DEBUG")||!A.env("BLUEBIRD_DEBUG")&&"development"!==A.env("NODE_ENV")),V=!(0==A.env("BLUEBIRD_WARNINGS")||!Q&&!A.env("BLUEBIRD_WARNINGS")),K=!(0==A.env("BLUEBIRD_LONG_STACK_TRACES")||!Q&&!A.env("BLUEBIRD_LONG_STACK_TRACES")),X=0!=A.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(V||!!A.env("BLUEBIRD_W_FORGOTTEN_RETURN"));n.prototype.suppressUnhandledRejections=function(){var t=this._target();t._bitField=t._bitField&-1048577|524288},n.prototype._ensurePossibleRejectionHandled=function(){if(0===(524288&this._bitField)){this._setRejectionIsUnhandled();var t=this;setTimeout(function(){t._notifyUnhandledRejection()},1)}},n.prototype._notifyUnhandledRejectionIsHandled=function(){C("rejectionHandled",L,void 0,this)},n.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},n.prototype._returnedNonUndefined=function(){return 0!==(268435456&this._bitField)},n.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue();this._setUnhandledRejectionIsNotified(),C("unhandledRejection",B,t,this)}},n.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},n.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=this._bitField&-262145},n.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},n.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},n.prototype._unsetRejectionIsUnhandled=function(){this._bitField=this._bitField&-1048577,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},n.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},n.prototype._warn=function(t,n,e){return g(t,n,e||this)},n.onPossiblyUnhandledRejection=function(t){var n=D();B="function"==typeof t?null===n?t:A.domainBind(n,t):void 0},n.onUnhandledRejectionHandled=function(t){var n=D();L="function"==typeof t?null===n?t:A.domainBind(n,t):void 0};var z=function(){};n.longStackTraces=function(){if(x.haveItemsQueued()&&!it.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!it.longStackTraces&&j()){var t=n.prototype._captureStackTrace,r=n.prototype._attachExtraTrace;it.longStackTraces=!0,z=function(){if(x.haveItemsQueued()&&!it.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");n.prototype._captureStackTrace=t,n.prototype._attachExtraTrace=r,e.deactivateLongStackTraces(),x.enableTrampoline(),it.longStackTraces=!1},n.prototype._captureStackTrace=p,n.prototype._attachExtraTrace=h,e.activateLongStackTraces(),x.disableTrampolineIfNecessary()}},n.hasLongStackTraces=function(){return it.longStackTraces&&j()};var J=function(){try{if("function"==typeof CustomEvent){var t=new CustomEvent("CustomEvent");return A.global.dispatchEvent(t),function(t,n){var e=new CustomEvent(t.toLowerCase(),{detail:n,cancelable:!0});return!A.global.dispatchEvent(e)}}if("function"==typeof Event){var t=new Event("CustomEvent");return A.global.dispatchEvent(t),function(t,n){var e=new Event(t.toLowerCase(),{cancelable:!0});return e.detail=n,!A.global.dispatchEvent(e)}}var t=document.createEvent("CustomEvent");return t.initCustomEvent("testingtheevent",!1,!0,{}),A.global.dispatchEvent(t),function(t,n){var e=document.createEvent("CustomEvent");return e.initCustomEvent(t.toLowerCase(),!1,!0,n),!A.global.dispatchEvent(e)}}catch(n){}return function(){return!1}}(),Y=function(){return A.isNode?function(){return process.emit.apply(process,arguments)}:A.global?function(t){var n="on"+t.toLowerCase(),e=A.global[n];return!!e&&(e.apply(A.global,[].slice.call(arguments,1)),!0)}:function(){return!1}}(),Z={promiseCreated:r,promiseFulfilled:r,promiseRejected:r,promiseResolved:r,promiseCancelled:r,promiseChained:function(t,n,e){return{promise:n,child:e}},warning:function(t,n){return{warning:n}},unhandledRejection:function(t,n,e){return{reason:n,promise:e}},rejectionHandled:r},tt=function(t){var n=!1;try{n=Y.apply(null,arguments)}catch(e){x.throwLater(e),n=!0}var r=!1;try{r=J(t,Z[t].apply(null,arguments))}catch(e){x.throwLater(e),r=!0}return r||n};n.config=function(t){if(t=Object(t),"longStackTraces"in t&&(t.longStackTraces?n.longStackTraces():!t.longStackTraces&&n.hasLongStackTraces()&&z()),"warnings"in t){var e=t.warnings;it.warnings=!!e,X=it.warnings,A.isObject(e)&&"wForgottenReturn"in e&&(X=!!e.wForgottenReturn)}if("cancellation"in t&&t.cancellation&&!it.cancellation){if(x.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");n.prototype._clearCancellationData=l,n.prototype._propagateFrom=u,n.prototype._onCancel=c,n.prototype._setOnCancel=s,n.prototype._attachCancellationCallback=a,n.prototype._execute=i,nt=u,it.cancellation=!0}return"monitoring"in t&&(t.monitoring&&!it.monitoring?(it.monitoring=!0,n.prototype._fireEvent=tt):!t.monitoring&&it.monitoring&&(it.monitoring=!1,n.prototype._fireEvent=o)),n},n.prototype._fireEvent=o,n.prototype._execute=function(t,n,e){try{t(n,e)}catch(r){return r}},n.prototype._onCancel=function(){},n.prototype._setOnCancel=function(t){},n.prototype._attachCancellationCallback=function(t){},n.prototype._captureStackTrace=function(){},n.prototype._attachExtraTrace=function(){},n.prototype._clearCancellationData=function(){},n.prototype._propagateFrom=function(t,n){};var nt=f,et=function(){return!1},rt=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;A.inherits(N,Error),e.CapturedTrace=N,N.prototype.uncycle=function(){var t=this._length;if(!(t<2)){for(var n=[],e={},r=0,o=this;void 0!==o;++r)n.push(o),o=o._parent;t=this._length=r;for(var r=t-1;r>=0;--r){var i=n[r].stack;void 0===e[i]&&(e[i]=r)}for(var r=0;r<t;++r){var a=n[r].stack,c=e[a];if(void 0!==c&&c!==r){c>0&&(n[c-1]._parent=void 0,n[c-1]._length=1),n[r]._parent=void 0,n[r]._length=1;var s=r>0?n[r-1]:this;c<t-1?(s._parent=n[c+1],s._parent.uncycle(),s._length=s._parent._length+1):(s._parent=void 0,s._length=1);for(var l=s._length+1,u=r-2;u>=0;--u)n[u]._length=l,l++;return}}}},N.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var n=T(t),e=n.message,r=[n.stack],o=this;void 0!==o;)r.push(b(o.stack.split("\n"))),o=o._parent;k(r),m(r),A.notEnumerableProp(t,"stack",y(e,r)),A.notEnumerableProp(t,"__stackCleaned__",!0)}};var ot=function(){var t=/^\s*at\s*/,n=function(t,n){return"string"==typeof t?t:void 0!==n.name&&void 0!==n.message?n.toString():R(n)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,$=t,q=n;var e=Error.captureStackTrace;return et=function(t){return P.test(t)},function(t,n){Error.stackTraceLimit+=6,e(t,n),Error.stackTraceLimit-=6}}var r=new Error;if("string"==typeof r.stack&&r.stack.split("\n")[0].indexOf("stackDetection@")>=0)return $=/@/,q=n,M=!0,function(t){t.stack=(new Error).stack};var o;try{throw new Error}catch(i){o="stack"in i}return"stack"in r||!o||"number"!=typeof Error.stackTraceLimit?(q=function(t,n){return"string"==typeof t?t:"object"!=typeof n&&"function"!=typeof n||void 0===n.name||void 0===n.message?R(n):n.toString()},null):($=t,q=n,function(t){Error.stackTraceLimit+=6;try{throw new Error}catch(n){t.stack=n.stack}Error.stackTraceLimit-=6})}([]);"undefined"!=typeof console&&"undefined"!=typeof console.warn&&(I=function(t){console.warn(t)},A.isNode&&process.stderr.isTTY?I=function(t,n){var e=n?"[33m":"[31m";console.warn(e+t+"[0m\n")}:A.isNode||"string"!=typeof(new Error).stack||(I=function(t,n){console.warn("%c"+t,n?"color: darkorange":"color: red")}));var it={warnings:V,longStackTraces:!1,cancellation:!1,monitoring:!1};return K&&n.longStackTraces(),{longStackTraces:function(){return it.longStackTraces},warnings:function(){return it.warnings},cancellation:function(){return it.cancellation},monitoring:function(){return it.monitoring},propagateFromFunction:function(){return nt},boundValueFunction:function(){return d},checkForgottenReturns:v,setBounds:F,warn:g,deprecated:_,CapturedTrace:N,fireDomEvent:J,fireGlobalEvent:Y}}}});