montageDefine("443a4e8","core/converter/upper-case-converter",{dependencies:["./converter","../deprecate"],factory:function(e,t,r){var n,o=e("./converter").Converter,c=e("../deprecate"),i=!1,a=t.UpperCaseConverter=o.specialize({constructor:{value:function(){return this.constructor===a?(n||(n=this),i||c.deprecationWarning("Instantiating UpperCaseConverter is deprecated, use its singleton instead"),n):this}},_convert:{value:function(e){return e&&"string"==typeof e&&e.toUpperCase?e.toUpperCase():e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}});Object.defineProperty(t,"singleton",{get:function(){return n||(i=!0,n=new a,i=!1),n}})}});