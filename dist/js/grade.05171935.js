"use strict";(self["webpackChunkmonitoring"]=self["webpackChunkmonitoring"]||[]).push([[924],{8687:function(e,s,t){t.d(s,{A:function(){return E}});var o=t(6768),c=t(4232);const r={class:"align-self-start text-start bg-light rounded rounded p-3"},l={class:"px-1 mb-4 text-start"},u=["value"],d=(0,o.Lk)("b",null,"استان ",-1),a={class:"d-inline-block"},n=(0,o.Lk)("b",null," شهر ",-1),i={class:"d-inline-block"},m=(0,o.Lk)("br",null,null,-1),p=(0,o.Lk)("b",null," منطقه ",-1),k={class:"d-inline-block"},v=(0,o.Lk)("b",null," مسیر ",-1),L={class:"d-inline-block"},_=(0,o.Lk)("b",null," کد مسیر ",-1),b={class:"d-inline-block"},y={class:"d-flex justify-content-between"},f=(0,o.Lk)("b",null,"تلفن ",-1),g={class:"d-inline-block"},h={key:0},x=(0,o.Lk)("b",null,"گرید ",-1),q={class:"d-inline-block"};function C(e,s,t,C,S,A){return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("div",l,[(0,o.Lk)("input",{type:"hidden",id:"customer_id",value:t.customer.id},null,8,u),(0,o.Lk)("p",null,(0,c.v_)(t.customer.name),1),(0,o.Lk)("p",null,(0,c.v_)(t.customer.address),1),d,(0,o.Lk)("p",a,(0,c.v_)(t.customer.province.title),1),n,(0,o.Lk)("p",i,(0,c.v_)(t.customer.city.title),1),m,(0,o.Lk)("div",null,[p,(0,o.Lk)("p",k,(0,c.v_)(t.customer.region.title),1),v,(0,o.Lk)("p",L,(0,c.v_)(t.customer.path),1),_,(0,o.Lk)("p",b,(0,c.v_)(t.customer.path_code),1)]),(0,o.Lk)("div",null,[(0,o.Lk)("p",null,(0,c.v_)(t.customer.path_description),1)]),(0,o.Lk)("div",y,[(0,o.Lk)("div",null,[f,(0,o.Lk)("p",g,[(0,o.eW)((0,c.v_)(t.customer.phone)+" ",1),t.customer.mobile&&t.customer.phone?((0,o.uX)(),(0,o.CE)("span",h,"-")):(0,o.Q3)("",!0),(0,o.eW)(" "+(0,c.v_)(t.customer.mobile),1)])]),(0,o.Lk)("div",null,[x,(0,o.Lk)("p",q,(0,c.v_)(t.customer.scores?.grade),1)])])])])}var S={name:"CustomerInfo",props:["customer"]},A=t(1241);const X=(0,A.A)(S,[["render",C]]);var E=X},57:function(e,s,t){t.r(s),t.d(s,{default:function(){return se}});var o=t(6768),c=t(4232);const r={class:"d-grid text-start h-100 px-4"},l=(0,o.Lk)("b",{class:"mb-4 text-start d-block"},"گرید بندی فروشگاه",-1),u={class:"row p-0 m-0"},d={class:"col-6 px-1"},a=(0,o.Lk)("label",{for:"meterage"},"متراژ سوپر مارکت",-1),n={class:"form-select form-select-sm",id:"meterage"},i=["selected"],m=["selected"],p=["selected"],k=["selected"],v=["selected"],L={class:"col-6 px-1"},_=(0,o.Lk)("label",{for:"product_variety"},"تنوع محصولات",-1),b={class:"form-select form-select-sm",id:"product_variety"},y=["selected"],f=["selected"],g=["selected"],h=["selected"],x=["selected"],q={class:"col-6 px-1"},C=(0,o.Lk)("label",{for:"product_layout"},"چیدمان محصولات",-1),S={class:"form-select form-select-sm",id:"product_layout"},A=["selected"],X=["selected"],E=["selected"],w=["selected"],K=["selected"],I={class:"col-6 px-1"},U=(0,o.Lk)("label",{for:"equipment"},"تجهیزات سوپر مارکت",-1),W={class:"form-select form-select-sm",id:"equipment"},Q=["selected"],R=["selected"],j=["selected"],F=["selected"],G=["selected"],z={class:"col-12 px-1"},B=(0,o.Lk)("label",{for:"sector_id"},"محله",-1),D={class:"form-select form-select-sm",id:"sector_id"},H=["selected","value"],J=(0,o.Lk)("div",{class:"px-1"},[(0,o.Lk)("label",{for:"image"},"تصویر سردر سوپر مارکت"),(0,o.Lk)("div",{class:"rounded",id:"image",style:{border:"dashed #c9c9c9 1px",height:"100px"}})],-1),M={class:"align-self-end my-2"};function N(e,s,t,N,O,P){const T=(0,o.g2)("customer-info");return(0,o.uX)(),(0,o.CE)("div",r,[l,N.customer.id?((0,o.uX)(),(0,o.Wv)(T,{key:0,customer:N.customer},null,8,["customer"])):(0,o.Q3)("",!0),(0,o.Lk)("div",u,[(0,o.Lk)("div",d,[a,(0,o.Lk)("select",n,[(0,o.Lk)("option",{selected:N.customer.scores&&1==N.customer.scores.meterage,value:"1"},"کمتر از 12",8,i),(0,o.Lk)("option",{selected:N.customer.scores&&2==N.customer.scores.meterage,value:"2"},"12 تا 25",8,m),(0,o.Lk)("option",{selected:N.customer.scores&&3==N.customer.scores.meterage,value:"3"},"25 تا 45",8,p),(0,o.Lk)("option",{selected:N.customer.scores&&4==N.customer.scores.meterage,value:"4"},"45 تا 60",8,k),(0,o.Lk)("option",{selected:N.customer.scores&&5==N.customer.scores.meterage,value:"5"},"بیش از 60",8,v)])]),(0,o.Lk)("div",L,[_,(0,o.Lk)("select",b,[(0,o.Lk)("option",{selected:N.customer.scores&&1==N.customer.scores.product_variety,value:"1"},"1",8,y),(0,o.Lk)("option",{selected:N.customer.scores&&2==N.customer.scores.product_variety,value:"2"},"2",8,f),(0,o.Lk)("option",{selected:N.customer.scores&&3==N.customer.scores.product_variety,value:"3"},"3",8,g),(0,o.Lk)("option",{selected:N.customer.scores&&4==N.customer.scores.product_variety,value:"4"},"4",8,h),(0,o.Lk)("option",{selected:N.customer.scores&&5==N.customer.scores.product_variety,value:"5"},"5",8,x)])]),(0,o.Lk)("div",q,[C,(0,o.Lk)("select",S,[(0,o.Lk)("option",{selected:N.customer.scores&&1==N.customer.scores.product_layout,value:"1"},"1",8,A),(0,o.Lk)("option",{selected:N.customer.scores&&2==N.customer.scores.product_layout,value:"2"},"2",8,X),(0,o.Lk)("option",{selected:N.customer.scores&&3==N.customer.scores.product_layout,value:"3"},"3",8,E),(0,o.Lk)("option",{selected:N.customer.scores&&4==N.customer.scores.product_layout,value:"4"},"4",8,w),(0,o.Lk)("option",{selected:N.customer.scores&&5==N.customer.scores.product_layout,value:"5"},"5",8,K)])]),(0,o.Lk)("div",I,[U,(0,o.Lk)("select",W,[(0,o.Lk)("option",{selected:N.customer.scores&&1==N.customer.scores.equipment,value:"1"},"1",8,Q),(0,o.Lk)("option",{selected:N.customer.scores&&2==N.customer.scores.equipment,value:"2"},"2",8,R),(0,o.Lk)("option",{selected:N.customer.scores&&3==N.customer.scores.equipment,value:"3"},"3",8,j),(0,o.Lk)("option",{selected:N.customer.scores&&4==N.customer.scores.equipment,value:"4"},"4",8,F),(0,o.Lk)("option",{selected:N.customer.scores&&5==N.customer.scores.equipment,value:"5"},"5",8,G)])]),(0,o.Lk)("div",z,[B,(0,o.Lk)("select",D,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(N.sectors,(e=>((0,o.uX)(),(0,o.CE)("option",{selected:N.customer.scores&&N.customer.scores.sector.id==e.id,key:e.id,value:e.id},(0,c.v_)(e.title),9,H)))),128))])]),J]),(0,o.Lk)("div",M,[(0,o.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>N.saveScores&&N.saveScores(...e)),class:"btn bg"},"ذخیره")])])}t(4114);var O=t(144),P=t(3120),T=t(1387),V=t(1877),Y=t(8687),Z={name:"Grade",components:{CustomerInfo:Y.A},setup(){const e=(0,T.lq)(),s=P.A.setup().panelUrl,t=(0,O.KR)({}),c=(0,O.KR)([]),r=()=>{axios.get(s+"customer/"+e.params.id).then((e=>{t.value=e.data})).then((()=>{l()})).catch((e=>{console.error(e)}))},l=()=>{axios.get(s+"sector?city_id="+t.value.city.id).then((e=>{c.value=e.data})).catch((e=>{console.error(e)}))},u=()=>{axios.post(s+"score",{customer_id:t.value.id,sector_id:document.querySelector("#sector_id").value,meterage:document.querySelector("#meterage").value,product_variety:document.querySelector("#product_variety").value,product_layout:document.querySelector("#product_layout").value,equipment:document.querySelector("#equipment").value}).then((e=>{V.A.push({path:"/customer",query:{code:t.value.code}})})).catch((e=>{console.error(e)}))};return(0,o.KC)((()=>{P.A.setup().checkUser(),r()})),{panelUrl:s,loadSectors:l,sectors:c,customer:t,route:e,findCustomer:r,saveScores:u}}},$=t(1241);const ee=(0,$.A)(Z,[["render",N]]);var se=ee}}]);
//# sourceMappingURL=grade.05171935.js.map