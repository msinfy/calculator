montageDefine("443a4e8","core/serialization/alias",{dependencies:["../core"],factory:function(e,a,t){var n=e("../core").Montage;a.Alias=n.specialize({_value:{value:null},_aliasRegExp:{value:/@([_a-zA-Z$][0-9_a-zA-Z$]*):([_a-zA-Z$][0-9_a-zA-Z$]*)$/},value:{get:function(){return this._value},set:function(e){var a=this._aliasRegExp.exec(e);if(!a)throw new Error("Invalid alias syntax: "+e);this._value=e,this._componentLabel=a[1],this._propertyName=a[2]}},_componentLabel:{value:null},componentLabel:{get:function(){return this._componentLabel}},_propertyName:{value:null},propertyName:{get:function(){return this._propertyName}},init:{value:function(e){return this.value=e,this}}})}});