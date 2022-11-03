"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=p,y=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}const o={sidebar_label:"PDFOptions.path"},i="PDFOptions.path property",l={unversionedId:"api/puppeteer.pdfoptions.path",id:"version-19.2.2/api/puppeteer.pdfoptions.path",title:"PDFOptions.path property",description:"The path to save the file to.",source:"@site/versioned_docs/version-19.2.2/api/puppeteer.pdfoptions.path.md",sourceDirName:"api",slug:"/api/puppeteer.pdfoptions.path",permalink:"/api/puppeteer.pdfoptions.path",draft:!1,tags:[],version:"19.2.2",frontMatter:{sidebar_label:"PDFOptions.path"},sidebar:"api",previous:{title:"PDFOptions.pageRanges",permalink:"/api/puppeteer.pdfoptions.pageranges"},next:{title:"PDFOptions.preferCSSPageSize",permalink:"/api/puppeteer.pdfoptions.prefercsspagesize"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4},{value:"Remarks",id:"remarks",level:2}],c={toc:u};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",p({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"pdfoptionspath-property"}),"PDFOptions.path property"),(0,n.kt)("p",null,"The path to save the file to."),(0,n.kt)("h4",p({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"interface PDFOptions {\n  path?: string;\n}\n")),(0,n.kt)("h4",p({},{id:"default-value"}),"Default value:"),(0,n.kt)("p",null,"the empty string, which means the PDF will not be written to disk."),(0,n.kt)("h2",p({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"If the path is relative, it's resolved relative to the current working directory."))}f.isMDXComponent=!0}}]);