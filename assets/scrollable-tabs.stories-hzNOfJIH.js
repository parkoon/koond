import{j as r}from"./jsx-runtime-DWbWqHZ-.js";import{S as n,a as c,b,c as m}from"./scrollable-tabs-CYjqtG_M.js";import"./index-l2PZgWEW.js";import"./index-DljCS17r.js";import"./extends-CF3RwP-h.js";import"./index-R_pdLf0c.js";import"./index-CaNG7YX3.js";import"./index-Qo3TVfqq.js";import"./index-DHKjEIFl.js";import"./cn-DlbhWEP8.js";const j={title:"ui/ScrollableTabs",component:n,tags:["autodocs"]},t=Array.from({length:20}),e=()=>r.jsxs(n,{defaultValue:"5",children:[r.jsx(c,{children:t.map((i,a)=>r.jsxs(b,{value:a.toString(),scrollIntoView:a===5,children:["Tab ",a]},a))}),t.map((i,a)=>r.jsxs(m,{value:a.toString(),children:["Content ",a]},a))]});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var l,o,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <ScrollableTabs defaultValue="5">
      <ScrollableTabsList>
        {tabs.map((_, index) => <ScrollableTabsTrigger key={index} value={index.toString()} scrollIntoView={index === 5}>
            Tab {index}
          </ScrollableTabsTrigger>)}
      </ScrollableTabsList>

      {tabs.map((_, index) => <ScrollableTabsContent key={index} value={index.toString()}>
          Content {index}
        </ScrollableTabsContent>)}
    </ScrollableTabs>;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,j as default};
