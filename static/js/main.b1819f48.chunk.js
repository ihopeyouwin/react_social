(window.webpackJsonpreact_social=window.webpackJsonpreact_social||[]).push([[0],{127:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(46),a=n(13);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={dialogs:[{id:2,name:"slava",path:"./slava.png"},{id:3,name:"vorchun",path:"./jules.png"},{id:4,name:"Lidon",path:"./lida.png"},{id:5,name:"dzham",path:"./jew.png"},{id:6,name:"belyaev",path:"./nigga.png"}],msgdata:[{id:1,message:"yo dude"},{id:2,message:"yo cmon"},{id:3,message:"yo hows it going"},{id:4,message:"yeaks"},{id:5,message:"your enemy is farming, while you sleep"},{id:6,message:"go hots"}],messageKey:7},u=function(e){return{type:"SEND_MESSAGE",messageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.messageBody;return c({},e,{msgdata:[].concat(Object(r.a)(e.msgdata),[{id:e.messageKey,message:n}]),messageKey:e.messageKey+1});default:return e}}},134:function(e,t,n){e.exports=n.p+"static/media/empty.716713e3.png"},135:function(e,t,n){e.exports=n.p+"static/media/fetching.ba7bfbe7.svg"},137:function(e,t,n){e.exports=n.p+"static/media/es6.f8f68048.png"},165:function(e,t,n){e.exports=n(298)},167:function(e,t,n){},171:function(e,t,n){},176:function(e,t,n){var r={"./friends":67,"./friends.jsx":67,"./jew.png":177,"./jules.png":178,"./lida.png":179,"./nigga.png":180,"./slava.png":181};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=176},177:function(e,t,n){e.exports=n.p+"static/media/jew.a009fd1f.png"},178:function(e,t,n){e.exports=n.p+"static/media/jules.934d77d6.png"},179:function(e,t,n){e.exports=n.p+"static/media/lida.9d15dc63.png"},180:function(e,t,n){e.exports=n.p+"static/media/nigga.65cf915e.png"},181:function(e,t,n){e.exports=n.p+"static/media/slava.0620e5aa.png"},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(55),a=n(0),o=n.n(a),c=n(34),i=n.n(c),u=n(89),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},a,c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",{className:a.className},c,o.a.createElement(u.a,Object.assign({placeholder:e,name:t,component:r,validate:n},a)))}},28:function(e,t,n){e.exports={nav:"navbar_nav__ZLeFD",item:"navbar_item__3_DbQ",active:"navbar_active__3EfuB",frwrap:"navbar_frwrap__Qt5Vr",friendrow:"navbar_friendrow__SP2-G"}},298:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(167),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(66),c=n.n(o),i=n(36),u=n(37),s=n(39),l=n(38),p=n(40),f=(n(171),function(e){return a.a.createElement("div",null,"Music")}),d=function(e){return a.a.createElement("div",null,"Settings")},m=n(22),g=n(30),h=n(28),b=n.n(h),O=function(e){return a.a.createElement("div",{className:b.a.item},a.a.createElement(m.b,{to:e.path,activeClassName:b.a.active},e.name))},v=n(67),E=function(e){var t=e.sidePage,n=t.sidebar.map((function(e){return a.a.createElement(O,{path:e.path,name:e.name,key:e.id})})),r=t.dialogData.slice(0,3).map((function(e){return a.a.createElement(v.default,{path:e.path,name:e.name,key:e.id})}));return a.a.createElement("div",null,a.a.createElement("nav",{className:b.a.nav},n,a.a.createElement("h2",null,"Friends"),a.a.createElement("div",{className:b.a.friendrow},r)))},y=n(12),w=Object(y.b)((function(e){return{sidePage:e.sidePage}}))(E),j=n(6),P=n.n(j),_=n(11),S=n(46),k=n(13),C=n(9);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T=function(e,t,n,r){return e.map((function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},r):e}))};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={usertabs:[],pageSize:10,totalUsers:0,currentPage:1,isFetching:!1,followProgress:[]},A=function(e){return{type:"FOLLOW",userId:e}},I=function(e){return{type:"UNFOLLOW",userId:e}},L=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},R=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},G=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},F=function(){var e=Object(_.a)(P.a.mark((function e(t,n,r,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(G(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return D({},e,{usertabs:T(e.usertabs,t.userId,"id",{followed:!0})});case"UNFOLLOW":return D({},e,{usertabs:T(e.usertabs,t.userId,"id",{followed:!1})});case"SET_USERS":return D({},e,{usertabs:t.usertabs});case"SET_CURRENT_PAGE":return D({},e,{currentPage:t.currentPage});case"SET_USERS_COUNT":return D({},e,{totalUsers:t.count});case"TOGGLE_IS_FETCHING":return D({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return D({},e,{followProgress:t.isFetching?[].concat(Object(S.a)(e.followProgress),[t.userId]):e.followProgress.filter((function(e){return e!==t.userId}))});default:return e}},M=n(55),B=n(47),W=n.n(B),K=n(96),H=n(56),V=n.n(H),J=n(133),X=n.n(J),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,s=Math.ceil(t/n),l=[],p=1;p<s;p++)l.push(p);var f=Math.ceil(s/u),d=Object(r.useState)(1),m=Object(K.a)(d,2),g=m[0],h=m[1],b=(g-1)*u+1,O=g*u;return a.a.createElement("div",{className:V.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"prev"),a.a.createElement("div",{className:V.a.pages},l.filter((function(e){return e>=b&&e<=O})).map((function(e){return a.a.createElement("span",{className:X()(Object(k.a)({},V.a.selectedpage,o===e),V.a.pageNumber),onClick:function(t){c(e)},key:e},e)})),f>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"next")))},Z=n(134),Q=n.n(Z),q=function(e){var t=e.user,n=e.followProgress,r=e.follow,o=e.unfollow;return a.a.createElement("div",{className:W.a.usertab,key:t.id},a.a.createElement("span",{className:W.a.usercell},a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/".concat(t.id)},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Q.a,alt:"img"}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow")),a.a.createElement("div",{className:W.a.line})),a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status?"status: ".concat(t.status):"status is empty"),a.a.createElement("div",null,"this user personal id: ".concat(t.id))))},$=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.pageSize,o=e.totalUsers,c=Object(M.a)(e,["currentPage","onPageChanged","pageSize","totalUsers"]);return a.a.createElement("div",{className:W.a.container},a.a.createElement(Y,{currentPage:t,onPageChanged:n,pageSize:r,totalItemsCount:o}),c.users.map((function(e){return a.a.createElement(q,{user:e,key:e.id,followProgress:c.followProgress,follow:c.follow,unfollow:c.unfollow})})))},ee=n(42),te=n(8),ne=n(136),re=Object(ne.a)((function(e){return e.usersPage.usertabs}),(function(e){return e.filter((function(e){return!0}))})),ae=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsers},ce=function(e){return e.usersPage.currentPage},ie=function(e){return e.usersPage.isFetching},ue=function(e){return e.usersPage.followProgress},se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.getUsersThunk(e,n.props.pageSize)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null," ",this.props.isFetching?a.a.createElement(ee.a,null):null,a.a.createElement($,{totalUsers:this.props.totalUsers,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followProgress:this.props.followProgress}))}}]),t}(a.a.Component),le=Object(te.d)(Object(y.b)((function(e){return{users:re(e),pageSize:ae(e),totalUsers:oe(e),currentPage:ce(e),isFetching:ie(e),followProgress:ue(e)}}),{follow:function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(n,e,C.d.follow.bind(C.d),A);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(n,e,C.d.unfollow.bind(C.d),I);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowProgress:G,getUsersThunk:function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(r){var a;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(R(!0)),r(L(e)),n.next=4,C.d.getUsers(e,t);case 4:a=n.sent,r(R(!1)),r({type:"SET_USERS",usertabs:a.items}),r({type:"SET_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(se),pe=n(137),fe=n.n(pe),de=n(92),me=n.n(de),ge=function(e){return a.a.createElement("header",{className:me.a.header},a.a.createElement("img",{src:fe.a,alt:"img logo wide"}),a.a.createElement("div",{className:me.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(m.b,{to:"/login"},"Login")))},he=n(31);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Ee=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},ye=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},we=function(){return function(){var e=Object(_.a)(P.a.mark((function e(t){var n,r,a,o,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,c=r.email,t(Ee(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},je=function(){return function(){var e=Object(_.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(ye(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Oe({},e,{},t.payload);default:return e}},_e=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(ge,this.props)}}]),t}(a.a.Component),Se=Object(y.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(e,t,n){return function(){var r=Object(_.a)(P.a.mark((function r(a){return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.logout(e,t,n);case 2:0===r.sent.data.resultCode&&a(Ee(null,null,null,!1));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})(_e),ke=n(128),Ce=n(24),xe=n(64),Te=n(34),Ue=n.n(Te),De=Object(ke.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(Ce.c)("login(email)","email",[xe.b],Ce.a),Object(Ce.c)("password","password",[xe.b],Ce.a,{type:"password"}),Object(Ce.c)(null,"rememberMe",null,Ce.a,{type:"checkbox",className:Ue.a.inRow},"remember me"),r&&a.a.createElement("img",{src:r,alt:"captcha"}),r&&Object(Ce.c)("Symbols from captcha","captcha",[xe.b],Ce.a,{}),n&&a.a.createElement("div",{className:Ue.a.formGlobalError},n),a.a.createElement("button",null,"Sign in"))})),Ne=Object(y.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(_.a)(P.a.mark((function a(o){var c,i;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?o(we()):(10===c.data.resultCode&&o(je()),i=c.data.messages.length>0?c.data.messages[0]:"unknown error",o(Object(he.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",{className:Ue.a.container},a.a.createElement("h1",null,"Login"),a.a.createElement(De,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}),a.a.createElement("p",null,"you may use Email: 'free@samuraijs.com' as login ",a.a.createElement("br",null)," and Password: 'free' as password "))}));function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Le={initialized:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROGER_INITIALIZED":return Ie({},e,{initialized:!0});default:return e}},Ge=n(95),Fe=n(127),ze={sidebar:[{id:1,name:"Profile",path:"/profile"},{id:2,name:"Dialogs",path:"/dialogs"},{id:3,name:"Users",path:"/users"},{id:4,name:"Music",path:"/music"},{id:5,name:"Settings",path:"/settings"}],dialogData:[{id:2,name:"slava",path:"./slava.png"},{id:3,name:"vorchun",path:"./jules.png"},{id:4,name:"Lidonn",path:"./lida.png"},{id:5,name:"dzham",path:"./jew.png"},{id:6,name:"belyaev",path:"./nigga.png"}]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze;arguments.length>1&&arguments[1];return e},Be=n(139),We=n(129),Ke=Object(te.c)({profilePage:Ge.b,messagesPage:Fe.a,sidePage:Me,usersPage:z,auth:Pe,form:We.a,app:Re}),He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,Ve=Object(te.e)(Ke,He(Object(te.a)(Be.a)));window.__store__=Ve;var Je=Ve,Xe=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(ee.a,null)},a.a.createElement(e,t))}},Ye=a.a.lazy((function(){return n.e(3).then(n.bind(null,312))})),Ze=a.a.lazy((function(){return n.e(4).then(n.bind(null,311))})),Qe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(Se,null),a.a.createElement(w,null),a.a.createElement("div",{className:"App-content"},a.a.createElement(g.b,{path:"/dialogs",render:Xe(Ye)}),a.a.createElement(g.b,{path:"/profile/:userId?",render:Xe(Ze)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(le,null)}}),a.a.createElement(g.b,{path:"/music",render:function(){return a.a.createElement(f,null)}}),a.a.createElement(g.b,{path:"/settings",render:function(){return a.a.createElement(d,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(Ne,null)}})))):a.a.createElement(ee.a,null)}}]),t}(r.Component),qe=Object(te.d)(g.f,Object(y.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(we()).then((function(){e({type:"ROGER_INITIALIZED"})}))}}}))(Qe),$e=function(e){return a.a.createElement(m.a,null,a.a.createElement(y.a,{store:Je},a.a.createElement(qe,null)))};c.a.render(a.a.createElement($e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},34:function(e,t,n){e.exports={formControl:"forms_formControl__2YWUa",error:"forms_error__sXLWG",formGlobalError:"forms_formGlobalError__207ks",container:"forms_container__1p0Km",inRow:"forms_inRow__2WfjD"}},42:function(e,t,n){"use strict";var r=n(135),a=n.n(r),o=n(0),c=n.n(o);t.a=function(e){return c.a.createElement("div",null,c.a.createElement("img",{src:a.a,alt:"loading"}))}},47:function(e,t,n){e.exports={usertab:"users_usertab__3KHYW",container:"users_container__3HJsk",line:"users_line__3xIsa",usercell:"users_usercell__1IRxV"}},56:function(e,t,n){e.exports={pageNumber:"paginator_pageNumber__3zvRy",selectedpage:"paginator_selectedpage__39HTr",pages:"paginator_pages__p_iAw",paginator:"paginator_paginator__3erTG"}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"too many symbols(".concat(e," max)")}}},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),c=n.n(o);t.default=function(e){return a.a.createElement("div",{className:c.a.frwrap},a.a.createElement("img",{src:n(176)("".concat(e.path)),alt:"img"}),a.a.createElement("div",null,e.name))}},9:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e7e2f0ca-1756-49ac-a075-b19375687c40"}}),o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},92:function(e,t,n){e.exports={header:"header_header__3Bz7B",loginBlock:"header_loginBlock__3A4P_"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return v}));var r=n(6),a=n.n(r),o=n(11),c=n(46),i=n(13),u=n(9),s=n(31);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={posts:[{id:1,message:"hi, whatsup?",likes:14},{id:2,message:"yo how's it going",likes:134},{id:3,message:"hots 3200 ml",likes:245},{id:4,message:"top 10 falstad eu? huh",likes:11},{id:5,message:"still cant beat sc2 insane?",likes:29},{id:6,message:"thats reducer initial state",likes:900}],profile:null,status:void 0,postKey:7},d=function(e){return{type:"ADD-POST",newPostBody:e}},m=function(e){return{type:"SET_STATUS",status:e}},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(g(o)),t.next=11;break;case 8:return i=c.data.messages.length>0?c.data.messages[0]:"unknown error",n(Object(s.a)("editProfile",{_error:i})),t.abrupt("return",Promise.reject(i));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:e.postKey,message:t.newPostBody,likes:0};return p({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),postKey:e.postKey+1});case"SET_USER_PROFILE":return p({},e,{profile:t.profile});case"SET_STATUS":return p({},e,{status:t.status});case"DELETE_POST":return p({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO":return p({},e,{profile:p({},e.profile,{photos:t.photos})});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.b1819f48.chunk.js.map