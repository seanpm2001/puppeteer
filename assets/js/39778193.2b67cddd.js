"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95145],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={sidebar_label:"HTTPRequest.interceptResolutionState"},a="HTTPRequest.interceptResolutionState() method",u={unversionedId:"api/puppeteer.httprequest.interceptresolutionstate",id:"version-20.1.2/api/puppeteer.httprequest.interceptresolutionstate",title:"HTTPRequest.interceptResolutionState() method",description:"An InterceptResolutionState object describing the current resolution action and priority.",source:"@site/versioned_docs/version-20.1.2/api/puppeteer.httprequest.interceptresolutionstate.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.interceptresolutionstate",permalink:"/api/puppeteer.httprequest.interceptresolutionstate",draft:!1,tags:[],version:"20.1.2",frontMatter:{sidebar_label:"HTTPRequest.interceptResolutionState"},sidebar:"api",previous:{title:"HTTPRequest.initiator",permalink:"/api/puppeteer.httprequest.initiator"},next:{title:"HTTPRequest.isInterceptResolutionHandled",permalink:"/api/puppeteer.httprequest.isinterceptresolutionhandled"}},l={},s=[{value:"Signature:",id:"signature",level:4}],c={toc:s};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"httprequestinterceptresolutionstate-method"}),"HTTPRequest.interceptResolutionState() method"),(0,n.kt)("p",null,"An InterceptResolutionState object describing the current resolution action and priority."),(0,n.kt)("p",null,"InterceptResolutionState contains: action: InterceptResolutionAction priority?: number"),(0,n.kt)("p",null,"InterceptResolutionAction is one of: ",(0,n.kt)("inlineCode",{parentName:"p"},"abort"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"respond"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"continue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"none"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"already-handled"),"."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class HTTPRequest {\n  interceptResolutionState(): InterceptResolutionState;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.interceptresolutionstate"}),"InterceptResolutionState")))}d.isMDXComponent=!0}}]);