import{r as e}from"./index.41a26f72.js";import{w as s}from"./element-plus.d6772035.js";import{aj as r,ah as t,ao as a,ag as o,G as l,O as i,aJ as p,N as d}from"./@vue.c261c184.js";import"./vue-router.f985018f.js";import"./vuex.51c69487.js";import"./vue-i18n.298c823a.js";import"./@intlify.c1f614fa.js";import"./axios.df2521e5.js";import"./resize-observer-polyfill.96acbc9d.js";import"./lodash.c042e748.js";import"./normalize-wheel.86fce3c7.js";import"./mitt.20cc8481.js";import"./dayjs.1c7a45b9.js";import"./async-validator.3a3a8ce1.js";import"./@popperjs.59bfb2c1.js";const n={name:"Next",data(){return{User:{username:"",password:"",password2:""},btn:!0,nCheck:!0,pCheck:!0,pCheck2:!0,rules:{username:[{required:!0,validator:this.nameCheck,trigger:"blur"}],password:[{required:!0,validator:this.pswCheck,trigger:"blur"}],password2:[{required:!0,validator:this.passwordCheck,trigger:"blur"}]}}},computed:{buttonStatus(){return{nC:this.nCheck,pC:this.pCheck,pC2:this.pCheck2}}},watch:{buttonStatus(e){e.nC||e.pC||e.pC2||(this.btn=!1)}},methods:{submit(){this.$axios.post("http://localhost:9000/register",{userid:sessionStorage.getItem("phone"),name:this.User.username,password:this.User.password}).then((function(r){"failed"===r.data?s.error("注册失败"):(s.success("注册成功"),e.push("/login"))})).catch((function(e){console.log(e)}))},nameCheck(e,s,r){return s.length<1?(this.nCheck=!0,r(new Error("昵称不能为空"))):s.toString().length>10?(this.nCheck=!0,r(new Error("昵称不能超过10位"))):(this.nCheck=!1,void r())},pswCheck(e,s,r){return s.length<6?(this.pCheck=!0,r(new Error("密码不能少于6位"))):s.length>16?(this.pCheck=!0,r(new Error("密码不能超过16位"))):/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(s)?(this.pCheck=!1,void r()):(this.pCheck=!0,r(new Error("密码输入有误，请检查格式是否正确")))},passwordCheck(e,s,r){return s.length<1?(this.pCheck2=!0,r(new Error("重复密码不能为空"))):s!==this.User.password?(this.pCheck2=!0,r(new Error("两次输入密码不一致"))):(this.pCheck2=!1,r())}}},c=p();r("data-v-7a07dbd1");const h={class:"login-wrap"},u={class:"ms-login"},m=i("div",{class:"ms-title"},"完善信息",-1),w=i("i",{class:"el-icon-user"},null,-1),C=i("p",{style:{"font-size":"14px",color:"#909399"}},"请输入6-16位数字字母组合",-1),k=i("i",{class:"el-icon-lock"},null,-1),f=i("i",{class:"el-icon-unlock"},null,-1),b={class:"login-btn"},g=d("注册");t();const j=c(((e,s,r,t,p,d)=>{const n=a("el-input"),j=a("el-form-item"),v=a("el-button"),U=a("el-form");return o(),l("div",h,[i("div",u,[m,i(U,{model:p.User,rules:p.rules,"label-width":"0px",class:"ms-content"},{default:c((()=>[i(j,{prop:"username"},{default:c((()=>[i(n,{modelValue:p.User.username,"onUpdate:modelValue":s[1]||(s[1]=e=>p.User.username=e),placeholder:"请输入昵称"},{prepend:c((()=>[w])),_:1},8,["modelValue"])])),_:1}),C,i(j,{prop:"password"},{default:c((()=>[i(n,{modelValue:p.User.password,"onUpdate:modelValue":s[2]||(s[2]=e=>p.User.password=e),placeholder:"请输入密码",type:"password"},{prepend:c((()=>[k])),_:1},8,["modelValue"])])),_:1}),i(j,{prop:"password2"},{default:c((()=>[i(n,{modelValue:p.User.password2,"onUpdate:modelValue":s[3]||(s[3]=e=>p.User.password2=e),placeholder:"请再次确认密码",type:"password",disabled:p.pCheck},{prepend:c((()=>[f])),_:1},8,["modelValue","disabled"])])),_:1}),i("div",b,[i(v,{type:"primary",onClick:s[4]||(s[4]=e=>d.submit()),disabled:p.btn},{default:c((()=>[g])),_:1},8,["disabled"])])])),_:1},8,["model","rules"])])])}));n.render=j,n.__scopeId="data-v-7a07dbd1";export default n;
