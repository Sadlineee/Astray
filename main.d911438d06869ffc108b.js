"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[792],{394:(t,a,e)=>{var i=e(848),s=e(540),r=e(338),n=e(976),o=e(767),c=e(581),l=e(594);const g=c.DU`
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
`,d=()=>{const{pathname:t}=(0,o.zy)();return(0,s.useEffect)((()=>{window.scrollTo(0,0)}),[t]),null},m=c.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`,p=c.Ay.div`
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
`,h=()=>(0,i.jsx)(m,{children:(0,i.jsx)(p,{})}),j=[{id:1,image:e.p+"src/assets/images/cities/London/attractions/Buckingham_Palace/1.jpg",title:"Букингемский дворец",translate:"Buckingham Palace",rating:4.5},{id:2,image:e.p+"src/assets/images/cities/London/attractions/Tower_Bridge/3.jpg",title:"Тауэрский мост",translate:"Tower Bridge",rating:4.8},{id:3,image:e.p+"src/assets/images/cities/London/attractions/British_Museum/4.jpg",title:"Британский музей",translate:"British Museum",rating:4.7},{id:4,image:e.p+"src/assets/images/cities/London/attractions/Palace_of_Westminster/4.jpg",title:"Вестминстерский дворец",translate:"Palace of Westminster",rating:4.6},{id:5,image:e.p+"src/assets/images/cities/London/attractions/Tower_of_London/4.jpg",title:"Лондонский Тауэр",translate:"Tower of London",rating:4.6},{id:6,image:e.p+"src/assets/images/cities/London/attractions/Hyde_Park/4.jpg",title:"Гайд-парк",translate:"Hyde Park",rating:4.7},{id:7,image:e.p+"src/assets/images/cities/London/attractions/London_Eye/3.jpg",title:"Лондонский глаз",translate:"London Eye",rating:4.5},{id:8,image:e.p+"src/assets/images/cities/London/attractions/National_Gallery/2.jpg",title:"Национальная галерея",translate:"National Gallery",rating:4.8}],_=[{id:1,image:e.p+"src/assets/images/cities/Paris/attractions/Tour_Eiffel/5.jpg",title:"Эйфелева башня",translate:"Tour Eiffel",rating:4.7},{id:2,image:e.p+"src/assets/images/cities/Paris/attractions/Louvre/4.jpg",title:"Лувр",translate:"Musée du Louvre",rating:4.7},{id:3,image:e.p+"src/assets/images/cities/Paris/attractions/Arc_de_Triomphe/2.jpg",title:"Триумфальная арка",translate:"Arc de triomphe de l’Étoile",rating:4.7},{id:4,image:e.p+"src/assets/images/cities/Paris/attractions/Sainte_Chapelle/2.jpg",title:"Сент-Шапель",translate:"Sainte-Chapelle",rating:4.6}],b=[{id:1,image:e.p+"src/assets/images/cities/New_York/attractions/Statue_of_Liberty/1.jpg",title:"Стaтуя Свободы",translate:"Statue of Liberty",rating:4.7},{id:2,image:e.p+"src/assets/images/cities/New_York/attractions/Times_Square/3.jpg",title:"Таймс-сквер",translate:"Times Square",rating:4.7},{id:3,image:e.p+"src/assets/images/cities/New_York/attractions/Brooklyn_Bridge/3.jpg",title:"Бруклинский мост",translate:"Brooklyn Bridge",rating:4.8},{id:4,image:e.p+"src/assets/images/cities/New_York/attractions/Central_Park/5.jpg",title:"Центральный парк",translate:"Central Park",rating:4.8},{id:5,image:e.p+"src/assets/images/cities/New_York/attractions/Empire_State_Building/2.jpg",title:"Эмпайр-стейт-билдинг",translate:"Empire State Building",rating:4.7},{id:6,image:e.p+"src/assets/images/cities/New_York/attractions/Grand_Central_Terminal/3.jpg",title:"Центральный вокзал",translate:"Grand Central Terminal",rating:4.7}],u=[{id:1,image:e.p+"src/assets/images/cities/Rio_de_Janeiro/attractions/Christ_the_Redeemer/3.jpg",title:"Статуя Христа-Искупителя",translate:"Christ the Redeemer",rating:4.8},{id:2,image:e.p+"src/assets/images/cities/Rio_de_Janeiro/attractions/Copacabana_Beach/2.jpg",title:"Копакабана",translate:"Copacabana Beach",rating:4.5}],y=(0,s.lazy)((()=>Promise.all([e.e(197),e.e(848)]).then(e.bind(e,467)))),k=(0,s.lazy)((()=>Promise.all([e.e(197),e.e(834)]).then(e.bind(e,834)))),w=(0,s.lazy)((()=>Promise.all([e.e(197),e.e(512),e.e(444)]).then(e.bind(e,444)))),x=({children:t})=>(0,i.jsx)(s.Suspense,Object.assign({fallback:(0,i.jsx)(h,{})},{children:t})),f=[{path:"/main/1",component:(0,i.jsx)(w,{attractionsData:j,cityId:1})},{path:"/main/2",component:(0,i.jsx)(w,{attractionsData:_,cityId:2})},{path:"/main/3",component:(0,i.jsx)(w,{attractionsData:b,cityId:3})},{path:"/main/4",component:(0,i.jsx)(w,{attractionsData:u,cityId:4})}];r.createRoot(document.getElementById("root")).render((0,i.jsx)(s.StrictMode,{children:(0,i.jsx)((()=>(0,i.jsxs)(n.Kd,{children:[(0,i.jsx)(g,{}),(0,i.jsx)(d,{}),(0,i.jsxs)(o.BV,{children:[(0,i.jsx)(o.qh,{path:"/astray",element:(0,i.jsx)(x,{children:(0,i.jsx)(y,{})})}),(0,i.jsx)(o.qh,{path:"/main",element:(0,i.jsx)(x,{children:(0,i.jsx)(k,{})})}),f.map((({path:t,component:a})=>(0,i.jsx)(o.qh,{path:t,element:(0,i.jsx)(x,{children:a})},t)))]})]})),{})}))},594:(t,a,e)=>{e.d(a,{w:()=>i});const i={colors:{primary:"#86C232",secondary:"#474B4F",secondaryLight:"#6B6E70",bg:"#222629",white:"#FFFFFF",black:"#000000"},fonts:{primary:"Roboto Condensed, sans-serif",secondary:"Staatliches, sans-serif"},media:{small:"(max-width: 599px)"}}}},t=>{t.O(0,[10],(()=>t(t.s=394))),t.O()}]);