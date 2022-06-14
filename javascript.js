/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Sharect=t():e.Sharect=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(){return!!window.getSelection().toString()}function o(e){var t=(window.getSelection().baseNode||window.getSelection().anchorNode).parentNode;return e.some(function(e){return function(e,t){if(Element.prototype.closest)return e.closest(t);Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector);var r=e;do{if(r.matches(t))return r;r=r.parentNode}while(null!==r&&r.nodeType===Node.ELEMENT_NODE);return null}(t,e)})}function i(e){var t=e.iconSize,r=e.buttonMargin,n=e.arrowSize,o=e.icons,i=window.getSelection().getRangeAt(0).getBoundingClientRect(),c=t+r,u=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop;return{top:i.top+u-c-n,left:i.left+(i.width-c*o.length)/2}}r.r(t);var c=function(e){return""},u=function(e,t){return"position:absolute;border-radius:3px;top:"+e+"px;left:"+t+"px;"},l=function(e){var t=e.arrowSize;return"position:absolute;border-left:"+t+"px solid transparent;border-right:"+t+"px solid transparent;bottom:-"+(t-1)+"px;width:0;height:0;"};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=i(e),r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){s(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{top:t.top,left:t.left});document.body.appendChild(function(e){var t=e.top,r=e.left,n=e.iconSize,o=e.buttonMargin,i=e.backgroundColor,a=e.icons,s=e.arrowSize,f=document.createElement("div"),p=n+o;f.className="highlight-shares",f.style.cssText=c(i),f.style.cssText+=u(t,r),f.appendChild(a.icons);var b=function(e){var t=document.createElement("div");return t.style.cssText=l(e),t}({arrowSize:s,backgroundColor:i,buttonSize:p,icons:a});return f.appendChild(b),f}(r))}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m,y,h,w,g,O,v="transition:all .25s;";function E(){this.style.transform="scale(1.2)"}function j(){this.style.transform="scale(1)"}function S(e,t,r){return function(e,t){var r=document.createElement("div");return r.style.cssText=v,r.innerHTML=e,r.onmousedown=t,r.onmouseover=E,r.onmouseout=j,r}(e,function(){var e=function(e,t){return e.replace(/PAGE_URL/,window.location.href).replace(/TEXT_SELECTION/,window.getSelection().toString()).replace(/USERNAME/,t)}(t,r);window.open(e,"Share","width=550, height=280")})}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){T(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=(m={facebook:{isActive:!0,url:"https://www.facebook.com/sharer/sharer.php?u=PAGE_URL&quote=TEXT_SELECTION",icon:'<i class="rbi rbi-facebook"></i>'},twitter:{isActive:!0,username:"",url:"https://twitter.com/intent/tweet?text=TEXT_SELECTION&via=USERNAME&url=PAGE_URL",icon:'<i class="rbi rbi-twitter"></i>'}},y={},h=["body"],w=[],g="#ffffff",O="#333333",5,14,24,{config:function(e){return void 0!==e.twitter&&(m.twitter.isActive=e.twitter),void 0!==e.facebook&&(m.facebook.isActive=e.facebook),e.twitterUsername&&(m.twitter.username=e.twitterUsername),e.backgroundColor&&(g=e.backgroundColor),e.iconColor&&(O=e.iconColor),e.selectableElements&&(h=e.selectableElements),this},appendCustomShareButtons:function(e){return w=e,this},init:function(){var e={backgroundColor:g,iconColor:O,arrowSize:5,buttonMargin:14,iconSize:24,selectableElements:h,networks:m,customShareButtons:w};return function(e){e.iconColor,document.createElement("style")}(x({},e)),y=function(e){var t=e.networks,r=e.customShareButtons,n=document.createElement("div"),o=0;for(var i in t)if(t[i]&&t[i].isActive){var c=t[i],u=c.icon,l=c.url,a=c.username;n.appendChild(S(u,l,a)),o++}return r.length>0&&r.forEach(function(e){n.appendChild(S(e.icon,e.url)),o++}),{icons:n,length:o}}(x({},e)),function(e){window.addEventListener("mouseup",function(){return function(e){setTimeout(function(){if(document.querySelector(".highlight-shares")){if(n()&&o(e.selectableElements))return void function(e){var t=i(e),r=t.top,n=t.left,o=document.querySelector(".highlight-shares");o.style.top="".concat(r,"px"),o.style.left="".concat(n,"px")}(b({},e));document.body.removeChild(document.querySelector(".highlight-shares"))}n()&&o(e.selectableElements)&&f(b({},e))},10)}(e)},!1)}(x({},e,{icons:y})),this}})}]).default});
function initDarkMode(){let darkModeID='RubyDarkMode';if(foxizCoreParams.darkModeID){darkModeID=foxizCoreParams.darkModeID;}
let currentMode=localStorage.getItem(darkModeID);if(null===currentMode){currentMode=document.body.getAttribute('data-theme');}
if('dark'===currentMode){document.body.setAttribute('data-theme','dark');let darkIcons=document.getElementsByClassName('mode-icon-dark');if(darkIcons.length){for(let i=0;i<darkIcons.length;i++){darkIcons[i].classList.add('activated');}}}else{document.body.setAttribute('data-theme','default');let defaultIcons=document.getElementsByClassName('mode-icon-default');if(defaultIcons.length){for(let i=0;i<defaultIcons.length;i++){defaultIcons[i].classList.add('activated');}}}}
(function(){initDarkMode();let currentPrivacy=localStorage.getItem('RubyPrivacyAllowed');let privacyBox=document.getElementById('rb-privacy');if(!currentPrivacy&&privacyBox!==null){privacyBox.classList.add('activated');}
let readingSize=sessionStorage.getItem('rubyResizerStep');if(readingSize){let body=document.getElementsByTagName("BODY")[0];if(2==readingSize){body.classList.add('medium-entry-size');}else if(3==readingSize){body.classList.add('big-entry-size');}}})();var FOXIZ_CORE_SCRIPT=(function(Module,$){"use strict";Module.init=function(){this._body=$('body');this.switchDarkMode();this.notificationStatus();}
Module.switchDarkMode=function(){var self=this;let darkModeID='RubyDarkMode';if(foxizCoreParams.darkModeID){darkModeID=foxizCoreParams.darkModeID;}
$('.dark-mode-toggle').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();if(!$(this).hasClass('triggered')){$(this).addClass('triggered')}
let iconDefault=$('.mode-icon-default');let iconDark=$('.mode-icon-dark');let currentMode=localStorage.getItem(darkModeID);if(null===currentMode){currentMode=document.body.getAttribute('data-theme');}
self._body.addClass('switch-smooth');if(null===currentMode||'default'===currentMode){localStorage.setItem(darkModeID,'dark');self._body.attr('data-theme','dark');iconDefault.removeClass('activated');iconDark.addClass('activated');}else{localStorage.setItem(darkModeID,'default');self._body.attr('data-theme','default');iconDefault.addClass('activated');iconDark.removeClass('activated');}})}
Module.shareTrigger=function(){$('a.share-trigger').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();window.open($(this).attr('href'),'_blank','width=600, height=350');return false;})};Module.notificationStatus=function(){let storageID='RubyNotification';let notification=$('.notification-icon');let statusID=notification.data('notification');if(statusID){let currentStatus=localStorage.getItem(storageID);if(!currentStatus||statusID!=currentStatus){notification.addClass('notification-activated');}}
notification.on('click',function(){$(this).removeClass('notification-activated');localStorage.setItem(storageID,statusID);});}
Module.loadGoogleAds=function(response){var googleAds=$(response).find('.adsbygoogle');if(typeof window.adsbygoogle!=='undefined'&&googleAds.length){var adsbygoogle;googleAds.each(function(){(adsbygoogle=window.adsbygoogle||[]).push({});});}}
Module.loadInstagram=function(response){var instEmbed=$(response).find('.instagram-media');if('undefined'!==typeof window.instgrm){window.instgrm.Embeds.process();}else if(instEmbed.length&&'undefined'===typeof window.instgrm){var embedJS=document.createElement('script');embedJS.src='//platform.instagram.com/en_US/embeds.js';embedJS.onload=function(){window.instgrm.Embeds.process();};this.$body.append(embedJS);}}
Module.updateGA=function(article){var gaURL=article.postURL.replace(/https?:\/\/[^\/]+/i,'');if(typeof _gaq!=='undefined'&&_gaq!==null){_gaq.push(['_trackPageview',gaURL]);}
if(typeof ga!=='undefined'&&ga!==null){ga('send','pageview',gaURL);}
if(typeof __gaTracker!=='undefined'&&__gaTracker!==null){__gaTracker('send','pageview',gaURL);}
if(window.googletag&&googletag.pubadsReady){googletag.pubads().refresh();}}
return Module;}(FOXIZ_CORE_SCRIPT||{},jQuery));jQuery(document).ready(function(){FOXIZ_CORE_SCRIPT.init();});jQuery(window).on('load',function(){FOXIZ_CORE_SCRIPT.shareTrigger();});
