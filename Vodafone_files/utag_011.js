//tealium universal tag - utag.1533 ut4.0.202101150920, Copyright 2021 Tealium.com Inc. All Rights Reserved.
(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pixelId':'10049240'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}
try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){if(typeof dotq!="undefined"){try{if((document.location.pathname.indexOf("-one")>-1||document.location.pathname.indexOf("/one")>-1)&&document.location.pathname.search(/empresa|number|catalogo|telev|ayuda|sms=/)==-1){window.dotq=window.dotq||[];window.dotq.push({projectId:'10000',properties:{pixelId:'10049240',qstrings:{'et':'custom','ec':'retargeting','el':'one'}}});}
if((document.location.pathname.indexOf("movil")>-1&&document.location.pathname.indexOf("tarifa")>-1)||document.location.href.indexOf("oferta.vodafone.es/extra")>-1||document.location.href.indexOf("oferta.vodafone.es/ilimitada")>-1||document.location.href.indexOf("oferta/particulares/mini")>-1||document.location.href.indexOf("oferta/particulares")>-1||document.location.href.indexOf("oferta/particulares/ilimitada")>-1||document.location.href.indexOf("oferta.vodafone.es/mini")>-1||document.location.href.indexOf("oferta.vodafone.es/vodafone-tarifas-moviles")>-1){if(document.location.pathname.search(/-one|\/one|recarga|empresa|ayuda|sms=|fibra/)==-1){window.dotq=window.dotq||[];window.dotq.push({projectId:'10000',properties:{pixelId:'10049240',qstrings:{'et':'custom','ec':'retargeting','el':'voz'}}});}}
if(document.location.pathname.indexOf("fibra")>-1&&document.location.pathname.search(/-one|\/one|recarga|empresa|ayuda|sms=|movil/)==-1){window.dotq=window.dotq||[];window.dotq.push({projectId:'10000',properties:{pixelId:'10049240',qstrings:{'et':'custom','ec':'retargeting','el':'2p'}}});}
if(document.location.pathname.indexOf("confirmacion-pedido")>-1&&b['product_name']==='movil+fibra'){window.dotq=window.dotq||[];window.dotq.push({projectId:'10000',properties:{pixelId:'10049240',qstrings:{'et':'custom','ea':'conversion','el':'one'}}});}
if(document.location.pathname.indexOf("confirmacion-pedido")>-1&&b['product_name']==='movil'){window.dotq=window.dotq||[];window.dotq.push({projectId:'10000',properties:{pixelId:'10049240',qstrings:{'et':'custom','ea':'conversion','el':'voz'}}});}
if(document.location.pathname.indexOf("confirmacion-pedido")>-1&&b['product_name']==='fibra'){window.dotq=window.dotq||[];window.dotq.push({projectId:'10000',properties:{pixelId:'10049240',qstrings:{'et':'custom','ea':'conversion','el':'2p'}}});}
var verizon_dmp=getCookieSC("aam_segment_sharing");if(typeof verizon_dmp=="string"&&verizon_dmp.indexOf("lead_walmeric")>-1){window.dotq=window.dotq||[];window.dotq.push({projectId:'10000',properties:{pixelId:'10049240',qstrings:{'et':'custom','ea':'callcenter','ec':'leadgenerated','el':'TOL'}}});}}catch(e){}}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
!function(_window,_document){var OB_ADV_ID='009eae7fc1ee459af1c06848d0b1e07c78';if(_window.obApi){var toArray=function(object){return Object.prototype.toString.call(object)==='[object Array]'?object:[object];};_window.obApi.marketerId=toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;}
var api=_window.obApi=function(){api.dispatch?api.dispatch.apply(api,arguments):api.queue.push(arguments);};api.version='1.1';api.loaded=true;api.marketerId=OB_ADV_ID;api.queue=[];var tag=_document.createElement('script');tag.async=true;tag.src='//amplify.outbrain.com/cp/obtp.js';tag.type='text/javascript';var script=_document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag,script);}(window,document);obApi('track','PAGE_VIEW');}};utag.o[loader].loader.LOAD(id);})("1533","vodafone.es-main");}catch(error){utag.DB(error);}
