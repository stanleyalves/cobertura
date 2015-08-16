function getOptmizedImageUrl(e){return window.UA.isMobile()?e.replace("_b.jpg","_n.jpg"):e}function getMonthName(e){var e=parseInt(e),t="";return 1===e?t="JAN":2===e?t="FEV":3===e?t="MAR":4===e?t="ABR":5===e?t="MAI":6===e?t="JUN":7===e?t="JUL":8===e?t="AGO":9===e?t="SET":10===e?t="OUT":11===e?t="NOV":12===e&&(t="DEZ"),t}function getFormattedDate(e){var t=e.split(" ")[0].split("-",3);return t.shift(),t.reverse(),t[0]+" "+getMonthName(t[1])}function getFormattedHourAndMinutes(e){return e.split(" ")[1].split(":",2).join(":")}function capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}function extend(e,t){e=e||{};for(var i in t)e[i]="object"==typeof t[i]?this.extend(e[i],t[i]):t[i];return e}function RenderException(e){this.message=e,this.name="RenderException"}!function(e){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],e):"object"==typeof exports?e(require("jquery"),require("hammerjs")):e(jQuery,Hammer)}(function(e,t){function i(i,n){var o=e(i);o.data("hammer")||o.data("hammer",new t(o[0],n))}e.fn.hammer=function(e){return this.each(function(){i(this,e)})},t.Manager.prototype.emit=function(t){return function(i,n){t.call(this,i,n),e(this.element).trigger({type:i,gesture:n})}}(t.Manager.prototype.emit)}),$(document).ready(function(){$("[data-toggle]").click(function(){var e=$(this).data("toggle");$(e).toggleClass("open"),$(this).toggleClass("open")}),$("main > aside").hammer().on("swipe",function(){$(this).toggleClass("open"),$("[data-toggle]").toggleClass("open")})}),$(document).ready(function(){$(".choose-photos").magnificPopup({delegate:"a",type:"image",tLoading:"Carregando #%curr%...",mainClass:"mfp-img-mobile",tCounter:'<span class="mfp-counter">%curr% de %total%</span>',gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}})}),$(document).ready(function(){Galleria.loadTheme("//cdnjs.cloudflare.com/ajax/libs/galleria/1.4.2/themes/classic/galleria.classic.min.js")}),function(e,t){"use strict";function i(e){return function(){return e.test(n)}}var n=e.navigator&&t.userAgent||"",o={isChrome:i(/webkit\W.*(chrome|chromium)\W/i),isFirefox:i(/mozilla.*\Wfirefox\W/i),isGecko:i(/mozilla(?!.*webkit).*\Wgecko\W/i),isIE:function(){return"Microsoft Internet Explorer"===t.appName?!0:i(/\bTrident\b/)?!0:!1},isKindle:i(/\W(kindle|silk)\W/i),isMobile:i(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),isOpera:i(/opera.*\Wpresto\W|OPR/i),isSafari:i(/webkit\W(?!.*chrome).*safari\W/i),isTablet:i(/(ipad|android(?!.*mobile)|tablet)/i),isTV:i(/googletv|sonydtv/i),isWebKit:i(/webkit\W/i),isAndroid:i(/android/i),isIOS:i(/(ipad|iphone|ipod)/i),isIPad:i(/ipad/i),isIPhone:i(/iphone/i),isIPod:i(/ipod/i),whoami:function(){return n}};"function"==typeof define&&define.amd?define([],function(){return o}):"undefined"!=typeof module&&module.exports?(module.exports=o.attach,module.exports.UA=o):e.UA=o}(window,navigator),function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.viewportUnitsBuggyfill=t()}(this,function(){"use strict";function e(e,t){var i;return function(){var n=this,o=arguments,r=function(){e.apply(n,o)};clearTimeout(i),i=setTimeout(r,t)}}function t(){try{return window.self!==window.top}catch(e){return!0}}function i(i){k||(i===!0&&(i={force:!0}),h=i||{},h.isMobileSafari=O,h.isBadStockAndroid=F,(h.force||O||y||F||B||h.hacks&&h.hacks.required(h))&&(h.hacks&&h.hacks.initialize(h),k=!0,v=document.createElement("style"),v.id="patched-viewport",document.head.appendChild(v),u(function(){var i=e(o,h.refreshDebounceWait||100);window.addEventListener("orientationchange",i,!0),window.addEventListener("pageshow",i,!0),(h.force||y||t())&&(window.addEventListener("resize",i,!0),h._listeningToResize=!0),h.hacks&&h.hacks.initializeEvents(h,o,i),o()})))}function n(){v.textContent=s()}function o(){k&&(r(),setTimeout(function(){n()},1))}function r(){return w=[],b.call(document.styleSheets,function(e){"patched-viewport"!==e.ownerNode.id&&e.cssRules&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(e.media&&e.media.mediaText&&window.matchMedia&&!window.matchMedia(e.media.mediaText).matches||b.call(e.cssRules,a))}),w}function a(e){if(7===e.type){var t;try{t=e.cssText}catch(i){return}return x.lastIndex=0,void(x.test(t)&&(w.push([e,null,t]),h.hacks&&h.hacks.findDeclarations(w,e,null,t)))}if(!e.style){if(!e.cssRules)return;return void b.call(e.cssRules,function(e){a(e)})}b.call(e.style,function(t){var i=e.style.getPropertyValue(t);x.lastIndex=0,x.test(i)&&(w.push([e,t,i]),h.hacks&&h.hacks.findDeclarations(w,e,t,i))})}function s(){g=d();var e,t,i=[],n=[];return w.forEach(function(o){var r=l.apply(null,o),a=r.selector.length?r.selector.join(" {\n")+" {\n":"",s=new Array(r.selector.length+1).join("\n}");return a&&a===e?(a&&!e&&(e=a,t=s),void n.push(r.content)):(n.length&&(i.push(e+n.join("\n")+t),n.length=0),void(a?(e=a,t=s,n.push(r.content)):(i.push(r.content),e=null,t=null)))}),n.length&&i.push(e+n.join("\n")+t),B&&i.push("* { content: normal !important; }"),i.join("\n\n")}function l(e,t,i){var n,o=[];n=i.replace(x,c),h.hacks&&(n=h.hacks.overwriteDeclaration(e,t,n)),t&&(o.push(e.selectorText),n=t+": "+n+";");for(var r=e.parentRule;r;)o.unshift("@media "+r.media.mediaText),r=r.parentRule;return{selector:o,content:n}}function c(e,t,i){var n=g[i],o=parseFloat(t)/100;return o*n+"px"}function d(){var e=window.innerHeight,t=window.innerWidth;return{vh:e,vw:t,vmax:Math.max(t,e),vmin:Math.min(t,e)}}function u(e){var t=0,i=function(){t--,t||e()};b.call(document.styleSheets,function(e){e.href&&f(e.href)!==f(location.href)&&(t++,m(e.ownerNode,i))}),t||e()}function f(e){return e.slice(0,e.indexOf("/",e.indexOf("://")+3))}function m(e,t){p(e.href,function(){var i=document.createElement("style");i.media=e.media,i.setAttribute("data-href",e.href),i.textContent=this.responseText,e.parentNode.replaceChild(i,e),t()},t)}function p(e,t,i){var n=new XMLHttpRequest;if("withCredentials"in n)n.open("GET",e,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");n=new XDomainRequest,n.open("GET",e)}return n.onload=t,n.onerror=i,n.send(),n}var h,g,w,v,k=!1,T=window.navigator.userAgent,x=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,b=[].forEach,y=!1,B=T.indexOf("Opera Mini")>-1,O=/(iPhone|iPod|iPad).+AppleWebKit/i.test(T)&&function(){var e=T.match(/OS (\d)/);return e&&e.length>1&&parseInt(e[1])<8}(),F=function(){var e=T.indexOf(" Android ")>-1;if(!e)return!1;var t=T.indexOf("Version/")>-1;if(!t)return!1;var i=parseFloat((T.match("Android ([0-9.]+)")||[])[1]);return 4.4>=i}();return y||(y=!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)),{version:"0.5.0",findProperties:r,getCss:s,init:i,refresh:o}}),function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.viewportUnitsBuggyfillHacks=t()}(this,function(){"use strict";function e(e,t,o,r){var a="content"===o&&r.indexOf("viewport-units-buggyfill")>-1;if(a){var s=r.replace(n,"");s.split(";").forEach(function(n){var o=n.split(":");if(2===o.length){var r=o[0].trim();if("viewport-units-buggyfill"!==r){var a=o[1].trim();if(e.push([t,r,a]),i.test(a)){var s=a.replace(i,"-webkit-calc(");e.push([t,r,s])}}}})}}var t,i=/calc\(/g,n=/[\"\']/g,o=!1,r=!0,a=!0;return{required:function(e){return e.isMobileSafari||o},initialize:function(e){t=e;var i=document.createElement("div");i.style.width="1vmax",r=""!==i.style.width,(t.isMobileSafari||t.isBadStockAndroid)&&(a=!1)},initializeEvents:function(e,t,i){e.force||o&&!e._listeningToResize&&(window.addEventListener("resize",i,!0),e._listeningToResize=!0)},findDeclarations:function(t,i,n,o){null!==n&&e(t,i,n,o)},overwriteDeclaration:function(e,t,i){return o&&"filter"===t&&(i=i.replace(/px/g,"")),i}}}),function(window){"use strict";var showButtonNewContent=function(){$(window).scrollTop()>500&&$(".button-new-content").fadeIn().removeClass("is-hidden")},TimelineBlocks={};TimelineBlocks={timelineBlocks:null,render:function(data,newerContent){var newElement=eval("window.TimeLineBlock"+capitalize(data.type)+".render( data )");newerContent?($("#timeline").prepend(newElement),showButtonNewContent()):$(".timeline-block:last-child")[0]?$(".timeline-block:last-child").after(newElement):$("#timeline").html(newElement)},getTimelineBlocks:function(){return TimelineBlocks.timelineBlocks=$(".timeline-block"),TimelineBlocks.timelineBlocks},elementIsVisibleOnViewport:function(e,t){return e.offset().top<=$(window).scrollTop()+$(window).height()*t},elementIsNotVisibleOnViewport:function(e,t){return e.offset().top>$(window).scrollTop()+$(window).height()*t},hideBlocksOutsideViewport:function(e){var t,i=TimelineBlocks.getTimelineBlocks();i.each(function(){t=$(this),TimelineBlocks.elementIsNotVisibleOnViewport(t,e)&&t.find(".timeline-img, .timeline-content").addClass("is-hidden")})},showBlocksInViewport:function(e){var t,i=TimelineBlocks.getTimelineBlocks();i.each(function(){t=$(this),TimelineBlocks.elementIsVisibleOnViewport(t,e)&&t.find(".timeline-img").hasClass("is-hidden")&&t.find(".timeline-img, .timeline-content").removeClass("is-hidden").addClass("bounce-in")})}},"undefined"!=typeof define&&define.amd?define(function(){return TimelineBlocks}):"undefined"!=typeof module&&module.exports?(module.exports=TimelineBlocks.attach,module.exports.TimelineBlocks=TimelineBlocks):window.TimelineBlocks=TimelineBlocks}(window),function(e){"use strict";function t(){return-1===e.location.origin.indexOf("localhost")?"//burburinho.herokuapp.com":"//localhost:5000"}var i={FACEBOOK_ID:0x554d5fd3c13e3,OFFSET:.8,URL_COBERTURA:"http://cobertura.brasildefato.com.br/ato",URL_SOCIAL_SHARE_IMAGE:"http://cobertura.brasildefato.com.br/assets/img/logo.jpg",URL_BUFFER_INFO:t()+"/api/burburinhos",URL_SOCKET_IO:t()};"undefined"!=typeof define&&define.amd?define(function(){return i}):"undefined"!=typeof module&&module.exports?(module.exports=i.attach,module.exports.CONFIG=i):e.CONFIG=i}(window),function(e){"use strict";var t={render:function(e){throw new RenderException("Render method wasn't implemented!")},getSocialNetworkHTML:function(e){var t;return t="photo"===e.type||"quote"===e.type?e.url:"gallery"===e.type?e.content[0].url:CONFIG.URL_SOCIAL_SHARE_IMAGE,'<div class="logos"><div class="social-small"><a target="_blank" href="//www.twitter.com/share?url='+CONFIG.URL_COBERTURA+"&via=Brasil_de_Fato&related=Brasil_de_Fato&text="+document.title+'" ><i class="fa fa-twitter"></i></a></div><div class="social-small"><a href="//www.facebook.com/dialog/feed?app_id='+CONFIG.FACEBOOK_ID+"&display=popup&href="+CONFIG.URL_COBERTURA+"&redirect_uri="+CONFIG.URL_COBERTURA+"&picture="+t+"&name="+document.title+"&description="+e.content+"&link="+CONFIG.URL_COBERTURA+'" target="_blank"><i class="fa fa-facebook"></i></a></div></div>'}};"undefined"!=typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.AbstractTimeLineBlock=t):e.AbstractTimeLineBlock=t}(window),function(e){"use strict";var t={};extend(t,e.AbstractTimeLineBlock),t.render=function(e){var t=getFormattedDate(e.timestamp),i=getFormattedHourAndMinutes(e.timestamp),n=e.content.map(function(e){return'<img src="'+getOptmizedImageUrl(e.url)+'" alt="'+e.description+'"/>'});return'<div class="timeline-block"><figure class="timeline-img"><i class="fa fa-picture-o"></i></figure><time class="data-hora">'+t+'    <strong class="hora">'+i+'</strong></time><article class="timeline-content gallery"><h2 class="estado">'+e.local+'</h2><section class="photos">'+n.join("")+"</section>"+TimeLineBlockText.getSocialNetworkHTML(e)+"</article></div>"},"undefined"!=typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.TimeLineBlockGallery=t):e.TimeLineBlockGallery=t}(window),function(e){"use strict";var t={};extend(t,e.AbstractTimeLineBlock),t.render=function(e){var t=getFormattedDate(e.timestamp),i=getFormattedHourAndMinutes(e.timestamp);return'<div class="timeline-block"><figure class="timeline-img"><i class="fa fa-camera-retro"></i></figure><time class="data-hora">'+t+'    <strong class="hora">'+i+'</strong></time><article class="timeline-content photo"><h2 class="estado">'+e.local+'</h2><img src="'+getOptmizedImageUrl(e.url)+'" alt="manifestação"/><p>'+e.content+"</p>"+TimeLineBlockText.getSocialNetworkHTML(e)+"</article></div>"},"undefined"!=typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.TimeLineBlockPhoto=t):e.TimeLineBlockPhoto=t}(window),function(e){"use strict";var t={};extend(t,e.AbstractTimeLineBlock),t.render=function(e){var t=getFormattedDate(e.timestamp),i=getFormattedHourAndMinutes(e.timestamp);return'<div class="timeline-block"><figure class="timeline-img">  <i class="fa fa-quote-left"></i></figure><time class="data-hora">'+t+'    <strong class="hora">'+i+'</strong></time><article class="timeline-content quote"><h2 class="estado">'+e.local+'</h2>  <img class="perfil" src="'+getOptmizedImageUrl(e.url)+'" alt="foto perfil"/>  <p>'+e.content+"</p>"+TimeLineBlockText.getSocialNetworkHTML(e)+"</article></div>"},"undefined"!=typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.TimeLineBlockQuote=t):e.TimeLineBlockQuote=t}(window),function(e){"use strict";{var t={};e.CONFIG}extend(t,e.AbstractTimeLineBlock),t.render=function(e){var i=getFormattedDate(e.timestamp),n=getFormattedHourAndMinutes(e.timestamp);return'<div class="timeline-block">  <figure class="timeline-img">    <i class="fa fa-align-justify"></i>  </figure><time class="data-hora">'+i+'    <strong class="hora">'+n+'</strong></time><article class="timeline-content text"><h2 class="estado">'+e.local+"</h2>    <p>"+e.content+"</p>"+t.getSocialNetworkHTML(e)+"  </article></div>"},"undefined"!=typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.TimeLineBlockText=t):e.TimeLineBlockText=t}(window),function(e){"use strict";var t={};extend(t,e.AbstractTimeLineBlock),t.render=function(e){var t=getFormattedDate(e.timestamp),i=getFormattedHourAndMinutes(e.timestamp);return'<div class="timeline-block"><figure class="timeline-img"><i class="fa fa-video-camera fa-4"></i></figure><time class="data-hora">'+t+'    <strong class="hora">'+i+'</strong></time><article class="timeline-content video"><h2 class="estado">'+e.local+'</h2><div class="video-wrapper"><iframe src="'+e.url+'"></iframe></div><p>'+e.content+"</p>"+TimeLineBlockText.getSocialNetworkHTML(e)+"</article></div>"},"undefined"!=typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.TimeLineBlockVideo=t):e.TimeLineBlockVideo=t}(window),function(e){"use strict";function t(){o+=1;var e=[];if(i.length>0)for(var t=0;n>t;t++)i[t]&&(e.push(i[t]),i.shift());return e}var i=[],n=10,o=0,r=e.CONFIG,a={};a={setData:function(e){i=e},remove:function(e){var t=i.filter(function(t,i){return t.timestamp===e.timestamp?i:void 0});i.splice(t,1)},getLocalOldestInformations:function(){return t()},numberOfPages:function(){return Math.ceil(i.length/n)},getBufferInformations:function(){return $.getJSON(r.URL_BUFFER_INFO)}},"undefined"!=typeof define&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.TimeLineStore=a):e.TimeLineStore=a}(window),$(document).ready(function(){function e(e){"photo"===e.type&&$(".choose-photos").html($(".choose-photos").html()+'<a class="photo" href="'+getOptmizedImageUrl(e.url)+'"><img class="highlight-photo" src="'+getOptmizedImageUrl(e.url)+'" alt="'+e.content+'" width="90" height="60"></a>')}$(".button-new-content").click(function(){return $("html, body").animate({scrollTop:$("main").offset().top},800),$(this).fadeOut().addClass("is-hidden"),!1});var t=window.TimeLineStore,i=window.TimelineBlocks,n=window.CONFIG;i.hideBlocksOutsideViewport(n.OFFSET);var o=io.connect(n.URL_SOCKET_IO);t.getBufferInformations(n.URL_BUFFER_INFO).then(function(r){if(t.setData(r),r.length>0)for(var a=0;r.length>a;a++)i.render(r[a],!1),e(r[a]),t.remove(r[a]);o.on("burburinho",function(o){t.remove(o.message),i.showBlocksInViewport(n.OFFSET),i.render(o.message,!0),e(o.message),i.hideBlocksOutsideViewport(n.OFFSET)}),$(window).on("scroll",function(){var o=$(".timeline-block:last-child"),r=o.size()>0?i.elementIsVisibleOnViewport(o,n.OFFSET):!0;if(i.showBlocksInViewport(n.OFFSET),r){var a=t.getLocalOldestInformations();0!==a.length&&($.each(a,function(t,n){i.render(n,!1),e(n)}),i.hideBlocksOutsideViewport(n.OFFSET))}})})});