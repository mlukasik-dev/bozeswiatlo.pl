function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequiref05f;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequiref05f=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("dOtH2",(function(e,t){e.exports=import("./"+i("kyEFX").resolve("7z54M")).then((()=>i("15EwV")))})),i.register("kF1dR",(function(e,t){e.exports=import("./"+i("kyEFX").resolve("42LDp")).then((()=>i("agU9f")))})),i("kyEFX").register(JSON.parse('{"2e1BA":"index.afe86f19.js","7z54M":"background-animation.9da393a6.js","7dKDz":"canvas-bg.c814689e.webp","42LDp":"lightgallery.min.3b90c741.js","jc5AO":"contact.0ff7f68e.js"}'));(e=>{const t=document.querySelectorAll(".slide"),n=()=>{const e=document.querySelector(".current");(e.nextElementSibling||t[0]).classList.add("current"),e.classList.remove("current"),e.firstElementChild.classList.remove("animation-paused")},r=()=>{const e=document.querySelector(".current");(e.previousElementSibling||t[t.length-1]).classList.add("current"),e.classList.remove("current"),e.classList.remove("animation-paused")};let o=setInterval(n,e);document.getElementById("next").addEventListener("click",(()=>{n(),clearInterval(o),o=setInterval(n,e)})),document.getElementById("prev").addEventListener("click",(()=>{r(),clearInterval(o),o=setInterval(n,e)})),document.addEventListener("keydown",(e=>{"37"==e.keyCode?r():"39"==e.keyCode&&n()}))})(9e3);var c,l=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,d=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,m=f||v||Function("return this")(),p=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return m.Date.now()};function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=u.test(e);return n||a.test(e)?d(e.slice(2),n?2:8):s.test(e)?NaN:+e}c=function(e,t,n){var r,o,i,c,l,s,u=0,a=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,u=t,c=e.apply(i,n)}function m(e){return u=e,l=setTimeout(h,t),a?v(e):c}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=i}function h(){var e=b();if(p(e))return L(e);l=setTimeout(h,function(e){var n=t-(e-s);return d?y(n,i-(e-u)):n}(e))}function L(e){return l=void 0,f&&r?v(e):(r=o=void 0,c)}function S(){var e=b(),n=p(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return m(s);if(d)return l=setTimeout(h,t),v(s)}return void 0===l&&(l=setTimeout(h,t)),c}return t=w(t)||0,E(n)&&(a=!!n.leading,i=(d="maxWait"in n)?g(w(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=s=o=l=void 0},S.flush=function(){return void 0===l?c:L(b())},S};const h=document.querySelector(".page-header"),L={bg:0,lg:0};function S(){!L.bg&&window.scrollY>1800&&(L.bg=1,i("dOtH2").then((e=>e.init()))),!L.lg&&window.scrollY>3e3&&(L.lg=1,i("kF1dR").then((()=>lightGallery(document.getElementById("mp-gallery"))))),window.scrollY?h.classList.add("sticky"):h.classList.remove("sticky");const e=document.querySelector(".current");window.scrollY?e.firstElementChild.classList.add("animation-paused"):e.firstElementChild.classList.remove("animation-paused")}window.scrollY&&S(),window.addEventListener("scroll",t(c)(S,150,{leading:!0,trailing:!0}));const x=document.querySelector(".nav-toggler"),j=document.querySelector(".responsive-nav");x.addEventListener("click",(()=>{j.classList.toggle("active-nav"),x.classList.toggle("active")})),i("2supX");const k=document.querySelectorAll(".m-card");document.querySelector(".slider").style.height=`${window.innerHeight}px`,k.forEach((e=>function(e){e.addEventListener("mouseenter",(()=>setTimeout((()=>e.classList.add("scroll-y")),150))),e.addEventListener("mouseleave",(()=>setTimeout((()=>{e.classList.remove("scroll-y"),e.scrollTop=0}),200)))}(e)));
//# sourceMappingURL=index.afe86f19.js.map
