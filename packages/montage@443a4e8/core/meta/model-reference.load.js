montageDefine("443a4e8","core/meta/model-reference",{dependencies:["../promise","./remote-reference","./model"],factory:function(e,r,o){var n=e("../promise").Promise,t=e("./remote-reference").RemoteReference,c=e("./model");r.ModelReference=t.specialize({constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["model",this._reference.modelName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,r){var o=e.modelName,t=e.modelModuleId,l=c.Model.group.modelForName(o);return l?n.resolve(l):n.reject(new Error("Error cannot find Object Model "+t))}},referenceFromValue:{value:function(e){var r={};return r.modelName=e.name,r.modelModuleId=e.modelModuleId,r}}})}});