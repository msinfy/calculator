"use strict";function LfuSet(e,t,n,r,s){return this instanceof LfuSet?(t=t||1/0,n=n||Object.equals,r=r||Object.hash,s=s||Function.noop,this.store=new Set((void 0),function(e,t){return n(e.value,t.value)},function(e){return r(e.value)}),this.frequencyHead=new this.FrequencyNode(0),this.contentEquals=n,this.contentHash=r,this.getDefault=s,this.capacity=t,this.length=0,void this.addEach(e)):new LfuSet(e,t,n,r,s)}function Node(e,t){this.value=e,this.frequencyNode=t}function FrequencyNode(e,t,n){this.frequency=e,this.values=new Set,this.prev=t||this,this.next=n||this,t&&(t.next=this),n&&(n.prev=this)}var Shim=require("./shim"),Set=require("./set").CollectionsSet,GenericCollection=require("./generic-collection"),GenericSet=require("./generic-set"),PropertyChanges=require("./listen/property-changes"),RangeChanges=require("./listen/range-changes");module.exports=LfuSet,LfuSet.LfuSet=LfuSet,Object.addEach(LfuSet.prototype,GenericCollection.prototype),Object.addEach(LfuSet.prototype,GenericSet.prototype),Object.addEach(LfuSet.prototype,PropertyChanges.prototype),Object.addEach(LfuSet.prototype,RangeChanges.prototype),Object.defineProperty(LfuSet.prototype,"size",GenericCollection._sizePropertyDescriptor),LfuSet.from=GenericCollection.from,LfuSet.prototype.constructClone=function(e){return new this.constructor(e,this.capacity,this.contentEquals,this.contentHash,this.getDefault)},LfuSet.prototype.has=function(e){return this.store.has(new this.Node(e))},LfuSet.prototype.get=function(e,t){if(t)throw new Error("LfuSet#get does not support second argument: equals");var n=this.store.get(new this.Node(e));if(void 0!==n){var r=n.frequencyNode,s=r.next;return s.frequency!==r.frequency+1&&(s=new this.FrequencyNode(r.frequency+1,r,s)),s.values.add(n),n.frequencyNode=s,r.values["delete"](n),0===r.values.length&&(r.prev.next=r.next,r.next.prev=r.prev),n.value}return this.getDefault(e)},LfuSet.prototype.add=function(e){if(this.has(e))return this.get(e),!1;var t,n,r=[],s=[];if(this.capacity>0){r.push(e),this.length+1>this.capacity&&(t=this.frequencyHead.next,n=t.values.order.head.next.value,s.push(n.value)),this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange(r,s,0),s.length>0&&(this.store["delete"](n),t.values["delete"](n),1!==t.value&&0===t.values.length&&(this.frequencyHead.next=t.next,t.next.prev=this.frequencyHead));var i=new this.Node(e),u=this.frequencyHead.next;1!==u.frequency&&(u=new this.FrequencyNode(1,this.frequencyHead,u)),this.store.add(i),u.values.add(i),i.frequencyNode=u,this.length=this.length+r.length-s.length,this.dispatchesRangeChanges&&this.dispatchRangeChange(r,s,0)}return r.length!==s.length},LfuSet.prototype["delete"]=function(e,t){if(t)throw new Error("LfuSet#delete does not support second argument: equals");var n=this.store.get(new this.Node(e)),r=!!n;if(r){this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],0);var s=n.frequencyNode;this.store["delete"](n),s.values["delete"](n),0===s.values.length&&(s.prev.next=s.next,s.next.prev=s.prev),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],0)}return r},LfuSet.prototype.one=function(){if(this.length>0)return this.frequencyHead.next.values.one().value},LfuSet.prototype.clear=function(){this.store.clear(),this.frequencyHead.next=this.frequencyHead,this.length=0},LfuSet.prototype.reduce=function(e,t){for(var n=arguments[2],r=0,s=this.frequencyHead.next;0!==s.frequency;){var i=s.values;t=i.reduce(function(t,s){return e.call(n,t,s.value,r++,this)},t,this),s=s.next}return t},LfuSet.prototype.reduceRight=function(e,t){for(var n=arguments[2],r=this.length-1,s=this.frequencyHead.prev;0!==s.frequency;){var i=s.values;t=i.reduceRight(function(t,s){return e.call(n,t,s.value,r--,this)},t,this),s=s.prev}return t},LfuSet.prototype.iterate=function(){return this.store.map(function(e){return e.value}).iterate()},LfuSet.prototype.Node=Node,LfuSet.prototype.FrequencyNode=FrequencyNode;