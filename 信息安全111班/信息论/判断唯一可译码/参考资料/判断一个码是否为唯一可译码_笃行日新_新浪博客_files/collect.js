/*!
* sina.com.cn/license
* 20130621140929
* [28,470,94] published at 2013-06-25 14:59:33
*/
(function(b){var d={byId:function(e){return document.getElementById(e)},bindEvent:function(g,f,e){if(g.attachEvent){g.attachEvent("on"+f,e)}else{g.addEventListener(f,e,false)}return g},extend:function(l,g,m){l=l||{};var e=typeof g,k=1,n;if(e==="undefined"||e==="boolean"){m=e==="boolean"?g:false;g=l;l=this}if(typeof g!=="object"&&Object.prototype.toString.call(g)!=="[object Function]"){g={}}while(k<=2){n=k===1?l:g;if(n!==null){for(var j in n){var f=l[j],h=n[j];if(l===h){continue}if(m&&h&&typeof h==="object"&&!h.nodeType){l[j]=this.extend(f||(h.length!==null?[]:{}),h,m)}else{if(h!==undefined){l[j]=h}}}}k++}return l},cookie:(function(){var e={};e.getCookie=function(f){f=f.replace(/([\.\[\]\$])/g,"\\$1");var h=new RegExp(f+"=([^;]*)?;","i");var i=document.cookie+";";var g=i.match(h);if(g){return unescape(g[1])||""}else{return""}};e.setCookie=function(g,k,h,n,j,f){var l=[];l.push(g+"="+escape(k));if(h){var m=new Date();var i=m.getTime()+h*3600000;m.setTime(i);l.push("expires="+m.toGMTString())}if(n){l.push("path="+n)}if(j){l.push("domain="+j)}if(f){l.push(f)}document.cookie=l.join(";")};e.deleteCookie=function(f){document.cookie=f+"=;expires=Fri, 31 Dec 1999 23:59:59 GMT;"};return e})(),imgLoad:function(g,e){var h=null;var f=new Image(1,1);f.onload=function(){f.onreadystatechange=h;e()};f.onreadystatechange=function(){if(f.readyState=="complete"){f.onload=h;e()}};f.onerror=function(){f.onload=h;f.onreadystatechange=h};f.src=g},jsLoad:function(h,g){var i=document.getElementsByTagName("head")[0];var k=document.createElement("script"),f=false;k.onload=k.onreadystatechange=function(){if(!f&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){f=true;k.onload=k.onreadystatechange=null;typeof g=="function"&&g()}};k.src=h;try{i.appendChild(k)}catch(j){}},domReady:(function(){var g=[],i=0,e=0,i=0;var f=function(){if(document.readyState==="complete"){return 1}return i};var j=function(k){if(i){return}i=1;if(g){while(g.length){g.shift()()}}g=null};var h=function(){if(e){return}e=1;if(document.readyState==="complete"){j()}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);j()},false);window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,false);j()},false)}else{document.attachEvent("onreadystatechange",function(){if(document.readyState=="complete"){document.detachEvent("onreadystatechange",arguments.callee);j()}});(function(){if(i){return}var k=new Image;try{k.doScroll();k=null}catch(l){setTimeout(arguments.callee,64);return}j()})()}}};return function(k){h();if(!f()){g.push(k);return}k.call()}})(),log:function(){var g=location.href.indexOf("log=1")!=-1;if(!g){console={};console.time=console.timeEnd=function(e){return};return}if(typeof console=="undefined"){return}var i=Array.prototype.slice;var f=i.call(arguments,0);f.unshift("*RECOMMENDER >>>>>>");try{console.log.apply(console,f)}catch(h){console.log(f)}}};var a=function(g){var e=function(){this.init.apply(this,arguments)};if(g){var f=function(){};f.prototype=g.prototype;e.prototype=new f}e.prototype.init=function(){};e.fn=e.prototype;e.fn.parent=e;e._super=e.__proto__;e.extend=function(k){var h=k.extended;for(var j in k){e[j]=k[j]}if(h){h(e)}};e.include=function(k){var j=k.included;for(var h in k){e.fn[h]=k[h]}if(j){j(e)}};return e};var c=new a;c.include({init:function(f){var e=this;e.setStat();e.setOpt(f);e.bindEvent();e.upLoad("open")},setOpt:function(f){var e=this;e.opt=e.opt||{api:"http://slog.sina.com.cn/b.gif",type:"cate_interest",collectComplete:function(){}};var g=e.opt;if(f||""){g=d.extend(g,f,true)}},setStat:function(){var e=this;e.stat=e.stat||{hasShared:false}},getGuid:function(){var h=function(i){i=parseInt(i||"0");if(i<=0){return false}return true};var g=function(){return Math.abs((new Date()).getTime())+"_"+Math.round(Math.random()*100000000)};var f=d.cookie;var e=f.getCookie("SGUID");if(!h(e)){e=g();f.setCookie("SGUID",e,43800,"/","sina.com.cn");d.log("GUID不存在或非法，重新生成："+e)}d.log("GUID为："+e);return e},getUid:function(e){var f=this;var h="http://i.sso.sina.com.cn/js/ssologin.js";var g="";var i="";if(window.sinaSSOController){i=sinaSSOController.getSinaCookie()}else{if(window.sinaSSOManager){i=sinaSSOManager.getSinaCookie()}else{d.jsLoad(h,function(){f.getUid(e)});d.log("加载登录脚本："+h);return}}if(i){g=i.uid}d.log("UID为："+g);e(g)},bindEvent:function(){var e=this;var g=d.byId("sinashareto");var h=(typeof(window.ontouchstart)!=="undefined");var f=h?"touchstart":"mousedown";if(g){d.bindEvent(g,f,function(){if(e.stat.hasShared){return}e.upLoad("share");e.stat.hasShared=true})}},upLoad:function(f){var e=this;var g=(function(){var h="";if(location.hostname=="blog.sina.com.cn"&&window._cateIdForThisPage_){h="&cateid="+_cateIdForThisPage_}return h})();e.getUid(function(i){var j=i+","+e.getGuid();f=f||"open";var h=e.opt.api+"?uid="+j+g+"&action="+f+"&type="+e.opt.type+"&refer="+encodeURIComponent(document.referrer)+"&rnd="+(new Date()).getTime();d.imgLoad(h,function(){e.opt.collectComplete()});d.log("收集"+f+"数据："+h)})}});d.domReady(function(){new c()})})(window);