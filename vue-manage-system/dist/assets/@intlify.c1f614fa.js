/*!
  * @intlify/shared v9.1.6
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const e="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,t=t=>e?Symbol(t):t,n=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),r=e=>"number"==typeof e&&isFinite(e),o=e=>"[object RegExp]"===y(e),s=e=>L(e)&&0===Object.keys(e).length;function c(e,t){"undefined"!=typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const a=Object.assign;let u;const l=()=>u||(u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function i(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const f=Object.prototype.hasOwnProperty;function p(e,t){return f.call(e,t)}const m=Array.isArray,d=e=>"function"==typeof e,h=e=>"string"==typeof e,k=e=>"boolean"==typeof e,g=e=>null!==e&&"object"==typeof e,b=Object.prototype.toString,y=e=>b.call(e),L=e=>"[object Object]"===y(e);function _(){const e=new Map;return{events:e,on(t,n){const r=e.get(t);r&&r.push(n)||e.set(t,[n])},off(t,n){const r=e.get(t);r&&r.splice(r.indexOf(n)>>>0,1)},emit(t,n){(e.get(t)||[]).slice().map((e=>e(n))),(e.get("*")||[]).slice().map((e=>e(t,n)))}}}
/*!
  * @intlify/message-resolver v9.1.6
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const x=Object.prototype.hasOwnProperty;function v(e,t){return x.call(e,t)}const w=e=>null!==e&&"object"==typeof e,T=[];T[0]={w:[0],i:[3,0],"[":[4],o:[7]},T[1]={w:[1],".":[2],"[":[4],o:[7]},T[2]={w:[2],i:[3,0],0:[3,0]},T[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},T[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},T[5]={"'":[4,0],o:8,l:[5,0]},T[6]={'"':[4,0],o:8,l:[6,0]};const C=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function P(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function O(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,C.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}const S=new Map;function $(e,t){if(!w(e))return null;let n=S.get(t);if(n||(n=function(e){const t=[];let n,r,o,s,c,a,u,l=-1,i=0,f=0;const p=[];function m(){const t=e[l+1];if(5===i&&"'"===t||6===i&&'"'===t)return l++,o="\\"+t,p[0](),!0}for(p[0]=()=>{void 0===r?r=o:r+=o},p[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},p[2]=()=>{p[0](),f++},p[3]=()=>{if(f>0)f--,i=4,p[0]();else{if(f=0,void 0===r)return!1;if(r=O(r),!1===r)return!1;p[1]()}};null!==i;)if(l++,n=e[l],"\\"!==n||!m()){if(s=P(n),u=T[i],c=u[s]||u.l||8,8===c)return;if(i=c[0],void 0!==c[1]&&(a=p[c[1]],a&&(o=n,!1===a())))return;if(7===i)return t}}(t),n&&S.set(t,n)),!n)return null;const r=n.length;let o=e,s=0;for(;s<r;){const e=o[n[s]];if(void 0===e)return null;o=e,s++}return o}function F(e){if(!w(e))return e;for(const t in e)if(v(e,t))if(t.includes(".")){const n=t.split("."),r=n.length-1;let o=e;for(let e=0;e<r;e++)n[e]in o||(o[n[e]]={}),o=o[n[e]];o[n[r]]=e[t],delete e[t],w(o[n[r]])&&F(o[n[r]])}else w(e[t])&&F(e[t]);return e}
/*!
  * @intlify/runtime v9.1.6
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const N=e=>e,W=e=>"",I=e=>0===e.length?"":e.join(""),M=e=>null==e?"":m(e)||L(e)&&e.toString===b?JSON.stringify(e,null,2):String(e);function j(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function A(e={}){const t=e.locale,n=function(e){const t=r(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(r(e.named.count)||r(e.named.n))?r(e.named.count)?e.named.count:r(e.named.n)?e.named.n:t:t}(e),o=g(e.pluralRules)&&h(t)&&d(e.pluralRules[t])?e.pluralRules[t]:j,s=g(e.pluralRules)&&h(t)&&d(e.pluralRules[t])?j:void 0,c=e.list||[],a=e.named||{};r(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,a);function u(t){const n=d(e.messages)?e.messages(t):!!g(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):W)}const l=L(e.processor)&&d(e.processor.normalize)?e.processor.normalize:I,i=L(e.processor)&&d(e.processor.interpolate)?e.processor.interpolate:M,f={list:e=>c[e],named:e=>a[e],plural:e=>e[o(n,e.length,s)],linked:(t,n)=>{const r=u(t)(f);return h(n)?(o=n,e.modifiers?e.modifiers[o]:N)(r):r;var o},message:u,type:L(e.processor)&&h(e.processor.type)?e.processor.type:"text",interpolate:i,normalize:l};return f}
/*!
  * @intlify/message-compiler v9.1.6
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */function E(e,t,n={}){const{domain:r,messages:o,args:s}=n,c=new SyntaxError(String(e));return c.code=e,t&&(c.location=t),c.domain=r,c}function R(e){throw e}function D(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const z=String.fromCharCode(8232),J=String.fromCharCode(8233);function H(e){const t=e;let n=0,r=1,o=1,s=0;const c=e=>"\r"===t[e]&&"\n"===t[e+1],a=e=>t[e]===J,u=e=>t[e]===z,l=e=>c(e)||(e=>"\n"===t[e])(e)||a(e)||u(e),i=e=>c(e)||a(e)||u(e)?"\n":t[e];function f(){return s=0,l(n)&&(r++,o=0),c(n)&&n++,n++,o++,t[n]}return{index:()=>n,line:()=>r,column:()=>o,peekOffset:()=>s,charAt:i,currentChar:()=>i(n),currentPeek:()=>i(n+s),next:f,peek:function(){return c(n+s)&&s++,s++,t[n+s]},reset:function(){n=0,r=1,o=1,s=0},resetPeek:function(e=0){s=e},skipToPeek:function(){const e=n+s;for(;e!==n;)f();s=0}}}const U=void 0;function V(e,t={}){const n=!1!==t.location,r=H(e),o=()=>r.index(),s=()=>{return e=r.line(),t=r.column(),n=r.index(),{line:e,column:t,offset:n};var e,t,n},c=s(),a=o(),u={currentType:14,offset:a,startLoc:c,endLoc:c,lastType:14,lastOffset:a,lastStartLoc:c,lastEndLoc:c,braceNest:0,inLinked:!1,text:""},l=()=>u,{onError:i}=t;function f(e,t,n,...r){const o=l();if(t.column+=n,t.offset+=n,i){const n=E(e,D(o.startLoc,t),{domain:"tokenizer",args:r});i(n)}}function p(e,t,r){e.endLoc=s(),e.currentType=t;const o={type:t};return n&&(o.loc=D(e.startLoc,e.endLoc)),null!=r&&(o.value=r),o}const m=e=>p(e,14);function d(e,t){return e.currentChar()===t?(e.next(),t):(f(0,s(),0,t),"")}function h(e){let t="";for(;" "===e.currentPeek()||"\n"===e.currentPeek();)t+=e.currentPeek(),e.peek();return t}function k(e){const t=h(e);return e.skipToPeek(),t}function g(e){if(e===U)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function b(e,t){const{currentType:n}=t;if(2!==n)return!1;h(e);const r=function(e){if(e===U)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}("-"===e.currentPeek()?e.peek():e.currentPeek());return e.resetPeek(),r}function y(e){h(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function L(e,t=!0){const n=(t=!1,r="",o=!1)=>{const s=e.currentPeek();return"{"===s?"%"!==r&&t:"@"!==s&&s?"%"===s?(e.peek(),n(t,"%",!0)):"|"===s?!("%"!==r&&!o)||!(" "===r||"\n"===r):" "===s?(e.peek(),n(!0," ",o)):"\n"!==s||(e.peek(),n(!0,"\n",o)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function _(e,t){const n=e.currentChar();return n===U?U:t(n)?(e.next(),n):null}function x(e){return _(e,(e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t}))}function v(e){return _(e,(e=>{const t=e.charCodeAt(0);return t>=48&&t<=57}))}function w(e){return _(e,(e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}))}function T(e){let t="",n="";for(;t=v(e);)n+=t;return n}function C(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return P(e,t,4);case"U":return P(e,t,6);default:return f(3,s(),0,t),""}}function P(e,t,n){d(e,t);let r="";for(let o=0;o<n;o++){const n=w(e);if(!n){f(4,s(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function O(e){k(e);const t=d(e,"|");return k(e),t}function S(e,t){let n=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&f(8,s(),0),e.next(),n=p(t,2,"{"),k(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&f(7,s(),0),e.next(),n=p(t,3,"}"),t.braceNest--,t.braceNest>0&&k(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&f(6,s(),0),n=$(e,t)||m(t),t.braceNest=0,n;default:let r=!0,o=!0,c=!0;if(y(e))return t.braceNest>0&&f(6,s(),0),n=p(t,1,O(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return f(6,s(),0),t.braceNest=0,F(e,t);if(r=function(e,t){const{currentType:n}=t;if(2!==n)return!1;h(e);const r=g(e.currentPeek());return e.resetPeek(),r}(e,t))return n=p(t,5,function(e){k(e);let t="",n="";for(;t=x(e);)n+=t;return e.currentChar()===U&&f(6,s(),0),n}(e)),k(e),n;if(o=b(e,t))return n=p(t,6,function(e){k(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${T(e)}`):t+=T(e),e.currentChar()===U&&f(6,s(),0),t}(e)),k(e),n;if(c=function(e,t){const{currentType:n}=t;if(2!==n)return!1;h(e);const r="'"===e.currentPeek();return e.resetPeek(),r}(e,t))return n=p(t,7,function(e){k(e),d(e,"'");let t="",n="";const r=e=>"'"!==e&&"\n"!==e;for(;t=_(e,r);)n+="\\"===t?C(e):t;const o=e.currentChar();return"\n"===o||o===U?(f(2,s(),0),"\n"===o&&(e.next(),d(e,"'")),n):(d(e,"'"),n)}(e)),k(e),n;if(!r&&!o&&!c)return n=p(t,13,function(e){k(e);let t="",n="";const r=e=>"{"!==e&&"}"!==e&&" "!==e&&"\n"!==e;for(;t=_(e,r);)n+=t;return n}(e)),f(1,s(),0,n.value),k(e),n}return n}function $(e,t){const{currentType:n}=t;let r=null;const o=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||"\n"!==o&&" "!==o||f(9,s(),0),o){case"@":return e.next(),r=p(t,8,"@"),t.inLinked=!0,r;case".":return k(e),e.next(),p(t,9,".");case":":return k(e),e.next(),p(t,10,":");default:return y(e)?(r=p(t,1,O(e)),t.braceNest=0,t.inLinked=!1,r):function(e,t){const{currentType:n}=t;if(8!==n)return!1;h(e);const r="."===e.currentPeek();return e.resetPeek(),r}(e,t)||function(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;h(e);const r=":"===e.currentPeek();return e.resetPeek(),r}(e,t)?(k(e),$(e,t)):function(e,t){const{currentType:n}=t;if(9!==n)return!1;h(e);const r=g(e.currentPeek());return e.resetPeek(),r}(e,t)?(k(e),p(t,12,function(e){let t="",n="";for(;t=x(e);)n+=t;return n}(e))):function(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?g(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||" "===t||!t)&&("\n"===t?(e.peek(),r()):g(t))},o=r();return e.resetPeek(),o}(e,t)?(k(e),"{"===o?S(e,t)||r:p(t,11,function(e){const t=(n=!1,r)=>{const o=e.currentChar();return"{"!==o&&"%"!==o&&"@"!==o&&"|"!==o&&o?" "===o?r:"\n"===o?(r+=o,e.next(),t(n,r)):(r+=o,e.next(),t(!0,r)):r};return t(!1,"")}(e))):(8===n&&f(9,s(),0),t.braceNest=0,t.inLinked=!1,F(e,t))}}function F(e,t){let n={type:14};if(t.braceNest>0)return S(e,t)||m(t);if(t.inLinked)return $(e,t)||m(t);const r=e.currentChar();switch(r){case"{":return S(e,t)||m(t);case"}":return f(5,s(),0),e.next(),p(t,3,"}");case"@":return $(e,t)||m(t);default:if(y(e))return n=p(t,1,O(e)),t.braceNest=0,t.inLinked=!1,n;if(L(e))return p(t,0,function(e){const t=n=>{const r=e.currentChar();return"{"!==r&&"}"!==r&&"@"!==r&&r?"%"===r?L(e)?(n+=r,e.next(),t(n)):n:"|"===r?n:" "===r||"\n"===r?L(e)?(n+=r,e.next(),t(n)):y(e)?n:(n+=r,e.next(),t(n)):(n+=r,e.next(),t(n)):n};return t("")}(e));if("%"===r)return e.next(),p(t,4,"%")}return n}return{nextToken:function(){const{currentType:e,offset:t,startLoc:n,endLoc:c}=u;return u.lastType=e,u.lastOffset=t,u.lastStartLoc=n,u.lastEndLoc=c,u.offset=o(),u.startLoc=s(),r.currentChar()===U?p(u,14):F(r,u)},currentOffset:o,currentPosition:s,context:l}}const q=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function K(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function Y(e={}){const t=!1!==e.location,{onError:n}=e;function r(e,t,r,o,...s){const c=e.currentPosition();if(c.offset+=o,c.column+=o,n){const e=E(t,D(r,c),{domain:"parser",args:s});n(e)}}function o(e,n,r){const o={type:e,start:n,end:n};return t&&(o.loc={start:r,end:r}),o}function s(e,n,r,o){e.end=n,o&&(e.type=o),t&&e.loc&&(e.loc.end=r)}function c(e,t){const n=e.context(),r=o(3,n.offset,n.startLoc);return r.value=t,s(r,e.currentOffset(),e.currentPosition()),r}function u(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:c}=n,a=o(5,r,c);return a.index=parseInt(t,10),e.nextToken(),s(a,e.currentOffset(),e.currentPosition()),a}function l(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:c}=n,a=o(4,r,c);return a.key=t,e.nextToken(),s(a,e.currentOffset(),e.currentPosition()),a}function i(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:c}=n,a=o(9,r,c);return a.value=t.replace(q,K),e.nextToken(),s(a,e.currentOffset(),e.currentPosition()),a}function f(e){const t=e.context(),n=o(6,t.offset,t.startLoc);let c=e.nextToken();if(9===c.type){const t=function(e){const t=e.nextToken(),n=e.context(),{lastOffset:c,lastStartLoc:a}=n,u=o(8,c,a);return 12!==t.type?(r(e,11,n.lastStartLoc,0),u.value="",s(u,c,a),{nextConsumeToken:t,node:u}):(null==t.value&&r(e,13,n.lastStartLoc,0,B(t)),u.value=t.value||"",s(u,e.currentOffset(),e.currentPosition()),{node:u})}(e);n.modifier=t.node,c=t.nextConsumeToken||e.nextToken()}switch(10!==c.type&&r(e,13,t.lastStartLoc,0,B(c)),c=e.nextToken(),2===c.type&&(c=e.nextToken()),c.type){case 11:null==c.value&&r(e,13,t.lastStartLoc,0,B(c)),n.key=function(e,t){const n=e.context(),r=o(7,n.offset,n.startLoc);return r.value=t,s(r,e.currentOffset(),e.currentPosition()),r}(e,c.value||"");break;case 5:null==c.value&&r(e,13,t.lastStartLoc,0,B(c)),n.key=l(e,c.value||"");break;case 6:null==c.value&&r(e,13,t.lastStartLoc,0,B(c)),n.key=u(e,c.value||"");break;case 7:null==c.value&&r(e,13,t.lastStartLoc,0,B(c)),n.key=i(e,c.value||"");break;default:r(e,12,t.lastStartLoc,0);const a=e.context(),f=o(7,a.offset,a.startLoc);return f.value="",s(f,a.offset,a.startLoc),n.key=f,s(n,a.offset,a.startLoc),{nextConsumeToken:c,node:n}}return s(n,e.currentOffset(),e.currentPosition()),{node:n}}function p(e){const t=e.context(),n=o(2,1===t.currentType?e.currentOffset():t.offset,1===t.currentType?t.endLoc:t.startLoc);n.items=[];let a=null;do{const o=a||e.nextToken();switch(a=null,o.type){case 0:null==o.value&&r(e,13,t.lastStartLoc,0,B(o)),n.items.push(c(e,o.value||""));break;case 6:null==o.value&&r(e,13,t.lastStartLoc,0,B(o)),n.items.push(u(e,o.value||""));break;case 5:null==o.value&&r(e,13,t.lastStartLoc,0,B(o)),n.items.push(l(e,o.value||""));break;case 7:null==o.value&&r(e,13,t.lastStartLoc,0,B(o)),n.items.push(i(e,o.value||""));break;case 8:const s=f(e);n.items.push(s.node),a=s.nextConsumeToken||null}}while(14!==t.currentType&&1!==t.currentType);return s(n,1===t.currentType?t.lastOffset:e.currentOffset(),1===t.currentType?t.lastEndLoc:e.currentPosition()),n}function m(e){const t=e.context(),{offset:n,startLoc:c}=t,a=p(e);return 14===t.currentType?a:function(e,t,n,c){const a=e.context();let u=0===c.items.length;const l=o(1,t,n);l.cases=[],l.cases.push(c);do{const t=p(e);u||(u=0===t.items.length),l.cases.push(t)}while(14!==a.currentType);return u&&r(e,10,n,0),s(l,e.currentOffset(),e.currentPosition()),l}(e,n,c,a)}return{parse:function(n){const c=V(n,a({},e)),u=c.context(),l=o(0,u.offset,u.startLoc);return t&&l.loc&&(l.loc.source=n),l.body=m(c),14!==u.currentType&&r(c,13,u.lastStartLoc,0,n[u.offset]||""),s(l,c.currentOffset(),c.currentPosition()),l}}}function B(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function G(e,t){for(let n=0;n<e.length;n++)Q(e[n],t)}function Q(e,t){switch(e.type){case 1:G(e.cases,t),t.helper("plural");break;case 2:G(e.items,t);break;case 6:Q(e.key,t),t.helper("linked");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named")}}function X(e,t={}){const n=function(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:e=>(n.helpers.add(e),e)}}(e);n.helper("normalize"),e.body&&Q(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function Z(e,t){const{helper:n}=e;switch(t.type){case 0:!function(e,t){t.body?Z(e,t.body):e.push("null")}(e,t);break;case 1:!function(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const o=t.cases.length;for(let n=0;n<o&&(Z(e,t.cases[n]),n!==o-1);n++)e.push(", ");e.deindent(r()),e.push("])")}}(e,t);break;case 2:!function(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const o=t.items.length;for(let s=0;s<o&&(Z(e,t.items[s]),s!==o-1);s++)e.push(", ");e.deindent(r()),e.push("])")}(e,t);break;case 6:!function(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),Z(e,t.key),t.modifier&&(e.push(", "),Z(e,t.modifier)),e.push(")")}(e,t);break;case 8:case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:case 3:e.push(JSON.stringify(t.value),t)}}function ee(e,t={}){const n=a({},t),r=Y(n).parse(e);return X(r,n),((e,t={})=>{const n=h(t.mode)?t.mode:"normal",r=h(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,s=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",c=t.needIndent?t.needIndent:"arrow"!==n,a=e.helpers||[],u=function(e,t){const{sourceMap:n,filename:r,breakLineCode:o,needIndent:s}=t,c={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:s,indentLevel:0};function a(e,t){c.code+=e}function u(e,t=!0){const n=t?o:"";a(s?n+"  ".repeat(e):n)}return{context:()=>c,push:a,indent:function(e=!0){const t=++c.indentLevel;e&&u(t)},deindent:function(e=!0){const t=--c.indentLevel;e&&u(t)},newline:function(){u(c.indentLevel)},helper:e=>`_${e}`,needIndent:()=>c.needIndent}}(e,{mode:n,filename:r,sourceMap:o,breakLineCode:s,needIndent:c});u.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),u.indent(c),a.length>0&&(u.push(`const { ${a.map((e=>`${e}: _${e}`)).join(", ")} } = ctx`),u.newline()),u.push("return "),Z(u,e),u.deindent(c),u.push("}");const{code:l,map:i}=u.context();return{ast:e,code:l,map:i?i.toJSON():void 0}})(r,n)}
/*!
  * @intlify/devtools-if v9.1.6
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const te="i18n:init";
/*!
  * @intlify/core-base v9.1.6
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */let ne=null;function re(e){ne=e}const oe=se("function:translate");function se(e){return t=>ne&&ne.emit(e,t)}const ce=-1,ae="";let ue;function le(e){ue=e}let ie=null;const fe=e=>{ie=e};let pe=0;function me(e={}){const t=h(e.version)?e.version:"9.1.6",n=h(e.locale)?e.locale:"en-US",r=m(e.fallbackLocale)||L(e.fallbackLocale)||h(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,s=L(e.messages)?e.messages:{[n]:{}},u=L(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},l=L(e.numberFormats)?e.numberFormats:{[n]:{}},i=a({},e.modifiers||{},{upper:e=>h(e)?e.toUpperCase():e,lower:e=>h(e)?e.toLowerCase():e,capitalize:e=>h(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}),f=e.pluralRules||{},p=d(e.missing)?e.missing:null,b=!k(e.missingWarn)&&!o(e.missingWarn)||e.missingWarn,y=!k(e.fallbackWarn)&&!o(e.fallbackWarn)||e.fallbackWarn,_=!!e.fallbackFormat,x=!!e.unresolving,v=d(e.postTranslation)?e.postTranslation:null,w=L(e.processor)?e.processor:null,T=!k(e.warnHtmlMessage)||e.warnHtmlMessage,C=!!e.escapeParameter,P=d(e.messageCompiler)?e.messageCompiler:ue,O=d(e.onWarn)?e.onWarn:c,S=e,$=g(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,F=g(S.__numberFormatters)?S.__numberFormatters:new Map,N=g(S.__meta)?S.__meta:{};pe++;const W={version:t,cid:pe,locale:n,fallbackLocale:r,messages:s,datetimeFormats:u,numberFormats:l,modifiers:i,pluralRules:f,missing:p,missingWarn:b,fallbackWarn:y,fallbackFormat:_,unresolving:x,postTranslation:v,processor:w,warnHtmlMessage:T,escapeParameter:C,messageCompiler:P,onWarn:O,__datetimeFormatters:$,__numberFormatters:F,__meta:N};return __INTLIFY_PROD_DEVTOOLS__&&function(e,t,n){ne&&ne.emit(te,{timestamp:Date.now(),i18n:e,version:t,meta:n})}(W,t,N),W}function de(e,t,n,r,o){const{missing:s,onWarn:c}=e;if(null!==s){const r=s(e,n,t,o);return h(r)?r:t}return t}function he(e,t,n){const r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let o=r.__localeChainCache.get(n);if(!o){o=[];let e=[n];for(;m(e);)e=ke(o,e,t);const s=m(t)?t:L(t)?t.default?t.default:null:t;e=h(s)?[s]:s,m(e)&&ke(o,e,!1),r.__localeChainCache.set(n,o)}return o}function ke(e,t,n){let r=!0;for(let o=0;o<t.length&&k(r);o++){const s=t[o];h(s)&&(r=ge(e,t[o],n))}return r}function ge(e,t,n){let r;const o=t.split("-");do{r=be(e,o.join("-"),n),o.splice(-1,1)}while(o.length&&!0===r);return r}function be(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const o=t.replace(/!/g,"");e.push(o),(m(n)||L(n))&&n[o]&&(r=n[o])}return r}function ye(e,t,n){e.__localeChainCache=new Map,he(e,n,t)}const Le=e=>e;let _e=Object.create(null);function xe(e,t={}){{const n=(t.onCacheKey||Le)(e),r=_e[n];if(r)return r;let o=!1;const s=t.onError||R;t.onError=e=>{o=!0,s(e)};const{code:c}=ee(e,t),a=new Function(`return ${c}`)();return o?a:_e[n]=a}}function ve(e){return E(e,null,void 0)}const we=()=>"",Te=e=>d(e);function Ce(e,...t){const{fallbackFormat:n,postTranslation:o,unresolving:s,fallbackLocale:c,messages:u}=e,[l,f]=Oe(...t),p=(k(f.missingWarn)?f.missingWarn:e.missingWarn,k(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn,k(f.escapeParameter)?f.escapeParameter:e.escapeParameter),b=!!f.resolvedMessage,y=h(f.default)||k(f.default)?k(f.default)?l:f.default:n?l:"",L=n||""!==y,_=h(f.locale)?f.locale:e.locale;p&&function(e){m(e.list)?e.list=e.list.map((e=>h(e)?i(e):e)):g(e.named)&&Object.keys(e.named).forEach((t=>{h(e.named[t])&&(e.named[t]=i(e.named[t]))}))}(f);let[x,v,w]=b?[l,_,u[_]||{}]:function(e,t,n,r,o,s){const{messages:c,onWarn:a}=e,u=he(e,r,n);let l,i={},f=null;const p="translate";for(let m=0;m<u.length&&(l=u[m],i=c[l]||{},null===(f=$(i,t))&&(f=i[t]),!h(f)&&!d(f));m++){const n=de(e,t,l,0,p);n!==t&&(f=n)}return[f,l,i]}(e,l,_,c),T=l;if(b||h(x)||Te(x)||L&&(x=y,T=x),!(b||(h(x)||Te(x))&&h(v)))return s?-1:l;let C=!1;const P=Te(x)?x:Pe(e,l,v,x,T,(()=>{C=!0}));if(C)return x;const O=function(e,t,n){return t(n)}(0,P,A(function(e,t,n,o){const{modifiers:s,pluralRules:c}=e,a={locale:t,modifiers:s,pluralRules:c,messages:r=>{const o=$(n,r);if(h(o)){let n=!1;const s=Pe(e,r,t,o,r,(()=>{n=!0}));return n?we:s}return Te(o)?o:we}};e.processor&&(a.processor=e.processor);o.list&&(a.list=o.list);o.named&&(a.named=o.named);r(o.plural)&&(a.pluralIndex=o.plural);return a}(e,v,w,f))),S=o?o(O):O;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:h(l)?l:Te(x)?x.key:"",locale:v||(Te(x)?x.locale:""),format:h(x)?x:Te(x)?x.source:"",message:S};t.meta=a({},e.__meta,ie||{}),oe(t)}return S}function Pe(e,t,r,o,s,c){const{messageCompiler:a,warnHtmlMessage:u}=e;if(Te(o)){const e=o;return e.locale=e.locale||r,e.key=e.key||t,e}const l=a(o,function(e,t,r,o,s,c){return{warnHtmlMessage:s,onError:e=>{throw c&&c(e),e},onCacheKey:e=>((e,t,r)=>n({l:e,k:t,s:r}))(t,r,e)}}(0,r,s,0,u,c));return l.locale=r,l.key=t,l.source=o,l}function Oe(...e){const[t,n,o]=e,c={};if(!h(t)&&!r(t)&&!Te(t))throw ve(14);const u=r(t)?String(t):(Te(t),t);return r(n)?c.plural=n:h(n)?c.default=n:L(n)&&!s(n)?c.named=n:m(n)&&(c.list=n),r(o)?c.plural=o:h(o)?c.default=o:L(o)&&a(c,o),[u,c]}function Se(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:o,onWarn:c}=e,{__datetimeFormatters:u}=e,[l,i,f,p]=$e(...t);k(f.missingWarn)?f.missingWarn:e.missingWarn;k(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn;const m=!!f.part,d=h(f.locale)?f.locale:e.locale,g=he(e,o,d);if(!h(l)||""===l)return new Intl.DateTimeFormat(d).format(i);let b,y={},_=null;for(let s=0;s<g.length&&(b=g[s],y=n[b]||{},_=y[l],!L(_));s++)de(e,l,b,0,"datetime format");if(!L(_)||!h(b))return r?-1:l;let x=`${b}__${l}`;s(p)||(x=`${x}__${JSON.stringify(p)}`);let v=u.get(x);return v||(v=new Intl.DateTimeFormat(b,a({},_,p)),u.set(x,v)),m?v.formatToParts(i):v.format(i)}function $e(...e){const[t,n,o,s]=e;let c,a={},u={};if(h(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw ve(16);c=new Date(t);try{c.toISOString()}catch(l){throw ve(16)}}else if("[object Date]"===y(t)){if(isNaN(t.getTime()))throw ve(15);c=t}else{if(!r(t))throw ve(14);c=t}return h(n)?a.key=n:L(n)&&(a=n),h(o)?a.locale=o:L(o)&&(u=o),L(s)&&(u=s),[a.key||"",c,a,u]}function Fe(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function Ne(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:o,onWarn:c}=e,{__numberFormatters:u}=e,[l,i,f,p]=We(...t);k(f.missingWarn)?f.missingWarn:e.missingWarn;k(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn;const m=!!f.part,d=h(f.locale)?f.locale:e.locale,g=he(e,o,d);if(!h(l)||""===l)return new Intl.NumberFormat(d).format(i);let b,y={},_=null;for(let s=0;s<g.length&&(b=g[s],y=n[b]||{},_=y[l],!L(_));s++)de(e,l,b,0,"number format");if(!L(_)||!h(b))return r?-1:l;let x=`${b}__${l}`;s(p)||(x=`${x}__${JSON.stringify(p)}`);let v=u.get(x);return v||(v=new Intl.NumberFormat(b,a({},_,p)),u.set(x,v)),m?v.formatToParts(i):v.format(i)}function We(...e){const[t,n,o,s]=e;let c={},a={};if(!r(t))throw ve(14);const u=t;return h(n)?c.key=n:L(n)&&(c=n),h(o)?c.locale=o:L(o)&&(a=o),L(s)&&(a=s),[c.key||"",u,c,a]}function Ie(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}
/*!
  * @intlify/vue-devtools v9.1.6
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const Me={"vue-devtools-plugin-vue-i18n":"Vue I18n devtools","vue-i18n-resource-inspector":"I18n Resources","vue-i18n-timeline":"Vue I18n"},je={"vue-i18n-resource-inspector":"Search for scopes ..."},Ae={"vue-i18n-timeline":16764185};export{Oe as A,Ce as B,$e as C,Se as D,We as E,Ne as F,he as G,xe as H,ae as M,ce as N,Me as V,a,h as b,g as c,m as d,k as e,E as f,_ as g,s as h,r as i,l as j,L as k,p as l,t as m,F as n,o,d as p,me as q,je as r,re as s,Ae as t,ye as u,$ as v,Fe as w,Ie as x,le as y,fe as z};
