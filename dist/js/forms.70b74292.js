"use strict";(self["webpackChunkmonitoring"]=self["webpackChunkmonitoring"]||[]).push([[132],{352:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(6768),s=n(4232);const o={class:""},l=(0,r.Lk)("b",{class:"mb-5 text-start d-block px-3"},"فرمهای من",-1),u=(0,r.Lk)("div",{class:"d-flex justify-content-between px-4 mb-3"},[(0,r.Lk)("b",null,"شماره مشتری"),(0,r.Lk)("b",null,"تاریخ")],-1);function c(e,t,n,c,a,i){const d=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",o,[l,u,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(c.forms,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:(0,s.C4)([{"bg-light":t%2==0},"d-flex justify-content-between"])},[(0,r.bF)(d,{to:"/form/"+e.id,class:"w-100 d-flex justify-content-between p-4"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",null,(0,s.v_)(e.customer.code),1),(0,r.Lk)("div",null,(0,s.v_)(e.created_at),1)])),_:2},1032,["to"])],2)))),256))])}var a=n(3749),i=n(1387),d={name:"Forms",setup(){const e=(0,i.lq)(),t=(0,i.rd)(),n=a.A.setup().panelUrl,s=JSON.parse(localStorage.getItem("user")),o=[];return(0,r.KC)((()=>{a.A.setup().checkUser(),axios.get(n+"api/forms/visitor/"+s.id).then((e=>{o.value=e.data})).catch((e=>{console.error(e)}))})),{visitor:s,route:e,panelUrl:n,router:t,forms:o}}},f=n(1241);const k=(0,f.A)(d,[["render",c]]);var p=k}}]);
//# sourceMappingURL=forms.70b74292.js.map