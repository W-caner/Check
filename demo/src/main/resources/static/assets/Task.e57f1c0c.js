import{i as e,p as t,d as s,r as a,o as i,c as l,a as o,t as d,C as n,D as r,w as p,h as u}from"./vendor.7d6c6094.js";import{_ as c}from"./vue-schart.2142fc36.js";const m={name:"Task",path:"/task/:id",components:{Schart:c},data(){return{route:e(),task:{taskname:"测试"+this.route.params.id,description:"测试",starttime:"10:26",endtime:"11:26",isFinish:!1},result:{type:"pie",legend:{position:"left"},labels:["通过","未通过"],datasets:[{data:[.5,.5]}]},memberList:[],isedit:!1,memberTitle:"",photo:{pUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftupian.qqjay.com%2Fu%2F2016%2F0919%2F1_171052_3.jpg&refer=http%3A%2F%2Ftupian.qqjay.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653968162&t=e21f8e5f9b2cca24293766598fd02c3a",pResult:"通过"},edit1:!1}},mounted(){},methods:{taskC(e,t){isedit.value=!0},sub(){},notice(){}}},f=p();t("data-v-b5cdd882");const h={class:"user-info"},y={class:"user-info-cont"},_={style:{"font-size":"25px",color:"#222","margin-bottom":"5px"}},g=u("结束"),v={style:{"margin-top":"10px"}},k={class:"user-info-list"},b=u(" 开始时间： "),w={class:"user-info-list"},x=u(" 结束时间： "),F=o("div",{class:"clearfix"},[o("div",{style:{"font-size":"18px"}},"统计结果")],-1),C={class:"clearfix"},V=o("span",{style:{"font-size":"18px"}},"完成情况",-1),z=u("通知未完成成员"),U={style:{display:"none"}},j=u(" 查看 "),q=o("div",{slot:"error",class:"image-slot"},[o("i",{class:"el-icon-picture-outline"})],-1),R={style:{"font-size":"16px","margin-top":"10px"}},T=u(" 识别结果： "),A={style:{"margin-left":"20px"}},I={class:"dialog-footer"},L=u("取 消"),D=u("提交");s();const S=f(((e,t,s,p,u,c)=>{const m=a("el-button"),S=a("el-card"),$=a("schart"),B=a("el-col"),E=a("el-table-column"),G=a("el-checkbox"),H=a("el-table"),J=a("el-row"),K=a("el-image"),M=a("el-input"),N=a("el-form"),O=a("el-dialog");return i(),l("div",null,[o(J,{gutter:20},{default:f((()=>[o(B,{span:8},{default:f((()=>[o(S,{style:{"margin-bottom":"20px"},shadow:"hover"},{default:f((()=>[o("div",h,[o("div",y,[o("div",null,[o("span",_,d(u.task.taskname),1),o(m,{type:"danger",onClick:t[1]||(t[1]=t=>e.finish()),size:"mini",style:{float:"right"},class:{isTfinish:u.task.isFinish}},{default:f((()=>[g])),_:1},8,["class"])]),o("div",v,d(u.task.description),1)])]),o("div",k,[b,o("span",null,d(u.task.starttime),1)]),o("div",w,[x,o("span",null,d(u.task.endtime),1)])])),_:1}),o(S,{shadow:"hover"},{header:f((()=>[F])),default:f((()=>[o($,{class:"schart",canvasId:"pie",options:u.result},null,8,["options"])])),_:1})])),_:1}),o(B,{span:16},{default:f((()=>[o(S,{shadow:"hover"},{header:f((()=>[o("div",C,[V,o(m,{style:{float:"right",padding:"3px 0"},type:"text",onClick:t[2]||(t[2]=e=>c.notice())},{default:f((()=>[z])),_:1})])])),default:f((()=>[o(H,{"show-header":!1,data:u.memberList,style:{width:"100%"}},{default:f((()=>[o(E,{width:"1"},{default:f((e=>[o("span",U,d(e.row.id),1)])),_:1}),o(E,{width:"1"},{default:f((e=>[o(G,{modelValue:e.row.isFinish,"onUpdate:modelValue":t=>e.row.isFinish=t,style:{display:"none"}},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),o(E,null,{default:f((e=>[o("div",{style:{"font-size":"16px"},class:{isfinish:e.row.isFinish}},d(e.row.name),3)])),_:1}),o(E,{width:"150",align:"center"},{default:f((e=>[o(m,{type:"primary",size:"small",style:{width:"100%"},onClick:t=>c.taskC(e.$index,e.row),disabled:e.row.isFinish},{default:f((()=>[j])),_:2},1032,["onClick","disabled"])])),_:1})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1}),o(O,{title:u.memberTitle,modelValue:u.isedit,"onUpdate:modelValue":t[8]||(t[8]=e=>u.isedit=e)},{footer:f((()=>[o("span",I,[o(m,{onClick:t[6]||(t[6]=e=>u.isedit=!1)},{default:f((()=>[L])),_:1}),o(m,{type:"primary",onClick:t[7]||(t[7]=e=>c.sub())},{default:f((()=>[D])),_:1})])])),default:f((()=>[o(N,null,{default:f((()=>[o(K,{src:u.photo.pUrl},{default:f((()=>[q])),_:1},8,["src"]),o("div",R,[T,n(o("span",null,d(u.photo.pResult),513),[[r,!u.edit1]]),n(o(M,{type:"text",onChange:t[3]||(t[3]=t=>e.input()),modelValue:u.photo.pResult,"onUpdate:modelValue":t[4]||(t[4]=e=>u.photo.pResult=e),style:{width:"150px"}},null,8,["modelValue"]),[[r,u.edit1]]),o("span",A,[o(m,{type:"primary",icon:{"el-icon-edit":!u.edit1,"el-icon-check":u.edit1},circle:"",size:"mini",onClick:t[5]||(t[5]=e=>u.edit1=!u.edit1)},null,8,["icon"])])])])),_:1})])),_:1},8,["title","modelValue"])])}));m.render=S,m.__scopeId="data-v-b5cdd882";export default m;
