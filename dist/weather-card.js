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
 */;var c;const l=window,h=l.trustedTypes,d=h?h.emptyScript:"",p=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m},_="finalized";let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;f[_]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:f}),(null!==(c=l.reactiveElementVersions)&&void 0!==c?c:l.reactiveElementVersions=[]).push("1.6.3");const y=window,$=y.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,A="?"+S,E=`<${A}>`,N=document,P=()=>N.createComment(""),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,O="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,T=/>/g,U=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,V=/"/g,M=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),R=new WeakMap,j=N.createTreeWalker(N,129,null,!1);function I(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const B=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=k;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===k?"!--"===c[1]?o=H:void 0!==c[1]?o=T:void 0!==c[2]?(M.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=U):void 0!==c[3]&&(o=U):o===U?">"===c[0]?(o=null!=n?n:k,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?U:'"'===c[3]?V:D):o===V||o===D?o=U:o===H||o===T?o=k:(o=U,n=void 0);const d=o===U&&t[e+1].startsWith("/>")?" ":"";r+=o===k?i+E:l>=0?(s.push(a),i.slice(0,l)+w+i.slice(l)+S+d):i+S+(-2===l?(s.push(void 0),e):d)}return[I(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,l]=B(t,e);if(this.el=F.createElement(c,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=j.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(w)||e.startsWith(S)){const i=l[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+w).split(S),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?X:"@"===e[1]?Y:q})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),j.nextNode(),a.push({type:2,index:++n});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===A)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){var n,r,o,a;if(e===L)return e;let c=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const l=x(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=c:i._$Cl=c),void 0!==c&&(e=Z(t,c._$AS(t,e.values),c,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:N).importNode(i,!0);j.currentNode=n;let r=j.nextNode(),o=0,a=0,c=s[0];for(;void 0!==c;){if(o===c.index){let e;2===c.type?e=new K(r,r.nextSibling,this,t):1===c.type?e=new c.ctor(r,c.name,c.strings,this,t):6===c.type&&(e=new tt(r,this,t)),this._$AV.push(e),c=s[++a]}o!==(null==c?void 0:c.index)&&(r=j.nextNode(),o++)}return j.currentNode=N,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),x(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(N.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(I(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new G(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new F(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new K(this.k(P()),this.k(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Z(this,t,e,0),r=!x(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Z(this,s[i+o],e,o),a===L&&(a=this._$AH[o]),r||(r=!x(a)||a!==this._$AH[o]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const Q=$?$.emptyScript:"";class X extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Y extends q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Z(this,t,e,0))&&void 0!==i?i:z)===L)return;const s=this._$AH,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const et=y.litHtmlPolyfillSupport;null==et||et(F,K),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,st;class nt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new K(e.insertBefore(P(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}nt.finalized=!0,nt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:nt});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:nt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");const ot=["mdi:arrow-down","mdi:arrow-bottom-left","mdi:arrow-left","mdi:arrow-top-left","mdi:arrow-up","mdi:arrow-top-right","mdi:arrow-right","mdi:arrow-bottom-right","mdi:arrow-down"],at={clear:"day","clear-night":"night",cloudy:"cloudy",fog:"cloudy",hail:"rainy-7",lightning:"thunder","lightning-rainy":"thunder",partlycloudy:"cloudy-day-3",pouring:"rainy-6",rainy:"rainy-5",snowy:"snowy-6","snowy-rainy":"rainy-7",sunny:"day",windy:"cloudy","windy-variant":"cloudy-day-3",exceptional:"!!"},ct={...at,clear:"night",sunny:"night",partlycloudy:"cloudy-night-3","windy-variant":"cloudy-night-3"},lt=t=>t.stopPropagation()
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function pt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):dt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ut(t){return pt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt,gt,_t;null===(mt=window.HTMLSlotElement)||void 0===mt||mt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(gt||(gt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(_t||(_t={}));var ft,vt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},yt={invalid_configuration:"Invalid configuration",invalid_entity:"Please define a weather entity",show_warning:"Show Warning",show_error:"Show Error"},$t="Temperature",bt="Temperature max",wt="Temperature min",St="Precipitations",At=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SW","SW","W-SW","W","W-NW","NW","N-NW","N"],Et={common:yt,temp:$t,tempHi:bt,tempLo:wt,precip:St,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:At},Nt=Object.freeze({__proto__:null,cardinalDirections:At,common:yt,default:Et,precip:St,temp:$t,tempHi:bt,tempLo:wt,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),Pt="Temperatur",xt="Temperatur maks",Ct="Temperatur nat",Ot="Nedbør",kt=["N","N-NØ","NØ","Ø-NØ","Ø","Ø-SØ","SØ","S-SØ","S","S-SV","SV","V-SV","V","V-NV","NV","N-NV","N"],Ht={temp:Pt,tempHi:xt,tempLo:Ct,precip:Ot,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:kt},Tt=Object.freeze({__proto__:null,cardinalDirections:kt,default:Ht,precip:Ot,temp:Pt,tempHi:xt,tempLo:Ct,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),Ut="temperatur",Dt="Höchsttemperatur",Vt="Tiefsttemperatur",Mt="Niederschlag",Wt=["N","N-NO","NO","O-NO","O","O-SO","SO","S-SO","S","S-SW","SW","W-SW","W","W-NW","NW","N-NW","N"],Lt={temp:Ut,tempHi:Dt,tempLo:Vt,precip:Mt,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Wt},zt=Object.freeze({__proto__:null,cardinalDirections:Wt,default:Lt,precip:Mt,temp:Ut,tempHi:Dt,tempLo:Vt,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),Rt="Temperatura",jt="Temperatura máxima",It="Temperatura mínima",Bt="Precipitations",Ft=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SO","SO","O-SO","O","O-NO","NO","N-NO","N"],Zt={temp:Rt,tempHi:jt,tempLo:It,precip:Bt,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Ft},Gt=Object.freeze({__proto__:null,cardinalDirections:Ft,default:Zt,precip:Bt,temp:Rt,tempHi:jt,tempLo:It,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),Kt="Température",qt="Température max",Jt="Température min",Qt="Précipitations",Xt=["N","N-NE","NE","E-NE","E","E-SE","SE","S-SE","S","S-SO","SO","O-SO","O","O-NO","NO","N-NO","N"],Yt={temp:Kt,tempHi:qt,tempLo:Jt,precip:Qt,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:Xt},te=Object.freeze({__proto__:null,cardinalDirections:Xt,default:Yt,precip:Qt,temp:Kt,tempHi:qt,tempLo:Jt,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),ee="temperatuur",ie="Maximum temperatuur",se="Minimum temperatuur",ne="Neerslag",re=["N","N-NO","NO","O-NO","O","O-ZO","ZO","Z-ZO","Z","Z-ZW","ZW","W-ZW","W","W-NW","NW","N-NW","N"],oe={temp:ee,tempHi:ie,tempLo:se,precip:ne,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:re},ae=Object.freeze({__proto__:null,cardinalDirections:re,default:oe,precip:ne,temp:ee,tempHi:ie,tempLo:se,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"}),ce="Температура",le="Температура макси",he="Температура ночью",de="Осадки",pe=["С","С-СВ","СВ","В-СВ","В","В-ЮВ","ЮВ","Ю-ЮВ","Ю","Ю-ЮЗ","ЮЗ","З-ЮЗ","З","З-СЗ","СЗ","С-СЗ","С"],ue={temp:ce,tempHi:le,tempLo:he,precip:de,uPress:"гПа",uSpeed:"м/с",uPrecip:"мм",cardinalDirections:pe},me=Object.freeze({__proto__:null,cardinalDirections:pe,default:ue,precip:de,temp:ce,tempHi:le,tempLo:he,uPrecip:"мм",uPress:"гПа",uSpeed:"м/с"}),ge="Temperatur",_e="Max temperatur",fe="Min temperatur",ve="Nederbörd",ye=["N","N-NO","NO","O-NO","O","O-SO","SO","S-SO","S","S-SV","SV","V-SV","V","V-NV","NV","N-NV","N"],$e={temp:ge,tempHi:_e,tempLo:fe,precip:ve,uPress:"hPa",uSpeed:"m/s",uPrecip:"mm",cardinalDirections:ye},be=Object.freeze({__proto__:null,cardinalDirections:ye,default:$e,precip:ve,temp:ge,tempHi:_e,tempLo:fe,uPrecip:"mm",uPress:"hPa",uSpeed:"m/s"});!function(t){t.ENGLISH="en",t.ENGLISH_BRITISH="en_GB",t.DANISH="da",t.GERMAN="de",t.SPANISH="es",t.FRENCH="fr",t.DUTCH="nl",t.RUSSIAN="ru",t.SWEDISH="sv"}(ft||(ft={}));const we={en:Nt,en_GB:Nt,da:Tt,de:zt,es:Gt,fr:te,nl:ae,ru:me,sv:be},Se=ft.ENGLISH.valueOf();function Ae(t,e,i="",s=""){let n;try{if("test"===e.language)return"TRANSLATED";n=t.split(".").reduce(((t,e)=>t[e]),we[e.language]),n||(n=t.split(".").reduce(((t,e)=>t[e]),we[Se]))}catch{try{n=t.split(".").reduce(((t,e)=>t[e]),we[Se])}catch{n=""}}if(""!==i&&""!==s&&n){Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);for(let t=0;t<i.length;t++){n=n.replace(String(i[t]),String(s[t]));const e=n.match(/\{if ([a-z]+) is ([^}]+)} ?([^{]+) ?\{else} ?([^{]+)/i);if(e&&String(i[t]).replace(/[{}']+/g,"")==e[1]){n=String(s[t])==e[2]?n.replace(e[0],e[3]):n.replace(e[0],e[4])}}}return n}const Ee=t=>t.locale||{language:t.language||ft.ENGLISH,number_format:gt.system},Ne=o`
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
    margin: 0 -5px 0 -4px;
  }

  .conditions .icon {
    margin-top: -10px;
  }
`;var Pe;window.customCards=window.customCards||[],window.customCards.push({type:"weather-card",name:"Animated weather card",description:"Lovelace animated weather card"}),console.info("%c  WEATHER-CARD  \n%c Version: 1.9.0 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let xe=Pe=class extends nt{constructor(){super(),this.isPanel=!1,this.editMode=!1,this.renderTooltip=t=>Array.isArray(t)?t.map((t=>`${t.marker} ${t.seriesName}: ${t.value} ${this.getUnit("Precipitations"===t.seriesName?"precipitation":"temperature")}`)).join("<br>"):`${t.marker} ${t.seriesName}: ${t.value} ${this.getUnit("Precipitations"===t.seriesName?"precipitation":"temperature")}`,this.numberElements=0}static async getConfigElement(){return await Promise.resolve().then((function(){return ke})),document.createElement("weather-card-editor")}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={name:"",forecast_type:"daily",...t}}_needForecastSubscription(){return this._config&&this._config.entity_weather&&this._config.forecast_type&&"legacy"!==this._config.forecast_type}_unsubscribeForecastEvents(){this._subscribed&&(this._subscribed.then((t=>t())),this._subscribed=void 0)}async _subscribeForecastEvents(){var t,e,i,s;(this._unsubscribeForecastEvents(),this.isConnected&&this.hass&&this._config&&this._needForecastSubscription())&&(this._subscribed=(t=this.hass,e=this._config.entity_weather,i=this._config.forecast_type,s=t=>{this._forecastEvent=t},t.connection.subscribeMessage(s,{type:"weather/subscribe_forecast",forecast_type:i,entity_id:e})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this._config&&this.hass&&this._subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeForecastEvents()}shouldUpdate(t){if(!this._config)return!1;if(t.has("_config")||t.has("_forecastEvent"))return!0;if(t.has("hass"))return!0;const e=t.get("hass")||void 0;return!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale||(!1===Object.keys(this._config).every((t=>null===t.match(/^entity_/)||e.states[this._config[t]]===this.hass.states[this._config[t]]))||t.has("config"))}updated(t){this.hass&&this._config&&(!t.has("_config")&&this._subscribed||this._subscribeForecastEvents())}render(){if(!this._config||!this.hass)return z;const t=this.hass.states[this._config.entity_weather];return t?W`
      <ha-card @click=${this._handleClick}>
        ${!1!==this._config.current?this.renderCurrent():""} ${!1!==this._config.details?this.renderDetails():""}
        ${!1!==this._config.forecast?this.renderForecast(this._forecastEvent||{forecast:t.attributes.forecast,type:"daily"}):""}
      </ha-card>
    `:z}_handleClick(){vt(this,"hass-more-info",{entityId:this._config.entity_weather})}renderCurrent(){this.numberElements++;const t=this.hass.states[this._config.entity_weather];return t?W`
      <div class="current ${this.numberElements>1?"spacer":""}">
        <span class="icon bigger" style="background: none, url('${this.getWeatherIcon(t.state.toLowerCase(),this.hass.states[this._config.entity_sun])}') no-repeat; background-size: contain;">${t.state}</span>
        ${this._config.name?W`<span class="title"> ${this._config.name} </span>`:""}
        <span class="temp">${"°F"==this.getUnit("temperature")?Math.round(t.attributes.temperature):t.attributes.temperature}</span>
        <span class="tempc"> ${this.getUnit("temperature")}</span>
      </div>
    `:z}renderDetails(){const t=this.hass.states[this._config.entity_sun],e=this.hass.states[this._config.entity_weather];if(!e||!t)return z;const i=Ee(this.hass);let s,n;return t&&(s=new Date(t.attributes.next_rising),n=new Date(t.attributes.next_setting)),this.numberElements++,W`
      <ul class="variations ${this.numberElements>1?"spacer":""}">
        <li>
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${e.attributes.humidity}<span class="unit"> % </span>
        </li>
        <li>
          ${Pe.getWindDir(this.hass,e.attributes.wind_bearing)}
          <ha-icon style="margin-left: 0;" .icon=${Pe.getWindDirIcon(e.attributes.wind_bearing)}></ha-icon>
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
        ${s?W`
              <li>
                <ha-icon icon="mdi:weather-sunset-up"></ha-icon>
                ${s.toLocaleTimeString(i.language)}
              </li>
            `:""}
        ${n?W`
              <li>
                ${n.toLocaleTimeString(i.language)}
                <ha-icon icon="mdi:weather-sunset-down"></ha-icon>
              </li>
            `:""}
      </ul>
    `}renderForecast(t){return t.forecast&&0!==t.forecast.length?(this.numberElements++,!0===this._config.graph?this.renderForecastGraph(t):this.renderForecastTable(t)):z}renderForecastTable(t){if(!t||!t.forecast||0===t.forecast.length)return z;const e=t.forecast.slice(0,this._config.forecastMaxColumn?this._config.forecastMaxColumn:5).map((e=>W`
        <div class="day">
          <div class="dayname">${this.getDateString(t,e.datetime)}</div>
          ${e.condition?W` <i class="icon" style="background: none, url('${this.getWeatherIcon(e.condition.toLowerCase(),this.hass.states[this._config.entity_sun])}') no-repeat; background-size: contain"></i>`:""}
          <div class="highTemp">${e.temperature}${this.getUnit("temperature")}</div>
          ${void 0!==e.templow?W` <div class="lowTemp">${e.templow}${this.getUnit("temperature")}</div> `:""}
          ${this._config.hidePrecipitation||void 0===e.precipitation||null===e.precipitation?"":W` <div class="precipitation">${Math.round(10*e.precipitation)/10} ${this.getUnit("precipitation")}</div> `}
          ${this._config.hidePrecipitation||void 0===e.precipitation_probability||null===e.precipitation_probability?"":W` <div class="precipitation_probability">${Math.round(10*e.precipitation_probability)/10} ${this.getUnit("precipitation_probability")}</div> `}
        </div>
      `));return W` <div class="forecast clear ${this.numberElements>1?"spacer":""}">${e}</div>`}renderForecastGraph(t){if(!t.forecast||0===t.forecast.length)return z;this.drawChart(t);const e=t.forecast.map((t=>t.condition?W` <i class="icon" style="background: none, url('${this.getWeatherIcon(t.condition.toLowerCase(),this.hass.states[this._config.entity_sun])}') no-repeat; background-size: contain"></i>`:""));return W`
      <div class="clear ${this.numberElements>1?"spacer":""}">
        <ha-chart-base .data=${this.chartData.data} .options=${this.chartData.options} .hass=${this.hass}></ha-chart-base>
      </div>
      <div class="conditions">${e}</div>
    `}drawChart(t){if(!t.forecast||0===t.forecast.length)return;const e=[],i=[],s=[],n=[];for(const r of t.forecast)e.push(this.getDateString(t,r.datetime)),i.push(r.temperature),void 0!==r.templow&&s.push(r.templow),void 0!==r.precipitation&&n.push(r.precipitation);const r=getComputedStyle(document.body).getPropertyValue("--divider-color"),o=Ee(this.hass);this.chartData={data:[{name:"hourly"===t.type?Ae("temp",o):Ae("tempHi",o),type:"line",data:i,lineStyle:{width:2,color:r},smooth:!0,yAxisId:"TempAxis"},{name:Ae("tempLo",o),type:"line",data:s,lineStyle:{width:2,color:r},smooth:!0,yAxisId:"TempAxis"},{name:Ae("precip",o),type:"bar",data:n,barMaxWidth:22,color:r,yAxisId:"PrecipAxis"}],options:{animation:!1,animationDurationUpdate:0,grid:{top:20,left:20,right:20,bottom:5},tooltip:{trigger:"axis",formatter:this.renderTooltip.bind(this)},xAxis:[{id:"DateAxis",type:"category",position:"top",data:e,boundaryGap:!1}],yAxis:[{id:"TempAxis",type:"value",position:"left",show:!0,max:t=>t.max+4},{id:"PrecipAxis",type:"value",position:"right",min:0,max:20,show:!1}]}}}getWeatherIcon(t,e){return`${this._config.icons?this._config.icons:"https://cdn.jsdelivr.net/gh/MarcHagen/weather-card/dist/icons/animated/"}${e&&"below_horizon"===e.state?ct[t]:at[t]}.svg`}static getWindDirIcon(t){return ot[function(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}((t+22.5)/45,0)]}static getWindDir(t,e){return Ae("cardinalDirections",Ee(t))[(e+11.25)/22.5]}getWindForce(){const t=this.hass.states[this._config.entity_weather];if("km"!==this.getUnit("length")||!t)return z;const e=Math.ceil(Math.cbrt(Math.pow(t.attributes.wind_speed/3.6/.836,2)));return W` | ${e} <span class="unit">Bft</span>`}getUnit(t){const e=this.hass.config.unit_system.length,i=Ee(this.hass);switch(t){case"air_pressure":return"km"===e?Ae("uPress",i):"mbar";case"length":return e;case"precipitation":return"km"===e?Ae("uPrecip",i):"in";case"intensity":return"km"===e?Ae("uPrecip",i)+"/h":"in/h";case"precipitation_probability":return"%";default:return this.hass.config.unit_system[t]||""}}getDateString(t,e){return"hourly"===t.type?new Date(e).toLocaleTimeString(Ee(this.hass).language,{hour:"numeric"}):new Date(e).toLocaleDateString(Ee(this.hass).language,{weekday:"short"})}getCardSize(){return 1}static get styles(){return Ne}};t([pt({attribute:!1})],xe.prototype,"hass",void 0),t([pt({attribute:!1})],xe.prototype,"chartData",void 0),t([pt({type:Boolean})],xe.prototype,"isPanel",void 0),t([pt({type:Boolean})],xe.prototype,"editMode",void 0),t([ut()],xe.prototype,"_config",void 0),t([ut()],xe.prototype,"numberElements",void 0),t([ut()],xe.prototype,"_subscribed",void 0),t([ut()],xe.prototype,"_forecastEvent",void 0),xe=Pe=t([ht("weather-card")],xe);const Ce=["type","entity_weather","entity_sun","forecast_type","card_config_version","forecastMaxColumn","icons","details","forecast","current","graph","hidePrecipitation"];let Oe=class extends nt{constructor(){super(...arguments),this._initialized=!1,this._config_version=2}setConfig(t){this._config=t}shouldUpdate(){return this._initialized||this._initialize(),!0}_configCleanup(){if(!this._config||!this.hass)return;let t={...this._config};t.entity&&(t.entity_weather=t.entity,delete t.entity);for(const e in this._config)Ce.includes(e)||delete t[e];t={...t,card_config_version:this._config_version},this._config=t,vt(this,"config-changed",{config:this.sortObjectByKeys(this._config)})}sortObjectByKeys(t){return Object.keys(t).sort().reduce(((e,i)=>(e[i]=t[i],e)),{})}async firstUpdated(){this._config&&this.hass&&this._config.card_config_version!==this._config_version&&this._configCleanup(),customElements.get("ha-entity-picker")||customElements.get("hui-entities-card")?.getConfigElement()}get _name(){return this._config?.name||""}get _entity_weather(){return this._config?.entity_weather||""}get _entity_sun(){return this._config?.entity_sun||"sun.sun"}get _forecast_type(){return this._config?.forecast_type||"daily"}get _icons(){return this._config?.icons||""}get _current(){return!1!==this._config?.current}get _details(){return!1!==this._config?.details}get _forecast(){return!1!==this._config?.forecast}get _graph(){return!1!==this._config?.graph}get _forecastMaxColumn(){return this._config?.forecastMaxColumn||5}get _hidePrecipitation(){return!0===this._config?.hidePrecipitation}render(){return this.hass&&this._config?W`
      <div class="card-config">
        <paper-input label="Name" .value=${this._name} .configValue=${"name"} @value-changed=${this._valueChanged}></paper-input>
        <paper-input label="Icons location" .value=${this._icons} .configValue=${"icons"} @value-changed=${this._valueChanged}></paper-input>
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
        <ha-select label="Forecast Type" .configValue=${"forecast_type"} .value=${this._forecast_type} @selected=${this._valueChangedPicker} @closed=${lt}>
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
          ${this._forecast?W`
                <div class="option">
                  <ha-switch .checked=${this._graph} .configValue=${"graph"} @change=${this._valueChanged}></ha-switch>
                  <span class="label">Show graph</span>
                </div>
              `:z}
          ${this._forecast&&!this._graph?W`
                <div class="option">
                  <ha-switch .checked=${this._hidePrecipitation} .configValue=${"hidePrecipitation"} @change=${this._valueChanged}></ha-switch>
                  <span class="label">Hide rain precipitation</span>
                </div>
              `:z}
        </div>
        <paper-input label="forecast max columns (optional)" type="number" .value=${this._forecastMaxColumn} .configValue=${"forecastMaxColumn"} @value-changed=${this._valueChangedNumber} min="2" max="20"></paper-input>
      </div>
    `:z}_initialize(){void 0!==this.hass&&void 0!==this._config&&(this._initialized=!0)}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config={...this._config,[e.configValue]:void 0!==e.checked?e.checked:e.value}),vt(this,"config-changed",{config:this._config}))}_valueChangedNumber(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value||null===e.value?delete this._config[e.configValue]:this._config={...this._config,[e.configValue]:Number(e.value)}),vt(this,"config-changed",{config:this.sortObjectByKeys(this._config)}))}_valueChangedPicker(t){if(!this._config||!this.hass)return;const e=t.target,i=t.detail.value;this[`_${e.configValue}`]!==i&&(e.configValue&&(i?this._config={...this._config,[e.configValue]:i}:(this._config={...this._config},delete this._config[e.configValue])),vt(this,"config-changed",{config:this.sortObjectByKeys(this._config)}))}};Oe.styles=o`
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
  `,t([pt({attribute:!1})],Oe.prototype,"hass",void 0),t([ut()],Oe.prototype,"_config",void 0),Oe=t([ht("weather-card-editor")],Oe);var ke=Object.freeze({__proto__:null,get WeatherCardEditor(){return Oe}});export{xe as WeatherCard};
