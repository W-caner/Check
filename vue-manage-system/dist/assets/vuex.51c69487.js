import{aF as t,$ as e,r as o,a_ as n}from"./@vue.c261c184.js";
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */function r(t){return void 0===t&&(t=null),e(null!==t?t:"store")}function i(t,e){Object.keys(t).forEach((function(o){return e(t[o],o)}))}function a(t,e,o){return e.indexOf(t)<0&&(o&&o.prepend?e.unshift(t):e.push(t)),function(){var o=e.indexOf(t);o>-1&&e.splice(o,1)}}function s(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var o=t.state;u(t,o,[],t._modules.root,!0),c(t,o,e)}function c(e,n,r){var a=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,c={};i(s,(function(t,o){c[o]=function(t,e){return function(){return t(e)}}(t,e),Object.defineProperty(e.getters,o,{get:function(){return c[o]()},enumerable:!0})})),e._state=o({data:n}),e.strict&&function(e){t((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),a&&r&&e._withCommit((function(){a.data=null}))}function u(t,e,o,n,r){var i=!o.length,a=t._modules.getNamespace(o);if(n.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=n),!i&&!r){var s=d(e,o.slice(0,-1)),c=o[o.length-1];t._withCommit((function(){s[c]=n.state}))}var f=n.context=function(t,e,o){var n=""===e,r={dispatch:n?t.dispatch:function(o,n,r){var i=p(o,n,r),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:n?t.commit:function(o,n,r){var i=p(o,n,r),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(r,{getters:{get:n?function(){return t.getters}:function(){return l(t,e)}},state:{get:function(){return d(t.state,o)}}}),r}(t,a,o);n.forEachMutation((function(e,o){!function(t,e,o,n){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){o.call(t,n.state,e)}))}(t,a+o,e,f)})),n.forEachAction((function(e,o){var n=e.root?o:a+o,r=e.handler||e;!function(t,e,o,n){(t._actions[e]||(t._actions[e]=[])).push((function(e){var r,i=o.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return(r=i)&&"function"==typeof r.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,n,r,f)})),n.forEachGetter((function(e,o){!function(t,e,o,n){if(t._wrappedGetters[e])return;t._wrappedGetters[e]=function(t){return o(n.state,n.getters,t.state,t.getters)}}(t,a+o,e,f)})),n.forEachChild((function(n,i){u(t,e,o.concat(i),n,r)}))}function l(t,e){if(!t._makeLocalGettersCache[e]){var o={},n=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,n)===e){var i=r.slice(n);Object.defineProperty(o,i,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=o}return t._makeLocalGettersCache[e]}function d(t,e){return e.reduce((function(t,e){return t[e]}),t)}function p(t,e,o){var n;return null!==(n=t)&&"object"==typeof n&&t.type&&(o=e,e=t,t=t.type),{type:t,payload:e,options:o}}var f=0;function h(t,e){n({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(o){o.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:m}),o.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:m}),o.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),o.on.getInspectorTree((function(o){if(o.app===t&&"vuex"===o.inspectorId)if(o.filter){var n=[];y(n,e._modules.root,o.filter,""),o.rootNodes=n}else o.rootNodes=[g(e._modules.root,"")]})),o.on.getInspectorState((function(o){if(o.app===t&&"vuex"===o.inspectorId){var n=o.nodeId;l(e,n),o.state=function(t,e,o){e="root"===o?e:e[o];var n=Object.keys(e),r={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(n.length){var i=function(t){var e={};return Object.keys(t).forEach((function(o){var n=o.split("/");if(n.length>1){var r=e,i=n.pop();n.forEach((function(t){r[t]||(r[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),r=r[t]._custom.value})),r[i]=b((function(){return t[o]}))}else e[o]=b((function(){return t[o]}))})),e}(e);r.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?_(t):t,editable:!1,value:b((function(){return i[t]}))}}))}return r}((r=e._modules,(a=(i=n).split("/").filter((function(t){return t}))).reduce((function(t,e,o){var n=t[e];if(!n)throw new Error('Missing module "'+e+'" for path "'+i+'".');return o===a.length-1?n:n._children}),"root"===i?r:r.root._children)),"root"===n?e.getters:e._makeLocalGettersCache,n)}var r,i,a})),o.on.editInspectorState((function(o){if(o.app===t&&"vuex"===o.inspectorId){var n=o.nodeId,r=o.path;"root"!==n&&(r=n.split("/").filter(Boolean).concat(r)),e._withCommit((function(){o.set(e._state.data,r,o.state.value)}))}})),e.subscribe((function(t,e){var n={};t.payload&&(n.payload=t.payload),n.state=e,o.notifyComponentUpdate(),o.sendInspectorTree("vuex"),o.sendInspectorState("vuex"),o.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:t.type,data:n}})})),e.subscribeAction({before:function(t,e){var n={};t.payload&&(n.payload=t.payload),t._id=f++,t._time=Date.now(),n.state=e,o.addTimelineEvent({layerId:"vuex:actions",event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:n}})},after:function(t,e){var n={},r=Date.now()-t._time;n.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},t.payload&&(n.payload=t.payload),n.state=e,o.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:n}})}})}))}var m=8702998,v={label:"namespaced",textColor:16777215,backgroundColor:6710886};function _(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function g(t,e){return{id:e||"root",label:_(e),tags:t.namespaced?[v]:[],children:Object.keys(t._children).map((function(o){return g(t._children[o],e+o+"/")}))}}function y(t,e,o,n){n.includes(o)&&t.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:e.namespaced?[v]:[]}),Object.keys(e._children).forEach((function(r){y(t,e._children[r],o,n+r+"/")}))}function b(t){try{return t()}catch(e){return e}}var w=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var o=t.state;this.state=("function"==typeof o?o():o)||{}},j={namespaced:{configurable:!0}};j.namespaced.get=function(){return!!this._rawModule.namespaced},w.prototype.addChild=function(t,e){this._children[t]=e},w.prototype.removeChild=function(t){delete this._children[t]},w.prototype.getChild=function(t){return this._children[t]},w.prototype.hasChild=function(t){return t in this._children},w.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},w.prototype.forEachChild=function(t){i(this._children,t)},w.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},w.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},w.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(w.prototype,j);var C=function(t){this.register([],t,!1)};function x(t,e,o){if(e.update(o),o.modules)for(var n in o.modules){if(!e.getChild(n))return;x(t.concat(n),e.getChild(n),o.modules[n])}}function O(t){return new M(t)}C.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},C.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,o){return t+((e=e.getChild(o)).namespaced?o+"/":"")}),"")},C.prototype.update=function(t){x([],this.root,t)},C.prototype.register=function(t,e,o){var n=this;void 0===o&&(o=!0);var r=new w(e,o);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);e.modules&&i(e.modules,(function(e,r){n.register(t.concat(r),e,o)}))},C.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1],n=e.getChild(o);n&&n.runtime&&e.removeChild(o)},C.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1];return!!e&&e.hasChild(o)};var M=function(t){var e=this;void 0===t&&(t={});var o=t.plugins;void 0===o&&(o=[]);var n=t.strict;void 0===n&&(n=!1);var r=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new C(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var i=this,a=this.dispatch,s=this.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,o){return s.call(i,t,e,o)},this.strict=n;var l=this._modules.root.state;u(this,l,[],this._modules.root),c(this,l),o.forEach((function(t){return t(e)}))},E={state:{configurable:!0}};M.prototype.install=function(t,e){t.provide(e||"store",this),t.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&h(t,this)},E.state.get=function(){return this._state.data},E.state.set=function(t){},M.prototype.commit=function(t,e,o){var n=this,r=p(t,e,o),i=r.type,a=r.payload,s={type:i,payload:a},c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(s,n.state)})))},M.prototype.dispatch=function(t,e){var o=this,n=p(t,e),r=n.type,i=n.payload,a={type:r,payload:i},s=this._actions[r];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,o.state)}))}catch(u){}var c=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){c.then((function(e){try{o._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,o.state)}))}catch(u){}t(e)}),(function(t){try{o._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,o.state,t)}))}catch(u){}e(t)}))}))}},M.prototype.subscribe=function(t,e){return a(t,this._subscribers,e)},M.prototype.subscribeAction=function(t,e){return a("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},M.prototype.watch=function(e,o,n){var r=this;return t((function(){return e(r.state,r.getters)}),o,Object.assign({},n))},M.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},M.prototype.registerModule=function(t,e,o){void 0===o&&(o={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),u(this,this.state,t,this._modules.get(t),o.preserveState),c(this,this.state)},M.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){delete d(e.state,t.slice(0,-1))[t[t.length-1]]})),s(this)},M.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},M.prototype.hotUpdate=function(t){this._modules.update(t),s(this,!0)},M.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(M.prototype,E);export{O as c,r as u};
