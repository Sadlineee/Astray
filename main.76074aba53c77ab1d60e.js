"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[792],{849:(r,e,o)=>{var s=o(848),t=o(540),i=o(338),n=o(976),a=o(767),c=o(581),l=o(594);const d=c.DU`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: ${l.w.fonts.primary};
    background: ${l.w.colors.bg};
    
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${l.w.colors.bg};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${l.w.colors.white};
    }
  }
`,h=()=>{const{pathname:r}=(0,a.zy)();return(0,t.useEffect)((()=>{window.scrollTo(0,0)}),[r]),null},b=c.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`,m=c.Ay.div`
  aspect-ratio: 1 / 1;
  height: 2.5rem;
  border: 3px solid;
  border-color: ${l.w.colors.bg} ${l.w.colors.primary};
  border-radius: 50%;
  animation: rotation 1s infinite;

  @keyframes rotation {
    to { 
      transform: rotate(.5turn) 
    }
  }
`,x=()=>(0,s.jsx)(b,{children:(0,s.jsx)(m,{})}),w=t.lazy((()=>Promise.all([o.e(559),o.e(889)]).then(o.bind(o,889)))),y=({children:r})=>(0,s.jsx)(t.Suspense,Object.assign({fallback:(0,s.jsx)(x,{})},{children:r}));i.createRoot(document.getElementById("root")).render((0,s.jsx)(t.StrictMode,{children:(0,s.jsx)((()=>(0,s.jsxs)(n.Kd,{children:[(0,s.jsx)(d,{}),(0,s.jsx)(h,{}),(0,s.jsx)(a.BV,{children:(0,s.jsx)(a.qh,{path:"/astray",element:(0,s.jsx)(y,{children:(0,s.jsx)(w,{})})})})]})),{})}))},594:(r,e,o)=>{o.d(e,{w:()=>s});const s={colors:{primary:"#86C232",secondary:"#474B4F",secondaryLight:"#6B6E70",bg:"#222629",white:"#FFFFFF",black:"#000000"},fonts:{primary:"Roboto Condensed, sans-serif",secondary:"Staatliches, sans-serif"},media:{small:"(max-width: 599px)"}}}},r=>{r.O(0,[10],(()=>r(r.s=849))),r.O()}]);