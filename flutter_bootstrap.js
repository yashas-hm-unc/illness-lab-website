(()=>{var L=()=>navigator.vendor==="Google Inc."||navigator.agent==="Edg/",E=()=>typeof ImageDecoder>"u"?!1:L(),P=()=>typeof Intl.v8BreakIterator<"u"&&typeof Intl.Segmenter<"u",W=()=>{let a=[0,97,115,109,1,0,0,0,1,5,1,95,1,120,0];return WebAssembly.validate(new Uint8Array(a))},w={hasImageCodecs:E(),hasChromiumBreakIterators:P(),supportsWasmGC:W(),crossOriginIsolated:window.crossOriginIsolated};function d(...a){return new URL(_(...a),document.baseURI).toString()}function _(...a){return a.filter(t=>!!t).map((t,i)=>i===0?S(t):j(S(t))).filter(t=>t.length).join("/")}function j(a){let t=0;for(;t<a.length&&a.charAt(t)==="/";)t++;return a.substring(t)}function S(a){let t=a.length;for(;t>0&&a.charAt(t-1)==="/";)t--;return a.substring(0,t)}function T(a,t){return a.canvasKitBaseUrl?a.canvasKitBaseUrl:t.engineRevision&&!t.useLocalCanvasKit?_("https://www.gstatic.com/flutter-canvaskit",t.engineRevision):"canvaskit"}var v=class{constructor(){this._scriptLoaded=!1}setTrustedTypesPolicy(t){this._ttPolicy=t}async loadEntrypoint(t){let{entrypointUrl:i=d("main.dart.js"),onEntrypointLoaded:r,nonce:e}=t||{};return this._loadJSEntrypoint(i,r,e)}async load(t,i,r,e,n){n??=o=>{o.initializeEngine(r).then(l=>l.runApp())};let{entryPointBaseUrl:s}=r;if(t.compileTarget==="dart2wasm")return this._loadWasmEntrypoint(t,i,s,n);{let o=t.mainJsPath??"main.dart.js",l=d(s,o);return this._loadJSEntrypoint(l,n,e)}}didCreateEngineInitializer(t){typeof this._didCreateEngineInitializerResolve=="function"&&(this._didCreateEngineInitializerResolve(t),this._didCreateEngineInitializerResolve=null,delete _flutter.loader.didCreateEngineInitializer),typeof this._onEntrypointLoaded=="function"&&this._onEntrypointLoaded(t)}_loadJSEntrypoint(t,i,r){let e=typeof i=="function";if(!this._scriptLoaded){this._scriptLoaded=!0;let n=this._createScriptTag(t,r);if(e)console.debug("Injecting <script> tag. Using callback."),this._onEntrypointLoaded=i,document.head.append(n);else return new Promise((s,o)=>{console.debug("Injecting <script> tag. Using Promises. Use the callback approach instead!"),this._didCreateEngineInitializerResolve=s,n.addEventListener("error",o),document.head.append(n)})}}async _loadWasmEntrypoint(t,i,r,e){if(!this._scriptLoaded){this._scriptLoaded=!0,this._onEntrypointLoaded=e;let{mainWasmPath:n,jsSupportRuntimePath:s}=t,o=d(r,n),l=d(r,s);this._ttPolicy!=null&&(l=this._ttPolicy.createScriptURL(l));let c=(await import(l)).compileStreaming(fetch(o)),f;t.renderer==="skwasm"?f=(async()=>{let m=await i.skwasm;return window._flutter_skwasmInstance=m,{skwasm:m.wasmExports,skwasmWrapper:m,ffi:{memory:m.wasmMemory}}})():f=Promise.resolve({}),await(await(await c).instantiate(await f)).invokeMain()}}_createScriptTag(t,i){let r=document.createElement("script");r.type="application/javascript",i&&(r.nonce=i);let e=t;return this._ttPolicy!=null&&(e=this._ttPolicy.createScriptURL(t)),r.src=e,r}};async function b(a,t,i){if(t<0)return a;let r,e=new Promise((n,s)=>{r=setTimeout(()=>{s(new Error(`${i} took more than ${t}ms to resolve. Moving on.`,{cause:b}))},t)});return Promise.race([a,e]).finally(()=>{clearTimeout(r)})}var y=class{setTrustedTypesPolicy(t){this._ttPolicy=t}loadServiceWorker(t){if(!t)return console.debug("Null serviceWorker configuration. Skipping."),Promise.resolve();if(!("serviceWorker"in navigator)){let o="Service Worker API unavailable.";return window.isSecureContext||(o+=`
The current context is NOT secure.`,o+=`
Read more: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts`),Promise.reject(new Error(o))}let{serviceWorkerVersion:i,serviceWorkerUrl:r=d(`flutter_service_worker.js?v=${i}`),timeoutMillis:e=4e3}=t,n=r;this._ttPolicy!=null&&(n=this._ttPolicy.createScriptURL(n));let s=navigator.serviceWorker.register(n).then(o=>this._getNewServiceWorker(o,i)).then(this._waitForServiceWorkerActivation);return b(s,e,"prepareServiceWorker")}async _getNewServiceWorker(t,i){if(!t.active&&(t.installing||t.waiting))return console.debug("Installing/Activating first service worker."),t.installing||t.waiting;if(t.active.scriptURL.endsWith(i))return console.debug("Loading from existing service worker."),t.active;{let r=await t.update();return console.debug("Updating service worker."),r.installing||r.waiting||r.active}}async _waitForServiceWorkerActivation(t){if(!t||t.state==="activated")if(t){console.debug("Service worker already active.");return}else throw new Error("Cannot activate a null service worker!");return new Promise((i,r)=>{t.addEventListener("statechange",()=>{t.state==="activated"&&(console.debug("Activated new service worker."),i())})})}};var g=class{constructor(t,i="flutter-js"){let r=t||[/\.js$/,/\.mjs$/];window.trustedTypes&&(this.policy=trustedTypes.createPolicy(i,{createScriptURL:function(e){if(e.startsWith("blob:"))return e;let n=new URL(e,window.location),s=n.pathname.split("/").pop();if(r.some(l=>l.test(s)))return n.toString();console.error("URL rejected by TrustedTypes policy",i,":",e,"(download prevented)")}}))}};var k=a=>{let t=WebAssembly.compileStreaming(fetch(a));return(i,r)=>((async()=>{let e=await t,n=await WebAssembly.instantiate(e,i);r(n,e)})(),{})};var I=(a,t,i,r)=>(window.flutterCanvasKitLoaded=(async()=>{if(window.flutterCanvasKit)return window.flutterCanvasKit;let e=i.hasChromiumBreakIterators&&i.hasImageCodecs;if(!e&&t.canvasKitVariant=="chromium")throw"Chromium CanvasKit variant specifically requested, but unsupported in this browser";let n=e&&t.canvasKitVariant!=="full",s=r;n&&(s=d(s,"chromium"));let o=d(s,"canvaskit.js");a.flutterTT.policy&&(o=a.flutterTT.policy.createScriptURL(o));let l=k(d(s,"canvaskit.wasm")),p=await import(o);return window.flutterCanvasKit=await p.default({instantiateWasm:l}),window.flutterCanvasKit})(),window.flutterCanvasKitLoaded);var U=async(a,t,i,r)=>{let e=d(r,"skwasm.js"),n=e;a.flutterTT.policy&&(n=a.flutterTT.policy.createScriptURL(n));let s=k(d(r,"skwasm.wasm"));return await(await import(n)).default({instantiateWasm:s,locateFile:(l,p)=>{let c=p+l;return c.endsWith(".worker.js")?URL.createObjectURL(new Blob([`importScripts('${c}');`],{type:"application/javascript"})):c},mainScriptUrlOrBlob:e})};var C=class{async loadEntrypoint(t){let{serviceWorker:i,...r}=t||{},e=new g,n=new y;n.setTrustedTypesPolicy(e.policy),await n.loadServiceWorker(i).catch(o=>{console.warn("Exception while loading service worker:",o)});let s=new v;return s.setTrustedTypesPolicy(e.policy),this.didCreateEngineInitializer=s.didCreateEngineInitializer.bind(s),s.loadEntrypoint(r)}async load({serviceWorkerSettings:t,onEntrypointLoaded:i,nonce:r,config:e}={}){e??={};let n=_flutter.buildConfig;if(!n)throw"FlutterLoader.load requires _flutter.buildConfig to be set";let s=u=>{switch(u){case"skwasm":return w.crossOriginIsolated&&w.hasChromiumBreakIterators&&w.hasImageCodecs&&w.supportsWasmGC;default:return!0}},o=(u,m)=>{switch(u.renderer){case"auto":return m=="canvaskit"||m=="html";default:return u.renderer==m}},l=u=>u.compileTarget==="dart2wasm"&&!w.supportsWasmGC||e.renderer&&!o(u,e.renderer)?!1:s(u.renderer),p=n.builds.find(l);if(!p)throw"FlutterLoader could not find a build compatible with configuration and environment.";let c={};c.flutterTT=new g,t&&(c.serviceWorkerLoader=new y,c.serviceWorkerLoader.setTrustedTypesPolicy(c.flutterTT.policy),await c.serviceWorkerLoader.loadServiceWorker(t).catch(u=>{console.warn("Exception while loading service worker:",u)}));let f=T(e,n);p.renderer==="canvaskit"?c.canvasKit=I(c,e,w,f):p.renderer==="skwasm"&&(c.skwasm=U(c,e,w,f));let h=new v;return h.setTrustedTypesPolicy(c.flutterTT.policy),this.didCreateEngineInitializer=h.didCreateEngineInitializer.bind(h),h.load(p,c,e,r,i)}};window._flutter||(window._flutter={});window._flutter.loader||(window._flutter.loader=new C);})();
//# sourceMappingURL=flutter.js.map

if (!window._flutter) {
  window._flutter = {};
}
_flutter.buildConfig = {"engineRevision":"82bd5b7209295a5b7ff8cae0df96e7870171e3a5","builds":[{"compileTarget":"dart2js","renderer":"auto","mainJsPath":"main.dart.js"}]};


_flutter.loader.load({
  serviceWorkerSettings: {
    serviceWorkerVersion: "3130881358"
  }
});
