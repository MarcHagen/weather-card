function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const l=window,h=l.trustedTypes,d=h?h.emptyScript:"",p=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:g},_="finalized";let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;f[_]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:f}),(null!==(c=l.reactiveElementVersions)&&void 0!==c?c:l.reactiveElementVersions=[]).push("1.6.3");const y=window,$=y.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,E="?"+S,A=`<${E}>`,x=document,N=()=>x.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,O="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,T=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,L=/"/g,V=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),z=new WeakMap,I=x.createTreeWalker(x,129,null,!1);function j(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const B=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=k;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===k?"!--"===c[1]?o=H:void 0!==c[1]?o=T:void 0!==c[2]?(V.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=D):void 0!==c[3]&&(o=D):o===D?">"===c[0]?(o=null!=n?n:k,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?D:'"'===c[3]?L:U):o===L||o===U?o=D:o===H||o===T?o=k:(o=D,n=void 0);const d=o===D&&t[e+1].startsWith("/>")?" ":"";r+=o===k?i+A:l>=0?(s.push(a),i.slice(0,l)+w+i.slice(l)+S+d):i+S+(-2===l?(s.push(void 0),e):d)}return[j(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,l]=B(t,e);if(this.el=F.createElement(c,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(w)||e.startsWith(S)){const i=l[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+w).split(S),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?X:"@"===e[1]?Y:q})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(V.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),I.nextNode(),a.push({type:2,index:++n});s.append(t[e],N())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){var n,r,o,a;if(e===W)return e;let c=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const l=P(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=c:i._$Cl=c),void 0!==c&&(e=Z(t,c._$AS(t,e.values),c,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);I.currentNode=n;let r=I.nextNode(),o=0,a=0,c=s[0];for(;void 0!==c;){if(o===c.index){let e;2===c.type?e=new K(r,r.nextSibling,this,t):1===c.type?e=new c.ctor(r,c.name,c.strings,this,t):6===c.type&&(e=new tt(r,this,t)),this._$AV.push(e),c=s[++a]}o!==(null==c?void 0:c.index)&&(r=I.nextNode(),o++)}return I.currentNode=x,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),P(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(j(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new G(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new F(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new K(this.k(N()),this.k(N()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,s,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Z(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Z(this,s[i+o],e,o),a===W&&(a=this._$AH[o]),r||(r=!P(a)||a!==this._$AH[o]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const Q=$?$.emptyScript:"";class X extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Y extends q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Z(this,t,e,0))&&void 0!==i?i:R)===W)return;const s=this._$AH,n=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==R&&(s===R||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const et=y.litHtmlPolyfillSupport;null==et||et(F,K),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,st;class nt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new K(e.insertBefore(N(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return W}}nt.finalized=!0,nt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},ct=(t,e,i)=>{e.constructor.createProperty(i,t)};function lt(t){return(e,i)=>void 0!==i?ct(t,e,i):at(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ht(t){return lt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt,pt,ut;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));var gt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};const mt=o`
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
`;var _t,ft={invalid_configuration:"Invalid configuration",invalid_entity:"Please define a weather entity",show_warning:"Show Warning",show_error:"Show Error"},vt="Temperature",yt="Temperature max",$t="Temperature min",bt="Precipitations",wt=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SW","SW","W-SW","W","W-NW","NW","N-NW","N"],St={common:ft,temp:vt,tempHi:yt,tempLo:$t,precip:bt,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:wt},Et=Object.freeze({__proto__:null,cardinalDirections:wt,common:ft,default:St,precip:bt,temp:vt,tempHi:yt,tempLo:$t,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),At="Temperatur",xt="Temperatur maks",Nt="Temperatur nat",Pt="Nedbør",Ct=["N","N-NØ","NØ","Ø-NØ","Ø","Ø-SØ","SØ","S-SØ","S","S-SV","SV","V-SV","V","V-NV","NV","N-NV","N"],Ot={temp:At,tempHi:xt,tempLo:Nt,precip:Pt,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Ct},kt=Object.freeze({__proto__:null,cardinalDirections:Ct,default:Ot,precip:Pt,temp:At,tempHi:xt,tempLo:Nt,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),Ht="temperatur",Tt="Höchsttemperatur",Dt="Tiefsttemperatur",Ut="Niederschlag",Lt=["N","N-NO","NO","O-NO","O","O-SO","SO","S-SO","S","S-SW","SW","W-SW","W","W-NW","NW","N-NW","N"],Vt={temp:Ht,tempHi:Tt,tempLo:Dt,precip:Ut,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Lt},Mt=Object.freeze({__proto__:null,cardinalDirections:Lt,default:Vt,precip:Ut,temp:Ht,tempHi:Tt,tempLo:Dt,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),Wt="Temperatura",Rt="Temperatura máxima",zt="Temperatura mínima",It="Precipitations",jt=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SO","SO","O-SO","O","O-NO","NO","N-NO","N"],Bt={temp:Wt,tempHi:Rt,tempLo:zt,precip:It,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:jt},Ft=Object.freeze({__proto__:null,cardinalDirections:jt,default:Bt,precip:It,temp:Wt,tempHi:Rt,tempLo:zt,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),Zt="Température",Gt="Température max",Kt="Température min",qt="Précipitations",Jt=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SO","SO","O-SO","O","O-NO","NO","N-NO","N"],Qt={temp:Zt,tempHi:Gt,tempLo:Kt,precip:qt,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Jt},Xt=Object.freeze({__proto__:null,cardinalDirections:Jt,default:Qt,precip:qt,temp:Zt,tempHi:Gt,tempLo:Kt,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),Yt="temperatuur",te="Maximum temperatuur",ee="Minimum temperatuur",ie="Neerslag",se=["N","N-NO","NO","O-NO","O","O-ZO","ZO","Z-ZO","Z","Z-ZW","ZW","W-ZW","W","W-NW","NW","N-NW","N"],ne={temp:Yt,tempHi:te,tempLo:ee,precip:ie,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:se},re=Object.freeze({__proto__:null,cardinalDirections:se,default:ne,precip:ie,temp:Yt,tempHi:te,tempLo:ee,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),oe="Температура",ae="Температура макси",ce="Температура ночью",le="Осадки",he=["С","С-СВ","СВ","В-СВ","В","В-ЮВ","ЮВ","Ю-ЮВ","Ю","Ю-ЮЗ","ЮЗ","З-ЮЗ","З","З-СЗ","СЗ","С-СЗ","С"],de={temp:oe,tempHi:ae,tempLo:ce,precip:le,uPress:"гПа",uSpeed:"м/с",uPrecip:"мм",cardinalDirections:he},pe=Object.freeze({__proto__:null,cardinalDirections:he,default:de,precip:le,temp:oe,tempHi:ae,tempLo:ce,uPrecip:"мм",uPress:"гПа",uSpeed:"м/с"}),ue="Temperatur",ge="Max temperatur",me="Min temperatur",_e="Nederbörd",fe=["N","N-NO","NO","O-NO","O","O-SO","SO","S-SO","S","S-SV","SV","V-SV","V","V-NV","NV","N-NV","N"],ve={temp:ue,tempHi:ge,tempLo:me,precip:_e,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:fe},ye=Object.freeze({__proto__:null,cardinalDirections:fe,default:ve,precip:_e,temp:ue,tempHi:ge,tempLo:me,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"});!function(t){t.ENGLISH="en",t.ENGLISH_BRITISH="en_GB",t.DANISH="da",t.GERMAN="de",t.SPANISH="es",t.FRENCH="fr",t.DUTCH="nl",t.RUSSIAN="ru",t.SWEDISH="sv"}(_t||(_t={}));const $e={en:Et,en_GB:Et,da:kt,de:Mt,es:Ft,fr:Xt,nl:re,ru:pe,sv:ye},be=_t.ENGLISH.valueOf();function we(t,e,i="",s=""){let n;try{if("test"===e.language)return"TRANSLATED";n=t.split(".").reduce(((t,e)=>t[e]),$e[e.language]),n||(n=t.split(".").reduce(((t,e)=>t[e]),$e[be]))}catch(e){try{n=t.split(".").reduce(((t,e)=>t[e]),$e[be])}catch(t){n=""}}if(""!==i&&""!==s&&n){Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);for(let t=0;t<i.length;t++){n=n.replace(String(i[t]),String(s[t]));const e=n.match(/\{if ([a-z]+) is ([^}]+)} ?([^{]+) ?\{else} ?([^{]+)/i);if(e&&String(i[t]).replace(/[{}']+/g,"")==e[1]){n=String(s[t])==e[2]?n.replace(e[0],e[3]):n.replace(e[0],e[4])}}}return n}const Se=["mdi:arrow-down","mdi:arrow-bottom-left","mdi:arrow-left","mdi:arrow-top-left","mdi:arrow-up","mdi:arrow-top-right","mdi:arrow-right","mdi:arrow-bottom-right","mdi:arrow-down"],Ee={clear:"day","clear-night":"night",cloudy:"cloudy",fog:"cloudy",hail:"rainy-7",lightning:"thunder","lightning-rainy":"thunder",partlycloudy:"cloudy-day-3",pouring:"rainy-6",rainy:"rainy-5",snowy:"snowy-6","snowy-rainy":"rainy-7",sunny:"day",windy:"cloudy","windy-variant":"cloudy-day-3",exceptional:"!!"},Ae={...Ee,clear:"night",sunny:"night",partlycloudy:"cloudy-night-3","windy-variant":"cloudy-night-3"},xe=t=>t.stopPropagation();window.customCards=window.customCards||[],window.customCards.push({type:"weather-card",name:"Animated weather card",description:"Lovelace animated weather card"}),console.info("%c  WEATHER-CARD  \n%c Version: 1.8.0 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const Ne=t=>t.locale||{language:t.language||_t.ENGLISH,number_format:pt.system};var Pe;let Ce=Pe=class extends nt{constructor(){super(),this.isPanel=!1,this.editMode=!1,this.numberElements=0}static async getConfigElement(){return await Promise.resolve().then((function(){return He})),document.createElement("weather-card-editor")}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={name:"",forecast_type:"daily",...t}}_needForecastSubscription(){return this._config&&this._config.entity_weather&&this._config.forecast_type&&"legacy"!==this._config.forecast_type}_unsubscribeForecastEvents(){this._subscribed&&(this._subscribed.then((t=>t())),this._subscribed=void 0)}async _subscribeForecastEvents(){var t,e,i,s;(this._unsubscribeForecastEvents(),this.isConnected&&this.hass&&this._config&&this._needForecastSubscription())&&(this._subscribed=(t=this.hass,e=this._config.entity_weather,i=this._config.forecast_type,s=t=>{this._forecastEvent=t},t.connection.subscribeMessage(s,{type:"weather/subscribe_forecast",forecast_type:i,entity_id:e})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this._config&&this.hass&&this._subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeForecastEvents()}shouldUpdate(t){if(!this._config)return!1;if(t.has("_config")||t.has("_forecastEvent"))return!0;if(t.has("hass"))return!0;const e=t.get("hass")||void 0;return!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale||(!1===Object.keys(this._config).every((t=>null===t.match(/^entity_/)||e.states[this._config[t]]===this.hass.states[this._config[t]]))||t.has("config"))}updated(t){this.hass&&this._config&&(!t.has("_config")&&this._subscribed||this._subscribeForecastEvents())}render(){if(!this._config||!this.hass)return R;const t=this.hass.states[this._config.entity_weather];return t?M`
      <ha-card @click=${this._handleClick}>
        ${!1!==this._config.current?this.renderCurrent():""}
        ${!1!==this._config.details?this.renderDetails():""}
        ${!1!==this._config.forecast?this.renderForecast(this._forecastEvent||{forecast:t.attributes.forecast,type:"daily"}):""}
      </ha-card>
    `:R}_handleClick(){gt(this,"hass-more-info",{entityId:this._config.entity_weather})}renderCurrent(){this.numberElements++;const t=this.hass.states[this._config.entity_weather];return t?M`
      <div class="current ${this.numberElements>1?"spacer":""}">
        <span
          class="icon bigger"
          style="background: none, url('${this.getWeatherIcon(t.state.toLowerCase(),this.hass.states[this._config.entity_sun])}') no-repeat; background-size: contain;"
          >${t.state}</span
        >
        ${this._config.name?M`<span class="title"> ${this._config.name} </span>`:""}
        <span class="temp"
          >${"°F"==this.getUnit("temperature")?Math.round(t.attributes.temperature):t.attributes.temperature}</span
        >
        <span class="tempc"> ${this.getUnit("temperature")}</span>
      </div>
    `:R}renderDetails(){const t=this.hass.states[this._config.entity_sun],e=this.hass.states[this._config.entity_weather];if(!e||!t)return R;const i=Ne(this.hass);let s,n;return t&&(s=new Date(t.attributes.next_rising),n=new Date(t.attributes.next_setting)),this.numberElements++,M`
      <ul class="variations ${this.numberElements>1?"spacer":""}">
        <li>
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${e.attributes.humidity}<span class="unit"> % </span>
        </li>
        <li>
          ${Pe.getWindDir(this.hass,e.attributes.wind_bearing)}
          <ha-icon
            style="margin-left: 0;"
            icon="hass:${Pe.getWindDirIcon(e.attributes.wind_bearing)}"
          ></ha-icon>
          ${e.attributes.wind_speed}
          <span class="unit">${this.getUnit("length")}/h</span>${this.getWindForce()}
          <ha-icon icon="mdi:weather-windy"></ha-icon>
        </li>
        <li>
          <ha-icon icon="mdi:gauge"></ha-icon>
          ${e.attributes.pressure}
          <span class="unit">${this.getUnit("air_pressure")}</span>
        </li>
        <li>
          ${e.attributes.visibility}
          <span class="unit">${this.getUnit("length")}</span>
          <ha-icon icon="mdi:weather-fog"></ha-icon>
        </li>
        ${s?M`
              <li>
                <ha-icon icon="mdi:weather-sunset-up"></ha-icon>
                ${s.toLocaleTimeString(i.language)}
              </li>
            `:""}
        ${n?M`
              <li>
                ${n.toLocaleTimeString(i.language)}
                <ha-icon icon="mdi:weather-sunset-down"></ha-icon>
              </li>
            `:""}
      </ul>
    `}renderForecast(t){return t.forecast&&0!==t.forecast.length?(this.numberElements++,!0===this._config.graph?this.renderForecastGraph(t):this.renderForecastTable(t)):R}renderForecastTable(t){if(!t||!t.forecast||0===t.forecast.length)return R;const e=t.forecast.slice(0,this._config.forecastMaxColumn?this._config.forecastMaxColumn:5).map((e=>M`
          <div class="day">
            <div class="dayname">${this.getDateString(t,e.datetime)}</div>
            ${e.condition?M` <i
                  class="icon"
                  style="background: none, url('${this.getWeatherIcon(e.condition.toLowerCase(),this.hass.states[this._config.entity_sun])}') no-repeat; background-size: contain"
                ></i>`:""}
            <div class="highTemp">${e.temperature}${this.getUnit("temperature")}</div>
            ${void 0!==e.templow?M` <div class="lowTemp">${e.templow}${this.getUnit("temperature")}</div> `:""}
            ${this._config.hidePrecipitation||void 0===e.precipitation||null===e.precipitation?"":M`
                  <div class="precipitation">
                    ${Math.round(10*e.precipitation)/10} ${this.getUnit("precipitation")}
                  </div>
                `}
            ${this._config.hidePrecipitation||void 0===e.precipitation_probability||null===e.precipitation_probability?"":M`
                  <div class="precipitation_probability">
                    ${Math.round(10*e.precipitation_probability)/10}
                    ${this.getUnit("precipitation_probability")}
                  </div>
                `}
          </div>
        `));return M` <div class="forecast clear ${this.numberElements>1?"spacer":""}">${e}</div>`}renderForecastGraph(t){if(!t.forecast||0===t.forecast.length)return R;this.drawChart(t);const e=t.forecast.map((t=>t.condition?M` <i
            class="icon"
            style="background: none, url('${this.getWeatherIcon(t.condition.toLowerCase(),this.hass.states[this._config.entity_sun])}') no-repeat; background-size: contain"
          ></i>`:""));return M`
      <div class="clear ${this.numberElements>1?"spacer":""}">
        <ha-chart-base id="Chart"></ha-chart-base>
      </div>
      <div class="conditions">${e}</div>
    `}drawChart(t){if(!t.forecast||0===t.forecast.length)return;const e=[],i=[],s=[],n=[];for(const r of t.forecast)e.push(new Date(r.datetime)),i.push(r.temperature),r.templow&&s.push(r.templow),r.precipitation&&n.push(r.precipitation);const r=getComputedStyle(document.body),o=r.getPropertyValue("--primary-text-color"),a=r.getPropertyValue("--divider-color"),c=Ne(this.hass);this.chartData={type:"bar",data:{labels:e,datasets:[{label:"hourly"===t.type?we("temp",c):we("tempHi",c),type:"line",data:i,yAxisID:"TempAxis",borderWidth:2,lineTension:.4,pointRadius:0,pointHitRadius:5,fill:!1},{label:we("tempLo",c),type:"line",data:s,yAxisID:"TempAxis",borderWidth:2,lineTension:.4,pointRadius:0,pointHitRadius:5,fill:!1},{label:we("precip",c),type:"bar",data:n,yAxisID:"PrecipAxis"}]},options:{animation:{duration:300,easing:"linear",onComplete:function(){const t=this.chart,e=t.ctx;e.fillStyle=o;e.font=Chart.helpers.fontString(10,"normal","Roboto"),e.textAlign="center",e.textBaseline="bottom";t.controller.getDatasetMeta(2).data.forEach((function(i,s){const n=(Math.round(10*t.data.datasets[2].data[s])/10).toFixed(1);e.fillText(n,i._model.x,i._model.y-5)}))}},legend:{display:!1},scales:{xAxes:[{type:"time",maxBarThickness:15,display:!1,ticks:{display:!1},gridLines:{display:!1}},{id:"DateAxis",position:"top",gridLines:{display:!0,drawBorder:!1,color:a},ticks:{display:!0,source:"labels",autoSkip:!0,fontColor:o,maxRotation:0,callback:e=>this.getDateString(t,e)}}],yAxes:[{id:"TempAxis",position:"left",gridLines:{display:!0,drawBorder:!1,color:a,borderDash:[1,3]},ticks:{display:!0,fontColor:o},afterFit:t=>{t.width=28}},{id:"PrecipAxis",position:"right",gridLines:{display:!1,drawBorder:!1,color:a},ticks:{display:!1,min:0,suggestedMax:20,fontColor:o},afterFit:t=>{t.width=15}}]},tooltips:{mode:"index",callbacks:{title:(t,e)=>{const i=t[0],s=e.labels[i.index];return new Date(s).toLocaleDateString(c.language,{month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"})},label:(t,e)=>{const i=e.datasets[t.datasetIndex].label||"";return e.datasets[2].label===i?i+": "+(t.yLabel?t.yLabel+" "+this.getUnit("precipitation"):"0 "+this.getUnit("precipitation")):i+": "+t.yLabel+" "+this.getUnit("temperature")}}}}}}getWeatherIcon(t,e){return`${this._config.icons?this._config.icons:"https://cdn.jsdelivr.net/gh/MarcHagen/weather-card/dist/icons/"}${e&&"below_horizon"===e.state?Ae[t]:Ee[t]}.svg`}static getWindDirIcon(t){return Se[(t+22.5)/45]}static getWindDir(t,e){return we("cardinalDirections",Ne(t))[(e+11.25)/22.5]}getWindForce(){const t=this.hass.states[this._config.entity_weather];if("km"!==this.getUnit("length")||!t)return R;const e=Math.ceil(Math.cbrt(Math.pow(t.attributes.wind_speed/3.6/.836,2)));return M` | ${e} <span class="unit">Bft</span>`}getUnit(t){const e=this.hass.config.unit_system.length,i=Ne(this.hass);switch(t){case"air_pressure":return"km"===e?we("uPress",i):"mbar";case"length":return e;case"precipitation":return"km"===e?we("uPrecip",i):"in";case"intensity":return"km"===e?we("uPrecip",i)+"/h":"in/h";case"precipitation_probability":return"%";default:return this.hass.config.unit_system[t]||""}}getDateString(t,e){return"hourly"===t.type?new Date(e).toLocaleTimeString(Ne(this.hass).language,{hour:"numeric"}):new Date(e).toLocaleDateString(Ne(this.hass).language,{weekday:"short"})}getCardSize(){return 1}static get styles(){return mt}};t([lt({attribute:!1})],Ce.prototype,"hass",void 0),t([lt({attribute:!1})],Ce.prototype,"chartData",void 0),t([lt({type:Boolean})],Ce.prototype,"isPanel",void 0),t([lt({type:Boolean})],Ce.prototype,"editMode",void 0),t([ht()],Ce.prototype,"_config",void 0),t([ht()],Ce.prototype,"numberElements",void 0),t([ht()],Ce.prototype,"_subscribed",void 0),t([ht()],Ce.prototype,"_forecastEvent",void 0),Ce=Pe=t([ot("weather-card")],Ce);const Oe=["type","entity_weather","entity_sun","forecast_type","card_config_version","forecastMaxColumn","icons","details","forecast","current","graph","hidePrecipitation"];let ke=class extends nt{constructor(){super(...arguments),this._initialized=!1,this._config_version=2}setConfig(t){this._config=t}shouldUpdate(){return this._initialized||this._initialize(),!0}_configCleanup(){if(!this._config||!this.hass)return;let t={...this._config};t.entity&&(t.entity_weather=t.entity,delete t.entity);for(const e in this._config)Oe.includes(e)||delete t[e];t={...t,card_config_version:this._config_version},this._config=t,gt(this,"config-changed",{config:this.sortObjectByKeys(this._config)})}sortObjectByKeys(t){return Object.keys(t).sort().reduce(((e,i)=>(e[i]=t[i],e)),{})}async firstUpdated(){this._config&&this.hass&&this._config.card_config_version!==this._config_version&&this._configCleanup(),customElements.get("ha-entity-picker")||customElements.get("hui-entities-card")?.getConfigElement()}get _name(){return this._config?.name||""}get _entity_weather(){return this._config?.entity_weather||""}get _entity_sun(){return this._config?.entity_sun||"sun.sun"}get _forecast_type(){return this._config?.forecast_type||"daily"}get _icons(){return this._config?.icons||""}get _current(){return!1!==this._config?.current}get _details(){return!1!==this._config?.details}get _forecast(){return!1!==this._config?.forecast}get _graph(){return!1!==this._config?.graph}get _forecastMaxColumn(){return this._config?.forecastMaxColumn||5}get _hidePrecipitation(){return!0===this._config?.hidePrecipitation}render(){return this.hass&&this._config?M`
      <div class="card-config">
        <paper-input
          label="Name"
          .value=${this._name}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <paper-input
          label="Icons location"
          .value=${this._icons}
          .configValue=${"icons"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <ha-entity-picker
          label="Entity Weater"
          .hass=${this.hass}
          .value=${this._entity_weather}
          .configValue=${"entity_weather"}
          .includeDomains=${"weather"}
          @change=${this._valueChangedPicker}
          allow-custom-entity
        ></ha-entity-picker>
        <ha-entity-picker
          label="Entity Sun"
          .hass=${this.hass}
          .value=${this._entity_sun}
          .configValue=${"entity_sun"}
          .includeDomains=${["sun","sensor"]}
          @change=${this._valueChangedPicker}
          allow-custom-entity
        ></ha-entity-picker>
        <ha-select
          label="Forecast Type"
          .configValue=${"forecast_type"}
          .value=${this._forecast_type}
          @selected=${this._valueChangedPicker}
          @closed=${xe}
        >
          <mwc-list-item></mwc-list-item>
          <mwc-list-item value="daily">Daily</mwc-list-item>
          <mwc-list-item value="hourly">Hourly</mwc-list-item>
        </ha-select>
        <div class="options">
          <div class="option">
            <ha-switch .checked=${this._current} .configValue=${"current"} @change=${this._valueChanged}></ha-switch>
            <span class="label">Show current temperature</span>
          </div>
          <div class="option">
            <ha-switch .checked=${this._details} .configValue=${"details"} @change=${this._valueChanged}></ha-switch>
            <span class="label">Show weather details</span>
          </div>
          <div class="option">
            <ha-switch .checked=${this._forecast} .configValue=${"forecast"} @change=${this._valueChanged}></ha-switch>
            <span class="label">Show forecast (table or graph)</span>
          </div>
          ${this._forecast?M`
                <div class="option">
                  <ha-switch .checked=${this._graph} .configValue=${"graph"} @change=${this._valueChanged}></ha-switch>
                  <span class="label">Show graph</span>
                </div>
              `:R}
          ${this._forecast&&!this._graph?M`
                <div class="option">
                  <ha-switch
                    .checked=${this._hidePrecipitation}
                    .configValue=${"hidePrecipitation"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                  <span class="label">Hide rain precipitation</span>
                </div>
              `:R}
        </div>
        <paper-input
          label="forecast max columns (optional)"
          type="number"
          .value=${this._forecastMaxColumn}
          .configValue=${"forecastMaxColumn"}
          @value-changed=${this._valueChangedNumber}
          min="2"
          max="20"
        ></paper-input>
      </div>
    `:R}_initialize(){void 0!==this.hass&&void 0!==this._config&&(this._initialized=!0)}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config={...this._config,[e.configValue]:void 0!==e.checked?e.checked:e.value}),gt(this,"config-changed",{config:this._config}))}_valueChangedNumber(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value||null===e.value?delete this._config[e.configValue]:this._config={...this._config,[e.configValue]:Number(e.value)}),gt(this,"config-changed",{config:this.sortObjectByKeys(this._config)}))}_valueChangedPicker(t){if(!this._config||!this.hass)return;const e=t.target,i=t.detail.value;this[`_${e.configValue}`]!==i&&(e.configValue&&(i?this._config={...this._config,[e.configValue]:i}:(this._config={...this._config},delete this._config[e.configValue])),gt(this,"config-changed",{config:this.sortObjectByKeys(this._config)}))}};ke.styles=o`
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
  `,t([lt({attribute:!1})],ke.prototype,"hass",void 0),t([ht()],ke.prototype,"_config",void 0),ke=t([ot("weather-card-editor")],ke);var He=Object.freeze({__proto__:null,get WeatherCardEditor(){return ke}});export{Ce as WeatherCard};
