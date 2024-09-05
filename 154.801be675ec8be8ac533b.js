"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[154],{457:(e,t,i)=>{i.d(t,{Ay:()=>c});var a=i(848),r=i(540),n=i(581),o=i(594);const s=n.Ay.div`
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
`,l=n.Ay.img`
  object-fit: fill;
  height: 100%;
  width: 100%;
`,c=r.memo((({src:e,alt:t})=>{const[i,n]=(0,r.useState)(!0);return(0,a.jsxs)(a.Fragment,{children:[i&&(0,a.jsx)(s,{}),(0,a.jsx)(l,{src:e,alt:t,onLoad:()=>{n(!1)},style:{display:i?"none":"block"}})]})}))},264:(e,t,i)=>{i.d(t,{Ay:()=>l});var a=i(848),r=i(581),n=i(594);const o=r.Ay.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
`,s=r.Ay.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${n.w.colors.secondaryLight};

  @media ${n.w.media.small} {
    font-size: 0.8rem;
  }
`,l=()=>(0,a.jsx)(o,{children:(0,a.jsx)(s,{children:"ASTRAY ©2024"})})},464:(e,t,i)=>{i.d(t,{Ay:()=>d});var a=i(848),r=i(197),n=i(976),o=i(581),s=i(594);const l=o.Ay.header`
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
`,c=(0,o.Ay)(n.N_)`
  text-decoration: none;
  font-family: ${s.w.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 400;
  color: ${s.w.colors.primary};

  @media ${s.w.media.small} {
    font-size: 2rem;
  }
`,m=(0,o.Ay)(n.N_)`
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
`,d=()=>(0,a.jsxs)(l,{children:[(0,a.jsx)(c,Object.assign({to:"/astray"},{children:"astray"})),(0,a.jsx)(m,Object.assign({to:"https://t.me/Sadlineee",target:"_blank"},{children:(0,a.jsx)(r.hFS,{})}))]})},154:(e,t,i)=>{i.r(t),i.d(t,{Circle:()=>k,CircleText:()=>L,MainBox:()=>b,MainLeftSide:()=>$,MainRightSide:()=>C,MainText:()=>z,MainTopSection:()=>v,default:()=>F});var a=i(848),r=i(540),n=i(464),o=i(264),s=i(581),l=i(594);const c=s.Ay.input`
  text-align: center;
  margin-top: 4rem;
  padding: 0.5rem;
  height: 4rem;
  width: 20rem;
  font-family: ${l.w.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  color: ${l.w.colors.white};
  background: none;
  border: 1px solid ${l.w.colors.secondaryLight};
  box-shadow: -5px -5px 0 ${l.w.colors.primary};

  &::placeholder {
    color: ${l.w.colors.white};
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }

  @media (max-width: 599px) {
    margin-top: 3rem;
    height: 3rem;
    width: 15rem;
    font-size: 1rem;
  }
`,m=({searchValue:e,onSearchValueChange:t})=>(0,a.jsx)(c,{type:"text",maxLength:40,placeholder:"Введите город или страну",value:e,onChange:e=>{t(e.target.value)}});var d=i(457),h=i(976);const p=s.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,g=(0,s.Ay)(h.N_)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-decoration: none;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);

  &:hover {
    cursor: auto;
  }
`,x=s.Ay.div`
  aspect-ratio: 1 / 1;
  height: 15rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  @media (max-width: 599px) {
    height: 11rem;
  }
`,f=s.Ay.span`
  margin-top: 2.25rem;
  font-size: 2rem;
  font-weight: 500;
  color: ${l.w.colors.white};

  @media (max-width: 599px) {
    margin-top: 1.75rem;
    font-size: 1.5rem;
  }
`,y=s.Ay.span`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${l.w.colors.secondaryLight};

  @media (max-width: 599px) {
    font-size: 1rem;
  }
`,w=s.Ay.img`
  margin: 1.5rem 0;
  aspect-ratio: 1 / 1;
  height: 2.25rem;

   @media (max-width: 599px) {
    margin: 1rem 0;
    height: 1.75rem;
  }
`,u=s.Ay.p`
  height: 5rem;
  width: 70%;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  color: ${l.w.colors.white};

  @media (max-width: 599px) {
    font-size: 0.9rem;
  }
`,j=s.Ay.button`
  margin: 2.25rem 0 0.5rem 0;
  font-size: 1rem;
  color: ${l.w.colors.secondaryLight};
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

  @media (max-width: 599px) {
    margin: 0.75rem 0 0.5rem 0;
    font-size: 0.9rem;
  }
`,A=r.memo((({sortCitiesData:e})=>(0,a.jsx)(p,{children:e.map((e=>(0,a.jsxs)(g,Object.assign({to:`${e.id}`},{children:[(0,a.jsx)(x,{children:(0,a.jsx)(d.Ay,{src:e.image,alt:"city"})}),(0,a.jsx)(f,{children:e.title}),(0,a.jsx)(y,{children:e.country}),(0,a.jsx)(w,{src:e.flag,alt:"city flag"}),(0,a.jsx)(u,{children:e.description}),(0,a.jsx)(j,{children:"ПЕРЕЙТИ"})]}),e.id)))}))),b=s.Ay.main`
  display: flex;
  flex-direction: column;
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
    padding: 0 5vw;
  }
`,v=s.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${l.w.media.small} {
    flex-direction:column-reverse;
  }
`,$=s.Ay.div`
  display: flex;
  flex-direction: column;
  width: 52%;

  @media ${l.w.media.small} {
    align-items: center;
    width: 100%;
  }
`,z=s.Ay.span`
  width: 90%;
  font-size: 4rem;
  font-weight: 900;
  color: ${l.w.colors.white};

  @media (max-width: 599px) {
    text-align: center;
    font-size: 1.75rem;
  }
`,C=s.Ay.div`
  width: 48%;

  @media ${l.w.media.small} {
    width: 100%;
  }
`,k=s.Ay.svg`
  aspect-ratio: 1 / 1;
  width: 100%;
  animation: rotation 60s linear infinite;

  @keyframes rotation {
    0% { 
      transform: rotate(0) 
    }
    100% { 
      transform: rotate(360deg) 
    }
  }

  @media ${l.w.media.small} {
    height: 18rem;
  }
`,L=s.Ay.text`
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 2.25px;
  fill: ${l.w.colors.primary};
`,S=i.p+"src/assets/images/flags/UK.png",M=i.p+"src/assets/images/flags/France.png",N=i.p+"src/assets/images/flags/USA.png",O=i.p+"src/assets/images/flags/Brazil.png",V=i.p+"src/assets/images/cities/London/attractions/Palace_of_Westminster/3.jpg";var _=i(555),E=i(12),T=i(123);const D=[{id:1,image:V,title:"Лондон",country:"Великобритания",flag:S,description:"Сердце Великобритании: Биг-Бен, Тауэр, бульвары, дворцы и сумрачные аллеи в тумане."},{id:2,image:_.A,title:"Париж",country:"Франция",flag:M,description:"Город любви, моды и искусства, знаменит Эйфелевой башней и Лувром."},{id:3,image:E.A,title:"Нью-Йорк",country:"США",flag:N,description:"Крупнейший город США с высокими небоскребами и разнообразной культурой."},{id:4,image:T.A,title:"Рио-де-Жанейро",country:"Бразилия",flag:O,description:"Город с потрясающими пляжами, захватывающими карнавальными праздниками и горами."}],F=()=>{const[e,t]=(0,r.useState)(""),i=(0,r.useCallback)((e=>{t(e)}),[]),s=(0,r.useMemo)((()=>D.filter((t=>t.title.toLowerCase().includes(e.toLowerCase())||t.country.toLowerCase().includes(e.toLowerCase())))),[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Ay,{}),(0,a.jsxs)(b,{children:[(0,a.jsxs)(v,{children:[(0,a.jsxs)($,{children:[(0,a.jsx)(z,{children:"Исследуйте, мечтайте, открывайте мир с новой стороны!"}),(0,a.jsx)(m,{searchValue:e,onSearchValueChange:i})]}),(0,a.jsx)(C,{children:(0,a.jsxs)(k,Object.assign({viewBox:"0 0 100 100"},{children:[(0,a.jsx)("path",{id:"text-path",d:"M20,50a30,30 0 1,1 60,0a30,30 0 1,1 -60,0",fill:"transparent"}),(0,a.jsx)(L,{children:(0,a.jsx)("textPath",Object.assign({href:"#text-path"},{children:"TRAVELING MEANS DEVELOPING"}))})]}))})]}),(0,a.jsx)(A,{sortCitiesData:s})]}),(0,a.jsx)(o.Ay,{})]})}}}]);