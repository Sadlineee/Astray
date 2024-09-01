"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[848],{457:(e,i,t)=>{t.d(i,{Ay:()=>l});var n=t(848),o=t(540),r=t(581),a=t(594);const s=r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-size: 5rem;
  font-weight: 900;
  color: ${a.w.colors.white};

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
`,m=r.Ay.img`
  object-fit: fill;
  height: 100%;
  width: 100%;
`,l=o.memo((({src:e,alt:i})=>{const[t,r]=(0,o.useState)(!0);return(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(s,{}),(0,n.jsx)(m,{src:e,alt:i,onLoad:()=>{r(!1)},style:{display:t?"none":"block"}})]})}))},264:(e,i,t)=>{t.d(i,{Ay:()=>m});var n=t(848),o=t(581),r=t(594);const a=o.Ay.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
`,s=o.Ay.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${r.w.colors.secondaryLight};

  @media ${r.w.media.small} {
    font-size: 0.8rem;
  }
`,m=()=>(0,n.jsx)(a,{children:(0,n.jsx)(s,{children:"ASTRAY ©2024"})})},464:(e,i,t)=>{t.d(i,{Ay:()=>c});var n=t(848),o=t(559),r=t(976),a=t(581),s=t(594);const m=a.Ay.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15vw;
  height: 5rem;

  @media ${s.w.media.small} {
    padding: 0 5vw;
    height: 4rem;
  }
`,l=(0,a.Ay)(r.N_)`
  text-decoration: none;
  font-family: ${s.w.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 400;
  color: ${s.w.colors.primary};

  @media ${s.w.media.small} {
    font-size: 2rem;
  }
`,d=(0,a.Ay)(r.N_)`
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
    
  @media ${s.w.media.small} {
    height: 1.5rem;
    font-size: 1.5rem;
  }
`,c=()=>(0,n.jsxs)(m,{children:[(0,n.jsx)(l,Object.assign({to:"/astray"},{children:"astray"})),(0,n.jsx)(d,Object.assign({to:"https://t.me/Sadlineee",target:"_blank"},{children:(0,n.jsx)(o.hFS,{})}))]})},467:(e,i,t)=>{t.r(i),t.d(i,{HomeBox:()=>d,HomeButton:()=>y,HomeLeftSide:()=>c,HomeLine:()=>w,HomeRightSide:()=>p,HomeTextOne:()=>h,HomeTextTwo:()=>f,default:()=>x});var n=t(848),o=t(464),r=t(264),a=t(457),s=t(976),m=t(581),l=t(594);const d=m.Ay.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8vh;
  padding: 0 15vw;
  animation: mount 0.75s ease-out;

  @keyframes mount {
    0% { 
      opacity: 0 
    }
    100% { 
      opacity: 1 
    }
  }

  @media ${l.w.media.small} {
    flex-direction: column-reverse;
    margin-top: 0;
    padding: 0 5vw;
  }
`,c=m.Ay.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${l.w.media.small} {
    align-items: center;
    width: 100%;
  }     
`,h=m.Ay.span`
  width: 90%;
  font-size: 4rem;
  font-weight: 900;
  color: ${l.w.colors.white};
  word-wrap: break-word;

  @media ${l.w.media.small} {
    text-align: center;
    width: 100%;
    font-size: 2rem;
  }
`,w=m.Ay.hr`
  margin: 2.5rem 0;
  border: 3px solid ${l.w.colors.primary};
  border-radius: 50px;
  animation: moving 0.75s linear forwards;
        
  @keyframes moving {
    0% { 
      width: 0% 
    }
    100% { 
      width: 55% 
    }
  }

  @media ${l.w.media.small} {
    margin: 1.5rem 0;
    border: 2px solid ${l.w.colors.primary};
  }
`,f=m.Ay.span`
  width: 90%;
  font-size: 1.75rem;
  font-weight: 400;
  color: ${l.w.colors.white};

  @media ${l.w.media.small} {
    text-align: center;
    width: 100%;
    font-size: 1.1rem;
  }
`,y=(0,m.Ay)(s.N_)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: 4rem;
  width: 16rem;
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${l.w.colors.white};
  background: ${l.w.colors.primary};
  transition: 0.2s;
            
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${l.w.media.small} {
    height: 3rem;
    width: 12rem;
    font-size: 1.1rem;
  }
`,p=m.Ay.div`
  aspect-ratio: 1 / 1;
  width: 50%;
  
  @media ${l.w.media.small} {
    margin: 1rem 0 1.5rem 0;
    width: 75%;
  }
`,g=t.p+"src/assets/images/home/home.png",x=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Ay,{}),(0,n.jsxs)(d,{children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(h,{children:"В каждом уголке мира ждет открытие новых чудес"}),(0,n.jsx)(w,{}),(0,n.jsx)(f,{children:"Кликните ниже и начните исследовать Мир с главной страницы нашего сайта!"}),(0,n.jsx)(y,Object.assign({to:"/main"},{children:"Вперёд!"}))]}),(0,n.jsx)(p,{children:(0,n.jsx)(a.Ay,{src:g,alt:"home"})})]}),(0,n.jsx)(r.Ay,{})]})}}]);