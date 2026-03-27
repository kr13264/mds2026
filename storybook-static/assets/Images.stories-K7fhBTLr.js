import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{d as m}from"./ImageCircle-CS44TBYc.js";import"./index-Bc2G9s8g.js";const q="https://www.figma.com/design/hmnbx3ka",t=e=>({design:{type:"figma",url:`${q}?node-id=${e}`}}),r={landscape:"https://picsum.photos/seed/mds1/800/450",portrait:"https://picsum.photos/seed/mds2/450/600",square:"https://picsum.photos/seed/mds3/600/600"},y=({children:e})=>a.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:e}),_={title:"Components/Image/RectangleImage",component:m,tags:["autodocs"],parameters:{layout:"centered",design:{type:"figma",url:`${q}?node-id=3055`},docs:{description:{component:'\n비율(ratio), 딤 레이어(opacity), 그림자(shadow), object-fit 조합으로 구성된 Rectangle 이미지 래퍼 컴포넌트.\n\n### Props\n| Prop | Type | Default | Options |\n|------|------|---------|---------|\n| `type` | variant | `"default"` | `"default"` \\| `"noImage"` \\| `"placeHolder"` |\n| `ratio` | variant | `"1:1"` | `"1:1"` \\| `"16:9"` \\| `"3:2"` \\| `"3:4"` \\| `"3:4.5"` \\| `"3:5"` \\| `"noFix"` |\n| `opacity` | variant | `"none"` | `"none"` \\| `"3%"` \\| `"40%"` |\n| `shadow` | variant | `"none"` | `"none"` \\| `"up"` \\| `"down"` \\| `"up&down"` |\n| `fit` | variant | `"cover"` | `"cover"` \\| `"contain"` \\| `"fill"` \\| `"scale-down"` |\n| `label` | string | — | 하단 오버레이 텍스트 |\n| `icon` | boolean | `false` | 우상단 아이콘 뱃지 |\n| `disabled` | boolean | `false` | opacity 0.35 |\n        '.trim()}}},argTypes:{type:{control:"select",options:["default","noImage","placeHolder"],description:"이미지 표시 타입",table:{defaultValue:{summary:"default"}}},ratio:{control:"select",options:["1:1","16:9","3:2","3:4","3:4.5","3:5","noFix"],description:"비율",table:{defaultValue:{summary:"1:1"}}},opacity:{control:"select",options:["none","3%","40%"],description:"딤 레이어",table:{defaultValue:{summary:"none"}}},shadow:{control:"select",options:["none","up","down","up&down"],description:"그림자 방향",table:{defaultValue:{summary:"none"}}},fit:{control:"select",options:["cover","contain","fill","scale-down"],description:"object-fit",table:{defaultValue:{summary:"cover"}}},label:{control:"text",description:"하단 오버레이 텍스트"},icon:{control:"boolean",description:"우상단 아이콘 뱃지",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성화",table:{defaultValue:{summary:"false"}}}}},o={parameters:t("3055"),args:{src:r.landscape,alt:"샘플 이미지",ratio:"16:9",type:"default",opacity:"none",shadow:"none",fit:"cover"},decorators:[e=>a.jsx("div",{style:{width:320},children:a.jsx(e,{})})]},s={name:"Dimmed",parameters:t("3055"),render:()=>a.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"flex-start"},children:["none","3%","40%"].map(e=>a.jsxs("div",{style:{width:200},children:[a.jsx(m,{src:r.landscape,ratio:"16:9",opacity:e}),a.jsxs(y,{children:["opacity: ",e]})]},e))})},n={name:"No Image",parameters:t("3055"),render:()=>a.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"flex-start"},children:[{type:"default",desc:"default"},{type:"noImage",desc:"noImage"},{type:"placeHolder",desc:"placeHolder"}].map(({type:e,desc:B})=>a.jsxs("div",{style:{width:180},children:[a.jsx(m,{type:e,src:e==="default"?r.square:void 0,ratio:"1:1"}),a.jsx(y,{children:B})]},e))})},i={name:"Ratio",parameters:t("3055"),render:()=>a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 160px)",gap:12},children:["1:1","16:9","3:2","3:4","3:4.5","3:5"].map(e=>a.jsxs("div",{children:[a.jsx(m,{src:r.landscape,ratio:e,style:{width:"100%"}}),a.jsx(y,{children:e})]},e))})},d={name:"Fit Contain",parameters:t("3055"),args:{src:r.portrait,alt:"세로 이미지",ratio:"16:9",fit:"contain"},decorators:[e=>a.jsx("div",{style:{width:320},children:a.jsx(e,{})})]},c={name:"Fit Cover",parameters:t("3055"),args:{src:r.portrait,alt:"세로 이미지",ratio:"16:9",fit:"cover"},decorators:[e=>a.jsx("div",{style:{width:320},children:a.jsx(e,{})})]},l={name:"Fit Fill",parameters:t("3055"),args:{src:r.portrait,alt:"세로 이미지",ratio:"16:9",fit:"fill"},decorators:[e=>a.jsx("div",{style:{width:320},children:a.jsx(e,{})})]},p={name:"Fit Scale Down",parameters:t("3055"),args:{src:r.portrait,alt:"세로 이미지",ratio:"16:9",fit:"scale-down"},decorators:[e=>a.jsx("div",{style:{width:320},children:a.jsx(e,{})})]};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: figmaNode('3055'),
  args: {
    src: IMG.landscape,
    alt: '샘플 이미지',
    ratio: '16:9',
    type: 'default',
    opacity: 'none',
    shadow: 'none',
    fit: 'cover'
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Dimmed',
  parameters: figmaNode('3055'),
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      {(['none', '3%', '40%'] as ImageRectOpacity[]).map(op => <div key={op} style={{
      width: 200
    }}>
          <ImageRect src={IMG.landscape} ratio="16:9" opacity={op} />
          <Label>opacity: {op}</Label>
        </div>)}
    </div>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,I,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'No Image',
  parameters: figmaNode('3055'),
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      {([{
      type: 'default',
      desc: 'default'
    }, {
      type: 'noImage',
      desc: 'noImage'
    }, {
      type: 'placeHolder',
      desc: 'placeHolder'
    }] as {
      type: ImageRectType;
      desc: string;
    }[]).map(({
      type,
      desc
    }) => <div key={type} style={{
      width: 180
    }}>
          <ImageRect type={type} src={type === 'default' ? IMG.square : undefined} ratio="1:1" />
          <Label>{desc}</Label>
        </div>)}
    </div>
}`,...(j=(I=n.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var b,F,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Ratio',
  parameters: figmaNode('3055'),
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 160px)',
    gap: 12
  }}>
      {(['1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5'] as ImageRectRatio[]).map(ratio => <div key={ratio}>
          <ImageRect src={IMG.landscape} ratio={ratio} style={{
        width: '100%'
      }} />
          <Label>{ratio}</Label>
        </div>)}
    </div>
}`,...(S=(F=i.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var R,N,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Fit Contain',
  parameters: figmaNode('3055'),
  args: {
    src: IMG.portrait,
    alt: '세로 이미지',
    ratio: '16:9',
    fit: 'contain'
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var G,M,D;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Fit Cover',
  parameters: figmaNode('3055'),
  args: {
    src: IMG.portrait,
    alt: '세로 이미지',
    ratio: '16:9',
    fit: 'cover'
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var L,V,H;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Fit Fill',
  parameters: figmaNode('3055'),
  args: {
    src: IMG.portrait,
    alt: '세로 이미지',
    ratio: '16:9',
    fit: 'fill'
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(H=(V=l.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var T,k,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Fit Scale Down',
  parameters: figmaNode('3055'),
  args: {
    src: IMG.portrait,
    alt: '세로 이미지',
    ratio: '16:9',
    fit: 'scale-down'
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(W=(k=p.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};const $=["Basic","Dimmed","NoImage","Ratio","FitContain","FitCover","FitFill","FitScaleDown"];export{o as Basic,s as Dimmed,d as FitContain,c as FitCover,l as FitFill,p as FitScaleDown,n as NoImage,i as Ratio,$ as __namedExportsOrder,_ as default};
