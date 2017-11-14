montageDefine("443a4e8","ui/text-input",{dependencies:["ui/control","core/deprecate"],factory:function(e,t,n){var l=e("ui/control").Control,a=e("core/deprecate"),i=t.TextInput=l.specialize({select:{value:function(){this._element.select()}},_hasStandardElement:{value:!0},_updateOnInput:{value:!0},updateOnInput:{get:function(){return!!this._updateOnInput},set:function(e){this._updateOnInput=e}},enterDocument:{value:function(e){e&&(this._value===this.constructor.prototype._value&&(this.value=this.originalElement?this.originalElement.textContent:this._element.textContent),(this.hasStandardElement||"true"===this.element.contentEditable)&&(this.element.addEventListener("input",this),this.element.addEventListener("change",this)))}},_setElementValue:{value:function(e){var t;t=null===e||"undefined"==typeof e?"":String(null===e||void 0===e?"":e),t!==this.element.value&&(this.element.value=t)}},drawsFocusOnPointerActivation:{value:!0},draw:{enumerable:!1,value:function(){l.prototype.draw.call(this);var e=this.element;this._setElementValue(this.converter?this.converter.convert(this._value):this._value),this.error?(e.classList.add("montage--invalidText"),e.title=this.error.message||""):(e.classList.remove("montage--invalidText"),e.title="")}},didDraw:{enumerable:!1,value:function(){if(this._hasFocus&&null!==this._value&&void 0!==this._value){var e=this._value.toString().length;this.element.setSelectionRange(e,e)}this.needsDraw||(this._valueSyncedWithElement=!0)}},handleInput:{enumerable:!1,value:function(){this.converter?this.converter.allowPartialConversion===!0&&this.updateOnInput===!0&&this.takeValueFromElement():this.updateOnInput===!0&&this.takeValueFromElement()}},handleChange:{enumerable:!1,value:function(e){this.takeValueFromElement(),this.dispatchActionEvent(),this._hasFocus=!1}},handleBlur:{enumerable:!1,value:function(e){this["super"](e),this.takeValueFromElement(),this.dispatchActionEvent()}},placeholderValue:{set:function(e){a.deprecationWarning("placeholderValue","placeholder"),this.placeholder=e},get:function(){return this.placeholder}}});i.addAttributes({accept:null,alt:null,autocomplete:null,checked:{dataType:"boolean"},dirname:null,formaction:null,formenctype:null,formmethod:null,formnovalidate:{dataType:"boolean"},formtarget:null,height:null,list:null,maxlength:null,multiple:{dataType:"boolean"},pattern:null,placeholder:null,readonly:{dataType:"boolean"},required:{dataType:"boolean"},size:null,src:null,width:null})}});