"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87599],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),y=o,d=s["".concat(p,".").concat(y)]||s[y]||f[y]||i;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5908:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={sidebar_label:"Configuration.cacheDirectory"},c="Configuration.cacheDirectory property",p={unversionedId:"api/puppeteer.configuration.cachedirectory",id:"version-19.2.2/api/puppeteer.configuration.cachedirectory",title:"Configuration.cacheDirectory property",description:"Defines the directory to be used by Puppeteer for caching.",source:"@site/versioned_docs/version-19.2.2/api/puppeteer.configuration.cachedirectory.md",sourceDirName:"api",slug:"/api/puppeteer.configuration.cachedirectory",permalink:"/api/puppeteer.configuration.cachedirectory",draft:!1,tags:[],version:"19.2.2",frontMatter:{sidebar_label:"Configuration.cacheDirectory"},sidebar:"api",previous:{title:"Configuration.browserRevision",permalink:"/api/puppeteer.configuration.browserrevision"},next:{title:"Configuration.defaultProduct",permalink:"/api/puppeteer.configuration.defaultproduct"}},u={},l=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4}],f={toc:l};function s(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"configurationcachedirectory-property"}),"Configuration.cacheDirectory property"),(0,n.kt)("p",null,"Defines the directory to be used by Puppeteer for caching."),(0,n.kt)("p",null,"Can be overridden by ",(0,n.kt)("inlineCode",{parentName:"p"},"PUPPETEER_CACHE_DIR"),"."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface Configuration {\n  cacheDirectory?: string;\n}\n")),(0,n.kt)("h4",o({},{id:"default-value"}),"Default value:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"path.join(os.homedir(), '.cache', 'puppeteer')")))}s.isMDXComponent=!0}}]);