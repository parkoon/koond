import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{g as w,c as S,$ as N,a as _,e as k}from"./index-B_Ei7uan.js";import{r as c}from"./index-l2PZgWEW.js";import{c as D}from"./cn-DlbhWEP8.js";import{c as T}from"./createLucideIcon-WU1Z4LZe.js";import{C as I}from"./chevron-down-p_RpVn1G.js";import{C as q}from"./check-DVJNXqNc.js";import"./extends-CF3RwP-h.js";import"./index-R_pdLf0c.js";import"./index-CaNG7YX3.js";import"./index-Qo3TVfqq.js";import"./index-DpBNiyLe.js";/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=T("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),i=({title:o,items:t=[],value:d,onChange:s})=>{var m;const[n,l]=c.useState(!1),[v,x]=c.useState(),u=d||v,g=a=>{x(a),s==null||s(a),l(!1)},h=(m=t.find(a=>a.value===u))==null?void 0:m.label;return e.jsxs(w,{open:n,children:[e.jsxs("button",{onClick:()=>l(!0),className:"flex h-10 w-full select-none items-center justify-between rounded border px-3",children:[h,n?e.jsx(C,{className:"h-4 w-4"}):e.jsx(I,{className:"h-4 w-4"})]}),e.jsxs(S,{children:[e.jsx(N,{className:"fixed inset-0 bg-[rgba(0,0,0,0.1)]",onClick:()=>l(!1)}),e.jsxs(_,{className:"scrollbar-hide fixed left-1/2 top-1/2 z-50 max-h-[50%] w-[calc(100%-4rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-scroll rounded border bg-background duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",children:[o&&e.jsx(k,{className:"mb-4 border-b pb-4 text-center font-semibold",children:"Edit profile"}),e.jsx("div",{className:"flex flex-col px-4",children:t.map((a,j)=>{const y=t.length===j+1,$=a.value===u;return e.jsx(E,{bordered:!y,selected:$,onClick:()=>g(a.value),children:a.label},a.value)})})]})]})]})},E=({selected:o,children:t,bordered:d,onClick:s})=>{const n=c.useRef(null);return c.useEffect(()=>{var l;o&&((l=n.current)==null||l.scrollIntoView({block:"center"}))},[]),e.jsxs("button",{ref:n,onClick:s,className:D("flex w-full items-center justify-between px-2 py-3",d&&"border-b"),children:[t,o&&e.jsx(q,{className:"h-4 w-4 text-primary"})]})};i.__docgenInfo={description:"",methods:[],displayName:"SelectDialog",props:{title:{required:!1,tsType:{name:"string"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: T
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"T",required:!0}}]}}],raw:"SelectItem<T>[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"T"},description:""}}};const K={title:"ui/SelectDialog",component:i,argTypes:{}},r=()=>e.jsx(i,{items:[{label:"1900",value:"1900"},{label:"1901",value:"1901"},{label:"1902",value:"1902"},{label:"1903",value:"1903"},{label:"1904",value:"1904"},{label:"1905",value:"1905"},{label:"1906",value:"1906"},{label:"1907",value:"1907"},{label:"1908",value:"1908"},{label:"1909",value:"1909"},{label:"1910",value:"1910"},{label:"1911",value:"1911"}]});r.__docgenInfo={description:"",methods:[],displayName:"_SelectDialog"};var p,b,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <SelectDialog items={[{
    label: '1900',
    value: '1900'
  }, {
    label: '1901',
    value: '1901'
  }, {
    label: '1902',
    value: '1902'
  }, {
    label: '1903',
    value: '1903'
  }, {
    label: '1904',
    value: '1904'
  }, {
    label: '1905',
    value: '1905'
  }, {
    label: '1906',
    value: '1906'
  }, {
    label: '1907',
    value: '1907'
  }, {
    label: '1908',
    value: '1908'
  }, {
    label: '1909',
    value: '1909'
  }, {
    label: '1910',
    value: '1910'
  }, {
    label: '1911',
    value: '1911'
  }]} />;
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const M=["_SelectDialog"];export{r as _SelectDialog,M as __namedExportsOrder,K as default};
