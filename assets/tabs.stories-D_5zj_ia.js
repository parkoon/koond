import{j as s}from"./jsx-runtime-DWbWqHZ-.js";import{$ as p,a as f,b as u,c as x}from"./index-DljCS17r.js";import{c as o}from"./cn-DlbhWEP8.js";import"./index-l2PZgWEW.js";import"./extends-CF3RwP-h.js";import"./index-R_pdLf0c.js";import"./index-CaNG7YX3.js";import"./index-Qo3TVfqq.js";import"./index-DHKjEIFl.js";const n=({className:t,...e})=>s.jsx(p,{className:t,...e}),b=({className:t,...e})=>s.jsx(f,{className:o("flex overflow-scroll border-b scrollbar-hide focus:outline-none",t),...e}),l=({className:t,...e})=>s.jsx(u,{className:o("flex h-12 flex-1 shrink-0 select-none items-center justify-center border-b-2 border-transparent bg-white px-5 leading-none focus:outline-none focus-visible:outline-none data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=active]:text-primary",t),...e}),m=({className:t,...e})=>s.jsx(x,{className:o("pt-4",t),...e});n.__docgenInfo={description:"",methods:[],displayName:"Tabs"};b.__docgenInfo={description:"",methods:[],displayName:"TabsList"};l.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};m.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const C={title:"ui/Tabs",component:n,tags:["autodocs"]},r=Array.from({length:3}),a=()=>s.jsxs(n,{defaultValue:"0",children:[s.jsx(b,{children:r.map((t,e)=>s.jsxs(l,{value:e.toString(),children:["Tab ",e]},e))}),r.map((t,e)=>s.jsxs(m,{value:e.toString(),children:["Content ",e]},e))]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Tabs defaultValue="0">
      <TabsList>
        {tabs.map((_, index) => <TabsTrigger key={index} value={index.toString()}>
            Tab {index}
          </TabsTrigger>)}
      </TabsList>

      {tabs.map((_, index) => <TabsContent key={index} value={index.toString()}>
          Content {index}
        </TabsContent>)}
    </Tabs>;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const I=["Default"];export{a as Default,I as __namedExportsOrder,C as default};
