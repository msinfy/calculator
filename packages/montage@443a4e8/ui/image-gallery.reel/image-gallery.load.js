montageDefine("443a4e8","ui/image-gallery.reel/image-gallery",{dependencies:["ui/component"],factory:function(e,t,l){var o=e("ui/component").Component,n=t.ImageGallery=o.specialize({images:{get:function(){return this._images=this._images||[],this._images},set:function(e){(e?e!==this._images:this._images)&&(this._images=e,this.scroll=0)}},scroll:{get:function(){return this._flow?this._flow.scroll:this._flowScroll},set:function(e){e=Number(e)||0,this._flow?e!==this._flow.scroll&&(this._flow.scroll=e):this._flowScroll=e}},_flowScroll:{get:function(){return this.__flowScroll||0},set:function(e){e=Number(e)||0,Math.round(e)!==this.currentImageIndex?(this.dispatchBeforeOwnPropertyChange("scroll",this._flowScroll),this.dispatchBeforeOwnPropertyChange("currentImageIndex",this.currentImageIndex),this.__flowScroll=e,this.dispatchOwnPropertyChange("currentImageIndex",this.currentImageIndex),this.dispatchOwnPropertyChange("scroll",this._flowScroll)):(e?e!==this.__flowScroll:this.__flowScroll)&&(this.dispatchBeforeOwnPropertyChange("scroll",this._flowScroll),this.__flowScroll=e,this.dispatchOwnPropertyChange("scroll",this._flowScroll))}},currentImageIndex:{get:function(){return Math.round(this._flowScroll)}},scrollToImageIndex:{value:function(e){this._flow&&this._flow.startScrollingIndexToOffset(e,0)}},handlePreviousAction:{value:function(){this.scrollToImageIndex(this.currentImageIndex-1)}},handleNextAction:{value:function(){this.scrollToImageIndex(this.currentImageIndex+1)}}});window.MontageElement&&MontageElement.define("montage-image-gallery",n)}});