import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{a as x,c as w,B as h}from"./button-DGZZeVs5.js";import{r as d}from"./index-l2PZgWEW.js";import{D as s}from"./index-Bi_4TOQs.js";import"./extends-CF3RwP-h.js";import"./index-D_gNkJNg.js";import"./index-CRrTcyWW.js";import"./index-CaNG7YX3.js";/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=x("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),S=d.createContext(void 0),p=()=>{const r=d.useContext(S);if(!r)throw new Error("useScreenDrawer must be used within a ScreenDrawerProvider");return r},o=({className:r,title:n,children:l})=>{const{opened:m,close:u}=p();return e.jsx(s.Root,{dismissible:!1,open:m,noBodyStyles:!0,direction:"right",children:e.jsx(s.Portal,{children:e.jsxs(s.Content,{className:w("fixed inset-x-0 bottom-0 z-50 mt-6 h-full bg-white px-4",r),children:[e.jsxs("div",{className:"flex justify-between py-4",children:[e.jsx("div",{}),e.jsx("h2",{className:"text-lg",children:n}),e.jsx("button",{onClick:u,children:e.jsx(f,{width:20,height:20})})]}),e.jsx("div",{className:"max-w-[44rem] w-full mx-auto",children:l})]})})})};o.__docgenInfo={description:"",methods:[],displayName:"ScreenDrawer",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"ui/ScreenDrawer",component:o,argTypes:{title:{control:"text"}}},t=r=>{const{open:n}=p();return e.jsxs("div",{children:[e.jsx(h,{onClick:n,children:"Open Screen Drawer"}),e.jsx(o,{...r,children:"BOOO"})]})};t.__docgenInfo={description:"",methods:[],displayName:"_ScreenDrawer"};var a,c,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(props: Story["args"]) => {
  const {
    open
  } = useScreenDrawer();
  return <div>
      <Button onClick={open}>Open Screen Drawer</Button>
      <ScreenDrawer {...props}>BOOO</ScreenDrawer>
    </div>;
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const B=["_ScreenDrawer"];export{t as _ScreenDrawer,B as __namedExportsOrder,b as default};
