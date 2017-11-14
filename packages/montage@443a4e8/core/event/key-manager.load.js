montageDefine("443a4e8","core/event/key-manager",{dependencies:["../core","./event-manager","./mutable-event"],factory:function(e,t,s){var i=e("../core").Montage,r=e("./event-manager").defaultEventManager,o=e("./mutable-event").MutableEvent,n={backspace:8,tab:9,enter:13,shift:16,control:17,alt:18,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,"delete":46,arrowup:38,arrowright:39,arrowdown:40,arrowdelete:46,semicolon:186,colon:186,equal:187,plus:187,comma:188,less:188,minus:189,underscore:189,period:190,greater:190,slash:191,questionmark:191,backtick:192,tilde:192,openingsquarebracket:219,openingcurlybracket:219,backslash:220,pipe:220,closingsquarebracket:221,closingcurlybracket:221,singlequote:222,doublequote:222,clear:12,meta:91,contextmenu:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimal:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,f13:124,f14:125,f15:126,f16:127,f17:128,f18:129,f19:130,f20:131,f21:132,f22:133,f23:134,f24:135},a=null,l={meta:17,control:57392,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259},u={f13:44,f14:145,f15:19,f16:63251,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259,meta:224},h={cmd:"command",ctl:"control",ctrl:"control",win:"meta",windows:"meta",opt:"alt",option:"alt"},c={meta:{name:"meta",value:1},alt:{name:"alt",value:2},control:{name:"control",value:4},shift:{name:"shift",value:8}},d={semicolon:";",colon:":",equal:"=",plus:"+",comma:",",less:"<",minus:"-",underscore:"_",period:".",greater:">",slash:"/",questionmark:"?",backtick:"`",tilde:"~",openingsquarebracket:"[",openingcurlybracket:"{",backslash:"\\",pipe:"|",closingsquarebracket:"]",closingcurlybracket:"}",singlequote:"'",doublequote:'"',multiply:"*",add:"+",subtract:"-",decimal:".",divide:"/"},y=null,f="keyPress",p="longKeyPress",m="keyRelease",_=null,g=t.KeyManager=i.specialize({_keyEventsListenerInstalled:{value:!1},_composerKeyMap:{value:{}},_triggeredKeys:{value:{}},_longPressKeys:{value:{}},_cleanupTimeout:{value:null},_cleanupThreshold:{value:2e3},_longPressThreshold:{value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(e){e>0&&e!==this._longPressThreshold&&(this._longPressThreshold=e,this._longPressThreshold>this._cleanupThreshold-100?this._cleanupThreshold=this._longPressThreshold+100:this._cleanupThreshold=2e3)}},registerKey:{value:function(e){var t,s,i,r,o,n=this._normalizeKeySequence(e.keys),a=this._composerKeyMap,l=!1;if(n){if(t=this._convertKeysToModifiersAndKeyCode(n),s=a[t.modifiers],s||(s=a[t.modifiers]={}),i=s[t.keyCode]){for(o in i)if(i.hasOwnProperty(o)&&(r=i[o],r.object===e)){r.refCount++,l=!0;break}l||i.push({object:e,refCount:1})}else s[t.keyCode]=[{object:e,refCount:1}];e._modifiers=t.modifiers,e._keyCode=t.keyCode,this._registerListeners()}}},unregisterKey:{value:function(e){var t,s,i,r,o=this._composerKeyMap;if(t=o[e._modifiers]){s=t[e._keyCode];for(r in s)s.hasOwnProperty(r)&&(i=s[r],i.object===e&&(i.refCount--,i.refCount<=0&&(s.splice(r,1),0===s.length&&(delete t[e._keyCode],0===Object.keys(t).length&&(delete o[e._modifiers],0===Object.keys(o).length&&this._unregisterListeners())))))}}},constructor:{value:function(){var e,t=global.navigator?global.navigator.userAgent:"";if(_&&console.warn("Rather than creating a new KeyManager object, you might want to use the default key manager"),t.match(/ firefox\//i)?this._firefox=!0:t.match(/ appleWebkit\//i)?(this._webkit=!0,t.match(/ chrome\//i)&&(this._chrome=!0)):t.match(/^opera\//i)&&(this._opera=!0),t.match(/macintosh/i)&&(this._mac=!0,this._opera&&(this._operaMac=!0)),this._mac?c.command=c.meta:c.command=c.control,this._operaMac)for(e in l)l.hasOwnProperty(e)&&(n[e]=l[e]);if(this._firefox)for(e in u)u.hasOwnProperty(e)&&(n[e]=u[e]);var s;a={};for(s in n)n.hasOwnProperty(s)&&(e=n[s],void 0===a[e]&&(a[e]=s));y={};for(s in d)d.hasOwnProperty(s)&&(e=d[s],void 0===y[e]&&(y[e]=s));this._shiftKey=!1,this._altKey=!1,this._metaKey=!1,this._ctrlKey=!1}},captureKeydown:{value:function(e){var t,s,i,r=e.key||e.keyIdentifier,o=!1;this._preprocessKeyEvent(e),i=this._submap,i&&(t=this._keyCode,t&&i[t]&&(o=this._dispatchComposerKeyMatches(i[t],e)),!o&&r&&(s=n[r.toLowerCase()]||this._decodeKeyIdentifier(r),s&&s!==t&&i[s]&&this._dispatchComposerKeyMatches(i[s],e))),this._setupCleanupTimer()}},captureKeypress:{value:function(e){var t,s,i,r=e.charCode,o=e.key||e.keyIdentifier,a=!1;this._preprocessKeyEvent(e),i=this._submap,i&&(t=this._keyCode,t&&i[t]&&(a=this._dispatchComposerKeyMatches(i[t],e)),!a&&r&&r!==t&&i[r]&&(a=this._dispatchComposerKeyMatches(i[r],e)),!a&&o&&(s=n[o.toLowerCase()]||this._decodeKeyIdentifier(o),s&&s!==t&&i[s]&&this._dispatchComposerKeyMatches(i[s],e))),this._setupCleanupTimer()}},captureKeyup:{value:function(e){var t,s,i,r,o=e.keyCode,a=e.key||e.keyIdentifier,l=0,u=!1;if(this._preprocessKeyEvent(e),s=this._submap,s&&(o=this._keyCode,o&&s[o]&&(u=this._dispatchComposerKeyMatches(s[o],e),l=o),!u&&a&&(t=n[a.toLowerCase()]||this._decodeKeyIdentifier(a),t&&t!==l&&s[t]&&(u=this._dispatchComposerKeyMatches(s[t],e)))),!u)for(r in this._triggeredKeys)this._triggeredKeys.hasOwnProperty(r)&&(i=this._triggeredKeys[r],i._keyCode!==o&&i._keyCode!==t||this._dispatchComposerKeyMatches([i],e));this._cleanup()}},_normalizeKeySequence:{value:function(e){var t,s,i=[c.meta.name,c.alt.name,c.control.name,c.shift.name],r=e.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),o=r.length,a=[];for(s=0;s<o-1;s++){if(t=r[s],t=h[t]||t,t=c[t],!t)return console.warn("Invalid key sequence (modifier):",e),null;a.push(t.name)}return a.sort(function(e,t){return i.indexOf(e)-i.indexOf(t)}),t=r[o-1],t.length>1&&!n[t]?(console.warn("Invalid key sequence (key):",e,t),null):a.length?a.join("+")+"+"+t:t}},_preprocessKeyEvent:{value:function(e){var t,s,i=this,r=e.type,o=e.keyCode,a=e.key||e.keyIdentifier;this._operaMac&&this._operaModifierTimeout&&(clearTimeout(this._operaModifierTimeout),this._operaModifierTimeout=null),"keydown"!==r&&"keyup"!==r||(this._operaMac?(s="keydown"===r,o===n.shift?this._shiftKey=s:o===n.alt?this._altKey=s:o===n.meta?this._mac&&(this._metaKey=s):o===n.control&&(this._ctrlKey=s),"keyup"===r&&(this._operaModifierTimeout=setTimeout(function(){i._shiftKey=!1,i._altKey=!1,i._metaKey=!1,i._ctrlKey=!1,i._operaModifierTimeout=null},this._cleanupThreshold+1e3))):(this._shiftKey=e.shiftKey,this._altKey=e.altKey,this._metaKey=e.metaKey,this._ctrlKey=e.ctrlKey)),this._mac&&this._webkit&&o===n.contextmenu&&(this._metaKey=!1),this._chrome&&(this._shiftKey||o!==n.plus||"U+002B"!==a&&"+"!==a||(e.keyCode=n.add)),this._modifiers=t=(this._shiftKey?c.shift.value:0)+(this._altKey?c.alt.value:0)+(this._metaKey?c.meta.value:0)+(this._ctrlKey?c.control.value:0),this._submap=this._composerKeyMap[t],this._keyCode=e.keyCode,this._keyIdentifier=a}},_registerListeners:{value:function(){this._keyEventsListenerInstalled||(window.addEventListener("keydown",this,!0),window.addEventListener("keypress",this,!0),window.addEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!0)}},_unregisterListeners:{value:function(){this._keyEventsListenerInstalled&&(window.removeEventListener("keydown",this,!0),window.removeEventListener("keypress",this,!0),window.removeEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!1)}},_dispatchComposerKeyMatches:{value:function(e,t){var s,i,n,a,l=this,u=!1,h="keyup"===t.type,c="keydown"===t.type,d=h?m:f,y=e.length;for(e=e.slice(),a=0;a<y&&!u;a++){s=e[a].object||e[a];for(var _=t.target,g=s.element,v=s.element===window;!v&&(v=_===g,_!==document);)_=_.parentElement,_||(_=document);if(v||r.activeTarget===s.component){if(h){if(n=Object.keys(this._triggeredKeys),n.indexOf(s.uuid)===-1)continue;s._longPressTimeout&&(clearTimeout(s._longPressTimeout),s._longPressTimeout=null,delete this._longPressKeys[s.uuid])}else{if(c)delete this._triggeredKeys[s.uuid];else if(this._triggeredKeys[s.uuid])continue;s._shouldDispatchLongPress&&!s._longPressTimeout&&(s._longPressTimeout=setTimeout(function(){var e=o.fromEvent(e);e.type=p,e.activeElement=t.target,e.identifier=s.identifier,s._longPressTimeout=null,s.dispatchEvent(e),delete l._longPressKeys[s.uuid]},this._longPressThreshold),this._longPressKeys[s.uuid]=s)}i=o.fromEvent(t),i.type=d,i.activeElement=t.target,i.identifier=s.identifier,i.keyComposer=s,s.dispatchEvent(i),i.propagationStopped&&(u=!0),h?delete this._triggeredKeys[s.uuid]:this._triggeredKeys[s.uuid]=s}}if(u)for(a=h?a:0;a<y;a++)s=e[a].object||e[a],delete this._triggeredKeys[s.uuid],s._longPressTimeout&&(clearTimeout(s._longPressTimeout),s._longPressTimeout=null,delete this._longPressKeys[s.uuid]);return u}},_cleanup:{value:function(){var e,t;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout);for(t in this._triggeredKeys)this._triggeredKeys.hasOwnProperty(t)&&delete this._triggeredKeys[t];for(t in this._longPressKeys)this._longPressKeys.hasOwnProperty(t)&&(e=this._longPressKeys[t],clearTimeout(e._longPressTimeout),e._longPressTimeout=null,delete this._longPressKeys[t]);this._cleanupTimeout=null}},_setupCleanupTimer:{value:function(){var e=this;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout),this._cleanupTimeout=setTimeout(function(){e._cleanup()},this._cleanupThreshold)}},_convertKeysToModifiersAndKeyCode:{value:function(e){var t,s,i,r=0,o=0;for(e=e.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),t=e.length,i=0;i<t-1;i++){if(s=e[i],s=h[s]||s,s=c[s],!s)return console.warn("Invalid Key sequence:",e),null;o|=s.value}return s=e[t-1],s=y[s]||s,s=d[s]||s,s.length>1?(r=n[s],s=c[h[s]||s],s&&(o|=s.value)):r=s.toUpperCase().charCodeAt(0),{modifiers:o,keyCode:r}}},_decodeKeyIdentifier:{value:function(e){if(e.match(/U\+/))return parseInt(e.substring(2),16)}}});i.defineProperty(t,"defaultKeyManager",{get:function(){return _||(_=new g),_}})}});