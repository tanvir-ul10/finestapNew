// Finestap JS
var Pu={gC:function(e){return(e=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[\]\\/+^])/g,"$1")+"=([^;]*)")))?decodeURIComponent(e[1]):void 0},sC:function(e,t,n={}){(n={path:"/",...n}).expires instanceof Date&&(n.expires=n.expires.toUTCString());let o=unescape(encodeURIComponent(e))+"="+unescape(encodeURIComponent(t));for(var r in n){o+="; "+r;var c=n[r];!0!==c&&(o+="="+c)}document.cookie=o},dC:function(e){Pu.sC(e,"",{"max-age":-1})},sLS:function(e,t){localStorage.setItem(e,t)},gLS:function(e){return localStorage.getItem(e)},rLS:function(e){localStorage.removeItem(e)},sSS:function(e,t){sessionStorage.setItem(e,t)},gSS:function(e){return sessionStorage.getItem(e)},rSS:function(e){sessionStorage.removeItem(e)},rdm:function(e){return e[Math.floor(Math.random()*e.length)]},abv:function(e){var t=Math.sign(Number(e));return 1e9<=Math.abs(Number(e))?t*(Math.abs(Number(e))/1e9).toFixed(2)+"B":1e6<=Math.abs(Number(e))?t*(Math.abs(Number(e))/1e6).toFixed(2)+"M":1e3<=Math.abs(Number(e))?t*(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e))},gAj:function(e){var t=new XMLHttpRequest;try{t=new XMLHttpRequest}catch(e){try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return console.warn("Something went wrong!"),!1}}}t.onreadystatechange=function(){var n;4==t.readyState&&(200==t.status?(n=t.responseText,e.success(n)):"function"==typeof e.error&&e.error(t))},t.open("GET",e.url,e.async),t.send()}};function stS(e){window.scroll({top:getid(e).offsetTop-20,left:0,behavior:"smooth"})};function stC(e){var t={behavior:"smooth",block:"center"};getid(e).scrollIntoView(t)};function stE(e){var t={behavior:"smooth",block:"end"};getid(e).scrollIntoView(t)};
const baseUrl="https://cdn.jsdelivr.net/gh/ngylduy/blog@d0ca1ff";function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:PuSet.gTranslate.pageLang,includedLanguages:PuSet.gTranslate.includedLangs,autoDisplay:PuSet.gTranslate.autoDisplay,multilanguagePage:PuSet.gTranslate.multiLangPage,layout:google.translate.TranslateElement.InlineLayout.SIMPLE},"google_translate_element")}function puViews(){if(""!=PuSet.realViews.databaseUrl&&null!=getid("fb-db")&&0<firebase.apps.length)for(var t=qSell(".pu-views"),e=firebase.database(),s=0;s<t.length;s++){var a=t[s],l=a.getAttribute("data-id");(l=e.ref("BlogID_"+blogID+"/PostID_"+l)).once("value",function(t,e){return function(s){0<(s=s.exists()?s.val():0)&&("true"==PuSet.realViews.abbreviation?t.setAttribute("data-text",Pu.abv(s)):t.setAttribute("data-text",s),remCt(t,"hidden")),"true"==t.getAttribute("data-add")&&(t.setAttribute("data-add",!1),s=parseInt(s)+1,e.set(s))}}(a,l))}}Defer((function(){null!=qSel(".isTrans")&&ldJs("https://cdn.jsdelivr.net/gh/tanvir-ul10/finestap@main/GoogleTranslate.min.js","trans-js",!0,"body",(function(){ldCss("https://cdn.jsdelivr.net/gh/tanvir-ul10/finestap@main/GoogleTranslate.min.css","trans-css")}))}),1e3),Defer((function(){"true"==isPost&&(null!=qSel("#rPst")&&ldCss(baseUrl+"/css/RelatedPosts.min.css","rPst-css",(function(){ldJs(baseUrl+"/js/RelatedPosts.min.js","rPst-js",!0,"body")})),null!=qSel("#aChp")&&ldJs(baseUrl+"/js/AutoChapters.min.js","aChp-js",!0,"body"),0<qSell("div.hl pre").length&&ldJs(baseUrl+"/lib/highlight-11.5.0.min.js","hl-js",!0,"body",(function(){qSell("div.hl pre").forEach((t=>{hljs.highlightElement(t)}))})),setTimeout((function(){null!=qSel(".sharethis-inline-reaction-buttons")&&ldJs("https://platform-api.sharethis.com/js/sharethis.js#property=64f01976dc72050019fd5d30&amp;product=inline-reaction-buttons&amp;source=platform","reaction-buttons-js",!0,"body")}),100)),null!=typeof PuSet.license.key&&("true"==isSingleItem&&ldJs(baseUrl+"/js/CopyPreContent.min.js","pre-js",!0,"body"),ldJs(baseUrl+"/js/NoInternetWidget.min.js","noInt-js",!0,"body"),"true"==isSingleItem&&(t=qSell("#postToc, #autoToc"),n=qSell("#postBody h1, #postBody h2, #postBody h3, #postBody h4, #postBody h5, #postBody h6"),0<t.length&&0<n.length&&ldJs(baseUrl+"/js/TableOfContents.min.js","toc-js",!0,"head",(function(){ldCss(baseUrl+"/css/TableOfContents.min.css","toc-css",(function(){null!=qSel("#postToc")&&new TableOfContents({from:qSel("#postBody"),to:qSel("#postToc")}).generateToc(),null!=qSel("#autoToc")&&new TableOfContents({from:qSel("#postBody"),to:qSel("#autoToc")}).generateToc()}))})))),""!=PuSet.realViews.databaseUrl&&ldJs("https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js","fb-app",!0,"head",(function(){ldJs("https://www.gstatic.com/firebasejs/8.4.2/firebase-database.js","fb-db",!0,"head",(function(){var t=qSell(".pu-views"),e={};e.databaseURL=PuSet.realViews.databaseUrl,firebase.initializeApp(e);for(var s=firebase.database(),a=0;a<t.length;a++){var l=t[a],n=l.getAttribute("data-id");(n=s.ref("BlogID_"+blogID+"/PostID_"+n)).once("value",function(t,e){return function(s){0<(s=s.exists()?s.val():0)&&("true"==PuSet.realViews.abbreviation?t.setAttribute("data-text",Pu.abv(s)):t.setAttribute("data-text",s),remCt(t,"hidden")),"true"==t.getAttribute("data-add")&&(t.setAttribute("data-add",!1),s=parseInt(s)+1,e.set(s))}}(l,n))}}))}))}),100);
var lazyJs=!1;window.addEventListener("scroll",(function(){(0!=document.documentElement.scrollTop&&!1===lazyJs||0!=document.body.scrollTop&&!1===lazyJs)&&(null!=qSel("#ckWrap")&&null==Pu.gC("CookiePolicy")&&Defer((function(){ldCss(baseUrl+"/css/CookieConsent.min.css","ck-css",(function(){ldJs(baseUrl+"/js/CookieConsent.min.js","ck-js",!0,"body")}))}),5e3),lazyJs=!0)}),!0);
