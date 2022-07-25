import{d as f,w as R,n as L,r as h,e as N,_ as U,o as C,c as m,a as s,f as k,p as M,g as O,h as T,i as A,b as d,t as q,u as v,j as P,F as S,k as g,v as _,l as E,m as I,q as j,s as x}from"./app.5959b772.js";function W(a){const{items:o,model:n,emptyComparator:t}=a,r=n(),y=h(n()),l=N(()=>[...o.value,y.value]),D=c=>{var i;return(i=t==null?void 0:t(c,r))!=null?i:JSON.stringify(c)===JSON.stringify(r)},F=N(()=>o.value.filter(c=>D(c))),p=c=>{var u;const i=o.value.filter(B=>{var b;return(b=c==null?void 0:c(B,r))!=null?b:F.value.includes(B)});o.value=o.value.filter(B=>!i.includes(B)),(u=a.onRemoveChildren)==null||u.call(a,i)},e=c=>{o.value=o.value.filter(i=>!c.includes(i))};return R(()=>y.value,c=>{var i;D(c)||(y.value=n(),o.value.push(c),(i=a.onNewChild)==null||i.call(a,c))},{deep:!0}),{shownItems:l,clearEmpty:p,empty:F,newItem:y,removeItems:e}}function G(a){const{initialValue:o,...n}=a,t=h(o!=null?o:[]);return{...W({...n,items:t}),items:t}}function $(a){return a.items!==void 0?W(a):G(a)}function V(a){return f({props:{modelValue:{type:Object,required:!0},emptyComparator:{type:Function,default:null}},emits:["update:modelValue","itemAdded","itemsRemoved"],setup(o,{slots:n,emit:t}){const{modelValue:r,...y}=o,l=$({...y,initialValue:r,model:a,onRemoveChildren:u=>t("itemsRemoved",u),onNewChild:u=>t("itemAdded",u)}),{items:D,shownItems:F,empty:p,clearEmpty:e,newItem:c,removeItems:i}=l;return R(()=>o.modelValue,()=>{JSON.stringify(o.modelValue)!==JSON.stringify(D.value)&&(D.value=o.modelValue)},{deep:!0}),R(()=>D.value,u=>t("update:modelValue",u)),()=>n.item?F.value.map(u=>{var b;const B={item:u,clearEmpty:async J=>{e(J),await L(),t("itemsRemoved")},remove:()=>i([u]),isEmpty:p.value.includes(u),isNew:u===c.value};return n.newItem&&B.isNew?n.newItem(B):(b=n.item)==null?void 0:b.call(n,B)}):null}})}const H=a=>(M("data-v-27c6da5d"),a=a(),O(),a),z=H(()=>s("summary",null,"Demo",-1)),K={class:"box"},Q=H(()=>s("summary",null,"Debug",-1)),X={align:"left"},Y=f({__name:"ResultBox",setup(a){const o=n=>Object.fromEntries(Object.entries(n).map(([t,r])=>typeof r=="function"?[t,`[Function: ${r.name}]`]:[t,r]));return(n,t)=>(C(),m("details",null,[z,s("div",K,[k(n.$slots,"default",{},void 0,!0),s("details",null,[Q,s("pre",X,[k(n.$slots,"debug",{format:o},void 0,!0)])])])]))}});var w=U(Y,[["__scopeId","data-v-27c6da5d"]]);const Z=["onUpdate:modelValue"],ss=f({__name:"ComposableInternalTS",setup(a){const n=$({model:()=>({value:""}),initialValue:[{value:"Hello"},{value:"World"}]}),{shownItems:t,clearEmpty:r}=n;return(y,l)=>(C(),T(w,null,{debug:A(({format:D})=>[d(q(D(v(n))),1)]),default:A(()=>[(C(!0),m(S,null,P(v(t),(D,F)=>(C(),m("div",{key:F},[s("label",null,[g(s("input",{"onUpdate:modelValue":p=>D.value=p,onBlur:l[0]||(l[0]=p=>v(r)())},null,40,Z),[[_,D.value]])])]))),128))]),_:1}))}}),ns=["onUpdate:modelValue"],as=f({__name:"ComposableExternalTS",setup(a){const o=()=>({value:""}),n=h([{value:"Hello"},{value:"World"}]),t=$({model:o,items:n}),{shownItems:r,clearEmpty:y}=t;return(l,D)=>(C(),T(w,null,{debug:A(({format:F})=>[d(q(F({items:n.value,list:v(t)})),1)]),default:A(()=>[(C(!0),m(S,null,P(v(r),(F,p)=>(C(),m("div",{key:p},[s("label",null,[g(s("input",{"onUpdate:modelValue":e=>F.value=e,onBlur:D[0]||(D[0]=e=>v(y)())},null,40,ns),[[_,F.value]])])]))),128))]),_:1}))}}),ls=["onUpdate:modelValue","onBlur"],ps=["onClick"],os=f({__name:"ComponentSimpleTS",setup(a){const o=()=>({value:""}),n=h([]),t=V(o);return(r,y)=>(C(),T(w,null,{debug:A(({format:l})=>[d(q(l(n.value)),1)]),default:A(()=>[E(v(t),{modelValue:n.value,"onUpdate:modelValue":y[0]||(y[0]=l=>n.value=l)},{item:A(({item:l,isNew:D,remove:F,clearEmpty:p})=>[s("div",null,[s("label",null,[g(s("input",{"onUpdate:modelValue":e=>l.value=e,onBlur:e=>p()},null,40,ls),[[_,l.value]])]),D?I("",!0):(C(),m("button",{key:0,tabindex:"-1",onClick:e=>F()},"Remove",8,ps))])]),_:1},8,["modelValue"])]),_:1}))}}),es=["onUpdate:modelValue"],ts={key:0},cs=d(" Nickname: "),Ds=["onUpdate:modelValue"],rs=["onClick"],Fs=d(" Add: "),ys=["onUpdate:modelValue"],Cs=s("option",{disabled:"",value:""},"Select",-1),As=s("option",{value:"Person"},"Person",-1),is=s("option",{value:"Company"},"Company",-1),us=[Cs,As,is],ms=f({__name:"ComponentCustomTS",setup(a){const o=()=>({file:"",label:""}),n=h([]),t=V(o);return(r,y)=>(C(),T(w,null,{debug:A(({format:l})=>[d(q(l({value:n.value})),1)]),default:A(()=>[E(v(t),{modelValue:n.value,"onUpdate:modelValue":y[0]||(y[0]=l=>n.value=l)},{item:A(({item:l,isNew:D,remove:F})=>[s("div",null,[s("label",null,[d(q(l.type)+" name: ",1),g(s("input",{"onUpdate:modelValue":p=>l.name=p},null,8,es),[[_,l.name]])]),l.type==="Person"?(C(),m("label",ts,[cs,g(s("input",{"onUpdate:modelValue":p=>l.nickname=p},null,8,Ds),[[_,l.nickname]])])):I("",!0),D?I("",!0):(C(),m("button",{key:1,tabindex:"-1",onClick:p=>F()},"Remove",8,rs))])]),newItem:A(({item:l})=>[s("div",null,[s("label",null,[Fs,g(s("select",{placeholder:"select","onUpdate:modelValue":D=>l.type=D},us,8,ys),[[j,l.type]])])])]),_:1},8,["modelValue"])]),_:1}))}});const ds=a=>(M("data-v-26966f5e"),a=a(),O(),a),gs={class:"row"},vs={class:"col"},Es=d(" Nome: "),Bs=["onUpdate:modelValue","onBlur"],_s={key:0,class:"text-right"},qs=["onClick"],fs={key:0,class:"col pets"},hs=d(" Pet: "),xs=["onUpdate:modelValue","onBlur"],bs=d(" Type: "),Is=["onUpdate:modelValue"],Ts=["value"],ws=["onClick"],Vs=d("Pet: "),Rs=["onUpdate:modelValue"],Ps=ds(()=>s("hr",null,null,-1)),Ss=f({__name:"ComponentNestedTS",setup(a){const o=()=>({name:"",type:null}),n=()=>({name:"",pets:[]}),t=[{value:"cat",label:"Gato"},{value:"dog",label:"Cachorro"},{value:"bird",label:"Ave"}],r=h([{name:"Magali",pets:[{name:"Mingau",type:"cat"}]},{name:"Cebolinha",pets:[{name:"Floquinho",type:"dog"}]},{name:"M\xF4nica",pets:[{name:"Monic\xE3o",type:"dog"}]}]),y=V(n),l=V(o);return(D,F)=>(C(),T(w,null,{debug:A(({format:p})=>[d(q(p({people:r.value})),1)]),default:A(()=>[E(v(y),{modelValue:r.value,"onUpdate:modelValue":F[0]||(F[0]=p=>r.value=p)},{item:A(p=>[s("div",gs,[s("div",vs,[s("div",null,[s("label",null,[Es,g(s("input",{"onUpdate:modelValue":e=>p.item.name=e,onBlur:e=>p.clearEmpty()},null,40,Bs),[[_,p.item.name]])])]),p.isNew?I("",!0):(C(),m("div",_s,[s("button",{tabindex:"-1",onClick:e=>p.remove()},"Remover",8,qs)]))]),p.isNew?I("",!0):(C(),m("div",fs,[E(v(l),{modelValue:p.item.pets,"onUpdate:modelValue":e=>p.item.pets=e,onItemsRemoved:e=>p.clearEmpty()},{item:A(e=>[s("div",null,[s("label",null,[hs,g(s("input",{"onUpdate:modelValue":c=>e.item.name=c,onBlur:c=>e.clearEmpty()},null,40,xs),[[_,e.item.name]])]),s("label",null,[bs,g(s("select",{"onUpdate:modelValue":c=>e.item.type=c},[(C(),m(S,null,P(t,({value:c,label:i})=>s("option",{key:c,value:c},q(i),9,Ts)),64))],8,Is),[[j,e.item.type]])]),s("button",{tabindex:"-1",onClick:async()=>{e.remove(),await L(),p.clearEmpty()}}," Remover ",8,ws)])]),newItem:A(e=>[s("div",null,[s("label",null,[Vs,g(s("input",{"onUpdate:modelValue":c=>e.item.name=c},null,8,Rs),[[_,e.item.name]])])])]),_:2},1032,["modelValue","onUpdate:modelValue","onItemsRemoved"])]))]),Ps]),_:1},8,["modelValue"])]),_:1}))}});var $s=U(Ss,[["__scopeId","data-v-26966f5e"]]);const Ns=x("",5),ks=x("",2),Ls=x("",3),Us=x("",2),Ms=x("",2),Os=x("",4),Hs=JSON.parse('{"title":"TypeScript usage","description":"","frontmatter":{},"headers":[{"level":2,"title":"Composable","slug":"composable"},{"level":3,"title":"With internal ref list generator","slug":"with-internal-ref-list-generator"},{"level":3,"title":"With externally created ref list","slug":"with-externally-created-ref-list"},{"level":2,"title":"Component","slug":"component"},{"level":3,"title":"Simple usage","slug":"simple-usage"},{"level":3,"title":"Using different template for new items","slug":"using-different-template-for-new-items"},{"level":3,"title":"Nested lists","slug":"nested-lists"},{"level":2,"title":"Extra","slug":"extra"},{"level":3,"title":"ResultBox","slug":"resultbox"}],"relativePath":"guide/typescript.md"}'),js={name:"guide/typescript.md"},Js=Object.assign(js,{setup(a){return(o,n)=>(C(),m("div",null,[Ns,E(ss),ks,E(as),Ls,E(os),Us,E(ms),Ms,E($s),Os]))}});export{Hs as __pageData,Js as default};