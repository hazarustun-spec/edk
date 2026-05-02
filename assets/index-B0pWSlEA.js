function TS(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Mv={exports:{}},Sc={},Ev={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),AS=Symbol.for("react.portal"),CS=Symbol.for("react.fragment"),RS=Symbol.for("react.strict_mode"),PS=Symbol.for("react.profiler"),bS=Symbol.for("react.provider"),LS=Symbol.for("react.context"),DS=Symbol.for("react.forward_ref"),IS=Symbol.for("react.suspense"),NS=Symbol.for("react.memo"),US=Symbol.for("react.lazy"),Vm=Symbol.iterator;function OS(n){return n===null||typeof n!="object"?null:(n=Vm&&n[Vm]||n["@@iterator"],typeof n=="function"?n:null)}var Tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wv=Object.assign,Av={};function Zo(n,e,t){this.props=n,this.context=e,this.refs=Av,this.updater=t||Tv}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Zo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Cv(){}Cv.prototype=Zo.prototype;function ap(n,e,t){this.props=n,this.context=e,this.refs=Av,this.updater=t||Tv}var lp=ap.prototype=new Cv;lp.constructor=ap;wv(lp,Zo.prototype);lp.isPureReactComponent=!0;var Hm=Array.isArray,Rv=Object.prototype.hasOwnProperty,up={current:null},Pv={key:!0,ref:!0,__self:!0,__source:!0};function bv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:hl,type:n,key:s,ref:o,props:r,_owner:up.current}}function FS(n,e){return{$$typeof:hl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function cp(n){return typeof n=="object"&&n!==null&&n.$$typeof===hl}function kS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Gm=/\/+/g;function Kc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?kS(""+n.key):e.toString(36)}function gu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case hl:case AS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Kc(o,0):i,Hm(r)?(t="",n!=null&&(t=n.replace(Gm,"$&/")+"/"),gu(r,e,t,"",function(u){return u})):r!=null&&(cp(r)&&(r=FS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Gm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Hm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Kc(s,a);o+=gu(s,e,t,l,r)}else if(l=OS(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Kc(s,a++),o+=gu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pl(n,e,t){if(n==null)return n;var i=[],r=0;return gu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function BS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var on={current:null},vu={transition:null},zS={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:vu,ReactCurrentOwner:up};function Lv(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:Pl,forEach:function(n,e,t){Pl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Pl(n,function(){e++}),e},toArray:function(n){return Pl(n,function(e){return e})||[]},only:function(n){if(!cp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Fe.Component=Zo;Fe.Fragment=CS;Fe.Profiler=PS;Fe.PureComponent=ap;Fe.StrictMode=RS;Fe.Suspense=IS;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zS;Fe.act=Lv;Fe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=wv({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=up.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Rv.call(e,l)&&!Pv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:hl,type:n.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(n){return n={$$typeof:LS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:bS,_context:n},n.Consumer=n};Fe.createElement=bv;Fe.createFactory=function(n){var e=bv.bind(null,n);return e.type=n,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(n){return{$$typeof:DS,render:n}};Fe.isValidElement=cp;Fe.lazy=function(n){return{$$typeof:US,_payload:{_status:-1,_result:n},_init:BS}};Fe.memo=function(n,e){return{$$typeof:NS,type:n,compare:e===void 0?null:e}};Fe.startTransition=function(n){var e=vu.transition;vu.transition={};try{n()}finally{vu.transition=e}};Fe.unstable_act=Lv;Fe.useCallback=function(n,e){return on.current.useCallback(n,e)};Fe.useContext=function(n){return on.current.useContext(n)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(n){return on.current.useDeferredValue(n)};Fe.useEffect=function(n,e){return on.current.useEffect(n,e)};Fe.useId=function(){return on.current.useId()};Fe.useImperativeHandle=function(n,e,t){return on.current.useImperativeHandle(n,e,t)};Fe.useInsertionEffect=function(n,e){return on.current.useInsertionEffect(n,e)};Fe.useLayoutEffect=function(n,e){return on.current.useLayoutEffect(n,e)};Fe.useMemo=function(n,e){return on.current.useMemo(n,e)};Fe.useReducer=function(n,e,t){return on.current.useReducer(n,e,t)};Fe.useRef=function(n){return on.current.useRef(n)};Fe.useState=function(n){return on.current.useState(n)};Fe.useSyncExternalStore=function(n,e,t){return on.current.useSyncExternalStore(n,e,t)};Fe.useTransition=function(){return on.current.useTransition()};Fe.version="18.3.1";Ev.exports=Fe;var ie=Ev.exports;const VS=wS(ie),HS=TS({__proto__:null,default:VS},[ie]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GS=ie,WS=Symbol.for("react.element"),XS=Symbol.for("react.fragment"),jS=Object.prototype.hasOwnProperty,YS=GS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$S={key:!0,ref:!0,__self:!0,__source:!0};function Dv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jS.call(e,i)&&!$S.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:WS,type:n,key:s,ref:o,props:r,_owner:YS.current}}Sc.Fragment=XS;Sc.jsx=Dv;Sc.jsxs=Dv;Mv.exports=Sc;var K=Mv.exports,cd={},Iv={exports:{}},Wn={},Nv={exports:{}},Uv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(b,H){var q=b.length;b.push(H);e:for(;0<q;){var re=q-1>>>1,Se=b[re];if(0<r(Se,H))b[re]=H,b[q]=Se,q=re;else break e}}function t(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var H=b[0],q=b.pop();if(q!==H){b[0]=q;e:for(var re=0,Se=b.length,Oe=Se>>>1;re<Oe;){var X=2*(re+1)-1,ee=b[X],de=X+1,ue=b[de];if(0>r(ee,q))de<Se&&0>r(ue,ee)?(b[re]=ue,b[de]=q,re=de):(b[re]=ee,b[X]=q,re=X);else if(de<Se&&0>r(ue,q))b[re]=ue,b[de]=q,re=de;else break e}}return H}function r(b,H){var q=b.sortIndex-H.sortIndex;return q!==0?q:b.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,v=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(b){for(var H=t(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=b)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=t(u)}}function S(b){if(_=!1,x(b),!v)if(t(l)!==null)v=!0,B(A);else{var H=t(u);H!==null&&Y(S,H.startTime-b)}}function A(b,H){v=!1,_&&(_=!1,d(R),R=-1),m=!0;var q=h;try{for(x(H),f=t(l);f!==null&&(!(f.expirationTime>H)||b&&!T());){var re=f.callback;if(typeof re=="function"){f.callback=null,h=f.priorityLevel;var Se=re(f.expirationTime<=H);H=n.unstable_now(),typeof Se=="function"?f.callback=Se:f===t(l)&&i(l),x(H)}else i(l);f=t(l)}if(f!==null)var Oe=!0;else{var X=t(u);X!==null&&Y(S,X.startTime-H),Oe=!1}return Oe}finally{f=null,h=q,m=!1}}var C=!1,M=null,R=-1,D=5,y=-1;function T(){return!(n.unstable_now()-y<D)}function F(){if(M!==null){var b=n.unstable_now();y=b;var H=!0;try{H=M(!0,b)}finally{H?O():(C=!1,M=null)}}else C=!1}var O;if(typeof g=="function")O=function(){g(F)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=F,O=function(){$.postMessage(null)}}else O=function(){p(F,0)};function B(b){M=b,C||(C=!0,O())}function Y(b,H){R=p(function(){b(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(b){b.callback=null},n.unstable_continueExecution=function(){v||m||(v=!0,B(A))},n.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<b?Math.floor(1e3/b):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(b){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var q=h;h=H;try{return b()}finally{h=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(b,H){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=h;h=b;try{return H()}finally{h=q}},n.unstable_scheduleCallback=function(b,H,q){var re=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?re+q:re):q=re,b){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=q+Se,b={id:c++,callback:H,priorityLevel:b,startTime:q,expirationTime:Se,sortIndex:-1},q>re?(b.sortIndex=q,e(u,b),t(l)===null&&b===t(u)&&(_?(d(R),R=-1):_=!0,Y(S,q-re))):(b.sortIndex=Se,e(l,b),v||m||(v=!0,B(A))),b},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(b){var H=h;return function(){var q=h;h=H;try{return b.apply(this,arguments)}finally{h=q}}}})(Uv);Nv.exports=Uv;var qS=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS=ie,Vn=qS;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ov=new Set,ka={};function Ns(n,e){Do(n,e),Do(n+"Capture",e)}function Do(n,e){for(ka[n]=e,n=0;n<e.length;n++)Ov.add(e[n])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,ZS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Xm={};function QS(n){return fd.call(Xm,n)?!0:fd.call(Wm,n)?!1:ZS.test(n)?Xm[n]=!0:(Wm[n]=!0,!1)}function JS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function eM(n,e,t,i){if(e===null||typeof e>"u"||JS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Xt[n]=new an(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Xt[e]=new an(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Xt[n]=new an(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Xt[n]=new an(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Xt[n]=new an(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Xt[n]=new an(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Xt[n]=new an(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Xt[n]=new an(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Xt[n]=new an(n,5,!1,n.toLowerCase(),null,!1,!1)});var fp=/[\-:]([a-z])/g;function dp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(fp,dp);Xt[e]=new an(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(fp,dp);Xt[e]=new an(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(fp,dp);Xt[e]=new an(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Xt[n]=new an(n,1,!1,n.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Xt[n]=new an(n,1,!1,n.toLowerCase(),null,!0,!0)});function hp(n,e,t,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eM(e,t,r,i)&&(t=null),i||r===null?QS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var sr=KS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bl=Symbol.for("react.element"),io=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),_p=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),jm=Symbol.iterator;function na(n){return n===null||typeof n!="object"?null:(n=jm&&n[jm]||n["@@iterator"],typeof n=="function"?n:null)}var vt=Object.assign,Zc;function va(n){if(Zc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+n}var Qc=!1;function Jc(n,e){if(!n||Qc)return"";Qc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?va(n):""}function tM(n){switch(n.tag){case 5:return va(n.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return n=Jc(n.type,!1),n;case 11:return n=Jc(n.type.render,!1),n;case 1:return n=Jc(n.type,!0),n;default:return""}}function md(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ro:return"Fragment";case io:return"Portal";case dd:return"Profiler";case pp:return"StrictMode";case hd:return"Suspense";case pd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case kv:return(n.displayName||"Context")+".Consumer";case Fv:return(n._context.displayName||"Context")+".Provider";case mp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _p:return e=n.displayName||null,e!==null?e:md(n.type)||"Memo";case mr:e=n._payload,n=n._init;try{return md(n(e))}catch{}}return null}function nM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function zv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iM(n){var e=zv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ll(n){n._valueTracker||(n._valueTracker=iM(n))}function Vv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=zv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Bu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _d(n,e){var t=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ym(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Br(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hv(n,e){e=e.checked,e!=null&&hp(n,"checked",e,!1)}function gd(n,e){Hv(n,e);var t=Br(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?vd(n,e.type,t):e.hasOwnProperty("defaultValue")&&vd(n,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function $m(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function vd(n,e,t){(e!=="number"||Bu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var xa=Array.isArray;function xo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Br(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function xd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(xa(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Br(t)}}function Gv(n,e){var t=Br(e.value),i=Br(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Km(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Wv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Wv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Dl,Xv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ba(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rM=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(n){rM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),wa[e]=wa[n]})});function jv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||wa.hasOwnProperty(n)&&wa[n]?(""+e).trim():e+"px"}function Yv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=jv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var sM=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(n,e){if(e){if(sM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Md(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function gp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Td=null,yo=null,So=null;function Zm(n){if(n=_l(n)){if(typeof Td!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Ac(e),Td(n.stateNode,n.type,e))}}function $v(n){yo?So?So.push(n):So=[n]:yo=n}function qv(){if(yo){var n=yo,e=So;if(So=yo=null,Zm(n),e)for(n=0;n<e.length;n++)Zm(e[n])}}function Kv(n,e){return n(e)}function Zv(){}var ef=!1;function Qv(n,e,t){if(ef)return n(e,t);ef=!0;try{return Kv(n,e,t)}finally{ef=!1,(yo!==null||So!==null)&&(Zv(),qv())}}function za(n,e){var t=n.stateNode;if(t===null)return null;var i=Ac(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var wd=!1;if(Ki)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){wd=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{wd=!1}function oM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Aa=!1,zu=null,Vu=!1,Ad=null,aM={onError:function(n){Aa=!0,zu=n}};function lM(n,e,t,i,r,s,o,a,l){Aa=!1,zu=null,oM.apply(aM,arguments)}function uM(n,e,t,i,r,s,o,a,l){if(lM.apply(this,arguments),Aa){if(Aa){var u=zu;Aa=!1,zu=null}else throw Error(ne(198));Vu||(Vu=!0,Ad=u)}}function Us(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Jv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Qm(n){if(Us(n)!==n)throw Error(ne(188))}function cM(n){var e=n.alternate;if(!e){if(e=Us(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Qm(r),n;if(s===i)return Qm(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function e0(n){return n=cM(n),n!==null?t0(n):null}function t0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=t0(n);if(e!==null)return e;n=n.sibling}return null}var n0=Vn.unstable_scheduleCallback,Jm=Vn.unstable_cancelCallback,fM=Vn.unstable_shouldYield,dM=Vn.unstable_requestPaint,Tt=Vn.unstable_now,hM=Vn.unstable_getCurrentPriorityLevel,vp=Vn.unstable_ImmediatePriority,i0=Vn.unstable_UserBlockingPriority,Hu=Vn.unstable_NormalPriority,pM=Vn.unstable_LowPriority,r0=Vn.unstable_IdlePriority,Mc=null,Ri=null;function mM(n){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(Mc,n,void 0,(n.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:vM,_M=Math.log,gM=Math.LN2;function vM(n){return n>>>=0,n===0?32:31-(_M(n)/gM|0)|0}var Il=64,Nl=4194304;function ya(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ya(a):(s&=o,s!==0&&(i=ya(s)))}else o=t&~r,o!==0?i=ya(o):s!==0&&(i=ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-_i(e),r=1<<t,i|=n[t],e&=~r;return i}function xM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-_i(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=xM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Cd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function s0(){var n=Il;return Il<<=1,!(Il&4194240)&&(Il=64),n}function tf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function pl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-_i(e),n[e]=t}function SM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-_i(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function xp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-_i(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Qe=0;function o0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var a0,yp,l0,u0,c0,Rd=!1,Ul=[],Ar=null,Cr=null,Rr=null,Va=new Map,Ha=new Map,gr=[],MM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function e_(n,e){switch(n){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function ra(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_l(e),e!==null&&yp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function EM(n,e,t,i,r){switch(e){case"focusin":return Ar=ra(Ar,n,e,t,i,r),!0;case"dragenter":return Cr=ra(Cr,n,e,t,i,r),!0;case"mouseover":return Rr=ra(Rr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Va.set(s,ra(Va.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,ra(Ha.get(s)||null,n,e,t,i,r)),!0}return!1}function f0(n){var e=ps(n.target);if(e!==null){var t=Us(e);if(t!==null){if(e=t.tag,e===13){if(e=Jv(t),e!==null){n.blockedOn=e,c0(n.priority,function(){l0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Pd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ed=i,t.target.dispatchEvent(i),Ed=null}else return e=_l(t),e!==null&&yp(e),n.blockedOn=t,!1;e.shift()}return!0}function t_(n,e,t){xu(n)&&t.delete(e)}function TM(){Rd=!1,Ar!==null&&xu(Ar)&&(Ar=null),Cr!==null&&xu(Cr)&&(Cr=null),Rr!==null&&xu(Rr)&&(Rr=null),Va.forEach(t_),Ha.forEach(t_)}function sa(n,e){n.blockedOn===e&&(n.blockedOn=null,Rd||(Rd=!0,Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority,TM)))}function Ga(n){function e(r){return sa(r,n)}if(0<Ul.length){sa(Ul[0],n);for(var t=1;t<Ul.length;t++){var i=Ul[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ar!==null&&sa(Ar,n),Cr!==null&&sa(Cr,n),Rr!==null&&sa(Rr,n),Va.forEach(e),Ha.forEach(e),t=0;t<gr.length;t++)i=gr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<gr.length&&(t=gr[0],t.blockedOn===null);)f0(t),t.blockedOn===null&&gr.shift()}var Mo=sr.ReactCurrentBatchConfig,Wu=!0;function wM(n,e,t,i){var r=Qe,s=Mo.transition;Mo.transition=null;try{Qe=1,Sp(n,e,t,i)}finally{Qe=r,Mo.transition=s}}function AM(n,e,t,i){var r=Qe,s=Mo.transition;Mo.transition=null;try{Qe=4,Sp(n,e,t,i)}finally{Qe=r,Mo.transition=s}}function Sp(n,e,t,i){if(Wu){var r=Pd(n,e,t,i);if(r===null)df(n,e,i,Xu,t),e_(n,i);else if(EM(r,n,e,t,i))i.stopPropagation();else if(e_(n,i),e&4&&-1<MM.indexOf(n)){for(;r!==null;){var s=_l(r);if(s!==null&&a0(s),s=Pd(n,e,t,i),s===null&&df(n,e,i,Xu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else df(n,e,i,null,t)}}var Xu=null;function Pd(n,e,t,i){if(Xu=null,n=gp(i),n=ps(n),n!==null)if(e=Us(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Jv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Xu=n,null}function d0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hM()){case vp:return 1;case i0:return 4;case Hu:case pM:return 16;case r0:return 536870912;default:return 16}default:return 16}}var yr=null,Mp=null,yu=null;function h0(){if(yu)return yu;var n,e=Mp,t=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return yu=r.slice(n,1<i?1-i:void 0)}function Su(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ol(){return!0}function n_(){return!1}function Xn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ol:n_,this.isPropagationStopped=n_,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ep=Xn(Qo),ml=vt({},Qo,{view:0,detail:0}),CM=Xn(ml),nf,rf,oa,Ec=vt({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oa&&(oa&&n.type==="mousemove"?(nf=n.screenX-oa.screenX,rf=n.screenY-oa.screenY):rf=nf=0,oa=n),nf)},movementY:function(n){return"movementY"in n?n.movementY:rf}}),i_=Xn(Ec),RM=vt({},Ec,{dataTransfer:0}),PM=Xn(RM),bM=vt({},ml,{relatedTarget:0}),sf=Xn(bM),LM=vt({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),DM=Xn(LM),IM=vt({},Qo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),NM=Xn(IM),UM=vt({},Qo,{data:0}),r_=Xn(UM),OM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=kM[n])?!!e[n]:!1}function Tp(){return BM}var zM=vt({},ml,{key:function(n){if(n.key){var e=OM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Su(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?FM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tp,charCode:function(n){return n.type==="keypress"?Su(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Su(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),VM=Xn(zM),HM=vt({},Ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),s_=Xn(HM),GM=vt({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tp}),WM=Xn(GM),XM=vt({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),jM=Xn(XM),YM=vt({},Ec,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$M=Xn(YM),qM=[9,13,27,32],wp=Ki&&"CompositionEvent"in window,Ca=null;Ki&&"documentMode"in document&&(Ca=document.documentMode);var KM=Ki&&"TextEvent"in window&&!Ca,p0=Ki&&(!wp||Ca&&8<Ca&&11>=Ca),o_=" ",a_=!1;function m0(n,e){switch(n){case"keyup":return qM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var so=!1;function ZM(n,e){switch(n){case"compositionend":return _0(e);case"keypress":return e.which!==32?null:(a_=!0,o_);case"textInput":return n=e.data,n===o_&&a_?null:n;default:return null}}function QM(n,e){if(so)return n==="compositionend"||!wp&&m0(n,e)?(n=h0(),yu=Mp=yr=null,so=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p0&&e.locale!=="ko"?null:e.data;default:return null}}var JM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!JM[n.type]:e==="textarea"}function g0(n,e,t,i){$v(i),e=ju(e,"onChange"),0<e.length&&(t=new Ep("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ra=null,Wa=null;function eE(n){R0(n,0)}function Tc(n){var e=lo(n);if(Vv(e))return n}function tE(n,e){if(n==="change")return e}var v0=!1;if(Ki){var of;if(Ki){var af="oninput"in document;if(!af){var u_=document.createElement("div");u_.setAttribute("oninput","return;"),af=typeof u_.oninput=="function"}of=af}else of=!1;v0=of&&(!document.documentMode||9<document.documentMode)}function c_(){Ra&&(Ra.detachEvent("onpropertychange",x0),Wa=Ra=null)}function x0(n){if(n.propertyName==="value"&&Tc(Wa)){var e=[];g0(e,Wa,n,gp(n)),Qv(eE,e)}}function nE(n,e,t){n==="focusin"?(c_(),Ra=e,Wa=t,Ra.attachEvent("onpropertychange",x0)):n==="focusout"&&c_()}function iE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tc(Wa)}function rE(n,e){if(n==="click")return Tc(e)}function sE(n,e){if(n==="input"||n==="change")return Tc(e)}function oE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var vi=typeof Object.is=="function"?Object.is:oE;function Xa(n,e){if(vi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!fd.call(e,r)||!vi(n[r],e[r]))return!1}return!0}function f_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function d_(n,e){var t=f_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=f_(t)}}function y0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?y0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function S0(){for(var n=window,e=Bu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Bu(n.document)}return e}function Ap(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function aE(n){var e=S0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&y0(t.ownerDocument.documentElement,t)){if(i!==null&&Ap(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=d_(t,s);var o=d_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lE=Ki&&"documentMode"in document&&11>=document.documentMode,oo=null,bd=null,Pa=null,Ld=!1;function h_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ld||oo==null||oo!==Bu(i)||(i=oo,"selectionStart"in i&&Ap(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&Xa(Pa,i)||(Pa=i,i=ju(bd,"onSelect"),0<i.length&&(e=new Ep("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=oo)))}function Fl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ao={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},lf={},M0={};Ki&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function wc(n){if(lf[n])return lf[n];if(!ao[n])return n;var e=ao[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in M0)return lf[n]=e[t];return n}var E0=wc("animationend"),T0=wc("animationiteration"),w0=wc("animationstart"),A0=wc("transitionend"),C0=new Map,p_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(n,e){C0.set(n,e),Ns(e,[n])}for(var uf=0;uf<p_.length;uf++){var cf=p_[uf],uE=cf.toLowerCase(),cE=cf[0].toUpperCase()+cf.slice(1);Xr(uE,"on"+cE)}Xr(E0,"onAnimationEnd");Xr(T0,"onAnimationIteration");Xr(w0,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(A0,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function m_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,uM(i,e,void 0,n),n.currentTarget=null}function R0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;m_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;m_(r,a,u),s=l}}}if(Vu)throw n=Ad,Vu=!1,Ad=null,n}function lt(n,e){var t=e[Od];t===void 0&&(t=e[Od]=new Set);var i=n+"__bubble";t.has(i)||(P0(e,n,2,!1),t.add(i))}function ff(n,e,t){var i=0;e&&(i|=4),P0(t,n,i,e)}var kl="_reactListening"+Math.random().toString(36).slice(2);function ja(n){if(!n[kl]){n[kl]=!0,Ov.forEach(function(t){t!=="selectionchange"&&(fE.has(t)||ff(t,!1,n),ff(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[kl]||(e[kl]=!0,ff("selectionchange",!1,e))}}function P0(n,e,t,i){switch(d0(e)){case 1:var r=wM;break;case 4:r=AM;break;default:r=Sp}t=r.bind(null,e,t,n),r=void 0,!wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function df(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ps(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Qv(function(){var u=s,c=gp(t),f=[];e:{var h=C0.get(n);if(h!==void 0){var m=Ep,v=n;switch(n){case"keypress":if(Su(t)===0)break e;case"keydown":case"keyup":m=VM;break;case"focusin":v="focus",m=sf;break;case"focusout":v="blur",m=sf;break;case"beforeblur":case"afterblur":m=sf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=i_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=PM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=WM;break;case E0:case T0:case w0:m=DM;break;case A0:m=jM;break;case"scroll":m=CM;break;case"wheel":m=$M;break;case"copy":case"cut":case"paste":m=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=s_}var _=(e&4)!==0,p=!_&&n==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=za(g,d),S!=null&&_.push(Ya(g,S,x)))),p)break;g=g.return}0<_.length&&(h=new m(h,v,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",h&&t!==Ed&&(v=t.relatedTarget||t.fromElement)&&(ps(v)||v[Zi]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=t.relatedTarget||t.toElement,m=u,v=v?ps(v):null,v!==null&&(p=Us(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=i_,S="onMouseLeave",d="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=s_,S="onPointerLeave",d="onPointerEnter",g="pointer"),p=m==null?h:lo(m),x=v==null?h:lo(v),h=new _(S,g+"leave",m,t,c),h.target=p,h.relatedTarget=x,S=null,ps(c)===u&&(_=new _(d,g+"enter",v,t,c),_.target=x,_.relatedTarget=p,S=_),p=S,m&&v)t:{for(_=m,d=v,g=0,x=_;x;x=Vs(x))g++;for(x=0,S=d;S;S=Vs(S))x++;for(;0<g-x;)_=Vs(_),g--;for(;0<x-g;)d=Vs(d),x--;for(;g--;){if(_===d||d!==null&&_===d.alternate)break t;_=Vs(_),d=Vs(d)}_=null}else _=null;m!==null&&__(f,h,m,_,!1),v!==null&&p!==null&&__(f,p,v,_,!0)}}e:{if(h=u?lo(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=tE;else if(l_(h))if(v0)A=sE;else{A=iE;var C=nE}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=rE);if(A&&(A=A(n,u))){g0(f,A,t,c);break e}C&&C(n,h,u),n==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&vd(h,"number",h.value)}switch(C=u?lo(u):window,n){case"focusin":(l_(C)||C.contentEditable==="true")&&(oo=C,bd=u,Pa=null);break;case"focusout":Pa=bd=oo=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,h_(f,t,c);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":h_(f,t,c)}var M;if(wp)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else so?m0(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(p0&&t.locale!=="ko"&&(so||R!=="onCompositionStart"?R==="onCompositionEnd"&&so&&(M=h0()):(yr=c,Mp="value"in yr?yr.value:yr.textContent,so=!0)),C=ju(u,R),0<C.length&&(R=new r_(R,n,null,t,c),f.push({event:R,listeners:C}),M?R.data=M:(M=_0(t),M!==null&&(R.data=M)))),(M=KM?ZM(n,t):QM(n,t))&&(u=ju(u,"onBeforeInput"),0<u.length&&(c=new r_("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}R0(f,e)})}function Ya(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ju(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(n,t),s!=null&&i.unshift(Ya(n,s,r)),s=za(n,e),s!=null&&i.push(Ya(n,s,r))),n=n.return}return i}function Vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function __(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=za(t,s),l!=null&&o.unshift(Ya(t,l,a))):r||(l=za(t,s),l!=null&&o.push(Ya(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var dE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function g_(n){return(typeof n=="string"?n:""+n).replace(dE,`
`).replace(hE,"")}function Bl(n,e,t){if(e=g_(e),g_(n)!==e&&t)throw Error(ne(425))}function Yu(){}var Dd=null,Id=null;function Nd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,pE=typeof clearTimeout=="function"?clearTimeout:void 0,v_=typeof Promise=="function"?Promise:void 0,mE=typeof queueMicrotask=="function"?queueMicrotask:typeof v_<"u"?function(n){return v_.resolve(null).then(n).catch(_E)}:Ud;function _E(n){setTimeout(function(){throw n})}function hf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ga(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ga(e)}function Pr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function x_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Jo,$a="__reactProps$"+Jo,Zi="__reactContainer$"+Jo,Od="__reactEvents$"+Jo,gE="__reactListeners$"+Jo,vE="__reactHandles$"+Jo;function ps(n){var e=n[Ti];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Zi]||t[Ti]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=x_(n);n!==null;){if(t=n[Ti])return t;n=x_(n)}return e}n=t,t=n.parentNode}return null}function _l(n){return n=n[Ti]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Ac(n){return n[$a]||null}var Fd=[],uo=-1;function jr(n){return{current:n}}function ct(n){0>uo||(n.current=Fd[uo],Fd[uo]=null,uo--)}function st(n,e){uo++,Fd[uo]=n.current,n.current=e}var zr={},en=jr(zr),gn=jr(!1),Cs=zr;function Io(n,e){var t=n.type.contextTypes;if(!t)return zr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function $u(){ct(gn),ct(en)}function y_(n,e,t){if(en.current!==zr)throw Error(ne(168));st(en,e),st(gn,t)}function b0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,nM(n)||"Unknown",r));return vt({},t,i)}function qu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,Cs=en.current,st(en,n),st(gn,gn.current),!0}function S_(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=b0(n,e,Cs),i.__reactInternalMemoizedMergedChildContext=n,ct(gn),ct(en),st(en,n)):ct(gn),st(gn,t)}var Hi=null,Cc=!1,pf=!1;function L0(n){Hi===null?Hi=[n]:Hi.push(n)}function xE(n){Cc=!0,L0(n)}function Yr(){if(!pf&&Hi!==null){pf=!0;var n=0,e=Qe;try{var t=Hi;for(Qe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hi=null,Cc=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(n+1)),n0(vp,Yr),r}finally{Qe=e,pf=!1}}return null}var co=[],fo=0,Ku=null,Zu=0,qn=[],Kn=0,Rs=null,Xi=1,ji="";function os(n,e){co[fo++]=Zu,co[fo++]=Ku,Ku=n,Zu=e}function D0(n,e,t){qn[Kn++]=Xi,qn[Kn++]=ji,qn[Kn++]=Rs,Rs=n;var i=Xi;n=ji;var r=32-_i(i)-1;i&=~(1<<r),t+=1;var s=32-_i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Xi=1<<32-_i(e)+r|t<<r|i,ji=s+n}else Xi=1<<s|t<<r|i,ji=n}function Cp(n){n.return!==null&&(os(n,1),D0(n,1,0))}function Rp(n){for(;n===Ku;)Ku=co[--fo],co[fo]=null,Zu=co[--fo],co[fo]=null;for(;n===Rs;)Rs=qn[--Kn],qn[Kn]=null,ji=qn[--Kn],qn[Kn]=null,Xi=qn[--Kn],qn[Kn]=null}var kn=null,Un=null,ft=!1,di=null;function I0(n,e){var t=Zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function M_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,kn=n,Un=Pr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,kn=n,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Rs!==null?{id:Xi,overflow:ji}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,kn=n,Un=null,!0):!1;default:return!1}}function kd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bd(n){if(ft){var e=Un;if(e){var t=e;if(!M_(n,e)){if(kd(n))throw Error(ne(418));e=Pr(t.nextSibling);var i=kn;e&&M_(n,e)?I0(i,t):(n.flags=n.flags&-4097|2,ft=!1,kn=n)}}else{if(kd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,ft=!1,kn=n}}}function E_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function zl(n){if(n!==kn)return!1;if(!ft)return E_(n),ft=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nd(n.type,n.memoizedProps)),e&&(e=Un)){if(kd(n))throw N0(),Error(ne(418));for(;e;)I0(n,e),e=Pr(e.nextSibling)}if(E_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Un=Pr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Un=null}}else Un=kn?Pr(n.stateNode.nextSibling):null;return!0}function N0(){for(var n=Un;n;)n=Pr(n.nextSibling)}function No(){Un=kn=null,ft=!1}function Pp(n){di===null?di=[n]:di.push(n)}var yE=sr.ReactCurrentBatchConfig;function aa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Vl(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function T_(n){var e=n._init;return e(n._payload)}function U0(n){function e(d,g){if(n){var x=d.deletions;x===null?(d.deletions=[g],d.flags|=16):x.push(g)}}function t(d,g){if(!n)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Ir(d,g),d.index=0,d.sibling=null,d}function s(d,g,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<g?(d.flags|=2,g):x):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,g,x,S){return g===null||g.tag!==6?(g=Sf(x,d.mode,S),g.return=d,g):(g=r(g,x),g.return=d,g)}function l(d,g,x,S){var A=x.type;return A===ro?c(d,g,x.props.children,S,x.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mr&&T_(A)===g.type)?(S=r(g,x.props),S.ref=aa(d,g,x),S.return=d,S):(S=Ru(x.type,x.key,x.props,null,d.mode,S),S.ref=aa(d,g,x),S.return=d,S)}function u(d,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Mf(x,d.mode,S),g.return=d,g):(g=r(g,x.children||[]),g.return=d,g)}function c(d,g,x,S,A){return g===null||g.tag!==7?(g=Ss(x,d.mode,S,A),g.return=d,g):(g=r(g,x),g.return=d,g)}function f(d,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Sf(""+g,d.mode,x),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bl:return x=Ru(g.type,g.key,g.props,null,d.mode,x),x.ref=aa(d,null,g),x.return=d,x;case io:return g=Mf(g,d.mode,x),g.return=d,g;case mr:var S=g._init;return f(d,S(g._payload),x)}if(xa(g)||na(g))return g=Ss(g,d.mode,x,null),g.return=d,g;Vl(d,g)}return null}function h(d,g,x,S){var A=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(d,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bl:return x.key===A?l(d,g,x,S):null;case io:return x.key===A?u(d,g,x,S):null;case mr:return A=x._init,h(d,g,A(x._payload),S)}if(xa(x)||na(x))return A!==null?null:c(d,g,x,S,null);Vl(d,x)}return null}function m(d,g,x,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(g,d,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bl:return d=d.get(S.key===null?x:S.key)||null,l(g,d,S,A);case io:return d=d.get(S.key===null?x:S.key)||null,u(g,d,S,A);case mr:var C=S._init;return m(d,g,x,C(S._payload),A)}if(xa(S)||na(S))return d=d.get(x)||null,c(g,d,S,A,null);Vl(g,S)}return null}function v(d,g,x,S){for(var A=null,C=null,M=g,R=g=0,D=null;M!==null&&R<x.length;R++){M.index>R?(D=M,M=null):D=M.sibling;var y=h(d,M,x[R],S);if(y===null){M===null&&(M=D);break}n&&M&&y.alternate===null&&e(d,M),g=s(y,g,R),C===null?A=y:C.sibling=y,C=y,M=D}if(R===x.length)return t(d,M),ft&&os(d,R),A;if(M===null){for(;R<x.length;R++)M=f(d,x[R],S),M!==null&&(g=s(M,g,R),C===null?A=M:C.sibling=M,C=M);return ft&&os(d,R),A}for(M=i(d,M);R<x.length;R++)D=m(M,d,R,x[R],S),D!==null&&(n&&D.alternate!==null&&M.delete(D.key===null?R:D.key),g=s(D,g,R),C===null?A=D:C.sibling=D,C=D);return n&&M.forEach(function(T){return e(d,T)}),ft&&os(d,R),A}function _(d,g,x,S){var A=na(x);if(typeof A!="function")throw Error(ne(150));if(x=A.call(x),x==null)throw Error(ne(151));for(var C=A=null,M=g,R=g=0,D=null,y=x.next();M!==null&&!y.done;R++,y=x.next()){M.index>R?(D=M,M=null):D=M.sibling;var T=h(d,M,y.value,S);if(T===null){M===null&&(M=D);break}n&&M&&T.alternate===null&&e(d,M),g=s(T,g,R),C===null?A=T:C.sibling=T,C=T,M=D}if(y.done)return t(d,M),ft&&os(d,R),A;if(M===null){for(;!y.done;R++,y=x.next())y=f(d,y.value,S),y!==null&&(g=s(y,g,R),C===null?A=y:C.sibling=y,C=y);return ft&&os(d,R),A}for(M=i(d,M);!y.done;R++,y=x.next())y=m(M,d,R,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?R:y.key),g=s(y,g,R),C===null?A=y:C.sibling=y,C=y);return n&&M.forEach(function(F){return e(d,F)}),ft&&os(d,R),A}function p(d,g,x,S){if(typeof x=="object"&&x!==null&&x.type===ro&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case bl:e:{for(var A=x.key,C=g;C!==null;){if(C.key===A){if(A=x.type,A===ro){if(C.tag===7){t(d,C.sibling),g=r(C,x.props.children),g.return=d,d=g;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mr&&T_(A)===C.type){t(d,C.sibling),g=r(C,x.props),g.ref=aa(d,C,x),g.return=d,d=g;break e}t(d,C);break}else e(d,C);C=C.sibling}x.type===ro?(g=Ss(x.props.children,d.mode,S,x.key),g.return=d,d=g):(S=Ru(x.type,x.key,x.props,null,d.mode,S),S.ref=aa(d,g,x),S.return=d,d=S)}return o(d);case io:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(d,g.sibling),g=r(g,x.children||[]),g.return=d,d=g;break e}else{t(d,g);break}else e(d,g);g=g.sibling}g=Mf(x,d.mode,S),g.return=d,d=g}return o(d);case mr:return C=x._init,p(d,g,C(x._payload),S)}if(xa(x))return v(d,g,x,S);if(na(x))return _(d,g,x,S);Vl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(d,g.sibling),g=r(g,x),g.return=d,d=g):(t(d,g),g=Sf(x,d.mode,S),g.return=d,d=g),o(d)):t(d,g)}return p}var Uo=U0(!0),O0=U0(!1),Qu=jr(null),Ju=null,ho=null,bp=null;function Lp(){bp=ho=Ju=null}function Dp(n){var e=Qu.current;ct(Qu),n._currentValue=e}function zd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Eo(n,e){Ju=n,bp=ho=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(_n=!0),n.firstContext=null)}function ni(n){var e=n._currentValue;if(bp!==n)if(n={context:n,memoizedValue:e,next:null},ho===null){if(Ju===null)throw Error(ne(308));ho=n,Ju.dependencies={lanes:0,firstContext:n}}else ho=ho.next=n;return e}var ms=null;function Ip(n){ms===null?ms=[n]:ms.push(n)}function F0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Ip(e)):(t.next=r.next,r.next=t),e.interleaved=t,Qi(n,i)}function Qi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var _r=!1;function Np(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function br(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(n,t)}return r=i.interleaved,r===null?(e.next=e,Ip(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(n,t)}function Mu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xp(n,t)}}function w_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ec(n,e,t,i){var r=n.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,_=a;switch(h=e,m=t,_.tag){case 1:if(v=_.payload,typeof v=="function"){f=v.call(m,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,h=typeof v=="function"?v.call(m,f,h):v,h==null)break e;f=vt({},f,h);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);bs|=o,n.lanes=o,n.memoizedState=f}}function A_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var gl={},Pi=jr(gl),qa=jr(gl),Ka=jr(gl);function _s(n){if(n===gl)throw Error(ne(174));return n}function Up(n,e){switch(st(Ka,e),st(qa,n),st(Pi,gl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=yd(e,n)}ct(Pi),st(Pi,e)}function Oo(){ct(Pi),ct(qa),ct(Ka)}function B0(n){_s(Ka.current);var e=_s(Pi.current),t=yd(e,n.type);e!==t&&(st(qa,n),st(Pi,t))}function Op(n){qa.current===n&&(ct(Pi),ct(qa))}var pt=jr(0);function tc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mf=[];function Fp(){for(var n=0;n<mf.length;n++)mf[n]._workInProgressVersionPrimary=null;mf.length=0}var Eu=sr.ReactCurrentDispatcher,_f=sr.ReactCurrentBatchConfig,Ps=0,gt=null,Dt=null,kt=null,nc=!1,ba=!1,Za=0,SE=0;function jt(){throw Error(ne(321))}function kp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!vi(n[t],e[t]))return!1;return!0}function Bp(n,e,t,i,r,s){if(Ps=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Eu.current=n===null||n.memoizedState===null?wE:AE,n=t(i,r),ba){s=0;do{if(ba=!1,Za=0,25<=s)throw Error(ne(301));s+=1,kt=Dt=null,e.updateQueue=null,Eu.current=CE,n=t(i,r)}while(ba)}if(Eu.current=ic,e=Dt!==null&&Dt.next!==null,Ps=0,kt=Dt=gt=null,nc=!1,e)throw Error(ne(300));return n}function zp(){var n=Za!==0;return Za=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?gt.memoizedState=kt=n:kt=kt.next=n,kt}function ii(){if(Dt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=Dt.next;var e=kt===null?gt.memoizedState:kt.next;if(e!==null)kt=e,Dt=n;else{if(n===null)throw Error(ne(310));Dt=n,n={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},kt===null?gt.memoizedState=kt=n:kt=kt.next=n}return kt}function Qa(n,e){return typeof e=="function"?e(n):e}function gf(n){var e=ii(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Dt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ps&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=c,bs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,vi(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,gt.lanes|=s,bs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function vf(n){var e=ii(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);vi(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function z0(){}function V0(n,e){var t=gt,i=ii(),r=e(),s=!vi(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Vp(W0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(t.flags|=2048,Ja(9,G0.bind(null,t,i,r,e),void 0,null),Bt===null)throw Error(ne(349));Ps&30||H0(t,e,r)}return r}function H0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function G0(n,e,t,i){e.value=t,e.getSnapshot=i,X0(e)&&j0(n)}function W0(n,e,t){return t(function(){X0(e)&&j0(n)})}function X0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!vi(n,t)}catch{return!0}}function j0(n){var e=Qi(n,1);e!==null&&gi(e,n,1,-1)}function C_(n){var e=yi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:n},e.queue=n,n=n.dispatch=TE.bind(null,gt,n),[e.memoizedState,n]}function Ja(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Y0(){return ii().memoizedState}function Tu(n,e,t,i){var r=yi();gt.flags|=n,r.memoizedState=Ja(1|e,t,void 0,i===void 0?null:i)}function Rc(n,e,t,i){var r=ii();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&kp(i,o.deps)){r.memoizedState=Ja(e,t,s,i);return}}gt.flags|=n,r.memoizedState=Ja(1|e,t,s,i)}function R_(n,e){return Tu(8390656,8,n,e)}function Vp(n,e){return Rc(2048,8,n,e)}function $0(n,e){return Rc(4,2,n,e)}function q0(n,e){return Rc(4,4,n,e)}function K0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Z0(n,e,t){return t=t!=null?t.concat([n]):null,Rc(4,4,K0.bind(null,e,n),t)}function Hp(){}function Q0(n,e){var t=ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function J0(n,e){var t=ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ex(n,e,t){return Ps&21?(vi(t,e)||(t=s0(),gt.lanes|=t,bs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,_n=!0),n.memoizedState=t)}function ME(n,e){var t=Qe;Qe=t!==0&&4>t?t:4,n(!0);var i=_f.transition;_f.transition={};try{n(!1),e()}finally{Qe=t,_f.transition=i}}function tx(){return ii().memoizedState}function EE(n,e,t){var i=Dr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},nx(n))ix(e,t);else if(t=F0(n,e,t,i),t!==null){var r=rn();gi(t,n,i,r),rx(t,e,i)}}function TE(n,e,t){var i=Dr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(nx(n))ix(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,vi(a,o)){var l=e.interleaved;l===null?(r.next=r,Ip(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=F0(n,e,r,i),t!==null&&(r=rn(),gi(t,n,i,r),rx(t,e,i))}}function nx(n){var e=n.alternate;return n===gt||e!==null&&e===gt}function ix(n,e){ba=nc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function rx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xp(n,t)}}var ic={readContext:ni,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},wE={readContext:ni,useCallback:function(n,e){return yi().memoizedState=[n,e===void 0?null:e],n},useContext:ni,useEffect:R_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Tu(4194308,4,K0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Tu(4194308,4,n,e)},useInsertionEffect:function(n,e){return Tu(4,2,n,e)},useMemo:function(n,e){var t=yi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=yi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=EE.bind(null,gt,n),[i.memoizedState,n]},useRef:function(n){var e=yi();return n={current:n},e.memoizedState=n},useState:C_,useDebugValue:Hp,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=C_(!1),e=n[0];return n=ME.bind(null,n[1]),yi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=gt,r=yi();if(ft){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Bt===null)throw Error(ne(349));Ps&30||H0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,R_(W0.bind(null,i,s,n),[n]),i.flags|=2048,Ja(9,G0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=yi(),e=Bt.identifierPrefix;if(ft){var t=ji,i=Xi;t=(i&~(1<<32-_i(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Za++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=SE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},AE={readContext:ni,useCallback:Q0,useContext:ni,useEffect:Vp,useImperativeHandle:Z0,useInsertionEffect:$0,useLayoutEffect:q0,useMemo:J0,useReducer:gf,useRef:Y0,useState:function(){return gf(Qa)},useDebugValue:Hp,useDeferredValue:function(n){var e=ii();return ex(e,Dt.memoizedState,n)},useTransition:function(){var n=gf(Qa)[0],e=ii().memoizedState;return[n,e]},useMutableSource:z0,useSyncExternalStore:V0,useId:tx,unstable_isNewReconciler:!1},CE={readContext:ni,useCallback:Q0,useContext:ni,useEffect:Vp,useImperativeHandle:Z0,useInsertionEffect:$0,useLayoutEffect:q0,useMemo:J0,useReducer:vf,useRef:Y0,useState:function(){return vf(Qa)},useDebugValue:Hp,useDeferredValue:function(n){var e=ii();return Dt===null?e.memoizedState=n:ex(e,Dt.memoizedState,n)},useTransition:function(){var n=vf(Qa)[0],e=ii().memoizedState;return[n,e]},useMutableSource:z0,useSyncExternalStore:V0,useId:tx,unstable_isNewReconciler:!1};function ui(n,e){if(n&&n.defaultProps){e=vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Vd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Pc={isMounted:function(n){return(n=n._reactInternals)?Us(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=rn(),r=Dr(n),s=qi(i,r);s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(gi(e,n,r,i),Mu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=rn(),r=Dr(n),s=qi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(gi(e,n,r,i),Mu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=rn(),i=Dr(n),r=qi(t,i);r.tag=2,e!=null&&(r.callback=e),e=br(n,r,i),e!==null&&(gi(e,n,i,t),Mu(e,n,i))}};function P_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xa(t,i)||!Xa(r,s):!0}function sx(n,e,t){var i=!1,r=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=ni(s):(r=vn(e)?Cs:en.current,i=e.contextTypes,s=(i=i!=null)?Io(n,r):zr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function b_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Pc.enqueueReplaceState(e,e.state,null)}function Hd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Np(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ni(s):(s=vn(e)?Cs:en.current,r.context=Io(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),ec(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Fo(n,e){try{var t="",i=e;do t+=tM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function xf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Gd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var RE=typeof WeakMap=="function"?WeakMap:Map;function ox(n,e,t){t=qi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){sc||(sc=!0,Jd=i),Gd(n,e)},t}function ax(n,e,t){t=qi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Gd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Gd(n,e),typeof i!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function L_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new RE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=HE.bind(null,n,e,t),e.then(n,n))}function D_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function I_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qi(-1,1),e.tag=2,br(t,e,1))),t.lanes|=1),n)}var PE=sr.ReactCurrentOwner,_n=!1;function nn(n,e,t,i){e.child=n===null?O0(e,null,t,i):Uo(e,n.child,t,i)}function N_(n,e,t,i,r){t=t.render;var s=e.ref;return Eo(e,r),i=Bp(n,e,t,i,s,r),t=zp(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(ft&&t&&Cp(e),e.flags|=1,nn(n,e,i,r),e.child)}function U_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Kp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,lx(n,e,s,i,r)):(n=Ru(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Xa,t(o,i)&&n.ref===e.ref)return Ji(n,e,r)}return e.flags|=1,n=Ir(s,i),n.ref=e.ref,n.return=e,e.child=n}function lx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Xa(s,i)&&n.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(_n=!0);else return e.lanes=n.lanes,Ji(n,e,r)}return Wd(n,e,t,i,r)}function ux(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(mo,Ln),Ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,st(mo,Ln),Ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,st(mo,Ln),Ln|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,st(mo,Ln),Ln|=i;return nn(n,e,r,t),e.child}function cx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Wd(n,e,t,i,r){var s=vn(t)?Cs:en.current;return s=Io(e,s),Eo(e,r),t=Bp(n,e,t,i,s,r),i=zp(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(ft&&i&&Cp(e),e.flags|=1,nn(n,e,t,r),e.child)}function O_(n,e,t,i,r){if(vn(t)){var s=!0;qu(e)}else s=!1;if(Eo(e,r),e.stateNode===null)wu(n,e),sx(e,t,i),Hd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ni(u):(u=vn(t)?Cs:en.current,u=Io(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&b_(e,o,i,u),_r=!1;var h=e.memoizedState;o.state=h,ec(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||_r?(typeof c=="function"&&(Vd(e,t,c,i),l=e.memoizedState),(a=_r||P_(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,k0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ui(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ni(l):(l=vn(t)?Cs:en.current,l=Io(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&b_(e,o,i,l),_r=!1,h=e.memoizedState,o.state=h,ec(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||gn.current||_r?(typeof m=="function"&&(Vd(e,t,m,i),v=e.memoizedState),(u=_r||P_(e,t,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Xd(n,e,t,i,s,r)}function Xd(n,e,t,i,r,s){cx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&S_(e,t,!1),Ji(n,e,s);i=e.stateNode,PE.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Uo(e,n.child,null,s),e.child=Uo(e,null,a,s)):nn(n,e,a,s),e.memoizedState=i.state,r&&S_(e,t,!0),e.child}function fx(n){var e=n.stateNode;e.pendingContext?y_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&y_(n,e.context,!1),Up(n,e.containerInfo)}function F_(n,e,t,i,r){return No(),Pp(r),e.flags|=256,nn(n,e,t,i),e.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function Yd(n){return{baseLanes:n,cachePool:null,transitions:null}}function dx(n,e,t){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),st(pt,r&1),n===null)return Bd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dc(o,i,0,null),n=Ss(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Yd(t),e.memoizedState=jd,n):Gp(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bE(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ir(a,s):(s=Ss(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Yd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=jd,i}return s=n.child,n=s.sibling,i=Ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Gp(n,e){return e=Dc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Hl(n,e,t,i){return i!==null&&Pp(i),Uo(e,n.child,null,t),n=Gp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function bE(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=xf(Error(ne(422))),Hl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dc({mode:"visible",children:i.children},r,0,null),s=Ss(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Uo(e,n.child,null,o),e.child.memoizedState=Yd(o),e.memoizedState=jd,s);if(!(e.mode&1))return Hl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=xf(s,i,void 0),Hl(n,e,o,i)}if(a=(o&n.childLanes)!==0,_n||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(n,r),gi(i,n,r,-1))}return qp(),i=xf(Error(ne(421))),Hl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=GE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Un=Pr(r.nextSibling),kn=e,ft=!0,di=null,n!==null&&(qn[Kn++]=Xi,qn[Kn++]=ji,qn[Kn++]=Rs,Xi=n.id,ji=n.overflow,Rs=e),e=Gp(e,i.children),e.flags|=4096,e)}function k_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),zd(n.return,e,t)}function yf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function hx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(n,e,i.children,t),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&k_(n,t,e);else if(n.tag===19)k_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&tc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),yf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&tc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}yf(e,!0,t,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ji(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),bs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Ir(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ir(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function LE(n,e,t){switch(e.tag){case 3:fx(e),No();break;case 5:B0(e);break;case 1:vn(e.type)&&qu(e);break;case 4:Up(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Qu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):t&e.child.childLanes?dx(n,e,t):(st(pt,pt.current&1),n=Ji(n,e,t),n!==null?n.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return hx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,ux(n,e,t)}return Ji(n,e,t)}var px,$d,mx,_x;px=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$d=function(){};mx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,_s(Pi.current);var s=null;switch(t){case"input":r=_d(n,r),i=_d(n,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=xd(n,r),i=xd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Yu)}Sd(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ka.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_x=function(n,e,t,i){t!==i&&(e.flags|=4)};function la(n,e){if(!ft)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function DE(n,e,t){var i=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return vn(e.type)&&$u(),Yt(e),null;case 3:return i=e.stateNode,Oo(),ct(gn),ct(en),Fp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(zl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(nh(di),di=null))),$d(n,e),Yt(e),null;case 5:Op(e);var r=_s(Ka.current);if(t=e.type,n!==null&&e.stateNode!=null)mx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Yt(e),null}if(n=_s(Pi.current),zl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[$a]=s,n=(e.mode&1)!==0,t){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Sa.length;r++)lt(Sa[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Ym(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":qm(i,s),lt("invalid",i)}Sd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bl(i.textContent,a,n),r=["children",""+a]):ka.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(t){case"input":Ll(i),$m(i,s,!0);break;case"textarea":Ll(i),Km(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Wv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ti]=e,n[$a]=i,px(n,e,!1,!1),e.stateNode=n;e:{switch(o=Md(t,i),t){case"dialog":lt("cancel",n),lt("close",n),r=i;break;case"iframe":case"object":case"embed":lt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Sa.length;r++)lt(Sa[r],n);r=i;break;case"source":lt("error",n),r=i;break;case"img":case"image":case"link":lt("error",n),lt("load",n),r=i;break;case"details":lt("toggle",n),r=i;break;case"input":Ym(n,i),r=_d(n,i),lt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),lt("invalid",n);break;case"textarea":qm(n,i),r=xd(n,i),lt("invalid",n);break;default:r=i}Sd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ba(n,l):typeof l=="number"&&Ba(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",n):l!=null&&hp(n,s,l,o))}switch(t){case"input":Ll(n),$m(n,i,!1);break;case"textarea":Ll(n),Km(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Br(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?xo(n,!!i.multiple,s,!1):i.defaultValue!=null&&xo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Yu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)_x(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=_s(Ka.current),_s(Pi.current),zl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==t)&&(n=kn,n!==null))switch(n.tag){case 3:Bl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Bl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return Yt(e),null;case 13:if(ct(pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ft&&Un!==null&&e.mode&1&&!(e.flags&128))N0(),No(),e.flags|=98560,s=!1;else if(s=zl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Ti]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else di!==null&&(nh(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||pt.current&1?It===0&&(It=3):qp())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Oo(),$d(n,e),n===null&&ja(e.stateNode.containerInfo),Yt(e),null;case 10:return Dp(e.type._context),Yt(e),null;case 17:return vn(e.type)&&$u(),Yt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)la(s,!1);else{if(It!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=tc(n),o!==null){for(e.flags|=128,la(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return st(pt,pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Tt()>ko&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(n=tc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Yt(e),null}else 2*Tt()-s.renderingStartTime>ko&&t!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,t=pt.current,st(pt,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return $p(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function IE(n,e){switch(Rp(e),e.tag){case 1:return vn(e.type)&&$u(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Oo(),ct(gn),ct(en),Fp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Op(e),null;case 13:if(ct(pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));No()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ct(pt),null;case 4:return Oo(),null;case 10:return Dp(e.type._context),null;case 22:case 23:return $p(),null;case 24:return null;default:return null}}var Gl=!1,Zt=!1,NE=typeof WeakSet=="function"?WeakSet:Set,me=null;function po(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){yt(n,e,i)}else t.current=null}function qd(n,e,t){try{t()}catch(i){yt(n,e,i)}}var B_=!1;function UE(n,e){if(Dd=Wu,n=S0(),Ap(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Id={focusedElem:n,selectionRange:t},Wu=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,p=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:ui(e.type,_),p);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){yt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return v=B_,B_=!1,v}function La(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&qd(e,t,s)}r=r.next}while(r!==i)}}function bc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Kd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function gx(n){var e=n.alternate;e!==null&&(n.alternate=null,gx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ti],delete e[$a],delete e[Od],delete e[gE],delete e[vE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function vx(n){return n.tag===5||n.tag===3||n.tag===4}function z_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||vx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yu));else if(i!==4&&(n=n.child,n!==null))for(Zd(n,e,t),n=n.sibling;n!==null;)Zd(n,e,t),n=n.sibling}function Qd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Qd(n,e,t),n=n.sibling;n!==null;)Qd(n,e,t),n=n.sibling}var Ht=null,ci=!1;function ar(n,e,t){for(t=t.child;t!==null;)xx(n,e,t),t=t.sibling}function xx(n,e,t){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(Mc,t)}catch{}switch(t.tag){case 5:Zt||po(t,e);case 6:var i=Ht,r=ci;Ht=null,ar(n,e,t),Ht=i,ci=r,Ht!==null&&(ci?(n=Ht,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ht.removeChild(t.stateNode));break;case 18:Ht!==null&&(ci?(n=Ht,t=t.stateNode,n.nodeType===8?hf(n.parentNode,t):n.nodeType===1&&hf(n,t),Ga(n)):hf(Ht,t.stateNode));break;case 4:i=Ht,r=ci,Ht=t.stateNode.containerInfo,ci=!0,ar(n,e,t),Ht=i,ci=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qd(t,e,o),r=r.next}while(r!==i)}ar(n,e,t);break;case 1:if(!Zt&&(po(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){yt(t,e,a)}ar(n,e,t);break;case 21:ar(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,ar(n,e,t),Zt=i):ar(n,e,t);break;default:ar(n,e,t)}}function V_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new NE),e.forEach(function(i){var r=WE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function si(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,ci=!1;break e;case 3:Ht=a.stateNode.containerInfo,ci=!0;break e;case 4:Ht=a.stateNode.containerInfo,ci=!0;break e}a=a.return}if(Ht===null)throw Error(ne(160));xx(s,o,r),Ht=null,ci=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yx(e,n),e=e.sibling}function yx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(e,n),xi(n),i&4){try{La(3,n,n.return),bc(3,n)}catch(_){yt(n,n.return,_)}try{La(5,n,n.return)}catch(_){yt(n,n.return,_)}}break;case 1:si(e,n),xi(n),i&512&&t!==null&&po(t,t.return);break;case 5:if(si(e,n),xi(n),i&512&&t!==null&&po(t,t.return),n.flags&32){var r=n.stateNode;try{Ba(r,"")}catch(_){yt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hv(r,s),Md(a,o);var u=Md(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Yv(r,f):c==="dangerouslySetInnerHTML"?Xv(r,f):c==="children"?Ba(r,f):hp(r,c,f,u)}switch(a){case"input":gd(r,s);break;case"textarea":Gv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?xo(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?xo(r,!!s.multiple,s.defaultValue,!0):xo(r,!!s.multiple,s.multiple?[]:"",!1))}r[$a]=s}catch(_){yt(n,n.return,_)}}break;case 6:if(si(e,n),xi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){yt(n,n.return,_)}}break;case 3:if(si(e,n),xi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(_){yt(n,n.return,_)}break;case 4:si(e,n),xi(n);break;case 13:si(e,n),xi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jp=Tt())),i&4&&V_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(u=Zt)||c,si(e,n),Zt=u):si(e,n),xi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(me=n,c=n.child;c!==null;){for(f=me=c;me!==null;){switch(h=me,m=h.child,h.tag){case 0:case 11:case 14:case 15:La(4,h,h.return);break;case 1:po(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){yt(i,t,_)}}break;case 5:po(h,h.return);break;case 22:if(h.memoizedState!==null){G_(f);continue}}m!==null?(m.return=h,me=m):G_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jv("display",o))}catch(_){yt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){yt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:si(e,n),xi(n),i&4&&V_(n);break;case 21:break;default:si(e,n),xi(n)}}function xi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(vx(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ba(r,""),i.flags&=-33);var s=z_(n);Qd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=z_(n);Zd(n,a,o);break;default:throw Error(ne(161))}}catch(l){yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function OE(n,e,t){me=n,Sx(n)}function Sx(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Gl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Gl;var u=Zt;if(Gl=o,(Zt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?W_(r):l!==null?(l.return=o,me=l):W_(r);for(;s!==null;)me=s,Sx(s),s=s.sibling;me=r,Gl=a,Zt=u}H_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):H_(n)}}function H_(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||bc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ui(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&A_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}A_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Zt||e.flags&512&&Kd(e)}catch(h){yt(e,e.return,h)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function G_(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function W_(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{bc(4,e)}catch(l){yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Kd(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Kd(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var FE=Math.ceil,rc=sr.ReactCurrentDispatcher,Wp=sr.ReactCurrentOwner,ti=sr.ReactCurrentBatchConfig,We=0,Bt=null,Pt=null,Gt=0,Ln=0,mo=jr(0),It=0,el=null,bs=0,Lc=0,Xp=0,Da=null,hn=null,jp=0,ko=1/0,zi=null,sc=!1,Jd=null,Lr=null,Wl=!1,Sr=null,oc=0,Ia=0,eh=null,Au=-1,Cu=0;function rn(){return We&6?Tt():Au!==-1?Au:Au=Tt()}function Dr(n){return n.mode&1?We&2&&Gt!==0?Gt&-Gt:yE.transition!==null?(Cu===0&&(Cu=s0()),Cu):(n=Qe,n!==0||(n=window.event,n=n===void 0?16:d0(n.type)),n):1}function gi(n,e,t,i){if(50<Ia)throw Ia=0,eh=null,Error(ne(185));pl(n,t,i),(!(We&2)||n!==Bt)&&(n===Bt&&(!(We&2)&&(Lc|=t),It===4&&vr(n,Gt)),xn(n,i),t===1&&We===0&&!(e.mode&1)&&(ko=Tt()+500,Cc&&Yr()))}function xn(n,e){var t=n.callbackNode;yM(n,e);var i=Gu(n,n===Bt?Gt:0);if(i===0)t!==null&&Jm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Jm(t),e===1)n.tag===0?xE(X_.bind(null,n)):L0(X_.bind(null,n)),mE(function(){!(We&6)&&Yr()}),t=null;else{switch(o0(i)){case 1:t=vp;break;case 4:t=i0;break;case 16:t=Hu;break;case 536870912:t=r0;break;default:t=Hu}t=Px(t,Mx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Mx(n,e){if(Au=-1,Cu=0,We&6)throw Error(ne(327));var t=n.callbackNode;if(To()&&n.callbackNode!==t)return null;var i=Gu(n,n===Bt?Gt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ac(n,i);else{e=i;var r=We;We|=2;var s=Tx();(Bt!==n||Gt!==e)&&(zi=null,ko=Tt()+500,ys(n,e));do try{zE();break}catch(a){Ex(n,a)}while(!0);Lp(),rc.current=s,We=r,Pt!==null?e=0:(Bt=null,Gt=0,e=It)}if(e!==0){if(e===2&&(r=Cd(n),r!==0&&(i=r,e=th(n,r))),e===1)throw t=el,ys(n,0),vr(n,i),xn(n,Tt()),t;if(e===6)vr(n,i);else{if(r=n.current.alternate,!(i&30)&&!kE(r)&&(e=ac(n,i),e===2&&(s=Cd(n),s!==0&&(i=s,e=th(n,s))),e===1))throw t=el,ys(n,0),vr(n,i),xn(n,Tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:as(n,hn,zi);break;case 3:if(vr(n,i),(i&130023424)===i&&(e=jp+500-Tt(),10<e)){if(Gu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){rn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ud(as.bind(null,n,hn,zi),e);break}as(n,hn,zi);break;case 4:if(vr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-_i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*FE(i/1960))-i,10<i){n.timeoutHandle=Ud(as.bind(null,n,hn,zi),i);break}as(n,hn,zi);break;case 5:as(n,hn,zi);break;default:throw Error(ne(329))}}}return xn(n,Tt()),n.callbackNode===t?Mx.bind(null,n):null}function th(n,e){var t=Da;return n.current.memoizedState.isDehydrated&&(ys(n,e).flags|=256),n=ac(n,e),n!==2&&(e=hn,hn=t,e!==null&&nh(e)),n}function nh(n){hn===null?hn=n:hn.push.apply(hn,n)}function kE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!vi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(n,e){for(e&=~Xp,e&=~Lc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-_i(e),i=1<<t;n[t]=-1,e&=~i}}function X_(n){if(We&6)throw Error(ne(327));To();var e=Gu(n,0);if(!(e&1))return xn(n,Tt()),null;var t=ac(n,e);if(n.tag!==0&&t===2){var i=Cd(n);i!==0&&(e=i,t=th(n,i))}if(t===1)throw t=el,ys(n,0),vr(n,e),xn(n,Tt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,as(n,hn,zi),xn(n,Tt()),null}function Yp(n,e){var t=We;We|=1;try{return n(e)}finally{We=t,We===0&&(ko=Tt()+500,Cc&&Yr())}}function Ls(n){Sr!==null&&Sr.tag===0&&!(We&6)&&To();var e=We;We|=1;var t=ti.transition,i=Qe;try{if(ti.transition=null,Qe=1,n)return n()}finally{Qe=i,ti.transition=t,We=e,!(We&6)&&Yr()}}function $p(){Ln=mo.current,ct(mo)}function ys(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,pE(t)),Pt!==null)for(t=Pt.return;t!==null;){var i=t;switch(Rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$u();break;case 3:Oo(),ct(gn),ct(en),Fp();break;case 5:Op(i);break;case 4:Oo();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:Dp(i.type._context);break;case 22:case 23:$p()}t=t.return}if(Bt=n,Pt=n=Ir(n.current,null),Gt=Ln=e,It=0,el=null,Xp=Lc=bs=0,hn=Da=null,ms!==null){for(e=0;e<ms.length;e++)if(t=ms[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ms=null}return n}function Ex(n,e){do{var t=Pt;try{if(Lp(),Eu.current=ic,nc){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nc=!1}if(Ps=0,kt=Dt=gt=null,ba=!1,Za=0,Wp.current=null,t===null||t.return===null){It=1,el=e,Pt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=D_(o);if(m!==null){m.flags&=-257,I_(m,o,a,s,e),m.mode&1&&L_(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){L_(s,u,e),qp();break e}l=Error(ne(426))}}else if(ft&&a.mode&1){var p=D_(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),I_(p,o,a,s,e),Pp(Fo(l,a));break e}}s=l=Fo(l,a),It!==4&&(It=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=ox(s,l,e);w_(s,d);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Lr===null||!Lr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ax(s,a,e);w_(s,S);break e}}s=s.return}while(s!==null)}Ax(t)}catch(A){e=A,Pt===t&&t!==null&&(Pt=t=t.return);continue}break}while(!0)}function Tx(){var n=rc.current;return rc.current=ic,n===null?ic:n}function qp(){(It===0||It===3||It===2)&&(It=4),Bt===null||!(bs&268435455)&&!(Lc&268435455)||vr(Bt,Gt)}function ac(n,e){var t=We;We|=2;var i=Tx();(Bt!==n||Gt!==e)&&(zi=null,ys(n,e));do try{BE();break}catch(r){Ex(n,r)}while(!0);if(Lp(),We=t,rc.current=i,Pt!==null)throw Error(ne(261));return Bt=null,Gt=0,It}function BE(){for(;Pt!==null;)wx(Pt)}function zE(){for(;Pt!==null&&!fM();)wx(Pt)}function wx(n){var e=Rx(n.alternate,n,Ln);n.memoizedProps=n.pendingProps,e===null?Ax(n):Pt=e,Wp.current=null}function Ax(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=IE(t,e),t!==null){t.flags&=32767,Pt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,Pt=null;return}}else if(t=DE(t,e,Ln),t!==null){Pt=t;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=n}while(e!==null);It===0&&(It=5)}function as(n,e,t){var i=Qe,r=ti.transition;try{ti.transition=null,Qe=1,VE(n,e,t,i)}finally{ti.transition=r,Qe=i}return null}function VE(n,e,t,i){do To();while(Sr!==null);if(We&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(SM(n,s),n===Bt&&(Pt=Bt=null,Gt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Wl||(Wl=!0,Px(Hu,function(){return To(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var o=Qe;Qe=1;var a=We;We|=4,Wp.current=null,UE(n,t),yx(t,n),aE(Id),Wu=!!Dd,Id=Dd=null,n.current=t,OE(t),dM(),We=a,Qe=o,ti.transition=s}else n.current=t;if(Wl&&(Wl=!1,Sr=n,oc=r),s=n.pendingLanes,s===0&&(Lr=null),mM(t.stateNode),xn(n,Tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(sc)throw sc=!1,n=Jd,Jd=null,n;return oc&1&&n.tag!==0&&To(),s=n.pendingLanes,s&1?n===eh?Ia++:(Ia=0,eh=n):Ia=0,Yr(),null}function To(){if(Sr!==null){var n=o0(oc),e=ti.transition,t=Qe;try{if(ti.transition=null,Qe=16>n?16:n,Sr===null)var i=!1;else{if(n=Sr,Sr=null,oc=0,We&6)throw Error(ne(331));var r=We;for(We|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:La(8,c,s)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var h=c.sibling,m=c.return;if(gx(c),c===u){me=null;break}if(h!==null){h.return=m,me=h;break}me=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var g=n.current;for(me=g;me!==null;){o=me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,me=x;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bc(9,a)}}catch(A){yt(a,a.return,A)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(We=r,Yr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(Mc,n)}catch{}i=!0}return i}finally{Qe=t,ti.transition=e}}return!1}function j_(n,e,t){e=Fo(t,e),e=ox(n,e,1),n=br(n,e,1),e=rn(),n!==null&&(pl(n,1,e),xn(n,e))}function yt(n,e,t){if(n.tag===3)j_(n,n,t);else for(;e!==null;){if(e.tag===3){j_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Lr===null||!Lr.has(i))){n=Fo(t,n),n=ax(e,n,1),e=br(e,n,1),n=rn(),e!==null&&(pl(e,1,n),xn(e,n));break}}e=e.return}}function HE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=rn(),n.pingedLanes|=n.suspendedLanes&t,Bt===n&&(Gt&t)===t&&(It===4||It===3&&(Gt&130023424)===Gt&&500>Tt()-jp?ys(n,0):Xp|=t),xn(n,e)}function Cx(n,e){e===0&&(n.mode&1?(e=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):e=1);var t=rn();n=Qi(n,e),n!==null&&(pl(n,e,t),xn(n,t))}function GE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Cx(n,t)}function WE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Cx(n,t)}var Rx;Rx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gn.current)_n=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return _n=!1,LE(n,e,t);_n=!!(n.flags&131072)}else _n=!1,ft&&e.flags&1048576&&D0(e,Zu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wu(n,e),n=e.pendingProps;var r=Io(e,en.current);Eo(e,t),r=Bp(null,e,i,n,r,t);var s=zp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,qu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Np(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,Hd(e,i,n,t),e=Xd(null,e,i,!0,s,t)):(e.tag=0,ft&&s&&Cp(e),nn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(wu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jE(i),n=ui(i,n),r){case 0:e=Wd(null,e,i,n,t);break e;case 1:e=O_(null,e,i,n,t);break e;case 11:e=N_(null,e,i,n,t);break e;case 14:e=U_(null,e,i,ui(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Wd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),O_(n,e,i,r,t);case 3:e:{if(fx(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,k0(n,e),ec(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fo(Error(ne(423)),e),e=F_(n,e,i,t,r);break e}else if(i!==r){r=Fo(Error(ne(424)),e),e=F_(n,e,i,t,r);break e}else for(Un=Pr(e.stateNode.containerInfo.firstChild),kn=e,ft=!0,di=null,t=O0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(No(),i===r){e=Ji(n,e,t);break e}nn(n,e,i,t)}e=e.child}return e;case 5:return B0(e),n===null&&Bd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Nd(i,r)?o=null:s!==null&&Nd(i,s)&&(e.flags|=32),cx(n,e),nn(n,e,o,t),e.child;case 6:return n===null&&Bd(e),null;case 13:return dx(n,e,t);case 4:return Up(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Uo(e,null,i,t):nn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),N_(n,e,i,r,t);case 7:return nn(n,e,e.pendingProps,t),e.child;case 8:return nn(n,e,e.pendingProps.children,t),e.child;case 12:return nn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Qu,i._currentValue),i._currentValue=o,s!==null)if(vi(s.value,o)){if(s.children===r.children&&!gn.current){e=Ji(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),zd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),zd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Eo(e,t),r=ni(r),i=i(r),e.flags|=1,nn(n,e,i,t),e.child;case 14:return i=e.type,r=ui(i,e.pendingProps),r=ui(i.type,r),U_(n,e,i,r,t);case 15:return lx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),wu(n,e),e.tag=1,vn(i)?(n=!0,qu(e)):n=!1,Eo(e,t),sx(e,i,r),Hd(e,i,r,t),Xd(null,e,i,!0,n,t);case 19:return hx(n,e,t);case 22:return ux(n,e,t)}throw Error(ne(156,e.tag))};function Px(n,e){return n0(n,e)}function XE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,e,t,i){return new XE(n,e,t,i)}function Kp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jE(n){if(typeof n=="function")return Kp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===mp)return 11;if(n===_p)return 14}return 2}function Ir(n,e){var t=n.alternate;return t===null?(t=Zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ru(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Kp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ro:return Ss(t.children,r,s,e);case pp:o=8,r|=8;break;case dd:return n=Zn(12,t,e,r|2),n.elementType=dd,n.lanes=s,n;case hd:return n=Zn(13,t,e,r),n.elementType=hd,n.lanes=s,n;case pd:return n=Zn(19,t,e,r),n.elementType=pd,n.lanes=s,n;case Bv:return Dc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Fv:o=10;break e;case kv:o=9;break e;case mp:o=11;break e;case _p:o=14;break e;case mr:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Zn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ss(n,e,t,i){return n=Zn(7,n,i,e),n.lanes=t,n}function Dc(n,e,t,i){return n=Zn(22,n,i,e),n.elementType=Bv,n.lanes=t,n.stateNode={isHidden:!1},n}function Sf(n,e,t){return n=Zn(6,n,null,e),n.lanes=t,n}function Mf(n,e,t){return e=Zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function YE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tf(0),this.expirationTimes=tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zp(n,e,t,i,r,s,o,a,l){return n=new YE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Np(s),n}function $E(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function bx(n){if(!n)return zr;n=n._reactInternals;e:{if(Us(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(vn(t))return b0(n,t,e)}return e}function Lx(n,e,t,i,r,s,o,a,l){return n=Zp(t,i,!0,n,r,s,o,a,l),n.context=bx(null),t=n.current,i=rn(),r=Dr(t),s=qi(i,r),s.callback=e??null,br(t,s,r),n.current.lanes=r,pl(n,r,i),xn(n,i),n}function Ic(n,e,t,i){var r=e.current,s=rn(),o=Dr(r);return t=bx(t),e.context===null?e.context=t:e.pendingContext=t,e=qi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=br(r,e,o),n!==null&&(gi(n,r,o,s),Mu(n,r,o)),o}function lc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Y_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Qp(n,e){Y_(n,e),(n=n.alternate)&&Y_(n,e)}function qE(){return null}var Dx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jp(n){this._internalRoot=n}Nc.prototype.render=Jp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Ic(n,e,null,null)};Nc.prototype.unmount=Jp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ls(function(){Ic(null,n,null,null)}),e[Zi]=null}};function Nc(n){this._internalRoot=n}Nc.prototype.unstable_scheduleHydration=function(n){if(n){var e=u0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<gr.length&&e!==0&&e<gr[t].priority;t++);gr.splice(t,0,n),t===0&&f0(n)}};function em(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Uc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $_(){}function KE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=lc(o);s.call(u)}}var o=Lx(e,i,n,0,null,!1,!1,"",$_);return n._reactRootContainer=o,n[Zi]=o.current,ja(n.nodeType===8?n.parentNode:n),Ls(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=lc(l);a.call(u)}}var l=Zp(n,0,!1,null,null,!1,!1,"",$_);return n._reactRootContainer=l,n[Zi]=l.current,ja(n.nodeType===8?n.parentNode:n),Ls(function(){Ic(e,l,t,i)}),l}function Oc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lc(o);a.call(l)}}Ic(e,o,n,r)}else o=KE(t,e,n,r,i);return lc(o)}a0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ya(e.pendingLanes);t!==0&&(xp(e,t|1),xn(e,Tt()),!(We&6)&&(ko=Tt()+500,Yr()))}break;case 13:Ls(function(){var i=Qi(n,1);if(i!==null){var r=rn();gi(i,n,1,r)}}),Qp(n,1)}};yp=function(n){if(n.tag===13){var e=Qi(n,134217728);if(e!==null){var t=rn();gi(e,n,134217728,t)}Qp(n,134217728)}};l0=function(n){if(n.tag===13){var e=Dr(n),t=Qi(n,e);if(t!==null){var i=rn();gi(t,n,e,i)}Qp(n,e)}};u0=function(){return Qe};c0=function(n,e){var t=Qe;try{return Qe=n,e()}finally{Qe=t}};Td=function(n,e,t){switch(e){case"input":if(gd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ac(i);if(!r)throw Error(ne(90));Vv(i),gd(i,r)}}}break;case"textarea":Gv(n,t);break;case"select":e=t.value,e!=null&&xo(n,!!t.multiple,e,!1)}};Kv=Yp;Zv=Ls;var ZE={usingClientEntryPoint:!1,Events:[_l,lo,Ac,$v,qv,Yp]},ua={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QE={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=e0(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||qE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Mc=Xl.inject(QE),Ri=Xl}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;Wn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(e))throw Error(ne(200));return $E(n,e,null,t)};Wn.createRoot=function(n,e){if(!em(n))throw Error(ne(299));var t=!1,i="",r=Dx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zp(n,1,!1,null,null,t,!1,i,r),n[Zi]=e.current,ja(n.nodeType===8?n.parentNode:n),new Jp(e)};Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=e0(e),n=n===null?null:n.stateNode,n};Wn.flushSync=function(n){return Ls(n)};Wn.hydrate=function(n,e,t){if(!Uc(e))throw Error(ne(200));return Oc(null,n,e,!0,t)};Wn.hydrateRoot=function(n,e,t){if(!em(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Dx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Lx(e,null,n,1,t??null,r,!1,s,o),n[Zi]=e.current,ja(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nc(e)};Wn.render=function(n,e,t){if(!Uc(e))throw Error(ne(200));return Oc(null,n,e,!1,t)};Wn.unmountComponentAtNode=function(n){if(!Uc(n))throw Error(ne(40));return n._reactRootContainer?(Ls(function(){Oc(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1};Wn.unstable_batchedUpdates=Yp;Wn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Uc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Oc(n,e,t,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function Ix(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ix)}catch(n){console.error(n)}}Ix(),Iv.exports=Wn;var JE=Iv.exports,q_=JE;cd.createRoot=q_.createRoot,cd.hydrateRoot=q_.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},tl.apply(this,arguments)}var Mr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Mr||(Mr={}));const K_="popstate";function e1(n){n===void 0&&(n={});function e(r,s){let{pathname:o="/",search:a="",hash:l=""}=Os(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ih("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){let o=r.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:uc(s))}function i(r,s){Fc(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return n1(e,t,i,n)}function bt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Fc(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function t1(){return Math.random().toString(36).substr(2,8)}function Z_(n,e){return{usr:n.state,key:n.key,idx:e}}function ih(n,e,t,i){return t===void 0&&(t=null),tl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:t,key:e&&e.key||i||t1()})}function uc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Os(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function n1(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Mr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(tl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Mr.Pop;let p=c(),d=p==null?null:p-u;u=p,l&&l({action:a,location:_.location,delta:d})}function h(p,d){a=Mr.Push;let g=ih(_.location,p,d);t&&t(g,p),u=c()+1;let x=Z_(g,u),S=_.createHref(g);try{o.pushState(x,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(S)}s&&l&&l({action:a,location:_.location,delta:1})}function m(p,d){a=Mr.Replace;let g=ih(_.location,p,d);t&&t(g,p),u=c();let x=Z_(g,u),S=_.createHref(g);o.replaceState(x,"",S),s&&l&&l({action:a,location:_.location,delta:0})}function v(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:uc(p);return g=g.replace(/ $/,"%20"),bt(d,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,d)}let _={get action(){return a},get location(){return n(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(K_,f),l=p,()=>{r.removeEventListener(K_,f),l=null}},createHref(p){return e(r,p)},createURL:v,encodeLocation(p){let d=v(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(p){return o.go(p)}};return _}var Q_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Q_||(Q_={}));function i1(n,e,t){return t===void 0&&(t="/"),r1(n,e,t)}function r1(n,e,t,i){let r=typeof e=="string"?Os(e):e,s=tm(r.pathname||"/",t);if(s==null)return null;let o=Nx(n);s1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=g1(s);a=p1(o[l],u)}return a}function Nx(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(bt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Nr([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(bt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nx(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:d1(u,s.index),routesMeta:c})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Ux(s.path))r(s,o,l)}),e}function Ux(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Ux(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function s1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:h1(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const o1=/^:[\w-]+$/,a1=3,l1=2,u1=1,c1=10,f1=-2,J_=n=>n==="*";function d1(n,e){let t=n.split("/"),i=t.length;return t.some(J_)&&(i+=f1),e&&(i+=l1),t.filter(r=>!J_(r)).reduce((r,s)=>r+(o1.test(s)?a1:s===""?u1:c1),i)}function h1(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function p1(n,e,t){let{routesMeta:i}=n,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",f=m1({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Nr([s,f.pathname]),pathnameBase:M1(Nr([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Nr([s,f.pathnameBase]))}return o}function m1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=_1(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let _=a[f]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[f];return m&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:n}}function _1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Fc(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function g1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fc(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function tm(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const v1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x1=n=>v1.test(n);function y1(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Os(n):n,s;if(t)if(x1(t))s=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Fc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?s=eg(t.substring(1),"/"):s=eg(t,e)}else s=e;return{pathname:s,search:E1(i),hash:T1(r)}}function eg(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Ef(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ox(n,e){let t=S1(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Fx(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=Os(n):(r=tl({},n),bt(!r.pathname||!r.pathname.includes("?"),Ef("?","pathname","search",r)),bt(!r.pathname||!r.pathname.includes("#"),Ef("#","pathname","hash",r)),bt(!r.search||!r.search.includes("#"),Ef("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=t;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=y1(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Nr=n=>n.join("/").replace(/\/\/+/g,"/"),M1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),E1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,T1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function w1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const kx=["post","put","patch","delete"];new Set(kx);const A1=["get",...kx];new Set(A1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},nl.apply(this,arguments)}const nm=ie.createContext(null),C1=ie.createContext(null),Fs=ie.createContext(null),kc=ie.createContext(null),$r=ie.createContext({outlet:null,matches:[],isDataRoute:!1}),Bx=ie.createContext(null);function R1(n,e){let{relative:t}=e===void 0?{}:e;vl()||bt(!1);let{basename:i,navigator:r}=ie.useContext(Fs),{hash:s,pathname:o,search:a}=Vx(n,{relative:t}),l=o;return i!=="/"&&(l=o==="/"?i:Nr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function vl(){return ie.useContext(kc)!=null}function xl(){return vl()||bt(!1),ie.useContext(kc).location}function zx(n){ie.useContext(Fs).static||ie.useLayoutEffect(n)}function im(){let{isDataRoute:n}=ie.useContext($r);return n?H1():P1()}function P1(){vl()||bt(!1);let n=ie.useContext(nm),{basename:e,future:t,navigator:i}=ie.useContext(Fs),{matches:r}=ie.useContext($r),{pathname:s}=xl(),o=JSON.stringify(Ox(r,t.v7_relativeSplatPath)),a=ie.useRef(!1);return zx(()=>{a.current=!0}),ie.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let f=Fx(u,JSON.parse(o),s,c.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Nr([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,o,s,n])}function b1(){let{matches:n}=ie.useContext($r),e=n[n.length-1];return e?e.params:{}}function Vx(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=ie.useContext(Fs),{matches:r}=ie.useContext($r),{pathname:s}=xl(),o=JSON.stringify(Ox(r,i.v7_relativeSplatPath));return ie.useMemo(()=>Fx(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function L1(n,e){return D1(n,e)}function D1(n,e,t,i){vl()||bt(!1);let{navigator:r}=ie.useContext(Fs),{matches:s}=ie.useContext($r),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=xl(),c;if(e){var f;let p=typeof e=="string"?Os(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||bt(!1),c=p}else c=u;let h=c.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=i1(n,{pathname:m}),_=F1(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Nr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Nr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,t,i);return e&&_?ie.createElement(kc.Provider,{value:{location:nl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Mr.Pop}},_):_}function I1(){let n=V1(),e=w1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),t?ie.createElement("pre",{style:r},t):null,null)}const N1=ie.createElement(I1,null);class U1 extends ie.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ie.createElement($r.Provider,{value:this.props.routeContext},ie.createElement(Bx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O1(n){let{routeContext:e,match:t,children:i}=n,r=ie.useContext(nm);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ie.createElement($r.Provider,{value:e},i)}function F1(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=(r=t)==null?void 0:r.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||bt(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:m}=t,v=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,h)=>{let m,v=!1,_=null,p=null;t&&(m=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||N1,l&&(u<0&&h===0?(G1("route-fallback"),v=!0,p=null):u===h&&(v=!0,p=f.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,h+1)),g=()=>{let x;return m?x=_:v?x=p:f.route.Component?x=ie.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=c,ie.createElement(O1,{match:f,routeContext:{outlet:c,matches:d,isDataRoute:t!=null},children:x})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?ie.createElement(U1,{location:t.location,revalidation:t.revalidation,component:_,error:m,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var Hx=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Hx||{}),Gx=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Gx||{});function k1(n){let e=ie.useContext(nm);return e||bt(!1),e}function B1(n){let e=ie.useContext(C1);return e||bt(!1),e}function z1(n){let e=ie.useContext($r);return e||bt(!1),e}function Wx(n){let e=z1(),t=e.matches[e.matches.length-1];return t.route.id||bt(!1),t.route.id}function V1(){var n;let e=ie.useContext(Bx),t=B1(),i=Wx();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function H1(){let{router:n}=k1(Hx.UseNavigateStable),e=Wx(Gx.UseNavigateStable),t=ie.useRef(!1);return zx(()=>{t.current=!0}),ie.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,nl({fromRouteId:e},s)))},[n,e])}const tg={};function G1(n,e,t){tg[n]||(tg[n]=!0)}function W1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function ls(n){bt(!1)}function X1(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Mr.Pop,navigator:s,static:o=!1,future:a}=n;vl()&&bt(!1);let l=e.replace(/^\/*/,"/"),u=ie.useMemo(()=>({basename:l,navigator:s,static:o,future:nl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Os(i));let{pathname:c="/",search:f="",hash:h="",state:m=null,key:v="default"}=i,_=ie.useMemo(()=>{let p=tm(c,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:v},navigationType:r}},[l,c,f,h,m,v,r]);return _==null?null:ie.createElement(Fs.Provider,{value:u},ie.createElement(kc.Provider,{children:t,value:_}))}function j1(n){let{children:e,location:t}=n;return L1(rh(e),t)}new Promise(()=>{});function rh(n,e){e===void 0&&(e=[]);let t=[];return ie.Children.forEach(n,(i,r)=>{if(!ie.isValidElement(i))return;let s=[...e,r];if(i.type===ie.Fragment){t.push.apply(t,rh(i.props.children,s));return}i.type!==ls&&bt(!1),!i.props.index||!i.props.children||bt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=rh(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sh(){return sh=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},sh.apply(this,arguments)}function Y1(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function $1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function q1(n,e){return n.button===0&&(!e||e==="_self")&&!$1(n)}const K1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z1="6";try{window.__reactRouterVersion=Z1}catch{}const Q1="startTransition",ng=HS[Q1];function J1(n){let{basename:e,children:t,future:i,window:r}=n,s=ie.useRef();s.current==null&&(s.current=e1({window:r,v5Compat:!0}));let o=s.current,[a,l]=ie.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=ie.useCallback(f=>{u&&ng?ng(()=>l(f)):l(f)},[l,u]);return ie.useLayoutEffect(()=>o.listen(c),[o,c]),ie.useEffect(()=>W1(i),[i]),ie.createElement(X1,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:i})}const eT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Na=ie.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f}=e,h=Y1(e,K1),{basename:m}=ie.useContext(Fs),v,_=!1;if(typeof u=="string"&&tT.test(u)&&(v=u,eT))try{let x=new URL(window.location.href),S=u.startsWith("//")?new URL(x.protocol+u):new URL(u),A=tm(S.pathname,m);S.origin===x.origin&&A!=null?u=A+S.search+S.hash:_=!0}catch{}let p=R1(u,{relative:r}),d=nT(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:r,viewTransition:f});function g(x){i&&i(x),x.defaultPrevented||d(x)}return ie.createElement("a",sh({},h,{href:v||p,onClick:_||s?i:g,ref:t,target:l}))});var ig;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(ig||(ig={}));var rg;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(rg||(rg={}));function nT(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=im(),u=xl(),c=Vx(n,{relative:o});return ie.useCallback(f=>{if(q1(f,t)){f.preventDefault();let h=i!==void 0?i:uc(u)===uc(c);l(n,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,c,i,r,t,n,s,o,a])}function Vi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Xx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},il={duration:.5,overwrite:!1,delay:0},rm,Wt,dt,Qn=1e8,it=1/Qn,oh=Math.PI*2,iT=oh/4,rT=0,jx=Math.sqrt,sT=Math.cos,oT=Math.sin,zt=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},sm=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},yn=function(e){return e!==!1},om=function(){return typeof window<"u"},jl=function(e){return St(e)||zt(e)},Yx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,aT=/random\([^)]+\)/g,lT=/,\s*/g,sg=/(?:-?\.?\d|\.)+/gi,$x=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_o=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qx=/[+-]=-?[.\d]+/,uT=/[^,'"\[\]\s]+/gi,cT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Si,ah,am,Hn={},cc={},Kx,Zx=function(e){return(cc=Bo(e,Hn))&&wn},lm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},rl=function(e,t){return!t&&console.warn(e)},Qx=function(e,t){return e&&(Hn[e]=t)&&cc&&(cc[e]=t)||Hn},sl=function(){return 0},fT={suppressEvents:!0,isStart:!0,kill:!1},Pu={suppressEvents:!0,kill:!1},dT={suppressEvents:!0},um={},Ur=[],lh={},Jx,Dn={},wf={},og=30,bu=[],cm="",fm=function(e){var t=e[0],i,r;if(Li(t)||St(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=bu.length;r--&&!bu[r].targetTest(t););i=bu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Sy(e[r],i)))||e.splice(r,1);return e},Ms=function(e){return e._gsap||fm(Jn(e))[0]._gsap},ey=function(e,t,i){return(i=e[t])&&St(i)?e[t]():sm(i)&&e.getAttribute&&e.getAttribute(t)||i},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},wo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},hT=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},fc=function(){var e=Ur.length,t=Ur.slice(0),i,r;for(lh={},Ur.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},dm=function(e){return!!(e._initted||e._startAt||e.add)},ty=function(e,t,i,r){Ur.length&&!Wt&&fc(),e.render(t,i,!!(Wt&&t<0&&dm(e))),Ur.length&&!Wt&&fc()},ny=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(uT).length<2?t:zt(e)?e.trim():e},iy=function(e){return e},Gn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},pT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Bo=function(e,t){for(var i in t)e[i]=t[i];return e},ag=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Li(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},dc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ua=function(e){var t=e.parent||mt,i=e.keyframes?pT(Jt(e.keyframes)):Gn;if(yn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},mT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},ry=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Bc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Es=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},_T=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uh=function(e,t,i,r){return e._startAt&&(Wt?e._startAt.revert(Pu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},gT=function n(e){return!e||e._ts&&n(e.parent)},lg=function(e){return e._repeat?zo(e._tTime,e=e.duration()+e._rDelay)*e:0},zo=function(e,t){var i=Math.floor(e=ht(e/t));return e&&i===e?i-1:i},hc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zc=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},Vc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zc(e),i._dirty||Es(i,e)),e},sy=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=hc(e.rawTime(),t),(!t._dur||yl(0,t.totalDuration(),i)-t._tTime>it)&&t.render(i,!0)),Es(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-it}},wi=function(e,t,i,r){return t.parent&&Vr(t),t._start=ht((er(i)?i:i||e!==mt?$n(e,i,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ry(e,t,"_first","_last",e._sort?"_start":0),ch(t)||(e._recent=t),r||sy(e,t),e._ts<0&&Vc(e,e._tTime),e},oy=function(e,t){return(Hn.ScrollTrigger||lm("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},ay=function(e,t,i,r,s){if(pm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jx!==In.frame)return Ur.push(e),e._lazy=[s,r],1},vT=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},ch=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xT=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&vT(e)&&!(!e._initted&&ch(e))||(e._ts<0||e._dp._ts<0)&&!ch(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=yl(0,e._tDur,t),c=zo(l,a),e._yoyo&&c&1&&(o=1-o),c!==zo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Wt||r||e._zTime===it||!t&&e._zTime){if(!e._initted&&ay(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?it:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&uh(e,t,i,!0),e._onUpdate&&!i&&On(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&On(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vr(e,1),!i&&!Wt&&(On(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yT=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Vo=function(e,t,i,r){var s=e._repeat,o=ht(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ht(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Vc(e,e._tTime=e._tDur*a),e.parent&&zc(e),i||Es(e.parent,e),e},ug=function(e){return e instanceof mn?Es(e):Vo(e,e._dur)},ST={_start:0,endTime:sl,totalDuration:sl},$n=function n(e,t,i){var r=e.labels,s=e._recent||ST,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,u;return zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Jt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Oa=function(e,t,i){var r=er(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Rt(t[0],o,t[s+1])},qr=function(e,t){return e||e===0?t(e):t},yl=function(e,t,i){return i<e?e:i>t?t:i},Qt=function(e,t){return!zt(e)||!(t=cT.exec(e))?"":t[1]},MT=function(e,t,i){return qr(i,function(r){return yl(e,t,r)})},fh=[].slice,ly=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Si},ET=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return zt(r)&&!t||ly(r,1)?(s=i).push.apply(s,Jn(r)):i.push(r)})||i},Jn=function(e,t,i){return dt&&!t&&dt.selector?dt.selector(e):zt(e)&&!i&&(ah||!Ho())?fh.call((t||am).querySelectorAll(e),0):Jt(e)?ET(e,i):ly(e)?fh.call(e,0):e?[e]:[]},dh=function(e){return e=Jn(e)[0]||rl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Jn(t,i.querySelectorAll?i:i===e?rl("Invalid scope")||am.createElement("div"):e)}},uy=function(e){return e.sort(function(){return .5-Math.random()})},cy=function(e){if(St(e))return e;var t=Li(e)?e:{each:e},i=Ts(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return zt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,m,v){var _=(v||t).length,p=o[_],d,g,x,S,A,C,M,R,D;if(!p){if(D=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!D){for(M=-Qn;M<(M=v[D++].getBoundingClientRect().left)&&D<_;);D<_&&D--}for(p=o[_]=[],d=l?Math.min(D,_)*c-.5:r%D,g=D===Qn?0:l?_*f/D-.5:r/D|0,M=0,R=Qn,C=0;C<_;C++)x=C%D-d,S=g-(C/D|0),p[C]=A=u?Math.abs(u==="y"?S:x):jx(x*x+S*S),A>M&&(M=A),A<R&&(R=A);r==="random"&&uy(p),p.max=M-R,p.min=R,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(D>_?_-1:u?u==="y"?_/D:D:Math.max(D,_/D))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Qt(t.amount||t.each)||0,i=i&&_<0?OT(i):i}return _=(p[h]-p.min)/p.max||0,ht(p.b+(i?i(_):_)*p.v)+p.u}},hh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ht(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(er(i)?0:Qt(i))}},fy=function(e,t){var i=Jt(e),r,s;return!i&&Li(e)&&(r=i=e.radius||Qn,e.values?(e=Jn(e.values),(s=!er(e[0]))&&(r*=r)):e=hh(e.increment)),qr(t,i?St(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Qn,c=0,f=e.length,h,m;f--;)s?(h=e[f].x-a,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||er(o)?c:c+Qt(o)}:hh(e))},dy=function(e,t,i,r){return qr(Jt(e)?!t:i===!0?!!(i=0):!r,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},TT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},wT=function(e,t){return function(i){return e(parseFloat(i))+(t||Qt(i))}},AT=function(e,t,i){return py(e,t,0,1,i)},hy=function(e,t,i){return qr(i,function(r){return e[~~t(r)]})},CT=function n(e,t,i){var r=t-e;return Jt(e)?hy(e,n(0,e.length),t):qr(i,function(s){return(r+(s-e)%r)%r+e})},RT=function n(e,t,i){var r=t-e,s=r*2;return Jt(e)?hy(e,n(0,e.length-1),t):qr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ol=function(e){return e.replace(aT,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(lT);return dy(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},py=function(e,t,i,r,s){var o=t-e,a=r-i;return qr(s,function(l){return i+((l-e)/o*a||0)})},PT=function n(e,t,i,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=zt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(v){v*=f;var _=Math.min(h,~~v);return c[_](v-_)},i=t}else r||(e=Bo(Jt(e)?[]:{},e));if(!c){for(l in t)hm.call(a,e,l,"get",t[l]);s=function(v){return gm(v,a)||(o?e.p:e)}}}return qr(i,s)},cg=function(e,t,i){var r=e.labels,s=Qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},On=function(e,t,i){var r=e.vars,s=r[t],o=dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ur.length&&fc(),a&&(dt=a),c=l?s.apply(u,l):s.call(u),dt=o,c},Ma=function(e){return Vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&On(e,"onInterrupt"),e},go,my=[],_y=function(e){if(e)if(e=!e.name&&e.default||e,om()||e.headless){var t=e.name,i=St(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:sl,render:gm,add:hm,kill:jT,modifier:XT,rawVars:0},o={targetTest:0,get:0,getSetter:_m,aliases:{},register:0};if(Ho(),e!==r){if(Dn[t])return;Gn(r,Gn(dc(e,s),o)),Bo(r.prototype,Bo(s,dc(e,o))),Dn[r.prop=t]=r,e.targetTest&&(bu.push(r),um[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Qx(t,r),e.register&&e.register(wn,r,Mn)}else my.push(e)},nt=255,Ea={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},Af=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*nt+.5|0},gy=function(e,t,i){var r=e?er(e)?[e>>16,e>>8&nt,e&nt]:0:Ea.black,s,o,a,l,u,c,f,h,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ea[e])r=Ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&nt,r&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(sg),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Af(l+1/3,s,o),r[1]=Af(l,s,o),r[2]=Af(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match($x),i&&r.length<4&&(r[3]=1),r}else r=e.match(sg)||Ea.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/nt,o=r[1]/nt,a=r[2]/nt,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(m=f-h,u=c>.5?m/(2-f-h):m/(f+h),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},vy=function(e){var t=[],i=[],r=-1;return e.split(Or).forEach(function(s){var o=s.match(_o)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},fg=function(e,t,i){var r="",s=(e+r).match(Or),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=gy(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=vy(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Or,"1").split(_o),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Or),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Or=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ea)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),bT=/hsl[a]?\(/,xy=function(e){var t=e.join(" "),i;if(Or.lastIndex=0,Or.test(t))return i=bT.test(t),e[1]=fg(e[1],i),e[0]=fg(e[0],i,vy(e[1])),!0},al,In=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,m,v=function _(p){var d=n()-r,g=p===!0,x,S,A,C;if((d>e||d<0)&&(i+=d-t),r+=d,A=r-i,x=A-o,(x>0||g)&&(C=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=x+(x>=s?4:s-x),S=1),g||(l=u(_)),S)for(m=0;m<a.length;m++)a[m](A,h,C,p)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Kx&&(!ah&&om()&&(Si=ah=window,am=Si.document||{},Hn.gsap=wn,(Si.gsapVersions||(Si.gsapVersions=[])).push(wn.version),Zx(cc||Si.GreenSockGlobals||!Si.gsap&&Si||{}),my.forEach(_y)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(p){return setTimeout(p,o-f.time*1e3+1|0)},al=1,v(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),al=0,u=sl},lagSmoothing:function(p,d){e=p||1/0,t=Math.min(d||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,d,g){var x=d?function(S,A,C,M){p(S,A,C,M),f.remove(x)}:p;return f.remove(p),a[g?"unshift":"push"](x),Ho(),x},remove:function(p,d){~(d=a.indexOf(p))&&a.splice(d,1)&&m>=d&&m--},_listeners:a},f}(),Ho=function(){return!al&&In.wake()},ke={},LT=/^[\d.\-M][\d.\-,\s]/,DT=/["']/g,IT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(DT,"").trim():+u,r=l.substr(a+1).trim();return t},NT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},UT=function(e){var t=(e+"").split("("),i=ke[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[IT(t[1])]:NT(e).split(",").map(ny)):ke._CE&&LT.test(e)?ke._CE("",e):i},OT=function(e){return function(t){return 1-e(1-t)}},Ts=function(e,t){return e&&(St(e)?e:ke[e]||UT(e))||t},ks=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Sn(e,function(a){ke[a]=Hn[a]=s,ke[o=a.toLowerCase()]=i;for(var l in s)ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ke[a+"."+l]=s[l]}),s},yy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/oh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*oT((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:yy(a);return s=oh/s,l.config=function(u,c){return n(e,u,c)},l},Rf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:yy(i);return r.config=function(s){return n(e,s)},r};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ks(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;ks("Elastic",Cf("in"),Cf("out"),Cf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ks("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ks("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ks("Circ",function(n){return-(jx(1-n*n)-1)});ks("Sine",function(n){return n===1?1:-sT(n*iT)+1});ks("Back",Rf("in"),Rf("out"),Rf());ke.SteppedEase=ke.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-it;return function(a){return((r*yl(0,o,a)|0)+s)*i}}};il.ease=ke["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return cm+=n+","+n+"Params,"});var Sy=function(e,t){this.id=rT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ey,this.set=t?t.getSetter:_m},ll=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vo(this,+t.duration,1,1),this.data=t.data,dt&&(this._ctx=dt,dt.data.push(this)),al||In.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ho(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vc(this,i),!s._dp||s.parent||sy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===it||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ty(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+lg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+lg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?zo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?hc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-it?0:this._rts,this.totalTime(yl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),zc(this),_T(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ho(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&wi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(yn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=dT);var r=Wt;return Wt=i,dm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Wt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ug(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ug(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime($n(this,i),yn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,yn(r)),this._dur||(this._zTime=-it),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-it)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=St(i)?i:iy,l=function(){var c=r.then;r.then=null,s&&s(),St(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ma(this)},n}();Gn(ll.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var mn=function(n){Xx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=yn(i.sortChildren),mt&&wi(i.parent||mt,Vi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&oy(Vi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Oa(0,arguments,this),this},t.from=function(r,s,o){return Oa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Oa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ua(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,$n(this,o),1),this},t.call=function(r,s,o){return wi(this,Rt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Rt(r,o,$n(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ua(o).immediateRender=yn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Ua(a).immediateRender=yn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:ht(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,m,v,_,p,d,g,x,S,A,C,M;if(this!==mt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,S=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,p=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=ht(c%p),c===l?(_=this._repeat,h=u):(A=ht(c/p),_=~~A,_&&_===A&&(h=u,_--),h>u&&(h=u)),A=zo(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),C&&_&1&&(h=u-h,M=1),_!==A&&!this._lock){var R=C&&A&1,D=R===(C&&_&1);if(_<A&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:ht(_*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,D&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=yT(this,ht(a),ht(h)),g&&(c-=h-(h=g._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!A&&(On(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||h>=m._start)&&m._ts&&g!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,o),h!==this._time||!this._ts&&!d){g=0,v&&(c+=this._zTime=-it);break}}m=v}else{m=this._last;for(var y=r<0?r:h;m;){if(v=m._prev,(m._act||y<=m._end)&&m._ts&&g!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,s,o||Wt&&dm(m)),h!==this._time||!this._ts&&!d){g=0,v&&(c+=this._zTime=y?-it:it);break}}m=v}}if(g&&!s&&(this.pause(),g.render(h>=a?0:-it)._zTime=h>=a?1:-1,this._ts))return this._start=S,zc(this),this.render(r,s,o);this._onUpdate&&!s&&On(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Vr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(On(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(er(s)||(s=$n(this,s,r)),!(r instanceof ll)){if(Jt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(zt(r))return this.addLabel(r,s);if(St(r))r=Rt.delayedCall(0,r);else return this}return this!==r?wi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Rt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return zt(r)?this.removeLabel(r):St(r)?this.killTweensOf(r):(r.parent===this&&Bc(this,r),r===this._recent&&(this._recent=this._last),Es(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(In.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=$n(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Rt.delayedCall(0,s||sl,o);return a.data="isPause",this._hasPause=1,wi(this,a,$n(this,r))},t.removePause=function(r){var s=this._first;for(r=$n(this,r);s;)s._start===r&&s.data==="isPause"&&Vr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Er!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Jn(r),l=this._first,u=er(s),c;l;)l instanceof Rt?hT(l._targets,a)&&(u?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=$n(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,m,v=Rt.to(o,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||it,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==p&&Vo(v,p,0,1).render(v._time,!0,!0),m=1}c&&c.apply(v,f||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Gn({startAt:{time:$n(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),cg(this,$n(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),cg(this,$n(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=ht(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Es(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Es(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Qn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=ht(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Vo(o,o===mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(mt._ts&&(ty(mt,hc(r,mt)),Jx=In.frame),In.frame>=og){og+=Bn.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&Bn.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e}(ll);Gn(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var FT=function(e,t,i,r,s,o,a){var l=new Mn(this._pt,e,t,0,1,Cy,null,s),u=0,c=0,f,h,m,v,_,p,d,g;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=ol(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),h=i.match(Tf)||[];f=Tf.exec(r);)v=f[0],_=r.substring(u,f.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),v!==h[c++]&&(p=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:p,c:v.charAt(1)==="="?wo(p,v)-p:parseFloat(v)-p,m:m&&m<4?Math.round:0},u=Tf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(qx.test(r)||d)&&(l.e=0),this._pt=l,l},hm=function(e,t,i,r,s,o,a,l,u,c){St(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:St(f)?u?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,m=St(f)?u?HT:wy:mm,v;if(zt(r)&&(~r.indexOf("random(")&&(r=ol(r)),r.charAt(1)==="="&&(v=wo(h,r)+(Qt(h)||0),(v||v===0)&&(r=v))),!c||h!==r||ph)return!isNaN(h*r)&&r!==""?(v=new Mn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?WT:Ay,0,m),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&lm(t,r),FT.call(this,e,t,h,r,m,l||Bn.stringFilter,u))},kT=function(e,t,i,r,s){if(St(e)&&(e=Fa(e,s,t,i,r)),!Li(e)||e.style&&e.nodeType||Jt(e)||Yx(e))return zt(e)?Fa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Fa(e[a],s,t,i,r);return o},My=function(e,t,i,r,s,o){var a,l,u,c;if(Dn[e]&&(a=new Dn[e]).init(s,a.rawVars?t[e]:kT(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Mn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==go))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Er,ph,pm=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,m=r.autoRevert,v=e._dur,_=e._startAt,p=e._targets,d=e.parent,g=d&&d.data==="nested"?d.vars.targets:p,x=e._overwrite==="auto"&&!rm,S=e.timeline,A=r.easeReverse||f,C,M,R,D,y,T,F,O,W,$,B,Y,b;if(S&&(!h||!s)&&(s="none"),e._ease=Ts(s,il.ease),e._rEase=A&&(Ts(A)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(O=p[0]?Ms(p[0]).harness:0,Y=O&&r[O.prop],C=dc(r,um),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!m?_.render(-1,!0):_.revert(c&&v?Pu:fT),_._lazy=0),o){if(Vr(e._startAt=Rt.set(p,Gn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:u&&function(){return On(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!a&&!m)&&e._startAt.revert(Pu),a&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&v&&!_){if(t&&(a=!1),R=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:d},C),Y&&(R[O.prop]=Y),Vr(e._startAt=Rt.set(p,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(Pu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&yn(l)||l&&!v,M=0;M<p.length;M++){if(y=p[M],F=y._gsap||fm(p)[M]._gsap,e._ptLookup[M]=$={},lh[F.id]&&Ur.length&&fc(),B=g===p?M:g.indexOf(y),O&&(W=new O).init(y,Y||C,e,B,g)!==!1&&(e._pt=D=new Mn(e._pt,y,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(H){$[H]=D}),W.priority&&(T=1)),!O||Y)for(R in C)Dn[R]&&(W=My(R,C,e,B,y,g))?W.priority&&(T=1):$[R]=D=hm.call(e,y,R,"get",C[R],B,g,0,r.stringFilter);e._op&&e._op[M]&&e.kill(y,e._op[M]),x&&e._pt&&(Er=e,mt.killTweensOf(y,$,e.globalTime(t)),b=!e.parent,Er=0),e._pt&&l&&(lh[F.id]=1)}T&&Ry(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!b,h&&t<=0&&S.render(Qn,!0,!0)},BT=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,m;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,m=e._targets.length;m--;){if(c=h[m][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ph=1,e.vars[t]="+=0",pm(e,a),ph=0,l?rl(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(m=u.length;m--;)f=u[m],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Et(i)+Qt(f.e)),f.b&&(f.b=c.s+Qt(f.b))},zT=function(e,t){var i=e[0]?Ms(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Bo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},VT=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Jt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Fa=function(e,t,i,r,s){return St(e)?e.call(t,i,r,s):zt(e)&&~e.indexOf("random(")?ol(e):e},Ey=cm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ty={};Sn(Ey+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Ty[n]=1});var Rt=function(n){Xx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ua(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,v=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=r.parent||mt,g=(Jt(i)||Yx(i)?er(i[0]):"length"in r)?[i]:Jn(i),x,S,A,C,M,R,D,y;if(a._targets=g.length?fm(g):rl("GSAP target "+i+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||h||jl(u)||jl(c)){r=a.vars;var T=r.easeReverse||r.yoyoEase;if(x=a.timeline=new mn({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:g}),x.kill(),x.parent=x._dp=Vi(a),x._start=0,h||jl(u)||jl(c)){if(C=g.length,D=h&&cy(h),Li(h))for(M in h)~Ey.indexOf(M)&&(y||(y={}),y[M]=h[M]);for(S=0;S<C;S++)A=dc(r,Ty),A.stagger=0,T&&(A.easeReverse=T),y&&Bo(A,y),R=g[S],A.duration=+Fa(u,Vi(a),S,R,g),A.delay=(+Fa(c,Vi(a),S,R,g)||0)-a._delay,!h&&C===1&&A.delay&&(a._delay=c=A.delay,a._start+=c,A.delay=0),x.to(R,A,D?D(S,R,g):0),x._ease=ke.none;x.duration()?u=c=0:a.timeline=0}else if(v){Ua(Gn(x.vars.defaults,{ease:"none"})),x._ease=Ts(v.ease||r.ease||"none");var F=0,O,W,$;if(Jt(v))v.forEach(function(B){return x.to(g,B,">")}),x.duration();else{A={};for(M in v)M==="ease"||M==="easeEach"||VT(M,v[M],A,v.easeEach);for(M in A)for(O=A[M].sort(function(B,Y){return B.t-Y.t}),F=0,S=0;S<O.length;S++)W=O[S],$={ease:W.e,duration:(W.t-(S?O[S-1].t:0))/100*u},$[M]=W.v,x.to(g,$,F),F+=$.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return m===!0&&!rm&&(Er=Vi(a),mt.killTweensOf(g),Er=0),wi(d,Vi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!v&&a._start===ht(d._time)&&yn(f)&&gT(Vi(a))&&d.data!=="nested")&&(a._tTime=-it,a.render(Math.max(0,-c)||0)),p&&oy(Vi(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-it&&!c?l:r<it?0:r,h,m,v,_,p,d,g,x;if(!u)xT(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=ht(f%_),f===l?(v=this._repeat,h=u):(p=ht(f/_),v=~~p,v&&v===p?(h=u,v--):h>u&&(h=u)),d=this._yoyo&&v&1,d&&(h=u-h),p=zo(this._tTime,_),h===a&&!o&&this._initted&&v===p)return this._tTime=f,this;v!==p&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(ht(_*v),!0).invalidate()._lock=0)}if(!this._initted){if(ay(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==p))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var A=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(h/u);if(this._from&&(this.ratio=g=1-g),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(On(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(g,m.d),m=m._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&uh(this,r,s,o),On(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&uh(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Vr(this,1),!s&&!(c&&!a)&&(f||a||d)&&(On(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){al||In.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pm(this,u),c=this._ease(u/this._dur),BT(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Vc(this,0),this.parent||ry(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Er&&Er.vars.overwrite!==!0)._first||Ma(this),this.parent&&o!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Jn(r):a,u=this._ptLookup,c=this._pt,f,h,m,v,_,p,d;if((!s||s==="all")&&mT(a,l))return s==="all"&&(this._pt=0),Ma(this);for(f=this._op=this._op||[],s!=="all"&&(zt(s)&&(_={},Sn(s,function(g){return _[g]=1}),s=_),s=zT(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,v=h,m={}):(m=f[d]=f[d]||{},v=s);for(_ in v)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Bc(this,p,"_pt"),delete h[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&c&&Ma(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Oa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Oa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return mt.killTweensOf(r,s,o)},e}(ll);Gn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(n){Rt[n]=function(){var e=new mn,t=fh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var mm=function(e,t,i){return e[t]=i},wy=function(e,t,i){return e[t](i)},HT=function(e,t,i,r){return e[t](r.fp,i)},GT=function(e,t,i){return e.setAttribute(t,i)},_m=function(e,t){return St(e[t])?wy:sm(e[t])&&e.setAttribute?GT:mm},Ay=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},WT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},gm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},XT=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},jT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Bc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},YT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Ry=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Mn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Ay,this.d=l||this,this.set=u||mm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=YT,this.m=i,this.mt=s,this.tween=r},n}();Sn(cm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return um[n]=1});Hn.TweenMax=Hn.TweenLite=Rt;Hn.TimelineLite=Hn.TimelineMax=mn;mt=new mn({sortChildren:!1,defaults:il,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=xy;var ws=[],Lu={},$T=[],dg=0,qT=0,Pf=function(e){return(Lu[e]||$T).map(function(t){return t()})},mh=function(){var e=Date.now(),t=[];e-dg>2&&(Pf("matchMediaInit"),ws.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Si.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Pf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),dg=e,Pf("matchMedia"))},Py=function(){function n(t,i){this.selector=i&&dh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=qT++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){St(i)&&(s=r,r=i,i=St);var o=this,a=function(){var u=dt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=dh(s)),dt=o,f=r.apply(o,arguments),St(f)&&o._r.push(f),dt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===St?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=dt;dt=null,i(this),dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof mn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Rt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ws.length;o--;)ws[o].id===this.id&&ws.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),KT=function(){function n(t){this.contexts=[],this.scope=t,dt&&dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Li(i)||(i={matches:i});var o=new Py(0,s||this.scope),a=o.conditions={},l,u,c;dt&&!o.selector&&(o.selector=dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Si.matchMedia(i[u]),l&&(ws.indexOf(o)<0&&ws.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(mh):l.addEventListener("change",mh)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),pc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return _y(r)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,i,r){zt(e)&&(e=Jn(e)[0]);var s=Ms(e||{}).get,o=i?iy:ny;return i==="native"&&(i=""),e&&(t?o((Dn[t]&&Dn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Dn[a]&&Dn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Jn(e),e.length>1){var r=e.map(function(c){return wn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Dn[t],a=Ms(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;go._pt=0,f.init(e,i?c+i:c,go,0,[e]),f.render(1,f),go._pt&&gm(1,go)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=wn.to(e,Gn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ts(e.ease,il.ease)),ag(il,e||{})},config:function(e){return ag(Bn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Hn[a]&&rl(t+" effect requires "+a+" plugin.")}),wf[t]=function(a,l,u){return i(Jn(a),Gn(l||{},s),u)},o&&(mn.prototype[t]=function(a,l,u){return this.add(wf[t](a,Li(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ke[e]=Ts(t)},parseEase:function(e,t){return arguments.length?Ts(e,t):ke},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new mn(e),r,s;for(i.smoothChildTiming=yn(e.smoothChildTiming),mt.remove(i),i._dp=0,i._time=i._tTime=mt._time,r=mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&wi(i,r,r._start-r._delay),r=s;return wi(mt,i,0),i},context:function(e,t){return e?new Py(e,t):dt},matchMedia:function(e){return new KT(e)},matchMediaRefresh:function(){return ws.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||mh()},addEventListener:function(e,t){var i=Lu[e]||(Lu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Lu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:CT,wrapYoyo:RT,distribute:cy,random:dy,snap:fy,normalize:AT,getUnit:Qt,clamp:MT,splitColor:gy,toArray:Jn,selector:dh,mapRange:py,pipe:TT,unitize:wT,interpolate:PT,shuffle:uy},install:Zx,effects:wf,ticker:In,updateRoot:mn.updateRoot,plugins:Dn,globalTimeline:mt,core:{PropTween:Mn,globals:Qx,Tween:Rt,Timeline:mn,Animation:ll,getCache:Ms,_removeLinkedListItem:Bc,reverting:function(){return Wt},context:function(e){return e&&dt&&(dt.data.push(e),e._ctx=dt),dt},suppressOverwrites:function(e){return rm=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return pc[n]=Rt[n]});In.add(mn.updateRoot);go=pc.to({},{duration:0});var ZT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},QT=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=ZT(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},bf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(zt(s)&&(l={},Sn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}QT(a,s)}}}},wn=pc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Wt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},bf("roundProps",hh),bf("modifiers"),bf("snap",fy))||pc;Rt.version=mn.version=wn.version="3.15.0";Kx=1;om()&&Ho();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hg,Tr,Ao,vm,gs,pg,xm,JT=function(){return typeof window<"u"},tr={},us=180/Math.PI,Co=Math.PI/180,Hs=Math.atan2,mg=1e8,ym=/([A-Z])/g,ew=/(left|right|width|margin|padding|x)/i,tw=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_h=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},by=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ly=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ow=function(e,t,i){return e.style[t]=i},aw=function(e,t,i){return e.style.setProperty(t,i)},lw=function(e,t,i){return e._gsap[t]=i},uw=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},cw=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},fw=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},_t="transform",En=_t+"Origin",dw=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Gi(r,a)}):this.tfm[e]=o.x?o[e]:Gi(r,e),e===En&&(this.tfm.zOrigin=o.zOrigin);else return Ai.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(_t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},Dy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hw=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ym,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xm(),(!s||!s.isStart)&&!i[_t]&&(Dy(i),r.zOrigin&&i[En]&&(i[En]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Iy=function(e,t){var i={target:e,props:[],revert:hw,save:dw};return e._gsap||wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Ny,gh=function(e,t){var i=Tr.createElementNS?Tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Tr.createElement(e);return i&&i.style?i:Tr.createElement(e)},Fn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ym,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Go(t)||t,1)||""},_g="O,Moz,ms,Ms,Webkit".split(","),Go=function(e,t,i){var r=t||gs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(_g[o]+e in s););return o<0?null:(o===3?"ms":o>=0?_g[o]:"")+e},vh=function(){JT()&&window.document&&(hg=window,Tr=hg.document,Ao=Tr.documentElement,gs=gh("div")||{style:{}},gh("div"),_t=Go(_t),En=_t+"Origin",gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ny=!!Go("perspective"),xm=wn.core.reverting,vm=1)},gg=function(e){var t=e.ownerSVGElement,i=gh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ao.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ao.removeChild(i),s},vg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Uy=function(e){var t,i;try{t=e.getBBox()}catch{t=gg(e),i=1}return t&&(t.width||t.height)||i||(t=gg(e)),t&&!t.width&&!t.x&&!t.y?{x:+vg(e,["x","cx","x1"])||0,y:+vg(e,["y","cy","y1"])||0,width:0,height:0}:t},Oy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Uy(e))},Hr=function(e,t){if(t){var i=e.style,r;t in tr&&t!==En&&(t=_t),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(ym,"-$1").toLowerCase())):i.removeAttribute(t)}},wr=function(e,t,i,r,s,o){var a=new Mn(e._pt,t,i,0,1,o?Ly:by);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},xg={deg:1,rad:1,turn:1},pw={grid:1,flex:1},Gr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=gs.style,l=ew.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",m=r==="%",v,_,p,d;if(r===o||!s||xg[r]||xg[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&Oy(e),(m||o==="%")&&(tr[t]||~t.indexOf("adius")))return v=d?e.getBBox()[l?"width":"height"]:e[c],Et(m?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Tr||!_.appendChild)&&(_=Tr.body),p=_._gsap,p&&m&&p.width&&l&&p.time===In.time&&!p.uncache)return Et(s/p.width*f);if(m&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=f+r,v=e[c],g?e.style[t]=g:Hr(e,t)}else(m||o==="%")&&!pw[Fn(_,"display")]&&(a.position=Fn(e,"position")),_===e&&(a.position="static"),_.appendChild(gs),v=gs[c],_.removeChild(gs),a.position="absolute";return l&&m&&(p=Ms(_),p.time=In.time,p.width=_[c]),Et(h?v*s/f:v&&s?f/v*s:0)},Gi=function(e,t,i,r){var s;return vm||vh(),t in Ai&&t!=="transform"&&(t=Ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=cl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_c(Fn(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=mc[t]&&mc[t](e,t,i)||Fn(e,t)||ey(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gr(e,t,s,i)+i:s},mw=function(e,t,i,r){if(!i||i==="none"){var s=Go(t,e,1),o=s&&Fn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Fn(e,"borderTopColor"))}var a=new Mn(this._pt,e.style,t,0,1,Cy),l=0,u=0,c,f,h,m,v,_,p,d,g,x,S,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Fn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Fn(e,t)||r,_?e.style[t]=_:Hr(e,t)),c=[i,r],xy(c),i=c[0],r=c[1],h=i.match(_o)||[],A=r.match(_o)||[],A.length){for(;f=_o.exec(r);)p=f[0],g=r.substring(l,f.index),v?v=(v+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(v=1),p!==(_=h[u++]||"")&&(m=parseFloat(_)||0,S=_.substr((m+"").length),p.charAt(1)==="="&&(p=wo(m,p)+S),d=parseFloat(p),x=p.substr((d+"").length),l=_o.lastIndex-x.length,x||(x=x||Bn.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(m=Gr(e,t,_,x)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:m,c:d-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Ly:by;return qx.test(r)&&(a.e=0),this._pt=a,a},yg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_w=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=yg[i]||i,t[1]=yg[r]||r,t.join(" ")},gw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],tr[a]&&(l=1,a=a==="transformOrigin"?En:_t),Hr(i,a);l&&(Hr(i,_t),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",cl(i,1),o.uncache=1,Dy(r)))}},mc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Mn(e._pt,t,i,0,0,gw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ul=[1,0,0,1,0,0],Fy={},ky=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sg=function(e){var t=Fn(e,_t);return ky(t)?ul:t.substr(7).match($x).map(Et)},Sm=function(e,t){var i=e._gsap||Ms(e),r=e.style,s=Sg(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ul:s):(s===ul&&!e.offsetParent&&e!==Ao&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ao.appendChild(e)),s=Sg(e),l?r.display=l:Hr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Sm(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,m=l[0],v=l[1],_=l[2],p=l[3],d=l[4],g=l[5],x=t.split(" "),S=parseFloat(x[0])||0,A=parseFloat(x[1])||0,C,M,R,D;i?l!==ul&&(M=m*p-v*_)&&(R=S*(p/M)+A*(-_/M)+(_*g-p*d)/M,D=S*(-v/M)+A*(m/M)-(m*g-v*d)/M,S=R,A=D):(C=Uy(e),S=C.x+(~x[0].indexOf("%")?S/100*C.width:S),A=C.y+(~(x[1]||x[0]).indexOf("%")?A/100*C.height:A)),r||r!==!1&&a.smooth?(d=S-u,g=A-c,a.xOffset=f+(d*m+g*_)-d,a.yOffset=h+(d*v+g*p)-g):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[En]="0px 0px",o&&(wr(o,a,"xOrigin",u,S),wr(o,a,"yOrigin",c,A),wr(o,a,"xOffset",f,a.xOffset),wr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+A)},cl=function(e,t){var i=e._gsap||new Sy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Fn(e,En)||"0",c,f,h,m,v,_,p,d,g,x,S,A,C,M,R,D,y,T,F,O,W,$,B,Y,b,H,q,re,Se,Oe,X,ee;return c=f=h=_=p=d=g=x=S=0,m=v=1,i.svg=!!(e.getCTM&&Oy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),M=Sm(e,i.svg),i.svg&&(i.uncache?(b=e.getBBox(),u=i.xOrigin-b.x+"px "+(i.yOrigin-b.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),xh(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),A=i.xOrigin||0,C=i.yOrigin||0,M!==ul&&(T=M[0],F=M[1],O=M[2],W=M[3],c=$=M[4],f=B=M[5],M.length===6?(m=Math.sqrt(T*T+F*F),v=Math.sqrt(W*W+O*O),_=T||F?Hs(F,T)*us:0,g=O||W?Hs(O,W)*us+_:0,g&&(v*=Math.abs(Math.cos(g*Co))),i.svg&&(c-=A-(A*T+C*O),f-=C-(A*F+C*W))):(ee=M[6],Oe=M[7],q=M[8],re=M[9],Se=M[10],X=M[11],c=M[12],f=M[13],h=M[14],R=Hs(ee,Se),p=R*us,R&&(D=Math.cos(-R),y=Math.sin(-R),Y=$*D+q*y,b=B*D+re*y,H=ee*D+Se*y,q=$*-y+q*D,re=B*-y+re*D,Se=ee*-y+Se*D,X=Oe*-y+X*D,$=Y,B=b,ee=H),R=Hs(-O,Se),d=R*us,R&&(D=Math.cos(-R),y=Math.sin(-R),Y=T*D-q*y,b=F*D-re*y,H=O*D-Se*y,X=W*y+X*D,T=Y,F=b,O=H),R=Hs(F,T),_=R*us,R&&(D=Math.cos(R),y=Math.sin(R),Y=T*D+F*y,b=$*D+B*y,F=F*D-T*y,B=B*D-$*y,T=Y,$=b),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=Et(Math.sqrt(T*T+F*F+O*O)),v=Et(Math.sqrt(B*B+ee*ee)),R=Hs($,B),g=Math.abs(R)>2e-4?R*us:0,S=X?1/(X<0?-X:X):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ky(Fn(e,_t)),Y&&e.setAttribute("transform",Y))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(m*=-1,g+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Et(m),i.scaleY=Et(v),i.rotation=Et(_)+a,i.rotationX=Et(p)+a,i.rotationY=Et(d)+a,i.skewX=g+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[En]=_c(u)),i.xOffset=i.yOffset=0,i.force3D=Bn.force3D,i.renderTransform=i.svg?xw:Ny?By:vw,i.uncache=0,i},_c=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lf=function(e,t,i){var r=Qt(t);return Et(parseFloat(t)+parseFloat(Gr(e,"x",i+"px",r)))+r},vw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,By(e,t)},Qr="0deg",ca="0px",Jr=") ",By=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,m=i.skewY,v=i.scaleX,_=i.scaleY,p=i.transformPerspective,d=i.force3D,g=i.target,x=i.zOrigin,S="",A=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==Qr||c!==Qr)){var C=parseFloat(c)*Co,M=Math.sin(C),R=Math.cos(C),D;C=parseFloat(f)*Co,D=Math.cos(C),o=Lf(g,o,M*D*-x),a=Lf(g,a,-Math.sin(C)*-x),l=Lf(g,l,R*D*-x+x)}p!==ca&&(S+="perspective("+p+Jr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(A||o!==ca||a!==ca||l!==ca)&&(S+=l!==ca||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Jr),u!==Qr&&(S+="rotate("+u+Jr),c!==Qr&&(S+="rotateY("+c+Jr),f!==Qr&&(S+="rotateX("+f+Jr),(h!==Qr||m!==Qr)&&(S+="skew("+h+", "+m+Jr),(v!==1||_!==1)&&(S+="scale("+v+", "+_+Jr),g.style[_t]=S||"translate(0, 0)"},xw=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,m=i.target,v=i.xOrigin,_=i.yOrigin,p=i.xOffset,d=i.yOffset,g=i.forceCSS,x=parseFloat(o),S=parseFloat(a),A,C,M,R,D;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Co,u*=Co,A=Math.cos(l)*f,C=Math.sin(l)*f,M=Math.sin(l-u)*-h,R=Math.cos(l-u)*h,u&&(c*=Co,D=Math.tan(u-c),D=Math.sqrt(1+D*D),M*=D,R*=D,c&&(D=Math.tan(c),D=Math.sqrt(1+D*D),A*=D,C*=D)),A=Et(A),C=Et(C),M=Et(M),R=Et(R)):(A=f,R=h,C=M=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Gr(m,"x",o,"px"),S=Gr(m,"y",a,"px")),(v||_||p||d)&&(x=Et(x+v-(v*A+_*M)+p),S=Et(S+_-(v*C+_*R)+d)),(r||s)&&(D=m.getBBox(),x=Et(x+r/100*D.width),S=Et(S+s/100*D.height)),D="matrix("+A+","+C+","+M+","+R+","+x+","+S+")",m.setAttribute("transform",D),g&&(m.style[_t]=D)},yw=function(e,t,i,r,s){var o=360,a=zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?us:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*mg)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*mg)%o-~~(u/o)*o)),e._pt=h=new Mn(e._pt,t,i,r,u,nw),h.e=c,h.u="deg",e._props.push(i),h},Mg=function(e,t){for(var i in t)e[i]=t[i];return e},Sw=function(e,t,i){var r=Mg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,m,v;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[_t]=t,a=cl(i,1),Hr(i,_t),i.setAttribute("transform",u)):(u=getComputedStyle(i)[_t],o[_t]=t,a=cl(i,1),o[_t]=u);for(l in tr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=Qt(u),v=Qt(c),f=m!==v?Gr(i,l,u,v):parseFloat(u),h=parseFloat(c),e._pt=new Mn(e._pt,a,l,f,h-f,_h),e._pt.u=v||0,e._props.push(l));Mg(a,r)};Sn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});mc[e>1?"border"+n:n]=function(a,l,u,c,f){var h,m;if(arguments.length<4)return h=o.map(function(v){return Gi(a,v,u)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(c+"").split(" "),m={},o.forEach(function(v,_){return m[v]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,m,f)}});var zy={name:"css",register:vh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,m,v,_,p,d,g,x,S,A,C,M,R,D;vm||vh(),this.styles=this.styles||Iy(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Dn[_]&&My(_,t,i,r,e,s)))){if(m=typeof c,v=mc[_],m==="function"&&(c=c.call(i,r,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=ol(c)),v)v(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Or.lastIndex=0,Or.test(u)||(p=Qt(u),d=Qt(c),d?p!==d&&(u=Gr(e,_,u,d)+d):p&&(c+=p)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],zt(u)&&~u.indexOf("random(")&&(u=ol(u)),Qt(u+"")||u==="auto"||(u+=Bn.units[_]||Qt(Gi(e,_))||""),(u+"").charAt(1)==="="&&(u=Gi(e,_))):u=Gi(e,_),h=parseFloat(u),g=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),f=parseFloat(c),_ in Ai&&(_==="autoAlpha"&&(h===1&&Gi(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,a.visibility),wr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in tr,x){if(this.styles.save(_),D=c,m==="string"&&c.substring(0,6)==="var(--"){if(c=Fn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=c,c=Fn(e,"perspective"),y?e.style.perspective=y:Hr(e,"perspective")}f=parseFloat(c)}if(S||(A=e._gsap,A.renderTransform&&!t.parseTransform||cl(e,t.parseTransform),C=t.smoothOrigin!==!1&&A.smooth,S=this._pt=new Mn(this._pt,a,_t,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new Mn(this._pt,A,"scaleY",A.scaleY,(g?wo(A.scaleY,g+f):f)-A.scaleY||0,_h),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(En,0,a[En]),c=_w(c),A.svg?xh(e,c,0,C,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==A.zOrigin&&wr(this,A,"zOrigin",A.zOrigin,d),wr(this,a,_,_c(u),_c(c)));continue}else if(_==="svgOrigin"){xh(e,c,1,C,0,this);continue}else if(_ in Fy){yw(this,A,_,h,g?wo(h,g+c):c);continue}else if(_==="smoothOrigin"){wr(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){Sw(this,c,e);continue}}else _ in a||(_=Go(_)||_);if(x||(f||f===0)&&(h||h===0)&&!tw.test(c)&&_ in a)p=(u+"").substr((h+"").length),f||(f=0),d=Qt(c)||(_ in Bn.units?Bn.units[_]:p),p!==d&&(h=Gr(e,_,u,d)),this._pt=new Mn(this._pt,x?A:a,_,h,(g?wo(h,g+f):f)-h,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?sw:_h),this._pt.u=d||0,x&&D!==c?(this._pt.b=u,this._pt.e=D,this._pt.r=rw):p!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=iw);else if(_ in a)mw.call(this,e,_,u,g?g+c:c);else if(_ in e)this.add(e,_,u||e[_],g?g+c:c,r,s);else if(_!=="parseTransform"){lm(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}M&&Ry(this)},render:function(e,t){if(t.tween._time||!xm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Gi,aliases:Ai,getSetter:function(e,t,i){var r=Ai[t];return r&&r.indexOf(",")<0&&(t=r),t in tr&&t!==En&&(e._gsap.x||Gi(e,"x"))?i&&pg===i?t==="scale"?uw:lw:(pg=i||{})&&(t==="scale"?cw:fw):e.style&&!sm(e.style[t])?ow:~t.indexOf("-")?aw:_m(e,t)},core:{_removeProperty:Hr,_getMatrix:Sm}};wn.utils.checkPrefix=Go;wn.core.getStyleSaver=Iy;(function(n,e,t,i){var r=Sn(n+","+e+","+t,function(s){tr[s]=1});Sn(e,function(s){Bn.units[s]="deg",Fy[s]=1}),Ai[r[13]]=n+","+e,Sn(i,function(s){var o=s.split(":");Ai[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Bn.units[n]="px"});wn.registerPlugin(zy);var Ro=wn.registerPlugin(zy)||wn;Ro.core.Tween;const Mw="_dot_1sa4d_1",Ew="_ring_1sa4d_2",Tw="_active_1sa4d_40",Yl={dot:Mw,ring:Ew,active:Tw};function ww(){const n=ie.useRef(null),e=ie.useRef(null),t=ie.useRef({x:-100,y:-100}),i=ie.useRef({x:-100,y:-100});return ie.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const r=u=>{i.current.x=u.clientX,i.current.y=u.clientY,Ro.to(n.current,{x:u.clientX,y:u.clientY,duration:.05,ease:"power2.out"})},s=()=>{t.current.x+=(i.current.x-t.current.x)*.18,t.current.y+=(i.current.y-t.current.y)*.18,e.current&&(e.current.style.transform=`translate(${t.current.x}px, ${t.current.y}px) translate(-50%, -50%)`),o=requestAnimationFrame(s)};let o=requestAnimationFrame(s);const a=u=>{var f;u.target.closest('a, button, [data-cursor="hover"]')&&((f=e.current)==null||f.classList.add(Yl.active))},l=u=>{var f;u.target.closest('a, button, [data-cursor="hover"]')&&((f=e.current)==null||f.classList.remove(Yl.active))};return window.addEventListener("mousemove",r),document.addEventListener("mouseover",a),document.addEventListener("mouseout",l),()=>{cancelAnimationFrame(o),window.removeEventListener("mousemove",r),document.removeEventListener("mouseover",a),document.removeEventListener("mouseout",l)}},[]),K.jsxs(K.Fragment,{children:[K.jsx("div",{ref:e,className:Yl.ring,"aria-hidden":!0}),K.jsx("div",{ref:n,className:Yl.dot,"aria-hidden":!0})]})}const Eg=n=>`/edk/${n.replace(/^\//,"")}`,cn=(n,e,t,i,r="#0a0a0a")=>`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${n} ${e}'>
      <rect width='${n}' height='${e}' fill='${t}'/>
      <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle'
        fill='${r}' font-family='Helvetica, sans-serif'
        font-size='${Math.round(n/10)}' font-weight='700' letter-spacing='4'>${i}</text>
    </svg>`)}`,Wo={hero_base:Eg("images/hero-base.jpg"),hero_hover:Eg("images/hero-hover.jpeg"),about:cn(800,1e3,"#f0f0f0","ABOUT"),works:{"original-by-nature":cn(900,1200,"#f0f0f0","ORIGINAL BY NATURE"),magic:cn(900,1200,"#ececec","MAGIC"),prompt:cn(900,1200,"#e8e8e8","/PROMPT"),"beauty-of-new-era":cn(900,1200,"#f0f0f0","BEAUTY OF NEW ERA"),"immersive-experience-ddm":cn(900,1200,"#ececec","IMMERSIVE DDM"),"3-as-1":cn(900,1200,"#e8e8e8","3 AS 1"),"human-at-incheon-foundation":cn(900,1200,"#f0f0f0","HUMAN AT INCHEON"),"stressed-of-the-whole-world":cn(900,1200,"#ececec","STRESSED"),"an-odasi":cn(900,1200,"#e8e8e8","AN ODASI"),hollow:cn(900,1200,"#f0f0f0","HOLLOW"),neospine:cn(900,1200,"#ececec","NEOSPINE"),texthibition:cn(900,1200,"#e8e8e8","TEXTHIBITION"),datamarket:cn(900,1200,"#f0f0f0","DATAMARKET")}},fi=[{id:1,title:"ORIGINAL BY NATURE x MERCADO",slug:"original-by-nature",year:2022,description:"[PROJECT_DESCRIPTION]"},{id:2,title:"MAGIC",slug:"magic",year:2024,description:"[PROJECT_DESCRIPTION]"},{id:3,title:"/PROMPT",slug:"prompt",year:2024,description:"[PROJECT_DESCRIPTION]"},{id:4,title:"BEAUTY OF NEW ERA",slug:"beauty-of-new-era",year:2023,description:"[PROJECT_DESCRIPTION]"},{id:5,title:"IMMERSIVE EXPERIENCE DDM",slug:"immersive-experience-ddm",year:2024,description:"[PROJECT_DESCRIPTION]"},{id:6,title:"3 AS 1",slug:"3-as-1",year:2022,description:"[PROJECT_DESCRIPTION]"},{id:7,title:"HUMAN AT INCHEON FOUNDATION",slug:"human-at-incheon-foundation",year:2023,description:"[PROJECT_DESCRIPTION]"},{id:8,title:"STRESSED OF THE WHOLE WORLD",slug:"stressed-of-the-whole-world",year:2023,description:"[PROJECT_DESCRIPTION]"},{id:9,title:"AN ODASI",slug:"an-odasi",year:2022,description:"[PROJECT_DESCRIPTION]"},{id:10,title:"HOLLOW",slug:"hollow",year:2024,description:"[PROJECT_DESCRIPTION]"},{id:11,title:"NEOSPINE",slug:"neospine",year:2023,description:"[PROJECT_DESCRIPTION]"},{id:12,title:"TEXTHIBITION",slug:"texthibition",year:2024,description:"[PROJECT_DESCRIPTION]"},{id:13,title:"DATAMARKET",slug:"datamarket",year:2023,description:"[PROJECT_DESCRIPTION]"}],Df={heading:"ECEM DİLAN KÖSE",subheading:"Conceptual Artist / Istanbul",bio:"[BIO_TEXT]"},fa={email:"[CONTACT_EMAIL]",instagram:"https://www.instagram.com/ecemdilankose/",website:"https://ecemdilankose.com"},Aw="_bar_13ae6_1",Cw="_burger_13ae6_21",Rw="_burgerOpen_13ae6_41",Pw="_logo_13ae6_45",bw="_overlay_13ae6_58",Lw="_hoverBg_13ae6_73",Dw="_hoverImg_13ae6_80",Iw="_hoverImgActive_13ae6_95",Nw="_menu_13ae6_104",Uw="_item_13ae6_122",Ow="_link_13ae6_124",Fw="_subList_13ae6_140",kw="_subListOpen_13ae6_151",Bw="_subLink_13ae6_157",$t={bar:Aw,burger:Cw,burgerOpen:Rw,logo:Pw,overlay:bw,hoverBg:Lw,hoverImg:Dw,hoverImgActive:Iw,menu:Nw,item:Uw,link:Ow,subList:Fw,subListOpen:kw,subLink:Bw};function zw(){const[n,e]=ie.useState(!1),[t,i]=ie.useState(!1),[r,s]=ie.useState(null),o=ie.useRef(null),a=ie.useRef(null),l=im();ie.useEffect(()=>{var c;o.current&&(n?(document.body.style.overflow="hidden",Ro.to(o.current,{autoAlpha:1,duration:.4,ease:"power3.out"}),Ro.fromTo(((c=a.current)==null?void 0:c.children)||[],{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.5,stagger:.06,ease:"power3.out",delay:.1})):(document.body.style.overflow="",s(null),i(!1),Ro.to(o.current,{autoAlpha:0,duration:.3,ease:"power3.in"})))},[n]);const u=c=>{e(!1),setTimeout(()=>l(c),350)};return K.jsxs(K.Fragment,{children:[K.jsxs("header",{className:$t.bar,children:[K.jsxs("button",{onClick:()=>e(c=>!c),className:`${$t.burger} ${n?$t.burgerOpen:""}`,"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:[K.jsx("span",{}),K.jsx("span",{})]}),K.jsx("button",{onClick:()=>u("/"),className:$t.logo,"aria-label":"Home",children:"ECEM DİLAN KÖSE"})]}),K.jsxs("div",{ref:o,className:$t.overlay,"aria-hidden":!n,children:[K.jsx("div",{className:$t.hoverBg,children:fi.map(c=>K.jsx("img",{src:Wo.works[c.slug],alt:"",className:`${$t.hoverImg} ${r===c.slug?$t.hoverImgActive:""}`},c.slug))}),K.jsxs("nav",{ref:a,className:$t.menu,children:[K.jsxs("div",{className:$t.item,children:[K.jsx("button",{className:$t.link,onMouseEnter:()=>i(!0),onClick:()=>{window.matchMedia("(pointer: coarse)").matches?i(c=>!c):u("/works")},children:"WORKS"}),K.jsx("div",{className:`${$t.subList} ${t?$t.subListOpen:""}`,onMouseLeave:()=>{i(!1),s(null)},children:fi.map(c=>K.jsx(Na,{to:`/works/${c.slug}`,className:$t.subLink,onMouseEnter:()=>s(c.slug),onMouseLeave:()=>s(null),onClick:()=>e(!1),children:c.title},c.slug))})]}),K.jsx("button",{className:$t.link,onClick:()=>u("/about"),children:"ABOUT"}),K.jsx("button",{className:$t.link,onClick:()=>u("/contact"),children:"CONTACT"})]})]})]})}const Vw="_panel_1ogm4_1",Hw="_label_1ogm4_15",Tg={panel:Vw,label:Hw};function Gw(){const n=ie.useRef(null),e=ie.useRef(null),t=xl(),i=ie.useRef(!0);return ie.useEffect(()=>{if(i.current){i.current=!1;return}const r=n.current;if(!r)return;Ro.timeline().set(r,{yPercent:100,autoAlpha:1}).to(r,{yPercent:0,duration:.45,ease:"power3.inOut"}).to(e.current,{autoAlpha:1,duration:.15},"-=0.15").to({},{duration:.1}).to(r,{yPercent:-100,duration:.55,ease:"power3.inOut"}).set(r,{autoAlpha:0,yPercent:100}).set(e.current,{autoAlpha:0}),window.scrollTo(0,0)},[t.pathname]),K.jsx("div",{ref:n,className:Tg.panel,"aria-hidden":!0,children:K.jsx("span",{ref:e,className:Tg.label,children:"EDK"})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mm="169",Ww=0,wg=1,Xw=2,Vy=1,jw=2,Bi=3,Wr=0,Tn=1,Wi=2,Fr=0,Po=1,Ag=2,Cg=3,Rg=4,Yw=5,ds=100,$w=101,qw=102,Kw=103,Zw=104,Qw=200,Jw=201,eA=202,tA=203,yh=204,Sh=205,nA=206,iA=207,rA=208,sA=209,oA=210,aA=211,lA=212,uA=213,cA=214,Mh=0,Eh=1,Th=2,Xo=3,wh=4,Ah=5,Ch=6,Rh=7,Hy=0,fA=1,dA=2,kr=0,hA=1,pA=2,mA=3,_A=4,gA=5,vA=6,xA=7,Gy=300,jo=301,Yo=302,Ph=303,bh=304,Hc=306,Lh=1e3,vs=1001,Dh=1002,ei=1003,yA=1004,$l=1005,Nn=1006,If=1007,xs=1008,nr=1009,Wy=1010,Xy=1011,fl=1012,Em=1013,Ds=1014,Yi=1015,Sl=1016,Tm=1017,wm=1018,$o=1020,jy=35902,Yy=1021,$y=1022,mi=1023,qy=1024,Ky=1025,bo=1026,qo=1027,Zy=1028,Am=1029,Qy=1030,Cm=1031,Rm=1033,Du=33776,Iu=33777,Nu=33778,Uu=33779,Ih=35840,Nh=35841,Uh=35842,Oh=35843,Fh=36196,kh=37492,Bh=37496,zh=37808,Vh=37809,Hh=37810,Gh=37811,Wh=37812,Xh=37813,jh=37814,Yh=37815,$h=37816,qh=37817,Kh=37818,Zh=37819,Qh=37820,Jh=37821,Ou=36492,ep=36494,tp=36495,Jy=36283,np=36284,ip=36285,rp=36286,SA=3200,MA=3201,EA=0,TA=1,xr="",Mi="srgb",Kr="srgb-linear",Pm="display-p3",Gc="display-p3-linear",gc="linear",ut="srgb",vc="rec709",xc="p3",Gs=7680,Pg=519,wA=512,AA=513,CA=514,eS=515,RA=516,PA=517,bA=518,LA=519,bg=35044,Lg="300 es",$i=2e3,yc=2001;class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=Math.PI/180,sp=180/Math.PI;function Ml(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function pn(n,e,t){return Math.max(e,Math.min(t,n))}function DA(n,e){return(n%e+e)%e}function Uf(n,e,t){return(1-t)*n+t*e}function da(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,r,s,o,a,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],v=i[8],_=r[0],p=r[3],d=r[6],g=r[1],x=r[4],S=r[7],A=r[2],C=r[5],M=r[8];return s[0]=o*_+a*g+l*A,s[3]=o*p+a*x+l*C,s[6]=o*d+a*S+l*M,s[1]=u*_+c*g+f*A,s[4]=u*p+c*x+f*C,s[7]=u*d+c*S+f*M,s[2]=h*_+m*g+v*A,s[5]=h*p+m*x+v*C,s[8]=h*d+m*S+v*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,v=t*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Of.makeScale(e,t)),this}rotate(e){return this.premultiply(Of.makeRotation(-e)),this}translate(e,t){return this.premultiply(Of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Of=new Ue;function tS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function IA(){const n=dl("canvas");return n.style.display="block",n}const Dg={};function Fu(n){n in Dg||(Dg[n]=!0,console.warn(n))}function NA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function UA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function OA(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ig=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ng=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ha={[Kr]:{transfer:gc,primaries:vc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Mi]:{transfer:ut,primaries:vc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Gc]:{transfer:gc,primaries:xc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ng),fromReference:n=>n.applyMatrix3(Ig)},[Pm]:{transfer:ut,primaries:xc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ng),fromReference:n=>n.applyMatrix3(Ig).convertLinearToSRGB()}},FA=new Set([Kr,Gc]),Ke={enabled:!0,_workingColorSpace:Kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!FA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ha[e].toReference,r=ha[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ha[n].primaries},getTransfer:function(n){return n===xr?gc:ha[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ha[e].luminanceCoefficients)}};function Lo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ff(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ws;class kA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=dl("canvas")),Ws.width=e.width,Ws.height=e.height;const i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Lo(t[i]/255)*255):t[i]=Lo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BA=0;class nS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kf(r[o].image)):s.push(kf(r[o]))}else s=kf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function kf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zA=0;class sn extends ea{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=vs,r=vs,s=Nn,o=xs,a=mi,l=nr,u=sn.DEFAULT_ANISOTROPY,c=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=Ml(),this.name="",this.source=new nS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lh:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lh:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Gy;sn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],v=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(m+1)/2,A=(d+1)/2,C=(c+h)/4,M=(f+_)/4,R=(v+p)/4;return x>S&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=M/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=R/s),this.set(i,r,s,t),this}let g=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(f-_)/g,this.z=(h-c)/g,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VA extends ea{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends VA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class iS extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HA extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==h||u!==m||c!==v){let p=1-a;const d=l*h+u*m+c*v+f*_,g=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,d*g);p=Math.sin(p*C)/A,a=Math.sin(a*C)/A}const S=a*g;if(l=l*p+h*S,u=u*p+m*S,c=c*p+v*S,f=f*p+_*S,p===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=A,u*=A,c*=A,f*=A}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+c*f+l*m-u*h,e[t+1]=l*v+c*h+u*f-a*m,e[t+2]=u*v+c*m+a*h-l*f,e[t+3]=c*v-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f-h*m*v;break;case"YXZ":this._x=h*c*f+u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f+h*m*v;break;case"ZXY":this._x=h*c*f-u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f-h*m*v;break;case"ZYX":this._x=h*c*f-u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f+h*m*v;break;case"YZX":this._x=h*c*f+u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f-h*m*v;break;case"XZY":this._x=h*c*f-u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bf=new G,Ug=new El;class Tl{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ql.copy(i.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Kl.subVectors(this.max,pa),Xs.subVectors(e.a,pa),js.subVectors(e.b,pa),Ys.subVectors(e.c,pa),lr.subVectors(js,Xs),ur.subVectors(Ys,js),es.subVectors(Xs,Ys);let t=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-es.z,es.y,lr.z,0,-lr.x,ur.z,0,-ur.x,es.z,0,-es.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-es.y,es.x,0];return!zf(t,Xs,js,Ys,Kl)||(t=[1,0,0,0,1,0,0,0,1],!zf(t,Xs,js,Ys,Kl))?!1:(Zl.crossVectors(lr,ur),t=[Zl.x,Zl.y,Zl.z],zf(t,Xs,js,Ys,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new G,new G,new G,new G,new G,new G,new G,new G],oi=new G,ql=new Tl,Xs=new G,js=new G,Ys=new G,lr=new G,ur=new G,es=new G,pa=new G,Kl=new G,Zl=new G,ts=new G;function zf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ts.fromArray(n,s);const a=r.x*Math.abs(ts.x)+r.y*Math.abs(ts.y)+r.z*Math.abs(ts.z),l=e.dot(ts),u=t.dot(ts),c=i.dot(ts);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const GA=new Tl,ma=new G,Vf=new G;class bm{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):GA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Vf)),this.expandByPoint(ma.copy(e.center).sub(Vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new G,Hf=new G,Ql=new G,cr=new G,Gf=new G,Jl=new G,Wf=new G;class WA{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hf.copy(e).add(t).multiplyScalar(.5),Ql.copy(t).sub(e).normalize(),cr.copy(this.origin).sub(Hf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ql),a=cr.dot(this.direction),l=-cr.dot(Ql),u=cr.lengthSq(),c=Math.abs(1-o*o);let f,h,m,v;if(c>0)if(f=o*l-a,h=o*a-l,v=s*c,f>=0)if(h>=-v)if(h<=v){const _=1/c;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Hf).addScaledVector(Ql,h),m}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){Gf.subVectors(t,e),Jl.subVectors(i,e),Wf.crossVectors(Gf,Jl);let o=this.direction.dot(Wf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cr.subVectors(this.origin,e);const l=a*this.direction.dot(Jl.crossVectors(cr,Jl));if(l<0)return null;const u=a*this.direction.dot(Gf.cross(cr));if(u<0||l+u>o)return null;const c=-a*cr.dot(Wf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,m,v,_,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,m,v,_,p)}set(e,t,i,r,s,o,a,l,u,c,f,h,m,v,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,v=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+v*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=v+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,v=u*c,_=u*f;t[0]=h+_*a,t[4]=v*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-v,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,v=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,v=a*c,_=a*f;t[0]=l*c,t[4]=v*u-m,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=m*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+v,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XA,e,jA)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),fr.crossVectors(i,Pn),fr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),fr.crossVectors(i,Pn)),fr.normalize(),eu.crossVectors(Pn,fr),r[0]=fr.x,r[4]=eu.x,r[8]=Pn.x,r[1]=fr.y,r[5]=eu.y,r[9]=Pn.y,r[2]=fr.z,r[6]=eu.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],v=i[2],_=i[6],p=i[10],d=i[14],g=i[3],x=i[7],S=i[11],A=i[15],C=r[0],M=r[4],R=r[8],D=r[12],y=r[1],T=r[5],F=r[9],O=r[13],W=r[2],$=r[6],B=r[10],Y=r[14],b=r[3],H=r[7],q=r[11],re=r[15];return s[0]=o*C+a*y+l*W+u*b,s[4]=o*M+a*T+l*$+u*H,s[8]=o*R+a*F+l*B+u*q,s[12]=o*D+a*O+l*Y+u*re,s[1]=c*C+f*y+h*W+m*b,s[5]=c*M+f*T+h*$+m*H,s[9]=c*R+f*F+h*B+m*q,s[13]=c*D+f*O+h*Y+m*re,s[2]=v*C+_*y+p*W+d*b,s[6]=v*M+_*T+p*$+d*H,s[10]=v*R+_*F+p*B+d*q,s[14]=v*D+_*O+p*Y+d*re,s[3]=g*C+x*y+S*W+A*b,s[7]=g*M+x*T+S*$+A*H,s[11]=g*R+x*F+S*B+A*q,s[15]=g*D+x*O+S*Y+A*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],v=e[3],_=e[7],p=e[11],d=e[15];return v*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+_*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+p*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],v=e[12],_=e[13],p=e[14],d=e[15],g=f*p*u-_*h*u+_*l*m-a*p*m-f*l*d+a*h*d,x=v*h*u-c*p*u-v*l*m+o*p*m+c*l*d-o*h*d,S=c*_*u-v*f*u+v*a*m-o*_*m-c*a*d+o*f*d,A=v*f*l-c*_*l-v*a*h+o*_*h+c*a*p-o*f*p,C=t*g+i*x+r*S+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=g*M,e[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*d-i*h*d)*M,e[2]=(a*p*s-_*l*s+_*r*u-i*p*u-a*r*d+i*l*d)*M,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*M,e[4]=x*M,e[5]=(c*p*s-v*h*s+v*r*m-t*p*m-c*r*d+t*h*d)*M,e[6]=(v*l*s-o*p*s-v*r*u+t*p*u+o*r*d-t*l*d)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*M,e[8]=S*M,e[9]=(v*f*s-c*_*s-v*i*m+t*_*m+c*i*d-t*f*d)*M,e[10]=(o*_*s-v*a*s+v*i*u-t*_*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*M,e[12]=A*M,e[13]=(c*_*r-v*f*r+v*i*h-t*_*h-c*i*p+t*f*p)*M,e[14]=(v*a*r-o*_*r-v*i*l+t*_*l+o*i*p-t*a*p)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,v=s*f,_=o*c,p=o*f,d=a*f,g=l*u,x=l*c,S=l*f,A=i.x,C=i.y,M=i.z;return r[0]=(1-(_+d))*A,r[1]=(m+S)*A,r[2]=(v-x)*A,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(h+d))*C,r[6]=(p+g)*C,r[7]=0,r[8]=(v+x)*M,r[9]=(p-g)*M,r[10]=(1-(h+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$s.set(r[0],r[1],r[2]).length();const o=$s.set(r[4],r[5],r[6]).length(),a=$s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);const u=1/s,c=1/o,f=1/a;return ai.elements[0]*=u,ai.elements[1]*=u,ai.elements[2]*=u,ai.elements[4]*=c,ai.elements[5]*=c,ai.elements[6]*=c,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,t.setFromRotationMatrix(ai),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=$i){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(a===$i)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===yc)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=$i){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,m=(i+r)*c;let v,_;if(a===$i)v=(o+s)*f,_=-2*f;else if(a===yc)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $s=new G,ai=new Lt,XA=new G(0,0,0),jA=new G(1,1,1),fr=new G,eu=new G,Pn=new G,Og=new Lt,Fg=new El;class ir{constructor(e=0,t=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Og,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class rS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YA=0;const kg=new G,qs=new El,Ui=new Lt,tu=new G,_a=new G,$A=new G,qA=new El,Bg=new G(1,0,0),zg=new G(0,1,0),Vg=new G(0,0,1),Hg={type:"added"},KA={type:"removed"},Ks={type:"childadded",child:null},Xf={type:"childremoved",child:null};class zn extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new G,t=new ir,i=new El,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ue}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,t){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tu.copy(e):tu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(_a,tu,this.up):Ui.lookAt(tu,_a,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(Ui),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hg),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(KA),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hg),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,$A),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,qA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zn.DEFAULT_UP=new G(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new G,Oi=new G,jf=new G,Fi=new G,Zs=new G,Qs=new G,Gg=new G,Yf=new G,$f=new G,qf=new G,Kf=new wt,Zf=new wt,Qf=new wt;class pi{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),li.subVectors(e,t),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){li.subVectors(r,t),Oi.subVectors(i,t),jf.subVectors(e,t);const o=li.dot(li),a=li.dot(Oi),l=li.dot(jf),u=Oi.dot(Oi),c=Oi.dot(jf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Kf.setScalar(0),Zf.setScalar(0),Qf.setScalar(0),Kf.fromBufferAttribute(e,t),Zf.fromBufferAttribute(e,i),Qf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Kf,s.x),o.addScaledVector(Zf,s.y),o.addScaledVector(Qf,s.z),o}static isFrontFacing(e,t,i,r){return li.subVectors(i,t),Oi.subVectors(e,t),li.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),li.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zs.subVectors(r,i),Qs.subVectors(s,i),Yf.subVectors(e,i);const l=Zs.dot(Yf),u=Qs.dot(Yf);if(l<=0&&u<=0)return t.copy(i);$f.subVectors(e,r);const c=Zs.dot($f),f=Qs.dot($f);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Zs,o);qf.subVectors(e,s);const m=Zs.dot(qf),v=Qs.dot(qf);if(v>=0&&m<=v)return t.copy(s);const _=m*u-l*v;if(_<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(Qs,a);const p=c*v-m*f;if(p<=0&&f-c>=0&&m-v>=0)return Gg.subVectors(s,r),a=(f-c)/(f-c+(m-v)),t.copy(r).addScaledVector(Gg,a);const d=1/(p+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Zs,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},nu={h:0,s:0,l:0};function Jf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=DA(e,1),t=pn(t,0,1),i=pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jf(o,s,e+1/3),this.g=Jf(o,s,e),this.b=Jf(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Mi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const i=sS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ke.fromWorkingColorSpace(Kt.copy(this),e),Math.round(pn(Kt.r*255,0,255))*65536+Math.round(pn(Kt.g*255,0,255))*256+Math.round(pn(Kt.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Mi){Ke.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(nu);const i=Uf(dr.h,nu.h,t),r=Uf(dr.s,nu.s,t),s=Uf(dr.l,nu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new tt;tt.NAMES=sS;let ZA=0;class Wc extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=Po,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Sh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(i.blending=this.blending),this.side!==Wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yh&&(i.blendSrc=this.blendSrc),this.blendDst!==Sh&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oS extends Wc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Hy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new G,iu=new Je;class bi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bg,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)iu.fromBufferAttribute(this,t),iu.applyMatrix3(e),this.setXY(t,iu.x,iu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=da(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=da(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=da(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bg&&(e.usage=this.usage),e}}class aS extends bi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lS extends bi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class As extends bi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let QA=0;const Yn=new Lt,ed=new zn,Js=new G,bn=new Tl,ga=new Tl,Ot=new G;class Bs extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tS(e)?lS:aS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new As(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(bn.min,ga.min),bn.expandByPoint(Ot),Ot.addVectors(bn.max,ga.max),bn.expandByPoint(Ot)):(bn.expandByPoint(ga.min),bn.expandByPoint(ga.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ot.fromBufferAttribute(a,u),l&&(Js.fromBufferAttribute(e,u),Ot.add(Js)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new G,l[R]=new G;const u=new G,c=new G,f=new G,h=new Je,m=new Je,v=new Je,_=new G,p=new G;function d(R,D,y){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,D),v.fromBufferAttribute(s,y),c.sub(u),f.sub(u),m.sub(h),v.sub(h);const T=1/(m.x*v.y-v.x*m.y);isFinite(T)&&(_.copy(c).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(T),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(T),a[R].add(_),a[D].add(_),a[y].add(_),l[R].add(p),l[D].add(p),l[y].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,D=g.length;R<D;++R){const y=g[R],T=y.start,F=y.count;for(let O=T,W=T+F;O<W;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new G,S=new G,A=new G,C=new G;function M(R){A.fromBufferAttribute(r,R),C.copy(A);const D=a[R];x.copy(D),x.sub(A.multiplyScalar(A.dot(D))).normalize(),S.crossVectors(C,D);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,D=g.length;R<D;++R){const y=g[R],T=y.start,F=y.count;for(let O=T,W=T+F;O<W;O+=3)M(e.getX(O+0)),M(e.getX(O+1)),M(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*c;for(let d=0;d<c;d++)h[v++]=u[m++]}return new bi(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bs,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new Lt,ns=new WA,ru=new bm,Xg=new G,su=new G,ou=new G,au=new G,td=new G,lu=new G,jg=new G,uu=new G;class Ci extends zn{constructor(e=new Bs,t=new oS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){lu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(td.fromBufferAttribute(f,e),o?lu.addScaledVector(td,c):lu.addScaledVector(td.sub(t),c))}t.add(lu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ru.copy(i.boundingSphere),ru.applyMatrix4(s),ns.copy(e.ray).recast(e.near),!(ru.containsPoint(ns.origin)===!1&&(ns.intersectSphere(ru,Xg)===null||ns.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(Wg.copy(s).invert(),ns.copy(e.ray).applyMatrix4(Wg),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const p=h[v],d=o[p.materialIndex],g=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,A=x;S<A;S+=3){const C=a.getX(S),M=a.getX(S+1),R=a.getX(S+2);r=cu(this,d,e,i,u,c,f,C,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const g=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);r=cu(this,o,e,i,u,c,f,g,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const p=h[v],d=o[p.materialIndex],g=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,A=x;S<A;S+=3){const C=S,M=S+1,R=S+2;r=cu(this,d,e,i,u,c,f,C,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const g=p,x=p+1,S=p+2;r=cu(this,o,e,i,u,c,f,g,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function JA(n,e,t,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wr,a),l===null)return null;uu.copy(a),uu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(uu);return u<t.near||u>t.far?null:{distance:u,point:uu.clone(),object:n}}function cu(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,su),n.getVertexPosition(l,ou),n.getVertexPosition(u,au);const c=JA(n,e,t,i,su,ou,au,jg);if(c){const f=new G;pi.getBarycoord(jg,su,ou,au,f),r&&(c.uv=pi.getInterpolatedAttribute(r,a,l,u,f,new Je)),s&&(c.uv1=pi.getInterpolatedAttribute(s,a,l,u,f,new Je)),o&&(c.normal=pi.getInterpolatedAttribute(o,a,l,u,f,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new G,materialIndex:0};pi.getNormal(su,ou,au,h.normal),c.face=h,c.barycoord=f}return c}class wl extends Bs{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new As(u,3)),this.setAttribute("normal",new As(c,3)),this.setAttribute("uv",new As(f,2));function v(_,p,d,g,x,S,A,C,M,R,D){const y=S/M,T=A/R,F=S/2,O=A/2,W=C/2,$=M+1,B=R+1;let Y=0,b=0;const H=new G;for(let q=0;q<B;q++){const re=q*T-O;for(let Se=0;Se<$;Se++){const Oe=Se*y-F;H[_]=Oe*g,H[p]=re*x,H[d]=W,u.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[d]=C>0?1:-1,c.push(H.x,H.y,H.z),f.push(Se/M),f.push(1-q/R),Y+=1}}for(let q=0;q<R;q++)for(let re=0;re<M;re++){const Se=h+re+$*q,Oe=h+re+$*(q+1),X=h+(re+1)+$*(q+1),ee=h+(re+1)+$*q;l.push(Se,Oe,ee),l.push(Oe,X,ee),b+=6}a.addGroup(m,b,D),m+=b,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Ko(n[t]);for(const r in i)e[r]=i[r]}return e}function eC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const tC={clone:Ko,merge:tn};var nC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends Wc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nC,this.fragmentShader=iC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=eC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cS extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new G,Yg=new Je,$g=new Je;class hi extends cS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(Nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,Yg,$g),t.subVectors($g,Yg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class rC extends zn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hi(eo,to,e,t);r.layers=this.layers,this.add(r);const s=new hi(eo,to,e,t);s.layers=this.layers,this.add(s);const o=new hi(eo,to,e,t);o.layers=this.layers,this.add(o);const a=new hi(eo,to,e,t);a.layers=this.layers,this.add(a);const l=new hi(eo,to,e,t);l.layers=this.layers,this.add(l);const u=new hi(eo,to,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class fS extends sn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sC extends Is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fS(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wl(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Fr});s.uniforms.tEquirect.value=t;const o=new Ci(r,s),a=t.minFilter;return t.minFilter===xs&&(t.minFilter=Nn),new rC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const nd=new G,oC=new G,aC=new Ue;class cs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=nd.subVectors(i,t).cross(oC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||aC.getNormalMatrix(e),r=this.coplanarPoint(nd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new bm,fu=new G;class dS{constructor(e=new cs,t=new cs,i=new cs,r=new cs,s=new cs,o=new cs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],v=r[9],_=r[10],p=r[11],d=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,p-m,S-d).normalize(),i[1].setComponents(l+s,h+u,p+m,S+d).normalize(),i[2].setComponents(l+o,h+c,p+v,S+g).normalize(),i[3].setComponents(l-o,h-c,p-v,S-g).normalize(),i[4].setComponents(l-a,h-f,p-_,S-x).normalize(),t===$i)i[5].setComponents(l+a,h+f,p+_,S+x).normalize();else if(t===yc)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fu.x=r.normal.x>0?e.max.x:e.min.x,fu.y=r.normal.y>0?e.max.y:e.min.y,fu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function lC(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){const v=f[h],_=f[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,f[h]=_)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){const _=f[m];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Al extends Bs{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],v=[],_=[],p=[];for(let d=0;d<c;d++){const g=d*h-o;for(let x=0;x<u;x++){const S=x*f-s;v.push(S,-g,0),_.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const x=g+u*d,S=g+u*(d+1),A=g+1+u*(d+1),C=g+1+u*d;m.push(x,S,C),m.push(S,A,C)}this.setIndex(m),this.setAttribute("position",new As(v,3)),this.setAttribute("normal",new As(_,3)),this.setAttribute("uv",new As(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}var uC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_C=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BC="gl_FragColor = linearToOutputTexel( gl_FragColor );",zC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$C=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_R=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ER=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$R=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_P=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:uC,alphahash_pars_fragment:cC,alphamap_fragment:fC,alphamap_pars_fragment:dC,alphatest_fragment:hC,alphatest_pars_fragment:pC,aomap_fragment:mC,aomap_pars_fragment:_C,batching_pars_vertex:gC,batching_vertex:vC,begin_vertex:xC,beginnormal_vertex:yC,bsdfs:SC,iridescence_fragment:MC,bumpmap_pars_fragment:EC,clipping_planes_fragment:TC,clipping_planes_pars_fragment:wC,clipping_planes_pars_vertex:AC,clipping_planes_vertex:CC,color_fragment:RC,color_pars_fragment:PC,color_pars_vertex:bC,color_vertex:LC,common:DC,cube_uv_reflection_fragment:IC,defaultnormal_vertex:NC,displacementmap_pars_vertex:UC,displacementmap_vertex:OC,emissivemap_fragment:FC,emissivemap_pars_fragment:kC,colorspace_fragment:BC,colorspace_pars_fragment:zC,envmap_fragment:VC,envmap_common_pars_fragment:HC,envmap_pars_fragment:GC,envmap_pars_vertex:WC,envmap_physical_pars_fragment:tR,envmap_vertex:XC,fog_vertex:jC,fog_pars_vertex:YC,fog_fragment:$C,fog_pars_fragment:qC,gradientmap_pars_fragment:KC,lightmap_pars_fragment:ZC,lights_lambert_fragment:QC,lights_lambert_pars_fragment:JC,lights_pars_begin:eR,lights_toon_fragment:nR,lights_toon_pars_fragment:iR,lights_phong_fragment:rR,lights_phong_pars_fragment:sR,lights_physical_fragment:oR,lights_physical_pars_fragment:aR,lights_fragment_begin:lR,lights_fragment_maps:uR,lights_fragment_end:cR,logdepthbuf_fragment:fR,logdepthbuf_pars_fragment:dR,logdepthbuf_pars_vertex:hR,logdepthbuf_vertex:pR,map_fragment:mR,map_pars_fragment:_R,map_particle_fragment:gR,map_particle_pars_fragment:vR,metalnessmap_fragment:xR,metalnessmap_pars_fragment:yR,morphinstance_vertex:SR,morphcolor_vertex:MR,morphnormal_vertex:ER,morphtarget_pars_vertex:TR,morphtarget_vertex:wR,normal_fragment_begin:AR,normal_fragment_maps:CR,normal_pars_fragment:RR,normal_pars_vertex:PR,normal_vertex:bR,normalmap_pars_fragment:LR,clearcoat_normal_fragment_begin:DR,clearcoat_normal_fragment_maps:IR,clearcoat_pars_fragment:NR,iridescence_pars_fragment:UR,opaque_fragment:OR,packing:FR,premultiplied_alpha_fragment:kR,project_vertex:BR,dithering_fragment:zR,dithering_pars_fragment:VR,roughnessmap_fragment:HR,roughnessmap_pars_fragment:GR,shadowmap_pars_fragment:WR,shadowmap_pars_vertex:XR,shadowmap_vertex:jR,shadowmask_pars_fragment:YR,skinbase_vertex:$R,skinning_pars_vertex:qR,skinning_vertex:KR,skinnormal_vertex:ZR,specularmap_fragment:QR,specularmap_pars_fragment:JR,tonemapping_fragment:eP,tonemapping_pars_fragment:tP,transmission_fragment:nP,transmission_pars_fragment:iP,uv_pars_fragment:rP,uv_pars_vertex:sP,uv_vertex:oP,worldpos_vertex:aP,background_vert:lP,background_frag:uP,backgroundCube_vert:cP,backgroundCube_frag:fP,cube_vert:dP,cube_frag:hP,depth_vert:pP,depth_frag:mP,distanceRGBA_vert:_P,distanceRGBA_frag:gP,equirect_vert:vP,equirect_frag:xP,linedashed_vert:yP,linedashed_frag:SP,meshbasic_vert:MP,meshbasic_frag:EP,meshlambert_vert:TP,meshlambert_frag:wP,meshmatcap_vert:AP,meshmatcap_frag:CP,meshnormal_vert:RP,meshnormal_frag:PP,meshphong_vert:bP,meshphong_frag:LP,meshphysical_vert:DP,meshphysical_frag:IP,meshtoon_vert:NP,meshtoon_frag:UP,points_vert:OP,points_frag:FP,shadow_vert:kP,shadow_frag:BP,sprite_vert:zP,sprite_frag:VP},ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Ei={basic:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:tn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:tn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:tn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:tn([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:tn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:tn([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:tn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:tn([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:tn([ae.common,ae.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:tn([ae.lights,ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Ei.physical={uniforms:tn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const du={r:0,b:0,g:0},rs=new ir,HP=new Lt;function GP(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function v(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x)),x}function _(g){let x=!1;const S=v(g);S===null?d(a,l):S&&S.isColor&&(d(S,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(g,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===Hc)?(c===void 0&&(c=new Ci(new wl(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Ko(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),rs.copy(x.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(HP.makeRotationFromEuler(rs)),c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==ut,(f!==S||h!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Ci(new Al(2,2),new rr({name:"BackgroundMaterial",uniforms:Ko(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function d(g,x){g.getRGB(du,uS(n)),i.buffers.color.setClear(du.r,du.g,du.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(a,l)},render:_,addToRenderList:p}}function WP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,T,F,O,W){let $=!1;const B=f(O,F,T);s!==B&&(s=B,u(s.object)),$=m(y,O,F,W),$&&v(y,O,F,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,T,F,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function f(y,T,F){const O=F.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let $=W[T.id];$===void 0&&($={},W[T.id]=$);let B=$[O];return B===void 0&&(B=h(l()),$[O]=B),B}function h(y){const T=[],F=[],O=[];for(let W=0;W<t;W++)T[W]=0,F[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,T,F,O){const W=s.attributes,$=T.attributes;let B=0;const Y=F.getAttributes();for(const b in Y)if(Y[b].location>=0){const q=W[b];let re=$[b];if(re===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function v(y,T,F,O){const W={},$=T.attributes;let B=0;const Y=F.getAttributes();for(const b in Y)if(Y[b].location>=0){let q=$[b];q===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),W[b]=re,B++}s.attributes=W,s.attributesNum=B,s.index=O}function _(){const y=s.newAttributes;for(let T=0,F=y.length;T<F;T++)y[T]=0}function p(y){d(y,0)}function d(y,T){const F=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;F[y]=1,O[y]===0&&(n.enableVertexAttribArray(y),O[y]=1),W[y]!==T&&(n.vertexAttribDivisor(y,T),W[y]=T)}function g(){const y=s.newAttributes,T=s.enabledAttributes;for(let F=0,O=T.length;F<O;F++)T[F]!==y[F]&&(n.disableVertexAttribArray(F),T[F]=0)}function x(y,T,F,O,W,$,B){B===!0?n.vertexAttribIPointer(y,T,F,W,$):n.vertexAttribPointer(y,T,F,O,W,$)}function S(y,T,F,O){_();const W=O.attributes,$=F.getAttributes(),B=T.defaultAttributeValues;for(const Y in $){const b=$[Y];if(b.location>=0){let H=W[Y];if(H===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(H=y.instanceColor)),H!==void 0){const q=H.normalized,re=H.itemSize,Se=e.get(H);if(Se===void 0)continue;const Oe=Se.buffer,X=Se.type,ee=Se.bytesPerElement,de=X===n.INT||X===n.UNSIGNED_INT||H.gpuType===Em;if(H.isInterleavedBufferAttribute){const ue=H.data,De=ue.stride,Ae=H.offset;if(ue.isInstancedInterleavedBuffer){for(let Ve=0;Ve<b.locationSize;Ve++)d(b.location+Ve,ue.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ve=0;Ve<b.locationSize;Ve++)p(b.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Ve=0;Ve<b.locationSize;Ve++)x(b.location+Ve,re/b.locationSize,X,q,De*ee,(Ae+re/b.locationSize*Ve)*ee,de)}else{if(H.isInstancedBufferAttribute){for(let ue=0;ue<b.locationSize;ue++)d(b.location+ue,H.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ue=0;ue<b.locationSize;ue++)p(b.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ue=0;ue<b.locationSize;ue++)x(b.location+ue,re/b.locationSize,X,q,re*ee,re/b.locationSize*ue*ee,de)}}else if(B!==void 0){const q=B[Y];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(b.location,q);break;case 3:n.vertexAttrib3fv(b.location,q);break;case 4:n.vertexAttrib4fv(b.location,q);break;default:n.vertexAttrib1fv(b.location,q)}}}}g()}function A(){R();for(const y in i){const T=i[y];for(const F in T){const O=T[F];for(const W in O)c(O[W].object),delete O[W];delete T[F]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const F in T){const O=T[F];for(const W in O)c(O[W].object),delete O[W];delete T[F]}delete i[y.id]}function M(y){for(const T in i){const F=i[T];if(F[y.id]===void 0)continue;const O=F[y.id];for(const W in O)c(O[W].object),delete O[W];delete F[y.id]}}function R(){D(),o=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:p,disableUnusedAttributes:g}}function XP(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let v=0;v<f;v++)m+=c[v];t.update(m,i,1)}function l(u,c,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)o(u[v],c[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let v=0;for(let _=0;_<f;_++)v+=c[_];for(let _=0;_<h.length;_++)t.update(v,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==mi&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===Sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==nr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Yi&&!R)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:A,maxSamples:C}}function YP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new cs,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?c(null):u();else{const g=s?0:i,x=g*4;let S=d.clippingState||null;l.value=S,S=c(v,h,x,m);for(let A=0;A!==x;++A)S[A]=t[A];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const d=m+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,S=m;x!==_;++x,S+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function $P(n){let e=new WeakMap;function t(o,a){return a===Ph?o.mapping=jo:a===bh&&(o.mapping=Yo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ph||a===bh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new sC(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pS extends cS{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vo=4,qg=[.125,.215,.35,.446,.526,.582],hs=20,id=new pS,Kg=new tt;let rd=null,sd=0,od=0,ad=!1;const fs=(1+Math.sqrt(5))/2,no=1/fs,Zg=[new G(-fs,no,0),new G(fs,no,0),new G(-no,0,fs),new G(no,0,fs),new G(0,fs,-no),new G(0,fs,no),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rd,sd,od),this._renderer.xr.enabled=ad,e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Sl,format:mi,colorSpace:Kr,depthBuffer:!1},r=Jg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qP(s)),this._blurMaterial=KP(s,e,t)}return r}_compileMaterial(e){const t=new Ci(this._lodPlanes[0],e);this._renderer.compile(t,id)}_sceneToCubeUV(e,t,i,r){const a=new hi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Kg),c.toneMapping=kr,c.autoClear=!1;const m=new oS({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),v=new Ci(new wl,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Kg),_=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;hu(r,g*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jo||e.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,id)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zg[(r-s-1)%Zg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ci(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hs-1),_=s/v,p=isFinite(s)?1+Math.floor(c*_):hs;p>hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hs}`);const d=[];let g=0;for(let M=0;M<hs;++M){const R=M/_,D=Math.exp(-R*R/2);d.push(D),M===0?g+=D:M<p&&(g+=2*D)}for(let M=0;M<d.length;M++)d[M]=d[M]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],A=3*S*(r>x-vo?r-x+vo:0),C=4*(this._cubeSize-S);hu(t,A,C,3*S,2*S),l.setRenderTarget(t),l.render(f,id)}}function qP(n){const e=[],t=[],i=[];let r=n;const s=n-vo+1+qg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-vo?l=qg[o-n+vo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,v=6,_=3,p=2,d=1,g=new Float32Array(_*v*m),x=new Float32Array(p*v*m),S=new Float32Array(d*v*m);for(let C=0;C<m;C++){const M=C%3*2/3-1,R=C>2?0:-1,D=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(D,_*v*C),x.set(h,p*v*C);const y=[C,C,C,C,C,C];S.set(y,d*v*C)}const A=new Bs;A.setAttribute("position",new bi(g,_)),A.setAttribute("uv",new bi(x,p)),A.setAttribute("faceIndex",new bi(S,d)),e.push(A),r>vo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jg(n,e,t){const i=new Is(n,e,t);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function KP(n,e,t){const i=new Float32Array(hs),r=new G(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function ev(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function tv(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Lm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ph||l===bh,c=l===jo||l===Yo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Qg(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(t===null&&(t=new Qg(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function QP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JP(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let p=0,d=_.length;p<d;p++)e.update(_[p],n.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const g=m.array;_=m.version;for(let x=0,S=g.length;x<S;x+=3){const A=g[x+0],C=g[x+1],M=g[x+2];h.push(A,C,C,M,M,A)}}else if(v!==void 0){const g=v.array;_=v.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const A=x+0,C=x+1,M=x+2;h.push(A,C,C,M,M,A)}}else return;const p=new(tS(h)?lS:aS)(h,1);p.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function eb(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function u(h,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,h*o,v),t.update(m,i,v))}function c(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];t.update(p,i,1)}function f(h,m,v,_){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)u(h[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,_,0,v);let d=0;for(let g=0;g<v;g++)d+=m[g];for(let g=0;g<_.length;g++)t.update(d,i,_[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function tb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nb(n,e,t){const i=new WeakMap,r=new wt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let A=a.attributes.position.count*S,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*C*4*f),R=new iS(M,A,C,f);R.type=Yi,R.needsUpdate=!0;const D=S*4;for(let T=0;T<f;T++){const F=d[T],O=g[T],W=x[T],$=A*C*4*T;for(let B=0;B<F.count;B++){const Y=B*D;v===!0&&(r.fromBufferAttribute(F,B),M[$+Y+0]=r.x,M[$+Y+1]=r.y,M[$+Y+2]=r.z,M[$+Y+3]=0),_===!0&&(r.fromBufferAttribute(O,B),M[$+Y+4]=r.x,M[$+Y+5]=r.y,M[$+Y+6]=r.z,M[$+Y+7]=0),p===!0&&(r.fromBufferAttribute(W,B),M[$+Y+8]=r.x,M[$+Y+9]=r.y,M[$+Y+10]=r.z,M[$+Y+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Je(A,C)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<u.length;p++)v+=u[p];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ib(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class mS extends sn{constructor(e,t,i,r,s,o,a,l,u,c=bo){if(c!==bo&&c!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===bo&&(i=Ds),i===void 0&&c===qo&&(i=$o),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _S=new sn,nv=new mS(1,1),gS=new iS,vS=new HA,xS=new fS,iv=[],rv=[],sv=new Float32Array(16),ov=new Float32Array(9),av=new Float32Array(4);function ta(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=iv[r];if(s===void 0&&(s=new Float32Array(r),iv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xc(n,e){let t=rv[e];t===void 0&&(t=new Int32Array(e),rv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function lb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;av.set(i),n.uniformMatrix2fv(this.addr,!1,av),Ut(t,i)}}function ub(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;ov.set(i),n.uniformMatrix3fv(this.addr,!1,ov),Ut(t,i)}}function cb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;sv.set(i),n.uniformMatrix4fv(this.addr,!1,sv),Ut(t,i)}}function fb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function mb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function xb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(nv.compareFunction=eS,s=nv):s=_S,t.setTexture2D(e||s,r)}function yb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vS,r)}function Sb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xS,r)}function Mb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gS,r)}function Eb(n){switch(n){case 5126:return rb;case 35664:return sb;case 35665:return ob;case 35666:return ab;case 35674:return lb;case 35675:return ub;case 35676:return cb;case 5124:case 35670:return fb;case 35667:case 35671:return db;case 35668:case 35672:return hb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return _b;case 36295:return gb;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Mb}}function Tb(n,e){n.uniform1fv(this.addr,e)}function wb(n,e){const t=ta(e,this.size,2);n.uniform2fv(this.addr,t)}function Ab(n,e){const t=ta(e,this.size,3);n.uniform3fv(this.addr,t)}function Cb(n,e){const t=ta(e,this.size,4);n.uniform4fv(this.addr,t)}function Rb(n,e){const t=ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Pb(n,e){const t=ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bb(n,e){const t=ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lb(n,e){n.uniform1iv(this.addr,e)}function Db(n,e){n.uniform2iv(this.addr,e)}function Ib(n,e){n.uniform3iv(this.addr,e)}function Nb(n,e){n.uniform4iv(this.addr,e)}function Ub(n,e){n.uniform1uiv(this.addr,e)}function Ob(n,e){n.uniform2uiv(this.addr,e)}function Fb(n,e){n.uniform3uiv(this.addr,e)}function kb(n,e){n.uniform4uiv(this.addr,e)}function Bb(n,e,t){const i=this.cache,r=e.length,s=Xc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||_S,s[o])}function zb(n,e,t){const i=this.cache,r=e.length,s=Xc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vS,s[o])}function Vb(n,e,t){const i=this.cache,r=e.length,s=Xc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xS,s[o])}function Hb(n,e,t){const i=this.cache,r=e.length,s=Xc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gS,s[o])}function Gb(n){switch(n){case 5126:return Tb;case 35664:return wb;case 35665:return Ab;case 35666:return Cb;case 35674:return Rb;case 35675:return Pb;case 35676:return bb;case 5124:case 35670:return Lb;case 35667:case 35671:return Db;case 35668:case 35672:return Ib;case 35669:case 35673:return Nb;case 5125:return Ub;case 36294:return Ob;case 36295:return Fb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Wb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Eb(t.type)}}class Xb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gb(t.type)}}class jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function lv(n,e){n.seq.push(e),n.map[e.id]=e}function Yb(n,e,t){const i=n.name,r=i.length;for(ld.lastIndex=0;;){const s=ld.exec(i),o=ld.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){lv(t,u===void 0?new Wb(a,n,e):new Xb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new jb(a),lv(t,f)),t=f}}}class ku{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Yb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function uv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $b=37297;let qb=0;function Kb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Zb(n){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n);let i;switch(e===t?i="":e===xc&&t===vc?i="LinearDisplayP3ToLinearSRGB":e===vc&&t===xc&&(i="LinearSRGBToLinearDisplayP3"),n){case Kr:case Gc:return[i,"LinearTransferOETF"];case Mi:case Pm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Kb(n.getShaderSource(e),o)}else return r}function Qb(n,e){const t=Zb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jb(n,e){let t;switch(e){case hA:t="Linear";break;case pA:t="Reinhard";break;case mA:t="Cineon";break;case _A:t="ACESFilmic";break;case vA:t="AgX";break;case xA:t="Neutral";break;case gA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pu=new G;function e2(){Ke.getLuminanceCoefficients(pu);const n=pu.x.toFixed(4),e=pu.y.toFixed(4),t=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function n2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function i2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ta(n){return n!==""}function fv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r2=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(n){return n.replace(r2,o2)}const s2=new Map;function o2(n,e){let t=Ne[e];if(t===void 0){const i=s2.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return op(t)}const a2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(n){return n.replace(a2,l2)}function l2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function c2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jo:case Yo:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function d2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hy:e="ENVMAP_BLENDING_MULTIPLY";break;case fA:e="ENVMAP_BLENDING_MIX";break;case dA:e="ENVMAP_BLENDING_ADD";break}return e}function h2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function p2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=u2(t),u=c2(t),c=f2(t),f=d2(t),h=h2(t),m=t2(t),v=n2(s),_=r.createProgram();let p,d,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ta).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ta).join(`
`),d.length>0&&(d+=`
`)):(p=[pv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),d=[pv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kr?"#define TONE_MAPPING":"",t.toneMapping!==kr?Ne.tonemapping_pars_fragment:"",t.toneMapping!==kr?Jb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Qb("linearToOutputTexel",t.outputColorSpace),e2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=op(o),o=fv(o,t),o=dv(o,t),a=op(a),a=fv(a,t),a=dv(a,t),o=hv(o),a=hv(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=g+p+o,S=g+d+a,A=uv(r,r.VERTEX_SHADER,x),C=uv(r,r.FRAGMENT_SHADER,S);r.attachShader(_,A),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(T){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(A).trim(),W=r.getShaderInfoLog(C).trim();let $=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,C);else{const Y=cv(r,A,"vertex"),b=cv(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+Y+`
`+b)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||W==="")&&(B=!1);B&&(T.diagnostics={runnable:$,programLog:F,vertexShader:{log:O,prefix:p},fragmentShader:{log:W,prefix:d}})}r.deleteShader(A),r.deleteShader(C),R=new ku(r,_),D=i2(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let D;this.getAttributes=function(){return D===void 0&&M(this),D};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,$b)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let m2=0;class _2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new g2(e),t.set(e,i)),i}}class g2{constructor(e){this.id=m2++,this.code=e,this.usedTimes=0}}function v2(n,e,t,i,r,s,o){const a=new rS,l=new _2,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return u.add(y),y===0?"uv":`uv${y}`}function d(y,T,F,O,W){const $=O.fog,B=W.geometry,Y=y.isMeshStandardMaterial?O.environment:null,b=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),H=b&&b.mapping===Hc?b.image.height:null,q=_[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=re!==void 0?re.length:0;let Oe=0;B.morphAttributes.position!==void 0&&(Oe=1),B.morphAttributes.normal!==void 0&&(Oe=2),B.morphAttributes.color!==void 0&&(Oe=3);let X,ee,de,ue;if(q){const un=Ei[q];X=un.vertexShader,ee=un.fragmentShader}else X=y.vertexShader,ee=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const De=n.getRenderTarget(),Ae=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,et=!!y.map,He=!!y.matcap,L=!!b,An=!!y.aoMap,Be=!!y.lightMap,Xe=!!y.bumpMap,Re=!!y.normalMap,ot=!!y.displacementMap,Le=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,k=y.anisotropy>0,Q=y.clearcoat>0,te=y.dispersion>0,Z=y.iridescence>0,Me=y.sheen>0,le=y.transmission>0,_e=k&&!!y.anisotropyMap,je=Q&&!!y.clearcoatMap,se=Q&&!!y.clearcoatNormalMap,ge=Q&&!!y.clearcoatRoughnessMap,Pe=Z&&!!y.iridescenceMap,be=Z&&!!y.iridescenceThicknessMap,ve=Me&&!!y.sheenColorMap,ze=Me&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,rt=!!y.specularColorMap,I=!!y.specularIntensityMap,he=le&&!!y.transmissionMap,j=le&&!!y.thicknessMap,J=!!y.gradientMap,ce=!!y.alphaMap,pe=y.alphaTest>0,Ge=!!y.alphaHash,At=!!y.extensions;let ln=kr;y.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(ln=n.toneMapping);const Ye={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:ee,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&W.instanceColor!==null,instancingMorph:Ae&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:De===null?n.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Kr,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:He,envMap:L,envMapMode:L&&b.mapping,envMapCubeUVHeight:H,aoMap:An,lightMap:Be,bumpMap:Xe,normalMap:Re,displacementMap:m&&ot,emissiveMap:Le,normalMapObjectSpace:Re&&y.normalMapType===TA,normalMapTangentSpace:Re&&y.normalMapType===EA,metalnessMap:P,roughnessMap:E,anisotropy:k,anisotropyMap:_e,clearcoat:Q,clearcoatMap:je,clearcoatNormalMap:se,clearcoatRoughnessMap:ge,dispersion:te,iridescence:Z,iridescenceMap:Pe,iridescenceThicknessMap:be,sheen:Me,sheenColorMap:ve,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:rt,specularIntensityMap:I,transmission:le,transmissionMap:he,thicknessMap:j,gradientMap:J,opaque:y.transparent===!1&&y.blending===Po&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:pe,alphaHash:Ge,combine:y.combine,mapUv:et&&p(y.map.channel),aoMapUv:An&&p(y.aoMap.channel),lightMapUv:Be&&p(y.lightMap.channel),bumpMapUv:Xe&&p(y.bumpMap.channel),normalMapUv:Re&&p(y.normalMap.channel),displacementMapUv:ot&&p(y.displacementMap.channel),emissiveMapUv:Le&&p(y.emissiveMap.channel),metalnessMapUv:P&&p(y.metalnessMap.channel),roughnessMapUv:E&&p(y.roughnessMap.channel),anisotropyMapUv:_e&&p(y.anisotropyMap.channel),clearcoatMapUv:je&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(y.sheenRoughnessMap.channel),specularMapUv:Ie&&p(y.specularMap.channel),specularColorMapUv:rt&&p(y.specularColorMap.channel),specularIntensityMapUv:I&&p(y.specularIntensityMap.channel),transmissionMapUv:he&&p(y.transmissionMap.channel),thicknessMapUv:j&&p(y.thicknessMap.channel),alphaMapUv:ce&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Re||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!B.attributes.uv&&(et||ce),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ln,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wi,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function g(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)T.push(F),T.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const T=_[y.type];let F;if(T){const O=Ei[T];F=tC.clone(O.uniforms)}else F=y.uniforms;return F}function C(y,T){let F;for(let O=0,W=c.length;O<W;O++){const $=c[O];if($.cacheKey===T){F=$,++F.usedTimes;break}}return F===void 0&&(F=new p2(n,T,y,s),c.push(F)),F}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function D(){l.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:A,acquireProgram:C,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:D}}function x2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function y2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _v(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,v,_,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function a(f,h,m,v,_,p){const d=o(f,h,m,v,_,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,v,_,p){const d=o(f,h,m,v,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||y2),i.length>1&&i.sort(h||mv),r.length>1&&r.sort(h||mv)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function S2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new _v,n.set(i,[o])):r>=s.length?(o=new _v,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function M2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new tt};break;case"SpotLight":t={position:new G,direction:new G,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function E2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let T2=0;function w2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function A2(n){const e=new M2,t=E2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new Lt,o=new Lt;function a(u){let c=0,f=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,v=0,_=0,p=0,d=0,g=0,x=0,S=0,A=0,C=0,M=0;u.sort(w2);for(let D=0,y=u.length;D<y;D++){const T=u[D],F=T.color,O=T.intensity,W=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=F.r*O,f+=F.g*O,h+=F.b*O;else if(T.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(T.sh.coefficients[B],O);M++}else if(T.isDirectionalLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,b=t.get(T);b.shadowIntensity=Y.intensity,b.shadowBias=Y.bias,b.shadowNormalBias=Y.normalBias,b.shadowRadius=Y.radius,b.shadowMapSize=Y.mapSize,i.directionalShadow[m]=b,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=T.shadow.matrix,g++}i.directional[m]=B,m++}else if(T.isSpotLight){const B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(F).multiplyScalar(O),B.distance=W,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,i.spot[_]=B;const Y=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,Y.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[_]=Y.matrix,T.castShadow){const b=t.get(T);b.shadowIntensity=Y.intensity,b.shadowBias=Y.bias,b.shadowNormalBias=Y.normalBias,b.shadowRadius=Y.radius,b.shadowMapSize=Y.mapSize,i.spotShadow[_]=b,i.spotShadowMap[_]=$,S++}_++}else if(T.isRectAreaLight){const B=e.get(T);B.color.copy(F).multiplyScalar(O),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=B,p++}else if(T.isPointLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const Y=T.shadow,b=t.get(T);b.shadowIntensity=Y.intensity,b.shadowBias=Y.bias,b.shadowNormalBias=Y.normalBias,b.shadowRadius=Y.radius,b.shadowMapSize=Y.mapSize,b.shadowCameraNear=Y.camera.near,b.shadowCameraFar=Y.camera.far,i.pointShadow[v]=b,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=T.shadow.matrix,x++}i.point[v]=B,v++}else if(T.isHemisphereLight){const B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(O),B.groundColor.copy(T.groundColor).multiplyScalar(O),i.hemi[d]=B,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==d||R.numDirectionalShadows!==g||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==A||R.numLightProbes!==M)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,R.directionalLength=m,R.pointLength=v,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=d,R.numDirectionalShadows=g,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=A,R.numLightProbes=M,i.version=T2++)}function l(u,c){let f=0,h=0,m=0,v=0,_=0;const p=c.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){const x=u[d];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(x.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function gv(n){const e=new A2(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function C2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gv(n),e.set(r,[a])):s>=o.length?(a=new gv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class R2 extends Wc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P2 extends Wc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D2(n,e,t){let i=new dS;const r=new Je,s=new Je,o=new wt,a=new R2({depthPacking:MA}),l=new P2,u={},c=t.maxTextureSize,f={[Wr]:Tn,[Tn]:Wr,[Wi]:Wi},h=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:b2,fragmentShader:L2}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Bs;v.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ci(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vy;let d=this.type;this.render=function(C,M,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const D=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Fr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=d!==Bi&&this.type===Bi,W=d===Bi&&this.type!==Bi;for(let $=0,B=C.length;$<B;$++){const Y=C[$],b=Y.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const H=b.getFrameExtents();if(r.multiply(H),s.copy(b.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/H.x),r.x=s.x*H.x,b.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/H.y),r.y=s.y*H.y,b.mapSize.y=s.y)),b.map===null||O===!0||W===!0){const re=this.type!==Bi?{minFilter:ei,magFilter:ei}:{};b.map!==null&&b.map.dispose(),b.map=new Is(r.x,r.y,re),b.map.texture.name=Y.name+".shadowMap",b.camera.updateProjectionMatrix()}n.setRenderTarget(b.map),n.clear();const q=b.getViewportCount();for(let re=0;re<q;re++){const Se=b.getViewport(re);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),F.viewport(o),b.updateMatrices(Y,re),i=b.getFrustum(),S(M,R,b.camera,Y,this.type)}b.isPointLightShadow!==!0&&this.type===Bi&&g(b,R),b.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(D,y,T)};function g(C,M){const R=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Is(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,R,h,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,R,m,_,null)}function x(C,M,R,D){let y=null;const T=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=y.uuid,O=M.uuid;let W=u[F];W===void 0&&(W={},u[F]=W);let $=W[O];$===void 0&&($=y.clone(),W[O]=$,M.addEventListener("dispose",A)),y=$}if(y.visible=M.visible,y.wireframe=M.wireframe,D===Bi?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:f[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=n.properties.get(y);F.light=R}return y}function S(C,M,R,D,y){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const O=e.update(C),W=C.material;if(Array.isArray(W)){const $=O.groups;for(let B=0,Y=$.length;B<Y;B++){const b=$[B],H=W[b.materialIndex];if(H&&H.visible){const q=x(C,H,D,y);C.onBeforeShadow(n,C,M,R,O,q,b),n.renderBufferDirect(R,null,O,q,C,b),C.onAfterShadow(n,C,M,R,O,q,b)}}}else if(W.visible){const $=x(C,W,D,y);C.onBeforeShadow(n,C,M,R,O,$,null),n.renderBufferDirect(R,null,O,$,C,null),C.onAfterShadow(n,C,M,R,O,$,null)}}const F=C.children;for(let O=0,W=F.length;O<W;O++)S(F[O],M,R,D,y)}function A(C){C.target.removeEventListener("dispose",A);for(const R in u){const D=u[R],y=C.target.uuid;y in D&&(D[y].dispose(),delete D[y])}}}const I2={[Mh]:Eh,[Th]:Ch,[wh]:Rh,[Xo]:Ah,[Eh]:Mh,[Ch]:Th,[Rh]:wh,[Ah]:Xo};function N2(n){function e(){let I=!1;const he=new wt;let j=null;const J=new wt(0,0,0,0);return{setMask:function(ce){j!==ce&&!I&&(n.colorMask(ce,ce,ce,ce),j=ce)},setLocked:function(ce){I=ce},setClear:function(ce,pe,Ge,At,ln){ln===!0&&(ce*=At,pe*=At,Ge*=At),he.set(ce,pe,Ge,At),J.equals(he)===!1&&(n.clearColor(ce,pe,Ge,At),J.copy(he))},reset:function(){I=!1,j=null,J.set(-1,0,0,0)}}}function t(){let I=!1,he=!1,j=null,J=null,ce=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?de(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(pe){j!==pe&&!I&&(n.depthMask(pe),j=pe)},setFunc:function(pe){if(he&&(pe=I2[pe]),J!==pe){switch(pe){case Mh:n.depthFunc(n.NEVER);break;case Eh:n.depthFunc(n.ALWAYS);break;case Th:n.depthFunc(n.LESS);break;case Xo:n.depthFunc(n.LEQUAL);break;case wh:n.depthFunc(n.EQUAL);break;case Ah:n.depthFunc(n.GEQUAL);break;case Ch:n.depthFunc(n.GREATER);break;case Rh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=pe}},setLocked:function(pe){I=pe},setClear:function(pe){ce!==pe&&(n.clearDepth(pe),ce=pe)},reset:function(){I=!1,j=null,J=null,ce=null}}}function i(){let I=!1,he=null,j=null,J=null,ce=null,pe=null,Ge=null,At=null,ln=null;return{setTest:function(Ye){I||(Ye?de(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Ye){he!==Ye&&!I&&(n.stencilMask(Ye),he=Ye)},setFunc:function(Ye,un,Di){(j!==Ye||J!==un||ce!==Di)&&(n.stencilFunc(Ye,un,Di),j=Ye,J=un,ce=Di)},setOp:function(Ye,un,Di){(pe!==Ye||Ge!==un||At!==Di)&&(n.stencilOp(Ye,un,Di),pe=Ye,Ge=un,At=Di)},setLocked:function(Ye){I=Ye},setClear:function(Ye){ln!==Ye&&(n.clearStencil(Ye),ln=Ye)},reset:function(){I=!1,he=null,j=null,J=null,ce=null,pe=null,Ge=null,At=null,ln=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],m=null,v=!1,_=null,p=null,d=null,g=null,x=null,S=null,A=null,C=new tt(0,0,0),M=0,R=!1,D=null,y=null,T=null,F=null,O=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=B>=2);let b=null,H={};const q=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Se=new wt().fromArray(q),Oe=new wt().fromArray(re);function X(I,he,j,J){const ce=new Uint8Array(4),pe=n.createTexture();n.bindTexture(I,pe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<j;Ge++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(he+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return pe}const ee={};ee[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(n.DEPTH_TEST),s.setFunc(Xo),Be(!1),Xe(wg),de(n.CULL_FACE),L(Fr);function de(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ue(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function De(I,he){return c[I]!==he?(n.bindFramebuffer(I,he),c[I]=he,I===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=he),I===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Ae(I,he){let j=h,J=!1;if(I){j=f.get(he),j===void 0&&(j=[],f.set(he,j));const ce=I.textures;if(j.length!==ce.length||j[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Ge=ce.length;pe<Ge;pe++)j[pe]=n.COLOR_ATTACHMENT0+pe;j.length=ce.length,J=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,J=!0);J&&n.drawBuffers(j)}function Ve(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const et={[ds]:n.FUNC_ADD,[$w]:n.FUNC_SUBTRACT,[qw]:n.FUNC_REVERSE_SUBTRACT};et[Kw]=n.MIN,et[Zw]=n.MAX;const He={[Qw]:n.ZERO,[Jw]:n.ONE,[eA]:n.SRC_COLOR,[yh]:n.SRC_ALPHA,[oA]:n.SRC_ALPHA_SATURATE,[rA]:n.DST_COLOR,[nA]:n.DST_ALPHA,[tA]:n.ONE_MINUS_SRC_COLOR,[Sh]:n.ONE_MINUS_SRC_ALPHA,[sA]:n.ONE_MINUS_DST_COLOR,[iA]:n.ONE_MINUS_DST_ALPHA,[aA]:n.CONSTANT_COLOR,[lA]:n.ONE_MINUS_CONSTANT_COLOR,[uA]:n.CONSTANT_ALPHA,[cA]:n.ONE_MINUS_CONSTANT_ALPHA};function L(I,he,j,J,ce,pe,Ge,At,ln,Ye){if(I===Fr){v===!0&&(ue(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),I!==Yw){if(I!==_||Ye!==R){if((p!==ds||x!==ds)&&(n.blendEquation(n.FUNC_ADD),p=ds,x=ds),Ye)switch(I){case Po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ag:n.blendFunc(n.ONE,n.ONE);break;case Cg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ag:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,g=null,S=null,A=null,C.set(0,0,0),M=0,_=I,R=Ye}return}ce=ce||he,pe=pe||j,Ge=Ge||J,(he!==p||ce!==x)&&(n.blendEquationSeparate(et[he],et[ce]),p=he,x=ce),(j!==d||J!==g||pe!==S||Ge!==A)&&(n.blendFuncSeparate(He[j],He[J],He[pe],He[Ge]),d=j,g=J,S=pe,A=Ge),(At.equals(C)===!1||ln!==M)&&(n.blendColor(At.r,At.g,At.b,ln),C.copy(At),M=ln),_=I,R=!1}function An(I,he){I.side===Wi?ue(n.CULL_FACE):de(n.CULL_FACE);let j=I.side===Tn;he&&(j=!j),Be(j),I.blending===Po&&I.transparent===!1?L(Fr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function Xe(I){I!==Ww?(de(n.CULL_FACE),I!==y&&(I===wg?n.cullFace(n.BACK):I===Xw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),y=I}function Re(I){I!==T&&($&&n.lineWidth(I),T=I)}function ot(I,he,j){I?(de(n.POLYGON_OFFSET_FILL),(F!==he||O!==j)&&(n.polygonOffset(he,j),F=he,O=j)):ue(n.POLYGON_OFFSET_FILL)}function Le(I){I?de(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function P(I){I===void 0&&(I=n.TEXTURE0+W-1),b!==I&&(n.activeTexture(I),b=I)}function E(I,he,j){j===void 0&&(b===null?j=n.TEXTURE0+W-1:j=b);let J=H[j];J===void 0&&(J={type:void 0,texture:void 0},H[j]=J),(J.type!==I||J.texture!==he)&&(b!==j&&(n.activeTexture(j),b=j),n.bindTexture(I,he||ee[I]),J.type=I,J.texture=he)}function k(){const I=H[b];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(I){Se.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Se.copy(I))}function ve(I){Oe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Oe.copy(I))}function ze(I,he){let j=l.get(he);j===void 0&&(j=new WeakMap,l.set(he,j));let J=j.get(I);J===void 0&&(J=n.getUniformBlockIndex(he,I.name),j.set(I,J))}function Ie(I,he){const J=l.get(he).get(I);a.get(he)!==J&&(n.uniformBlockBinding(he,J,I.__bindingPointIndex),a.set(he,J))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},b=null,H={},c={},f=new WeakMap,h=[],m=null,v=!1,_=null,p=null,d=null,g=null,x=null,S=null,A=null,C=new tt(0,0,0),M=0,R=!1,D=null,y=null,T=null,F=null,O=null,Se.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:ue,bindFramebuffer:De,drawBuffers:Ae,useProgram:Ve,setBlending:L,setMaterial:An,setFlipSided:Be,setCullFace:Xe,setLineWidth:Re,setPolygonOffset:ot,setScissorTest:Le,activeTexture:P,bindTexture:E,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ge,texImage3D:Pe,updateUBOMapping:ze,uniformBlockBinding:Ie,texStorage2D:je,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:_e,scissor:be,viewport:ve,reset:rt}}function vv(n,e,t,i){const r=U2(i);switch(t){case Yy:return n*e;case qy:return n*e;case Ky:return n*e*2;case Zy:return n*e/r.components*r.byteLength;case Am:return n*e/r.components*r.byteLength;case Qy:return n*e*2/r.components*r.byteLength;case Cm:return n*e*2/r.components*r.byteLength;case $y:return n*e*3/r.components*r.byteLength;case mi:return n*e*4/r.components*r.byteLength;case Rm:return n*e*4/r.components*r.byteLength;case Du:case Iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Oh:return Math.max(n,16)*Math.max(e,8)/4;case Ih:case Uh:return Math.max(n,8)*Math.max(e,8)/2;case Fh:case kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ou:case ep:case tp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jy:case np:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ip:case rp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U2(n){switch(n){case nr:case Wy:return{byteLength:1,components:1};case fl:case Xy:case Sl:return{byteLength:2,components:1};case Tm:case wm:return{byteLength:2,components:4};case Ds:case Em:case Yi:return{byteLength:4,components:1};case jy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function O2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,c=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return m?new OffscreenCanvas(P,E):dl("canvas")}function _(P,E,k){let Q=1;const te=Le(P);if((te.width>k||te.height>k)&&(Q=k/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(Q*te.width),Me=Math.floor(Q*te.height);f===void 0&&(f=v(Z,Me));const le=E?v(Z,Me):f;return le.width=Z,le.height=Me,le.getContext("2d").drawImage(P,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Me+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==ei&&P.minFilter!==Nn}function d(P){n.generateMipmap(P)}function g(P,E,k,Q,te=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=E;if(E===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),E===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),E===n.RGBA){const Me=te?gc:Ke.getTransfer(Q);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=Me===ut?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(P,E){let k;return P?E===null||E===Ds||E===$o?k=n.DEPTH24_STENCIL8:E===Yi?k=n.DEPTH32F_STENCIL8:E===fl&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ds||E===$o?k=n.DEPTH_COMPONENT24:E===Yi?k=n.DEPTH_COMPONENT32F:E===fl&&(k=n.DEPTH_COMPONENT16),k}function S(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==ei&&P.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){const E=P.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&c.delete(E)}function C(P){const E=P.target;E.removeEventListener("dispose",C),D(E)}function M(P){const E=i.get(P);if(E.__webglInit===void 0)return;const k=P.source,Q=h.get(k);if(Q){const te=Q[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(P),Object.keys(Q).length===0&&h.delete(k)}i.remove(P)}function R(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const k=P.source,Q=h.get(k);delete Q[E.__cacheKey],o.memory.textures--}function D(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let te=0;te<E.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(E.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let Q=0,te=k.length;Q<te;Q++){const Z=i.get(k[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(P)}let y=0;function T(){y=0}function F(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function O(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function W(P,E){const k=i.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(k,P,E);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function $(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){Oe(k,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function B(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){Oe(k,P,E);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function Y(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){X(k,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}const b={[Lh]:n.REPEAT,[vs]:n.CLAMP_TO_EDGE,[Dh]:n.MIRRORED_REPEAT},H={[ei]:n.NEAREST,[yA]:n.NEAREST_MIPMAP_NEAREST,[$l]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[If]:n.LINEAR_MIPMAP_NEAREST,[xs]:n.LINEAR_MIPMAP_LINEAR},q={[wA]:n.NEVER,[LA]:n.ALWAYS,[AA]:n.LESS,[eS]:n.LEQUAL,[CA]:n.EQUAL,[bA]:n.GEQUAL,[RA]:n.GREATER,[PA]:n.NOTEQUAL};function re(P,E){if(E.type===Yi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===If||E.magFilter===$l||E.magFilter===xs||E.minFilter===Nn||E.minFilter===If||E.minFilter===$l||E.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,b[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,b[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,b[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,H[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,H[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ei||E.minFilter!==$l&&E.minFilter!==xs||E.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Se(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let te=h.get(Q);te===void 0&&(te={},h.set(Q,te));const Z=O(E);if(Z!==P.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[Z].usedTimes++;const Me=te[P.__cacheKey];Me!==void 0&&(te[P.__cacheKey].usedTimes--,Me.usedTimes===0&&R(E)),P.__cacheKey=Z,P.__webglTexture=te[Z].texture}return k}function Oe(P,E,k){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);const te=Se(P,E),Z=E.source;t.bindTexture(Q,P.__webglTexture,n.TEXTURE0+k);const Me=i.get(Z);if(Z.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+k);const le=Ke.getPrimaries(Ke.workingColorSpace),_e=E.colorSpace===xr?null:Ke.getPrimaries(E.colorSpace),je=E.colorSpace===xr||le===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let se=_(E.image,!1,r.maxTextureSize);se=ot(E,se);const ge=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type);let be=g(E.internalFormat,ge,Pe,E.colorSpace,E.isVideoTexture);re(Q,E);let ve;const ze=E.mipmaps,Ie=E.isVideoTexture!==!0,rt=Me.__version===void 0||te===!0,I=Z.dataReady,he=S(E,se);if(E.isDepthTexture)be=x(E.format===qo,E.type),rt&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,be,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,ge,Pe,null));else if(E.isDataTexture)if(ze.length>0){Ie&&rt&&t.texStorage2D(n.TEXTURE_2D,he,be,ze[0].width,ze[0].height);for(let j=0,J=ze.length;j<J;j++)ve=ze[j],Ie?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,Pe,ve.data):t.texImage2D(n.TEXTURE_2D,j,be,ve.width,ve.height,0,ge,Pe,ve.data);E.generateMipmaps=!1}else Ie?(rt&&t.texStorage2D(n.TEXTURE_2D,he,be,se.width,se.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ge,Pe,se.data)):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,ge,Pe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,be,ze[0].width,ze[0].height,se.depth);for(let j=0,J=ze.length;j<J;j++)if(ve=ze[j],E.format!==mi)if(ge!==null)if(Ie){if(I)if(E.layerUpdates.size>0){const ce=vv(ve.width,ve.height,E.format,E.type);for(const pe of E.layerUpdates){const Ge=ve.data.subarray(pe*ce/ve.data.BYTES_PER_ELEMENT,(pe+1)*ce/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,pe,ve.width,ve.height,1,ge,Ge,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,se.depth,ge,ve.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,be,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,se.depth,ge,Pe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,be,ve.width,ve.height,se.depth,0,ge,Pe,ve.data)}else{Ie&&rt&&t.texStorage2D(n.TEXTURE_2D,he,be,ze[0].width,ze[0].height);for(let j=0,J=ze.length;j<J;j++)ve=ze[j],E.format!==mi?ge!==null?Ie?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,j,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,Pe,ve.data):t.texImage2D(n.TEXTURE_2D,j,be,ve.width,ve.height,0,ge,Pe,ve.data)}else if(E.isDataArrayTexture)if(Ie){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,be,se.width,se.height,se.depth),I)if(E.layerUpdates.size>0){const j=vv(se.width,se.height,E.format,E.type);for(const J of E.layerUpdates){const ce=se.data.subarray(J*j/se.data.BYTES_PER_ELEMENT,(J+1)*j/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,ge,Pe,ce)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,Pe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,ge,Pe,se.data);else if(E.isData3DTexture)Ie?(rt&&t.texStorage3D(n.TEXTURE_3D,he,be,se.width,se.height,se.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,Pe,se.data)):t.texImage3D(n.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,ge,Pe,se.data);else if(E.isFramebufferTexture){if(rt)if(Ie)t.texStorage2D(n.TEXTURE_2D,he,be,se.width,se.height);else{let j=se.width,J=se.height;for(let ce=0;ce<he;ce++)t.texImage2D(n.TEXTURE_2D,ce,be,j,J,0,ge,Pe,null),j>>=1,J>>=1}}else if(ze.length>0){if(Ie&&rt){const j=Le(ze[0]);t.texStorage2D(n.TEXTURE_2D,he,be,j.width,j.height)}for(let j=0,J=ze.length;j<J;j++)ve=ze[j],Ie?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge,Pe,ve):t.texImage2D(n.TEXTURE_2D,j,be,ge,Pe,ve);E.generateMipmaps=!1}else if(Ie){if(rt){const j=Le(se);t.texStorage2D(n.TEXTURE_2D,he,be,j.width,j.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Pe,se)}else t.texImage2D(n.TEXTURE_2D,0,be,ge,Pe,se);p(E)&&d(Q),Me.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function X(P,E,k){if(E.image.length!==6)return;const Q=Se(P,E),te=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+k);const Z=i.get(te);if(te.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);const Me=Ke.getPrimaries(Ke.workingColorSpace),le=E.colorSpace===xr?null:Ke.getPrimaries(E.colorSpace),_e=E.colorSpace===xr||Me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!je&&!se?ge[J]=_(E.image[J],!0,r.maxCubemapSize):ge[J]=se?E.image[J].image:E.image[J],ge[J]=ot(E,ge[J]);const Pe=ge[0],be=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),ze=g(E.internalFormat,be,ve,E.colorSpace),Ie=E.isVideoTexture!==!0,rt=Z.__version===void 0||Q===!0,I=te.dataReady;let he=S(E,Pe);re(n.TEXTURE_CUBE_MAP,E);let j;if(je){Ie&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,ze,Pe.width,Pe.height);for(let J=0;J<6;J++){j=ge[J].mipmaps;for(let ce=0;ce<j.length;ce++){const pe=j[ce];E.format!==mi?be!==null?Ie?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,pe.width,pe.height,be,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,pe.width,pe.height,be,ve,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,ze,pe.width,pe.height,0,be,ve,pe.data)}}}else{if(j=E.mipmaps,Ie&&rt){j.length>0&&he++;const J=Le(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,ze,J.width,J.height)}for(let J=0;J<6;J++)if(se){Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,be,ve,ge[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,ge[J].width,ge[J].height,0,be,ve,ge[J].data);for(let ce=0;ce<j.length;ce++){const Ge=j[ce].image[J].image;Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Ge.width,Ge.height,be,ve,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,ze,Ge.width,Ge.height,0,be,ve,Ge.data)}}else{Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be,ve,ge[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,be,ve,ge[J]);for(let ce=0;ce<j.length;ce++){const pe=j[ce];Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,be,ve,pe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,ze,be,ve,pe.image[J])}}}p(E)&&d(n.TEXTURE_CUBE_MAP),Z.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ee(P,E,k,Q,te,Z){const Me=s.convert(k.format,k.colorSpace),le=s.convert(k.type),_e=g(k.internalFormat,Me,le,k.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>Z),ge=Math.max(1,E.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,_e,se,ge,E.depth,0,Me,le,null):t.texImage2D(te,Z,_e,se,ge,0,Me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,i.get(k).__webglTexture,0,Be(E)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,i.get(k).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(P,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const Q=E.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=x(E.stencilBuffer,te),Me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Be(E);Xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Z,E.width,E.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const Q=E.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],Me=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),_e=g(Z.internalFormat,Me,le,Z.colorSpace),je=Be(E);k&&Xe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,_e,E.width,E.height):Xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,te=Be(E);if(E.depthTexture.format===bo)Xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(E.depthTexture.format===qo)Xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function De(P){const E=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(E.__webglFramebuffer,P)}else if(k){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=n.createRenderbuffer(),de(E.__webglDepthbuffer[Q],P,!1);else{const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),de(E.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(P,E,k){const Q=i.get(P);E!==void 0&&ee(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&De(P)}function Ve(P){const E=P.texture,k=i.get(P),Q=i.get(E);P.addEventListener("dispose",C);const te=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let _e=0;_e<E.mipmaps.length;_e++)k.__webglFramebuffer[le][_e]=n.createFramebuffer()}else k.__webglFramebuffer[le]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)k.__webglFramebuffer[le]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Me)for(let le=0,_e=te.length;le<_e;le++){const je=i.get(te[le]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Xe(P)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const _e=te[le];k.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const je=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),ge=g(_e.internalFormat,je,se,_e.colorSpace,P.isXRRenderTarget===!0),Pe=Be(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ge,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,k.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),de(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),re(n.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ee(k.__webglFramebuffer[le][_e],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e);else ee(k.__webglFramebuffer[le],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,_e=te.length;le<_e;le++){const je=te[le],se=i.get(je);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),re(n.TEXTURE_2D,je),ee(k.__webglFramebuffer,P,je,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),p(je)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),re(le,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ee(k.__webglFramebuffer[_e],P,E,n.COLOR_ATTACHMENT0,le,_e);else ee(k.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,le,0);p(E)&&d(le),t.unbindTexture()}P.depthBuffer&&De(P)}function et(P){const E=P.textures;for(let k=0,Q=E.length;k<Q;k++){const te=E[k];if(p(te)){const Z=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(te).__webglTexture;t.bindTexture(Z,Me),d(Z),t.unbindTexture()}}}const He=[],L=[];function An(P){if(P.samples>0){if(Xe(P)===!1){const E=P.textures,k=P.width,Q=P.height;let te=n.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),le=E.length>1;if(le)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const je=i.get(E[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,te,n.NEAREST),l===!0&&(He.length=0,L.length=0,He.push(n.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(Z),L.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const je=i.get(E[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Be(P){return Math.min(r.maxSamples,P.samples)}function Xe(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(P){const E=o.render.frame;c.get(P)!==E&&(c.set(P,E),P.update())}function ot(P,E){const k=P.colorSpace,Q=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Kr&&k!==xr&&(Ke.getTransfer(k)===ut?(Q!==mi||te!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=T,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Xe}function F2(n,e){function t(i,r=xr){let s;const o=Ke.getTransfer(r);if(i===nr)return n.UNSIGNED_BYTE;if(i===Tm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wy)return n.BYTE;if(i===Xy)return n.SHORT;if(i===fl)return n.UNSIGNED_SHORT;if(i===Em)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===Yi)return n.FLOAT;if(i===Sl)return n.HALF_FLOAT;if(i===Yy)return n.ALPHA;if(i===$y)return n.RGB;if(i===mi)return n.RGBA;if(i===qy)return n.LUMINANCE;if(i===Ky)return n.LUMINANCE_ALPHA;if(i===bo)return n.DEPTH_COMPONENT;if(i===qo)return n.DEPTH_STENCIL;if(i===Zy)return n.RED;if(i===Am)return n.RED_INTEGER;if(i===Qy)return n.RG;if(i===Cm)return n.RG_INTEGER;if(i===Rm)return n.RGBA_INTEGER;if(i===Du||i===Iu||i===Nu||i===Uu)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Du)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Du)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Iu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ih||i===Nh||i===Uh||i===Oh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ih)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fh||i===kh||i===Bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fh||i===kh)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh||i===jh||i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===Qh||i===Jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$h)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ou||i===ep||i===tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ou)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ep)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jy||i===np||i===ip||i===rp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ou)return s.COMPRESSED_RED_RGTC1_EXT;if(i===np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ip)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$o?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class k2 extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mu extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B2={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(u,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rr({vertexShader:z2,fragmentShader:V2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ci(new Al(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G2 extends ea{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,v=null;const _=new H2,p=t.getContextAttributes();let d=null,g=null;const x=[],S=[],A=new Je;let C=null;const M=new hi;M.layers.enable(1),M.viewport=new wt;const R=new hi;R.layers.enable(2),R.viewport=new wt;const D=[M,R],y=new k2;y.layers.enable(1),y.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=x[X];return ee===void 0&&(ee=new ud,x[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=x[X];return ee===void 0&&(ee=new ud,x[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=x[X];return ee===void 0&&(ee=new ud,x[X]=ee),ee.getHandSpace()};function O(X){const ee=S.indexOf(X.inputSource);if(ee===-1)return;const de=x[ee];de!==void 0&&(de.update(X.inputSource,X.frame,u||o),de.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let X=0;X<x.length;X++){const ee=S[X];ee!==null&&(S[X]=null,x[X].disconnect(ee))}T=null,F=null,_.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,g=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Is(m.framebufferWidth,m.framebufferHeight,{format:mi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,de=null,ue=null;p.depth&&(ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?qo:bo,de=p.stencil?$o:Ds);const De={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Is(h.textureWidth,h.textureHeight,{format:mi,type:nr,depthTexture:new mS(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(X){for(let ee=0;ee<X.removed.length;ee++){const de=X.removed[ee],ue=S.indexOf(de);ue>=0&&(S[ue]=null,x[ue].disconnect(de))}for(let ee=0;ee<X.added.length;ee++){const de=X.added[ee];let ue=S.indexOf(de);if(ue===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=S.length){S.push(de),ue=Ae;break}else if(S[Ae]===null){S[Ae]=de,ue=Ae;break}if(ue===-1)break}const De=x[ue];De&&De.connect(de)}}const B=new G,Y=new G;function b(X,ee,de){B.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const ue=B.distanceTo(Y),De=ee.projectionMatrix.elements,Ae=de.projectionMatrix.elements,Ve=De[14]/(De[10]-1),et=De[14]/(De[10]+1),He=(De[9]+1)/De[5],L=(De[9]-1)/De[5],An=(De[8]-1)/De[0],Be=(Ae[8]+1)/Ae[0],Xe=Ve*An,Re=Ve*Be,ot=ue/(-An+Be),Le=ot*-An;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(ot),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),De[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const P=Ve+ot,E=et+ot,k=Xe-Le,Q=Re+(ue-Le),te=He*et/E*P,Z=L*et/E*P;X.projectionMatrix.makePerspective(k,Q,te,Z,P,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function H(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ee=X.near,de=X.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(de=_.depthFar)),y.near=R.near=M.near=ee,y.far=R.far=M.far=de,(T!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,F=y.far);const ue=X.parent,De=y.cameras;H(y,ue);for(let Ae=0;Ae<De.length;Ae++)H(De[Ae],ue);De.length===2?b(y,M,R):y.projectionMatrix.copy(M.projectionMatrix),q(X,y,ue)};function q(X,ee,de){de===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sp*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let re=null;function Se(X,ee){if(c=ee.getViewerPose(u||o),v=ee,c!==null){const de=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ue=!1;de.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Ae=0;Ae<de.length;Ae++){const Ve=de[Ae];let et=null;if(m!==null)et=m.getViewport(Ve);else{const L=f.getViewSubImage(h,Ve);et=L.viewport,Ae===0&&(e.setRenderTargetTextures(g,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let He=D[Ae];He===void 0&&(He=new hi,He.layers.enable(Ae),He.viewport=new wt,D[Ae]=He),He.matrix.fromArray(Ve.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ve.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(et.x,et.y,et.width,et.height),Ae===0&&(y.matrix.copy(He.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(He)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ae=f.getDepthInformation(de[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let de=0;de<x.length;de++){const ue=S[de],De=x[de];ue!==null&&De!==void 0&&De.update(ue,ee,u||o)}re&&re(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Oe=new hS;Oe.setAnimationLoop(Se),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}const ss=new ir,W2=new Lt;function X2(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,uS(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,g,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,g,x):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Tn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Tn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d),x=g.envMap,S=g.envMapRotation;x&&(p.envMap.value=x,ss.copy(S),ss.x*=-1,ss.y*=-1,ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),p.envMapRotation.value.setFromMatrix4(W2.makeRotationFromEuler(ss)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,g,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const g=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function j2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function u(g,x){let S=r[g.id];S===void 0&&(v(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",p));const A=x.program;i.updateUBOMapping(g,A);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function c(g){const x=f();g.__bindingPointIndex=x;const S=n.createBuffer(),A=g.__size,C=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,A=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,M=S.length;C<M;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let D=0,y=R.length;D<y;D++){const T=R[D];if(m(T,C,D,A)===!0){const F=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let W=0;for(let $=0;$<O.length;$++){const B=O[$],Y=_(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,F+W,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(g,x,S,A){const C=g.value,M=x+"_"+S;if(A[M]===void 0)return typeof C=="number"||typeof C=="boolean"?A[M]=C:A[M]=C.clone(),!0;{const R=A[M];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[M]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function v(g){const x=g.uniforms;let S=0;const A=16;for(let M=0,R=x.length;M<R;M++){const D=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=D.length;y<T;y++){const F=D[y],O=Array.isArray(F.value)?F.value:[F.value];for(let W=0,$=O.length;W<$;W++){const B=O[W],Y=_(B),b=S%A,H=b%Y.boundary,q=b+H;S+=H,q!==0&&A-q<Y.storage&&(S+=A-q),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Y.storage}}}const C=S%A;return C>0&&(S+=A-C),g.__size=S,g.__cache={},this}function _(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function p(g){const x=g.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Y2{constructor(e={}){const{canvas:t=IA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mi,this.toneMapping=kr,this.toneMappingExposure=1;const x=this;let S=!1,A=0,C=0,M=null,R=-1,D=null;const y=new wt,T=new wt;let F=null;const O=new tt(0);let W=0,$=t.width,B=t.height,Y=1,b=null,H=null;const q=new wt(0,0,$,B),re=new wt(0,0,$,B);let Se=!1;const Oe=new dS;let X=!1,ee=!1;const de=new Lt,ue=new Lt,De=new G,Ae=new wt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function He(){return M===null?Y:1}let L=i;function An(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mm}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",pe,!1),L===null){const N="webgl2";if(L=An(N,w),L===null)throw An(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,Xe,Re,ot,Le,P,E,k,Q,te,Z,Me,le,_e,je,se,ge,Pe,be,ve,ze,Ie,rt,I;function he(){Be=new QP(L),Be.init(),Ie=new F2(L,Be),Xe=new jP(L,Be,e,Ie),Re=new N2(L),Xe.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),ot=new tb(L),Le=new x2,P=new O2(L,Be,Re,Le,Xe,Ie,ot),E=new $P(x),k=new ZP(x),Q=new lC(L),rt=new WP(L,Q),te=new JP(L,Q,ot,rt),Z=new ib(L,te,Q,ot),be=new nb(L,Xe,P),se=new YP(Le),Me=new v2(x,E,k,Be,Xe,rt,se),le=new X2(x,Le),_e=new S2,je=new C2(Be),Pe=new GP(x,E,k,Re,Z,h,l),ge=new D2(x,Z,Xe),I=new j2(L,ot,Xe,Re),ve=new XP(L,Be,ot),ze=new eb(L,Be,ot),ot.programs=Me.programs,x.capabilities=Xe,x.extensions=Be,x.properties=Le,x.renderLists=_e,x.shadowMap=ge,x.state=Re,x.info=ot}he();const j=new G2(x,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize($,B,!1))},this.getSize=function(w){return w.set($,B)},this.setSize=function(w,N,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,B=N,t.width=Math.floor(w*Y),t.height=Math.floor(N*Y),z===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set($*Y,B*Y).floor()},this.setDrawingBufferSize=function(w,N,z){$=w,B=N,Y=z,t.width=Math.floor(w*z),t.height=Math.floor(N*z),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,N,z,V){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,N,z,V),Re.viewport(y.copy(q).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,N,z,V){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,N,z,V),Re.scissor(T.copy(re).multiplyScalar(Y).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){Re.setScissorTest(Se=w)},this.setOpaqueSort=function(w){b=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,N=!0,z=!0){let V=0;if(w){let U=!1;if(M!==null){const oe=M.texture.format;U=oe===Rm||oe===Cm||oe===Am}if(U){const oe=M.texture.type,fe=oe===nr||oe===Ds||oe===fl||oe===$o||oe===Tm||oe===wm,xe=Pe.getClearColor(),ye=Pe.getClearAlpha(),we=xe.r,Ce=xe.g,Ee=xe.b;fe?(m[0]=we,m[1]=Ce,m[2]=Ee,m[3]=ye,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=we,v[1]=Ce,v[2]=Ee,v[3]=ye,L.clearBufferiv(L.COLOR,0,v))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),je.dispose(),Le.dispose(),E.dispose(),k.dispose(),Z.dispose(),rt.dispose(),I.dispose(),Me.dispose(),j.dispose(),j.removeEventListener("sessionstart",Im),j.removeEventListener("sessionend",Nm),Zr.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ot.autoReset,N=ge.enabled,z=ge.autoUpdate,V=ge.needsUpdate,U=ge.type;he(),ot.autoReset=w,ge.enabled=N,ge.autoUpdate=z,ge.needsUpdate=V,ge.type=U}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){const N=w.target;N.removeEventListener("dispose",Ge),At(N)}function At(w){ln(w),Le.remove(w)}function ln(w){const N=Le.get(w).programs;N!==void 0&&(N.forEach(function(z){Me.releaseProgram(z)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,z,V,U,oe){N===null&&(N=Ve);const fe=U.isMesh&&U.matrixWorld.determinant()<0,xe=yS(w,N,z,V,U);Re.setMaterial(V,fe);let ye=z.index,we=1;if(V.wireframe===!0){if(ye=te.getWireframeAttribute(z),ye===void 0)return;we=2}const Ce=z.drawRange,Ee=z.attributes.position;let Ze=Ce.start*we,at=(Ce.start+Ce.count)*we;oe!==null&&(Ze=Math.max(Ze,oe.start*we),at=Math.min(at,(oe.start+oe.count)*we)),ye!==null?(Ze=Math.max(Ze,0),at=Math.min(at,ye.count)):Ee!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Ee.count));const xt=at-Ze;if(xt<0||xt===1/0)return;rt.setup(U,V,xe,z,ye);let Cn,$e=ve;if(ye!==null&&(Cn=Q.get(ye),$e=ze,$e.setIndex(Cn)),U.isMesh)V.wireframe===!0?(Re.setLineWidth(V.wireframeLinewidth*He()),$e.setMode(L.LINES)):$e.setMode(L.TRIANGLES);else if(U.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),Re.setLineWidth(Te*He()),U.isLineSegments?$e.setMode(L.LINES):U.isLineLoop?$e.setMode(L.LINE_LOOP):$e.setMode(L.LINE_STRIP)}else U.isPoints?$e.setMode(L.POINTS):U.isSprite&&$e.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))$e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Vt=U._multiDrawCounts,qe=U._multiDrawCount,ri=ye?Q.get(ye).bytesPerElement:1,zs=Le.get(V).currentProgram.getUniforms();for(let Rn=0;Rn<qe;Rn++)zs.setValue(L,"_gl_DrawID",Rn),$e.render(Te[Rn]/ri,Vt[Rn])}else if(U.isInstancedMesh)$e.renderInstances(Ze,xt,U.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vt=Math.min(z.instanceCount,Te);$e.renderInstances(Ze,xt,Vt)}else $e.render(Ze,xt)};function Ye(w,N,z){w.transparent===!0&&w.side===Wi&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,Rl(w,N,z),w.side=Wr,w.needsUpdate=!0,Rl(w,N,z),w.side=Wi):Rl(w,N,z)}this.compile=function(w,N,z=null){z===null&&(z=w),p=je.get(z),p.init(N),g.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const xe=oe[fe];Ye(xe,z,U),V.add(xe)}else Ye(oe,z,U),V.add(oe)}),g.pop(),p=null,V},this.compileAsync=function(w,N,z=null){const V=this.compile(w,N,z);return new Promise(U=>{function oe(){if(V.forEach(function(fe){Le.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){U(w);return}setTimeout(oe,10)}Be.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let un=null;function Di(w){un&&un(w)}function Im(){Zr.stop()}function Nm(){Zr.start()}const Zr=new hS;Zr.setAnimationLoop(Di),typeof self<"u"&&Zr.setContext(self),this.setAnimationLoop=function(w){un=w,j.setAnimationLoop(w),w===null?Zr.stop():Zr.start()},j.addEventListener("sessionstart",Im),j.addEventListener("sessionend",Nm),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,M),p=je.get(w,g.length),p.init(N),g.push(p),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Oe.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,X=se.init(this.clippingPlanes,ee),_=_e.get(w,d.length),_.init(),d.push(_),j.enabled===!0&&j.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&jc(oe,N,-1/0,x.sortObjects)}jc(w,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(b,H),et=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,et&&Pe.addToRenderList(_,w),this.info.render.frame++,X===!0&&se.beginShadows();const z=p.state.shadowsArray;ge.render(z,w,N),X===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,U=_.transmissive;if(p.setupLights(),N.isArrayCamera){const oe=N.cameras;if(U.length>0)for(let fe=0,xe=oe.length;fe<xe;fe++){const ye=oe[fe];Om(V,U,w,ye)}et&&Pe.render(w);for(let fe=0,xe=oe.length;fe<xe;fe++){const ye=oe[fe];Um(_,w,ye,ye.viewport)}}else U.length>0&&Om(V,U,w,N),et&&Pe.render(w),Um(_,w,N);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(x,w,N),rt.resetDefaultState(),R=-1,D=null,g.pop(),g.length>0?(p=g[g.length-1],X===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function jc(w,N,z,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){V&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const fe=Z.update(w),xe=w.material;xe.visible&&_.push(w,fe,xe,z,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const fe=Z.update(w),xe=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ae.copy(fe.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(xe)){const ye=fe.groups;for(let we=0,Ce=ye.length;we<Ce;we++){const Ee=ye[we],Ze=xe[Ee.materialIndex];Ze&&Ze.visible&&_.push(w,fe,Ze,z,Ae.z,Ee)}}else xe.visible&&_.push(w,fe,xe,z,Ae.z,null)}}const oe=w.children;for(let fe=0,xe=oe.length;fe<xe;fe++)jc(oe[fe],N,z,V)}function Um(w,N,z,V){const U=w.opaque,oe=w.transmissive,fe=w.transparent;p.setupLightsView(z),X===!0&&se.setGlobalState(x.clippingPlanes,z),V&&Re.viewport(y.copy(V)),U.length>0&&Cl(U,N,z),oe.length>0&&Cl(oe,N,z),fe.length>0&&Cl(fe,N,z),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Om(w,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Is(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Sl:nr,minFilter:xs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const oe=p.state.transmissionRenderTarget[V.id],fe=V.viewport||y;oe.setSize(fe.z,fe.w);const xe=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(O),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),et&&Pe.render(z);const ye=x.toneMapping;x.toneMapping=kr;const we=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),X===!0&&se.setGlobalState(x.clippingPlanes,V),Cl(w,z,V),P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,Ze=N.length;Ee<Ze;Ee++){const at=N[Ee],xt=at.object,Cn=at.geometry,$e=at.material,Te=at.group;if($e.side===Wi&&xt.layers.test(V.layers)){const Vt=$e.side;$e.side=Tn,$e.needsUpdate=!0,Fm(xt,z,V,Cn,$e,Te),$e.side=Vt,$e.needsUpdate=!0,Ce=!0}}Ce===!0&&(P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe))}x.setRenderTarget(xe),x.setClearColor(O,W),we!==void 0&&(V.viewport=we),x.toneMapping=ye}function Cl(w,N,z){const V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=w.length;U<oe;U++){const fe=w[U],xe=fe.object,ye=fe.geometry,we=V===null?fe.material:V,Ce=fe.group;xe.layers.test(z.layers)&&Fm(xe,N,z,ye,we,Ce)}}function Fm(w,N,z,V,U,oe){w.onBeforeRender(x,N,z,V,U,oe),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,N,z,V,w,oe),U.transparent===!0&&U.side===Wi&&U.forceSinglePass===!1?(U.side=Tn,U.needsUpdate=!0,x.renderBufferDirect(z,N,V,U,w,oe),U.side=Wr,U.needsUpdate=!0,x.renderBufferDirect(z,N,V,U,w,oe),U.side=Wi):x.renderBufferDirect(z,N,V,U,w,oe),w.onAfterRender(x,N,z,V,U,oe)}function Rl(w,N,z){N.isScene!==!0&&(N=Ve);const V=Le.get(w),U=p.state.lights,oe=p.state.shadowsArray,fe=U.state.version,xe=Me.getParameters(w,U.state,oe,N,z),ye=Me.getProgramCacheKey(xe);let we=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?k:E).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,we===void 0&&(w.addEventListener("dispose",Ge),we=new Map,V.programs=we);let Ce=we.get(ye);if(Ce!==void 0){if(V.currentProgram===Ce&&V.lightsStateVersion===fe)return Bm(w,xe),Ce}else xe.uniforms=Me.getUniforms(w),w.onBeforeCompile(xe,x),Ce=Me.acquireProgram(xe,ye),we.set(ye,Ce),V.uniforms=xe.uniforms;const Ee=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=se.uniform),Bm(w,xe),V.needsLights=MS(w),V.lightsStateVersion=fe,V.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ce,V.uniformsList=null,Ce}function km(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=ku.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Bm(w,N){const z=Le.get(w);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function yS(w,N,z,V,U){N.isScene!==!0&&(N=Ve),P.resetTextureUnits();const oe=N.fog,fe=V.isMeshStandardMaterial?N.environment:null,xe=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Kr,ye=(V.isMeshStandardMaterial?k:E).get(V.envMap||fe),we=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,at=!!z.morphAttributes.color;let xt=kr;V.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(xt=x.toneMapping);const Cn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$e=Cn!==void 0?Cn.length:0,Te=Le.get(V),Vt=p.state.lights;if(X===!0&&(ee===!0||w!==D)){const jn=w===D&&V.id===R;se.setState(V,w,jn)}let qe=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Vt.state.version||Te.outputColorSpace!==xe||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==ye||V.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==we||Te.vertexTangents!==Ce||Te.morphTargets!==Ee||Te.morphNormals!==Ze||Te.morphColors!==at||Te.toneMapping!==xt||Te.morphTargetsCount!==$e)&&(qe=!0):(qe=!0,Te.__version=V.version);let ri=Te.currentProgram;qe===!0&&(ri=Rl(V,N,U));let zs=!1,Rn=!1,Yc=!1;const Mt=ri.getUniforms(),or=Te.uniforms;if(Re.useProgram(ri.program)&&(zs=!0,Rn=!0,Yc=!0),V.id!==R&&(R=V.id,Rn=!0),zs||D!==w){Xe.reverseDepthBuffer?(de.copy(w.projectionMatrix),UA(de),OA(de),Mt.setValue(L,"projectionMatrix",de)):Mt.setValue(L,"projectionMatrix",w.projectionMatrix),Mt.setValue(L,"viewMatrix",w.matrixWorldInverse);const jn=Mt.map.cameraPosition;jn!==void 0&&jn.setValue(L,De.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Rn=!0,Yc=!0)}if(U.isSkinnedMesh){Mt.setOptional(L,U,"bindMatrix"),Mt.setOptional(L,U,"bindMatrixInverse");const jn=U.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Mt.setValue(L,"boneTexture",jn.boneTexture,P))}U.isBatchedMesh&&(Mt.setOptional(L,U,"batchingTexture"),Mt.setValue(L,"batchingTexture",U._matricesTexture,P),Mt.setOptional(L,U,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",U._indirectTexture,P),Mt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",U._colorsTexture,P));const $c=z.morphAttributes;if(($c.position!==void 0||$c.normal!==void 0||$c.color!==void 0)&&be.update(U,z,ri),(Rn||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,Mt.setValue(L,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(or.envMap.value=ye,or.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(or.envMapIntensity.value=N.environmentIntensity),Rn&&(Mt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&SS(or,Yc),oe&&V.fog===!0&&le.refreshFogUniforms(or,oe),le.refreshMaterialUniforms(or,V,Y,B,p.state.transmissionRenderTarget[w.id]),ku.upload(L,km(Te),or,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ku.upload(L,km(Te),or,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mt.setValue(L,"center",U.center),Mt.setValue(L,"modelViewMatrix",U.modelViewMatrix),Mt.setValue(L,"normalMatrix",U.normalMatrix),Mt.setValue(L,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const jn=V.uniformsGroups;for(let qc=0,ES=jn.length;qc<ES;qc++){const zm=jn[qc];I.update(zm,ri),I.bind(zm,ri)}}return ri}function SS(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function MS(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,N,z){Le.get(w.texture).__webglTexture=N,Le.get(w.depthTexture).__webglTexture=z;const V=Le.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const z=Le.get(w);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,z=0){M=w,A=N,C=z;let V=!0,U=null,oe=!1,fe=!1;if(w){const ye=Le.get(w);if(ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(ye.__hasExternalTextures)P.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ee=w.depthTexture;if(ye.__boundDepthTexture!==Ee){if(Ee!==null&&Le.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(fe=!0);const Ce=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?U=Ce[N][z]:U=Ce[N],oe=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?U=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[z]:U=Ce,y.copy(w.viewport),T.copy(w.scissor),F=w.scissorTest}else y.copy(q).multiplyScalar(Y).floor(),T.copy(re).multiplyScalar(Y).floor(),F=Se;if(Re.bindFramebuffer(L.FRAMEBUFFER,U)&&V&&Re.drawBuffers(w,U),Re.viewport(y),Re.scissor(T),Re.setScissorTest(F),oe){const ye=Le.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,z)}else if(fe){const ye=Le.get(w.texture),we=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,we)}R=-1},this.readRenderTargetPixels=function(w,N,z,V,U,oe,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Re.bindFramebuffer(L.FRAMEBUFFER,xe);try{const ye=w.texture,we=ye.format,Ce=ye.type;if(!Xe.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&z>=0&&z<=w.height-U&&L.readPixels(N,z,V,U,Ie.convert(we),Ie.convert(Ce),oe)}finally{const ye=M!==null?Le.get(M).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,N,z,V,U,oe,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const ye=w.texture,we=ye.format,Ce=ye.type;if(!Xe.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&z>=0&&z<=w.height-U){Re.bindFramebuffer(L.FRAMEBUFFER,xe);const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),L.readPixels(N,z,V,U,Ie.convert(we),Ie.convert(Ce),0);const Ze=M!==null?Le.get(M).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Ze);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await NA(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(Ee),L.deleteSync(at),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,z=0){w.isTexture!==!0&&(Fu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-z),U=Math.floor(w.image.width*V),oe=Math.floor(w.image.height*V),fe=N!==null?N.x:0,xe=N!==null?N.y:0;P.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,fe,xe,U,oe),Re.unbindTexture()},this.copyTextureToTexture=function(w,N,z=null,V=null,U=0){w.isTexture!==!0&&(Fu("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,z=null);let oe,fe,xe,ye,we,Ce;z!==null?(oe=z.max.x-z.min.x,fe=z.max.y-z.min.y,xe=z.min.x,ye=z.min.y):(oe=w.image.width,fe=w.image.height,xe=0,ye=0),V!==null?(we=V.x,Ce=V.y):(we=0,Ce=0);const Ee=Ie.convert(N.format),Ze=Ie.convert(N.type);P.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const at=L.getParameter(L.UNPACK_ROW_LENGTH),xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),$e=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),Vt=w.isCompressedTexture?w.mipmaps[U]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,we,Ce,oe,fe,Ee,Ze,Vt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,we,Ce,Vt.width,Vt.height,Ee,Vt.data):L.texSubImage2D(L.TEXTURE_2D,U,we,Ce,oe,fe,Ee,Ze,Vt),L.pixelStorei(L.UNPACK_ROW_LENGTH,at),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,$e),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),U===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,N,z=null,V=null,U=0){w.isTexture!==!0&&(Fu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0);let oe,fe,xe,ye,we,Ce,Ee,Ze,at;const xt=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(oe=z.max.x-z.min.x,fe=z.max.y-z.min.y,xe=z.max.z-z.min.z,ye=z.min.x,we=z.min.y,Ce=z.min.z):(oe=xt.width,fe=xt.height,xe=xt.depth,ye=0,we=0,Ce=0),V!==null?(Ee=V.x,Ze=V.y,at=V.z):(Ee=0,Ze=0,at=0);const Cn=Ie.convert(N.format),$e=Ie.convert(N.type);let Te;if(N.isData3DTexture)P.setTexture3D(N,0),Te=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)P.setTexture2DArray(N,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Vt=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ri=L.getParameter(L.UNPACK_SKIP_PIXELS),zs=L.getParameter(L.UNPACK_SKIP_ROWS),Rn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Te,U,Ee,Ze,at,oe,fe,xe,Cn,$e,xt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,U,Ee,Ze,at,oe,fe,xe,Cn,xt.data):L.texSubImage3D(Te,U,Ee,Ze,at,oe,fe,xe,Cn,$e,xt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Vt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ri),L.pixelStorei(L.UNPACK_SKIP_ROWS,zs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rn),U===0&&N.generateMipmaps&&L.generateMipmap(Te),Re.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){A=0,C=0,M=null,Re.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Pm?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Gc?"display-p3":"srgb"}}class $2 extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xv={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class q2{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],v=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return v}return null}}}const K2=new q2;class Dm{constructor(e){this.manager=e!==void 0?e:K2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dm.DEFAULT_MATERIAL_NAME="__DEFAULT";class Z2 extends Dm{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xv.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=dl("img");function l(){c(),xv.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Q2 extends Dm{constructor(e){super(e)}load(e,t,i,r){const s=new sn,o=new Z2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mm);const J2="_wrap_wad21_1",eL="_fullScreen_wad21_9",tL="_canvas_wad21_17",nL="_fallback_wad21_25",_u={wrap:J2,fullScreen:eL,canvas:tL,fallback:nL};function iL({imageBase:n,imageHover:e,alt:t="",className:i="",fullScreen:r=!1}){const s=ie.useRef(null),o=ie.useRef(null);return ie.useEffect(()=>{try{if(window.matchMedia("(pointer: coarse)").matches)return;const a=s.current,l=o.current;if(!a||!l)return;let u=!1;const c=new Y2({canvas:l,alpha:!0,antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2));const f=new $2,h=new pS(-.5,.5,.5,-.5,0,1),m=new Q2,v=(H,q)=>{H.minFilter=Nn,H.magFilter=Nn,H.generateMipmaps=!1,q&&H.image&&H.image.width&&H.image.height&&(g.uImageAspect.value=H.image.width/H.image.height)},_=H=>console.error("[HoverMaskReveal] texture load failed",H),p=m.load(n,H=>v(H,!0),void 0,_),d=m.load(e,H=>v(H,!1),void 0,_),g={uTexBase:{value:p},uTexHover:{value:d},uMouse:{value:new Je(.5,.5)},uMaskRadius:{value:0},uTime:{value:0},uResolution:{value:new Je(1,1)},uImageAspect:{value:1}},x=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        // Plane is 1x1 (vertices at -0.5..0.5). Scale to fill NDC (-1..1).
        gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
      }
    `,S=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexBase;
      uniform sampler2D uTexHover;
      uniform vec2  uMouse;
      uniform float uMaskRadius;
      uniform float uTime;
      uniform vec2  uResolution;
      uniform float uImageAspect;

      // Cover-fit UV computation: keeps aspect ratio while filling the plane.
      vec2 coverUV(vec2 uv, vec2 res, float imageAspect) {
        float planeAspect = res.x / res.y;
        vec2 scale = vec2(1.0);
        if (planeAspect > imageAspect) {
          scale.y = imageAspect / planeAspect;
        } else {
          scale.x = planeAspect / imageAspect;
        }
        return (uv - 0.5) * scale + 0.5;
      }

      // 2D simplex-ish noise for liquid edge wobble.
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p); vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = coverUV(vUv, uResolution, uImageAspect);

        // Aspect-corrected distance from mouse for a circular mask.
        vec2 m = uMouse;
        vec2 d = vUv - m;
        d.x *= uResolution.x / uResolution.y;
        float dist = length(d);

        // Liquid edge: warp the mask boundary with low-frequency noise.
        float n = noise(vUv * 6.0 + uTime * 0.4) - 0.5;
        float edge = uMaskRadius + n * 0.06;
        float mask = smoothstep(edge, edge - 0.08, dist);

        vec4 base = texture2D(uTexBase, uv);
        vec4 hover = texture2D(uTexHover, uv);
        gl_FragColor = mix(base, hover, mask);
      }
    `,A=new Al(1,1),C=new rr({uniforms:g,vertexShader:x,fragmentShader:S,transparent:!0}),M=new Ci(A,C);f.add(M);let R=0,D=.5,y=.5;const T=()=>{const H=a.getBoundingClientRect();c.setSize(H.width,H.height,!1),g.uResolution.value.set(H.width,H.height)};T();const F=new ResizeObserver(T);F.observe(a);const O=H=>{const q=a.getBoundingClientRect();D=(H.clientX-q.left)/q.width,y=1-(H.clientY-q.top)/q.height},W=()=>{R=.22},$=()=>{R=0};a.addEventListener("mousemove",O),a.addEventListener("mouseenter",W),a.addEventListener("mouseleave",$);const B=performance.now(),Y=()=>{if(u)return;const H=performance.now();g.uTime.value=(H-B)/1e3,g.uMaskRadius.value+=(R-g.uMaskRadius.value)*.08,g.uMouse.value.x+=(D-g.uMouse.value.x)*.12,g.uMouse.value.y+=(y-g.uMouse.value.y)*.12,c.render(f,h),b=requestAnimationFrame(Y)};let b=requestAnimationFrame(Y);return()=>{u=!0,cancelAnimationFrame(b),F.disconnect(),a.removeEventListener("mousemove",O),a.removeEventListener("mouseenter",W),a.removeEventListener("mouseleave",$),A.dispose(),C.dispose(),p.dispose(),d.dispose(),c.dispose()}}catch(a){window.__hmrError={msg:a.message,stack:a.stack},console.error("[HoverMaskReveal] effect threw:",a)}},[n,e]),K.jsxs("div",{ref:s,className:`${_u.wrap} ${r?_u.fullScreen:""} ${i}`,role:"img","aria-label":t,children:[K.jsx("img",{src:n,alt:t,className:_u.fallback}),K.jsx("canvas",{ref:o,className:_u.canvas})]})}const rL="_landing_1bi5p_1",sL="_footMeta_1bi5p_10",yv={landing:rL,footMeta:sL};function Sv(){return ie.useEffect(()=>(document.body.classList.add("no-scroll"),()=>document.body.classList.remove("no-scroll")),[]),K.jsxs("main",{className:yv.landing,children:[K.jsx(iL,{imageBase:Wo.hero_base,imageHover:Wo.hero_hover,alt:"Ecem Dilan Köse",fullScreen:!0}),K.jsxs("div",{className:yv.footMeta,children:[K.jsx("span",{children:"EST. ISTANBUL"}),K.jsx("span",{children:"PORTFOLIO / 2026"})]})]})}const oL="_page_fay9m_1",aL="_header_fay9m_10",lL="_eyebrow_fay9m_19",uL="_count_fay9m_25",cL="_scroller_fay9m_36",fL="_list_fay9m_52",dL="_item_fay9m_65",hL="_card_fay9m_73",pL="_imageWrap_fay9m_81",mL="_meta_fay9m_112",_L="_num_fay9m_121",gL="_title_fay9m_127",vL="_year_fay9m_140",xL="_foot_fay9m_146",dn={page:oL,header:aL,eyebrow:lL,count:uL,scroller:cL,list:fL,item:dL,card:hL,imageWrap:pL,meta:mL,num:_L,title:gL,year:vL,foot:xL};function yL(){const n=ie.useRef(null);return ie.useEffect(()=>{const e=n.current;if(!e||window.matchMedia("(pointer: coarse)").matches)return;const i=r=>{Math.abs(r.deltaY)>Math.abs(r.deltaX)&&(r.preventDefault(),e.scrollLeft+=r.deltaY)};return e.addEventListener("wheel",i,{passive:!1}),()=>e.removeEventListener("wheel",i)},[]),K.jsxs("main",{className:dn.page,children:[K.jsxs("header",{className:dn.header,children:[K.jsx("p",{className:dn.eyebrow,children:"WORKS"}),K.jsxs("p",{className:dn.count,children:[String(fi.length).padStart(2,"0")," PROJECTS"]})]}),K.jsx("div",{ref:n,className:dn.scroller,children:K.jsx("ul",{className:dn.list,children:fi.map((e,t)=>K.jsx("li",{className:dn.item,children:K.jsxs(Na,{to:`/works/${e.slug}`,className:dn.card,children:[K.jsx("div",{className:dn.imageWrap,children:K.jsx("img",{src:Wo.works[e.slug],alt:e.title})}),K.jsxs("div",{className:dn.meta,children:[K.jsx("span",{className:dn.num,children:String(t+1).padStart(2,"0")}),K.jsx("span",{className:dn.title,children:e.title}),K.jsx("span",{className:dn.year,children:e.year})]})]})},e.slug))})}),K.jsx("footer",{className:dn.foot,children:K.jsx("span",{children:"SCROLL →"})})]})}const SL="_page_1gohu_1",ML="_back_1gohu_8",EL="_header_1gohu_21",TL="_title_1gohu_30",wL="_year_1gohu_39",AL="_imageWrap_1gohu_46",CL="_body_1gohu_60",RL="_pager_1gohu_69",PL="_pagerLink_1gohu_77",bL="_right_1gohu_86",LL="_pagerLabel_1gohu_88",DL="_pagerTitle_1gohu_94",IL="_notFound_1gohu_103",Ft={page:SL,back:ML,header:EL,title:TL,year:wL,imageWrap:AL,body:CL,pager:RL,pagerLink:PL,right:bL,pagerLabel:LL,pagerTitle:DL,notFound:IL};function NL(){const{slug:n}=b1(),e=im(),t=fi.findIndex(a=>a.slug===n),i=fi[t];if(ie.useEffect(()=>{window.scrollTo({top:0,behavior:("instant"in window,"auto")})},[n]),!i)return K.jsx("main",{className:`page ${Ft.page}`,children:K.jsxs("div",{className:"container",children:[K.jsx("p",{className:Ft.notFound,children:"Project not found."}),K.jsx("button",{className:Ft.back,onClick:()=>e("/"),children:"← BACK"})]})});const r=fi[(t-1+fi.length)%fi.length],s=fi[(t+1)%fi.length],o=Wo.works[i.slug];return K.jsxs("main",{className:`page ${Ft.page}`,children:[K.jsxs("div",{className:"container",children:[K.jsx(Na,{to:"/works",className:Ft.back,children:"← WORKS"}),K.jsxs("header",{className:Ft.header,children:[K.jsx("h1",{className:Ft.title,children:i.title}),K.jsx("span",{className:Ft.year,children:i.year})]})]}),K.jsx("div",{className:Ft.imageWrap,children:K.jsx("img",{src:o,alt:i.title})}),K.jsxs("div",{className:"container",children:[K.jsx("div",{className:Ft.body,children:K.jsx("p",{children:i.description})}),K.jsxs("nav",{className:Ft.pager,children:[K.jsxs(Na,{to:`/works/${r.slug}`,className:Ft.pagerLink,children:[K.jsx("span",{className:Ft.pagerLabel,children:"← PREV"}),K.jsx("span",{className:Ft.pagerTitle,children:r.title})]}),K.jsxs(Na,{to:`/works/${s.slug}`,className:`${Ft.pagerLink} ${Ft.right}`,children:[K.jsx("span",{className:Ft.pagerLabel,children:"NEXT →"}),K.jsx("span",{className:Ft.pagerTitle,children:s.title})]})]})]})]})}const UL="_page_1e3qa_1",OL="_grid_1e3qa_11",FL="_eyebrow_1e3qa_28",kL="_heading_1e3qa_37",BL="_subheading_1e3qa_47",zL="_bio_1e3qa_55",VL="_imageWrap_1e3qa_63",pr={page:UL,grid:OL,eyebrow:FL,heading:kL,subheading:BL,bio:zL,imageWrap:VL};function HL(){return K.jsx("main",{className:pr.page,children:K.jsxs("div",{className:pr.grid,children:[K.jsxs("div",{className:pr.text,children:[K.jsx("p",{className:pr.eyebrow,children:"ABOUT"}),K.jsx("h1",{className:pr.heading,children:Df.heading}),K.jsx("p",{className:pr.subheading,children:Df.subheading}),K.jsx("p",{className:pr.bio,children:Df.bio})]}),K.jsx("div",{className:pr.imageWrap,children:K.jsx("img",{src:Wo.about,alt:"Ecem Dilan Köse"})})]})})}const GL="_page_31ju7_1",WL="_inner_31ju7_13",XL="_eyebrow_31ju7_19",jL="_heading_31ju7_28",YL="_links_31ju7_38",$L="_label_31ju7_60",qL="_foot_31ju7_80",ki={page:GL,inner:WL,eyebrow:XL,heading:jL,links:YL,label:$L,foot:qL};function KL(){const n=fa.email.startsWith("[")?"#":`mailto:${fa.email}`;return K.jsx("main",{className:ki.page,children:K.jsxs("div",{className:ki.inner,children:[K.jsx("p",{className:ki.eyebrow,children:"CONTACT"}),K.jsxs("h1",{className:ki.heading,children:["LET’S",K.jsx("br",{}),"CONNECT"]}),K.jsxs("ul",{className:ki.links,children:[K.jsxs("li",{children:[K.jsx("span",{className:ki.label,children:"Email"}),K.jsx("a",{href:n,children:fa.email})]}),K.jsxs("li",{children:[K.jsx("span",{className:ki.label,children:"Instagram"}),K.jsx("a",{href:fa.instagram,target:"_blank",rel:"noreferrer",children:"@ecemdilankose"})]}),K.jsxs("li",{children:[K.jsx("span",{className:ki.label,children:"Website"}),K.jsx("a",{href:fa.website,target:"_blank",rel:"noreferrer",children:"ecemdilankose.com"})]})]}),K.jsxs("p",{className:ki.foot,children:["© ",new Date().getFullYear()," Ecem Dilan Köse"]})]})})}function ZL(){return K.jsxs(K.Fragment,{children:[K.jsx(ww,{}),K.jsx(zw,{}),K.jsx(Gw,{}),K.jsxs(j1,{children:[K.jsx(ls,{path:"/",element:K.jsx(Sv,{})}),K.jsx(ls,{path:"/works",element:K.jsx(yL,{})}),K.jsx(ls,{path:"/works/:slug",element:K.jsx(NL,{})}),K.jsx(ls,{path:"/about",element:K.jsx(HL,{})}),K.jsx(ls,{path:"/contact",element:K.jsx(KL,{})}),K.jsx(ls,{path:"*",element:K.jsx(Sv,{})})]})]})}cd.createRoot(document.getElementById("root")).render(K.jsx(J1,{children:K.jsx(ZL,{})}));
