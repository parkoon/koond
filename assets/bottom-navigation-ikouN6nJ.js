import{c as a}from"./createLucideIcon-WU1Z4LZe.js";import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{r as h}from"./index-l2PZgWEW.js";import{c as n}from"./cn-DlbhWEP8.js";import{M as x}from"./screen-B0xbmWLo.js";/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=a("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=a("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=a("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),c=56,g=({classNames:e,value:d,onChange:i,items:l})=>{const[s,y]=h.useState(0),u=d??s,m=r=>{y(r),i==null||i(r)};return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:c}}),t.jsx("nav",{style:{height:c,maxWidth:x},className:n("fixed bottom-0 left-0 right-0 mx-auto max-w-lg border-t bg-white",e==null?void 0:e.root),children:t.jsx("div",{className:"flex h-full items-center",children:l.map((r,o)=>{const p=o===u;return t.jsxs("button",{className:n("flex flex-1 flex-col items-center justify-center px-2 text-muted-foreground",p&&"text-foreground",e==null?void 0:e.item),onClick:()=>m(o),children:[r.icon,t.jsx("span",{className:n("text-sm",e==null?void 0:e.label),children:r.label})]},r.label+o)})})})]})};g.__docgenInfo={description:"",methods:[],displayName:"BottomNavigation",props:{classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  root?: string
  item?: string
  label?: string
}`,signature:{properties:[{key:"root",value:{name:"string",required:!1}},{key:"item",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}}]}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string
  icon: React.ReactNode
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"NavItem[]"},description:""},value:{required:!1,tsType:{name:"number"},description:""}}};export{g as B,j as C,w as H,q as L};
