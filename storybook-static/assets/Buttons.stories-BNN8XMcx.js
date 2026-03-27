import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as se}from"./index-Bc2G9s8g.js";const de=({size:n})=>{const a=["xs","sm"].includes(n)?12:14;return e.jsxs("svg",{className:"animate-spin",width:a,height:a,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"7",cy:"7",r:"5.5",stroke:"currentColor",strokeWidth:"1.5",strokeOpacity:"0.3"}),e.jsx("path",{d:"M7 1.5A5.5 5.5 0 0 1 12.5 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},ce={xs:"h-7 px-[10px] text-xs   rounded-[6px] gap-0.5",sm:"h-9 px-3      text-sm   rounded-[6px] gap-1",md:"h-10 px-3     text-[15px] rounded-md gap-1",lg:"h-11 px-4     text-[15px] rounded-md gap-1",xl:"h-12 px-4     text-base rounded-md gap-1.5","2xl":"h-[52px] px-5 text-base rounded-md gap-1.5"},c={xs:"w-4 h-4",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-5 h-5",xl:"w-5 h-5","2xl":"w-5 h-5"},ue={solid:{primary:["bg-primary-background-default text-white","hover:bg-primary-600 active:bg-primary-700","focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"].join(" "),secondary:["bg-secondary-background-default text-white","hover:opacity-90 active:opacity-80","focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"].join(" "),danger:["bg-function-negative-default text-white","hover:opacity-90 active:opacity-80","focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"].join(" "),neutral:["bg-neutral-background-inverted-1 text-neutral-foreground-inverted-default","hover:opacity-90 active:opacity-80","focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"].join(" ")},tonal:{primary:["bg-primary-background-subtle-1 text-primary-foreground-default","hover:bg-primary-background-subtle-2 active:bg-primary-100","focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"].join(" "),secondary:["bg-secondary-background-subtle-1 text-secondary-foreground-default","hover:opacity-90 active:opacity-80","focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2"].join(" "),danger:["bg-function-negative-subtle text-function-negative-default","hover:opacity-90 active:opacity-80","focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2"].join(" "),neutral:["bg-neutral-background-alpha-2 text-neutral-foreground-default","hover:bg-neutral-background-alpha-3 active:opacity-80","focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2"].join(" ")},outlined:{primary:["bg-transparent border border-primary-stroke-default text-primary-foreground-default","hover:bg-primary-background-subtle-1 active:bg-primary-background-subtle-2","focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"].join(" "),secondary:["bg-transparent border border-secondary-stroke-default text-secondary-foreground-default","hover:bg-secondary-background-subtle-1 active:opacity-80","focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2"].join(" "),danger:["bg-transparent border border-function-negative-default text-function-negative-default","hover:bg-function-negative-subtle active:opacity-80","focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2"].join(" "),neutral:["bg-transparent border border-neutral-stroke-default text-neutral-foreground-default","hover:bg-neutral-background-alpha-1 active:bg-neutral-background-alpha-2","focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2"].join(" ")},plain:{primary:["bg-transparent text-primary-foreground-default","hover:bg-primary-background-subtle-1 active:bg-primary-background-subtle-2","focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"].join(" "),secondary:["bg-transparent text-secondary-foreground-default","hover:bg-secondary-background-subtle-1 active:opacity-80","focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2"].join(" "),danger:["bg-transparent text-function-negative-default","hover:bg-function-negative-subtle active:opacity-80","focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2"].join(" "),neutral:["bg-transparent text-neutral-foreground-default","hover:bg-neutral-background-alpha-1 active:bg-neutral-background-alpha-2","focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2"].join(" ")}},t=se.forwardRef(({variant:n="solid",size:a="md",color:l="primary",loading:o=!1,iconHead:B,iconTail:k,count:b,thumbnail:w,fullWidth:ee=!1,fab:te=!1,disabled:ne,children:S,className:ae="",onClick:ie,...le},re)=>{const y=ne||o,oe=["inline-flex items-center justify-center","font-semibold leading-none select-none whitespace-nowrap","transition-all duration-150 ease-out","focus-visible:outline-none",ue[n][l],ce[a],te?"shadow-lg":"",ee?"w-full":"",y?"opacity-40 cursor-not-allowed pointer-events-none":"cursor-pointer",ae].filter(Boolean).join(" ");return e.jsxs("button",{ref:re,className:oe,disabled:y,"aria-busy":o,onClick:y?void 0:ie,...le,children:[w&&!o&&e.jsx("img",{src:w,alt:"","aria-hidden":"true",className:`${c[a]} rounded-sm object-cover flex-shrink-0`}),o?e.jsx("span",{className:`${c[a]} flex items-center justify-center flex-shrink-0`,children:e.jsx(de,{size:a})}):B?e.jsx("span",{className:`${c[a]} flex items-center justify-center flex-shrink-0`,"aria-hidden":"true",children:B}):null,S&&e.jsx("span",{className:o?"opacity-70":"",children:S}),b!==void 0&&!o&&e.jsx("span",{className:"inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-white/20 text-[10px] font-bold tabular-nums",children:b>99?"99+":b}),!o&&k&&e.jsx("span",{className:`${c[a]} flex items-center justify-center flex-shrink-0`,"aria-hidden":"true",children:k})]})});t.displayName="Button";t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'plain' | 'outlined' | 'tonal' | 'solid'",elements:[{name:"literal",value:"'plain'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'tonal'"},{name:"literal",value:"'solid'"}]},description:"강조 수준 스타일 (plain · outlined · tonal · solid)",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"높이 기준 사이즈 (xs=28 · sm=36 · md=40 · lg=44 · xl=48 · 2xl=52)",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:"색상 테마",defaultValue:{value:"'primary'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"로딩 상태",defaultValue:{value:"false",computed:!1}},iconHead:{required:!1,tsType:{name:"ReactNode"},description:"레이블 왼쪽 아이콘 (iconHead)"},iconTail:{required:!1,tsType:{name:"ReactNode"},description:"레이블 오른쪽 아이콘 (iconTail)"},count:{required:!1,tsType:{name:"number"},description:"카운트 배지"},thumbnail:{required:!1,tsType:{name:"string"},description:"내부 썸네일 이미지 URL"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"부모 너비 100%",defaultValue:{value:"false",computed:!1}},fab:{required:!1,tsType:{name:"boolean"},description:"FAB — 화면 위 독립 노출 시 shadow 적용",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const s=()=>e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M10 4v12M4 10h12"})}),j=()=>e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M4 10h12M12 5l5 5-5 5"})}),z=()=>e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M3 6h14M8 6V4.5A.5.5 0 0 1 8.5 4h3a.5.5 0 0 1 .5.5V6M5 6l1 10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-10"})}),T=()=>e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:e.jsx("path",{d:"M10 3v10M6 9l4 4 4-4M3 15v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1"})}),A=()=>e.jsxs("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",width:"100%",height:"100%",children:[e.jsx("circle",{cx:"15",cy:"5",r:"1.5"}),e.jsx("circle",{cx:"15",cy:"15",r:"1.5"}),e.jsx("circle",{cx:"5",cy:"10",r:"1.5"}),e.jsx("path",{d:"M6.5 9.5l7-3.5M6.5 10.5l7 3.5"})]}),r=({children:n,gap:a=8})=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:a},children:n}),i=({label:n,desc:a,children:l})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:"#9999B8",margin:"0 0 4px"},children:n}),a&&e.jsx("p",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A",margin:"0 0 12px",lineHeight:1.6},children:a}),l]}),Z="https://www.figma.com/design/bjbgnz2o",d=n=>({design:{type:"figma",url:`${Z}?node-id=${n}`}}),me={title:"Components/Buttons",component:t,tags:["autodocs"],parameters:{layout:"centered",design:{type:"figma",url:Z},docs:{description:{component:`
활용 목적에 따라 **4개의 type**으로 구분합니다.
각 타입은 총 **6개의 size** 중 적절한 값으로 적용합니다.
필요에 따라 레이블의 앞뒤에 아이콘 또는 썸네일을 선택 노출할 수 있습니다.
원형(Round)과 사각형(Square) 형태를 제공하고, 적절한 Radius값으로 조절하여 사용합니다.

