/*! For license information please see xrviewer.js.LICENSE.txt */
(()=>{"use strict";var e,t={453:(e,t,n)=>{var r,o,a,i,c,s,l,u=n(7294),f=n(745),d=n(9477),h=n(1988),p=n(5953),g=n(9652),m=n(2788);function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y=(0,m.vJ)(r||(r=v(["\n    body {\n        font-family: sans-serif;\n        font-size: 10px;\n        text-align: center;\n        /* margin: 20px; */\n        margin:0px !important;\n        color: #ccc;\n        background-color: #121212;\n        overflow: hidden;\n        height: 100vh;\n    }\n    .xr-button{\n        border-radius: 8px;\n        opacity: 1;\n        user-select: auto;\n        padding: 8px 12px 8px 12px;\n        font-family: sans-serif;\n        border-radius: 100px;\n        line-height: 10px;\n        font-size: 10px;\n\n        box-shadow: 0 3px 4px -1px rgb(0 0 0 / 48%);\n        color: rgba(255,255,255,0.9);\n        background: rgba(29,53,59,0.7);\n        backdrop-filter: blur(14px);\n        border-bottom: 1px solid rgba(255,255,255,0.08);\n        margin:15px 5px;\n        z-index: 11;\n        cursor: pointer;\n    }\n\n    .xr-button:hover{\n        background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);\n        border-bottom: 1px solid rgba(255,255,255,0.24);\n    }\n"]))),b=m.ZP.div(o||(o=v(["\n    display: flex;\n    flex-direction: row-reverse;\n"]))),x=m.ZP.div(a||(a=v(["\n    width: 100%;\n    gap: 1rem;\n    overflow-x: auto;\n    scroll-snap-type: x;\n    z-index: 100;\n    bottom: 0px;\n    max-height: 140px;\n    height: 140px;\n    display: flex;\n    flex: 1;\n    position: absolute;\n"]))),w=m.ZP.img(i||(i=v(["\n    scroll-snap-align: start;\n    flex: 0 0 100px;\n    width: 100px;\n    height: 100px;\n    border-radius: 5px;\n    object-fit: contain;\n    background: #ffffff40;\n    padding: 12px;\n"]))),j=m.ZP.div(c||(c=v(["\n    position: absolute;\n    left: 50%;\n    top: 0px;\n    transform: translate(-50%, 0);\n    margin: 0 auto;\n    z-index: 10;\n    display:flex;\n"]))),S=m.ZP.div(s||(s=v(["\n    border-radius: 8px;\n    opacity: 1;\n    user-select: auto;\n    padding: 8px 12px 8px 12px;\n    font-family: 'Inter', sans-serif;\n    border-radius: 100px;\n    line-height: 10px;\n    font-size: 10px;\n\n    box-shadow: 0 3px 4px -1px rgb(0 0 0 / 48%);\n    color: rgba(255,255,255,0.9);\n    background: rgba(29,53,59,0.7);\n    backdrop-filter: blur(14px);\n    border-bottom: 1px solid rgba(255,255,255,0.08);\n    margin:15px 5px;\n    z-index: 11;\n    cursor: pointer;\n\n    &:hover {\n        background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);\n        border-bottom: 1px solid rgba(255,255,255,0.24);\n    }\n"]))),R=m.ZP.div(l||(l=v(["\n    flex: 1;\n    height:100vh;\n"]))),O=n(3577),P=n(6037),k=n(5893);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const L=function(e){var t,n,r=e.cameraSheetObj,o=(0,u.useRef)(null),a=(t=(0,u.useState)(!0),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1];return(0,h.A)((function(){r.value.control?c(!0):c(!1)})),(0,k.jsx)(k.Fragment,{children:i?(0,k.jsx)(P.z,{ref:o}):(0,k.jsx)(k.Fragment,{})})};var A=n(1767),D=n(5062),T=n(7395);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=(0,T.Ah)(A.c,"perspectiveCamera");const U=function(e){var t,n,r=e.cameraRef,o=e.containerRef,a=e.cameraSheetObj,i=e.baseUnit,c=(t=(0,u.useState)(1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],l=c[1],f=(0,u.useRef)(null);(0,D.H)(r,d.CameraHelper);var p=(0,h.z)(),g=p.invalidate;return p.scene,(0,u.useEffect)((function(){var e=o.current.clientWidth,t=o.current.clientHeight;console.log("aspect: "+e/t),l(e/t),a.current.onValuesChange((function(e){e.control?g():f.current&&(f.current.position.x=e.position.x,f.current.position.y=e.position.y,f.current.position.z=e.position.z,f.current.rotation.x=e.rotation.x,f.current.rotation.y=e.rotation.y,f.current.rotation.z=e.rotation.z,f.current.scale.x=e.scale.x,f.current.scale.y=e.scale.y,f.current.scale.z=e.scale.z,f.current.near=e.near,f.current.far=e.far,f.current.fov=e.fov,f.current.zoom=e.zoom,f.current.matrixWorldNeedsUpdate=!0,f.current.updateProjectionMatrix(),f.current.updateMatrixWorld(),g())}))}),[]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(A.c,{ref:f,makeDefault:!0,fov:60,aspect:s,near:.01,zoom:1,far:1e4,position:[0,0,i]}),(0,k.jsx)(F,{theatreKey:"camera",objRef:a,ref:r,additionalProps:{control:!0},fov:60,aspect:s,near:.01,zoom:1,far:1e4,position:[0,0,i]})]})};var z=n(2162),M=n(5166),C=n(5733),B=n.n(C),I=n(3162);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function V(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){V(a,r,o,i,c,"next",e)}function c(e){V(a,r,o,i,c,"throw",e)}i(void 0)}))}}function G(){G=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function f(){}function d(){}function h(){}var p={};c(p,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(R([])));m&&m!==t&&n.call(m,o)&&(p=m);var v=h.prototype=f.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function r(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==H(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function R(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=h,c(v,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new b(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),c(v,i,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:R(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}function Z(e,t,n){return e.find((function(e){return e.type===n}))||null}function q(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))}function X(e){return new Promise((function(t){var n=new Image;n.onload=function(){return t(n)},n.src=e}))}function Q(e){for(var t=e.split(",")[1],n=atob(t),r=new ArrayBuffer(n.length),o=new Uint8Array(r),a=0;a<n.length;a++)o[a]=n.charCodeAt(a);return o}function K(e,t){return W.apply(this,arguments)}function W(){return(W=N(G().mark((function e(t,n){return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(t).then((function(e){return e.blob()})).then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){n(t.result)}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t,n,r,o){return $.apply(this,arguments)}function $(){return $=N(G().mark((function e(t,n,r,o,a){var i,c,s,l,u,f,d,h;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=0,c="https://api.figma.com/v1/files/"+"".concat(n,"/nodes?ids=").concat(r),e.next=5,fetch(c,{headers:{Authorization:"Bearer ".concat(t)},method:"GET"});case 5:return s=e.sent,e.next=8,s.json();case 8:return l=e.sent,u=Object.values(l.nodes)[0].document,f=u.children.length,d=new Array(f+1),h=function(){var e=N(G().mark((function e(a){var c,s;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(fetch("https://api.figma.com/v1/"+"images/".concat(n,"?")+"ids=".concat(r,"&")+"svg_include_id=true&format=png&"+"scale=".concat(1),{headers:{Authorization:"Bearer ".concat(t)},method:"GET"}).then((function(e){return e.json()})).then((function(e){return Object.values(e.images)[0]})).then((function(e){K(e,(function(e){d.splice(0,1,{name:u.name,width:u.absoluteRenderBounds.width,height:u.absoluteRenderBounds.height,x:u.absoluteRenderBounds.x-u.absoluteRenderBounds.x,y:u.absoluteRenderBounds.y-u.absoluteRenderBounds.y,src:e,type:"image-framenode",index:0,id:u.id,fw:u.absoluteRenderBounds.width,fh:u.absoluteRenderBounds.height}),console.log("fetched num "+i),console.log("fetched index 0"),i++,o("".concat(i,"/").concat(f+1)),a(i)}))})),c=function(){var e=s,r=u.children[e];fetch("https://api.figma.com/v1/"+"images/".concat(n,"?")+"ids=".concat(r.id,"&")+"svg_include_id=true&format=png&"+"scale=".concat(1),{headers:{Authorization:"Bearer ".concat(t)},method:"GET"}).then((function(e){return e.json()})).then((function(e){return Object.values(e.images)[0]})).then((function(t){var n=e+1;K(t,(function(t){d.splice(n,1,{name:r.name,width:r.absoluteRenderBounds.width,height:r.absoluteRenderBounds.height,x:r.absoluteRenderBounds.x-u.absoluteRenderBounds.x,y:r.absoluteRenderBounds.y-u.absoluteRenderBounds.y,src:t,type:"image-childnode",index:e+1,id:r.id,fw:u.absoluteRenderBounds.width,fh:u.absoluteRenderBounds.height}),console.log("fetched num "+i),console.log("fetched index "+(e+1)),i++,o("".concat(i,"/").concat(f+1)),a(i)}))}))},s=0;s<f;s++)c();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=15,h((function(e){e===f+1&&a(d)}));case 15:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}const J=function(e){var t=e.cameraRef,n=e.cameraSheetObj,r=e.children,o=(0,h.z)(),a=o.invalidate,i=(o.scene,o.gl,o.camera,function(){var e=(0,g.nH)(),r=e.player,o=e.isPresenting;return e.session,(0,u.useEffect)((function(){var e=t.current.parent.children;if(o){r.visible=!1,Z(e,0,"CameraHelper").visible=!1;var i=Math.sqrt(3),c=n.current.value.position.x,s=n.current.value.position.y,l=n.current.value.position.z,u=n.current.value.rotation.x,f=n.current.value.rotation.y,d=n.current.value.rotation.z,h=n.current.value.fov,p=n.current.value.zoom;r.position.x=c,r.position.y=s-1.6,r.position.z=l*Math.tan(h/(2*p)*Math.PI/180)*i,r.rotation.x=u,r.rotation.y=f,r.rotation.z=d,r.children[0].position.y=0,console.log(r),setTimeout((function(){r.visible=!0,a()}),1)}}),[o]),null});return(0,k.jsxs)(g.XR,{children:[(0,k.jsx)(z.z,{}),(0,k.jsx)(M.D,{}),r,(0,k.jsx)(i,{})]})};var ee=n(6381),te=n(1217);function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe=function(e){var t=(0,u.useRef)(null),n=(0,u.useRef)(null),r=(0,u.useRef)(null),o=ne((0,u.useState)(1),2),a=(o[0],o[1],ne((0,u.useState)(1),2)),i=a[0],c=a[1],s=ne((0,u.useState)(!1),2),l=s[0],f=s[1],p=((0,u.useRef)(null),(0,h.D)(te.E,"".concat(e.name),(function(e){console.log("finsihed model loading")})));return(0,u.useEffect)((function(){if(e.hasData&&0!=e.index){var t=(new d.Box3).setFromObject(n.current),r=t.max.x-t.min.x;c(1/r*e.baseUnit),n.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.userData.hasOwnProperty("originalColor")||(e.material.userData.originalColor=e.material.color))})),f(!0),console.log("finsihed data setting")}}),[e.src,e.hasData]),(0,k.jsx)(T.Ah.group,{theatreKey:e.name.split("/")[e.name.split("/").length-1]+"_#".concat(e.index),name:e.name.split("/")[e.name.split("/").length-1]+"_#".concat(e.index),onPointerOver:(0,u.useCallback)((function(e){n.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.color={isColor:!0,r:1,g:.1412632911304446,b:.45641102317066595})}))}),[]),onPointerOut:(0,u.useCallback)((function(e){n.current.traverse((function(e){e.hasOwnProperty("material")&&(e.material.color=e.material.userData.originalColor)}))}),[]),ref:t,objRef:r,visible:l,scale:l?[i*(e.width/e.fw),i*(e.width/e.fw),i*(e.width/e.fw)]:[1,1,1],position:[(e.x+e.width/2-e.fw/2)/e.fw*e.baseUnit,(e.fh/2-(e.y+e.height/2))/e.fh*(e.fh/e.fw)*e.baseUnit,5e-4*e.index*e.baseUnit],children:(0,k.jsx)("primitive",{ref:n,object:p.scene})})},ae=function(e){var t=ne((0,u.useState)(!1),2),n=t[0],r=t[1],o=(0,u.useRef)(null),a=(0,u.useRef)(null),i=(0,u.useRef)(null),c=(0,u.useRef)(null),s=ne((0,u.useState)(1),2),l=s[0],f=s[1],p=ne((0,u.useState)(null),2),g=p[0],m=p[1],v=ne((0,u.useState)(!1),2),y=v[0],b=v[1],x=(0,u.useCallback)((function(e){e.needsUpdate=!0,f(e.image.height/e.image.width),e.encoding=d.sRGBEncoding,m(e),b(!0),e.dispose(),(0,h.l)()}),[]);return(0,u.useEffect)((function(){!0===e.isQuery?e.hasData&&0!=e.index&&(new d.TextureLoader).load(e.src,(function(e){x(e)})):e.hasData?(new d.TextureLoader).load(e.src,(function(e){x(e)})):new Promise((function(e,t){e(function(e,t,n,r,o,a,i){var c=document.createElement("canvas");c.width=n,c.height=r;var s=c.getContext("2d"),l=new e.Texture(c);l.magFilter=e.LinearFilter,l.minFilter=e.LinearMipMapLinearFilter;s.lineWidth=4,s.strokeStyle="white",s.beginPath();for(var u=0;u<=n;u+=213.33333333333334)0===u?(s.moveTo(2,0),s.lineTo(2,r)):(s.moveTo(u-2,0),s.lineTo(u-2,r));for(var f=0;f<=r;f+=120)0===f?(s.moveTo(0,2),s.lineTo(n,2)):(s.moveTo(0,f-2),s.lineTo(n,f-2));return s.stroke(),l.generateMipmaps=!0,l.needsUpdate=!0,l}(d,0,1920,1080).image.toDataURL("image/png"))})).then((function(e){var t=new d.Texture,n=new Image;n.src=e;var r=n;t.image=r,r.onload=function(){x(t)}}))}),[e.src,e.hasData]),(0,u.useEffect)((function(){c.current.onValuesChange((function(e){!function(e,t,n){0==n&&(n=1e-5);for(var r=.5*t.parameters.width,o=new e.Vector2(-r,0),a=new e.Vector2(0,n),i=new e.Vector2(r,0),c=(new e.Vector2).subVectors(o,a),s=(new e.Vector2).subVectors(a,i),l=(new e.Vector2).subVectors(o,i),u=c.length()*s.length()*l.length()/(2*Math.abs(c.cross(l))),f=new e.Vector2(0,n-u),d=2*((new e.Vector2).subVectors(o,f).angle()-.5*Math.PI),h=t.attributes.uv,p=t.attributes.position,g=new e.Vector2,m=0;m<h.count;m++){var v=1-h.getX(m),y=p.getY(m);g.copy(i).rotateAround(f,d*v),p.setXYZ(m,g.x,y,-g.y)}p.needsUpdate=!0}(d,a.current,e.curve)}))}),[i]),(0,k.jsxs)(T.Ah.mesh,{theatreKey:e.name,name:e.name,onPointerOver:(0,u.useCallback)((function(e){return r(!0)}),[]),onPointerOut:(0,u.useCallback)((function(e){return r(!1)}),[]),ref:i,objRef:c,additionalProps:{curve:ee.types.number(0,{nudgeMultiplier:.01,range:[0,e.baseUnit]})},visible:y,scale:e.hasData?[e.width/e.fw*1,l*(e.width/e.fw),1]:[1,l,1],position:e.hasData?[(e.x+e.width/2-e.fw/2)/e.fw*e.baseUnit,(e.fh/2-(e.y+e.height/2))/e.fh*(e.fh/e.fw)*e.baseUnit,5e-4*e.index*e.baseUnit]:[0,0,0],children:[(0,k.jsx)("planeGeometry",{ref:a,args:[e.baseUnit,e.baseUnit,40,40]}),(0,k.jsx)("meshBasicMaterial",{ref:o,side:d.DoubleSide,alphaTest:1e-4,transparent:!0,map:g,toneMapped:!1,color:n?0===e.index?"":"hotpink":"white"})]})};const ie=function(e){var t=e.figmaData,n=e.isQuery,r=e.baseUnit;return(0,k.jsx)(k.Fragment,{children:0!=t.length?(0,k.jsx)(k.Fragment,{children:t.map((function(e){var o=e.type,a=e.index,i=e.name,c=e.x,s=e.y,l=e.width,u=e.height,f=e.src;return i.includes("gltf")?(0,k.jsx)(oe,{src:f,name:i,x:0===a?0:c,y:0===a?0:s,index:a,width:l,height:u,fw:t[0].width,fh:t[0].height,hasData:!0,isQuery:n,baseUnit:r},o+"-three-"+a):(0,k.jsx)(ae,{src:f,name:i.replace(/\//g,"_").replace(/\ /g,"_").substring(0,24)+"_#".concat(a),x:0===a?0:c,y:0===a?0:s,index:a,width:l,height:u,fw:t[0].width,fh:t[0].height,hasData:!0,isQuery:n,baseUnit:r},o+"-three-"+a)}))}):(0,k.jsx)(k.Fragment,{children:!0===n?(0,k.jsx)(k.Fragment,{}):(0,k.jsx)(ae,{name:"Screen",hasData:!1,baseUnit:r})})})};var ce=n(5676),se=n(6706);function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ue(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de=100,he=(0,ee.getProject)("XRViewer").sheet("Node Tree","Helper"),pe=(0,ee.getProject)("XRViewer").sheet("Node Tree","Asset"),ge=he.object("helper",{cameraHelper:ee.types.boolean(!1),polarHelper:ee.types.boolean(!0),dotHelper:ee.types.boolean(!1),quality:ee.types.stringLiteral(2,{1:"x1",2:"x2",3:"x3"})}),me=(0,u.forwardRef)((function(e,t){var n,r=e.containerRef,o=e.figmaData,a=e.isQuery,i=e.isFigma,c=e.loadingProgress,s=(0,u.useRef)(null),l=(0,u.useRef)(null),f=(0,u.useRef)(ge),p=(0,h.z)(),g=p.invalidate,m=p.scene,v=p.gl,y=p.camera;(0,u.useImperativeHandle)(t,(function(){return{saveImage:function(){m.background=null;var e=function(e,t,n,r,o,a){return q(void 0,void 0,void 0,G().mark((function i(){var c,s,l,u,f;return G().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,u=1*(s=e),f=1*(l=t),2===n&&(u=1*s,f=1*l),3===n&&(u=2*s,f=2*l),1===n&&(u=.5*s,f=.5*l),a.aspect=u/f,a.updateProjectionMatrix(),o.setSize(u,f),o.render(r,a,null,!1),c=o.domElement.toDataURL("image/png"),a.aspect=s/l,a.updateProjectionMatrix(),o.setSize(s,l),i.abrupt("return",c);case 20:return i.prev=20,i.t0=i.catch(0),console.log(i.t0),i.abrupt("return");case 24:case"end":return i.stop()}}),i,null,[[0,20]])})))}(r.current.clientWidth,r.current.clientHeight,Number(ge.value.quality),m,v,y);return m.background=new d.Color("#272730"),e}}}));var b=(0,u.useCallback)((function(){var e=0!=o.length?o[0].height/o[0].width:.5625;console.log("the screen aspect ratio is : "+e),function(e,t,n,r,o,a){var i=Z(t.children,0,"CameraHelper"),c=new e.PolarGridHelper(4*o,8,4,64,16777215,16777215);c.position.y=-r/2*o,c.position.z=o,c.visible=n.current.value.polarHelper,t.add(c);var s=new e.PlaneGeometry(8*o,8*o,Math.min(250,Math.max(40,8*o*5)),Math.min(250,Math.max(40,8*o*5)));s.rotateX(Math.PI/2);var l=new e.PointsMaterial({transparent:!1,fog:!1});l.map=function(e,t,n){var r=document.createElement("canvas");r.width=r.height=n;var o=r.getContext("2d"),a=new e.Texture(r);a.magFilter=e.LinearFilter,a.minFilter=e.LinearMipMapLinearFilter;var i=n/2;return o.beginPath(),o.arc(i,i,n/2,0,2*Math.PI,!1),o.closePath(),o.fillStyle="#ffffff",o.fill(),a.generateMipmaps=!0,a.needsUpdate=!0,a}(e,0,8*o),l.size=.00825;var u=new e.Points(s,l);u.position.y=-r/2*o,u.position.z=o,u.visible=n.current.value.dotHelper,t.add(u),a(i,c,u)}(d,m,f,e,de,(function(e,t,n){f.current.onValuesChange((function(r){e.visible=r.cameraHelper,t.visible=r.polarHelper,n.visible=r.dotHelper,g()}))})),function(e,t){var n=document.getElementById("theatrejs-studio-root").shadowRoot.children[1].children[0].children[1].children[0].children[1],r=e.children,o=Z(r,0,"CameraHelper");n.addEventListener("click",(function(a){return r.includes(o)?(a.stopPropagation(),new Promise((function(e,n){console.log("remove step 1 - remove helper first"),o.removeFromParent(),t(),setTimeout((function(){return e(1)}),1)})).then((function(e){console.log("remove step 2 - click btn second"),n.children[1].click()}))):(console.log("remove step 3 - snapshot opened"),setTimeout((function(){var n=document.getElementById("theatrejs-studio-root").shadowRoot.children[1].children[0].children[2].children[8].children[0].children[0];n.addEventListener("click",(function a(){return r.includes(o)||new Promise((function(e,t){console.log("add step 1 - close window first"),setTimeout((function(){return e(1)}),1)})).then((function(n){console.log("add step 2 - add camHelper"),e.add(o),t()})),n.removeEventListener("click",a),!0}))}),1)),!0}))}(m,g)}),[]);return(0,u.useEffect)((function(){if(!0===a){var e=2===c.split("/").length,t=c.split("/")[0]===c.split("/")[1];e&&t&&b()}else b()}),[a,c]),(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(se.H,(n={preset:"soft"},fe(n,"preset","rembrandt"),fe(n,"intensity",1),fe(n,"environment","sunset"),fe(n,"children",(0,k.jsxs)(T.yR,{sheet:pe,children:[(0,k.jsx)(U,{containerRef:r,cameraRef:s,cameraSheetObj:l,baseUnit:de}),(0,k.jsx)(L,{cameraSheetObj:l.current}),!1===i?(0,k.jsx)(J,{cameraRef:s,cameraSheetObj:l,children:(0,k.jsx)(T.yR,{sheet:pe,children:(0,k.jsx)(ie,{figmaData:o,isQuery:a,baseUnit:de})})}):(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(T.yR,{sheet:pe,children:(0,k.jsx)(ie,{figmaData:o,isQuery:a,baseUnit:de})})})]})),n))})}));const ve=function(){var e=(0,u.useRef)(null),t=(0,u.useRef)(null),n=(0,u.useRef)(null),r=le((0,u.useState)([]),2),o=r[0],a=r[1],i=le((0,u.useState)(!1),2),c=i[0],s=i[1],l=le((0,u.useState)(!1),2),f=l[0],h=l[1],m=le((0,u.useState)(!1),2),v=m[0],P=m[1],E=le((0,u.useState)("0"),2),L=E[0],A=E[1],D=(0,u.useCallback)((function(e){var t,n,r,o;t=e.event,n=e.image,r=e.message,o=e.name,q(void 0,void 0,void 0,G().mark((function e(){var a,i,c,s,l;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n;case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,X(a);case 8:return i=e.sent,c=i.width,s=i.height,l=Q(a),e.abrupt("return",parent.postMessage({pluginMessage:{type:r,name:o,width:c,height:s,blob:l}},"*"));case 13:case"end":return e.stop()}}),e)})))}),[o]),T=(0,u.useCallback)((function(e){e.event,function(e,t,n,r){var o=document.documentElement.innerHTML,a=new Array(n.length);console.log(n),new Promise((function(e,r){if(!0===t)for(var i=0;i<a.length;i++){var c=i;if(a.splice(c,1,{name:n[c].name,width:n[c].width,height:n[c].height,x:n[c].x,y:n[c].y,src:"./pngs/"+n[c].name.replace(/\//g,"_").replace(/\ /g,"_").substring(0,24)+"_%23".concat(c)+".png",type:n[c].type,index:n[c].index,id:n[c].id,imageData:null}),c===a.length-1){console.log(a);var s=o.replace(/savedFigData = \'\'/g,"savedFigData = ".concat(JSON.stringify(a))).replaceAll('<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>',"");e({data:s,isServe:!0})}}else{var l=function(){var t=i,r=new FileReader;r.readAsDataURL(new Blob([n[t].imageData],{type:"image/png"})),r.onloadend=function(){if(a.splice(t,1,{name:n[t].name,width:n[t].width,height:n[t].height,x:n[t].x,y:n[t].y,src:r.result,type:n[t].type,index:n[t].index,id:n[t].id,imageData:null}),t===a.length-1){console.log(a);var i=o.replace(/savedFigData = \'\'/g,"savedFigData = ".concat(JSON.stringify(a))).replaceAll('<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>',"");e({data:i,isServe:!1})}}};for(i=0;i<a.length;i++)l()}})).then((function(e){if(!0===e.isServe){var t=[],n=new Blob([e.data],{type:"text/html"}),o=window.URL.createObjectURL(n);t.push({url:o,name:"index",ext:"html"});for(var i=0;i<a.length;i++)t.push({url:r.children[a.length-1-i].src,name:a[i].name.replace(/\//g,"_").replace(/\ /g,"_").substring(0,24)+"_#".concat(i),ext:"png"});!function(e,t){if(t){var n=new(B()),r=n.folder("pngs");t.forEach((function(e){var t=fetch(e.url).then((function(e){return 200===e.status?e.blob():Promise.reject(new Error(e.statusText))})),o=e.name+"."+e.ext;"html"===e.ext&&n.file(o,t),"png"===e.ext&&r.file(o,t)})),n.generateAsync({type:"blob"}).then((function(e){return(0,I.saveAs)(e,"my_project")}))}}(0,t)}else n=new Blob([e.data],{type:"text/html"}),o=window.URL.createObjectURL(n),(i=document.createElement("a")).href=o,i.download="index_static.html",i.style="display: none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}))}(0,e.isServe,e.data,e.imageLayout)}),[]),_=(0,u.useCallback)((function(){console.log("successed - init with empty data")}),[]),F=(0,u.useCallback)((function(e){console.log("init with saved data"),s(!1),h(!1),a(e),P(!1)}),[]),U=(0,u.useCallback)((function(e,t){if("selection"===e){if(!t)return console.log("failed - no figma selection"),function(){};console.log("successed - init with figma data"),h(!1),P(!0);for(var n=0;n<t.data.length;n++){var r=n;t.data[r].src=URL.createObjectURL(new Blob([t.data[r].imageData],{type:"image/png"})),n===t.data.length-1&&(s(t.isFigma),a(t.data),P(!1))}}if("failed"===e&&!t)return console.log("failed - get data failed"),function(){}}),[]),z=(0,u.useCallback)((function(e,t,n){console.log("successed - init with query data"),s(!1),h(!0),P(!0),"auth_everytime"===e?(console.log("query - need OAuth"),new ce.p({clientId:"2beFW69qeg7DvjBp6bKpm5",clientSecrete:"013RerD24yjKxvSIrUr4f6dESMYST8",redirectUri:"".concat("https://www.martinrgb.com/FigmaImporter/v4/","callback.html")}).getOAuth2Token().then((function(e){Y(e,t,n,(function(e){A(e)}),(function(e){a(e),P(!1)}))}))):(console.log("query - already exist OAuth"),Y(e,t,n,(function(e){A(e)}),(function(e){a(e),P(!1)})))}),[]);return u.useEffect((function(){var e=new URL(window.location.href),t=e.searchParams.get("query_key"),n=e.searchParams.get("query_node"),r=e.searchParams.get("query_token");console.log("fileKey is: "+t),console.log("nodeId is: "+n),console.log("token is: "+r),""!=savedFigData?F(savedFigData):null!=t&&null!=n?z(r,t,n):_(),window.onmessage=function(e){if(null!=e.data.pluginMessage){var t=e.data.pluginMessage,n=t.type,r=t.value;U(n,r)}}}),[]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(y,{}),(0,k.jsxs)(b,{children:[(0,k.jsx)(x,{ref:n,children:o.reverse().map((function(e){var t=e.src,n=e.type,r=e.index,o=e.name;return(0,k.jsx)(w,{src:t,className:"img-imported",id:n+"-"+r,name:o.replace(/\//g,"_").replace(/\ /g,"_").substring(0,24)+"_#".concat(r)},n+"-"+r)}))}),(0,k.jsx)(j,{children:c?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(S,{onClick:function(e){D({event:e,image:t.current.saveImage(),message:"save-canvas-image",name:o[0].name})},children:"SaveToFigma"}),(0,k.jsx)(S,{onClick:function(e){T({event:e,isServe:!0,data:o,imageLayout:n.current})},children:"Download(Serve)"}),(0,k.jsx)(S,{onClick:function(e){T({event:e,isServe:!1,data:o,imageLayout:n.current})},children:"Download(Static)"})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g.vZ,{className:"xr-button",mode:"AR"}),(0,k.jsx)(g.vZ,{className:"xr-button",mode:"VR"})]})}),(0,k.jsx)(R,{ref:e,children:v?(0,k.jsx)(O.Z,{loadingProgress:"".concat(L),hintText:" of total nodes is loaded"}):(0,k.jsx)(u.Suspense,{fallback:(0,k.jsx)(O.Z,{hintText:"init the renderer"}),children:(0,k.jsx)(p.Xz,{frameloop:"demand",gl:{preserveDrawingBuffer:!0,outputEncoding:d.sRGBEncoding,antialias:!0,alpha:!0,logarithmicDepthBuffer:!0},children:(0,k.jsx)(me,{ref:t,containerRef:e,isFigma:c,isQuery:f,loadingProgress:L,figmaData:o.reverse()})})})})]})]})};var ye=n(2654),be=n.n(ye),xe=n(659);be().initialize({usePersistentStorage:!1}),be().extend(xe.Z);var we=document.getElementById("react-page");(0,f.s)(we).render((0,k.jsx)(ve,{}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],c=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={924:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var u=s(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkXRViewer=self.webpackChunkXRViewer||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[348,635,701,642],(()=>r(453)));o=r.O(o)})();