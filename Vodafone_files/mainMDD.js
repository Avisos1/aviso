/*! vodafone-ws2 - v6.4.0 - Wednesday, May 27th, 2020, 5:26:21 PM */
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";!function b(c,d,e){function f(h,i){if(!d[h]){if(!c[h]){var j="function"==typeof a&&a;if(!i&&j)return j(h,!0);if(g)return g(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k}var l=d[h]={exports:{}};c[h][0].call(l.exports,function(a){var b=c[h][1][a];return f(b||a)},l,l.exports,b,c,d,e)}return d[h].exports}for(var g="function"==typeof a&&a,h=0;h<e.length;h++)f(e[h]);return f}({1:[function(a,b,c){function d(){var a=document.querySelectorAll('#nav-desktop ul[aria-expanded = "true"]');a.length>0&&a[0].setAttribute("aria-expanded",!1),"true"==this.nextElementSibling.getAttribute("aria-expanded")?this.nextElementSibling.setAttribute("aria-expanded",!1):this.nextElementSibling.setAttribute("aria-expanded",!0)}function e(){this.blur()}function f(a){T("clientTypeID",a)}function g(){return document.cookie.replace(/(?:(?:^|.*;\s*)clientTypeID\s*\=\s*([^;]*).*$)|^.*$/,"$1")}function h(){for(var a=document.querySelectorAll(".desktopLink"),b=0;b<a.length;b++)a[b].addEventListener("click",function(a){if("#"===a.target.getAttribute("href")&&a.preventDefault(),a.target.attributes["data-desktop-link"]){var b=a.target.attributes["data-desktop-link"].value;"op0"===b?(U("particulares"),f(l)):"op1el0"===b?(U("autonomos"),f(m)):"op1el1"===b?(U("autonomos"),f(n)):"op1el2"===b?(U("empresas"),f(o)):"op1el3"===b&&(U("grandes-clientes"),f(p)),Q(b)}})}function i(){var a=document.cookie.replace(/(?:(?:^|.*;\s*)seleccionEscritorio\s*\=\s*([^;]*).*$)|^.*$/,"$1");return JSON.parse(decodeURIComponent(a))}function j(){var a=document.documentElement.lang,b=window.location.href;switch(a){case"es":console.log("Lenguaje: español");var c=[[" Particulares","/particulares/es/"],[" Autonomos y profesionales","/autonomos/es/"],[" Empresas","/c/empresas/es/"],[" Grandes Clientes","/c/grandes-clientes/es/"]];break;case"ca":console.log("Lenguaje: catalan");var c=[[" Particulars","/ca/particulares/es/"],[" Autonoms i professionals","/ca/autonomos/es/"],[" Empreses","/ca/c/empresas/es/"],[" Grans clients","/ca/c/grandes-clientes/es/"]];break;default:console.log("Lenguaje: desconocido");var c=[]}for(var d=!1,e=0;e<c.length&&!d;e++)if(-1!=b.indexOf(c[e][1])){var f=document.querySelectorAll('a[data-desktop-link="op0"] > span.access').innerHTML;document.querySelectorAll('a[data-desktop-link="op0"] > span.access').innerHTML=f+" "+c[e][0],d=!0}}var k=60,l="0",m="2",n="1",o="3",p="4";!function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype,window.CustomEvent=a}(),function(){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=function(a,b){this.defaults,this.accordion,this.shiftPressed,this.show=function(a,b){a.classList.remove(this.default.classes.collapse),a.classList.add(this.default.classes.expanded),a.previousElementSibling.setAttribute("aria-expanded",!0),b.length>0&&(b=b[0],b.classList.remove(this.default.classes.down),b.classList.add(this.default.classes.up))},this.hide=function(a,b){a.classList.add(this.default.classes.collapse),a.classList.remove(this.default.classes.expanded),a.previousElementSibling.setAttribute("aria-expanded",!1),b.length>0&&(b=b[0],b.classList.remove(this.default.classes.up),b.classList.add(this.default.classes.down))},this.keydown=function(a,b,c){a.keyCode===b.keys.enter&&(toggle(a,b,c),a.preventDefault())},this.accesibility=function(a,b,c,d){a.nextElementSibling.classList.contains(c.classes.collapse)?a.setAttribute("aria-expanded",!1):a.setAttribute("aria-expanded",!0)},this.toggle=function(a,b,c,d){var e=this,f=a.currentTarget,g=void 0,h=void 0;this.default=b,this.accordion=c,this.headings=this.accordion.getElementsByClassName(this.default.selectors.heading);for(var i=0;i<this.headings.length;i++)if(this.headings[i]===f)if(g=f.nextElementSibling,h=f.getElementsByClassName(this.default.selectors.chevron),g.classList.contains(this.default.classes.collapse)){if(this.show(g,h),this.headings[i].classList.add("active"),!this.accordion.classList.contains("open")){var j=this;setTimeout(function(){j.accordion.classList.add("open")},1)}}else{var j=this,k=setTimeout(function(){j.hide(g,h)},200);this.headings[i].classList.remove("active"),this.accordion.classList.remove("open")}else{var k;!function(){var a=0,b=e,c=e.headings[i].nextElementSibling,f=e.headings[i].getElementsByClassName(e.default.selectors.chevron);e.headings[i].classList.remove("active"),d?(e.accordion.classList.remove("open"),a=200):a=0,k=setTimeout(function(){b.hide(c,f)},a)}()}},this.toogleOut=function(a){for(var b=a.target,c=document.getElementById("content-nav-desktop");(b=b.parentNode)&&b!==c;);return!!b},this.init=function(){if(this.accordion){var a=this.defaults,b=this.accordion,c=this.shiftPressed,d=this;this.headings=this.accordion.getElementsByClassName(this.defaults.selectors.heading),this.close=this.accordion.getElementsByClassName(this.defaults.selectors.close);for(var e=0;e<this.headings.length;e++)this.headings[e].onclick=function(c){c.preventDefault(),d.toggle(c,a,b)},this.accesibility(this.headings[e],e,a,b);for(var e=0;e<this.close.length;e++)this.close[e].onclick=function(c){c.preventDefault(),d.toggle(c,a,b,"close")};return b.onkeyup=function(){16==event.which&&(c=!1)},this}}},H={selectors:{menuMobile:"menu-mobile",accordionMenuElement:"mb-menu-accordion",langLinkElement:"lang-toggle",langToggleContent:"lang-toggle-content",contentLogin:"login-overlay",searchMobile:"search-mobile",searchElement:"search",linkCloseMobile:"closesearch-mov",searchInputMobile:"searchField-mov",linkClearMobile:"textClear-mov"},classes:{linksMobile:"mb-menu",closeLayers:"close-tab",sectorAccordion:"sector-accordion",elementosLang:"link-Lang",langLinks:"lang__heading"}};!function(){if(q=document.getElementById(H.selectors.menuMobile),r=q.getElementsByClassName(H.classes.linksMobile),s=q.getElementsByClassName(H.classes.closeLayers),t=document.getElementById(H.selectors.accordionMenuElement),v=document.getElementsByClassName(H.classes.elementosLang),w=document.getElementById(H.selectors.langLinkElement),x=document.getElementById(H.selectors.langToggleContent),y=document.getElementById(H.selectors.contentLogin),z=document.getElementById(H.selectors.searchMobile),A=document.getElementById(H.selectors.searchElement),u=document.getElementById(H.classes.sectorAccordion),B=document.getElementById(H.selectors.linkCloseMobile),E=document.querySelector("#"+H.selectors.linkCloseMobile+" a"),C=document.getElementById(H.selectors.searchInputMobile),D=document.getElementById(H.selectors.linkClearMobile),"undefined"!=typeof vfds)F=vfds.desktop;else{var a=window.location.href;a.indexOf("particulares")>-1&&(F="particulares"),a.indexOf("empresas")>-1&&(F="empresas"),a.indexOf("autonomos")>-1&&(F="autonomos"),a.indexOf("grandes-clientes")>-1&&(F="grandes-clientes")}}();var I;!function(){function a(a){a.preventDefault();var b=a.currentTarget.parentElement;if(b.classList.contains("open")){b.classList.remove("open");var c=new CustomEvent("vfMenuMobileClose");document.body.classList.remove("overHidden"),document.dispatchEvent(c)}else{b.classList.add("open");var d=new CustomEvent("vfMenuMobileOpen");document.body.classList.add("overHidden"),document.dispatchEvent(d)}}for(var b=0;b<r.length;b++)r[b].onclick=a;for(var b=0;b<s.length;b++)s[b].onclick=a;I=new G,I.defaults={selectors:{heading:"accordion__heading",content:"accordion__content",chevron:"chevron__container"},classes:{up:"accordion__arrow-up",down:"accordion__arrow-down",collapse:"accordion__content--collapse",expanded:"accordion__content--expanded"},keys:{enter:13}},I.accordion=t,I.init()}();var J=new G;J.defaults={selectors:{heading:"sector__heading",content:"sector__content",chevron:"chevron__container"},classes:{up:"accordion__arrow-up",down:"accordion__arrow-down",collapse:"sector__content--collapse",expanded:"sector__content--expanded"},keys:{enter:13}},J.accordion=u,J.init(),function(){function a(){u.style.display="none",w.style.display="inline-table"}function b(){u.style.display="inline-table",w.style.display="none"}function c(a){if(a.preventDefault(),x.classList.contains("lang__content--collapse")){a.currentTarget.setAttribute("aria-expanded",!0);for(var b=a.currentTarget.getElementsByClassName("chevron__container"),c=0;c<b.length;c++)b[c].classList.remove("accordion__arrow-down"),b[c].classList.add("accordion__arrow-up");w.classList.add("open"),x.classList.remove("lang__content--collapse"),x.classList.add("lang__content--expanded")}else{a.currentTarget.setAttribute("aria-expanded",!1);for(var b=a.currentTarget.getElementsByClassName("chevron__container"),c=0;c<b.length;c++)b[c].classList.remove("accordion__arrow-up"),b[c].classList.add("accordion__arrow-down");w.classList.remove("open"),x.classList.remove("lang__content--expanded"),x.classList.add("lang__content--collapse")}}function d(){for(var d=w.getElementsByClassName("lang__heading"),e=0;e<d.length;e++)d[e].onclick=c;document.addEventListener("vfMenuMobileOpen",a),document.addEventListener("vfMenuMobileClose",b)}w&&x&&d()}();var K,L;!function(){L=document.querySelectorAll(".MDD_autoncontent.MDDHeader.destiny .nav-link"),K=Array.prototype.slice.call(L,0),K.forEach(function(a){a.addEventListener("keydown",d),a.addEventListener("mouseout",e)})}();var M;!function(){function a(a){}function b(a){}function c(a){a.preventDefault();var b=a.currentTarget.parentElement;if(b.classList.contains("open")){b.classList.remove("open");var c=new CustomEvent("vfMenuMobileCloseD");document.dispatchEvent(c)}else{b.classList.add("open");var d=new CustomEvent("vfMenuMobileOpenD");document.dispatchEvent(d)}}for(var d=document.getElementById("mdd-desktop"),e=d.getElementsByClassName("mb-menu"),f=0;f<e.length;f++)e[f].onclick=c;document.addEventListener("vfMenuMobileOpenD",a),document.addEventListener("vfMenuMobileCloseD",b),M=new G,M.defaults={selectors:{accordion:"header-accordion",heading:"accordion__heading",content:"accordion__content",chevron:"chevron__container",close:"nav-close"},classes:{up:"accordion__arrow-up",down:"accordion__arrow-down",collapse:"accordion__content--collapse",expanded:"accordion__content--expanded",active:"active"},keys:{enter:13}},M.accordion=document.getElementById(M.defaults.selectors.accordion),M.init()}(),function(){function a(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return decodeURIComponent(e.substring(b.length,e.length))}return null}var b=a("shoppingCartLength"),c=a("PORTAL_JSESSIONID"),d=document.getElementById("shoppingCart");if(c&&d&&(d.setAttribute("href",c),b)){var e=document.createElement("span");e.classList.add("num-cart-txt"),e.innerText=b,d.classList.add("active-cart"),d.appendChild(e)}}(),function(){function a(){var a=document.getElementById("nav-desktop").scrollHeight,b=document.getElementById("content-nav-desktop").scrollHeight,c=document.getElementById("mdd-desktop").offsetTop,d=document.getElementById("content"),e=c>0?c+a:a;window.pageYOffset>e-5?(document.getElementById("content-nav-desktop").classList.add("fixedNav"),document.getElementById("navigation-breadcrumb")?document.getElementById("navigation-breadcrumb").style.marginTop=b+"px":d&&(d.style.marginTop=b+"px")):(document.getElementById("content-nav-desktop").classList.remove("fixedNav"),d&&(d.style.marginTop="0px"),document.getElementById("navigation-breadcrumb")&&(document.getElementById("navigation-breadcrumb").style.marginTop="0px"))}document.addEventListener("scroll",a),document.querySelector(".mdd-mobile").classList.add("fixedNav")}(),function(){if(document.addEventListener){if(document.getElementById("accede-box")){window.setTimeout(function(){N()},500)}window.addEventListener("load",function(){if(document.getElementById("accede-box")){window.setTimeout(function(){O()},1e4)}var a=new G;a.defaults={selectors:{accordion:"footer-accordion",heading:"accordion__heading",content:"accordion__content",chevron:"chevron__container"},classes:{up:"accordion__arrow-up",down:"accordion__arrow-down",collapse:"accordion__content--collapse",expanded:"accordion__content--expanded"},keys:{enter:13}},a.accordion=document.getElementById(a.defaults.selectors.accordion),a.init()},!1)}}();var N=function(){if(document.getElementById("accede-box")){document.querySelector("#login").classList.add("open");window.setTimeout(function(){document.getElementById("accede-box").style.opacity=1},100)}},O=function(){P()},P=function(){if(document.getElementById("accede-box")){var a=document.getElementById("login").querySelector(".tg-body");document.getElementById("accede-box").style.opacity=0,document.getElementById("login").removeChild(a);document.querySelector("#login").classList.remove("open")}};!function(){var a=document.getElementById("searchField"),b=document.getElementById("searchField-mov"),c=document.getElementById("mainsearchDSnav"),d=document.getElementById("mainsearchDS"),e="searchField",f="searchField-stop",g="mainsearchDSnav",h="mainsearchDSnav-stop",i=document.querySelector("#search-mobile .mb-search"),j=document.querySelector("#search .icon");i&&i.addEventListener("click",function(i){i.preventDefault(),a.id=f,b.id=e,c.id=h,d.id=g;var j=document.getElementById("divMiVodafoneApp");if(j){j.style.display="none";for(var k=document.querySelectorAll(".fixedNav"),l=0;l<k.length;l++)k[l].classList.add("margin-top-zero")}document.querySelector("body").style.position="fixed"},!1),j&&j.addEventListener("click",function(i){a.id=e,b.id=f,c.id=g,d.id=h},!1)}(),function(){var a=document.getElementById("no-gracias");a&&a.addEventListener("click",function(a){a.preventDefault(),O()},!1)}(),function(){var a={selectors:{baseUrl:window.location.origin+window.location.pathname,initUrl:"/c/",lastUrl:"?"}},b=a.selectors.baseUrl,c=document.location.href,d=c.indexOf(a.selectors.initUrl),e=c.substr(d,c.length),f=e.indexOf(a.selectors.lastUrl);f<0&&(f=c.length);var g=c.substr(d,f);0===parseInt(g)&&(g="/");var h=b+g,i=document.getElementById("menuSup").querySelector(".link-Lang"),j=i.getAttribute("href"),h=b+j;h=h.replace("/ca/","/"),i.setAttribute("href",h)}(),document.addEventListener("mouseup",function(a){!M.toogleOut(a)&&!I.toogleOut(a)&&!document.querySelector(".mdd-mobile").scrollHeight>0&&(M.toggle(a,M.defaults,M.accordion,"close"),O())},!1),document.addEventListener("scroll",function(a){!document.querySelector(".mdd-mobile").scrollHeight>0&&M.toggle(a,M.defaults,M.accordion),O()},!1);var Q=function(a){if("op1"!==a&&"op0"!==a){var b=i();b.desktopLink=a,b=JSON.stringify(b),T("seleccionEscritorio",encodeURIComponent(b),k)}},R=function(){var a,b=i();if("undefined"!=typeof vfds||void 0!==F)if("particulares"==F||"autonomos"!=F&&"empresas"!=F&&"grandes-clientes"!=F){a="op0";var c=document.querySelector("#menuSup .desktopLink[data-desktop-link=op0]");c.parentNode.classList.add("active");var d=document.querySelector("#menuSup .desktopLink[data-desktop-link="+a+"]"),e='<h3 class="chevron__text">'+d.innerHTML+'</h3><span class="chevron__container accordion__arrow-down"></span>',f=(document.querySelector("#sector-accordion .sector__heading").innerHTML=e,document.querySelectorAll(".es-customer .desktopLink[data-desktop-link="+a+"]"));f[f.length-1].parentNode.remove()}else{"autonomos"==F&&(a="op1el0"==b.desktopLink||"op1el1"==b.desktopLink?b.desktopLink:"op1el0"),"empresas"==F&&(a="op1el2"),"grandes-clientes"==F&&(a="op1el3");var d=document.querySelector("#menuSup .desktopLink[data-desktop-link="+a+"]"),g=document.querySelector("nav .desktopLink[data-desktop-link="+a+"]"),h=d.innerHTML+'<i class="i-arrow-up-black-lrg">                      <span class="access"> Mostrar '+d.innerHTML+'</span>                      <span class="access">Ocultar '+d.innerHTML+"</span>                    </i>",c=document.querySelector("#menuSup a[data-desktop-link|=op1]");c.innerHTML=h,document.querySelector('#menuSup [data-desktop-link="op0"]').parentNode.classList.remove("active"),c.parentNode.classList.add("active"),d.parentNode.remove();var e='<h3 class="chevron__text">'+g.innerHTML+'</h3><span class="chevron__container accordion__arrow-down"></span>';document.querySelector("#sector-accordion .sector__heading").innerHTML=e;d=document.querySelector(".es-customer .desktopLink[data-desktop-link="+a+"]"),d.parentNode.remove()}j(),2===document.querySelectorAll("#sector-accordion.es-customer .sector__heading").length&&document.querySelector("#sector-accordion.es-customer .sector__heading").remove(),2===document.querySelectorAll("#menuSup .mb-menu span.access").length&&document.querySelector("#menuSup .mb-menu span.access").remove()},S=function a(){function b(a){return!isNaN(parseFloat(a))&&isFinite(a)}var c=function(){var a=void 0;try{a=i()}catch(j){a=d()}var c=[];for(var e in a)b(a[e])&&c.push({val:e,num:a[e]});c.sort(function(a,b){return b.num-a.num});var f=void 0;if(3===c[0].num){if(c[0].num===c[1].num){var g=F;f=c[0].num===g?c[0].val:c[1].num===g?c[1].val:c[0].val}else f=c[0].val;void 0!=f&&null!=f&&""!=f&&(a.frequentDesktop="grandes-clientes"===f?"index.grandesClientes":"index."+f);for(var h in a)h!==f&&b(a[h])&&"desktopLink"!==h&&"frequentDesktop"!==h?a[h]=0:h===f&&(a[h]=0);T("seleccionEscritorio",encodeURIComponent(JSON.stringify(a)),k)}},d=function(){var a={particulares:0,autonomos:0,empresas:0,"grandes-clientes":0,desktopLink:"op1el0",frequentDesktop:""};return a=JSON.stringify(a),T("seleccionEscritorio",encodeURIComponent(a),k),i()};if(""!==window.location.hostname){var e=document.cookie.replace(/(?:(?:^|.*;\s*)seleccionEscritorio\s*\=\s*([^;]*).*$)|^.*$/,"$1");null===e||""===e?(e=d(),a()):(c(),R(),h())}},T=function(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3);var e="; expires="+d.toGMTString()}else var e="";document.cookie=a+"="+b+e+"; path=/"},U=function(a){function b(a,b){var c=Number(a[b]);a.particulares=0,a.autonomos=0,a.empresas=0,a["grandes-clientes"]=0,a[b]=++c,a=JSON.stringify(a),T("seleccionEscritorio",encodeURIComponent(a),k)}var c=i();if(a&&"particulares"===a&&3!=c.particulares)b(c,"particulares");else if(a&&"autonomos"===a&&3!=c.autonomos)b(c,"autonomos");else if(a&&"empresas"===a&&3!=c.empresas)b(c,"empresas");else if(a&&"grandes-clientes"===a&&3!=c["grandes-clientes"])b(c,"grandes-clientes");else{var d=["autonomos","empresas","particulares","grandes-clientes"];if("undefined"!=typeof vfds&&F&&""!==F&&-1!==d.indexOf(F)&&(c=i(),3!=c[F])){c[F]+=1;c=JSON.stringify(c),T("seleccionEscritorio",encodeURIComponent(c),k)}}},V=function(){if(F&&""!==F){T("currentDesktop",encodeURIComponent(F),3);var a=g();if(void 0===a||""===a)switch(F){case"particulares":f(l);break;case"autonomos":f(m);break;case"empresas":f(o);break;case"grandes-clientes":f(p)}}};S(),V()},{}]},{},[1])},{}]},{},[1]);
//# sourceMappingURL=mainMDD.min.js.map