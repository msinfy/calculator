var Montage=require("../../core").Montage,deprecate=require("../../deprecate"),SelfSerializer=Montage.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},initWithMalkerAndVisitorAndObject:{value:function(e,t,i){return this._malker=e,this._visitor=t,this._object=i,this}},getObjectLabel:{value:function(e){return this._visitor.labeler.getObjectLabel(e)}},addObject:{value:function(e){if("object"==typeof e)return this._malker.visit(e),e}},addObjectReference:{value:function(e){var t=this._visitor.builder,i=this._visitor.labeler,r=i.getObjectLabel(e);return{thisIsAReferenceCreatedByMontageSerializer:!0,reference:t.createObjectReference(r)}}},setProperty:{value:function(e,t,i){var r=this._visitor.builder,l=r.top.getProperty("values");r.push(l),this._visitor.setProperty(this._malker,e,t,i),r.pop()}},setAllProperties:{value:deprecate.deprecateMethod(void 0,function(){return this.setAllValues()},"setAllProperties","setAllValues")},setAllValues:{value:function(){var e=this._visitor.builder,t=e.top.getProperty("values");e.push(t),this._visitor.setSerializableObjectValues(this._malker,this._object),e.pop()}},setUnit:{value:function(e){this._visitor.setObjectCustomUnit(this._malker,this._object,e)}},setAllUnits:{value:function(e){this._visitor.setObjectCustomUnits(this._malker,this._object)}}});exports.SelfSerializer=SelfSerializer;