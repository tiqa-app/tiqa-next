!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}},i=!0;try{e[r].call(s.exports,s,s.exports,n),i=!1}finally{i&&delete t[r]}return s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="X2Wk")}({"2KUI":function(e,t,n){"use strict";try{self["workbox:expiration:5.1.4"]&&_()}catch(r){}},"5tLK":function(e,t,n){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(r){}},Bxln:function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(r){}},X2Wk:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),s=n.n(r);function i(e,t,n,r,s,i,o){try{var a=e[i](o),c=a.value}catch(h){return void n(h)}a.done?t(c):Promise.resolve(c).then(r,s)}n("Bxln");const o=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class a extends Error{constructor(e,t){super(o(e,t)),this.name=e,this.details=t}}const c=new Set;const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},u=e=>[h.prefix,e,h.suffix].filter(e=>e&&e.length>0).join("-"),l=e=>e||u(h.precache),f=e=>e||u(h.runtime);const d=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),p=(e,t)=>e.filter(e=>t in e),g=async({request:e,mode:t,plugins:n=[]})=>{const r=p(n,"cacheKeyWillBeUsed");let s=e;for(const i of r)s=await i.cacheKeyWillBeUsed.call(i,{mode:t,request:s}),"string"===typeof s&&(s=new Request(s));return s},m=async({cacheName:e,request:t,event:n,matchOptions:r,plugins:s=[]})=>{const i=await self.caches.open(e),o=await g({plugins:s,request:t,mode:"read"});let a=await i.match(o,r);for(const c of s)if("cachedResponseWillBeUsed"in c){const t=c.cachedResponseWillBeUsed;a=await t.call(c,{cacheName:e,event:n,matchOptions:r,cachedResponse:a,request:o})}return a},w=async({cacheName:e,request:t,response:n,event:r,plugins:s=[],matchOptions:i})=>{const o=await g({plugins:s,request:t,mode:"write"});if(!n)throw new a("cache-put-with-no-response",{url:d(o.url)});const h=await(async({request:e,response:t,event:n,plugins:r=[]})=>{let s=t,i=!1;for(const o of r)if("cacheWillUpdate"in o){i=!0;const t=o.cacheWillUpdate;if(s=await t.call(o,{request:e,response:s,event:n}),!s)break}return i||(s=s&&200===s.status?s:void 0),s||null})({event:r,plugins:s,response:n,request:o});if(!h)return void 0;const u=await self.caches.open(e),l=p(s,"cacheDidUpdate"),f=l.length>0?await m({cacheName:e,matchOptions:i,request:o}):null;try{await u.put(o,h)}catch(w){throw"QuotaExceededError"===w.name&&await async function(){for(const e of c)await e()}(),w}for(const a of l)await a.cacheDidUpdate.call(a,{cacheName:e,event:r,oldResponse:f,newResponse:h,request:o})},y=m;let _;function v(e){e.then(()=>{})}class x{constructor(e,t,{onupgradeneeded:n,onversionchange:r}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=n,this._onversionchange=r||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let n=!1;setTimeout(()=>{n=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const r=indexedDB.open(this._name,this._version);r.onerror=()=>t(r.error),r.onupgradeneeded=e=>{n?(r.transaction.abort(),r.result.close()):"function"===typeof this._onupgradeneeded&&this._onupgradeneeded(e)},r.onsuccess=()=>{const t=r.result;n?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,n){return await this.getAllMatching(e,{query:t,count:n})}async getAllKeys(e,t,n){return(await this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:n=null,direction:r="next",count:s,includeKeys:i=!1}={}){return await this.transaction([e],"readonly",(o,a)=>{const c=o.objectStore(e),h=t?c.index(t):c,u=[],l=h.openCursor(n,r);l.onsuccess=()=>{const e=l.result;e?(u.push(i?e:e.value),s&&u.length>=s?a(u):e.continue()):a(u)}})}async transaction(e,t,n){return await this.open(),await new Promise((r,s)=>{const i=this._db.transaction(e,t);i.onabort=()=>s(i.error),i.oncomplete=()=>r(),n(i,e=>r(e))})}async _call(e,t,n,...r){return await this.transaction([t],n,(n,s)=>{const i=n.objectStore(t),o=i[e].apply(i,r);o.onsuccess=()=>s(o.result)})}close(){this._db&&(this._db.close(),this._db=null)}}x.prototype.OPEN_TIMEOUT=2e3;const b={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[z,Z]of Object.entries(b))for(const e of Z)e in IDBObjectStore.prototype&&(x.prototype[e]=async function(t,...n){return await this._call(e,t,z,...n)});const R=async({request:e,fetchOptions:t,event:n,plugins:r=[]})=>{if("string"===typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const s=p(r,"fetchDidFail"),i=s.length>0?e.clone():null;try{for(const t of r)if("requestWillFetch"in t){const r=t.requestWillFetch,s=e.clone();e=await r.call(t,{request:s,event:n})}}catch(c){throw new a("plugin-error-request-will-fetch",{thrownError:c})}const o=e.clone();try{let s;s="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of r)"fetchDidSucceed"in e&&(s=await e.fetchDidSucceed.call(e,{event:n,request:o,response:s}));return s}catch(h){0;for(const e of s)await e.fetchDidFail.call(e,{error:h,event:n,originalRequest:i.clone(),request:o.clone()});throw h}};async function q(e,t){const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},s=t?t(r):r,i=function(){if(void 0===_){const t=new Response("");if("body"in t)try{new Response(t.body),_=!0}catch(e){_=!1}_=!1}return _}()?n.body:await n.blob();return new Response(i,s)}n("aqiC");class L{constructor(e={}){this._cacheName=f(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"===typeof t&&(t=new Request(t));let n,r=await y({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r)0;else{0;try{r=await this._getFromNetwork(t,e)}catch(s){n=s}0}if(!r)throw new a("no-response",{url:t.url,error:n});return r}async _getFromNetwork(e,t){const n=await R({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),r=n.clone(),s=w({cacheName:this._cacheName,request:e,response:r,event:t,plugins:this._plugins});if(t)try{t.waitUntil(s)}catch(i){0}return n}}const E={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};n("2KUI");const N=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class T{constructor(e){this._cacheName=e,this._db=new x("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,n)=>{const r=indexedDB.deleteDatabase(e);r.onerror=()=>{n(r.error)},r.onblocked=()=>{n(new Error("Delete blocked"))},r.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const n={url:e=N(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",n)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const n=await this._db.transaction("cache-entries","readwrite",(n,r)=>{const s=n.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),i=[];let o=0;s.onsuccess=()=>{const n=s.result;if(n){const r=n.value;r.cacheName===this._cacheName&&(e&&r.timestamp<e||t&&o>=t?i.push(n.value):o++),n.continue()}else r(i)}}),r=[];for(const s of n)await this._db.delete("cache-entries",s.id),r.push(s.url);return r}_getId(e){return this._cacheName+"|"+N(e)}}class U{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new T(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const r of t)await n.delete(r);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,v(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class O{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:n,cachedResponse:r})=>{if(!r)return null;const s=this._isResponseDateFresh(r),i=this._getCacheExpiration(n);v(i.expireEntries());const o=i.updateTimestamp(t.url);if(e)try{e.waitUntil(o)}catch(a){0}return s?r:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const n=this._getCacheExpiration(e);await n.updateTimestamp(t.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),c.add(t))}_getCacheExpiration(e){if(e===f())throw new a("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new U(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}n("5tLK");const S=e=>e&&"object"===typeof e?e:{handle:e};class k{constructor(e,t,n="GET"){this.handler=S(t),this.match=e,this.method=n}}class C extends k{constructor(e,t,n){super(({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)},t,n)}}class K{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map(e=>{"string"===typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const{params:r,route:s}=this.findMatchingRoute({url:n,request:e,event:t});let i=s&&s.handler;if(!i&&this._defaultHandler&&(i=this._defaultHandler),!i)return void 0;let o;try{o=i.handle({url:n,request:e,event:t,params:r})}catch(a){o=Promise.reject(a)}return o instanceof Promise&&this._catchHandler&&(o=o.catch(r=>this._catchHandler.handle({url:n,request:e,event:t}))),o}findMatchingRoute({url:e,request:t,event:n}){const r=this._routes.get(t.method)||[];for(const s of r){let r;const i=s.match({url:e,request:t,event:n});if(i)return r=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"===typeof i)&&(r=void 0),{route:s,params:r}}return{}}setDefaultHandler(e){this._defaultHandler=S(e)}setCatchHandler(e){this._catchHandler=S(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new a("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new a("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let P;const M=()=>(P||(P=new K,P.addFetchListener(),P.addCacheListener()),P);function j(e,t,n){let r;if("string"===typeof e){const s=new URL(e,location.href);0;r=new k(({url:e})=>e.href===s.href,t,n)}else if(e instanceof RegExp)r=new C(e,t,n);else if("function"===typeof e)r=new k(e,t,n);else{if(!(e instanceof k))throw new a("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return M().registerRoute(r),r}n("xwD5");const A=[],I={get:()=>A,add(e){A.push(...e)}};function D(e){if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new a("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),s=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",t),{cacheKey:r.href,url:s.href}}class F{constructor(e){this._cacheName=l(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"===typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:r}=D(n),s="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,s),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],r=[],s=await self.caches.open(this._cacheName),i=await s.keys(),o=new Set(i.map(e=>e.url));for(const[c,h]of this._urlsToCacheKeys)o.has(h)?r.push(c):n.push({cacheKey:h,url:c});const a=n.map(({cacheKey:n,url:r})=>{const s=this._cacheKeysToIntegrities.get(n),i=this._urlsToCacheModes.get(r);return this._addURLToCache({cacheKey:n,cacheMode:i,event:e,integrity:s,plugins:t,url:r})});await Promise.all(a);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:r}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const s of t)n.has(s.url)||(await e.delete(s),r.push(s.url));return{deletedURLs:r}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:r,plugins:s,integrity:i}){const o=new Request(t,{integrity:i,cache:n,credentials:"same-origin"});let c,h=await R({event:r,plugins:s,request:o});for(const a of s||[])"cacheWillUpdate"in a&&(c=a);if(!(c?await c.cacheWillUpdate({event:r,request:o,response:h}):h.status<400))throw new a("bad-precaching-response",{url:t,status:h.status});h.redirected&&(h=await q(h)),await w({event:r,plugins:s,response:h,request:e===t?o:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new a("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new a("non-precached-url",{url:e});const n=this.createHandler(t),r=new Request(e);return()=>n({request:r})}}let W;const H=()=>(W||(W=new F),W);const B=(e,t)=>{const n=H().getURLsToCacheKeys();for(const r of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:r,urlManipulation:s}={}){const i=new URL(e,location.href);i.hash="",yield i.href;const o=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(i,t);if(yield o.href,n&&o.pathname.endsWith("/")){const e=new URL(o.href);e.pathname+=n,yield e.href}if(r){const e=new URL(o.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:i});for(const t of e)yield t.href}}(e,t)){const e=n.get(r);if(e)return e}};let G=!1;function $(e){G||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:r}={})=>{const s=l();self.addEventListener("fetch",i=>{const o=B(i.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:r});if(!o)return;let a=self.caches.open(s).then(e=>e.match(o)).then(e=>e||fetch(o));i.respondWith(a)})})(e),G=!0)}const Q=e=>{const t=H(),n=I.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},X=e=>{const t=H();e.waitUntil(t.activate())};self.addEventListener("install",()=>self.skipWaiting()),self.addEventListener("activate",()=>self.clients.claim());var Y,J,V=[{'revision':'12030b5e6e8352ddf56f486e77ea3df9','url':'/_next/static/75ksomK6_zVUiPmWrL33W/_buildManifest.js'},{'revision':'abee47769bf307639ace4945f9cfd4ff','url':'/_next/static/75ksomK6_zVUiPmWrL33W/_ssgManifest.js'},{'revision':'666f226eae4ea3cdba73ac3abda71a15','url':'/_next/static/chunks/4f5ad7a492299187e2d7fa48a58cb3fc78c71276.1cb026f1b65f480989e7.js'},{'revision':'a2be1a6fbb5a1b3bb43b330d1ed4e9d5','url':'/_next/static/chunks/b9612b6a287027ccea23cee37ffa0701e4372a02.1ae9219bbbbca5a3e485.js'},{'revision':'56af6501d39d0d407e4004733ea3ef34','url':'/_next/static/chunks/framework.9116e7bff2bfccdffa19.js'},{'revision':'574ec75e478bd840dfd57dad8c7b04bf','url':'/_next/static/chunks/main-65d7532e00209b9f2675.js'},{'revision':'c25ef7bcaf7ecc1cabee9ceb5c3c8f11','url':'/_next/static/chunks/pages/404-bf428e8d43b60a8c0149.js'},{'revision':'187fd2748c7b664208ed572a7b191a8f','url':'/_next/static/chunks/pages/_app-f39f949fee1a749e53a8.js'},{'revision':'6e4057e8d020482587db09a2b6faee20','url':'/_next/static/chunks/pages/_error-0dcf5bd050483fbd7a18.js'},{'revision':'1d91ded60088a2317312d144ec3ef91d','url':'/_next/static/chunks/pages/about-4fe5ef47d7339f2f43b6.js'},{'revision':'340b9510f4b0465e03fea222b1d530a3','url':'/_next/static/chunks/pages/favorites-f1524bf2d01720c5d667.js'},{'revision':'da83dee5a05344995ab4ea949e03affb','url':'/_next/static/chunks/pages/index-f38991830cffdd3bcce7.js'},{'revision':'0f7a783a9fa61f8dadf27923dd5ef0eb','url':'/_next/static/chunks/pages/offline-4ac4b081a3841d167e89.js'},{'revision':'3ce693b1f022d697f3de9a113b195622','url':'/_next/static/chunks/pages/privacy-20f58dbe5d59a592d51a.js'},{'revision':'ac9899827d5d4b9987d016d115f3cf4c','url':'/_next/static/chunks/pages/terms-dab1d0b50039d16983c3.js'},{'revision':'1598d2fc3932e41bec0eee0ac274ed01','url':'/_next/static/chunks/pages/topics-e137c22a91c55ae3de88.js'},{'revision':'0201f0a9eeb945938c9a6c84b3bb924e','url':'/_next/static/chunks/pages/topics/[topic]/[level]-3fffa22fb7e5caa11d5e.js'},{'revision':'a36b1c6feeca01c1468c6087d2958b03','url':'/_next/static/chunks/polyfills-49d513b8e73258edd797.js'},{'revision':'8c19f623e8389f11131a054a7e17ff95','url':'/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js'},{'revision':'2355c4ac505eed5357cadfab69a449e8','url':'/_next/static/css/b952e5d3cac17347f09b.css'}];V.push({url:"/index.html",revision:null},{url:"/offline",revision:null},{url:"/img/illustrations/undraw_server_down.svg",revision:null}),function(e){H().addToCacheList(e),e.length>0&&(self.addEventListener("install",Q),self.addEventListener("activate",X))}(V),$(Y),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(!e.includes("precache"))return caches.delete(e)})))})).then((function(){console.log("Runtime cache cleared!")})))})),self.addEventListener("activate",e=>{const t=l();e.waitUntil((async(e,t="-precache-")=>{const n=(await self.caches.keys()).filter(n=>n.includes(t)&&n.includes(self.registration.scope)&&n!==e);return await Promise.all(n.map(e=>self.caches.delete(e))),n})(t).then(e=>{}))}),j(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new L({cacheName:"google-fonts",plugins:[new O({maxEntries:4,maxAgeSeconds:31536e3})]})),j(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new L({cacheName:"fonts",plugins:[new O({maxEntries:4,maxAgeSeconds:604800})]})),j(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new L({cacheName:"images",plugins:[new O({maxEntries:64,maxAgeSeconds:86400})]})),j(/\.(?:js)$/i,new L({cacheName:"js",plugins:[new O({maxEntries:32,maxAgeSeconds:86400})]})),j(/\.(?:css|less)$/i,new L({cacheName:"styles",plugins:[new O({maxEntries:32,maxAgeSeconds:86400})]})),j(/\.(?:json|xml|csv)$/i,new L({cacheName:"data",plugins:[new O({maxEntries:32,maxAgeSeconds:86400})]})),j(/.*/i,new class{constructor(e={}){if(this._cacheName=f(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[E,...e.plugins]}else this._plugins=[E];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const n=[];"string"===typeof t&&(t=new Request(t));const r=[];let s;if(this._networkTimeoutSeconds){const{id:i,promise:o}=this._getTimeoutPromise({request:t,event:e,logs:n});s=i,r.push(o)}const i=this._getNetworkPromise({timeoutId:s,request:t,event:e,logs:n});r.push(i);let o=await Promise.race(r);if(o||(o=await i),!o)throw new a("no-response",{url:t.url});return o}_getTimeoutPromise({request:e,logs:t,event:n}){let r;return{promise:new Promise(t=>{r=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:n}))},1e3*this._networkTimeoutSeconds)}),id:r}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,event:r}){let s,i;try{i=await R({request:t,event:r,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(o){s=o}if(e&&clearTimeout(e),s||!i)i=await this._respondFromCache({request:t,event:r});else{const e=i.clone(),n=w({cacheName:this._cacheName,request:t,response:e,event:r,plugins:this._plugins});if(r)try{r.waitUntil(n)}catch(o){0}}return i}_respondFromCache({event:e,request:t}){return y({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}({cacheName:"others",networkTimeoutSeconds:10,plugins:[new O({maxEntries:32,maxAgeSeconds:86400})]})),J=function(){var e,t=(e=s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("document"!==t.event.request.destination){e.next=3;break}return e.abrupt("return",(n="/offline",H().matchPrecache(n)));case 3:return e.abrupt("return",Response.error());case 4:case"end":return e.stop()}var n}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function a(e){i(o,r,s,a,c,"next",e)}function c(e){i(o,r,s,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),M().setCatchHandler(J)},aqiC:function(e,t,n){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(r){}},ls82:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(E){a=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var s=t&&t.prototype instanceof l?t:l,i=Object.create(s.prototype),o=new R(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(s,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===s)throw i;return L()}for(n.method=s,n.arg=i;;){var o=n.delegate;if(o){var a=v(o,n);if(a){if(a===u)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,o),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(E){return{type:"throw",arg:E}}}e.wrap=c;var u={};function l(){}function f(){}function d(){}var p={};p[s]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(q([])));m&&m!==t&&n.call(m,s)&&(p=m);var w=d.prototype=l.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var r;this._invoke=function(s,i){function o(){return new t((function(r,o){!function r(s,i,o,a){var c=h(e[s],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,o,a)}),(function(e){r("throw",e,o,a)})):t.resolve(l).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,a)}))}a(c.arg)}(s,i,r,o)}))}return r=r?r.then(o,o):o()}}function v(e,t){var n=e.iterator[t.method];if(undefined===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=undefined,v(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=h(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var s=r.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=undefined),t.delegate=null,u):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function q(e){if(e){var t=e[s];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=undefined,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:undefined,done:!0}}return f.prototype=w.constructor=d,d.constructor=f,f.displayName=a(d,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a(e,o,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},y(_.prototype),_.prototype[i]=function(){return this},e.AsyncIterator=_,e.async=function(t,n,r,s,i){void 0===i&&(i=Promise);var o=new _(c(t,n,r,s),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(w),a(w,o,"Generator"),w[s]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=q,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=undefined)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=undefined),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var i=s;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),b(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var s=r.arg;b(n)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:q(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=undefined),u}},e}(e.exports);try{regeneratorRuntime=r}catch(s){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(e,t,n){e.exports=n("ls82")},xwD5:function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(r){}}});