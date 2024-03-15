/*! For license information please see 1098c6b7.07a71310.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3533],{3408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(85893),l=n(11151);const s={sidebar_label:"ElementHandle.select"},a="ElementHandle.select() method",i={id:"api/puppeteer.elementhandle.select",title:"ElementHandle.select() method",description:"Triggers a change and input event once all the provided options have been selected. If there's no ` element matching selector`, the method throws an error.",source:"@site/versioned_docs/version-22.5.0/api/puppeteer.elementhandle.select.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.select",permalink:"/api/puppeteer.elementhandle.select",draft:!1,unlisted:!1,tags:[],version:"22.5.0",frontMatter:{sidebar_label:"ElementHandle.select"},sidebar:"api",previous:{title:"ElementHandle.scrollIntoView",permalink:"/api/puppeteer.elementhandle.scrollintoview"},next:{title:"ElementHandle.tap",permalink:"/api/puppeteer.elementhandle.tap"}},o={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandleselect-method",children:"ElementHandle.select() method"}),"\n",(0,r.jsxs)(t.p,{children:["Triggers a ",(0,r.jsx)(t.code,{children:"change"})," and ",(0,r.jsx)(t.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,r.jsx)(t.code,{children:"<select>"})," element matching ",(0,r.jsx)(t.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  select(...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"values"}),(0,r.jsx)(t.td,{children:"string[]"}),(0,r.jsxs)(t.td,{children:["Values of options to select. If the ",(0,r.jsx)("code",{children:"<select>"})," has the ",(0,r.jsx)("code",{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<string[]>"}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"handle.select('blue'); // single selection\nhandle.select('red', 'green', 'blue'); // multiple selections\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,t,n)=>{var r=n(67294),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:l,type:e,key:c,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(67294);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);