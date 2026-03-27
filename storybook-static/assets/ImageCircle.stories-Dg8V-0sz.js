import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{I as t}from"./ImageCircle-CS44TBYc.js";import"./index-Bc2G9s8g.js";const m="https://www.figma.com/design/hmnbx3ka",c=e=>({design:{type:"figma",url:`${m}?node-id=${e}`}}),g=({children:e})=>a.jsx("p",{style:{fontFamily:"Pretendard,sans-serif",fontSize:11,color:"#9999B8",margin:"6px 0 0",textAlign:"center"},children:e}),b={title:"Components/Image/CircleImage",component:t,tags:["autodocs"],parameters:{layout:"centered",design:{type:"figma",url:`${m}?node-id=3055`},docs:{description:{component:'\n원형 이미지 컴포넌트. 프로필 이미지, 사용자 아바타, 채널 썸네일 등에 활용합니다.\n\n### Props\n| Prop | Type | Default | Options |\n|------|------|---------|---------|\n| `type` | variant | `"default"` | `"default"` \\| `"noImage"` \\| `"placeHolder"` |\n| `size` | number | `48` | `32` \\| `40` \\| `48` \\| `56` \\| `64` \\| `80` \\| `96` \\| `120` |\n| `disabled` | boolean | `false` | — |\n        '.trim()}}},argTypes:{type:{control:"select",options:["default","noImage","placeHolder"],description:"이미지 상태",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:[32,40,48,56,64,80,96,120],description:"크기 (px)",table:{defaultValue:{summary:"48"}}},disabled:{control:"boolean",description:"비활성화",table:{defaultValue:{summary:"false"}}}}},n={parameters:c("3055"),render:()=>a.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[32,40,48,56,64,80,96,120].map(e=>a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx(t,{size:e}),a.jsx(g,{children:e})]},e))})},l={name:"No Image",parameters:c("3055"),render:()=>a.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap",alignItems:"flex-end"},children:[{type:"default",label:"default"},{type:"noImage",label:"noImage"},{type:"placeHolder",label:"placeHolder"}].map(({type:e,label:f})=>a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx(t,{type:e,size:64}),a.jsx(g,{children:f})]},e))})};var r,s,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: figmaNode('3055'),
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      {([32, 40, 48, 56, 64, 80, 96, 120] as ImageCircleSize[]).map(s => <div key={s} style={{
      textAlign: 'center'
    }}>
          <ImageCircle size={s} />
          <Label>{s}</Label>
        </div>)}
    </div>
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,d,p;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'No Image',
  parameters: figmaNode('3055'),
  render: () => <div style={{
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      {([{
      type: 'default',
      label: 'default'
    }, {
      type: 'noImage',
      label: 'noImage'
    }, {
      type: 'placeHolder',
      label: 'placeHolder'
    }] as {
      type: ImageCircleType;
      label: string;
    }[]).map(({
      type,
      label
    }) => <div key={type} style={{
      textAlign: 'center'
    }}>
          <ImageCircle type={type} size={64} />
          <Label>{label}</Label>
        </div>)}
    </div>
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const I=["Basic","NoImage"];export{n as Basic,l as NoImage,I as __namedExportsOrder,b as default};
