(this.webpackJsonpconvertor=this.webpackJsonpconvertor||[]).push([[0],{20:function(e,t,n){e.exports={register:"Signup_register__2BtQD"}},44:function(e,t,n){},45:function(e,t,n){e.exports={Loader:"Preloader_Loader__2k0RY",load2:"Preloader_load2__18rC-"}},47:function(e,t,n){e.exports={home:"home_home__21_Nu"}},49:function(e,t,n){e.exports={extract:"fileExtract_extract__1LA74"}},50:function(e,t,n){e.exports=n(79)},56:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(52),n(4)),l=n(23),c=n.n(l),i=(n(56),n(16)),u=n(7),s=n(42),m=n(1),d={error:!1,loading:!1,token:null,userId:null,authMsg:null,signupMsg:null,toBeRedirected:!1,mismatch:null},p=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{mismatch:"Password Mismatch"})},g=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{loading:!0})},f=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{error:t.error,loading:!1})},h=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{toBeRedirected:!0})},E=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{error:null,loading:!1,toBeRedirected:!0,signupMsg:t.signupMsg})},b=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{toBeRedirected:!0})},v=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,token:t.token,userId:t.userId,role:t.role,authMsg:t.authMessage,toBeRedirected:!0})},O=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{token:null,userId:null,role:null,authMsg:null})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return g(e);case"AUTH_FAIL":return f(e,t);case"AUTH_SUCCESS":return v(e,t);case"SIGNUP":return E(e,t);case"AUTH_LOGOUT":return O(e);case"MISMATCH":return p(e);case"LOGIN":return b(e);case"REDIRECT":return h(e);default:return e}},j=n(15),S={filename:null,filecontent:[],dateConverted:null,loading:!1,error:null,message:null,fileDetails:[]},N=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{loading:!0})},w=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:t.error})},C=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{fileDetails:Object(j.a)(t.fileDetails),loading:!1})},k=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{filename:t.filename,filecontent:Object(j.a)(t.fileContent),loading:!1})},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_CONVERSION":return N(e);case"CONVERSION_SUCCESS":return k(e,t);case"CONVERSION_FAILED ":return w(e,t);case"GET_CONVERTED_FILES":return C(e,t);default:return e}},_=n(3),T=function(e){return e.children},D=n(5),R=n(6),M=n(9),A=n(8),L=function(e){return r.a.createElement("li",null,r.a.createElement(o.b,{to:e.link},e.navname))},x=n(43),H=n.n(x),U=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");return H.a.Sidenav.init(e)}))}},{key:"render",value:function(){var e={links:["/","/login","/register"],name:["Home","Login","Register"]};return this.props.token&&(e={links:["/","/files_converted","/convert","/logout"],name:["Home","Files Converted","Convert","Logout"]}),r.a.createElement(T,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper  indigo lighten-1"},r.a.createElement(o.b,{to:"#",className:"brand-logo"},"Convertor"),r.a.createElement(o.b,{to:"#","data-target":"mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"right hide-on-med-and-down"},e.links.map((function(t,n){return r.a.createElement(L,{key:n,link:t,navname:e.name[n]})}))))),r.a.createElement("ul",{className:"sidenav sidenav-close",id:"mobile-demo"},e.links.map((function(t,n){return r.a.createElement(L,{key:n,link:t,navname:e.name[n]})}))))}}]),n}(a.Component),F=Object(u.b)((function(e){return{token:e.auth.token}}))(Object(_.g)(U)),B=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return r.a.createElement(T,null,r.a.createElement("div",{className:"page-footer  indigo lighten-1"},r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container",align:"center"},"Developed by Sebago \xa9 ",(new Date).getFullYear()," Copyright Text"))))}}]),n}(a.Component),G=n(44),V=n.n(G),P=function(e){return r.a.createElement(T,null,r.a.createElement(F,null),e.children,r.a.createElement(B,{className:V.a.footer}))},Y=n(18),W=function(e){return r.a.createElement(T,null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},e.iconname),r.a.createElement("input",{id:e.inputid,type:e.inputtype,onChange:e.changed}),r.a.createElement("label",{htmlFor:e.inputid},e.labelname)))},z=Object(_.g)((function(e){var t=["btn waves-effect waves btn-medium  ","material-icons left"],n=e.btncolour;t[0]=t[0]+n;var a=r.a.createElement("button",{type:e.action,className:t[0]},r.a.createElement("i",{className:t[1]},e.iconname),e.btnname);return"link"===e.actionType&&(a=r.a.createElement(o.b,{type:e.action,to:e.whereto,className:t[0]},r.a.createElement("i",{className:t[1]},e.iconname),e.btnname)),r.a.createElement(T,null,a)})),X=n(20),J=n.n(X),q=n(45),K=n.n(q),Q=function(){return r.a.createElement(T,null,r.a.createElement("div",{className:K.a.Loader},"Loading..."),r.a.createElement("p",{align:"center",style:{color:"indigo"}},"Loading..."))},$=n(46),Z=n.n($).a.create({baseURL:"http://localhost:3333/api/v1"}),ee=function(e,t,n,a){return{type:"AUTH_SUCCESS",token:t,userId:e,role:n,authMessage:a}},te=function(e){return{type:"AUTH_FAIL",error:e}},ne=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("message"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},ae=function(e){return function(t){setTimeout((function(){t(ne())}),e)}},re=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(ne());else{var a=localStorage.getItem("userId"),r=localStorage.getItem("message");e(ee(a,t,r)),e(ae(n.getTime()-(new Date).getTime()))}}else e(ne())}},oe=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:null,password:null,confirmPwd:null},e.inputHandler=function(t,n){var a=Object(m.a)(Object(m.a)({},e.state),{},Object(Y.a)({},n,t.target.value));e.setState(a)},e.onSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.email,r=n.password;n.confirmPwd!==r?e.props.mismatch():e.props.onSignUp(a,r)},e}return Object(R.a)(n,[{key:"render",value:function(){var e=this,t={name:["email","password","confirmPwd"],type:["text","password","password"],icon:["mail","security","security"]},n=r.a.createElement(T,null,r.a.createElement("div",{className:"row z-depth-5"},r.a.createElement("h5",{className:J.a.register,align:"center"},"Get Started With Convertor"),r.a.createElement("p",{align:"center",style:{color:"red"}},this.props.signupMsg?"Email already exist":null),r.a.createElement("p",{align:"center",style:{color:"red"}},this.props.pwdMismatch),r.a.createElement("p",{align:"center",style:{color:"red"}},this.props.error),r.a.createElement("form",{className:"col s12",onSubmit:this.onSubmitHandler},t.name.map((function(n,a){return r.a.createElement(W,{key:a,inputid:n,iconname:t.icon[a],inputtype:t.type[a],labelname:n,changed:function(t){return e.inputHandler(t,n)}})})),r.a.createElement("div",{align:"center"},r.a.createElement(z,{action:"submit",btncolour:"indigo",btnname:"Register",iconname:"directions_bike"})),r.a.createElement("div",null,r.a.createElement("p",{className:J.a.register},"Alread have an account?",r.a.createElement(o.b,{style:{color:"indigo"},to:"/login"}," ",r.a.createElement("u",null,"Login")))))));return this.props.loading&&(n=r.a.createElement(Q,null)),this.props.toBeRedirected||"Email already exist"!==this.props.signupMsg?r.a.createElement(_.a,{to:"/login"}):r.a.createElement(T,null,r.a.createElement("div",{className:"container",style:{paddingTop:"50px",minHeight:"100vh"}}," ",r.a.createElement("br",null),n))}}]),n}(a.Component),le=Object(u.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,toBeRedirected:e.auth.toBeRedirected,signupMsg:e.auth.signupMsg,pwdMismatch:e.auth.mismatch}}),(function(e){return{onSignUp:function(t,n){e(function(e,t){return function(n){n({type:"AUTH_START"});var a={email:e,password:t};Z.post("/auth/signup",a,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),n({type:"SIGNUP",signupMsg:e.data.message})})).catch((function(e){n(te(e.message))}))}}(t,n))},mismatch:function(){e({type:"MISMATCH"})}}}))(oe),ce=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:null,password:null},e.inputHandler=function(t,n){var a=Object(m.a)(Object(m.a)({},e.state),{},Object(Y.a)({},n,t.target.value));e.setState(a)},e.onSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.onSignIn(a,r)},e}return Object(R.a)(n,[{key:"render",value:function(){var e=this,t={name:["username","password"],type:["text","password"],icon:["account_circle","security"]},n=r.a.createElement(T,null,r.a.createElement("div",{className:"row z-depth-5"},r.a.createElement("h5",{className:J.a.register,align:"center"},"Welcome Back, KIndly Login"),r.a.createElement("p",{align:"center",style:{color:"red"}},this.props.error),r.a.createElement("form",{className:"col s12",onSubmit:this.onSubmitHandler},t.name.map((function(n,a){return r.a.createElement(W,{key:a,inputid:n,iconname:t.icon[a],inputtype:t.type[a],labelname:n,changed:function(t){return e.inputHandler(t,n)}})})),r.a.createElement("div",{align:"center"},r.a.createElement(z,{action:"submit",btncolour:"indigo",btnname:"Login",iconname:"send"})),r.a.createElement("div",null,r.a.createElement("p",{className:J.a.register},"New here?, Please Register here ",r.a.createElement(o.b,{style:{color:"indigo"},className:"waves-effect",to:"/register"}," ",r.a.createElement("u",null,"Register")))))));return this.props.loading&&(n=r.a.createElement(Q,null)),this.props.toBeRedirected?r.a.createElement(_.a,{to:"/files_converted"}):r.a.createElement(T,null,r.a.createElement("div",{className:"container",style:{paddingTop:"50px",minHeight:"100vh"}}," ",r.a.createElement("br",null),r.a.createElement(T,null,n)))}}]),n}(a.Component),ie=Object(u.b)((function(e){return{message:e.auth.authMsg,error:e.auth.error,token:e.auth.token,loading:e.auth.loading,toBeRedirected:e.auth.toBeRedirected}}),(function(e){return{onSignIn:function(t,n){e(function(e,t){return function(n){n({type:"AUTH_START"});var a={email:e,password:t};Z.post("/auth/signin",a,{headers:{"Content-Type":"application/json"}}).then((function(e){if(console.log(e),"User not found"===e.data.message&&n(te(e.data.message)),400===e.data.statusCode)n(te(e.data.message));else{var t=e.data.token,a=e.data.userId,r=e.data.Message,o=new Date((new Date).getTime()+828e5);localStorage.setItem("token",t),localStorage.setItem("userId",a),localStorage.setItem("message",r),localStorage.setItem("expirationDate",o),n(ee(a,t,r)),n({type:"REDIRECT"}),n(ae(828e5))}})).catch((function(e){console.log(e),n(te(e.message))}))}}(t,n))}}}))(ce),ue=n(47),se=n.n(ue),me=function(){return r.a.createElement(T,null,r.a.createElement("div",{className:se.a.home},r.a.createElement("h5",null,"Welcome to the convertor app")," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h6",null,"Converts a regular pattern of XML files and extract the texts out of the xml tags, all you need to do is Signup the signin to be able to upload files and convert. You can also view the lists oif the converted files you have."))))},de=n(48),pe=n(31),ge=function(e){return{type:"CONVERSION_FAILED ",error:e}},fe=function(e,t){return function(n){n({type:"INIT_CONVERSION"});var a=new FormData;a.append("file",t,t.name);var r={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+e}};Z.post("/convert/upload",a,r).then((function(e){console.log(e);var t,a=[],r=Object(de.a)(e.data.file_content);try{for(r.s();!(t=r.n()).done;){var o=t.value;a.push(o)}}catch(l){r.e(l)}finally{r.f()}n(function(e,t){var n=Object(pe.a)(t).slice(0);return{type:"CONVERSION_SUCCESS",filename:e,fileContent:Object(j.a)(n)}}(e.data.file_name,a))})).catch((function(e){console.log(e),n(ge(e))}))}},he=function(e){return function(t){t({type:"INIT_CONVERSION"});var n={headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}};Z.get("/convert/files",n).then((function(e){t(function(e){var t=Object(pe.a)(e).slice(0);return{type:"GET_CONVERTED_FILES",fileDetails:Object(j.a)(t)}}(Object(j.a)(e.data.data))),console.log(e)})).catch((function(e){t(ge(e)),console.log(e)}))}},Ee=n(49),be=n.n(Ee),ve=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={selectedFile:null},e.onFileChange=function(t){e.setState({selectedFile:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault(),e.props.onUploadFile(e.props.token,e.state.selectedFile),console.log(e.state.selectedFile)},e}return Object(R.a)(n,[{key:"componentDidMount",value:function(){this.props.onAutoSignIn()}},{key:"render",value:function(){var e=r.a.createElement("div",{className:be.a.extract},r.a.createElement("h5",null,"Upload A XML File To Convert"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"file-field input-field"},r.a.createElement("div",{className:"btn indigo"},r.a.createElement("span",null,"File"),r.a.createElement("input",{type:"file",onChange:this.onFileChange})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{className:"file-path validate",type:"text"}))),r.a.createElement("div",{align:"center"},r.a.createElement(z,{action:"submit",btncolour:"indigo",btnname:"Extract",iconname:"send"})))),this.props.fileContent.map((function(e,t){return r.a.createElement("p",{align:"center",key:t},e)})));return this.props.loading&&(e=r.a.createElement(Q,null)),this.props.token?r.a.createElement(T,null,e):r.a.createElement(_.a,{to:"login"})}}]),n}(a.Component),Oe=Object(u.b)((function(e){return{token:e.auth.token,fileContent:Object(j.a)(e.convert.filecontent),loading:e.convert.loading}}),(function(e){return{onUploadFile:function(t,n){e(fe(t,n))},onAutoSignIn:function(){e(re())}}}))(ve),ye=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onClickHandler=function(e){e.preventDefault(),alert("Hello")},e}return Object(R.a)(n,[{key:"componentDidMount",value:function(){this.props.onAuthoSignIn(),this.props.onGetFiles(this.props.token)}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",null,r.a.createElement("h5",{align:"center"},"List of files Converted")," ",r.a.createElement("br",null),r.a.createElement("p",{align:"center"},"Content appears here once the show bittom is clicked"),r.a.createElement("div",{className:"responsive-table"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Date(YYYY-MM-DD)"),r.a.createElement("th",null,"View"))),r.a.createElement("tbody",null,this.props.fileDetails.map((function(t,n){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.file_name),r.a.createElement("td",null,(new Date).getFullYear(t.convert_date)+"-"+(new Date).getMonth(t.convert_date)+"-"+(new Date).getDate(t.convert_date)),r.a.createElement("td",null,r.a.createElement("form",{onSubmit:e.onClickHandler},r.a.createElement(z,{action:"submit",btncolour:"indigo",btnname:"Show",iconname:"face"}))))}))))));return this.props.token?r.a.createElement(T,null,r.a.createElement("div",{style:{paddingTop:"50px",minHeight:"100vh",backgroundColor:"#282c34",color:"white",alignItems:"center",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}},t)):r.a.createElement(_.a,{to:"/login"})}}]),n}(a.Component),je=Object(u.b)((function(e){return{token:e.auth.token,fileDetails:Object(j.a)(e.convert.fileDetails)}}),(function(e){return{onAuthoSignIn:function(){e(re())},onGetFiles:function(t){e(he(t))}}}))(ye),Se=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(_.a,{to:"/"})}}]),n}(a.Component),Ne=Object(u.b)(null,(function(e){return{onLogout:function(){return e(ne())}}}))(Se);var we=function(){return r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/register",component:le}),r.a.createElement(_.b,{path:"/login",component:ie}),r.a.createElement(_.b,{path:"/convert",component:Oe}),r.a.createElement(_.b,{path:"/files_converted",component:je}),r.a.createElement(_.b,{path:"/logout",component:Ne}),r.a.createElement(_.b,{path:"/",exact:!0,component:me}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,ke=Object(i.c)({auth:y,convert:I}),Ie=Object(i.e)(ke,Ce(Object(i.a)(s.a))),_e=r.a.createElement(u.a,{store:Ie},r.a.createElement(o.a,null,r.a.createElement(we,null)));c.a.render(_e,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.cae71fd6.chunk.js.map