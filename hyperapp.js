// HyperApp 1.2.8
//
// Copyright © 2017-present Jorge Bucaran
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var u=t.pop();if(u&&u.pop)for(o=u.length;o--;)t.push(u[o]);else null!=u&&!0!==u&&!1!==u&&r.push(u)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,u=[].map,l=r&&r.children[0]||null,i=l&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:u.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(l),y=[],g=!0,f=b(e),a=function e(r,o,u){for(var n in u)"function"==typeof u[n]?function(e,t){u[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(v(r,f),u)),n&&n!==(o=v(r,f))&&!n.then&&s(f=d(r,b(o,n),f)),n}}(n,u[n]):e(r.concat(n),o[n]=b(o[n]),u[n]=b(u[n]));return u}([],f,b(n));return s(),a;function N(e){return"function"==typeof e?N(e(f,a)):null!=e?e:""}function c(){o=!o;var e=N(t);for(r&&!o&&(l=function e(n,t,r,o,u){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var l=function e(n,t){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName),o=n.attributes;if(o){o.oncreate&&y.push(function(){o.oncreate(r)});for(var u=0;u<n.children.length;u++)r.appendChild(e(n.children[u]=N(n.children[u]),t));for(var l in o)w(r,l,o[l],null,t)}return r}(o,u);n.insertBefore(l,t),null!=r&&x(n,t,r),t=l}else if(null==r.nodeName)t.nodeValue=o;else{!function(e,n,t,r){for(var o in b(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&w(e,o,t[o],n[o],r);var u=g?t.oncreate:t.onupdate;u&&y.push(function(){u(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=k(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,h=0;h<s.length;){var v=k(c[d]),p=k(s[h]=N(s[h]));if(f[v])d++;else if(null==p||p!==k(c[d+1]))if(null==p||g)null==v&&(e(t,a[d],c[d],s[h],u),h++),d++;else{var m=i[p]||[];v===p?(e(t,m[0],m[1],s[h],u),d++):m[0]?e(t,t.insertBefore(m[0],a[d]),m[1],s[h],u):e(t,a[d],null,s[h],u),f[p]=s[h],h++}else null==v&&x(t,a[d],c[d]),d++}for(;d<c.length;)null==k(c[d])&&x(t,a[d],c[d]),d++;for(var d in i)f[d]||x(t,i[d][0],i[d][1])}return t}(r,l,i,i=e)),g=!1;y.length;)y.pop()()}function s(){o||(o=!0,setTimeout(c))}function b(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function d(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?d(e.slice(1),n,t[e[0]]):n,b(t,r)):n}function v(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function k(e){return e?e.key:null}function h(e){return e.currentTarget.events[e.type](e)}function w(e,n,t,r,o){if("key"===n);else if("style"===n)for(var u in b(r,t)){var l=null==t||null==t[u]?"":t[u];"-"===u[0]?e[n].setProperty(u,l):e[n][u]=l}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,h):e.removeEventListener(n,h)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function x(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});
