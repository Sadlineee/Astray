"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[792],{849:(e,r,s)=>{var o=s(848),t=s(540),n=s(338),i=s(976),a=s(767),l=s(581),c=s(594);const d=l.DU`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: ${c.w.fonts.primary};
    background: ${c.w.colors.bg};
    
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${c.w.colors.bg};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${c.w.colors.white};
    }
  }
`,h=()=>{const{pathname:e}=(0,a.zy)();return(0,t.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},b=l.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`,m=l.Ay.div`
  aspect-ratio: 1 / 1;
  height: 2.5rem;
  border: 3px solid;
  border-color: ${c.w.colors.bg} ${c.w.colors.primary};
  border-radius: 50%;
  animation: rotation 1s infinite;

  @keyframes rotation {
    to { 
      transform: rotate(.5turn) 
    }
  }
`,x=()=>(0,o.jsx)(b,{children:(0,o.jsx)(m,{})}),y=t.lazy((()=>Promise.all([s.e(559),s.e(848)]).then(s.bind(s,467)))),j=t.lazy((()=>Promise.all([s.e(559),s.e(555)]).then(s.bind(s,555)))),w=({children:e})=>(0,o.jsx)(t.Suspense,Object.assign({fallback:(0,o.jsx)(x,{})},{children:e}));n.createRoot(document.getElementById("root")).render((0,o.jsx)(t.StrictMode,{children:(0,o.jsx)((()=>(0,o.jsxs)(i.Kd,{children:[(0,o.jsx)(d,{}),(0,o.jsx)(h,{}),(0,o.jsxs)(a.BV,{children:[(0,o.jsx)(a.qh,{path:"/astray",element:(0,o.jsx)(w,{children:(0,o.jsx)(y,{})})}),(0,o.jsx)(a.qh,{path:"/main",element:(0,o.jsx)(w,{children:(0,o.jsx)(j,{})})})]})]})),{})}))},594:(e,r,s)=>{s.d(r,{w:()=>o});const o={colors:{primary:"#86C232",secondary:"#474B4F",secondaryLight:"#6B6E70",bg:"#222629",white:"#FFFFFF",black:"#000000"},fonts:{primary:"Roboto Condensed, sans-serif",secondary:"Staatliches, sans-serif"},media:{small:"(max-width: 599px)"}}}},e=>{e.O(0,[10],(()=>e(e.s=849))),e.O()}]);