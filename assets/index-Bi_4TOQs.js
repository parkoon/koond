import{$ as ct,a as ft,b as dt,c as mt,d as ht,e as wt,f as gt,g as pt}from"./index-D_gNkJNg.js";import{R as r,r as Se}from"./index-l2PZgWEW.js";function vt(e){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}const _e=r.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,handleOnly:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{},direction:"bottom"}),de=()=>{const e=r.useContext(_e);if(!e)throw new Error("useDrawerContext must be used within a Drawer.Root");return e};vt("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");const bt=typeof window<"u"?Se.useLayoutEffect:Se.useEffect;function De(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}function yt(){return $e(/^Mac/)}function Et(){return $e(/^iPhone/)}function St(){return $e(/^iPad/)||yt()&&navigator.maxTouchPoints>1}function Ve(){return Et()||St()}function $e(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.platform):void 0}const be=typeof document<"u"&&window.visualViewport;function He(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function We(e){for(He(e)&&(e=e.parentElement);e&&!He(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}const Dt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let se=0,ye;function Tt(e={}){let{isDisabled:n}=e;bt(()=>{if(!n)return se++,se===1&&(Ve()?ye=Rt():ye=$t()),()=>{se--,se===0&&ye()}},[n])}function $t(){return De(ke(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`))}function Rt(){let e,n=0,t=g=>{e=We(g.target),!(e===document.documentElement&&e===document.body)&&(n=g.changedTouches[0].pageY)},l=g=>{if(!e||e===document.documentElement||e===document.body){g.preventDefault();return}let d=g.changedTouches[0].pageY,c=e.scrollTop,N=e.scrollHeight-e.clientHeight;N!==0&&((c<=0&&d>n||c>=N&&d<n)&&g.preventDefault(),n=d)},i=g=>{let d=g.target;Te(d)&&d!==document.activeElement&&(g.preventDefault(),d.style.transform="translateY(-2000px)",d.focus(),requestAnimationFrame(()=>{d.style.transform=""}))},a=g=>{let d=g.target;Te(d)&&(d.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{d.style.transform="",be&&(be.height<window.innerHeight?requestAnimationFrame(()=>{Pe(d)}):be.addEventListener("resize",()=>Pe(d),{once:!0}))}))},s=()=>{window.scrollTo(0,0)},h=window.pageXOffset,y=window.pageYOffset,T=De(ke(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let M=De(ne(document,"touchstart",t,{passive:!1,capture:!0}),ne(document,"touchmove",l,{passive:!1,capture:!0}),ne(document,"touchend",i,{passive:!1,capture:!0}),ne(document,"focus",a,!0),ne(window,"scroll",s));return()=>{T(),M(),window.scrollTo(h,y)}}function ke(e,n,t){let l=e.style[n];return e.style[n]=t,()=>{e.style[n]=l}}function ne(e,n,t,l){return e.addEventListener(n,t,l),()=>{e.removeEventListener(n,t,l)}}function Pe(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=We(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let l=t.getBoundingClientRect().top,i=e.getBoundingClientRect().top,a=e.getBoundingClientRect().bottom;const s=t.getBoundingClientRect().bottom;a>s&&(t.scrollTop+=i-l)}e=t.parentElement}}function Te(e){return e instanceof HTMLInputElement&&!Dt.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function xt(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Ot(...e){return n=>e.forEach(t=>xt(t,n))}function ze(...e){return Se.useCallback(Ot(...e),e)}let re=null;function Ct({isOpen:e,modal:n,nested:t,hasBeenOpened:l,preventScrollRestoration:i,noBodyStyles:a}){const[s,h]=r.useState(()=>typeof window<"u"?window.location.href:""),y=r.useRef(0),T=r.useCallback(()=>{if(re===null&&e&&!a){re={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};const{scrollX:g,innerHeight:d}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:`${-y.current}px`,left:`${-g}px`,right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{const c=d-window.innerHeight;c&&y.current>=d&&(document.body.style.top=`${-(y.current+c)}px`)}),300)}},[e]),M=r.useCallback(()=>{if(re!==null&&!a){const g=-parseInt(document.body.style.top,10),d=-parseInt(document.body.style.left,10);Object.assign(document.body.style,re),window.requestAnimationFrame(()=>{if(i&&s!==window.location.href){h(window.location.href);return}window.scrollTo(d,g)}),re=null}},[s]);return r.useEffect(()=>{function g(){y.current=window.scrollY}return g(),window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}},[]),r.useEffect(()=>{t||!l||(e?(!window.matchMedia("(display-mode: standalone)").matches&&T(),n||window.setTimeout(()=>{M()},500)):M())},[e,l,s,n,t,T,M]),{restorePositionSetting:M}}const je=new WeakMap;function S(e,n,t=!1){if(!e||!(e instanceof HTMLElement))return;let l={};Object.entries(n).forEach(([i,a])=>{if(i.startsWith("--")){e.style.setProperty(i,a);return}l[i]=e.style[i],e.style[i]=a}),!t&&je.set(e,l)}function ce(e,n){if(!e||!(e instanceof HTMLElement))return;let t=je.get(e);t&&(n?e.style[n]=t[n]:Object.entries(t).forEach(([l,i])=>{e.style[l]=i}))}const A=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function fe(e,n){if(!e)return null;const t=window.getComputedStyle(e),l=t.transform||t.webkitTransform||t.mozTransform;let i=l.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[A(n)?13:12]):(i=l.match(/^matrix\((.+)\)$/),i?parseFloat(i[1].split(", ")[A(n)?5:4]):null)}function At(e){return 8*(Math.log(e+1)-2)}const E={DURATION:.5,EASE:[.32,.72,0,1]},Be=.4;function Ye(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>n.current==null?void 0:n.current.call(n,...t),[])}function Mt({defaultProp:e,onChange:n}){const t=r.useState(e),[l]=t,i=r.useRef(l),a=Ye(n);return r.useEffect(()=>{i.current!==l&&(a(l),i.current=l)},[l,i,a]),t}function It({prop:e,defaultProp:n,onChange:t=()=>{}}){const[l,i]=Mt({defaultProp:n,onChange:t}),a=e!==void 0,s=a?e:l,h=Ye(t),y=r.useCallback(T=>{if(a){const g=typeof T=="function"?T(e):T;g!==e&&h(g)}else i(T)},[a,e,i,h]);return[s,y]}function Nt({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:l,overlayRef:i,fadeFromIndex:a,onSnapPointChange:s,direction:h="bottom"}){const[y,T]=It({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),M=r.useMemo(()=>y===(t==null?void 0:t[t.length-1])||null,[t,y]),g=t&&t.length>0&&(a||a===0)&&!Number.isNaN(a)&&t[a]===y||!t,d=r.useMemo(()=>t==null?void 0:t.findIndex(v=>v===y),[t,y]),c=r.useMemo(()=>{var v;return(v=t==null?void 0:t.map(o=>{const b=typeof window<"u",x=typeof o=="string";let O=0;if(x&&(O=parseInt(o,10)),A(h)){const f=x?O:b?o*window.innerHeight:0;return b?h==="bottom"?window.innerHeight-f:-window.innerHeight+f:f}const $=x?O:b?o*window.innerWidth:0;return b?h==="right"?window.innerWidth-$:-window.innerWidth+$:$}))!=null?v:[]},[t]),N=r.useMemo(()=>d!==null?c==null?void 0:c[d]:null,[c,d]),I=r.useCallback(v=>{var o;const b=(o=c==null?void 0:c.findIndex(x=>x===v))!=null?o:null;s(b),S(l.current,{transition:`transform ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`,transform:A(h)?`translate3d(0, ${v}px, 0)`:`translate3d(${v}px, 0, 0)`}),c&&b!==c.length-1&&b!==a?S(i.current,{transition:`opacity ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`,opacity:"0"}):S(i.current,{transition:`opacity ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`,opacity:"1"}),T(b!==null?t==null?void 0:t[b]:null)},[l.current,t,c,a,i,T]);r.useEffect(()=>{if(y||e){var v;const o=(v=t==null?void 0:t.findIndex(b=>b===e||b===y))!=null?v:-1;c&&o!==-1&&typeof c[o]=="number"&&I(c[o])}},[y,e,t,c,I]);function B({draggedDistance:v,closeDrawer:o,velocity:b,dismissible:x}){if(a===void 0)return;const O=h==="bottom"||h==="right"?(N??0)-v:(N??0)+v,$=d===a-1,f=d===0,H=v>0;if($&&S(i.current,{transition:`opacity ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`}),b>2&&!H){x?o():I(c[0]);return}if(b>2&&H&&c&&t){I(c[t.length-1]);return}const V=c==null?void 0:c.reduce((P,k)=>typeof P!="number"||typeof k!="number"?P:Math.abs(k-O)<Math.abs(P-O)?k:P),L=A(h)?window.innerHeight:window.innerWidth;if(b>Be&&Math.abs(v)<L*.4){const P=H?1:-1;if(P>0&&M){I(c[t.length-1]);return}if(f&&P<0&&x&&o(),d===null)return;I(c[d+P]);return}I(V)}function _({draggedDistance:v}){if(N===null)return;const o=h==="bottom"||h==="right"?N-v:N+v;(h==="bottom"||h==="right")&&o<c[c.length-1]||(h==="top"||h==="left")&&o>c[c.length-1]||S(l.current,{transform:A(h)?`translate3d(0, ${o}px, 0)`:`translate3d(${o}px, 0, 0)`})}function z(v,o){if(!t||typeof d!="number"||!c||a===void 0)return null;const b=d===a-1;if(d>=a&&o)return 0;if(b&&!o)return 1;if(!g&&!b)return null;const O=b?d+1:d-1,$=b?c[O]-c[O-1]:c[O+1]-c[O],f=v/Math.abs($);return b?1-f:f}return{isLastSnapPoint:M,activeSnapPoint:y,shouldFade:g,getPercentageDragged:z,setActiveSnapPoint:T,activeSnapPointIndex:d,onRelease:B,onDrag:_,snapPointsOffset:c}}const Ht=.25,Pt=100,Le=8,q=16,Ue=26,Ee="vaul-dragging";function Fe({open:e,onOpenChange:n,children:t,shouldScaleBackground:l,onDrag:i,onRelease:a,snapPoints:s,nested:h=!1,setBackgroundColorOnScale:y=!0,closeThreshold:T=Ht,scrollLockTimeout:M=Pt,dismissible:g=!0,handleOnly:d=!1,fadeFromIndex:c=s&&s.length-1,activeSnapPoint:N,setActiveSnapPoint:I,fixed:B,modal:_=!0,onClose:z,noBodyStyles:v,direction:o="bottom",preventScrollRestoration:b=!0,disablePreventScroll:x=!1}){var O;const[$=!1,f]=r.useState(!1),[H,V]=r.useState(!1),[L,P]=r.useState(!1),[k,oe]=r.useState(!1),[Y,me]=r.useState(!1),[Ke,Re]=r.useState(!1),F=r.useRef(null),ie=r.useRef(null),he=r.useRef(null),we=r.useRef(null),Q=r.useRef(null),Z=r.useRef(!1),ge=r.useRef(null),pe=r.useRef(0),G=r.useRef(!1),xe=r.useRef(0),m=r.useRef(null),Oe=r.useRef(((O=m.current)==null?void 0:O.getBoundingClientRect().height)||0),ve=r.useRef(0),Je=r.useCallback(u=>{s&&u===te.length-1&&(ie.current=new Date)},[]),{activeSnapPoint:Qe,activeSnapPointIndex:ee,setActiveSnapPoint:Ce,onRelease:Ze,snapPointsOffset:te,onDrag:et,shouldFade:Ae,getPercentageDragged:tt}=Nt({snapPoints:s,activeSnapPointProp:N,setActiveSnapPointProp:I,drawerRef:m,fadeFromIndex:c,overlayRef:F,onSnapPointChange:Je,direction:o});Tt({isDisabled:!$||Y||!_||Ke||!H||x});const{restorePositionSetting:nt}=Ct({isOpen:$,modal:_,nested:h,hasBeenOpened:H,preventScrollRestoration:b,noBodyStyles:v});function K(){return(window.innerWidth-Ue)/window.innerWidth}function rt(u){var w;!g&&!s||m.current&&!m.current.contains(u.target)||(Oe.current=((w=m.current)==null?void 0:w.getBoundingClientRect().height)||0,me(!0),he.current=new Date,Ve()&&window.addEventListener("touchend",()=>Z.current=!1,{once:!0}),u.target.setPointerCapture(u.pointerId),pe.current=A(o)?u.clientY:u.clientX)}function Me(u,w){var D;let p=u;const R=(D=window.getSelection())==null?void 0:D.toString(),C=m.current?fe(m.current,o):null,U=new Date;if(p.hasAttribute("data-vaul-no-drag")||p.closest("[data-vaul-no-drag]"))return!1;if(o==="right"||o==="left")return!0;if(ie.current&&U.getTime()-ie.current.getTime()<500)return!1;if(C!==null&&(o==="bottom"?C>0:C<0))return!0;if(R&&R.length>0)return!1;if(Q.current&&U.getTime()-Q.current.getTime()<M&&C===0||w)return Q.current=U,!1;for(;p;){if(p.scrollHeight>p.clientHeight){if(p.scrollTop!==0)return Q.current=new Date,!1;if(p.getAttribute("role")==="dialog")return!0}p=p.parentNode}return!0}function ot(u){if(m.current&&Y){const w=o==="bottom"||o==="right"?1:-1,D=(pe.current-(A(o)?u.clientY:u.clientX))*w,p=D>0,R=s&&!g&&!p;if(R&&ee===0)return;const C=Math.abs(D),U=document.querySelector("[vaul-drawer-wrapper]");let W=C/Oe.current;const j=tt(C,p);if(j!==null&&(W=j),R&&W>=1||!Z.current&&!Me(u.target,p))return;if(m.current.classList.add(Ee),Z.current=!0,S(m.current,{transition:"none"}),S(F.current,{transition:"none"}),s&&et({draggedDistance:D}),p&&!s){const X=At(D),ue=Math.min(X*-1,0)*w;S(m.current,{transform:A(o)?`translate3d(0, ${ue}px, 0)`:`translate3d(${ue}px, 0, 0)`});return}const le=1-W;if((Ae||c&&ee===c-1)&&(i==null||i(u,W),S(F.current,{opacity:`${le}`,transition:"none"},!0)),U&&F.current&&l){const X=Math.min(K()+W*(1-K()),1),ue=8-W*8,Ne=Math.max(0,14-W*14);S(U,{borderRadius:`${ue}px`,transform:A(o)?`scale(${X}) translate3d(0, ${Ne}px, 0)`:`scale(${X}) translate3d(${Ne}px, 0, 0)`,transition:"none"},!0)}if(!s){const X=C*w;S(m.current,{transform:A(o)?`translate3d(0, ${X}px, 0)`:`translate3d(${X}px, 0, 0)`})}}}r.useEffect(()=>()=>{ae(!1),nt()},[]),r.useEffect(()=>{var u;function w(){if(!m.current)return;const D=document.activeElement;if(Te(D)||G.current){var p;const R=((p=window.visualViewport)==null?void 0:p.height)||0;let C=window.innerHeight-R;const U=m.current.getBoundingClientRect().height||0;ve.current||(ve.current=U);const W=m.current.getBoundingClientRect().top;if(Math.abs(xe.current-C)>60&&(G.current=!G.current),s&&s.length>0&&te&&ee){const j=te[ee]||0;C+=j}if(xe.current=C,U>R||G.current){const j=m.current.getBoundingClientRect().height;let le=j;j>R&&(le=R-Ue),B?m.current.style.height=`${j-Math.max(C,0)}px`:m.current.style.height=`${Math.max(le,R-W)}px`}else m.current.style.height=`${ve.current}px`;s&&s.length>0&&!G.current?m.current.style.bottom="0px":m.current.style.bottom=`${Math.max(C,0)}px`}}return(u=window.visualViewport)==null||u.addEventListener("resize",w),()=>{var D;return(D=window.visualViewport)==null?void 0:D.removeEventListener("resize",w)}},[ee,s,te]);function J(){m.current&&(it(),z==null||z(),S(m.current,{transform:A(o)?`translate3d(0, ${o==="bottom"?"100%":"-100%"}, 0)`:`translate3d(${o==="right"?"100%":"-100%"}, 0, 0)`,transition:`transform ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`}),S(F.current,{opacity:"0",transition:`opacity ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`}),ae(!1),setTimeout(()=>{P(!1),f(!1)},300),setTimeout(()=>{s&&Ce(s[0])},E.DURATION*1e3))}r.useEffect(()=>{if(!$&&l){const u=setTimeout(()=>{ce(document.body)},200);return()=>clearTimeout(u)}},[$,l]),r.useLayoutEffect(()=>{e?(f(!0),V(!0)):J()},[e]),r.useEffect(()=>{k&&(n==null||n($))},[$]),r.useEffect(()=>{oe(!0)},[]);function Ie(){if(!m.current)return;const u=document.querySelector("[vaul-drawer-wrapper]"),w=fe(m.current,o);S(m.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`}),S(F.current,{transition:`opacity ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`,opacity:"1"}),l&&w&&w>0&&$&&S(u,{borderRadius:`${Le}px`,overflow:"hidden",...A(o)?{transform:`scale(${K()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${K()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${E.DURATION}s`,transitionTimingFunction:`cubic-bezier(${E.EASE.join(",")})`},!0)}function it(){!Y||!m.current||(m.current.classList.remove(Ee),Z.current=!1,me(!1),we.current=new Date)}function at(u){if(!Y||!m.current)return;m.current.classList.remove(Ee),Z.current=!1,me(!1),we.current=new Date;const w=fe(m.current,o);if(!Me(u.target,!1)||!w||Number.isNaN(w)||he.current===null)return;const D=we.current.getTime()-he.current.getTime(),p=pe.current-(A(o)?u.clientY:u.clientX),R=Math.abs(p)/D;if(R>.05&&(Re(!0),setTimeout(()=>{Re(!1)},200)),s){Ze({draggedDistance:p*(o==="bottom"||o==="right"?1:-1),closeDrawer:J,velocity:R,dismissible:g}),a==null||a(u,!0);return}if(o==="bottom"||o==="right"?p>0:p<0){Ie(),a==null||a(u,!0);return}if(R>Be){J(),a==null||a(u,!1);return}var C;const U=Math.min((C=m.current.getBoundingClientRect().height)!=null?C:0,window.innerHeight);if(w>=U*T){J(),a==null||a(u,!1);return}a==null||a(u,!0),Ie()}r.useEffect(()=>{$&&(S(document.documentElement,{scrollBehavior:"auto"}),ie.current=new Date,ae(!0))},[$]),r.useEffect(()=>{if(m.current&&L){var u;const w=m==null||(u=m.current)==null?void 0:u.querySelectorAll("*");w==null||w.forEach(D=>{const p=D;(p.scrollHeight>p.clientHeight||p.scrollWidth>p.clientWidth)&&p.classList.add("vaul-scrollable")})}},[L]);function ae(u){const w=document.querySelector("[vaul-drawer-wrapper]");!w||!l||(u?(y&&(v||(S(document.body,{background:document.body.style.backgroundColor||document.body.style.background}),S(document.body,{background:"black"},!0))),S(w,{borderRadius:`${Le}px`,overflow:"hidden",...A(o)?{transform:`scale(${K()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${K()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${E.DURATION}s`,transitionTimingFunction:`cubic-bezier(${E.EASE.join(",")})`})):(ce(w,"overflow"),ce(w,"transform"),ce(w,"borderRadius"),S(w,{transitionProperty:"transform, border-radius",transitionDuration:`${E.DURATION}s`,transitionTimingFunction:`cubic-bezier(${E.EASE.join(",")})`})))}function lt(u){const w=u?(window.innerWidth-q)/window.innerWidth:1,D=u?-q:0;ge.current&&window.clearTimeout(ge.current),S(m.current,{transition:`transform ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`,transform:`scale(${w}) translate3d(0, ${D}px, 0)`}),!u&&m.current&&(ge.current=setTimeout(()=>{const p=fe(m.current,o);S(m.current,{transition:"none",transform:A(o)?`translate3d(0, ${p}px, 0)`:`translate3d(${p}px, 0, 0)`})},500))}function ut(u,w){if(w<0)return;const D=A(o)?window.innerHeight:window.innerWidth,p=(D-q)/D,R=p+w*(1-p),C=-q+w*q;S(m.current,{transform:A(o)?`scale(${R}) translate3d(0, ${C}px, 0)`:`scale(${R}) translate3d(${C}px, 0, 0)`,transition:"none"})}function st(u,w){const D=A(o)?window.innerHeight:window.innerWidth,p=w?(D-q)/D:1,R=w?-q:0;w&&S(m.current,{transition:`transform ${E.DURATION}s cubic-bezier(${E.EASE.join(",")})`,transform:A(o)?`scale(${p}) translate3d(0, ${R}px, 0)`:`scale(${p}) translate3d(${R}px, 0, 0)`})}return r.createElement(pt,{modal:_,onOpenChange:u=>{if(e!==void 0){n==null||n(u);return}u?(V(!0),f(u)):J()},open:$},r.createElement(_e.Provider,{value:{visible:L,activeSnapPoint:Qe,snapPoints:s,setActiveSnapPoint:Ce,drawerRef:m,overlayRef:F,scaleBackground:ae,onOpenChange:n,onPress:rt,setVisible:P,onRelease:at,onDrag:ot,dismissible:g,handleOnly:d,isOpen:$,isDragging:Y,shouldFade:Ae,closeDrawer:J,onNestedDrag:ut,onNestedOpenChange:lt,onNestedRelease:st,keyboardIsOpen:G,openProp:e,modal:_,snapPointsOffset:te,direction:o}},t))}const Lt=250,Ut=120,Xe=r.forwardRef(function({preventCycle:e=!1,children:n,...t},l){const{visible:i,closeDrawer:a,isDragging:s,snapPoints:h,activeSnapPoint:y,setActiveSnapPoint:T,dismissible:M,handleOnly:g,onPress:d,onDrag:c}=de(),N=r.useRef(null),I=r.useRef(!1);function B(){if(I.current){v();return}window.setTimeout(()=>{_()},Ut)}function _(){if(s||e||I.current){v();return}if(v(),(!h||h.length===0)&&M){a();return}if(y===h[h.length-1]&&M){a();return}const b=h.findIndex(O=>O===y);if(b===-1)return;const x=h[b+1];T(x)}function z(){N.current=window.setTimeout(()=>{I.current=!0},Lt)}function v(){window.clearTimeout(N.current),I.current=!1}return r.createElement("div",{onClick:B,onDoubleClick:()=>{I.current=!0,a()},onPointerCancel:v,onPointerDown:o=>{g&&d(o),z()},onPointerMove:o=>{g&&c(o)},ref:l,"vaul-drawer-visible":i?"true":"false","vaul-handle":"","aria-hidden":"true",...t},r.createElement("span",{"vaul-handle-hitarea":"","aria-hidden":"true"},n))});Xe.displayName="Drawer.Handle";const qe=r.forwardRef(function({children:e,...n},t){const{overlayRef:l,snapPoints:i,onRelease:a,shouldFade:s,isOpen:h,visible:y}=de(),T=ze(t,l),M=i&&i.length>0;return r.createElement(ct,{onMouseUp:a,ref:T,"vaul-drawer-visible":y?"true":"false","vaul-overlay":"","vaul-snap-points":h&&M?"true":"false","vaul-snap-points-overlay":h&&s?"true":"false",...n})});qe.displayName="Drawer.Overlay";const Ge=r.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:n,onAnimationEnd:t,style:l,...i},a){const{drawerRef:s,onPress:h,onRelease:y,onDrag:T,dismissible:M,keyboardIsOpen:g,snapPointsOffset:d,visible:c,closeDrawer:N,modal:I,openProp:B,onOpenChange:_,setVisible:z,handleOnly:v,direction:o}=de(),b=ze(a,s),x=r.useRef(null),O=r.useRef(!1),$=(f,H,V=0)=>{if(O.current)return!0;const L=Math.abs(f.y),P=Math.abs(f.x),k=P>L,oe=["bottom","right"].includes(H)?1:-1;if(H==="left"||H==="right"){if(!(f.x*oe<0)&&P>=0&&P<=V)return k}else if(!(f.y*oe<0)&&L>=0&&L<=V)return!k;return O.current=!0,!0};return r.useEffect(()=>{z(!0)},[]),r.createElement(ft,{"vaul-drawer":"","vaul-drawer-direction":o,"vaul-drawer-visible":c?"true":"false",...i,ref:b,style:d&&d.length>0?{"--snap-point-height":`${d[0]}px`,...l}:l,onOpenAutoFocus:f=>{if(e)e(f);else{var H;f.preventDefault(),(H=s.current)==null||H.focus()}},onPointerDown:f=>{v||(i.onPointerDown==null||i.onPointerDown.call(i,f),x.current={x:f.clientX,y:f.clientY},h(f))},onPointerDownOutside:f=>{if(n==null||n(f),!I||f.defaultPrevented){f.preventDefault();return}g.current&&(g.current=!1),f.preventDefault(),_==null||_(!1),!(!M||B!==void 0)&&N()},onFocusOutside:f=>{if(!I){f.preventDefault();return}},onEscapeKeyDown:f=>{if(!I){f.preventDefault();return}},onPointerMove:f=>{if(v||(i.onPointerMove==null||i.onPointerMove.call(i,f),!x.current))return;const H=f.clientY-x.current.y,V=f.clientX-x.current.x,L=f.pointerType==="touch"?10:2;$({x:V,y:H},o,L)?T(f):(Math.abs(V)>L||Math.abs(H)>L)&&(x.current=null)},onPointerUp:f=>{i.onPointerUp==null||i.onPointerUp.call(i,f),x.current=null,O.current=!1,y(f)}})});Ge.displayName="Drawer.Content";function _t({onDrag:e,onOpenChange:n,...t}){const{onNestedDrag:l,onNestedOpenChange:i,onNestedRelease:a}=de();if(!l)throw new Error("Drawer.NestedRoot must be placed in another drawer");return r.createElement(Fe,{nested:!0,onClose:()=>{i(!1)},onDrag:(s,h)=>{l(s,h),e==null||e(s,h)},onOpenChange:s=>{s&&i(s),n==null||n(s)},onRelease:a,...t})}const kt={Root:Fe,NestedRoot:_t,Content:Ge,Handle:Xe,Overlay:qe,Trigger:dt,Portal:mt,Close:ht,Title:wt,Description:gt};export{kt as D};
