montageDefine("681fd63","heap",{dependencies:["./listen/array-changes","./shim","./generic-collection","./listen/map-changes","./listen/range-changes","./listen/property-changes","heap"],factory:function(t,n,e){function o(t,n,e){return this instanceof o?(this.contentEquals=n||Object.equals,this.contentCompare=e||Object.compare,this.content=[],this.length=0,void this.addEach(t)):new o(t,n,e)}var i=(t("./listen/array-changes"),t("./shim"),t("./generic-collection")),r=t("./listen/map-changes"),h=t("./listen/range-changes"),s=t("./listen/property-changes");e.exports=o,o.Heap=o,Object.addEach(o.prototype,i.prototype),Object.addEach(o.prototype,s.prototype),Object.addEach(o.prototype,h.prototype),Object.addEach(o.prototype,r.prototype),o.from=i.from,o.prototype.constructClone=function(t){return new this.constructor(t,this.contentEquals,this.contentCompare)},o.prototype.push=function(t){this.content.push(t),this["float"](this.content.length-1),this.length++},o.prototype.pop=function(){var t=this.content[0],n=this.content.pop();return this.content.length>0&&(this.content.set(0,n),this.sink(0)),this.length--,t},o.prototype.add=function(t){this.push(t)},o.prototype.indexOf=function(t){for(var n=0;n<this.length;n++)if(this.contentEquals(this.content[n],t))return n;return-1},o.prototype["delete"]=function(t,n){if(n)throw new Error("Heap#delete does not support second argument: equals");var e=this.indexOf(t);if(e===-1)return!1;var o=this.content.pop();if(this.length=this.content.length,e===this.content.length)return!0;this.content.set(e,o);var i=this.contentCompare(o,t);return i>0?this["float"](e):i<0&&this.sink(e),!0},o.prototype.peek=function(){if(this.length)return this.content[0]},o.prototype.max=function(){return this.peek()},o.prototype.one=function(){return this.peek()},o.prototype["float"]=function(t){for(var n=this.content[t];t>0;){var e=Math.floor((t+1)/2)-1,o=this.content[e];if(!(this.contentCompare(o,n)<0))break;this.content.set(e,n),this.content.set(t,o),t=e}},o.prototype.sink=function(t){for(var n,e,o,i,r,h,s=this.content.length,c=this.content[t];;){if(i=2*(t+1),o=i-1,h=!1,o<s){var n=this.content[o],a=this.contentCompare(n,c);a>0&&(r=o,h=!0)}if(i<s){var e=this.content[i],a=this.contentCompare(e,h?n:c);a>0&&(r=i,h=!0)}if(!h)break;this.content.set(t,this.content[r]),this.content.set(r,c),t=r}},o.prototype.clear=function(){this.content.clear(),this.length=0},o.prototype.reduce=function(t,n){var e=arguments[2];return this.content.reduce(function(n,o,i){return t.call(e,n,o,i,this)},n,this)},o.prototype.reduceRight=function(t,n){var e=arguments[2];return this.content.reduceRight(function(n,o,i){return t.call(e,n,o,i,this)},n,this)},o.prototype.toJSON=function(){return this.toArray()},o.prototype.makeObservable=function(){this.content.addRangeChangeListener(this,"content"),this.content.addBeforeRangeChangeListener(this,"content"),this.content.addMapChangeListener(this,"content"),this.content.addBeforeMapChangeListener(this,"content")},o.prototype.handleContentRangeChange=function(t,n,e){this.dispatchRangeChange(t,n,e)},o.prototype.handleContentRangeWillChange=function(t,n,e){this.dispatchBeforeRangeChange(t,n,e)},o.prototype.handleContentMapChange=function(t,n){this.dispatchMapChange(n,t)},o.prototype.handleContentMapWillChange=function(t,n){this.dispatchBeforeMapChange(n,t)}}});