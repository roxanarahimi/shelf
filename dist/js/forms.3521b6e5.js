"use strict";(self["webpackChunkmonitoring"]=self["webpackChunkmonitoring"]||[]).push([[132],{6814:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var s=n(6768),r=n(4232);const l={class:""},o=(0,s.Lk)("b",{class:"mb-5 text-start d-block px-3"},"فرمهای من",-1),i=(0,s.Lk)("div",{class:"d-flex justify-content-between px-4 mb-3"},[(0,s.Lk)("b",null,"شماره مشتری"),(0,s.Lk)("b",null,"تاریخ")],-1),u=(0,s.Lk)("div",null,"12345678910",-1),a=(0,s.Lk)("div",null,"1403/05/10",-1);function c(t,e,n,c,d,f){const k=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",l,[o,i,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(c.visitor.forms,((t,e)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,r.C4)([{"bg-light":e%2==0},"d-flex justify-content-between"])},[(0,s.bF)(k,{to:"/form/"+t.id,class:"w-100 d-flex justify-content-between p-4"},{default:(0,s.k6)((()=>[u,a])),_:2},1032,["to"])],2)))),256))])}var d=n(144),f=n(2525),k=n(1387),b={name:"Forms",setup(){const t=(0,k.lq)(),e=f.A.setup().panelUrl,n=(0,d.KR)({}),r=()=>{axios.get(e+"visitor/"+JSON.parse(localStorage.getItem("user")).id).then((t=>{n.value=t.data,localStorage.setItem("user",JSON.stringify(t.data))})).catch((t=>{console.error(t)}))};return(0,s.KC)((()=>{f.A.setup().checkUser(),r()})),{visitor:n,route:t,panelUrl:e,reloadVisitor:r}}},p=n(1241);const v=(0,p.A)(b,[["render",c]]);var g=v}}]);
//# sourceMappingURL=forms.3521b6e5.js.map