"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[444],{457:(e,t,i)=>{i.d(t,{Ay:()=>m});var n=i(848),a=i(540),r=i(581),o=i(594);const s=r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-size: 5rem;
  font-weight: 900;
  color: ${o.w.colors.white};

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
`,m=a.memo((({src:e,alt:t})=>{const[i,r]=(0,a.useState)(!0);return(0,n.jsxs)(n.Fragment,{children:[i&&(0,n.jsx)(s,{}),(0,n.jsx)(l,{src:e,alt:t,onLoad:()=>{r(!1)},style:{display:i?"none":"block"}})]})}))},264:(e,t,i)=>{i.d(t,{Ay:()=>l});var n=i(848),a=i(581),r=i(594);const o=a.Ay.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
`,s=a.Ay.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${r.w.colors.secondaryLight};

  @media ${r.w.media.small} {
    font-size: 0.8rem;
  }
`,l=()=>(0,n.jsx)(o,{children:(0,n.jsx)(s,{children:"ASTRAY ©2024"})})},464:(e,t,i)=>{i.d(t,{Ay:()=>d});var n=i(848),a=i(197),r=i(976),o=i(581),s=i(594);const l=o.Ay.header`
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
`,m=(0,o.Ay)(r.N_)`
  text-decoration: none;
  font-family: ${s.w.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 400;
  color: ${s.w.colors.primary};

  @media ${s.w.media.small} {
    font-size: 2rem;
  }
`,c=(0,o.Ay)(r.N_)`
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
`,d=()=>(0,n.jsxs)(l,{children:[(0,n.jsx)(m,Object.assign({to:"/astray"},{children:"astray"})),(0,n.jsx)(c,Object.assign({to:"https://t.me/Sadlineee",target:"_blank"},{children:(0,n.jsx)(a.hFS,{})}))]})},444:(e,t,i)=>{i.r(t),i.d(t,{CityBox:()=>u,default:()=>A});var n=i(848),a=i(464),r=i(264),o=i(457),s=i(976),l=i(581),m=i(594),c=i(512);const d=(0,l.Ay)(s.N_)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-decoration: none;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);
  transition: 0.2s;

  &:hover {
    cursor: auto;
  }

  &:focus {
    outline: none;
  }
`,p=l.Ay.div`
  aspect-ratio: 1 / 1;
  height: 15rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  @media ${m.w.media.small} {
    height: 11rem;
  }
`,h=l.Ay.span`
  margin-top: 2.25rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: ${m.w.colors.white};

  @media ${m.w.media.small} {
    margin-top: 1.75rem;
    font-size: 1.5rem;
  }
`,f=l.Ay.span`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${m.w.colors.secondaryLight};

  @media ${m.w.media.small} {
    font-size: 1rem;
  }
`,g=l.Ay.hr`
  margin: 2rem 0;
  width: 15%;
  border: 2px solid ${m.w.colors.primary};
  border-radius: 50px;

  @media ${m.w.media.small} {
    margin: 1.5rem 0;
  }
`,y=l.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${m.w.colors.white};

  @media ${m.w.media.small} {
    font-size: 1.25rem;
  }
`,x=(0,l.Ay)(c.KQV)`
  font-size: 1.25rem;
  color: #F7C923;
`,w=l.Ay.button`
  margin: 2.25rem 0 0.5rem 0;
  font-size: 1rem;
  color: ${m.w.colors.secondaryLight};
  background: none;
  border: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${m.w.media.small} {
    margin: 2rem 0 0.5rem 0;
    font-size: 0.9rem;
  }
`,j=({el:e,cityId:t})=>(0,n.jsxs)(d,Object.assign({to:`/main/${t}/${e.id}`},{children:[(0,n.jsx)(p,{children:(0,n.jsx)(o.Ay,{src:e.image,alt:"attraction"})}),(0,n.jsx)(h,{children:e.title}),(0,n.jsx)(f,{children:e.translate}),(0,n.jsx)(g,{}),(0,n.jsxs)(y,{children:[e.rating,(0,n.jsx)(x,{})]}),(0,n.jsx)(w,{children:"ПЕРЕЙТИ"})]}),e.id),u=l.Ay.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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

  @media ${m.w.media.small} {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 5vw;
  }
`,A=({attractionsData:e,cityId:t})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Ay,{}),(0,n.jsx)(u,{children:e.map((e=>(0,n.jsx)(j,{el:e,cityId:t},e.id)))}),(0,n.jsx)(r.Ay,{})]})}}]);