import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as p}from"./index-l2PZgWEW.js";import{D as t}from"./index-Bi_4TOQs.js";import{c as l,B as u}from"./button-DGZZeVs5.js";import"./index-D_gNkJNg.js";import"./extends-CF3RwP-h.js";import"./index-CRrTcyWW.js";import"./index-CaNG7YX3.js";const r=({className:n,open:s,children:c,onClose:d})=>e.jsx(t.Root,{open:s,onClose:d,noBodyStyles:!0,children:e.jsxs(t.Portal,{children:[e.jsx(t.Overlay,{className:"fixed inset-0 z-50 bg-black/30"}),e.jsxs(t.Content,{className:l("fixed inset-x-0 bottom-0 z-50 mt-24 h-[96%] rounded-t bg-white px-4",n),children:[e.jsx(t.Handle,{className:"bg-black/10 mt-3 mb-6"}),e.jsx("div",{className:"max-w-[44rem] w-full mx-auto",children:c})]})]})});r.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};const _={title:"ui/BottomSheet",component:r},o=()=>{const[n,s]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(u,{onClick:()=>s(!0),children:"Open BottomSheet"}),e.jsx(r,{open:n,onClose:()=>s(!1),children:"BOOO"})]})};o.__docgenInfo={description:"",methods:[],displayName:"_BottomSheet"};var a,m,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [open, setOpened] = useState(false);
  return <div>
      <Button onClick={() => setOpened(true)}>Open BottomSheet</Button>
      <BottomSheet open={open} onClose={() => setOpened(false)}>
        BOOO
      </BottomSheet>
    </div>;
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const b=["_BottomSheet"];export{o as _BottomSheet,b as __namedExportsOrder,_ as default};
