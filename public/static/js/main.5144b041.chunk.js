(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,t,a){e.exports=a(398)},239:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(219),c=a.n(l),o=(a(237),a(239),function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,403)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})}),i=a(97),u=a(11),s=a(27),m=a.n(s),p=a(40),d=a(92),f=a(74),g=r.a.createContext({isAuthenticated:!1,totalAmount:{originalAmount:0,currentAmount:0},user:{fullname:void 0,email:void 0,role:void 0},remitance_history:[],loginHandler:function(){return Promise.resolve()},signUpHandler:function(){return Promise.resolve()},logoutHandler:function(){return Promise.resolve()},add_remitance_history:function(){return Promise.resolve()}});function E(e){var t=new FormData;t.append("avatar",e.receiptImage[0].originFileObj);for(var a=["pinNumber","totalPound","totalTaka","payingAgent","sendingDate","exchangeRate","govtIncentive"],n=0;n<a.length;n++){var r=a[n];t.append("".concat(a[n]),e[r])}return t}function b(e){e.govtIncentive=e.govtIncentive?Number(e.govtIncentive):0;["totalPound","totalTaka","exchangeRate"].forEach(function(t){e[t]=Number(e[t])})}var h=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user",{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}});case 3:if((a=e.sent).ok){e.next=7;break}return console.log("user is not loged in"),e.abrupt("return");case 7:return e.next=9,a.json();case 9:n=e.sent,t(function(e){return Object(d.a)({},e,n)}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/remitance/all_histories",{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}});case 3:if((a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:return n=e.sent,t(n),e.abrupt("return");case 10:return e.next=12,a.json();case 12:r=e.sent,t(r),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}},e,null,[[0,16]])}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(m.a.mark(function e(t,a,n,r){var l,c,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user/login",{method:"POST",credentials:"include",redirect:"follow",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(t)});case 3:if((l=e.sent).ok){e.next=11;break}return a({isAuthenticated:!1,user:{fullname:void 0,email:void 0,role:void 0}}),e.next=8,l.json();case 8:return c=e.sent,n(function(e){return Object(d.a)({},e,c)}),e.abrupt("return");case 11:return e.next=13,l.json();case 13:o=e.sent,a(function(e){return Object(d.a)({},e,o)}),r("/history"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}},e,null,[[0,18]])}));return function(t,a,n,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(m.a.mark(function e(t,a,n,r){var l,c,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user/signup",{method:"POST",redirect:"follow",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(t)});case 3:if((l=e.sent).ok){e.next=10;break}return e.next=7,l.json();case 7:return c=e.sent,n(function(e){return Object(d.a)({},e,c)}),e.abrupt("return");case 10:return e.next=12,l.json();case 12:o=e.sent,a(function(e){return Object(d.a)({},e,o)}),r("/history"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}},e,null,[[0,17]])}));return function(t,a,n,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(m.a.mark(function e(t,a,n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user/logout",{method:"POST",redirect:"follow",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}});case 3:t({isAuthenticated:!1,user:{fullname:void 0,email:void 0,role:void 0}}),a([]),n("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,a,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(m.a.mark(function e(t,a,n,r){var l,c,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/remitance/history",{method:"POST",credentials:"include",body:E(n)});case 3:if((l=e.sent).ok){e.next=10;break}return e.next=7,l.json();case 7:return c=e.sent,r(c),e.abrupt("return");case 10:return e.next=12,l.json();case 12:o=e.sent,a(t.concat(Object(d.a)({},o,{todayRate:0,todayAmount:0}))),r({message:"Successfully added new remitance history",type:"success"}),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0),r({message:"Could not add new data. Pleae try again!",type:"error"});case 23:case"end":return e.stop()}},e,null,[[0,18]])}));return function(t,a,n,r){return e.apply(this,arguments)}}(),T=function(e){var t=e.children,a=Object(u.f)(),l=Object(n.useState)({isAuthenticated:!1,user:{fullname:void 0,email:void 0,role:void 0}}),c=Object(f.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)([]),E=Object(f.a)(s,2),b=E[0],T=E[1],w=Object(n.useState)({originalAmount:0,currentAmount:0}),A=Object(f.a)(w,2),k=A[0],I=A[1];Object(n.useEffect)(function(){h(i),o.isAuthenticated&&y(T)},[o.isAuthenticated]),Object(n.useEffect)(function(){var e={originalAmount:0,currentAmount:0};b.forEach(function(t){e.originalAmount+=t.totalTaka,e.currentAmount+=t.todayAmount||0}),I(function(t){return Object(d.a)({},t,e)})},[b]);var C=function(){var e=Object(p.a)(m.a.mark(function e(t,n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,i,n,a);case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(m.a.mark(function e(t,n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,i,n,a);case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(i,T,a);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(m.a.mark(function e(t,a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(b,T,t,a);case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:Object(d.a)({},o,{totalAmount:k,remitance_history:b,loginHandler:C,signUpHandler:S,logoutHandler:P,add_remitance_history:R})},t)},w=a(406),A=a(401),k=a(402),I=a(71),C=a(408),S=a(399),P=a(411),R=w.a.Title,N=function(){var e=C.a.useForm(),t=Object(f.a)(e,1)[0],a=Object(n.useContext)(g).signUpHandler,l=Object(n.useState)({message:"",type:void 0}),c=Object(f.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(!1),s=Object(f.a)(u,2),d=s[0],E=s[1],b=function(){var e=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,a(t,i);case 3:E(!1);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{level:1}," Signup  "),r.a.createElement(C.a,{form:t,onFinish:b,layout:"vertical",size:"large",name:"basic",labelCol:{span:8},wrapperCol:{span:20},initialValues:{remember:!0},autoComplete:"off"},r.a.createElement(C.a.Item,{label:"Full Name",name:"fullname",rules:[{required:!0,message:"Please input your fullname"}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input you email"}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please provide your password"}]},r.a.createElement(S.a.Password,null)),o.message&&r.a.createElement(C.a.Item,null,r.a.createElement(P.a,{message:o.message,type:o.type,showIcon:!0})),r.a.createElement(C.a.Item,null,r.a.createElement(I.a,{type:"primary",htmlType:"submit",loading:d},"Sign Up"))))},D=a(222),F=w.a.Title,U=function(){var e=Object(D.useForm)(),t=Object(f.a)(e,1)[0],a=Object(n.useContext)(g).loginHandler,l=Object(n.useState)({message:"",type:void 0}),c=Object(f.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(!1),s=Object(f.a)(u,2),d=s[0],E=s[1],b=function(){var e=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,a(t,i);case 3:E(!1);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{level:1}," Login  "),r.a.createElement(C.a,{form:t,onFinish:b,layout:"vertical",size:"large",name:"basic",labelCol:{span:8},wrapperCol:{span:20},initialValues:{remember:!0},autoComplete:"off"},r.a.createElement(C.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input you email"}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please provide your password"}]},r.a.createElement(S.a.Password,null)),o.message&&r.a.createElement(C.a.Item,null,r.a.createElement(P.a,{message:o.message,type:o.type,showIcon:!0})),r.a.createElement(C.a.Item,null,r.a.createElement(I.a,{type:"primary",htmlType:"submit",loading:d},"Login"))))},L=w.a.Title,H=function(){var e=Object(u.f)(),t=localStorage.getItem("view")||"Sign Up",a=Object(n.useState)(t),l=Object(f.a)(a,2),c=l[0],o=l[1],i=Object(n.useContext)(g).isAuthenticated;Object(n.useEffect)(function(){i&&e("/history")},[i]);return r.a.createElement(A.a,{align:"middle",justify:"space-around",style:{height:"80vh"}},r.a.createElement(k.a,{span:6,style:{margin:"0 auto"}},r.a.createElement(L,{level:1},"WELCOME TO THE REMITANCE TRACKER"),r.a.createElement(I.a,{type:"primary",onClick:function(){var e="Sign Up"===c?"Login":"Sign Up";localStorage.setItem("view",e),o(e)}},"Sign Up"===c?"Login":"Sign Up")),r.a.createElement(k.a,{span:8,style:{margin:"0 auto"}},"Sign Up"===c?r.a.createElement(N,null):r.a.createElement(U,null)),r.a.createElement("br",null))},q=a(404),G=a(409),_=a(407),M=function(e){var t=e.id,a=Object(n.useState)(!1),l=Object(f.a)(a,2),c=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{type:"primary",onClick:function(e){o(!0)}},"View receipt"),r.a.createElement(G.a,{title:"Receipt Image",visible:c,onOk:function(){o(!1)},onCancel:function(){o(!1)}},r.a.createElement(_.a,{src:"remitance/receipt_image/".concat(t),alt:"receipt image"})))},V=[{title:"TOTAL POUND",dataIndex:"totalPound",key:"TOTAL POUND"},{title:"TOTAL TAKA",dataIndex:"totalTaka",key:"TOTAL TAKA"},{title:"EXCHANGE RATE",dataIndex:"exchangeRate",key:"EXCHANGE RATE"},{title:"SENDING DATE",dataIndex:"sendingDate",key:"SENDING DATA"},{title:"CURRENT VALUE",dataIndex:"todayAmount",key:"CURRENT TOTAL TAKA"},{title:"CURRENT RATE",dataIndex:"todayRate",key:"CURRENT RATE"},{title:"PAYING AGENT",dataIndex:"payingAgent",key:"PAYING AGENT"},{title:"GOVT REWARD",dataIndex:"govtIncentive",key:"GOVT REWARD"},{title:"RECEIPT IMAGE",dataIndex:"receiptImage",key:"RECIPT IMAGE",render:function(e,t){var a=t.receiptImage,n=t.key;return n="string"===typeof n?n:"",r.a.createElement(M,{id:n,receiptImage:a})}}],Y=(new Date("2022-06-30").toDateString(),new Date("2022-05-30").toDateString(),new Date("2022-04-30").toDateString(),new Date("2022-04-30").toDateString(),a(412)),z=function(){var e=Object(u.f)(),t=Object(n.useContext)(g),a=t.user,l=t.logoutHandler,c=a.fullname?a.fullname:"John Doe",o=a.fullname?{btnOneText:"Logout",btnTwoText:"Add Remitance"}:{btnOneText:"Login",btnTwoText:"Home"};return r.a.createElement(A.a,{style:{width:"100%",backgroundColor:"black",marginBottom:"15px"}},r.a.createElement(k.a,{span:20,style:{padding:"5px 0 5px 20px"}},r.a.createElement(I.a,{type:"text",style:{color:"#fff",fontSize:"2rem"},onClick:function(){return e(a.fullname?"/history":"/")}},"Welcome ",c)),r.a.createElement(k.a,{span:4,style:{padding:"20px 0"}},r.a.createElement(Y.b,null,r.a.createElement(I.a,{type:"primary",onClick:function(){a.fullname?l():e("/")}},o.btnOneText),r.a.createElement(I.a,{type:"primary",onClick:function(){return e(a.fullname?"/add_remitance":"/")}},o.btnTwoText))))},J=w.a.Title,B=function(){var e=Object(n.useContext)(g),t=e.remitance_history,a=e.totalAmount,l=a.originalAmount,c=a.currentAmount;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(J,{level:1,style:{textAlign:"center",fontSize:"2.5rem"}},"Total amount is = ",l," & current value would be = ",c),r.a.createElement(A.a,{style:{width:"100%",marginTop:"25px"},justify:"center"},r.a.createElement(k.a,{span:24},r.a.createElement(q.a,{bordered:!0,pagination:!1,key:"hello",dataSource:t,columns:V,size:"large"}),";")))},K=a(405),W=a(413),X=w.a.Title,$=function(e){return Array.isArray(e)?e:e.fileList?e.fileList:""},Q=function(){var e=C.a.useForm(),t=Object(f.a)(e,1)[0],a=Object(n.useContext)(g).add_remitance_history,l=Object(n.useState)({message:"",type:void 0}),c=Object(f.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(!1),s=Object(f.a)(u,2),d=s[0],E=s[1],h=function(){var e=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(t),E(!0),e.next=4,a(t,i);case 4:E(!1);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(A.a,{style:{height:"100vh"},justify:"space-between",align:"middle"},r.a.createElement(k.a,{span:12},r.a.createElement("div",{style:{width:"50%",margin:"0 auto 15px auto"}},r.a.createElement("img",{src:"/picture.jpg",alt:"type the data",style:{display:"block",width:"100%",height:"400px"}})),r.a.createElement("div",null,r.a.createElement(X,{level:1,style:{textAlign:"center",letterSpacing:"1.3px"}},"ADD AN REMITANCE"))),r.a.createElement(k.a,{span:12,style:{margin:"0 auto"}},r.a.createElement(C.a,{form:t,layout:"vertical",size:"middle",name:"basic",labelCol:{span:8},wrapperCol:{span:20},initialValues:{remember:!0},autoComplete:"off",onFinish:h},r.a.createElement(C.a.Item,{label:"Pin Number",name:"pinNumber",rules:[{required:!0,message:"You have to provide the pin number with a length of >= 5",min:5}]},r.a.createElement(S.a,{type:"number"})),r.a.createElement(C.a.Item,{label:"Total Pound",name:"totalPound",rules:[{required:!0,message:"Pleae set a total pound"}]},r.a.createElement(S.a,{type:"number"})),r.a.createElement(C.a.Item,{label:"Total Taka",name:"totalTaka",rules:[{required:!0,message:"Pleae set a total taka"}]},r.a.createElement(S.a,{type:"number"})),r.a.createElement(C.a.Item,{label:"Exchange Rate",name:"exchangeRate",rules:[{required:!0,message:"There must be an exchange rate"}]},r.a.createElement(S.a,{type:"number"})),r.a.createElement(C.a.Item,{label:"Sending date",name:"sendingDate",rules:[{required:!0,message:"Please set the valid sending date"},function(){return{validator:function(e,t){return t&&null===t.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)?Promise.reject(new Error("Please provide a date with YYYY-MM-DD format")):Promise.resolve()}}}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{label:"Paying Agent",name:"payingAgent",rules:[{required:!0,message:"The should be an paying agent"}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{label:"Govt Incentive",name:"govtIncentive"},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{name:"receiptImage",label:"Upload receipt image",valuePropName:"fileList",rules:[{required:!0,message:"please select the receipt image"}],getValueFromEvent:$,extra:"upload an jpg or png file"},r.a.createElement(K.a,{name:"logo",customRequest:function(){},showUploadList:!1},r.a.createElement(I.a,{icon:r.a.createElement(W.a,null)},"Click to upload"))),o.message&&r.a.createElement(C.a.Item,null,r.a.createElement(P.a,{message:o.message,type:o.type,showIcon:!0})),r.a.createElement(C.a.Item,null,r.a.createElement(I.a,{type:"primary",htmlType:"submit",loading:d},"Add Remitance"))))))},Z=a(410),ee=function(){return r.a.createElement(Z.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement(i.b,{to:"/"},"Back Home")})},te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(H,null)}),r.a.createElement(u.a,{path:"/history",element:r.a.createElement(B,null)}),r.a.createElement(u.a,{path:"/add_remitance",element:r.a.createElement(Q,null)}),r.a.createElement(u.a,{path:"*",element:r.a.createElement(ee,null)})))},ae=function(){return r.a.createElement(T,null,r.a.createElement(te,null))},ne=function(){return r.a.createElement(i.a,null,r.a.createElement(ae,null))},re=document.getElementById("root");c.a.createRoot(re).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null))),o()}},[[230,3,2]]]);
//# sourceMappingURL=main.5144b041.chunk.js.map