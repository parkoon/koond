import{r as f}from"./index-CEThVCg_.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=f,y=Symbol.for("react.element"),R=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,E=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function m(t,e,p){var r,o={},a=null,c=null;p!==void 0&&(a=""+p),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)v.call(e,r)&&!O.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:y,type:t,key:a,ref:c,props:o,_owner:E.current}}s.Fragment=R;s.jsx=m;s.jsxs=m;l.exports=s;var h=l.exports;const _=({children:t})=>h.jsx("button",{className:"inline-flex border py-2 px-4 text-sm rounded-full",children:t});_.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const b={title:"UI",component:_},n={args:{children:"로그인"}};var u,d,i;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "로그인"
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const j=["_Button"];export{n as _Button,j as __namedExportsOrder,b as default};
