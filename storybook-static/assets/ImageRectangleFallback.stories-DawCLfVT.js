import{j as n}from"./jsx-runtime-DFAAy_2V.js";import{a as w,b,c as u}from"./ImageCircle-CS44TBYc.js";import"./index-Bc2G9s8g.js";const h="https://www.figma.com/design/hmnbx3ka",o=e=>({design:{type:"figma",url:`${h}?node-id=${e}`}}),d=({children:e})=>n.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:e}),j={title:"Components/Image/RectangleFallback",tags:["autodocs"],parameters:{layout:"centered",design:{type:"figma",url:`${h}?node-id=3055`},docs:{description:{component:'\nRectangle 이미지의 대체(Fallback) 레이어 컴포넌트 모음입니다.\n**Place** (이미지 배치 타입) · **Opacity** (딤 레이어) · **Shadow** (그라디언트 오버레이) 세 가지 서브 컴포넌트로 구성됩니다.\n\n---\n\n### Place Props\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `type` | variant | `"default"` | `"default"` \\| `"noImage"` \\| `"placeHolder"` |\n| `size` | number | `140` | 크기 (px) |\n\n### Opacity Props\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `opacity` | variant | `"none"` | `"none"` \\| `"3%"` \\| `"40%"` |\n\n### Shadow Props\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `showShadow` | boolean | `false` | 그림자 표시 여부 |\n| `shadow` | variant | `"none"` | `"none"` \\| `"up"` \\| `"down"` \\| `"up&down"` |\n        '.trim()}}}},a={name:"Basic",parameters:o("3055"),render:()=>n.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[{type:"default",desc:"이미지 표시"},{type:"noImage",desc:"이미지 없음"},{type:"placeHolder",desc:"로딩 중"}].map(({type:e,desc:r})=>n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(w,{type:e,size:120}),n.jsx(d,{children:e}),n.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:10,color:"#bbbbcc",margin:"2px 0 0",textAlign:"center"},children:r})]},e))})},t={name:"Opacity",parameters:o("3055"),render:()=>n.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:["none","3%","40%"].map(e=>n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(b,{opacity:e,width:150,height:100}),n.jsxs(d,{children:["opacity: ",e]})]},e))})},s={name:"Shadow",parameters:o("3055"),render:()=>n.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[{shadow:"none",desc:"오버레이 없음"},{shadow:"up",desc:"top → transparent"},{shadow:"down",desc:"bottom → transparent"},{shadow:"up&down",desc:"상하단 동시"}].map(({shadow:e,desc:r})=>n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(u,{showShadow:e!=="none",shadow:e}),n.jsx(d,{children:e}),n.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:10,color:"#bbbbcc",margin:"2px 0 0",textAlign:"center"},children:r})]},e))})};var i,p,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Basic',
  parameters: figmaNode('3055'),
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      {([{
      type: 'default',
      desc: '이미지 표시'
    }, {
      type: 'noImage',
      desc: '이미지 없음'
    }, {
      type: 'placeHolder',
      desc: '로딩 중'
    }] as const).map(({
      type,
      desc
    }) => <div key={type} style={{
      textAlign: 'center'
    }}>
          <ImagePlace type={type} size={120} />
          <Label>{type}</Label>
          <p style={{
        fontFamily: 'Pretendard,sans-serif',
        fontSize: 10,
        color: '#bbbbcc',
        margin: '2px 0 0',
        textAlign: 'center'
      }}>{desc}</p>
        </div>)}
    </div>
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,m,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Opacity',
  parameters: figmaNode('3055'),
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      {(['none', '3%', '40%'] as ImageOpacityLevel[]).map(op => <div key={op} style={{
      textAlign: 'center'
    }}>
          <ImageOpacity opacity={op} width={150} height={100} />
          <Label>opacity: {op}</Label>
        </div>)}
    </div>
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Shadow',
  parameters: figmaNode('3055'),
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      {([{
      shadow: 'none',
      desc: '오버레이 없음'
    }, {
      shadow: 'up',
      desc: 'top → transparent'
    }, {
      shadow: 'down',
      desc: 'bottom → transparent'
    }, {
      shadow: 'up&down',
      desc: '상하단 동시'
    }] as {
      shadow: ImageShadowDirection;
      desc: string;
    }[]).map(({
      shadow,
      desc
    }) => <div key={shadow} style={{
      textAlign: 'center'
    }}>
          <ImageShadow showShadow={shadow !== 'none'} shadow={shadow} />
          <Label>{shadow}</Label>
          <p style={{
        fontFamily: 'Pretendard,sans-serif',
        fontSize: 10,
        color: '#bbbbcc',
        margin: '2px 0 0',
        textAlign: 'center'
      }}>{desc}</p>
        </div>)}
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const P=["Basic","OpacityVariants","ShadowVariants"];export{a as Basic,t as OpacityVariants,s as ShadowVariants,P as __namedExportsOrder,j as default};