---

### Type

| Type | Description | Usage |
|------|-------------|-------|
| \`basic\` | 기본 버튼 (텍스트 중심으로 필요 시 아이콘 조합) | 주요 행동을 유도하는 CTA에 사용 |
| \`icon\` | 단일 아이콘 버튼 | 다운로드, 공유 등 보조적인 단일 기능 수행에 사용 |
| \`segment\` | 옵션 선택형 버튼 | 동일 위계의 옵션 중 단일 선택이 필요한 경우 사용 |
| \`group\` | 두 개 이상의 버튼 묶음형 | 관련된 복수의 액션을 함께 제시하되, 각 버튼이 독립적으로 동작해야 할 때 |

### Style (variant)

| Style | Description |
|-------|-------------|
| \`plain\` | 강조 없음. 최소한의 시각적 무게가 필요한 경우 사용 |
| \`outlined\` | 약한 강조. 선택적 액션에 사용 |
| \`tonal\` | 중간 강조. 보조 액션에 사용 |
| \`solid\` | 강한 강조. 주요 설정값을 적용하거나 구매·예약 등의 CTA에 사용 |

### State

| State | Description |
|-------|-------------|
| \`enabled\` | 기본 상태. 사용자가 인터랙션 가능한 경우 |
| \`disabled\` | 비활성 상태. 액션이 불가능한 경우 |

### Contents (Slots)

| Slot | Value | Description |
|------|-------|-------------|
| \`label\` | default | 버튼의 텍스트 레이블 |
| \`iconHead\` | false / true | 레이블 왼쪽 아이콘 — 레이블을 보조하는 시각정보 |
| \`iconTail\` | false / true | 레이블 오른쪽 아이콘 — 수행 이후의 동작을 예상하도록 돕는 보조장치 |
| \`count\` | false / true | 액션이 발생할 때마다 카운트, 전환되는 리스트 위치를 안내 |
| \`thumbnail\` | false / true | 버튼 내부의 이미지 썸네일 |

\`\`\`tsx
import { Button } from '@/components/Buttons';

<Button variant="solid" size="md" color="primary">저장하기</Button>
<Button variant="outlined" size="sm" iconHead={<IcDownload />}>다운로드</Button>
\`\`\`
        `.trim()}}},argTypes:{variant:{control:"select",options:["plain","outlined","tonal","solid"],description:"강조 수준 스타일",table:{type:{summary:"ButtonVariant"},defaultValue:{summary:"solid"}}},size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"높이 기준 사이즈 (xs=28 · sm=36 · md=40 · lg=44 · xl=48 · 2xl=52)",table:{type:{summary:"ButtonSize"},defaultValue:{summary:"md"}}},color:{control:"select",options:["primary","secondary","danger","neutral"],description:"색상 테마",table:{type:{summary:"ButtonColor"},defaultValue:{summary:"primary"}}},loading:{control:"boolean",description:"로딩 스피너 표시 및 자동 비활성화",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성 상태 — 액션이 불가능한 경우",table:{defaultValue:{summary:"false"}}},fab:{control:"boolean",description:"FAB — 화면 위 독립 노출 시 shadow 적용",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"부모 너비 100%",table:{defaultValue:{summary:"false"}}},count:{control:"number",description:"카운트 배지 숫자"},iconHead:{control:!1,description:"레이블 왼쪽 아이콘 (iconHead)"},iconTail:{control:!1,description:"레이블 오른쪽 아이콘 (iconTail)"},thumbnail:{control:"text",description:"내부 썸네일 이미지 URL"},children:{control:"text",description:"버튼 레이블"}}},u={parameters:{...d("0-1")},args:{variant:"solid",size:"md",color:"primary",children:"버튼",loading:!1,disabled:!1,fullWidth:!1,fab:!1}},p={name:"Style — plain · outlined · tonal · solid",parameters:{...d("0-2")},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:4},children:[e.jsx(i,{label:"solid",desc:"강한 강조. 주요 설정값을 적용하거나 구매·예약 등의 과업을 완결하는 CTA에 사용",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",color:"primary",children:"Primary"}),e.jsx(t,{variant:"solid",color:"secondary",children:"Secondary"}),e.jsx(t,{variant:"solid",color:"danger",children:"Danger"}),e.jsx(t,{variant:"solid",color:"neutral",children:"Neutral"})]})}),e.jsx(i,{label:"tonal",desc:"중간 강조. 보조 액션에 사용",children:e.jsxs(r,{children:[e.jsx(t,{variant:"tonal",color:"primary",children:"Primary"}),e.jsx(t,{variant:"tonal",color:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tonal",color:"danger",children:"Danger"}),e.jsx(t,{variant:"tonal",color:"neutral",children:"Neutral"})]})}),e.jsx(i,{label:"outlined",desc:"약한 강조. 선택적 액션에 사용",children:e.jsxs(r,{children:[e.jsx(t,{variant:"outlined",color:"primary",children:"Primary"}),e.jsx(t,{variant:"outlined",color:"secondary",children:"Secondary"}),e.jsx(t,{variant:"outlined",color:"danger",children:"Danger"}),e.jsx(t,{variant:"outlined",color:"neutral",children:"Neutral"})]})}),e.jsx(i,{label:"plain",desc:"강조 없음. 최소한의 시각적 무게가 필요한 경우 사용",children:e.jsxs(r,{children:[e.jsx(t,{variant:"plain",color:"primary",children:"Primary"}),e.jsx(t,{variant:"plain",color:"secondary",children:"Secondary"}),e.jsx(t,{variant:"plain",color:"danger",children:"Danger"}),e.jsx(t,{variant:"plain",color:"neutral",children:"Neutral"})]})})]})},x={name:"Size — xs · sm · md · lg · xl · 2xl",parameters:{...d("0-3")},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(i,{label:"Measurement",desc:"Height 기준으로 정의. 사용되는 레이아웃 밀도에 따라 선택합니다.",children:e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",fontFamily:"Pretendard, sans-serif",fontSize:12,whiteSpace:"nowrap"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid #E4E4EE"},children:["Attribute","xs","sm","md","lg","xl","2xl"].map(n=>e.jsx("th",{style:{padding:"8px 16px",textAlign:"center",fontWeight:700,color:"#55557A"},children:n},n))})}),e.jsx("tbody",{children:[["Height","28","36","40","44","48","52"],["Icon size","최대 16","최대 16","최대 20","최대 20","최대 20","최대 20"],["Text size","12","14","15","15","16","16"],["Min padding","10","12","12","16","16","20"],["Radius","최소 6","최소 6","최소 8","최소 8","최소 8","최소 8"]].map(n=>e.jsx("tr",{style:{borderBottom:"1px solid #F0F0F8"},children:n.map((a,l)=>e.jsx("td",{style:{padding:"8px 16px",textAlign:"center",color:l===0?"#55557A":"#111122",fontWeight:l===0?600:400},children:a},l))},n[0]))})]})})}),e.jsx(i,{label:"Usage",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{size:"xs",desc:"공간 제한이 있는 인라인 영역 내 제공하는 경우"},{size:"sm",desc:"카드·리스트 등 블록 내 보조 기능 또는 이동 경로 제안하는 경우"},{size:"md",desc:"기본 사이즈로 일반 콘텐츠 영역에서 사용하는 경우"},{size:"lg",desc:"섹션 내 주요 행동을 유도하는 경우"},{size:"xl",desc:"페이지 하단 또는 폼 제출 영역의 전체 너비로 활용하는 경우"},{size:"2xl",desc:"다이얼로그·바텀시트 등 명시적인 확인이 필요한 경우"}].map(({size:n,desc:a})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(t,{variant:"solid",size:n,children:n}),e.jsx("span",{style:{fontFamily:"Pretendard, sans-serif",fontSize:12,color:"#55557A"},children:a})]},n))})})]})},m={name:"State — enabled · disabled · loading",parameters:{...d("0-4")},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(i,{label:"enabled",desc:"기본 상태. 사용자가 인터랙션 가능한 경우",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",children:"Solid"}),e.jsx(t,{variant:"tonal",children:"Tonal"}),e.jsx(t,{variant:"outlined",children:"Outlined"}),e.jsx(t,{variant:"plain",children:"Plain"})]})}),e.jsx(i,{label:"disabled",desc:"비활성 상태. 액션이 불가능한 경우 사용합니다.",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",disabled:!0,children:"Solid"}),e.jsx(t,{variant:"tonal",disabled:!0,children:"Tonal"}),e.jsx(t,{variant:"outlined",disabled:!0,children:"Outlined"}),e.jsx(t,{variant:"plain",disabled:!0,children:"Plain"})]})}),e.jsx(i,{label:"loading",desc:"비동기 처리 중 스피너 노출. 자동으로 disabled 처리됩니다.",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",loading:!0,children:"저장 중..."}),e.jsx(t,{variant:"tonal",loading:!0,children:"처리 중"}),e.jsx(t,{variant:"outlined",loading:!0,children:"불러오는 중"})]})})]})},f={name:"Contents — iconHead · iconTail · count · thumbnail",parameters:{...d("0-5")},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(i,{label:"iconHead",desc:"레이블 왼쪽 아이콘. 레이블을 보조하는 시각정보로 사용합니다.",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",iconHead:e.jsx(s,{}),children:"추가하기"}),e.jsx(t,{variant:"outlined",iconHead:e.jsx(T,{}),children:"다운로드"}),e.jsx(t,{variant:"tonal",iconHead:e.jsx(A,{}),children:"공유하기"}),e.jsx(t,{variant:"plain",color:"danger",iconHead:e.jsx(z,{}),children:"삭제"})]})}),e.jsx(i,{label:"iconTail",desc:"레이블 오른쪽 아이콘. 수행 이후의 동작을 예상하도록 돕는 보조장치.",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",iconTail:e.jsx(j,{}),children:"다음 단계"}),e.jsx(t,{variant:"outlined",iconTail:e.jsx(j,{}),children:"더 보기"}),e.jsx(t,{variant:"plain",iconTail:e.jsx(j,{}),children:"자세히 보기"})]})}),e.jsx(i,{label:"count",desc:"액션이 발생할 때마다 카운트. 전환되는 리스트 위치를 안내합니다.",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",count:3,children:"알림"}),e.jsx(t,{variant:"tonal",count:12,children:"댓글"}),e.jsx(t,{variant:"outlined",count:99,children:"메시지"}),e.jsx(t,{variant:"solid",count:100,children:"99+ 테스트"})]})}),e.jsx(i,{label:"icon only",desc:"단일 아이콘 버튼 (type=icon). px를 줄여 정사각형 형태로 사용합니다.",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",className:"!px-2.5",children:e.jsx(s,{})}),e.jsx(t,{variant:"tonal",className:"!px-2.5",children:e.jsx(T,{})}),e.jsx(t,{variant:"outlined",className:"!px-2.5",children:e.jsx(A,{})}),e.jsx(t,{variant:"plain",className:"!px-2.5",children:e.jsx(z,{})}),e.jsx(t,{variant:"solid",size:"sm",className:"!px-2",children:e.jsx(s,{})}),e.jsx(t,{variant:"solid",size:"lg",className:"!px-3",children:e.jsx(s,{})})]})})]})},g={name:"FAB — Floating Action Button",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(i,{label:"fab=false",desc:"일반 버튼 형태로 사용합니다.",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",fab:!1,iconHead:e.jsx(s,{}),children:"새로 만들기"}),e.jsx(t,{variant:"solid",fab:!1,className:"!px-2.5",children:e.jsx(s,{})})]})}),e.jsx(i,{label:"fab=true",desc:"화면 상위에 독립적으로 노출하는 경우 사용합니다. shadow 적용.",children:e.jsxs(r,{children:[e.jsx(t,{variant:"solid",fab:!0,iconHead:e.jsx(s,{}),children:"새로 만들기"}),e.jsx(t,{variant:"solid",fab:!0,className:"!px-2.5 rounded-full",children:e.jsx(s,{})})]})})]})},v={render:()=>e.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:10},children:e.jsx(i,{label:"Full Width",desc:"페이지 하단·폼 제출·바텀시트 등에서 사용합니다.",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{variant:"solid",size:"xl",fullWidth:!0,children:"로그인"}),e.jsx(t,{variant:"outlined",size:"xl",fullWidth:!0,children:"회원가입"}),e.jsx(t,{variant:"plain",size:"md",fullWidth:!0,children:"나중에 하기"})]})})})},h={name:"Matrix — Style × Size",render:()=>{const n=["solid","tonal","outlined","plain"],a=["xs","sm","md","lg","xl","2xl"];return e.jsx("div",{style:{fontFamily:"Pretendard, sans-serif",overflowX:"auto",padding:4},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"8px 16px 8px 0",textAlign:"left",fontSize:11,color:"#9999B8",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:"Style \\ Size"}),a.map(l=>e.jsx("th",{style:{padding:"8px 16px",fontSize:11,color:"#9999B8",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase"},children:l},l))]})}),e.jsx("tbody",{children:n.map(l=>e.jsxs("tr",{style:{borderTop:"1px solid #F0F0F8"},children:[e.jsx("td",{style:{padding:"12px 16px 12px 0",fontSize:12,fontWeight:600,color:"#55557A",verticalAlign:"middle"},children:l}),a.map(o=>e.jsx("td",{style:{padding:"12px 16px",verticalAlign:"middle",textAlign:"center"},children:e.jsx(t,{variant:l,size:o,children:o})},o))]},l))})]})})}};var N,D,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    ...figmaNode('0-1') // TODO: Figma에서 Button Overview 프레임 node-id로 교체
  },
  args: {
    variant: 'solid',
    size: 'md',
    color: 'primary',
    children: '버튼',
    loading: false,
    disabled: false,
    fullWidth: false,
    fab: false
  }
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var F,W,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Style — plain · outlined · tonal · solid',
  parameters: {
    ...figmaNode('0-2') // TODO: Style 섹션 프레임 node-id로 교체
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 4
  }}>
      <Block label="solid" desc="강한 강조. 주요 설정값을 적용하거나 구매·예약 등의 과업을 완결하는 CTA에 사용">
        <Row>
          <Button variant="solid" color="primary">Primary</Button>
          <Button variant="solid" color="secondary">Secondary</Button>
          <Button variant="solid" color="danger">Danger</Button>
          <Button variant="solid" color="neutral">Neutral</Button>
        </Row>
      </Block>
      <Block label="tonal" desc="중간 강조. 보조 액션에 사용">
        <Row>
          <Button variant="tonal" color="primary">Primary</Button>
          <Button variant="tonal" color="secondary">Secondary</Button>
          <Button variant="tonal" color="danger">Danger</Button>
          <Button variant="tonal" color="neutral">Neutral</Button>
        </Row>
      </Block>
      <Block label="outlined" desc="약한 강조. 선택적 액션에 사용">
        <Row>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="danger">Danger</Button>
          <Button variant="outlined" color="neutral">Neutral</Button>
        </Row>
      </Block>
      <Block label="plain" desc="강조 없음. 최소한의 시각적 무게가 필요한 경우 사용">
        <Row>
          <Button variant="plain" color="primary">Primary</Button>
          <Button variant="plain" color="secondary">Secondary</Button>
          <Button variant="plain" color="danger">Danger</Button>
          <Button variant="plain" color="neutral">Neutral</Button>
        </Row>
      </Block>
    </div>
}`,...(I=(W=p.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var P,C,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Size — xs · sm · md · lg · xl · 2xl',
  parameters: {
    ...figmaNode('0-3') // TODO: Size 섹션 프레임 node-id로 교체
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="Measurement" desc="Height 기준으로 정의. 사용되는 레이아웃 밀도에 따라 선택합니다.">
        <div style={{
        overflowX: 'auto'
      }}>
          <table style={{
          borderCollapse: 'collapse',
          fontFamily: 'Pretendard, sans-serif',
          fontSize: 12,
          whiteSpace: 'nowrap'
        }}>
            <thead>
              <tr style={{
              borderBottom: '1px solid #E4E4EE'
            }}>
                {['Attribute', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].map(h => <th key={h} style={{
                padding: '8px 16px',
                textAlign: 'center',
                fontWeight: 700,
                color: '#55557A'
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['Height', '28', '36', '40', '44', '48', '52'], ['Icon size', '최대 16', '최대 16', '최대 20', '최대 20', '최대 20', '최대 20'], ['Text size', '12', '14', '15', '15', '16', '16'], ['Min padding', '10', '12', '12', '16', '16', '20'], ['Radius', '최소 6', '최소 6', '최소 8', '최소 8', '최소 8', '최소 8']].map(row => <tr key={row[0]} style={{
              borderBottom: '1px solid #F0F0F8'
            }}>
                  {row.map((cell, i) => <td key={i} style={{
                padding: '8px 16px',
                textAlign: 'center',
                color: i === 0 ? '#55557A' : '#111122',
                fontWeight: i === 0 ? 600 : 400
              }}>
                      {cell}
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {([{
          size: 'xs',
          desc: '공간 제한이 있는 인라인 영역 내 제공하는 경우'
        }, {
          size: 'sm',
          desc: '카드·리스트 등 블록 내 보조 기능 또는 이동 경로 제안하는 경우'
        }, {
          size: 'md',
          desc: '기본 사이즈로 일반 콘텐츠 영역에서 사용하는 경우'
        }, {
          size: 'lg',
          desc: '섹션 내 주요 행동을 유도하는 경우'
        }, {
          size: 'xl',
          desc: '페이지 하단 또는 폼 제출 영역의 전체 너비로 활용하는 경우'
        }, {
          size: '2xl',
          desc: '다이얼로그·바텀시트 등 명시적인 확인이 필요한 경우'
        }] as {
          size: ButtonSize;
          desc: string;
        }[]).map(({
          size,
          desc
        }) => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
              <Button variant="solid" size={size}>{size}</Button>
              <span style={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: 12,
            color: '#55557A'
          }}>{desc}</span>
            </div>)}
        </div>
      </Block>
    </div>
}`,...(H=(C=x.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var M,V,O;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'State — enabled · disabled · loading',
  parameters: {
    ...figmaNode('0-4') // TODO: State 섹션 프레임 node-id로 교체
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="enabled" desc="기본 상태. 사용자가 인터랙션 가능한 경우">
        <Row>
          <Button variant="solid">Solid</Button>
          <Button variant="tonal">Tonal</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="plain">Plain</Button>
        </Row>
      </Block>
      <Block label="disabled" desc="비활성 상태. 액션이 불가능한 경우 사용합니다.">
        <Row>
          <Button variant="solid" disabled>Solid</Button>
          <Button variant="tonal" disabled>Tonal</Button>
          <Button variant="outlined" disabled>Outlined</Button>
          <Button variant="plain" disabled>Plain</Button>
        </Row>
      </Block>
      <Block label="loading" desc="비동기 처리 중 스피너 노출. 자동으로 disabled 처리됩니다.">
        <Row>
          <Button variant="solid" loading>저장 중...</Button>
          <Button variant="tonal" loading>처리 중</Button>
          <Button variant="outlined" loading>불러오는 중</Button>
        </Row>
      </Block>
    </div>
}`,...(O=(V=m.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var L,q,E;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Contents — iconHead · iconTail · count · thumbnail',
  parameters: {
    ...figmaNode('0-5') // TODO: Contents 섹션 프레임 node-id로 교체
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="iconHead" desc="레이블 왼쪽 아이콘. 레이블을 보조하는 시각정보로 사용합니다.">
        <Row>
          <Button variant="solid" iconHead={<IcPlus />}>추가하기</Button>
          <Button variant="outlined" iconHead={<IcDownload />}>다운로드</Button>
          <Button variant="tonal" iconHead={<IcShare />}>공유하기</Button>
          <Button variant="plain" color="danger" iconHead={<IcTrash />}>삭제</Button>
        </Row>
      </Block>
      <Block label="iconTail" desc="레이블 오른쪽 아이콘. 수행 이후의 동작을 예상하도록 돕는 보조장치.">
        <Row>
          <Button variant="solid" iconTail={<IcArrow />}>다음 단계</Button>
          <Button variant="outlined" iconTail={<IcArrow />}>더 보기</Button>
          <Button variant="plain" iconTail={<IcArrow />}>자세히 보기</Button>
        </Row>
      </Block>
      <Block label="count" desc="액션이 발생할 때마다 카운트. 전환되는 리스트 위치를 안내합니다.">
        <Row>
          <Button variant="solid" count={3}>알림</Button>
          <Button variant="tonal" count={12}>댓글</Button>
          <Button variant="outlined" count={99}>메시지</Button>
          <Button variant="solid" count={100}>99+ 테스트</Button>
        </Row>
      </Block>
      <Block label="icon only" desc="단일 아이콘 버튼 (type=icon). px를 줄여 정사각형 형태로 사용합니다.">
        <Row>
          <Button variant="solid" className="!px-2.5"><IcPlus /></Button>
          <Button variant="tonal" className="!px-2.5"><IcDownload /></Button>
          <Button variant="outlined" className="!px-2.5"><IcShare /></Button>
          <Button variant="plain" className="!px-2.5"><IcTrash /></Button>
          <Button variant="solid" size="sm" className="!px-2"><IcPlus /></Button>
          <Button variant="solid" size="lg" className="!px-3"><IcPlus /></Button>
        </Row>
      </Block>
    </div>
}`,...(E=(q=f.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var $,U,_;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'FAB — Floating Action Button',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Block label="fab=false" desc="일반 버튼 형태로 사용합니다.">
        <Row>
          <Button variant="solid" fab={false} iconHead={<IcPlus />}>새로 만들기</Button>
          <Button variant="solid" fab={false} className="!px-2.5"><IcPlus /></Button>
        </Row>
      </Block>
      <Block label="fab=true" desc="화면 상위에 독립적으로 노출하는 경우 사용합니다. shadow 적용.">
        <Row>
          <Button variant="solid" fab iconHead={<IcPlus />}>새로 만들기</Button>
          <Button variant="solid" fab className="!px-2.5 rounded-full"><IcPlus /></Button>
        </Row>
      </Block>
    </div>
}`,...(_=(U=g.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var X,G,J;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }}>
      <Block label="Full Width" desc="페이지 하단·폼 제출·바텀시트 등에서 사용합니다.">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <Button variant="solid" size="xl" fullWidth>로그인</Button>
          <Button variant="outlined" size="xl" fullWidth>회원가입</Button>
          <Button variant="plain" size="md" fullWidth>나중에 하기</Button>
        </div>
      </Block>
    </div>
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Matrix — Style × Size',
  render: () => {
    const variants: ButtonVariant[] = ['solid', 'tonal', 'outlined', 'plain'];
    const sizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    return <div style={{
      fontFamily: 'Pretendard, sans-serif',
      overflowX: 'auto',
      padding: 4
    }}>
        <table style={{
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>
              <th style={{
              padding: '8px 16px 8px 0',
              textAlign: 'left',
              fontSize: 11,
              color: '#9999B8',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase'
            }}>
                Style \\ Size
              </th>
              {sizes.map(s => <th key={s} style={{
              padding: '8px 16px',
              fontSize: 11,
              color: '#9999B8',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase'
            }}>
                  {s}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {variants.map(v => <tr key={v} style={{
            borderTop: '1px solid #F0F0F8'
          }}>
                <td style={{
              padding: '12px 16px 12px 0',
              fontSize: 12,
              fontWeight: 600,
              color: '#55557A',
              verticalAlign: 'middle'
            }}>
                  {v}
                </td>
                {sizes.map(s => <td key={s} style={{
              padding: '12px 16px',
              verticalAlign: 'middle',
              textAlign: 'center'
            }}>
                    <Button variant={v} size={s}>{s}</Button>
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const fe=["Playground","Styles","Sizes","States","Contents","FAB","FullWidth","Matrix"];export{f as Contents,g as FAB,v as FullWidth,h as Matrix,u as Playground,x as Sizes,m as States,p as Styles,fe as __namedExportsOrder,me as default};
