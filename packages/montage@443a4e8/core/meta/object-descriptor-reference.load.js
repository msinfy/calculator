montageDefine("443a4e8","core/meta/object-descriptor-reference",{dependencies:["../promise","./object-descriptor","./model","./remote-reference","./model-reference","./module-object-descriptor"],factory:function(e,r,o){var t=e("../promise").Promise,c=e("./object-descriptor"),n=e("./model"),i=e("./remote-reference").RemoteReference,u=e("./model-reference").ModelReference;r.ObjectDescriptorReference=i.specialize({constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["objectDescriptor",(this._reference.objectDescriptorName||this._reference.blueprintName||"unnamed").toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(r){var o=r.objectDescriptorModule||r.blueprintModule,i=r.modelReference||r.binderReference,d=t.resolve(n.Model.group.defaultModel);return i&&(d=u.prototype.valueFromReference(i,e)),d.then(function(r){var t;return r?(t=e("./module-object-descriptor"),t.ModuleObjectDescriptor.getObjectDescriptorWithModuleId(o.id,o.require).then(function(e){if(e)return r.addObjectDescriptor(e),e;throw new Error("Error cannot find Object Descriptor "+o)})):c.ObjectDescriptor.getObjectDescriptorWithModuleId(o,e)})}},referenceFromValue:{value:function(e){var r={};return r.objectDescriptorName=e.name,r.objectDescriptorModule=e.objectDescriptorInstanceModule,e.model&&!e.model.isDefault&&(r.modelReference=u.prototype.referenceFromValue(e.model)),r}}})}});