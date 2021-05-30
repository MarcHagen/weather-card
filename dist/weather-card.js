/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},r=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${r}--\x3e`,s=new RegExp(`${r}|${n}`);class a{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],a=document.createTreeWalker(e.content,133,null,!1);let c=0,d=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=a.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)o(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=p[u],i=h.exec(e)[2],r=i.toLowerCase()+"$lit$",n=t.getAttribute(r);t.removeAttribute(r);const a=n.split(s);this.parts.push({type:"attribute",index:d,name:i,strings:a}),u+=a.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,n=e.split(s),a=n.length-1;for(let e=0;e<a;e++){let i,s=n[e];if(""===s)i=l();else{const t=h.exec(s);null!==t&&o(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(s)}r.insertBefore(i,t),this.parts.push({type:"node",index:++d})}""===n[a]?(r.insertBefore(l(),t),i.push(t)):t.data=n[a],u+=a}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(l(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),u++}}else a.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:i},parts:r}=t,n=document.createTreeWalker(i,133,null,!1);let s=p(r),a=r[s],o=-1,c=0;const l=[];let h=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&c++;void 0!==a&&a.index===o;)a.index=null!==h?-1:a.index-c,s=p(r,s),a=r[s]}l.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(c(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],r=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let s,a=0,o=0,l=n.nextNode();for(;a<r.length;)if(s=r[a],c(s)){for(;o<s.index;)o++,"TEMPLATE"===l.nodeName&&(i.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=i.pop(),l=n.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${r} `;class b{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const o=h.exec(t);e+=null===o?t+(i?v:n):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new N(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let r=0;r<e;r++){i+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(S(t)||!w(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||S(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const i=new _(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const n of t)i=e[r],void 0===i&&(i=new P(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(n),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class O{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class C extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends N{}let E=!1;(()=>{try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class ${constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function D(t){let e=k.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},k.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(r);return i=e.keyString.get(n),void 0===i&&(i=new a(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const k=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,r){const n=e[0];if("."===n){return new C(t,e.slice(1),i).parts}if("@"===n)return[new $(t,e.slice(1),r.eventContext)];if("?"===n)return[new O(t,e.slice(1),i)];return new x(t,e,i).parts}handleTextExpression(t){return new P(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const j=(t,...e)=>new b(t,e,"html",A)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,L=(t,e)=>`${t}--${e}`;let W=!0;void 0===window.ShadyCSS?W=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),W=!1);const H=t=>e=>{const i=L(e.type,t);let n=k.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},k.set(i,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(r);if(s=n.keyString.get(o),void 0===s){const i=e.getTemplateElement();W&&window.ShadyCSS.prepareTemplateDom(i,t),s=new a(e,i),n.keyString.set(o,s)}return n.stringsArray.set(e.strings,s),s},U=["html","svg"],z=new Set,R=(t,e,i)=>{z.add(t);const r=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,t);const a=document.createElement("style");for(let t=0;t<s;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{U.forEach(e=>{const i=k.get(L(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),d(t,i)})})})(t);const o=r.content;i?function(t,e,i=null){const{element:{content:r},parts:n}=t;if(null==i)return void r.appendChild(e);const s=document.createTreeWalker(r,133,null,!1);let a=p(n),o=0,c=-1;for(;s.nextNode();){c++;for(s.currentNode===i&&(o=u(e),i.parentNode.insertBefore(e,i));-1!==a&&n[a].index===c;){if(o>0){for(;-1!==a;)n[a].index+=o,a=p(n,a);return}a=p(n,a)}}}(i,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const c=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),d(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},I=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:I};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||F}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=I){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||Y,n="function"==typeof r?r:r.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||Y.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=F){const r=this.constructor,n=r._attributeNameForProperty(t,i);if(void 0!==n){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function J(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}const G=t=>function(t){return J({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}(t)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const i=e.reduce((e,i,r)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]);return new X(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const et={};class it extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),r=[];i.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new X(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}it.finalized=!0,it.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,s=V.has(e),a=W&&11===e.nodeType&&!!e.host,o=a&&!z.has(n),c=o?document.createDocumentFragment():e;if(((t,e,r)=>{let n=V.get(e);void 0===n&&(i(e,e.firstChild),V.set(e,n=new P(Object.assign({templateFactory:D},r))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:H(n)},r)),o){const t=V.get(c);V.delete(c);const r=t.value instanceof _?t.value.template:void 0;R(n,c,r),i(e,e.firstChild),e.appendChild(c),V.set(e,t)}!s&&a&&window.ShadyCSS.styleElement(e.host)},it.shadowRootOptions={mode:"open"};var rt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,nt="[^\\s]+",st=/\[([^]*?)\]/gm;function at(t,e){for(var i=[],r=0,n=t.length;r<n;r++)i.push(t[r].substr(0,e));return i}var ot=function(t){return function(e,i){var r=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return r>-1?r:null}};function ct(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var r=0,n=e;r<n.length;r++){var s=n[r];for(var a in s)t[a]=s[a]}return t}var lt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ht=["January","February","March","April","May","June","July","August","September","October","November","December"],dt=at(ht,3),ut={dayNamesShort:at(lt,3),dayNames:lt,monthNamesShort:dt,monthNames:ht,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},pt=ct({},ut),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},gt={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},ft=function(t){return+t-1},yt=[null,"[1-9]\\d?"],_t=[null,nt],vt=["isPm",nt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],St=(ot("monthNamesShort"),ot("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var wt=function(t,e,i){if(void 0===e&&(e=St.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var r=[];e=(e=St[e]||e).replace(st,(function(t,e){return r.push(e),"@@@"}));var n=ct(ct({},pt),i);return(e=e.replace(rt,(function(e){return gt[e](t,n)}))).replace(/@@@/g,(function(){return r.shift()}))},xt=(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t,e,i,r){r=r||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return n.detail=i,t.dispatchEvent(n),n});let Nt=class extends it{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _icons(){var t;return(null===(t=this._config)||void 0===t?void 0:t.icons)||""}get _current(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.current)}get _details(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.details)}get _forecast(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.forecast)}get _graph(){var t;return!1!==(null===(t=this._config)||void 0===t?void 0:t.graph)}get _forecastMaxColumn(){var t;return(null===(t=this._config)||void 0===t?void 0:t.forecastMaxColumn)||9}get _hidePrecipitation(){var t;return!0===(null===(t=this._config)||void 0===t?void 0:t.hidePrecipitation)}render(){if(!this.hass)return j``;const t=Object.keys(this.hass.states).filter(t=>"weather"===t.substr(0,t.indexOf(".")));return j`
            <div class="card-config">
                <div>
                    <paper-input label="Name" .value="${this._name}" .configValue="${"name"}" @value-changed="${this._valueChanged}"></paper-input>
                    <paper-input label="Icons location" .value="${this._icons}" .configValue="${"icons"}" @value-changed="${this._valueChanged}"></paper-input>
                    ${customElements.get("ha-entity-picker")?j`
                        <ha-entity-picker .hass="${this.hass}" .value="${this._entity}" .configValue=${"entity"} domain-filter="weather" @change="${this._valueChanged}" allow-custom-entity></ha-entity-picker>
                    `:j`
                        <paper-dropdown-menu label="Entity" @value-changed="${this._valueChanged}" .configValue="${"entity"}">
                            <paper-listbox slot="dropdown-content" .selected="${t.indexOf(this._entity)}">
                                ${t.map(t=>j`
                                        <paper-item>${t}</paper-item>
                                    `)}
                            </paper-listbox>
                        </paper-dropdown-menu>
                    `}
                    <br/>
                    <div class="options">
                        <div class="option">
                            <ha-switch .checked=${this._current} .configValue="${"current"}" @change="${this._valueChanged}"></ha-switch>
                            <span class="label">Show current temperature</span>
                        </div>
                        <div class="option">
                            <ha-switch .checked=${this._details} .configValue="${"details"}" @change="${this._valueChanged}"></ha-switch>
                            <span class="label">Show weather details</span>
                        </div>
                        <div class="option">
                            <ha-switch .checked=${this._forecast} .configValue="${"forecast"}" @change="${this._valueChanged}"></ha-switch>
                            <span class="label">Show forecast (table or graph)</span>
                        </div>
                        ${this._forecast?j`
                            <div class="option">
                                <ha-switch .checked=${this._graph} .configValue="${"graph"}" @change="${this._valueChanged}"></ha-switch>
                                <span class="label">Show graph</span>
                            </div>
                        `:j``}
                        ${this._forecast&&!this._graph?j`
                            <div class="option">
                                <ha-switch .checked=${this._hidePrecipitation} .configValue="${"hidePrecipitation"}" @change="${this._valueChanged}"></ha-switch>
                                <span class="label">Hide rain precipitation</span>
                            </div>
                        `:j``}
                    </div>
                    <paper-input label="forecast max columns (optional)" type="number" .value="${this._forecastMaxColumn}" .configValue="${"forecastMaxColumn"}" @value-changed="${this._valueChanged}" min="2" max="20"></paper-input>
                </div>
            </div>
        `}_initialize(){void 0!==this.hass&&void 0!==this._config&&(this._initialized=!0)}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),xt(this,"config-changed",{config:this._config}))}static get styles(){return tt`
          .options {
            display: grid;
          }

          .option {
            display: flex;
            margin: 1rem 0;
            align-items: center;
          }

          .option .label {
            margin: 0 1rem;
          }

          .option .help {
            color: var(--secondary-text-color);
          }
        `}};t([J({attribute:!1})],Nt.prototype,"hass",void 0),t([G()],Nt.prototype,"_config",void 0),t([G()],Nt.prototype,"_toggle",void 0),Nt=t([q("weather-card-editor")],Nt);const Pt=tt`
  ha-card {
    cursor: pointer;
    margin: auto;
    padding: 1.3em 1em;
    position: relative;
  }

  .spacer {
    padding-top: 1em;
  }

  .clear {
    clear: both;
  }

  .title {
    position: absolute;
    left: 2.8em;
    top: 0.6em;
    font-weight: 300;
    font-size: 3em;
    color: var(--primary-text-color);
  }

  .temp {
    font-weight: 300;
    font-size: 4em;
    color: var(--primary-text-color);
    position: absolute;
    right: 1em;
    top: 0.6em;
  }

  .tempc {
    font-weight: 300;
    font-size: 1.5em;
    vertical-align: super;
    color: var(--primary-text-color);
    position: absolute;
    right: 1em;
    margin-top: -14px;
    margin-right: 7px;
  }

  .current {
    padding-top: 1.2em;
    /*margin-bottom: 3.5em;*/
    height: 5.5em;
  }

  .variations {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    font-weight: 300;
    color: var(--primary-text-color);
    list-style: none;
    padding: 0 1em;
    margin: 0;
  }

  .variations ha-icon {
    height: 22px;
    margin-right: 5px;
    color: var(--paper-item-icon-color);
  }

  .variations li {
    flex-basis: auto;
    width: 50%;
  }

  .variations li:nth-child(2n) {
    text-align: right;
  }

  .variations li:nth-child(2n) ha-icon {
    margin-right: 0;
    margin-left: 8px;
  }

  .unit {
    font-size: 0.8em;
  }

  .forecast {
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  .day {
    flex: 1;
    display: block;
    text-align: center;
    color: var(--primary-text-color);
    border-right: 0.1em solid #d9d9d9;
    line-height: 2;
    box-sizing: border-box;
  }

  .dayname {
    text-transform: uppercase;
  }

  .forecast .day:first-child {
    margin-left: 0;
  }

  .forecast .day:nth-last-child(1) {
    border-right: none;
    margin-right: 0;
  }

  .highTemp {
    font-weight: bold;
  }

  .lowTemp {
    color: var(--secondary-text-color);
  }

  .precipitation {
    color: var(--primary-text-color);
    font-weight: 300;
  }

  .icon.bigger {
    width: 10em;
    height: 10em;
    margin-top: -3.7em;
    margin-left: 0;
    position: absolute;
    left: 0;
  }

  .icon {
    width: 50px;
    height: 50px;
    margin-right: 0;
    margin-bottom: -12px;
    margin-top: -20px;
    display: inline-block;
    vertical-align: middle;
    background-size: contain;
    background-position: center center !important;
    background-repeat: no-repeat;
    text-indent: -9999px;
  }

  .weather {
    font-weight: 300;
    font-size: 1.5em;
    color: var(--primary-text-color);
    text-align: left;
    position: absolute;
    top: -0.5em;
    left: 6em;
    word-wrap: break-word;
    width: 30%;
  }

  .conditions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px -12px 0px 5px;
  }

  .conditions .icon {
    margin-top: -10px;
  }
`;var Ot={version:"Version",invalid_configuration:"Invalid configuration",invalid_entity:"Please define a weather entity",show_warning:"Show Warning",show_error:"Show Error"},Ct=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SW","SW","W-SW","W","W-NW","NW","N-NW","N"],Tt={common:Ot,temp:"Temperature",tempHi:"Temperature max",tempLo:"Temperature min",precip:"Precipitations",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Ct},Et=Object.freeze({__proto__:null,common:Ot,temp:"Temperature",tempHi:"Temperature max",tempLo:"Temperature min",precip:"Precipitations",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Ct,default:Tt}),$t=["N","N-NØ","NØ","Ø-NØ","Ø","Ø-SØ","SØ","S-SØ","S","S-SV","SV","V-SV","V","V-NV","NV","N-NV","N"],Mt={temp:"Temperatur",tempHi:"Temperatur maks",tempLo:"Temperatur nat",precip:"Nedbør",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:$t},Dt=["N","N-NO","NO","O-NO","O","O-SO","SO","S-SO","S","S-SW","SW","W-SW","W","W-NW","NW","N-NW","N"],kt={temp:"temperatur",tempHi:"Höchsttemperatur",tempLo:"Tiefsttemperatur",precip:"Niederschlag",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Dt},Vt=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SO","SO","O-SO","O","O-NO","NO","N-NO","N"],At={temp:"Temperatura",tempHi:"Temperatura máxima",tempLo:"Temperatura mínima",precip:"Precipitations",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Vt},jt=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SO","SO","O-SO","O","O-NO","NO","N-NO","N"],Lt={temp:"Température",tempHi:"Température max",tempLo:"Température min",precip:"Précipitations",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:jt},Wt=["N","N-NO","NO","O-NO","O","O-ZO","ZO","Z-ZO","Z","Z-ZW","ZW","W-ZW","W","W-NW","NW","N-NW","N"],Ht={temp:"temperatuur",tempHi:"Maximum temperatuur",tempLo:"Minimum temperatuur",precip:"Neerslag",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Wt},Ut=["С","С-СВ","СВ","В-СВ","В","В-ЮВ","ЮВ","Ю-ЮВ","Ю","Ю-ЮЗ","ЮЗ","З-ЮЗ","З","З-СЗ","СЗ","С-СЗ","С"],zt={temp:"Температура",tempHi:"Температура макси",tempLo:"Температура ночью",precip:"Осадки",uPress:"гПа",uSpeed:"м/с",uPrecip:"мм",cardinalDirections:Ut},Rt=["N","N-NO","NO","O-NO","O","O-SO","SO","S-SO","S","S-SV","SV","V-SV","V","V-NV","NV","N-NV","N"],Yt={temp:"Temperatur",tempHi:"Max temperatur",tempLo:"Min temperatur",precip:"Nederbörd",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Rt};const It={en:Et,en_GB:Et,da:Object.freeze({__proto__:null,temp:"Temperatur",tempHi:"Temperatur maks",tempLo:"Temperatur nat",precip:"Nedbør",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:$t,default:Mt}),de:Object.freeze({__proto__:null,temp:"temperatur",tempHi:"Höchsttemperatur",tempLo:"Tiefsttemperatur",precip:"Niederschlag",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Dt,default:kt}),es:Object.freeze({__proto__:null,temp:"Temperatura",tempHi:"Temperatura máxima",tempLo:"Temperatura mínima",precip:"Precipitations",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Vt,default:At}),fr:Object.freeze({__proto__:null,temp:"Température",tempHi:"Température max",tempLo:"Température min",precip:"Précipitations",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:jt,default:Lt}),nl:Object.freeze({__proto__:null,temp:"temperatuur",tempHi:"Maximum temperatuur",tempLo:"Minimum temperatuur",precip:"Neerslag",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Wt,default:Ht}),ru:Object.freeze({__proto__:null,temp:"Температура",tempHi:"Температура макси",tempLo:"Температура ночью",precip:"Осадки",uPress:"гПа",uSpeed:"м/с",uPrecip:"мм",cardinalDirections:Ut,default:zt}),sv:Object.freeze({__proto__:null,temp:"Temperatur",tempHi:"Max temperatur",tempLo:"Min temperatur",precip:"Nederbörd",uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Rt,default:Yt})};function Ft(t,e="",i=""){const r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce((t,e)=>t[e],It[r])}catch(e){n=t.split(".").reduce((t,e)=>t[e],It.en)}return void 0===n&&(n=t.split(".").reduce((t,e)=>t[e],It.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}const Bt=["entity","config"],qt=["mdi:arrow-down","mdi:arrow-bottom-left","mdi:arrow-left","mdi:arrow-top-left","mdi:arrow-up","mdi:arrow-top-right","mdi:arrow-right","mdi:arrow-bottom-right","mdi:arrow-down"],Zt={clear:"day","clear-night":"night",cloudy:"cloudy",fog:"cloudy",hail:"rainy-7",lightning:"thunder","lightning-rainy":"thunder",partlycloudy:"cloudy-day-3",pouring:"rainy-6",rainy:"rainy-5",snowy:"snowy-6","snowy-rainy":"rainy-7",sunny:"day",windy:"cloudy","windy-variant":"cloudy-day-3",exceptional:"!!"},Jt=Object.assign(Object.assign({},Zt),{clear:"night",sunny:"night",partlycloudy:"cloudy-night-3","windy-variant":"cloudy-night-3"});var Gt;!function(t){t[t.hourly=0]="hourly",t[t.daily=1]="daily"}(Gt||(Gt={}));var Kt;window.customCards=window.customCards||[],window.customCards.push({type:"weather-card",name:"Animated weather card",description:"Lovelace animated weather card"}),console.info(`%c WEATHER-CARD  \n%c ${Ft("common.version")} 1.7.1 `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let Qt=Kt=class extends it{constructor(){super(),this.numberElements=0,this.mode=Gt.daily,this.currentLanguage=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"")}static async getConfigElement(){return document.createElement("weather-card-editor")}setConfig(t){if(!t)throw new Error(Ft("common.invalid_configuration"));if(!t.entity)throw new Error(Ft("common.invalid_entity"));this.config=Object.assign({name:""},t),this.setWeatherObj()}setWeatherObj(){var t,e;if(!this.hass||!this.config.entity)return;if(this.weatherObj=this.config.entity in this.hass.states?this.hass.states[this.config.entity]:null,!this.weatherObj)return;if(!this.config.forecastMaxColumn||this.config.forecastMaxColumn<2?this.forecast=this.weatherObj.attributes.forecast.slice(0,9):this.forecast=this.weatherObj.attributes.forecast.slice(0,this.config.forecastMaxColumn),!Array.isArray(this.forecast))return;let i;if((null===(t=this.forecast)||void 0===t?void 0:t.length)&&(null===(e=this.forecast)||void 0===e?void 0:e.length)>2){const t=new Date(this.forecast[1].datetime);i=new Date(this.forecast[2].datetime).getTime()-t.getTime()<864e5,i&&(this.mode=Gt.hourly)}}shouldUpdate(t){return!this.weatherObj||Bt.some(e=>t.has(e))}updated(){this.setWeatherObj();const t=this.shadowRoot.querySelector("#Chart");t&&(t.data=this.chartData,t.hass=this.hass)}render(){return this.config&&this.hass?(this.setWeatherObj(),this.numberElements=0,this.weatherObj?j`
            <ha-card @click="${this._handleClick}">
                ${!1!==this.config.current?this.renderCurrent():""}
                ${!1!==this.config.details?this.renderDetails():""}
                ${!1!==this.config.forecast?this.renderForecast():""}
            </ha-card>
        `:j`
                <style>
                    .not-found {
                        flex: 1;
                        background-color: yellow;
                        padding: 8px;
                    }
                </style>
                <ha-card>
                    <div class="not-found">
                        Entity not available: ${this.config.entity}
                    </div>
                </ha-card>
            `):j``}_handleClick(){xt(this,"hass-more-info",{entityId:this.config.entity})}renderCurrent(){return this.numberElements++,this.weatherObj?j`
            <div class="current ${this.numberElements>1?"spacer":""}">
                <span class="icon bigger" style="background: none, url('${this.getWeatherIcon(this.weatherObj.state.toLowerCase(),this.hass.states["sun.sun"])}') no-repeat; background-size: contain;">${this.weatherObj.state}</span>
                ${this.config.name?j`<span class="title"> ${this.config.name} </span>`:""}
                <span class="temp">${"°F"==this.getUnit("temperature")?Math.round(this.weatherObj.attributes.temperature):this.weatherObj.attributes.temperature}</span>
                <span class="tempc"> ${this.getUnit("temperature")}</span>
            </div>
        `:j``}renderDetails(){if(!this.weatherObj)return j``;const t=this.hass.states["sun.sun"];let e,i;return t&&(e=new Date(t.attributes.next_rising),i=new Date(t.attributes.next_setting)),this.numberElements++,j`
            <ul class="variations ${this.numberElements>1?"spacer":""}">
                <li>
                    <ha-icon icon="mdi:water-percent"></ha-icon>
                    ${this.weatherObj.attributes.humidity}<span class="unit"> % </span>
                </li>
                <li>
                    ${Kt.getWindDir(this.weatherObj.attributes.wind_bearing)}
                    <ha-icon style="margin-left: 0;" icon="hass:${Kt.getWindDirIcon(this.weatherObj.attributes.wind_bearing)}"></ha-icon>
                    ${this.weatherObj.attributes.wind_speed}
                    <span class="unit">${this.getUnit("length")}/h</span>${this.getWindForce()}
                    <ha-icon icon="mdi:weather-windy"></ha-icon>
                </li>
                <li>
                    <ha-icon icon="mdi:gauge"></ha-icon>
                    ${this.weatherObj.attributes.pressure}
                    <span class="unit">${this.getUnit("air_pressure")}</span>
                </li>
                <li>
                    ${this.weatherObj.attributes.visibility}
                    <span class="unit">${this.getUnit("length")}</span>
                    <ha-icon icon="mdi:weather-fog"></ha-icon>
                </li>
                ${e?j`
                            <li>
                                <ha-icon icon="mdi:weather-sunset-up"></ha-icon>
                                ${e.toLocaleTimeString(this.currentLanguage)}
                            </li>
                        `:""}
                ${i?j`
                            <li>
                                ${i.toLocaleTimeString(this.currentLanguage)}
                                <ha-icon icon="mdi:weather-sunset-down"></ha-icon>
                            </li>
                        `:""}
            </ul>
        `}renderForecast(){return this.forecast&&0!==this.forecast.length?(this.numberElements++,!0===this.config.graph?this.renderForecastGraph():this.renderForecastTable()):j``}renderForecastTable(){return this.forecast&&0!==this.forecast.length?j`
            <div class="forecast clear ${this.numberElements>1?"spacer":""}">
                ${this.forecast.map(t=>j`
                            <div class="day">
                                <div class="dayname">
                                    ${this.getDateString(t.datetime)}
                                </div>
                                <i class="icon" style="background: none, url('${this.getWeatherIcon(t.condition.toLowerCase(),this.hass.states["sun.sun"])}') no-repeat; background-size: contain"></i>
                                <div class="highTemp">${t.temperature}${this.getUnit("temperature")}</div>
                                ${void 0!==t.templow?j`
                                            <div class="lowTemp">
                                                ${t.templow}${this.getUnit("temperature")}
                                            </div>
                                        `:""}
                                ${this.config.hidePrecipitation||void 0===t.precipitation||null===t.precipitation?"":j`
                                            <div class="precipitation">
                                                ${Math.round(10*t.precipitation)/10} ${this.getUnit("precipitation")}
                                            </div>
                                        `}
                                ${this.config.hidePrecipitation||void 0===t.precipitation_probability||null===t.precipitation_probability?"":j`
                                            <div class="precipitation_probability">
                                                ${Math.round(10*t.precipitation_probability)/10} ${this.getUnit("precipitation_probability")}
                                            </div>
                                        `}
                            </div>
                        `)}
            </div>
        `:j``}renderForecastGraph(){return this.forecast&&0!==this.forecast.length?(this.drawChart(),j`
            <div class="clear ${this.numberElements>1?"spacer":""}">
                <ha-chart-base id="Chart"></ha-chart-base>
            </div>
            <div class="conditions">
                ${this.forecast.map(t=>j`
                    <i class="icon" style="background: none, url('${this.getWeatherIcon(t.condition.toLowerCase(),this.hass.states["sun.sun"])}') no-repeat; background-size: contain"></i>`)}
            </div>
        `):j``}drawChart(){if(!this.forecast)return;const t=[],e=[],i=[],r=[];for(let n=0;n<this.forecast.length;n++){const s=this.forecast[n];t.push(new Date(s.datetime)),e.push(s.temperature),i.push(s.templow),r.push(s.precipitation)}const n=getComputedStyle(document.body),s=n.getPropertyValue("--primary-text-color"),a=n.getPropertyValue("--divider-color");this.chartData={type:"bar",data:{labels:t,datasets:[{label:this.mode===Gt.hourly?Ft("temp"):Ft("tempHi"),type:"line",data:e,yAxisID:"TempAxis",borderWidth:2,lineTension:.4,pointRadius:0,pointHitRadius:5,fill:!1},{label:Ft("tempLo"),type:"line",data:i,yAxisID:"TempAxis",borderWidth:2,lineTension:.4,pointRadius:0,pointHitRadius:5,fill:!1},{label:Ft("precip"),type:"bar",data:r,yAxisID:"PrecipAxis"}]},options:{animation:{duration:300,easing:"linear",onComplete:function(){const t=this.chart,e=t.ctx;e.fillStyle=s;e.font=Chart.helpers.fontString(10,"normal","Roboto"),e.textAlign="center",e.textBaseline="bottom";t.controller.getDatasetMeta(2).data.forEach((function(i,r){const n=(Math.round(10*t.data.datasets[2].data[r])/10).toFixed(1);e.fillText(n,i._model.x,i._model.y-5)}))}},legend:{display:!1},scales:{xAxes:[{type:"time",maxBarThickness:15,display:!1,ticks:{display:!1},gridLines:{display:!1}},{id:"DateAxis",position:"top",gridLines:{display:!0,drawBorder:!1,color:a},ticks:{display:!0,source:"labels",autoSkip:!0,fontColor:s,maxRotation:0,callback:t=>this.getDateString(t)}}],yAxes:[{id:"TempAxis",position:"left",gridLines:{display:!0,drawBorder:!1,color:a,borderDash:[1,3]},ticks:{display:!0,fontColor:s},afterFit:t=>{t.width=28}},{id:"PrecipAxis",position:"right",gridLines:{display:!1,drawBorder:!1,color:a},ticks:{display:!1,min:0,suggestedMax:20,fontColor:s},afterFit:t=>{t.width=15}}]},tooltips:{mode:"index",callbacks:{title:(t,e)=>{const i=t[0],r=e.labels[i.index];return new Date(r).toLocaleDateString(this.currentLanguage,{month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"})},label:(t,e)=>{const i=e.datasets[t.datasetIndex].label||"";return e.datasets[2].label===i?i+": "+(t.yLabel?t.yLabel+" "+this.getUnit("precipitation"):"0 "+this.getUnit("precipitation")):i+": "+t.yLabel+" "+this.getUnit("temperature")}}}}}}getWeatherIcon(t,e){return`${this.config.icons?this.config.icons:"https://cdn.jsdelivr.net/gh/MarcHagen/weather-card/dist/icons/"}${e&&"below_horizon"===e.state?Jt[t]:Zt[t]}.svg`}static getWindDirIcon(t){return qt[(t+22.5)/45]}static getWindDir(t){return Ft("cardinalDirections")[(t+11.25)/22.5]}getWindForce(){if("km"!==this.getUnit("length")||!this.weatherObj)return j``;const t=Math.ceil(Math.cbrt(Math.pow(this.weatherObj.attributes.wind_speed/3.6/.836,2)));return j` | ${t} <span class="unit">Bft</span>`}getUnit(t){const e=this.hass.config.unit_system.length;switch(t){case"air_pressure":return"km"===e?Ft("uPress"):"mbar";case"length":return e;case"precipitation":return"km"===e?Ft("uPrecip"):"in";case"intensity":return"km"===e?Ft("uPrecip")+"/h":"in/h";case"precipitation_probability":return"%";default:return this.hass.config.unit_system[t]||""}}getDateString(t){return this.mode===Gt.hourly?new Date(t).toLocaleTimeString(this.currentLanguage,{hour:"numeric"}):new Date(t).toLocaleDateString(this.currentLanguage,{weekday:"short"})}getCardSize(){return this.numberElements||3}static get styles(){return Pt}};t([J({attribute:!1})],Qt.prototype,"hass",void 0),t([J({attribute:!1})],Qt.prototype,"chartData",void 0),t([G()],Qt.prototype,"config",void 0),t([G()],Qt.prototype,"weatherObj",void 0),t([G()],Qt.prototype,"numberElements",void 0),Qt=Kt=t([q("weather-card")],Qt);export{Qt as WeatherCard};
