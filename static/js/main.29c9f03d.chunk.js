(window.webpackJsonpreact_social=window.webpackJsonpreact_social||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c});var r=n(133),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e7e2f0ca-1756-49ac-a075-b19375687c40"}}),o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}}},127:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var r=n(45),a=n(13);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c={dialogs:[{id:2,name:"slava",path:"./slava.png"},{id:3,name:"vorchun",path:"./jules.png"},{id:4,name:"Lidon",path:"./lida.png"},{id:5,name:"dzham",path:"./jew.png"},{id:6,name:"belyaev",path:"./nigga.png"}],msgdata:[{id:1,message:"yo dude"},{id:2,message:"yo cmon"},{id:3,message:"yo hows it going"},{id:4,message:"yeaks"},{id:5,message:"your enemy is farming, while you sleep"},{id:6,message:"go hots"}],messageKey:7},s=function(e){return{type:"SEND_MESSAGE",messageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.messageBody;return i({},e,{msgdata:[].concat(Object(r.a)(e.msgdata),[{id:e.messageKey,message:n}]),messageKey:e.messageKey+1});default:return e}}},135:function(e,t,n){e.exports=n.p+"static/media/empty.716713e3.png"},136:function(e,t,n){e.exports=n.p+"static/media/fetching.ba7bfbe7.svg"},138:function(e,t,n){e.exports=n.p+"static/media/es6.f8f68048.png"},166:function(e,t,n){e.exports=n(299)},168:function(e,t,n){},172:function(e,t,n){},177:function(e,t,n){var r={"./friends":66,"./friends.jsx":66,"./jew.png":178,"./jules.png":179,"./lida.png":180,"./nigga.png":181,"./slava.png":182};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=177},178:function(e,t,n){e.exports=n.p+"static/media/jew.a009fd1f.png"},179:function(e,t,n){e.exports=n.p+"static/media/jules.934d77d6.png"},180:function(e,t,n){e.exports=n.p+"static/media/lida.9d15dc63.png"},181:function(e,t,n){e.exports=n.p+"static/media/nigga.65cf915e.png"},182:function(e,t,n){e.exports=n.p+"static/media/slava.0620e5aa.png"},27:function(e,t,n){e.exports={nav:"navbar_nav__ZLeFD",item:"navbar_item__3_DbQ",active:"navbar_active__3EfuB",frwrap:"navbar_frwrap__Qt5Vr",friendrow:"navbar_friendrow__SP2-G"}},299:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(168),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(65),i=n.n(o),c=n(35),s=n(36),u=n(38),l=n(37),p=n(39),f=(n(172),function(e){return a.a.createElement("div",null,"Music")}),d=function(e){return a.a.createElement("div",null,"Settings")},m=n(23),g=n(29),b=n(27),h=n.n(b),O=function(e){return a.a.createElement("div",{className:h.a.item},a.a.createElement(m.b,{to:e.path,activeClassName:h.a.active},e.name))},v=n(66),E=function(e){var t=e.sidePage,n=t.sidebar.map(function(e){return a.a.createElement(O,{path:e.path,name:e.name,key:e.id})}),r=t.dialogData.slice(0,3).map(function(e){return a.a.createElement(v.default,{path:e.path,name:e.name,key:e.id})});return a.a.createElement("div",null,a.a.createElement("nav",{className:h.a.nav},n,a.a.createElement("h2",null,"Friends"),a.a.createElement("div",{className:h.a.friendrow},r)))},y=n(10),w=Object(y.b)(function(e){return{sidePage:e.sidePage}})(E),j=n(8),P=n.n(j),_=n(15),S=n(45),k=n(13),D=n(12);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var x=function(e,t,n,r){return e.map(function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(k.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},r):e})};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach(function(t){Object(k.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var U={usertabs:[],pageSize:10,totalUsers:0,currentPage:1,isFetching:!1,followProgress:[]},I=function(e){return{type:"FOLLOW",userId:e}},A=function(e){return{type:"UNFOLLOW",userId:e}},L=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},R=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},F=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},G=function(){var e=Object(_.a)(P.a.mark(function e(t,n,r,a){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(F(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(F(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return C({},e,{usertabs:x(e.usertabs,t.userId,"id",{followed:!0})});case"UNFOLLOW":return C({},e,{usertabs:x(e.usertabs,t.userId,"id",{followed:!1})});case"SET_USERS":return C({},e,{usertabs:t.usertabs});case"SET_CURRENT_PAGE":return C({},e,{currentPage:t.currentPage});case"SET_USERS_COUNT":return C({},e,{totalUsers:t.count});case"TOGGLE_IS_FETCHING":return C({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return C({},e,{followProgress:t.isFetching?[].concat(Object(S.a)(e.followProgress),[t.userId]):e.followProgress.filter(function(e){return e!==t.userId})});default:return e}},M=n(53),B=n(46),W=n.n(B),K=n(129),H=n(56),V=n.n(H),J=n(134),X=n.n(J),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,i=e.onPageChanged,c=e.portionSize,s=void 0===c?10:c,u=Math.ceil(t/n),l=[],p=1;p<u;p++)l.push(p);var f=Math.ceil(u/s),d=Object(r.useState)(1),m=Object(K.a)(d,2),g=m[0],b=m[1],h=(g-1)*s+1,O=g*s;return a.a.createElement("div",{className:V.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){b(g-1)}},"prev"),a.a.createElement("div",{className:V.a.pages},l.filter(function(e){return e>=h&&e<=O}).map(function(e){return a.a.createElement("span",{className:X()(Object(k.a)({},V.a.selectedpage,o===e),V.a.pageNumber),onClick:function(t){i(e)},key:e},e)}),f>g&&a.a.createElement("button",{onClick:function(){b(g+1)}},"next")))},Z=n(135),Q=n.n(Z),q=function(e){var t=e.user,n=e.followProgress,r=e.follow,o=e.unfollow;return a.a.createElement("div",{className:W.a.usertab,key:t.id},a.a.createElement("span",{className:W.a.usercell},a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/".concat(t.id)},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Q.a,alt:"img"}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow")),a.a.createElement("div",{className:W.a.line})),a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status?"status: ".concat(t.status):"status is empty"),a.a.createElement("div",null,"this user personal id: ".concat(t.id))))},$=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.pageSize,o=e.totalUsers,i=Object(M.a)(e,["currentPage","onPageChanged","pageSize","totalUsers"]);return a.a.createElement("div",{className:W.a.container},a.a.createElement(Y,{currentPage:t,onPageChanged:n,pageSize:r,totalItemsCount:o}),i.users.map(function(e){return a.a.createElement(q,{user:e,key:e.id,followProgress:i.followProgress,follow:i.follow,unfollow:i.unfollow})}))},ee=n(41),te=n(7),ne=n(137),re=Object(ne.a)(function(e){return e.usersPage.usertabs},function(e){return e.filter(function(e){return!0})}),ae=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsers},ie=function(e){return e.usersPage.currentPage},ce=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followProgress},ue=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.getUsersThunk(e,n.props.pageSize)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null," ",this.props.isFetching?a.a.createElement(ee.a,null):null,a.a.createElement($,{totalUsers:this.props.totalUsers,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followProgress:this.props.followProgress}))}}]),t}(a.a.Component),le=Object(te.d)(Object(y.b)(function(e){return{users:re(e),pageSize:ae(e),totalUsers:oe(e),currentPage:ie(e),isFetching:ce(e),followProgress:se(e)}},{follow:function(e){return function(){var t=Object(_.a)(P.a.mark(function t(n){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(n,e,D.c.follow.bind(D.c),I);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(_.a)(P.a.mark(function t(n){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(n,e,D.c.unfollow.bind(D.c),A);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowProgress:F,getUsersThunk:function(e,t){return function(){var n=Object(_.a)(P.a.mark(function n(r){var a;return P.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(R(!0)),r(L(e)),n.next=4,D.c.getUsers(e,t);case 4:a=n.sent,r(R(!1)),r({type:"SET_USERS",usertabs:a.items}),r({type:"SET_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(ue),pe=n(138),fe=n.n(pe),de=n(93),me=n.n(de),ge=function(e){return a.a.createElement("header",{className:me.a.header},a.a.createElement("img",{src:fe.a,alt:"img logo wide"}),a.a.createElement("div",{className:me.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(m.b,{to:"/login"},"Login")))},be=n(47);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach(function(t){Object(k.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ve={userId:null,email:null,login:null,isAuth:!1},Ee=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},ye=function(){return function(){var e=Object(_.a)(P.a.mark(function e(t){var n,r,a,o,i;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,i=r.email,t(Ee(a,i,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Oe({},e,{},t.payload);default:return e}},je=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(ge,this.props)}}]),t}(a.a.Component),Pe=Object(y.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(e,t,n){return function(){var r=Object(_.a)(P.a.mark(function r(a){return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.a.logout(e,t,n);case 2:0===r.sent.data.resultCode&&a(Ee(null,null,null,!1));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(je),_e=n(128),Se=n(32),ke=n(86),De=n(33),Te=n.n(De),xe=Object(_e.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(Se.c)("login(email)","email",[ke.b],Se.a),Object(Se.c)("password","password",[ke.b],Se.a,{type:"password"}),Object(Se.c)(null,"rememberMe",null,Se.a,{type:"checkbox",className:Te.a.inRow},"remember me"),n&&a.a.createElement("div",{className:Te.a.formGlobalError},n),a.a.createElement("button",null,"Sign in"))}),Ne=Object(y.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var r=Object(_.a)(P.a.mark(function r(a){var o,i;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(ye()):(i=o.data.messages.length>0?o.data.messages[0]:"unknown error",a(Object(be.a)("login",{_error:i})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",{className:Te.a.container},a.a.createElement("h1",null,"Login"),a.a.createElement(xe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}),a.a.createElement("p",null,"you may use Email: 'free@samuraijs.com' as login ",a.a.createElement("br",null)," and Password: 'free' as password "))});function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(n,!0).forEach(function(t){Object(k.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Ie={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROGER_INITIALIZED":return Ue({},e,{initialized:!0});default:return e}},Le=n(96),Re=n(127),Fe={sidebar:[{id:1,name:"Profile",path:"/profile"},{id:2,name:"Dialogs",path:"/dialogs"},{id:3,name:"Users",path:"/users"},{id:4,name:"Music",path:"/music"},{id:5,name:"Settings",path:"/settings"}],dialogData:[{id:2,name:"slava",path:"./slava.png"},{id:3,name:"vorchun",path:"./jules.png"},{id:4,name:"Lidonn",path:"./lida.png"},{id:5,name:"dzham",path:"./jew.png"},{id:6,name:"belyaev",path:"./nigga.png"}]},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;arguments.length>1&&arguments[1];return e},ze=n(140),Me=n(130),Be=Object(te.c)({profilePage:Le.b,messagesPage:Re.a,sidePage:Ge,usersPage:z,auth:we,form:Me.a,app:Ae}),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,Ke=Object(te.e)(Be,We(Object(te.a)(ze.a)));window.__store__=Ke;var He=Ke,Ve=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(ee.a,null)},a.a.createElement(e,t))}},Je=a.a.lazy(function(){return n.e(3).then(n.bind(null,313))}),Xe=a.a.lazy(function(){return n.e(4).then(n.bind(null,312))}),Ye=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(Pe,null),a.a.createElement(w,null),a.a.createElement("div",{className:"App-content"},a.a.createElement(g.b,{path:"/dialogs",render:Ve(Je)}),a.a.createElement(g.b,{path:"/profile/:userId?",render:Ve(Xe)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(le,null)}}),a.a.createElement(g.b,{path:"/music",render:function(){return a.a.createElement(f,null)}}),a.a.createElement(g.b,{path:"/settings",render:function(){return a.a.createElement(d,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(Ne,null)}})))):a.a.createElement(ee.a,null)}}]),t}(r.Component),Ze=Object(te.d)(g.f,Object(y.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){e(ye()).then(function(){e({type:"ROGER_INITIALIZED"})})}}}))(Ye),Qe=function(e){return a.a.createElement(m.a,null,a.a.createElement(y.a,{store:He},a.a.createElement(Ze,null)))};i.a.render(a.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return f});var r=n(53),a=n(0),o=n.n(a),i=n(33),c=n.n(i),s=n(89),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,i=n&&r;return o.a.createElement("div",{className:c.a.formControl+" "+(i?c.a.error:"")},a,i&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",{className:a.className},i,o.a.createElement(s.a,Object.assign({placeholder:e,name:t,component:r,validate:n},a)))}},33:function(e,t,n){e.exports={formControl:"forms_formControl__2YWUa",error:"forms_error__sXLWG",formGlobalError:"forms_formGlobalError__207ks",container:"forms_container__1p0Km",inRow:"forms_inRow__2WfjD"}},41:function(e,t,n){"use strict";var r=n(136),a=n.n(r),o=n(0),i=n.n(o);t.a=function(e){return i.a.createElement("div",null,i.a.createElement("img",{src:a.a,alt:"loading"}))}},46:function(e,t,n){e.exports={usertab:"users_usertab__3KHYW",container:"users_container__3HJsk",line:"users_line__3xIsa",usercell:"users_usercell__1IRxV"}},56:function(e,t,n){e.exports={pageNumber:"paginator_pageNumber__3zvRy",selectedpage:"paginator_selectedpage__39HTr",pages:"paginator_pages__p_iAw",paginator:"paginator_paginator__3erTG"}},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),i=n.n(o);t.default=function(e){return a.a.createElement("div",{className:i.a.frwrap},a.a.createElement("img",{src:n(177)("".concat(e.path)),alt:"img"}),a.a.createElement("div",null,e.name))}},86:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"too many symbols(".concat(e," max)")}}},93:function(e,t,n){e.exports={header:"header_header__3Bz7B",loginBlock:"header_loginBlock__3A4P_"}},96:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"d",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"f",function(){return b}),n.d(t,"e",function(){return h});var r=n(8),a=n.n(r),o=n(15),i=n(45),c=n(13),s=n(12);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p={posts:[{id:1,message:"hi, whatsup?",likes:14},{id:2,message:"yo how's it going",likes:134},{id:3,message:"hots 3200 ml",likes:245},{id:4,message:"top 10 falstad eu? huh",likes:11},{id:5,message:"still cant beat sc2 insane?",likes:29},{id:6,message:"thats reducer initial state",likes:900}],profile:null,status:void 0,postKey:7},f=function(e){return{type:"ADD-POST",newPostBody:e}},d=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:e.postKey,message:t.newPostBody,likes:0};return l({},e,{posts:[].concat(Object(i.a)(e.posts),[n]),postKey:e.postKey+1});case"SET_USER_PROFILE":return l({},e,{profile:t.profile});case"SET_STATUS":return l({},e,{status:t.status});case"DELETE_POST":return l({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});case"SAVE_PHOTO":return l({},e,{profile:l({},e.profile,{photos:t.photos})});default:return e}}}},[[166,1,2]]]);
//# sourceMappingURL=main.29c9f03d.chunk.js.map