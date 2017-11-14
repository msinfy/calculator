var Montage=require("./core").Montage,MessageFormat=require("./messageformat"),rootComponent=require("../ui/component").__root__,logger=require("./logger").logger("localizer"),Serializer=require("./serialization/serializer/montage-serializer").MontageSerializer,Deserializer=require("./serialization/deserializer/montage-deserializer").MontageDeserializer,Promise=require("./promise").Promise,Bindings=require("./core").Bindings,FrbBindings=require("frb/bindings"),stringify=require("frb/stringify"),expand=require("frb/expand"),Map=require("collections/map"),Scope=require("frb/scope");MessageFormat.locale=require("./messageformat-locale");var KEY_KEY="key",DEFAULT_MESSAGE_KEY="default",LOCALE_STORAGE_KEY="montage_locale",LOCALES_DIRECTORY="locale",MESSAGES_FILENAME="messages",MANIFEST_FILENAME="manifest.json",EMPTY_STRING_FUNCTION=function(){return""},reLanguageTagValidator=/^[a-zA-Z]+(?:-[a-zA-Z0-9]+)*$/,defaultLocalizer,Localizer=exports.Localizer=Montage.specialize({initWithLocale:{value:function(e){var i;this.storesLocale&&"undefined"!=typeof window&&window.localStorage&&(i=window.localStorage.getItem(LOCALE_STORAGE_KEY));var a=e||i||window.navigator.userLanguage||window.navigator.language||Localizer.defaultLocale,t=this.callDelegateMethod("localizerWillUseLocale",this,a);return this.locale=t||a,this._isInitialized=!0,this.loadMessages(),this}},initWithLocaleAndDelegate:{value:function(e,i){return this.delegate=i,this.initWithLocale(e)}},storesLocale:{value:!1},component:{value:null},_delegate:{value:null},delegate:{set:function(e){!this._delegate&&e&&"object"==typeof e&&(this._delegate=e)},get:function(){return this._delegate}},_isInitialized:{value:!1},isInitialized:{get:function(){return this._isInitialized}},messageFormat:{serializable:!1,value:null},_messages:{value:null},messages:{get:function(){return this._messages},set:function(e){if(this._messages!==e){if(void 0!==e&&null!==e&&"object"!=typeof e)throw new TypeError(e," is not an object");this._messages=e}}},messagesPromise:{serializable:!1,value:null},_locale:{value:null},locale:{get:function(){return this._locale},set:function(e){if(!reLanguageTagValidator.test(e))throw new TypeError("Language tag '"+e+"' is not valid. It must match http://tools.ietf.org/html/rfc5646 (alphanumeric characters separated by hyphens)");if(this._locale!==e){var i=this._locale;if(this._locale=e,this.messageFormat=new MessageFormat(e),i&&i!==this._locale){var a=this;this.loadMessages().then(function(){a._dispatchLocaleChange(i)})}if(this.storesLocale&&"undefined"!=typeof window&&window.localStorage)try{window.localStorage.setItem(LOCALE_STORAGE_KEY,e)}catch(t){}}}},_availableLocales:{value:null},availableLocales:{get:function(){return this._availableLocales?this._availableLocales:(this._availableLocales=this.callDelegateMethod("localizerWillPromiseAvailableLocales",this),this._availableLocales||(this._availableLocales=this._manifest.get("files").get(LOCALES_DIRECTORY).get("files").then(function(e){return Object.keys(e)})),this._availableLocales)}},_require:{value:global.require},require:{serializable:!1,get:function(){return this._require},set:function(e){this._require!==e&&(this.__manifest=null,this._require=e)}},__manifest:{value:null},_manifest:{depends:["require"],get:function(){var e=this.require;return e.packageDescription.manifest===!0?(this.__manifest||(this.__manifest=e.async(MANIFEST_FILENAME)),this.__manifest):Promise.reject(new Error("Package has no manifest. "+e.location+'package.json must contain "manifest": true and '+e.location+MANIFEST_FILENAME+" must exist"))}},loadMessagesTimeout:{value:5e3},loadMessages:{value:function(e,i){if(!this.require)throw new Error("Cannot load messages as",this,"require is not set");"number"!=typeof e&&(e=this.loadMessagesTimeout),this.messages=null;var a=this,t=this.callDelegateMethod("localizerWillLoadMessages",this);return this.hasOwnProperty("loadMessagesTimeout")&&(e=this.loadMessagesTimeout),t=t?t.timeout(e):this._manifest.timeout(e).then(function(e){return a._loadMessageFiles(e.files)}),this.messagesPromise=t.then(function(e){return a._collapseMessages(e)},function(e){throw console.error("Could not load messages for '"+a.locale+"': "+e),e}).then(function(e){return"function"==typeof i&&i(e),e}),this.messagesPromise}},_loadMessageFiles:{value:function(e){var i=this.require;if(!e)return Promise.reject(new Error(i.location+MANIFEST_FILENAME+" does not contain a 'files' property"));var a,t,s,n,o=[];if(!(LOCALES_DIRECTORY in e))return Promise.reject(new Error("Package does not contain a '"+LOCALES_DIRECTORY+"' directory"));for(a=e[LOCALES_DIRECTORY].files,t=this._locale;""!==t;)a.hasOwnProperty(t)&&(s=a[t].files,(n=MESSAGES_FILENAME+".js")in s||(n=MESSAGES_FILENAME+".json")in s?o.push(i.async(LOCALES_DIRECTORY+"/"+t+"/"+n)):logger.isDebug&&logger.debug(this,"Warning: '"+LOCALES_DIRECTORY+"/"+t+"/' does not contain '"+MESSAGES_FILENAME+".json' or '"+MESSAGES_FILENAME+".js'")),t=t.substring(0,t.lastIndexOf("-"));if(!o.length)return Promise.reject(new Error("Could not find any "+MESSAGES_FILENAME+".json or "+MESSAGES_FILENAME+".js files"));var r=Promise.all(o);if(logger.isDebug){var l=this;r=r.then(function(e){return logger.debug(l,"loaded "+e.length+" message files"),e})}return r}},_collapseMessages:{value:function(e){for(var i={},a=0,t=e.length;a<t;a++){var s=e[a];for(var n in s)s.hasOwnProperty(n)&&(n in i||(i[n]=s[n]))}return this.messages=i,i}},_compiledMessageCache:{value:Object.create(null)},localizeSync:{value:function(e,i){var a,t,s;if(!e&&!i)throw new Error("Key or default message must be truthy, not "+e+" and "+i);if(this._messages&&e in this._messages){if(a=this._messages[e],t=typeof a,"function"===t)return a;if("object"===t){if(!("message"in a))throw new Error(a,"does not contain a 'message' property");a=a.message}}else a=i;if(a||(console.warn("No message or default message for key '"+e+"'"),a=e),a in this._compiledMessageCache)return this._compiledMessageCache[a];var n=this.messageFormat.parse(a);return n.program&&n.program.statements&&1===n.program.statements.length&&"string"===n.program.statements[0].type?(s=function(){return a},s.toString=s):s=new Function("MessageFormat","return "+this.messageFormat.precompile(n))(MessageFormat),this._compiledMessageCache[a]=s,s}},localize:{value:function(e,i,a,t){a="undefined"==typeof a||a;var s,n=this;if(this._isInitialized)if(this.messagesPromise){var o=function(){var a=n.localizeSync(e,i);return"function"==typeof t&&t(a),a};s=a?this.messagesPromise.then(o,o):this.messagesPromise.then(o)}else s=Promise.resolve(this.localizeSync(e,i)),s.then(t);else this.initWithLocale(),s=this.messagesPromise.then(function(){return n.localize(e,i,a,t)});return s}},reset:{value:function(){return this.storesLocale&&"undefined"!=typeof window&&window.localStorage&&window.localStorage.removeItem(LOCALE_STORAGE_KEY),this.initWithLocale(),this._locale}},_dispatchLocaleChangeAsNeeded:{value:function(e,i){return!(!i||null!==i.localizer&&void 0!==i.localizer&&i.localizer!==this)&&("function"==typeof i.localizerDidChangeLocale&&i.localizerDidChangeLocale(this,e,this._locale),!0)}},_dispatchLocaleChange:{value:function(e,i){if(i||(i=this.component||rootComponent,this._dispatchLocaleChangeAsNeeded(e,i))){var a=i._childComponents;if(a)for(var t,s=0;s<a.length;s++)t=a[s],this._dispatchLocaleChangeAsNeeded(e,t)&&t._childComponents&&this._dispatchLocaleChange(e,t)}}}},{defaultLocalizer:{value:function(){return defaultLocalizer||(defaultLocalizer=new Localizer,defaultLocalizer.storesLocale=!0),defaultLocalizer}},defaultLocalizerWithDelegate:{value:function(e){return this.defaultLocalizer(),defaultLocalizer.delegate=e,defaultLocalizer}},defaultLocale:{value:"en"}});Object.defineProperty(exports,"defaultLocalizer",{get:function(){return Localizer.defaultLocalizer()}});var _localize;Object.defineProperty(exports,"localize",{get:function(){if(!_localize){var e=Localizer.defaultLocalizer();_localize=e.bind(e)}return _localize}});var Message=exports.Message=Montage.specialize({constructor:{value:function(){this.addPathChangeListener("localizer.locale",this,"handleLocaleChange")}},init:{value:function(e,i,a){return e&&(this.key=e),i&&(this.defaultMessage=i),a&&(this.data=a),this}},_localizer:{value:null},localizer:{get:function(){return this._localizer||(this._localizer=Localizer.defaultLocalizer()),this._localizer},set:function(e){this._localizer!==e&&(this._localizer=e,this._localize())}},_key:{value:null},key:{get:function(){return this._key},set:function(e){this._key!==e&&(this._key=e,this._localize())}},_defaultMessage:{value:null},defaultMessage:{get:function(){return this._defaultMessage},set:function(e){this._defaultMessage!==e&&(this._defaultMessage=e,this._localize())}},handleLocaleChange:{value:function(){this._key&&this._localizer&&this._localizer.isInitialized&&this._localize()}},_isLocalizeQueued:{value:!1},_localize:{value:function(){if(!this._isLocalizeQueued){this._isLocalizeQueued=!0;var e=this;this._messageFunction=new Promise(function(i,a){setTimeout(function(){return e._isLocalizeQueued=!1,e._key||e._defaultMessage?void i(e._localizer.localize(e._key,e._defaultMessage)):void i(EMPTY_STRING_FUNCTION)},0)}),this.localized=this._messageFunction.then(function(i){return e._optimizedMessageCallBack(i)})}}},__messageFunction:{value:null},_messageFunction:{set:function(e){this.__messageFunction=e},get:function(){return this.__messageFunction||(this.__messageFunction=Promise.resolve(EMPTY_STRING_FUNCTION)),this.__messageFunction}},_data:{value:null},data:{get:function(){return this._data||(this._data=new Map,this._data.addMapChangeListener(this,"data")),this._data},set:function(e){if(this._data!==e&&e){this._data?(this.data.removeMapChangeListener(this,"data"),this._data.length&&this._data.clear()):this._data=new Map;for(var i in e)e.hasOwnProperty(i)&&this.data.set(i,e[i]);this._data.addMapChangeListener(this,"data"),this.handleDataMapChange()}}},__localizedResolved:{value:""},_localizedDeferred:{value:Promise.resolve()},localized:{get:function(){return this._localize(),this._localizedDeferred},set:function(e){if(e!==this._localized){var i=this;this._localizedDeferred&&(e=Promise.resolve(e)),e.then(function(e){return i.__localizedResolved=e}),this._localizedDeferred=e}}},handleDataMapChange:{value:function(e){if(this._key){var i=this;this.localized=this._messageFunction.then(function(e){return i._optimizedMessageCallBack(e)})}}},_optimizedMessageCallBack:{value:function(e){return this._data?e(this.data.toObject()):e()}},serializeSelf:{value:function(e){var i={_bindingDescriptors:this._bindingDescriptors};return i.key=this._key,i.defaultMessage=this._defaultMessage,this._localizer!==Localizer.defaultLocalizer()&&(i.localizer=this._localizer),i}},serializeForLocalizations:{value:function(e){var i,a,t={};a=FrbBindings.getBindings(this),a&&a.get("key")?(t[KEY_KEY]={},this._serializeBinding(this,t[KEY_KEY],a.get("key"),e)):t[KEY_KEY]=this._key,a&&a.defaultMessage?(t[DEFAULT_MESSAGE_KEY]={},this._serializeBinding(this,t[DEFAULT_MESSAGE_KEY],a.defaultMessage,e)):t[DEFAULT_MESSAGE_KEY]=this._defaultMessage;var s=FrbBindings.getBindings(this.data);i=this.data.toObject();for(var n in i)!i.hasOwnProperty(n)||s&&s[".get('"+n+"')"]||(t.data=t.data||{},t.data[n]=i[n]);for(var o,r,l=s.keys();r=l.next().value;)o=/\.get\('([^']+)'\)/.exec(r)[1],t.data=t.data||{},t.data[o]={},this._serializeBinding(this.data,t.data[o],s.get(r),e);return t}},_serializeBinding:{value:function(e,i,a,t){if(!("serializable"in a)||a.serializable){var s,n=a.sourceSyntax;if(a.source!==e){var o=t.addObjectReference(a.source);s=new Scope({type:"component",label:o["@"]}),s.components=t,n=expand(n,s)}s=new Scope,s.components=t;var r=stringify(n,s);a.twoWay?i["<->"]=r:i["<-"]=r,a.converter?i.converter=a.converter:(i.convert=a.convert,i.revert=a.revert),a.trace&&(i.trace=!0)}}}}),createMessageBinding=function(e,i,a,t,s,n){var o=new Message;if(s){var r,l,c,u=o._data=new Map;for(r in s)s.hasOwnProperty(r)&&(l=s[r],c=typeof l,"string"===c?u.set(r,l):"object"===c&&Bindings.defineBinding(u,".get('"+r+"')",l,{components:n}));u.addMapChangeListener(o,"data")}"object"==typeof a?Bindings.defineBinding(o,"key",a,{components:n}):o.key=a,"object"==typeof t?Bindings.defineBinding(o,"defaultMessage",t,{components:n}):"string"==typeof t&&(o.defaultMessage=t),Bindings.defineBinding(e,i,{"<-":"__localizedResolved",source:o,serializable:!1})};Serializer.defineSerializationUnit("localizations",function(e,i){var a=FrbBindings.getBindings(i);if(a){var t;for(var s in a)if(a.hasOwnProperty(s)){var n=a[s];if(Message.prototype.isPrototypeOf(n.source)){t||(t={});var o=n.source;t[s]=o.serializeForLocalizations(e)}}return t}}),Deserializer.defineDeserializationUnit("localizations",function(e,i,a){var t,s,n;for(var o in a)if(a.hasOwnProperty(o)){if(t=a[o],!(KEY_KEY in t)){console.error("localized property '"+o+"' must contain a key property ("+KEY_KEY+"), in ",a[o]);continue}!logger.isDebug||DEFAULT_MESSAGE_KEY in t||logger.debug(this,"Warning: localized property '"+o+"' does not contain a default message property ("+DEFAULT_MESSAGE_KEY+"), in ",i),s=t[KEY_KEY],n=t[DEFAULT_MESSAGE_KEY],createMessageBinding(i,o,s,n,t.data,e)}});