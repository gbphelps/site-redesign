!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};n(3)(i,a);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'*{box-sizing:border-box;font-family:"Open Sans", sans-serif}html,body{height:100%;padding:0;margin:0}body{background:white}.full-width{width:100%;max-width:1100px;margin-left:auto;margin-right:auto}.float{animation-name:f;animation-duration:1s;animation-iteration-count:infinite;animation-direction:alternate;position:relative;display:inline-block;animation-timing-function:ease-in-out;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.zoom{animation-name:z;animation-duration:1s;position:relative;display:inline-block;animation-timing-function:ease-in-out}.zoom-out{animation-name:nz;animation-duration:1s;position:relative;display:inline-block;animation-timing-function:ease-in-out;animation-fill-mode:both}@keyframes f{0%{transform:translateY(-5%) rotate(-2deg)}100%{transform:translateY(5%) rotate(2deg)}}@keyframes z{0%{opacity:0;transform:translateY(-20%)}50%{transform:translateY(5%)}75%{transform:translateY(-1%)}}@keyframes nz{0%{transform:translateY(1%)}50%{transform:translateY(-5%)}75%{transform:translateY(100%)}100%{transform:translateY(100%);visibility:hidden}}.hidden{display:none}#loading{color:#0083f8}video{width:400px}.content{height:150vh;width:100%;font-family:"Open Sans";padding:0 12px}#skyline{overflow:hidden;background:#7ec2ff;width:100%;overflow:hidden;height:100%;display:flex;align-items:center;justify-content:center}.layer-1{fill:#b2daff}.cloud-6{fill:#ecf6ff}.layer-2{fill:#9acfff}.cloud-7{fill:#d8edff}.layer-3{fill:#83c4ff}.cloud-8{fill:#c5e4ff}.layer-4{fill:#49a9ff}.cloud-9{fill:#b2daff}.layer-5{fill:#0488ff}.cloud-10{fill:#9ed1ff}#cloud-container{width:100%;height:100%;display:flex;position:absolute;align-self:flex-start;flex-shrink:0;z-index:0}#cloud-container svg{flex-shrink:0;width:100vw;height:auto;display:block}.sail{height:100%;width:100%;position:absolute;bottom:-1px;z-index:4}.sail svg{height:auto;width:100%;fill:white;bottom:0;position:absolute}.marquee .outer{display:flex;height:100px;align-items:center;position:relative;z-index:1;padding:18px}.marquee .container{height:100%;perspective:700px;position:relative;perspective-origin:50% 50%;display:inline-flex;align-items:center;justify-content:center;width:350px}.marquee .item{position:absolute;animation-duration:2.5s;animation-fill-mode:backwards;animation-timing-function:ease;z-index:100;backface-visibility:hidden;font-size:50px;white-space:nowrap;visibility:hidden;border-bottom:2px solid #0083f8;border-top:2px solid #0083f8;transform-style:preserve-3d;text-transform:uppercase;font-weight:900}.marquee .animate{visibility:visible;animation-name:animate}.marquee .inner{transform:translateZ(-50px);transform-style:preserve-3d;height:100%;display:flex;align-items:center;justify-content:center}@keyframes animate{0%{transform:rotateX(-90deg) translateZ(50px)}6%{transform:rotateX(10deg) translateZ(50px)}12%{transform:rotateX(-5deg) translateZ(50px)}18%{transform:rotateX(1.5deg) translateZ(50px)}24%{transform:rotateX(0deg) translateZ(50px)}82%{transform:rotateX(0deg) translateZ(50px)}88%{transform:rotateX(5deg) translateZ(50px)}94%{transform:rotateX(-10deg) translateZ(50px)}100%{transform:rotateX(90deg) translateZ(50px)}}.marquee .static{font-size:24px;font-weight:800;flex-grow:1}@media only screen and (max-width: 500px){.marquee .item{font-size:36px}.marquee .static{font-size:20px}}.marquee *{color:#0083f8}nav{width:100%;position:absolute;z-index:1000;transition:.3s;display:flex;align-items:center;padding:20px 20px;color:white;font-family:-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;border-bottom:1px solid transparent}nav.detached{position:fixed;background:white;box-shadow:0 5px 20px rgba(0,0,0,0.05);visibility:visible;opacity:1}nav.detached svg{fill:#7ec2ff}nav.detached svg:hover{fill:#1d234d}nav.detached .divider{border-color:rgba(15,15,111,0.3)}nav.retracted{transform:translateY(-100%);box-shadow:none}nav svg{cursor:pointer;transition:.2s;height:30px;width:auto;margin-right:20px;fill:#0083f8;animation-name:bounce-in;animation-duration:.8s;animation-fill-mode:both}nav svg:hover{fill:#1d234d}nav svg:nth-child(1){animation-delay:0s}nav svg:nth-child(2){animation-delay:.08s}nav svg:nth-child(3){animation-delay:.16s}nav svg:nth-child(4){animation-delay:.24s}nav svg:nth-child(5){animation-delay:.32s}nav svg:nth-child(6){animation-delay:.4s}nav .divider{height:32px;width:1px;margin-right:20px;border-left:1px solid #5da7e4}@keyframes bounce-in{0%{transform:scale(0)}20%{transform:scale(1.4)}40%{transform:scale(0.8)}60%{transform:scale(1.1)}80%{transform:scale(0.95)}}.card{height:400px;width:100%;margin:auto;position:relative;padding:20px}.card .text{width:400px;font-family:"Open Sans";color:#535877;line-height:1.5em;font-weight:300}.card .img-container{max-width:500px;width:100%;display:flex;align-items:center;justify-content:center;position:relative;margin:0 auto}.card .img-container::after{content:\'\';display:block;height:20%;width:80%;border-radius:50%;background:radial-gradient(closest-side, rgba(0,0,0,0.1), rgba(0,0,0,0));position:absolute;bottom:0px;z-index:0}.card img,.card video{width:400px;max-width:100%;height:auto;display:block;transition:.2s;margin-bottom:50px}.card h1{display:inline;font-size:48px;margin:0;padding:0;color:#1d234d;transition:.2s;font-family:"Open Sans", sans-serif;text-transform:uppercase}.feature{width:300px;height:460px;margin-left:auto;margin-right:auto;box-shadow:0 3px 5px 0 rgba(0,0,0,0.2);display:flex;flex-direction:column;overflow:hidden;border-radius:4px;position:relative;transition:.5s}.feature .title{position:relative;z-index:5;background:white;padding:12px;box-shadow:0 2px 10px 0 rgba(0,0,0,0.3);transition:.5s}.feature .title *{text-align:center}.feature video{position:absolute;bottom:0;min-width:500px;align-self:center}.feature:hover{width:600px}.feature:hover .title{transform:translateY(-100%)}\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=i.sources.map(function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")});return[n].concat(r).concat([a]).join("\n")}var o,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var o=0;o<t.length;o++){var s=t[o];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var i,a={},r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],i={},a=0;a<t.length;a++){var r=t[a],o=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=a[i.id],o=0;if(r){for(r.refs++;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(g(i.parts[o],e))}else{for(var s=[];o<i.parts.length;o++)s.push(g(i.parts[o],e));a[i.id]={id:i.id,refs:1,parts:s}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=n.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,c=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function u(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=c(e,a);else{var r=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function p(t,e,n){var i=n.css,a=n.media,r=n.sourceMap;if(a&&t.setAttribute("media",a),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,h=0;function g(t,e){var n,i,a;if(e.singleton){var r=h++;n=m||(m=d(e)),i=u.bind(null,n,r,!1),a=u.bind(null,n,r,!0)}else n=d(e),i=p.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=s(t,e);return l(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var o=n[r],d=a[o.id];d&&(d.refs--,i.push(d))}t&&l(s(t,e),e);for(var f=0;f<i.length;f++){var c=i[f];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}}}]);