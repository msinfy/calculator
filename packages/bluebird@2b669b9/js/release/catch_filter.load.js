montageDefine("2b669b9","js/release/catch_filter",{dependencies:["./util","./es5"],factory:function(r,e,t){"use strict";t.exports=function(e){function t(r,t,a){return function(c){var l=a._boundValue();r:for(var u=0;u<r.length;++u){var s=r[u];if(s===Error||null!=s&&s.prototype instanceof Error){if(c instanceof s)return f(t).call(l,c)}else if("function"==typeof s){var v=f(s).call(l,c);if(v===o)return v;if(v)return f(t).call(l,c)}else if(n.isObject(c)){for(var b=i(s),p=0;p<b.length;++p){var y=b[p];if(s[y]!=c[y])continue r}return f(t).call(l,c)}}return e}}var n=r("./util"),i=r("./es5").keys,f=n.tryCatch,o=n.errorObj;return t}}});