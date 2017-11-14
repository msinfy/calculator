montageDefine("443a4e8","ui/base/abstract-image",{dependencies:["../component","../../core/mini-url","collections/map"],factory:function(e,t,i){var a=e("../component").Component,s=e("../../core/mini-url"),n=e("collections/map");"undefined"!=typeof window&&(n=window.Map||n),t.AbstractImage=a.specialize({constructor:{value:function r(){if(this.constructor===r)throw new Error("AbstractImage cannot be instantiated.");this.addPathChangeListener("_ownerDocumentPart",this,"_rebaseSrc")}},emptyImageSrc:{value:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},_isLoadingImage:{value:!1},_image:{value:null},_src:{value:null},src:{set:function(e){this._src!==e&&(this._src=e,e=this._getRebasedSrc(),e?(this._isInvalidSrc=!1,this._loadImage(e)):this._isInvalidSrc=!0,this.needsDraw=!0)},get:function(){return this._src}},_loadImage:{value:function(e){this._image&&e===this._image.src||(this._image&&this.constructor.checkinImage(this._image),this._image=this.constructor.checkoutImageWithUrl(e,this),this._isLoadingImage=!this._image.complete)}},_isInvalidSrc:{value:!0},width:{value:null},height:{value:null},_textAlternative:{value:null},textAlternative:{set:function(e){this._textAlternative=e,this.needsDraw=!0},get:function(){return this._textAlternative}},_crossOrigin:{value:null},crossOrigin:{set:function(e){e!==this._crossOrigin&&(this._crossOrigin=e,this.needsDraw=!0)},get:function(){return this._crossOrigin}},_rebaseSrc:{value:function(){var e;e=this._getRebasedSrc(),e&&(this._isInvalidSrc=!1,this._loadImage(e),this.needsDraw=!0)}},_getRebasedSrc:{value:function(){return this._getRebasedUrl(this._src)}},_getRebasedEmptySrc:{value:function(){return this._getRebasedUrl(this.emptyImageSrc)}},_getRebasedUrl:{value:function(e){var t,i=/^[\w\-]+:|^\//;if(e){if(i.test(e))return e;if(this._ownerDocumentPart&&(t=this._ownerDocumentPart.template.getBaseUrl()))return s.resolve(t,e)}return null}},enterDocument:{value:function(e){e&&this.element.setAttribute("role","img")}},draw:{value:function(){var e;e=this._isLoadingImage||this._isInvalidSrc?this._getRebasedEmptySrc():this._getRebasedSrc(),null===this._crossOrigin||void 0===this._crossOrigin||"data:"===e.slice(0,5)?this.element.removeAttribute("crossorigin"):this.element.setAttribute("crossorigin",this._crossOrigin),this.element.src=e,this.element.setAttribute("aria-label",this._textAlternative)}},handleLoad:{value:function(e){this._isLoadingImage=!1,this.needsDraw=!0,e.target.removeEventListener("load",this,!1)}}},{checkoutImageWithUrl:{value:function(e,t){var i=this._imageCache.get(e);return i?i.complete?t.handleLoad({target:i}):i.addEventListener("load",t,!1):(i=this._imagePool.pop()||new Image,i.addEventListener("load",t,!1),i.src=e,this._imageCache.set(e,i),this._imageCacheSize++),this._imagesToClear["delete"](i),this._imageReferenceCount.set(i,(this._imageReferenceCount.get(i)||0)+1),i}},checkinImage:{value:function(e){var t=this._imageReferenceCount.get(e)-1;0===t?(this._imagesToClear.set(e,Date.now()),this._clearImageInterval||(this._clearImageInterval=setInterval(this._clearImage,this.clearCacheInterval,this))):this._imageReferenceCount.set(e,t)}},_clearImage:{value:function(e){e._imagesToClear.forEach(function(t,i){Date.now()-t>this.maxTimeUnused&&(e._imagePool.push(i),e._imageReferenceCount["delete"](i),e._imageCache["delete"](i.src),i.src=void 0)})}},_imagePool:{value:[]},_imagesToClear:{value:new n},_imageReferenceCount:{value:new n},_imageCache:{value:new n},clearCacheInterval:{value:6e4},maxTimeUnused:{value:6e4},_imageCacheSize:{value:0}})}});