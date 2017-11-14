!function(e,t){"function"==typeof define&&define.amd?define("montage",[],t):"object"==typeof module&&module.exports?module.exports=t(require,exports,module):e.Montage=t({},{},{})}(this,function(e,t,n){"use strict";var o=eval,r=o("this");r.global=r;var i={makeResolve:function(){try{var e="http://example.org",t="/test.html",n=new URL(t,e).href;if(!n||n!==e+t)throw new Error("NotSupported");return function(e,t){return new URL(t,e).href}}catch(o){var r=/^[\w\-]+:/,i=document.querySelector("head"),a=i.querySelector("base"),s=document.createElement("base"),c=document.createElement("a"),u=!1;return a?u=!0:a=document.createElement("base"),s.href="",function(e,t){var n;if(u||i.appendChild(a),e=String(e),r.test(e)===!1)throw new Error("Can't resolve from a relative location: "+JSON.stringify(e)+" "+JSON.stringify(t));u&&(n=a.href),a.href=e,c.href=t;var o=c.href;return u?a.href=n:i.removeChild(a),o}}},load:function(e,t){var n=document.createElement("script");n.src=e,n.onload=function(){t&&t(n),n.parentNode.removeChild(n)},document.getElementsByTagName("head")[0].appendChild(n)},getParams:function(){var e,t,n,o,r,i,a;if(!this._params){this._params={};var s=document.getElementsByTagName("script");for(e=0;e<s.length;e++)if(o=s[e],r=!1,o.src&&(n=o.src.match(/^(.*)montage.js(?:[\?\.]|$)/i))&&(this._params.montageLocation=n[1],r=!0),o.hasAttribute("data-montage-location")&&(this._params.montageLocation=o.getAttribute("data-montage-location"),r=!0),r){if(o.dataset)for(a in o.dataset)o.dataset.hasOwnProperty(a)&&(this._params[a]=o.dataset[a]);else if(o.attributes){var c=/^data-(.*)$/,u=/-([a-z])/g,m=function(e,t){return t.toUpperCase()};for(t=0;t<o.attributes.length;t++)i=o.attributes[t],n=i.name.match(c),n&&(this._params[n[1].replace(u,m)]=i.value)}o.parentNode.removeChild(o);break}}return this._params},bootstrap:function(e){function t(){c&&s&&e(s,u,m)}function n(){document.removeEventListener("DOMContentLoaded",n,!0),c=!0;var e=document.documentElement;e.classList?e.classList.add("montage-app-bootstrapping"):e.className=e.className+" montage-app-bootstrapping",document._montageTiming=document._montageTiming||{},document._montageTiming.bootstrappingStartTime=Date.now(),t()}function o(e){if(!g[e]&&f[e]){var t=g[e]={};g[e]=f[e](o,t)||t}return g[e]}function a(){m=o("mini-url"),u=o("promise"),s=o("require"),delete r.bootstrap,t()}var s,c,u,m,d=this.getParams(),l=this.makeResolve();/interactive|complete/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n,!0);var p={require:"node_modules/mr/require.js","require/browser":"node_modules/mr/browser.js",promise:"node_modules/bluebird/js/browser/bluebird.min.js"},f={},g={};if(r.bootstrap=function(e,t){f[e]=t,delete p[e];for(var n in p)if(p.hasOwnProperty(n))return;a()},"undefined"==typeof r.BUNDLE){var h=l(r.location,d.montageLocation);i.load(l(h,p.promise),function(){delete p.promise,r.bootstrap("bluebird",function(e,t){return r.Promise}),r.bootstrap("promise",function(e,t){return r.Promise});for(var e in p)p.hasOwnProperty(e)&&i.load(l(h,p[e]))})}else r.nativePromise=r.Promise,Object.defineProperty(r,"Promise",{configurable:!0,set:function(e){Object.defineProperty(r,"Promise",{value:e}),r.bootstrap("bluebird",function(e,t){return r.Promise}),r.bootstrap("promise",function(e,t){return r.Promise})}});r.bootstrap("mini-url",function(e,t){t.resolve=l})},initMontage:function(e,t,n){for(var o,i=["core/core","core/event/event-manager","core/serialization/deserializer/montage-reviver","core/logger"],a=e("core/promise").Promise,s=[],c=0;o=i[c];c++)s.push(e.deepLoad(o));return a.all(s).then(function(){for(var o,a=0;o=i[a];a++)e(o);var s,c=(e("core/core").Montage,e("core/event/event-manager").EventManager,e("core/event/event-manager").defaultEventManager),u=e("core/serialization/deserializer/montage-reviver").MontageReviver;e("core/logger").logger;"function"==typeof r.montageWillLoad&&r.montageWillLoad();var m,d,l=t.packageDescription.applicationPrototype;return l?(m=u.parseObjectLocationId(l),d=t.async(m.moduleId)):d=e.async("core/application"),d.then(function(e){var o=e[m?m.objectName:"Application"];return s=new o,c.application=s,s.eventManager=c,s._load(t,function(){n.module&&t.async(n.module),"function"==typeof r.montageDidLoad&&r.montageDidLoad(),window.MontageElement&&MontageElement.ready(t,s,u)})})})}};return t.initMontageCustomElement=function(){function e(e){var t=function(){return Reflect.construct(HTMLElement,[],t)};return Object.setPrototypeOf(t.prototype,(e||HTMLElement).prototype),Object.setPrototypeOf(t,e||HTMLElement),t}function t(t,o){if(!customElements.get(t)){var r=e(n);r.componentConstructor=o.constructor,r.observedAttributes=o.observedAttributes,customElements.define(t,r)}}if("undefined"!=typeof window.customElements&&"undefined"!=typeof window.Reflect){var n=e();n.pendingCustomElements=new Map,n.define=function(e,n,o){o&&"object"==typeof o?o.constructor=n:o={constructor:n},this.require?t(e,o):this.pendingCustomElements.set(e,o)},n.ready=function(e,o,r){n.prototype.findProxyForElement=r.findProxyForElement,this.application=o,this.require=e,this.pendingCustomElements.forEach(function(e,n){t(n,e)}),this.pendingCustomElements.clear()},Object.defineProperties(n.prototype,{require:{get:function(){return n.require},configurable:!1},application:{get:function(){return n.application},configurable:!1},componentConstructor:{get:function(){return this.constructor.componentConstructor},configurable:!1},observedAttributes:{get:function(){return this.constructor.observedAttributes},configurable:!1}}),n.prototype.connectedCallback=function(){if(!this._instance){var e=this,t=this.instantiateComponent();return this.findParentComponent().then(function(n){e._instance=t,n.addChildComponent(t),t._canDrawOutsideDocument=!0,t.needsDraw=!0})}},n.prototype.disconnectedCallback=function(){},n.prototype.findParentComponent=function(){for(var e,t,n=this.application.eventManager,o=this;null!==(e=o.parentNode)&&!(t=n.eventHandlerForElement(e));)o=e;return Promise.resolve(t)||this.getRootComponent()},n.prototype.getRootComponent=function(){return n.rootComponentPromise||(n.rootComponentPromise=this.require.async("montage/ui/component").then(function(e){return e.__root__})),n.rootComponentPromise},n.prototype.instantiateComponent=function(){var e=new this.componentConstructor;return this.bootstrapComponent(e),e.element=document.createElement("div"),e},n.prototype.bootstrapComponent=function(e){var t=this.attachShadow({mode:"open"}),n=e.enterDocument,o=e.templateDidLoad,r=this.findProxyForElement(this);if(r){var i,a,s=this.observedAttributes,c=this;if(s&&(a=s.length))for(var u=0;u<a;u++)i=s[u],e.defineBinding(i,{"<->":""+i,source:r})}this.application.eventManager.registerTargetForActivation(t),e.templateDidLoad=function(){var n=e.getResources();n&&(c.injectResourcesWithinCustomElement(n.styles,t),c.injectResourcesWithinCustomElement(n.scripts,t)),this.templateDidLoad=o,"function"==typeof this.templateDidLoad&&this.templateDidLoad()},e.enterDocument=function(e){t.appendChild(this.element),this.enterDocument=n,"function"==typeof this.enterDocument&&this.enterDocument(e)}},n.prototype.injectResourcesWithinCustomElement=function(e,t){if(e&&e.length)for(var n=0,o=e.length;n<o;n++)t.appendChild(e[n])},r.MontageElement=n}},t.initMontage=function(){var e=t.getPlatform();e.bootstrap(function(n,o,a){var s=e.getParams(),c={location:n.getLocation()};t.Require=n;var u=a.resolve(c.location,s.montageLocation),m=a.resolve(c.location,s["package"]||"."),d=s.applicationHash;if("object"==typeof r.BUNDLE){var l={},p=function(e){if(!l[e]){var t=l[e]={},n=new o(function(e,n){t.resolve=e,t.reject=n});return t.promise=n,t}return l[e]};r.bundleLoaded=function(e){p(e).resolve()};var f={},g=new o(function(e,t){f.resolve=e,f.reject=t});f.promise=g,c.preloaded=f.promise;var h=o.resolve();r.BUNDLE.forEach(function(e){h=h.then(function(){return o.all(e.map(function(e){return i.load(e),p(e).promise}))})}),f.resolve(h.then(function(){delete r.BUNDLE,delete r.bundleLoaded}))}var v;if("remoteTrigger"in s){window.postMessage({type:"montageReady"},"*");var b=new o(function(e){var t=function(n){if(s.remoteTrigger===n.origin&&(n.source===window||n.source===window.parent))switch(n.data.type){case"montageInit":window.removeEventListener("message",t),e([n.data.location,n.data.injections]);break;case"isMontageReady":window.postMessage({type:"montageReady"},"*")}};window.addEventListener("message",t)});v=b.spread(function(e,t){var o=n.loadPackage({location:e,hash:d},c);return t&&(o=o.then(function(n){e=a.resolve(e,".");var o,r,i=t.packageDescriptions,s=t.packageDescriptionLocations,c=t.mappings,u=t.dependencies;if(i)for(r=i.length,o=0;o<r;o++)n.injectPackageDescription(i[o].location,i[o].description);if(s)for(r=s.length,o=0;o<r;o++)n.injectPackageDescriptionLocation(s[o].location,s[o].descriptionLocation);if(c)for(r=c.length,o=0;o<r;o++)n.injectMapping(c[o].dependency,c[o].name);if(u)for(r=u.length,o=0;o<r;o++)n.injectDependency(u[o].name,u[o].version);return n})),o})}else{if("autoPackage"in s)n.injectPackageDescription(m,{dependencies:{montage:"*"}},c);else if(".json"===m.slice(m.length-5)){var y=m;m=a.resolve(m,"."),n.injectPackageDescriptionLocation(m,y,c)}v=n.loadPackage({location:m,hash:d},c)}v.then(function(t){return t.loadPackage({location:u,hash:s.montageHash}).then(function(e){var t;t=s.promiseLocation?a.resolve(n.getLocation(),s.promiseLocation):a.resolve(u,"node_modules/bluebird");var o=[e,e.loadPackage({location:t,hash:s.promiseHash})];return o}).spread(function(n,i){return n.inject("core/mini-url",a),n.inject("core/promise",{Promise:o}),i.inject("bluebird",o),i.inject("js/browser/bluebird",o),c.lint=function(e){n.async("core/jshint").then(function(t){t.JSHINT(e.text)||(console.warn("JSHint Error: "+e.location),t.JSHINT.errors.forEach(function(e){e&&(console.warn("Problem at line "+e.line+" character "+e.character+": "+e.reason),e.evidence&&console.warn("    "+e.evidence))}))})},r.require=r.mr=t,e.initMontage(n,t,s)})})})},t.getPlatform=function(){if("undefined"!=typeof window&&window&&window.document)return i;if("undefined"!=typeof process)return e("./node.js");throw new Error("Platform not supported.")},"undefined"!=typeof window?r.__MONTAGE_LOADED__?console.warn("Montage already loaded!"):(r.__MONTAGE_LOADED__=!0,t.initMontage(),t.initMontageCustomElement()):t.getPlatform(),t});