montageDefine("681fd63","list",{dependencies:["./_list","./listen/property-changes","./listen/range-changes","list"],factory:function(e,t,s){"use strict";function a(e,t,s){return i._init(a,this,e,t,s)}var i=e("./_list"),n=e("./listen/property-changes"),h=e("./listen/range-changes");s.exports=a,a.prototype=new i,a.prototype.constructor=a,a.List=a,a.from=i.from,Object.addEach(a.prototype,n.prototype),Object.addEach(a.prototype,h.prototype),a.prototype.makeObservable=function(){this.head.index=-1,this.updateIndexes(this.head.next,0),this.dispatchesRangeChanges=!0},Object.defineProperties(a.prototype,{_dispatchEmptyArray:{value:[]}}),a.prototype["delete"]=function(e,t){var s=this.findLast(e,t);if(s){if(this.dispatchesRangeChanges){var a=[],i=[e];this.dispatchBeforeRangeChange(a,i,s.index)}return s["delete"](),this.length--,this.dispatchesRangeChanges&&(this.updateIndexes(s.next,s.index),this.dispatchRangeChange(a,i,s.index)),!0}return!1},Object.defineProperty(a.prototype,"superClear",{value:i.prototype.clear,enumerable:!1,configurable:!0,writable:!0}),a.prototype.clear=function(){var e,t;this.dispatchesRangeChanges&&(t=this.toArray(),e=[],this.dispatchBeforeRangeChange(e,t,0)),this.superClear(),this.dispatchesRangeChanges&&this.dispatchRangeChange(e,t,0)},a.prototype.add=function(e){var t=new this.Node(e);return this.dispatchesRangeChanges&&(t.index=this.length,this.dispatchBeforeRangeChange([e],[],t.index)),this._addNode(t),this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],t.index),!0},Object.defineProperty(a.prototype,"superPush",{value:i.prototype.push,enumerable:!1,configurable:!0,writable:!0}),a.prototype.push=function(){if(this.dispatchesRangeChanges){var e=Array.prototype.slice.call(arguments),t=[],s=this.length;this.dispatchBeforeRangeChange(e,t,s);var a=this.head.prev}1===arguments.length?this.superPush.call(this,arguments[0]):2===arguments.length?this.superPush.call(this,arguments[0],arguments[1]):this.superPush.apply(this,arguments),this.dispatchesRangeChanges&&(this.updateIndexes(a.next,void 0===a.index?0:a.index+1),this.dispatchRangeChange(e,t,s))},Object.defineProperty(a.prototype,"superUnshift",{value:i.prototype.unshift,enumerable:!1,configurable:!0,writable:!0}),a.prototype.unshift=function(){if(this.dispatchesRangeChanges){var e=Array.prototype.slice.call(arguments),t=[];this.dispatchBeforeRangeChange(e,t,0)}1===arguments.length?this.superUnshift.call(this,arguments[0]):2===arguments.length?this.superUnshift.call(this,arguments[0],arguments[1]):this.superUnshift.apply(this,arguments),this.dispatchesRangeChanges&&(this.updateIndexes(this.head.next,0),this.dispatchRangeChange(e,t,0))},Object.defineProperty(a.prototype,"_beforePop",{value:function(e,t){var s;return this.dispatchesRangeChanges&&(s=[e],this.dispatchBeforeRangeChange(this._dispatchEmptyArray,s,t)),s},enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(a.prototype,"_afterPop",{value:function(e,t,s){this.dispatchesRangeChanges&&this.dispatchRangeChange(this._dispatchEmptyArray,s,t)},enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(a.prototype,"superPop",{value:i.prototype.pop,enumerable:!1,configurable:!0,writable:!0}),a.prototype.pop=function(){return this.superPop(this._beforePop,this._afterPop)},Object.defineProperty(a.prototype,"_beforeShift",{value:function(e,t){var s;return this.dispatchesRangeChanges&&(s=[e],this.dispatchBeforeRangeChange(this._dispatchEmptyArray,s,t)),s},enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(a.prototype,"_afterShift",{value:function(e,t,s){this.dispatchesRangeChanges&&(this.updateIndexes(this.head.next,t),this.dispatchRangeChange(this._dispatchEmptyArray,s,t))},enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(a.prototype,"superShift",{value:i.prototype.shift,enumerable:!1,configurable:!0,writable:!0}),a.prototype.shift=function(){return this.superShift(this._beforeShift,this._afterShift)},Object.defineProperty(a.prototype,"superSwap",{value:i.prototype.swap,enumerable:!1,configurable:!0,writable:!0}),a.prototype.swap=function(e,t,s){var a,i,n=function(e,t,s){this.dispatchesRangeChanges&&(a=e===this.head?this.length:e.prev===this.head?0:e.index,i=e.prev,this.dispatchBeforeRangeChange(t,s,a))},h=function(e,t,s){this.dispatchesRangeChanges&&(e===this.head?this.updateIndexes(this.head.next,0):this.updateIndexes(i.next,i.index+1),this.dispatchRangeChange(t,s,a))};return this.superSwap(e,t,s,n,h)},Object.defineProperty(a.prototype,"superReverse",{value:i.prototype.reverse,enumerable:!1,configurable:!0,writable:!0}),a.prototype.reverse=function(){if(this.dispatchesRangeChanges){var e=this.toArray(),t=e.reversed();this.dispatchBeforeRangeChange(t,e,0)}return this.superReverse(),this.dispatchesRangeChanges&&this.dispatchRangeChange(t,e,0),this}}});