import{E as e}from"./has-symbols.66aa3060.js";import{E as r}from"./function-bind.3516d9d0.js";import{E as t}from"./has.e5e9094d.js";var o=SyntaxError,n=Function,a=TypeError,y=function(e){try{return n('"use strict"; return ('+e+").constructor;")()}catch(r){}},i=Object.getOwnPropertyDescriptor;if(i)try{i({},"")}catch(w){i=null}var p=function(){throw new a},f=i?function(){try{return p}catch(e){try{return i(arguments,"callee").get}catch(r){return p}}}():p,d=e(),u=Object.getPrototypeOf||function(e){return e.__proto__},c={},s="undefined"==typeof Uint8Array?undefined:u(Uint8Array),l={"%AggregateError%":"undefined"==typeof AggregateError?undefined:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?undefined:ArrayBuffer,"%ArrayIteratorPrototype%":d?u([][Symbol.iterator]()):undefined,"%AsyncFromSyncIteratorPrototype%":undefined,"%AsyncFunction%":c,"%AsyncGenerator%":c,"%AsyncGeneratorFunction%":c,"%AsyncIteratorPrototype%":c,"%Atomics%":"undefined"==typeof Atomics?undefined:Atomics,"%BigInt%":"undefined"==typeof BigInt?undefined:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?undefined:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?undefined:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?undefined:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?undefined:FinalizationRegistry,"%Function%":n,"%GeneratorFunction%":c,"%Int8Array%":"undefined"==typeof Int8Array?undefined:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?undefined:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?undefined:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":d?u(u([][Symbol.iterator]())):undefined,"%JSON%":"object"==typeof JSON?JSON:undefined,"%Map%":"undefined"==typeof Map?undefined:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&d?u((new Map)[Symbol.iterator]()):undefined,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?undefined:Promise,"%Proxy%":"undefined"==typeof Proxy?undefined:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?undefined:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?undefined:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&d?u((new Set)[Symbol.iterator]()):undefined,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?undefined:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":d?u(""[Symbol.iterator]()):undefined,"%Symbol%":d?Symbol:undefined,"%SyntaxError%":o,"%ThrowTypeError%":f,"%TypedArray%":s,"%TypeError%":a,"%Uint8Array%":"undefined"==typeof Uint8Array?undefined:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?undefined:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?undefined:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?undefined:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?undefined:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?undefined:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?undefined:WeakSet},A=function e(r){var t;if("%AsyncFunction%"===r)t=y("async function () {}");else if("%GeneratorFunction%"===r)t=y("function* () {}");else if("%AsyncGeneratorFunction%"===r)t=y("async function* () {}");else if("%AsyncGenerator%"===r){var o=e("%AsyncGeneratorFunction%");o&&(t=o.prototype)}else if("%AsyncIteratorPrototype%"===r){var n=e("%AsyncGenerator%");n&&(t=u(n.prototype))}return l[r]=t,t},P={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},g=r,m=t,S=g.call(Function.call,Array.prototype.concat),E=g.call(Function.apply,Array.prototype.splice),I=g.call(Function.call,String.prototype.replace),F=g.call(Function.call,String.prototype.slice),h=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,b=/\\(\\)?/g,U=function(e){var r=F(e,0,1),t=F(e,-1);if("%"===r&&"%"!==t)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===t&&"%"!==r)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return I(e,h,(function(e,r,t,o){n[n.length]=t?I(o,b,"$1"):r||e})),n},v=function(e,r){var t,n=e;if(m(P,n)&&(n="%"+(t=P[n])[0]+"%"),m(l,n)){var y=l[n];if(y===c&&(y=A(n)),void 0===y&&!r)throw new a("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:t,name:n,value:y}}throw new o("intrinsic "+e+" does not exist!")},R=function(e,r){if("string"!=typeof e||0===e.length)throw new a("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof r)throw new a('"allowMissing" argument must be a boolean');var t=U(e),n=t.length>0?t[0]:"",y=v("%"+n+"%",r),p=y.name,f=y.value,d=!1,u=y.alias;u&&(n=u[0],E(t,S([0,1],u)));for(var c=1,s=!0;c<t.length;c+=1){var A=t[c],P=F(A,0,1),g=F(A,-1);if(('"'===P||"'"===P||"`"===P||'"'===g||"'"===g||"`"===g)&&P!==g)throw new o("property names with quotes must have matching quotes");if("constructor"!==A&&s||(d=!0),m(l,p="%"+(n+="."+A)+"%"))f=l[p];else if(null!=f){if(!(A in f)){if(!r)throw new a("base intrinsic for "+e+" exists, but the property is not available.");return}if(i&&c+1>=t.length){var I=i(f,A);f=(s=!!I)&&"get"in I&&!("originalValue"in I.get)?I.get:f[A]}else s=m(f,A),f=f[A];s&&!d&&(l[p]=f)}}return f};export{R as E};
