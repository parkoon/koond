import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{B as u}from"./button-CmqSo_T8.js";import{r as d}from"./index-l2PZgWEW.js";import{D as o}from"./index-B0A3nGF4.js";import{c as w}from"./cn-DlbhWEP8.js";import{c as h}from"./createLucideIcon-WU1Z4LZe.js";import"./index-Bb4qSo10.js";import"./index-B_Ei7uan.js";import"./extends-CF3RwP-h.js";import"./index-R_pdLf0c.js";import"./index-CaNG7YX3.js";import"./index-Qo3TVfqq.js";import"./index-DpBNiyLe.js";/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=h("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),S=d.createContext(void 0),p=()=>{const r=d.useContext(S);if(!r)throw new Error("useScreenDrawer must be used within a ScreenDrawerProvider");return r},s=({className:r,title:n,children:m})=>{const{opened:l,close:x}=p();return e.jsx(o.Root,{dismissible:!1,open:l,noBodyStyles:!0,direction:"right",children:e.jsx(o.Portal,{children:e.jsxs(o.Content,{className:w("fixed inset-x-0 bottom-0 z-50 mt-6 h-full bg-white px-4",r),children:[e.jsxs("div",{className:"mx-auto flex max-w-lg justify-between py-4",children:[e.jsx("div",{}),e.jsx("h2",{className:"text-lg",children:n}),e.jsx("button",{onClick:x,children:e.jsx(f,{width:20,height:20})})]}),e.jsx("div",{className:"mx-auto w-full max-w-lg",children:m})]})})})};s.__docgenInfo={description:"",methods:[],displayName:"ScreenDrawer",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"ui/ScreenDrawer",component:s,argTypes:{title:{control:"text"}}},t=r=>{const{open:n}=p();return e.jsxs("div",{children:[e.jsx(u,{onClick:n,children:"Open Screen Drawer"}),e.jsx(s,{...r,children:"BOOO"})]})};t.__docgenInfo={description:"",methods:[],displayName:"_ScreenDrawer"};var a,c,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(props: Story["args"]) => {
  const {
    open
  } = useScreenDrawer();
  return <div>
      <Button onClick={open}>Open Screen Drawer</Button>
      <ScreenDrawer {...props}>BOOO</ScreenDrawer>
    </div>;
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const T=["_ScreenDrawer"];export{t as _ScreenDrawer,T as __namedExportsOrder,E as default};
