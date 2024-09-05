"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[207],{457:(e,i,t)=>{t.d(i,{Ay:()=>m});var a=t(848),n=t(540),r=t(581),s=t(594);const o=r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-size: 5rem;
  font-weight: 900;
  color: ${s.w.colors.white};

  &:before {
    content: "{";
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }

  &:after {
    content: "}";
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }
    
  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }

  @media (max-width: 599px) {
    font-size: 3.5rem;
  }
`,l=r.Ay.img`
  object-fit: fill;
  height: 100%;
  width: 100%;
`,m=n.memo((({src:e,alt:i})=>{const[t,r]=(0,n.useState)(!0);return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(o,{}),(0,a.jsx)(l,{src:e,alt:i,onLoad:()=>{r(!1)},style:{display:t?"none":"block"}})]})}))},264:(e,i,t)=>{t.d(i,{Ay:()=>l});var a=t(848),n=t(581),r=t(594);const s=n.Ay.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
`,o=n.Ay.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${r.w.colors.secondaryLight};

  @media ${r.w.media.small} {
    font-size: 0.8rem;
  }
`,l=()=>(0,a.jsx)(s,{children:(0,a.jsx)(o,{children:"ASTRAY ©2024"})})},464:(e,i,t)=>{t.d(i,{Ay:()=>c});var a=t(848),n=t(197),r=t(976),s=t(581),o=t(594);const l=s.Ay.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15vw;
  height: 5rem;

  @media ${o.w.media.small} {
    padding: 0 5vw;
    height: 4rem;
  }
`,m=(0,s.Ay)(r.N_)`
  text-decoration: none;
  font-family: ${o.w.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 400;
  color: ${o.w.colors.primary};

  @media ${o.w.media.small} {
    font-size: 2rem;
  }
`,d=(0,s.Ay)(r.N_)`
  aspect-ratio: 1 / 1;
  height: 2rem;
  text-decoration: none;
  font-size: 2rem;
  color: #25A1DE;
  transition: 0.2s;
            
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
            
  &:active {
    transform: scale(0.95);
  }
    
  @media ${o.w.media.small} {
    height: 1.5rem;
    font-size: 1.5rem;
  }
`,c=()=>(0,a.jsxs)(l,{children:[(0,a.jsx)(m,Object.assign({to:"/astray"},{children:"astray"})),(0,a.jsx)(d,Object.assign({to:"https://t.me/Sadlineee",target:"_blank"},{children:(0,a.jsx)(n.hFS,{})}))]})},207:(e,i,t)=>{t.r(i),t.d(i,{AttractionBox:()=>v,default:()=>b});var a=t(848),n=t(464),r=t(264),s=t(976),o=t(581),l=t(594);const m=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15vw;

  @media ${l.w.media.small} {
    padding: 0 5vw;
  }
`,d=o.Ay.span`
  margin: 3rem 0;
  text-align: center;
  font-size: 6rem;
  font-weight: 900;
  color: ${l.w.colors.white};

  @media ${l.w.media.small} {
    margin: 2rem 0;
    font-size: 2.75rem;
  }
`,c=o.Ay.address`
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${l.w.colors.secondaryLight};

  @media ${l.w.media.small} {
    font-size: 1rem;
  }
`,h=(0,o.Ay)(s.N_)`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 200;
  color: ${l.w.colors.white};

  @media ${l.w.media.small} {
    font-size: 0.9rem;
  }
`,f=o.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 3rem;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);

  @media ${l.w.media.small} {
    padding: 1.5rem;
  }
`,x=o.Ay.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${l.w.colors.white};

  @media ${l.w.media.small} {
    font-size: 1.5rem;
  }
`,p=o.Ay.hr`
  width: 5%;
  margin: 1.5rem 0;
  border: 2px solid ${l.w.colors.primary};
  border-radius: 50px;

  @media ${l.w.media.small} {
    width: 15%;
    margin: 1rem 0;
    border: 1px solid ${l.w.colors.primary};
  }
`,w=o.Ay.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${l.w.colors.white};

  @media ${l.w.media.small} {
    font-size: 1rem;
  }
`,y=({el:e})=>{const i=[{title:"Описание",content:e.description},{title:"История",content:e.history},{title:"Архитектура",content:e.view},{title:"Дополнительно",content:e.other}];return(0,a.jsxs)(m,{children:[(0,a.jsx)(d,{children:e.title}),(0,a.jsx)(c,{children:e.address}),e.link&&(0,a.jsx)(h,Object.assign({to:e.link},{children:"Visit official website"})),i.map((({title:e,content:i})=>(0,a.jsxs)(f,{children:[(0,a.jsx)(x,{children:e}),(0,a.jsx)(p,{}),(0,a.jsx)(w,{children:i})]},e)))]},e.id)};var g=t(457);const j=o.Ay.div`
  display: flex;
  flex-direction: row;
  width: calc(50vh * 10);
  animation: scroll 25s linear infinite;

  @keyframes scroll {
    0% { 
      transform: translateX(0) 
    }
    100% { 
      transform: translateX(calc(-50vh * 5)) 
    }
  }

  @media ${l.w.media.small} {
    width: calc(35vh * 10);

    @keyframes scroll {
      0% { 
        transform: translateX(0) 
      }
      100% { 
        transform: translateX(calc(-35vh * 5)) 
      }
    }
  }
`,A=o.Ay.div`
  aspect-ratio: 1 / 1;
  height: 50vh;

  @media ${l.w.media.small} {
    height: 35vh;
  }
`,$=({el:e})=>(0,a.jsx)(j,{children:[...e.image,...e.image].map(((i,t)=>(0,a.jsx)(A,{children:(0,a.jsx)(g.Ay,{src:i,alt:"attraction"})},`${e.id}-${t}`)))},e.id),v=o.Ay.main`
  overflow: hidden;
  animation: mount 0.75s ease-out;

  @keyframes mount {
    0% { 
        opacity: 0 
    }
    100% { 
        opacity: 1 
    }
  }
`,b=({data:e})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Ay,{}),(0,a.jsx)(v,{children:e.map((e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)($,{el:e},e.id),(0,a.jsx)(y,{el:e},e.id)]})))}),(0,a.jsx)(r.Ay,{})]})}}]);