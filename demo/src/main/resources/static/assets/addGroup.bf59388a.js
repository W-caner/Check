import"./index.dd089dcb.js";import{B as e,p as t,d as a,r as s,o as d,c as o,a as r,t as l,w as i,h as n}from"./vendor.7d6c6094.js";const h={name:"addGroup",inject:["reload"],data:()=>({addList:[],group:{id:"",name:""}}),mounted(){this.$axios.get("http://localhost:9000/add/getAddGroup",{params:{id:localStorage.getItem("userId")}}).then((e=>{for(let t=0;t<e.data.length;t++)this.addList.push(e.data[t])})).catch((e=>{this.$message.error("出错了！")}))},methods:{handleSizeChange(e){},handlecurrentChange(e){},quit(t,a){Object.keys(this.group).forEach((e=>{this.group[e]=a[e]})),this.$axios.post("http://localhost:9000/add/delAddGroup",{memid:localStorage.getItem("userId"),groupid:this.group.id}).then((t=>{"success"===t.data&&(e.success("成功退出"),this.reload())})).catch((e=>{this.$message.error("出错了！")}))},addGroup(){this.$prompt("请输入要加入的群组id","加入群组",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/[0-9]*[0-9]$/,inputErrorMessage:"群组id格式不正确"}).then((({value:t})=>{this.$axios.post("http://localhost:9000/add/addGroup",{memid:localStorage.getItem("userId"),memname:localStorage.getItem("ms_username"),groupid:t}).then((e=>{"success"===e.data&&(this.$message({type:"success",message:"加入群组成功"}),this.reload())})).catch((t=>{e.error("出错了")}))})).catch((()=>{this.$message.error("加入群组失败")}))}}},c=i();t("data-v-44fb2860");const u={slot:"header",class:"clearfix"},p=r("span",{class:"box-title"},"我加入的群组",-1),g=n("加入群组"),m={style:{display:"none"}},f={style:{"font-size":"16px"}},x=n(" 进入 "),y=n(" 退出 ");a();const w=c(((e,t,a,i,n,h)=>{const w=s("el-button"),C=s("el-table-column"),_=s("router-link"),$=s("el-table"),b=s("el-pagination"),z=s("el-card");return d(),o("div",null,[r(z,{class:"box-card"},{default:c((()=>[r("div",u,[p,r(w,{style:{float:"right","font-size":"16px","padding-right":"30px"},type:"text",onClick:t[1]||(t[1]=e=>h.addGroup())},{default:c((()=>[g])),_:1})]),r($,{"show-header":!1,data:n.addList,style:{width:"100%"},stripe:"","highlight-current-row":""},{default:c((()=>[r(C,{width:"10"},{default:c((e=>[r("span",m,l(e.row.id),1)])),_:1}),r(C,null,{default:c((e=>[r("span",f,l(e.row.name),1)])),_:1}),r(C,{width:"150",align:"center"},{default:c((e=>[r(_,{to:"/add/"+e.row.id},{default:c((()=>[r(w,{type:"primary",size:"small",style:{width:"100%"}},{default:c((()=>[x])),_:1})])),_:2},1032,["to"])])),_:1}),r(C,{width:"150",align:"center"},{default:c((e=>[r(w,{type:"danger",size:"small",icon:"el-icon-delete",style:{width:"100%"},onClick:t=>h.quit(e.$index,e.row)},{default:c((()=>[y])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),r(b,{onSizeChange:h.handleSizeChange,onCurrentChange:h.handlecurrentChange,layout:"prev, pager, next, jumper",total:500,"hide-on-single-page":!1},null,8,["onSizeChange","onCurrentChange"])])),_:1})])}));h.render=w,h.__scopeId="data-v-44fb2860";export default h;