import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{A as j,c as N,C as v,a as S,b as A}from"./alert-DXJgJA_R.js";import{A as y,a as T,b as I,c as B}from"./app-bar-CA2Rchmy.js";import{a as H}from"./index-BKH8RJsE.js";import{A as R}from"./avatar-BdnXCmt2.js";import{C as _}from"./carousel-BodqhrB9.js";import{H as L}from"./horizontal-scroll-area-t13093uP.js";import{H as C}from"./horizontal-snap-scroll-area-0rX9XRP3.js";import{I as c}from"./icon-button-CjCI6jDV.js";import{I as k}from"./indicator-C2oqRx_B.js";import{S as w}from"./screen-B0xbmWLo.js";import{S as z,a as q,b as t}from"./scrollable-tabs-CYjqtG_M.js";import{c as E}from"./cn-DlbhWEP8.js";import{S as m}from"./separator-2e7DxVNR.js";import{T as D}from"./text-input-CnWAEJHs.js";import{S as $}from"./search-DMGY_H6T.js";import{S as P}from"./shopping-cart-BJ7NHgrA.js";import{c as M}from"./createLucideIcon-WU1Z4LZe.js";import"./index-l2PZgWEW.js";import"./index-Bb4qSo10.js";import"./chevron-right-C3shO24p.js";import"./extends-CF3RwP-h.js";import"./index-Qo3TVfqq.js";import"./index-CaNG7YX3.js";import"./button-CmqSo_T8.js";import"./index-DljCS17r.js";import"./index-R_pdLf0c.js";import"./index-DHKjEIFl.js";/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=M("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),o=({ratio:a=16/9,children:s})=>e.jsx(H,{ratio:a,children:s});o.__docgenInfo={description:"",methods:[],displayName:"AspectRatioImage",props:{ratio:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16 / 9",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const n=({children:a,...s})=>e.jsx("section",{...s,children:a}),l=({title:a,description:s,extra:f,className:g,...b})=>e.jsxs("header",{className:E("mb-4 px-4",g),...b,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h3",{className:"text-xl font-bold",children:a}),f]}),e.jsx("p",{className:"text-muted-foreground",children:s})]}),i=({children:a,...s})=>e.jsx("div",{...s,children:a});n.__docgenInfo={description:"",methods:[],displayName:"Section"};l.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"SectionBody"};const be={title:"blocks/Commerce App"},O=Array.from({length:10}).map((a,s)=>`https://picsum.photos/seed/${s+1}/200`),V=Array.from({length:3}).map((a,s)=>`https://picsum.photos/seed/${s+10}/800`),p=Array.from({length:12}).map((a,s)=>`https://picsum.photos/seed/${s+20}/800`),r=()=>e.jsxs(w,{className:"pb-5",children:[e.jsxs(y,{children:[e.jsx(T,{className:"mr-4 flex-1",children:e.jsx(D,{suffix:e.jsx($,{}),placeholder:"Lorem ipsum dolor sit",className:"w-full rounded-full",filled:!0,readOnly:!0})}),e.jsx(I,{children:e.jsx(P,{})})]}),e.jsx(z,{defaultValue:"recommend",className:"sticky z-10",style:{top:B},children:e.jsxs(q,{children:[e.jsx(t,{value:"recommend",children:"Recommend"}),e.jsx(t,{value:"best",children:"Best"}),e.jsx(t,{value:"event",children:"Event"}),e.jsx(t,{value:"rank",children:"Rank"})]})}),e.jsx(_,{classNames:{root:"mb-3"},autoplay:!0,delay:2e3,children:V.map((a,s)=>e.jsx("img",{src:a,className:"h-[240px] w-full object-cover"},s))}),e.jsx(L,{className:"pt-2",children:O.map((a,s)=>e.jsxs("a",{href:"#",children:[e.jsx(k,{label:"N",disabled:s%3===0,children:e.jsx(R,{src:a,shape:"square",size:64})}),e.jsxs("p",{className:"text-center",children:["Lorem ",s+1]})]},s))}),e.jsx("div",{className:"mt-5 px-4",children:e.jsxs(j,{clickable:!0,children:[e.jsx(N,{children:e.jsx(v,{})}),e.jsx(S,{children:"Lorem ipsum dolor sit"}),e.jsx(A,{children:"reiciendis alias temporibus officia quia"})]})}),e.jsx(m,{size:6,className:"opacity-30"}),e.jsxs(n,{children:[e.jsx(l,{title:"Lorem ipsum",description:"amet consectetur adipisicing elit. Iure ipsum",extra:e.jsx("a",{href:"#",children:"More"})}),e.jsx(i,{children:e.jsx(C,{children:p.map((a,s)=>e.jsxs("div",{children:[e.jsx(o,{children:e.jsxs("div",{className:"relative h-full overflow-hidden rounded",children:[e.jsx("img",{src:a,className:"h-full w-full object-cover"}),e.jsx(c,{icon:e.jsx(d,{className:"text-muted-foreground opacity-80",fill:"var(--muted-foreground)"}),variant:"ghost",className:"absolute bottom-0 right-0"})]})}),e.jsx("p",{className:"leading-tight",children:"Lorem ipsum dolor sit "}),e.jsx("span",{className:"text-sm text-muted-foreground line-through",children:"3,000원"}),e.jsxs("div",{className:"space-x-1 text-lg font-bold",children:[e.jsx("span",{className:"text-orange-400",children:"10%"}),e.jsx("span",{children:"2,990원"})]})]},s))})})]}),e.jsx(m,{size:6,className:"opacity-30"}),e.jsxs(n,{children:[e.jsx(l,{title:"Lorem ipsum",description:"amet consectetur adipisicing elit. Iure ipsum"}),e.jsx(i,{className:"flex flex-col gap-4 px-4",children:p.map((a,s)=>e.jsxs("div",{children:[e.jsx(o,{children:e.jsxs("div",{className:"relative h-full overflow-hidden rounded",children:[e.jsx("img",{src:a,className:"h-full w-full object-cover"}),e.jsx(c,{icon:e.jsx(d,{className:"text-muted-foreground opacity-80",fill:"var(--muted-foreground)"}),variant:"ghost",className:"absolute bottom-0 right-0"})]})}),e.jsx("p",{className:"leading-tight",children:"Lorem ipsum dolor sit "}),e.jsx("span",{className:"text-sm text-muted-foreground line-through",children:"3,000원"}),e.jsxs("div",{className:"space-x-1 text-lg font-bold",children:[e.jsx("span",{className:"text-orange-400",children:"10%"}),e.jsx("span",{children:"2,990원"})]})]},s))})]})]});r.__docgenInfo={description:"",methods:[],displayName:"CommerceApp"};var u,x,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Screen className="pb-5">
      <AppBar>
        <AppBarAction className="mr-4 flex-1">
          <TextInput suffix={<Search />} placeholder="Lorem ipsum dolor sit" className="w-full rounded-full" filled readOnly />
        </AppBarAction>
        <AppBarExtra>
          <ShoppingCartIcon />
        </AppBarExtra>
      </AppBar>

      <ScrollableTabs defaultValue="recommend" className="sticky z-10" style={{
      top: APP_BAR_HEIGHT
    }}>
        <ScrollableTabsList>
          <ScrollableTabsTrigger value="recommend">Recommend</ScrollableTabsTrigger>
          <ScrollableTabsTrigger value="best">Best</ScrollableTabsTrigger>
          <ScrollableTabsTrigger value="event">Event</ScrollableTabsTrigger>
          <ScrollableTabsTrigger value="rank">Rank</ScrollableTabsTrigger>
        </ScrollableTabsList>
      </ScrollableTabs>

      <Carousel classNames={{
      root: 'mb-3'
    }} autoplay delay={2000}>
        {banners.map((src, index) => <img key={index} src={src} className="h-[240px] w-full object-cover" />)}
      </Carousel>
      <HorizontalScrollArea className="pt-2">
        {categories.map((src, index) => <a href="#" key={index}>
            <Indicator label="N" disabled={index % 3 === 0}>
              <Avatar src={src} shape="square" size={64} />
            </Indicator>

            <p className="text-center">Lorem {index + 1}</p>
          </a>)}
      </HorizontalScrollArea>

      <div className="mt-5 px-4">
        <Alert clickable>
          <AlertSlot>
            <CalendarHeart />
          </AlertSlot>
          <AlertTitle>Lorem ipsum dolor sit</AlertTitle>
          <AlertDescription>reiciendis alias temporibus officia quia</AlertDescription>
        </Alert>
      </div>

      <Separator size={6} className="opacity-30" />

      <Section>
        <SectionHeader title="Lorem ipsum" description="amet consectetur adipisicing elit. Iure ipsum" extra={<a href="#">More</a>} />
        <SectionBody>
          <HorizontalSnapScrollArea>
            {products.map((src, index) => <div key={index}>
                <AspectRatio>
                  <div className="relative h-full overflow-hidden rounded">
                    <img src={src} className="h-full w-full object-cover" />
                    <IconButton icon={<Heart className="text-muted-foreground opacity-80" fill="var(--muted-foreground)" />} variant="ghost" className="absolute bottom-0 right-0" />
                  </div>
                </AspectRatio>

                <p className="leading-tight">Lorem ipsum dolor sit </p>
                <span className="text-sm text-muted-foreground line-through">3,000원</span>
                <div className="space-x-1 text-lg font-bold">
                  <span className="text-orange-400">10%</span>
                  <span>2,990원</span>
                </div>
              </div>)}
          </HorizontalSnapScrollArea>
        </SectionBody>
      </Section>

      <Separator size={6} className="opacity-30" />

      <Section>
        <SectionHeader title="Lorem ipsum" description="amet consectetur adipisicing elit. Iure ipsum" />
        <SectionBody className="flex flex-col gap-4 px-4">
          {products.map((src, index) => <div key={index}>
              <AspectRatio>
                <div className="relative h-full overflow-hidden rounded">
                  <img src={src} className="h-full w-full object-cover" />
                  <IconButton icon={<Heart className="text-muted-foreground opacity-80" fill="var(--muted-foreground)" />} variant="ghost" className="absolute bottom-0 right-0" />
                </div>
              </AspectRatio>

              <p className="leading-tight">Lorem ipsum dolor sit </p>
              <span className="text-sm text-muted-foreground line-through">3,000원</span>
              <div className="space-x-1 text-lg font-bold">
                <span className="text-orange-400">10%</span>
                <span>2,990원</span>
              </div>
            </div>)}
        </SectionBody>
      </Section>
    </Screen>;
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const je=["CommerceApp"];export{r as CommerceApp,je as __namedExportsOrder,be as default};
