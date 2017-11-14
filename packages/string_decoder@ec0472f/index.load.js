montageDefine("ec0472f","index",{dependencies:["buffer"],factory:function(e,t,h){function r(e){if(e&&!s(e))throw new Error("Unknown encoding: "+e)}function i(e){return e.toString(this.encoding)}function c(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function a(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}var n=e("buffer").Buffer,s=n.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},o=t.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),r(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=c;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return void(this.write=i)}this.charBuffer=new n(6),this.charReceived=0,this.charLength=0};o.prototype.write=function(e){for(var t="";this.charLength;){var h=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,h),this.charReceived+=h,this.charReceived<this.charLength)return"";e=e.slice(h,e.length),t=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var r=t.charCodeAt(t.length-1);if(!(r>=55296&&r<=56319)){if(this.charReceived=this.charLength=0,0===e.length)return t;break}this.charLength+=this.surrogateSize,t=""}this.detectIncompleteChar(e);var i=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,i),i-=this.charReceived),t+=e.toString(this.encoding,0,i);var i=t.length-1,r=t.charCodeAt(i);if(r>=55296&&r<=56319){var c=this.surrogateSize;return this.charLength+=c,this.charReceived+=c,this.charBuffer.copy(this.charBuffer,c,0,c),e.copy(this.charBuffer,0,0,c),t.substring(0,i)}return t},o.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var h=e[e.length-t];if(1==t&&h>>5==6){this.charLength=2;break}if(t<=2&&h>>4==14){this.charLength=3;break}if(t<=3&&h>>3==30){this.charLength=4;break}}this.charReceived=t},o.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var h=this.charReceived,r=this.charBuffer,i=this.encoding;t+=r.slice(0,h).toString(i)}return t}}});