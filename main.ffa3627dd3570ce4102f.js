"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[792],{89:(t,e,a)=>{var i=a(848),s=a(540),n=a(338),r=a(976),o=a(767),c=a(581),l=a(594);const d=c.DU`
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
`,g=()=>{const{pathname:t}=(0,o.zy)();return(0,s.useEffect)((()=>{window.scrollTo(0,0)}),[t]),null},m=c.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`,h=c.Ay.div`
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
`,p=()=>(0,i.jsx)(m,{children:(0,i.jsx)(h,{})}),b=[{id:1,image:a.p+"src/assets/images/cities/London/attractions/Buckingham_Palace/1.jpg",title:"Букингемский дворец",translate:"Buckingham Palace",rating:4.5},{id:2,image:a.p+"src/assets/images/cities/London/attractions/Tower_Bridge/3.jpg",title:"Тауэрский мост",translate:"Tower Bridge",rating:4.8},{id:3,image:a.p+"src/assets/images/cities/London/attractions/British_Museum/4.jpg",title:"Британский музей",translate:"British Museum",rating:4.7},{id:4,image:a.p+"src/assets/images/cities/London/attractions/Palace_of_Westminster/4.jpg",title:"Вестминстерский дворец",translate:"Palace of Westminster",rating:4.6},{id:5,image:a.p+"src/assets/images/cities/London/attractions/Tower_of_London/4.jpg",title:"Лондонский Тауэр",translate:"Tower of London",rating:4.6},{id:6,image:a.p+"src/assets/images/cities/London/attractions/Hyde_Park/4.jpg",title:"Гайд-парк",translate:"Hyde Park",rating:4.7},{id:7,image:a.p+"src/assets/images/cities/London/attractions/London_Eye/3.jpg",title:"Лондонский глаз",translate:"London Eye",rating:4.5},{id:8,image:a.p+"src/assets/images/cities/London/attractions/National_Gallery/2.jpg",title:"Национальная галерея",translate:"National Gallery",rating:4.8}],j=[{id:1,image:a.p+"src/assets/images/cities/Rio_de_Janeiro/attractions/Christ_the_Redeemer/3.jpg",title:"Статуя Христа-Искупителя",translate:"Christ the Redeemer",rating:4.8},{id:2,image:a.p+"src/assets/images/cities/Rio_de_Janeiro/attractions/Copacabana_Beach/2.jpg",title:"Копакабана",translate:"Copacabana Beach",rating:4.5}],y=(0,s.lazy)((()=>Promise.all([a.e(197),a.e(848)]).then(a.bind(a,467)))),x=(0,s.lazy)((()=>Promise.all([a.e(197),a.e(834)]).then(a.bind(a,834)))),u=(0,s.lazy)((()=>Promise.all([a.e(197),a.e(512),a.e(444)]).then(a.bind(a,444)))),w=({children:t})=>(0,i.jsx)(s.Suspense,Object.assign({fallback:(0,i.jsx)(p,{})},{children:t})),f=[{path:"/main/1",component:(0,i.jsx)(u,{attractionsData:b,cityId:1})},{path:"/main/4",component:(0,i.jsx)(u,{attractionsData:j,cityId:4})}];n.createRoot(document.getElementById("root")).render((0,i.jsx)(s.StrictMode,{children:(0,i.jsx)((()=>(0,i.jsxs)(r.Kd,{children:[(0,i.jsx)(d,{}),(0,i.jsx)(g,{}),(0,i.jsxs)(o.BV,{children:[(0,i.jsx)(o.qh,{path:"/astray",element:(0,i.jsx)(w,{children:(0,i.jsx)(y,{})})}),(0,i.jsx)(o.qh,{path:"/main",element:(0,i.jsx)(w,{children:(0,i.jsx)(x,{})})}),f.map((({path:t,component:e})=>(0,i.jsx)(o.qh,{path:t,element:(0,i.jsx)(w,{children:e})},t)))]})]})),{})}))},594:(t,e,a)=>{a.d(e,{w:()=>i});const i={colors:{primary:"#86C232",secondary:"#474B4F",secondaryLight:"#6B6E70",bg:"#222629",white:"#FFFFFF",black:"#000000"},fonts:{primary:"Roboto Condensed, sans-serif",secondary:"Staatliches, sans-serif"},media:{small:"(max-width: 599px)"}}}},t=>{t.O(0,[10],(()=>t(t.s=89))),t.O()}]);