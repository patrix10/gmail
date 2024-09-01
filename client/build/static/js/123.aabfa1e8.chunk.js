"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[123],{9469:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(5043),o=n(6213);const i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const{params:a,urlParams:i,...s}=t;return await(0,o.A)({method:e.method,url:`/${e.endpoint}/${n}`,data:t})},s=e=>{const[t,n]=(0,a.useState)(null),[o,s]=(0,a.useState)(""),[r,l]=(0,a.useState)(!1);return{call:async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(null),l(!0),s("");try{let o=await i(e,t,a);n(o.data)}catch(o){s(o.message)}finally{l(!1)}},response:t,error:o,isLoading:r}}},2123:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var a=n(5043),o=n(4535),i=n(2314),s=n(6446),r=n(5263),l=n(6611),d=n(3287),c=n(9484),p=n(746),x=n(4279),h=n(7871),m=n(8490),g=n(703),u=n(7444),A=n(579);const j=(0,o.Ay)(i.A)`
    background: #f5F5F5;
    box-shadow: none;
`,f=(0,o.Ay)(s.A)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 8px;
    min-width: 690px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`,y=(0,o.Ay)(s.A)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`,b=e=>{let{toggleDrawer:t}=e;return(0,A.jsx)(j,{position:"static",children:(0,A.jsxs)(r.A,{children:[(0,A.jsx)(d.A,{color:"action",onClick:t}),(0,A.jsx)("img",{src:u._3,alt:"logo",style:{width:110,marginLeft:15}}),(0,A.jsxs)(f,{children:[(0,A.jsx)(c.A,{color:"action"}),(0,A.jsx)(l.Ay,{}),(0,A.jsx)(p.A,{color:"action"})]}),(0,A.jsxs)(y,{children:[(0,A.jsx)(x.A,{color:"action"}),(0,A.jsx)(h.A,{color:"action"}),(0,A.jsx)(m.A,{color:"action"}),(0,A.jsx)(g.A,{color:"action"})]})]})})};var w=n(4109),v=n(1906),k=n(5721),S=n(1322),D=n(1485),E=n(5865),C=n(3184),F=n(3438),P=n(349),B=n(9469),T=n(3697);const O={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},J=(0,o.Ay)(s.A)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`,M=(0,o.Ay)(s.A)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`,z=(0,o.Ay)(s.A)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`,R=(0,o.Ay)(v.A)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`,L=e=>{let{open:t,setOpenDrawer:n}=e;const[o,i]=(0,a.useState)({}),s=(0,B.A)(T.y.saveSentEmails),r=(0,B.A)(T.y.saveDraftEmails),d={Username:"pratiksingh10@yopmail.com",Password:"BCFFBBA7483E53834FC048A315EEB6EA3834",Host:"smtp.elasticemail.com",Port:2525},c=e=>{i({...o,[e.target.name]:e.target.value})};return(0,A.jsxs)(D.A,{open:t,PaperProps:{sx:O},children:[(0,A.jsxs)(J,{children:[(0,A.jsx)(E.A,{children:"New Message"}),(0,A.jsx)(F.A,{fontSize:"small",onClick:e=>(e=>{e.preventDefault();const t={to:o.to,from:"pratikvedanshsingh@gmail.com",subject:o.subject,body:o.body,date:new Date,image:"",name:"Pratik Vedansh Singh",starred:!1,type:"drafts"};r.call(t),r.error||(n(!1),i({}))})(e)})]}),(0,A.jsxs)(M,{children:[(0,A.jsx)(l.Ay,{placeholder:"Recipients",name:"to",onChange:e=>c(e),value:o.to}),(0,A.jsx)(l.Ay,{placeholder:"Subject",name:"subject",onChange:e=>c(e),value:o.subject})]}),(0,A.jsx)(C.A,{multiline:!0,rows:20,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:e=>c(e),value:o.body}),(0,A.jsxs)(z,{children:[(0,A.jsx)(R,{onClick:e=>(async e=>{e.preventDefault(),window.Email&&window.Email.send({...d,To:o.to,From:"pratikvedanshsingh@gmail.com",Subject:o.subject,Body:o.body}).then((e=>alert(e)));const t={to:o.to,from:"pratikvedanshsingh@gmail.com",subject:o.subject,body:o.body,date:new Date,image:"",name:"Pratik Vedansh Singh",starred:!1,type:"sent"};s.call(t),s.error||(n(!1),i({}))})(e),children:"Send"}),(0,A.jsx)(P.A,{onClick:()=>n(!1)})]})]})};var $=n(9297),H=n(1418),I=n(4252),V=n(1084),G=n(5837),N=n(5069),U=n(7289);const W=[{name:"inbox",title:"Inbox",icon:H.A,path:$.J.emails.path},{name:"starred",title:"Starred",icon:I.A,path:$.J.emails.path},{name:"sent",title:"Sent",icon:V.A,path:$.J.emails.path},{name:"drafts",title:"Drafts",icon:G.A,path:$.J.emails.path},{name:"bin",title:"Bin",icon:N.A,path:$.J.emails.path},{name:"allmail",title:"All Mail",icon:U.A,path:$.J.emails.path}];var _=n(286),q=n(3216),K=n(5475);const Q=(0,o.Ay)(s.A)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > a {
            text-decoration: none;
            color: inherit;
        }
        & > a > li > svg {
            margin-right: 20px;
        }
    }
`,X=(0,o.Ay)(v.A)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`,Y=()=>{const[e,t]=(0,a.useState)(!1),{type:n}=(0,q.g)();return(0,A.jsxs)(Q,{children:[(0,A.jsxs)(X,{onClick:()=>{t(!0)},children:[(0,A.jsx)(_.A,{style:{marginRight:10}}),"Compose"]}),(0,A.jsx)(k.A,{children:W.map((e=>(0,A.jsx)(K.k2,{to:`${$.J.emails.path}/${e.name}`,children:(0,A.jsxs)(S.Ay,{style:n===e.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,A.jsx)(e.icon,{fontSize:"small"}),e.title]})},e.name)))}),(0,A.jsx)(L,{open:e,setOpenDrawer:t})]})},Z=(0,o.Ay)(w.Ay)`
    margin-top: 54px;
`,ee=e=>{let{toggleDrawer:t,openDrawer:n}=e;return(0,A.jsx)(Z,{anchor:"left",open:n,onClose:t,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,A.jsx)(Y,{})})};var te=n(2912);const ne=(0,o.Ay)(s.A)`
    display: flex;
`,ae=()=>{const[e,t]=(0,a.useState)(!0),n=()=>{t((e=>!e))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(b,{toggleDrawer:n}),(0,A.jsxs)(ne,{children:[(0,A.jsx)(ee,{toggleDrawer:n,openDrawer:e}),(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(te.A,{}),children:(0,A.jsx)(q.sv,{context:{openDrawer:e}})})]})]})}},3697:(e,t,n)=>{n.d(t,{y:()=>a});const a={saveSentEmails:{endpoint:"save",method:"POST"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=123.aabfa1e8.chunk.js.map