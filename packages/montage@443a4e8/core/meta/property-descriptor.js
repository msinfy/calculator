var Montage=require("../core").Montage,Promise=require("../promise").Promise,deprecate=require("../deprecate"),logger=require("../logger").logger("objectDescriptor"),Defaults={name:"default",cardinality:1,mandatory:!1,readOnly:!1,denyDelete:!1,valueType:"string",collectionValueType:"list",valueObjectPrototypeName:"",valueObjectModuleId:"",valueDescriptor:void 0,enumValues:[],defaultValue:void 0,helpKey:""};exports.PropertyDescriptor=Montage.specialize({initWithNameObjectDescriptorAndCardinality:{value:function(e,t,r){return this._name=null!==e?e:Defaults.name,this._owner=t,this.cardinality=r>0?r:Defaults.cardinality,this}},initWithNameBlueprintAndCardinality:{value:deprecate.deprecateMethod(void 0,function(e,t,r){return this.initWithNameObjectDescriptorAndCardinality(e,t,r)},"new PropertyBlueprint().initWithNameBlueprintAndCardinality","new PropertyDescriptor().initWithNameObjectDescriptorAndCardinality")},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("objectDescriptor",this._owner,"reference"),this.cardinality===1/0?e.setProperty("cardinality",-1):this._setPropertyWithDefaults(e,"cardinality",this.cardinality),this._setPropertyWithDefaults(e,"mandatory",this.mandatory),this._setPropertyWithDefaults(e,"readOnly",this.readOnly),this._setPropertyWithDefaults(e,"denyDelete",this.denyDelete),this._setPropertyWithDefaults(e,"valueType",this.valueType),this._setPropertyWithDefaults(e,"collectionValueType",this.collectionValueType),this._setPropertyWithDefaults(e,"valueObjectPrototypeName",this.valueObjectPrototypeName),this._setPropertyWithDefaults(e,"valueObjectModuleId",this.valueObjectModuleId),this._setPropertyWithDefaults(e,"valueDescriptor",this._valueDescriptorReference),this.enumValues.length>0&&this._setPropertyWithDefaults(e,"enumValues",this.enumValues),this._setPropertyWithDefaults(e,"defaultValue",this.defaultValue),this._setPropertyWithDefaults(e,"helpKey",this.helpKey),this._setPropertyWithDefaults(e,"definition",this.definition)}},deserializeSelf:{value:function(e){var t;t=e.getProperty("name"),void 0!==t&&(this._name=t),t=e.getProperty("objectDescriptor")||e.getProperty("blueprint"),void 0!==t&&(this._owner=t),this._overridePropertyWithDefaults(e,"cardinality"),this.cardinality===-1&&(this.cardinality=1/0),this._overridePropertyWithDefaults(e,"mandatory"),this._overridePropertyWithDefaults(e,"readOnly"),this._overridePropertyWithDefaults(e,"denyDelete"),this._overridePropertyWithDefaults(e,"valueType"),this._overridePropertyWithDefaults(e,"collectionValueType"),this._overridePropertyWithDefaults(e,"valueObjectPrototypeName"),this._overridePropertyWithDefaults(e,"valueObjectModuleId"),this._overridePropertyWithDefaults(e,"_valueDescriptorReference","valueDescriptor","targetBlueprint"),this._overridePropertyWithDefaults(e,"enumValues"),this._overridePropertyWithDefaults(e,"defaultValue"),this._overridePropertyWithDefaults(e,"helpKey"),this._overridePropertyWithDefaults(e,"definition")}},_setPropertyWithDefaults:{value:function(e,t,r){null!==r&&r!==Defaults[t]&&e.setProperty(t,r)}},_getPropertyWithDefaults:{value:function(e){var t,r,i,a=Array.prototype.slice.call(arguments).slice(1,1/0);for(r=0,i=a.length;r<i&&!t;r+=1)t=e.getProperty(a[r]);return t||Defaults[a[0]]}},_overridePropertyWithDefaults:{value:function(e,t){var r,i,a,l;for(r=arguments.length>2?Array.prototype.slice.call(arguments,2,1/0):[t],a=0,l=r.length;a<l&&!i;a++)i=e.getProperty(r[a]);this[t]=void 0===i?Defaults[r[0]]:i}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},cardinality:{value:Defaults.cardinality},mandatory:{value:Defaults.mandatory},denyDelete:{value:Defaults.denyDelete},readOnly:{value:Defaults.readOnly},isToMany:{get:function(){return this.cardinality===1/0||this.cardinality>1}},isDerived:{get:function(){return!1}},definition:{value:null},valueType:{value:Defaults.valueType},collectionValueType:{value:Defaults.collectionValueType},valueObjectPrototypeName:{value:Defaults.valueObjectPrototypeName},valueObjectModuleId:{value:Defaults.valueObjectModuleId},valueDescriptor:{serializable:!1,get:function(){return this._valueDescriptorReference&&"function"==typeof this._valueDescriptorReference.promise?(deprecate.deprecationWarningOnce("valueDescriptor reference via ObjectDescriptorReference","direct reference via object syntax"),this._valueDescriptorReference.promise(this.require)):Promise.resolve(this._valueDescriptorReference)},set:function(e){this._valueDescriptorReference=e}},_targetObjectDescriptorReference:{value:null},_enumValues:{value:null},enumValues:{get:function(){return this._enumValues?this._enumValues:[]},set:function(e){Array.isArray(e)&&(this._enumValues=e)}},defaultValue:{value:Defaults.defaultValue},helpKey:{value:Defaults.helpKey},objectDescriptorModuleId:require("../core")._objectDescriptorModuleIdDescriptor,objectDescriptor:require("../core")._objectDescriptorDescriptor,serializable:{value:!0},isAssociationBlueprint:{get:deprecate.deprecateMethod(void 0,function(){return!!this._valueDescriptorReference},"isAssociationBlueprint","No analog")},targetBlueprint:{get:deprecate.deprecateMethod(void 0,function(){return this.valueDescriptor},"targetBlueprint.get","valueDescriptor.get"),set:deprecate.deprecateMethod(void 0,function(e){this.valueDescriptor=e},"targetBlueprint.get","valueDescriptor.set")},blueprintDescriptorModuleId:require("../core")._objectDescriptorModuleIdDescriptor,blueprint:require("../core")._objectDescriptorDescriptor});