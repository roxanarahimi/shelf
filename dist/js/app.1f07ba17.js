(function(){"use strict";var e={6031:function(e,t,n){var r=n(5130),o=n(3749),i=n(4458);(0,i.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var a=n(1877),l=n(782),u=(0,l.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});window.axios=n(6425),(0,r.Ef)(o.A).use(u).use(a.A).mount("#app")},1877:function(e,t,n){n.d(t,{A:function(){return v}});var r=n(1387),o=n(6768);const i={class:"d-grid h-100 px-3"},a={class:"row p-0 m-0 mx-auto text-center align-self-center h-auto"};function l(e,t,n,r,l,u){const s=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.Lk)("div",a,[(0,o.bF)(s,{class:"btn btn-home text-light mb-2",style:{"background-color":"#e70000"},to:"/customer"},{default:(0,o.k6)((()=>[(0,o.eW)("مشتری ها")])),_:1}),(0,o.bF)(s,{class:"btn btn-home text-light mb-2",style:{"background-color":"#cc2323"},to:"/forms"},{default:(0,o.k6)((()=>[(0,o.eW)("فرم های من")])),_:1}),(0,o.bF)(s,{class:"btn btn-home text-light mb-2",style:{"background-color":"#914242"},to:"/profile"},{default:(0,o.k6)((()=>[(0,o.eW)("پروفایل")])),_:1})])])}var u=n(3749),s={name:"HomeView",setup(){(0,o.KC)((()=>{u.A.setup().checkUser()}))}},c=n(1241);const f=(0,c.A)(s,[["render",l]]);var d=f;const m=[{path:"/",name:"home",component:d},{path:"/customer",name:"customer",params:!0,props:!0,component:()=>n.e(659).then(n.bind(n,1451))},{path:"/form/:id",name:"form",component:()=>n.e(325).then(n.bind(n,1636))},{path:"/create/form/:id",name:"formCreate",component:()=>n.e(37).then(n.bind(n,4701))},{path:"/edit/form/:id",name:"formEdit",component:()=>n.e(305).then(n.bind(n,8585))},{path:"/grade/:id",name:"grade",component:()=>n.e(924).then(n.bind(n,7158))},{path:"/forms",name:"forms",component:()=>n.e(132).then(n.bind(n,3269))},{path:"/profile",name:"profile",component:()=>n.e(138).then(n.bind(n,4932))},{path:"/login",name:"login",component:()=>n.e(966).then(n.bind(n,2708))}],p=(0,r.aE)({history:(0,r.LA)("/"),routes:m});var v=p},3749:function(e,t,n){n.d(t,{A:function(){return O}});var r=n(6768);const o={class:"d-grid m-0 p-0 container-fluid main-wrapper max-width h-100"},i={class:"text-light mx-auto max-width m-0 p-0 top-nav-wrapper"},a={class:"top-nav-wrapper-inner max-width"},l={dir:"ltr",class:"d-flex justify-content-between py-5 w-100 m-0 top-nav max-width"},u=(0,r.Lk)("i",{class:"bi bi-caret-left-fill"},null,-1),s=[u],c=(0,r.Lk)("b",{id:"visitor-name",style:{"z-index":"1000"}},null,-1),f={class:"container-fluid p-0 m-0 pb-3 align-self-center w-100 mx-auto router-view-wrapper"},d=["value"],m={class:"d-flex justify-content-between p-0 m-0 w-100 mx-auto bottom-nav align-self-end"},p=(0,r.Lk)("i",{class:"bi bi-house-fill d-block"},null,-1),v=(0,r.Lk)("small",null,"خانه",-1),g=(0,r.Lk)("i",{class:"bi bi-info-square-fill d-block"},null,-1),h=(0,r.Lk)("small",null,"مشتری",-1),b=(0,r.Lk)("i",{class:"bi bi-file-text-fill d-block"},null,-1),k=(0,r.Lk)("small",null,"فرم ها",-1),y=(0,r.Lk)("i",{class:"bi bi-person-fill d-block"},null,-1),w=(0,r.Lk)("small",null,"پروفایل",-1);function L(e,t,n,u,L,S){const x=(0,r.g2)("router-view"),E=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.Lk)("div",i,[(0,r.Lk)("div",a,[(0,r.Lk)("nav",l,[(0,r.Lk)("div",{style:{cursor:"pointer"},onClick:t[0]||(t[0]=t=>e.$router.go(-1))},s),c])])]),(0,r.Lk)("div",f,[u.visitor?((0,r.uX)(),(0,r.CE)("input",{key:0,type:"hidden",id:"visitor_id",value:u.visitor.id},null,8,d)):(0,r.Q3)("",!0),(0,r.bF)(x)]),(0,r.Lk)("nav",m,[(0,r.bF)(E,{to:"/",class:"bottom-nav-link py-2"},{default:(0,r.k6)((()=>[p,v])),_:1}),(0,r.bF)(E,{to:"/customer",class:"bottom-nav-link py-2"},{default:(0,r.k6)((()=>[g,h])),_:1}),(0,r.bF)(E,{to:"/forms",class:"bottom-nav-link py-2"},{default:(0,r.k6)((()=>[b,k])),_:1}),(0,r.bF)(E,{to:"/profile",class:"bottom-nav-link py-2"},{default:(0,r.k6)((()=>[y,w])),_:1})])])}n(4114);var S=n(144),x=n(1387),E={setup(){const e=(0,x.rd)(),t="https://webagent.ir/projects/ShelfMonitoring/panel.shelf/storage/app/public",n="https://panel.shelf.webagent.ir/",o=(0,S.KR)({}),i=(0,S.KR)({}),a=()=>{JSON.parse(localStorage.getItem("user"))?.id?(i.value=JSON.parse(localStorage.getItem("user")),o.value=JSON.parse(localStorage.getItem("user")),o.value&&(document.querySelector("#visitor-name").innerHTML="کارشناس "+o.value.name)):(document.querySelector("#visitor-name").innerHTML="",u())};(0,r.sV)((()=>{})),(0,r.$u)((()=>{o.value=JSON.parse(localStorage.getItem("user")),o.value&&(document.querySelector("#visitor-name").innerHTML="کارشناس "+o.value.name)}));const l=()=>{let e=0,t=document.querySelectorAll("[required]");return t.forEach((t=>{""===t.value?(t.classList.add("hasError"),e++):t.classList.remove("hasError")})),e},u=()=>{o.value={},document.querySelector("#visitor-name").innerHTML="",localStorage.removeItem("user"),e.push({name:"login"})},s=()=>{axios.get(n+"visitor/"+JSON.parse(localStorage.getItem("user")).id).then((e=>{o.value=e.data,localStorage.setItem("user",JSON.stringify(e.data))})).catch((e=>{console.error(e)}))};return{user:i,checkUser:a,logout:u,EmptyFieldsCount:l,panelUrl:n,visitor:o,router:e,reloadVisitor:s,storageUrl:t}}},C=n(1241);const A=(0,C.A)(E,[["render",L]]);var O=A}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var l=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{37:"formCreate",132:"forms",138:"profile",305:"formEdit",325:"form",659:"customer",924:"grade",966:"login"}[e]+"."+{37:"a2d33223",132:"f0232268",138:"3922329c",305:"fa132382",325:"e73c16e4",659:"ab27a544",924:"80003842",966:"bf4a4e89"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{37:"formCreate",138:"profile",305:"formEdit",325:"form",924:"grade",966:"login"}[e]+"."+{37:"104f5b73",138:"211e63ba",305:"0c857196",325:"1fbe501f",924:"9b8386c6",966:"9b8386c6"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="monitoring:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var l,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){l=f;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[o];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var l=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,l=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+l+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=l,a.parentNode&&a.parentNode.removeChild(a),i(u)}};return a.onerror=a.onload=l,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),l=n.p+a;if(t(a,l))return o();e(r,l,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={37:1,138:1,305:1,325:1,924:1,966:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),l=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],l=r[1],u=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var c=u(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkmonitoring"]=self["webpackChunkmonitoring"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6031)}));r=n.O(r)})();
//# sourceMappingURL=app.1f07ba17.js.map