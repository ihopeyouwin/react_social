(window.webpackJsonpreact_social=window.webpackJsonpreact_social||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={dialog:"dialogs_dialog__3ELck",active:"dialogs_active__a2Rhq",diallist:"dialogs_diallist__2g_A1",dialogswrapper:"dialogs_dialogswrapper__33kui",messages:"dialogs_messages__1wjuZ",message:"dialogs_message__3p6pF"}},function(e,t,n){e.exports={nav:"navbar_nav__ZLeFD",item:"navbar_item__3_DbQ",active:"navbar_active__3EfuB",frwrap:"navbar_frwrap__Qt5Vr",friendrow:"navbar_friendrow__SP2-G"}},,function(e,t,n){e.exports={descblock:"profileinfo_descblock__2ygrJ",avatar:"profileinfo_avatar__-G4wh",fullname:"profileinfo_fullname__Wv9Il",line:"profileinfo_line__1f9Zf",status:"profileinfo_status__InmTU",job:"profileinfo_job__bQBAm",contacts:"profileinfo_contacts__HuI60"}},,,,,,,,,function(e,t,n){e.exports={usertab:"users_usertab__3KHYW",selectedpage:"users_selectedpage__2BxqX",pages:"users_pages__DFa8l",container:"users_container__3HJsk"}},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(12),o=n.n(s),i=n(4);t.default=function(e){return r.a.createElement("div",{className:o.a.dialog},r.a.createElement("img",{src:n(79)("".concat(e.path)),alt:"img"}),r.a.createElement(i.b,{to:"/dialogs/"+e.id},e.name))}},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(13),o=n.n(s);t.default=function(e){return r.a.createElement("div",{className:o.a.frwrap},r.a.createElement("img",{src:n(89)("".concat(e.path)),alt:"img"}),r.a.createElement("div",null,e.name))}},function(e,t,n){e.exports={posts:"myposts_posts__oXOz_",postsblock:"myposts_postsblock__Xd4W9",button:"myposts_button__-KRXQ"}},,,,,function(e,t,n){e.exports={header:"header_header__3Bz7B",loginBlock:"header_loginBlock__3A4P_"}},,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/empty.716713e3.png"},function(e,t,n){e.exports=n.p+"static/media/fetching.ba7bfbe7.svg"},function(e,t,n){e.exports=n.p+"static/media/beach.e68be759.jpg"},function(e,t,n){e.exports={item:"post_item__2AFEi"}},function(e,t,n){e.exports=n.p+"static/media/u21.4d2a33ea.png"},function(e,t,n){e.exports=n(95)},,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){var a={"./dialogitm":26,"./dialogitm.jsx":26,"./jew.png":80,"./jules.png":81,"./lida.png":82,"./nigga.png":83,"./slava.png":84};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=79},function(e,t,n){e.exports=n.p+"static/media/jew.a009fd1f.png"},function(e,t,n){e.exports=n.p+"static/media/jules.934d77d6.png"},function(e,t,n){e.exports=n.p+"static/media/lida.9d15dc63.png"},function(e,t,n){e.exports=n.p+"static/media/nigga.65cf915e.png"},function(e,t,n){e.exports=n.p+"static/media/slava.0620e5aa.png"},,,,,function(e,t,n){var a={"./friends":28,"./friends.jsx":28,"./jew.png":90,"./jules.png":91,"./lida.png":92,"./nigga.png":93,"./slava.png":94};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=89},function(e,t,n){e.exports=n.p+"static/media/jew.a009fd1f.png"},function(e,t,n){e.exports=n.p+"static/media/jules.934d77d6.png"},function(e,t,n){e.exports=n.p+"static/media/lida.9d15dc63.png"},function(e,t,n){e.exports=n.p+"static/media/nigga.65cf915e.png"},function(e,t,n){e.exports=n.p+"static/media/slava.0620e5aa.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(22),o=n(19),i=n(11),l=n(45).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e7e2f0ca-1756-49ac-a075-b19375687c40"}}),c=function(e,t){return l.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},u=function(e){return l.post("follow/".concat(e))},p=function(e){return l.delete("follow/".concat(e))},m=function(e){return l.get("profile/".concat(e))},d=function(){return l.get("auth/me")};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E={posts:[{id:1,message:"hi, whatsup?",likes:14},{id:2,message:"yo how's it going",likes:134},{id:3,message:"hots 3200 ml",likes:245},{id:4,message:"top 10 falstad eu? huh",likes:11},{id:5,message:"still cant beat sc2 insane?",likes:29},{id:6,message:"thats reducer initial state",likes:900}],newPostText:"",profile:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:7,message:e.newPostText,likes:0};return g({},e,{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"UPDATE-POST-TEXT":return g({},e,{newPostText:t.newText});case"SET_USER_PROFILE":return g({},e,{profile:t.profile});default:return e}};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O={dialogs:[{id:2,name:"slava",path:"./slava.png"},{id:3,name:"vorchun",path:"./jules.png"},{id:4,name:"Lidon",path:"./lida.png"},{id:5,name:"dzham",path:"./jew.png"},{id:6,name:"belyaev",path:"./nigga.png"}],msgdata:[{id:1,message:"yo dude"},{id:2,message:"yo cmon"},{id:3,message:"yo hows it going"},{id:4,message:"yeaks"},{id:5,message:"your enemy is farming, while you sleep"},{id:6,message:"go hots"}],newMsgBody:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEW_MSG_BODY":return b({},e,{newMsgBody:t.body});case"SEND_MESSAGE":var n=e.newMsgBody;return b({},e,{newMsgBody:"",msgdata:[].concat(Object(o.a)(e.msgdata),[{id:7,message:n}])});default:return e}},w={sidebar:[{id:1,name:"Profile",path:"/profile"},{id:2,name:"Dialogs",path:"/dialogs"},{id:3,name:"Users",path:"/users"},{id:4,name:"Music",path:"/music"},{id:5,name:"Settings",path:"/settings"}],dialogData:[{id:2,name:"slava",path:"./slava.png"},{id:3,name:"vorchun",path:"./jules.png"},{id:4,name:"Lidonn",path:"./lida.png"},{id:5,name:"dzham",path:"./jew.png"},{id:6,name:"belyaev",path:"./nigga.png"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;arguments.length>1&&arguments[1];return e};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k={usertabs:[],pageSize:15,totalUsers:0,currentPage:1,isFetching:!1,followProgress:[]},S=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},T=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},N=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return j({},e,{usertabs:e.usertabs.map(function(e){return e.id===t.userId?j({},e,{followed:!0}):e})});case"UNFOLLOW":return j({},e,{usertabs:e.usertabs.map(function(e){return e.id===t.userId?j({},e,{followed:!1}):e})});case"SET_USERS":return j({},e,{usertabs:t.usertabs});case"SET_CURRENT_PAGE":return j({},e,{currentPage:t.currentPage});case"SET_USERS_COUNT":return j({},e,{totalUsers:t.count});case"TOGGLE_IS_FETCHING":return j({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return j({},e,{followProgress:t.isFetching?[].concat(Object(o.a)(e.followProgress),[t.userId]):e.followProgress.filter(function(e){return e!==t.userId})});default:return e}};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A={userId:null,email:null,login:null,isAuth:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return U({},e,{},t.data,{isAuth:!0});default:return e}},C=n(46),L=Object(s.c)({profilePage:h,messagesPage:_,sidePage:y,usersPage:D,auth:F}),I=Object(s.d)(L,Object(s.a)(C.a));window.store=I;var G=I,M=n(25),R=n.n(M),B=(n(78),function(e){return r.a.createElement("div",null,"Music")}),z=function(e){return r.a.createElement("div",null,"Settings")},W=n(4),J=n(14),X=n(12),H=n.n(X),Q=function(e){return r.a.createElement("div",{className:H.a.message},e.message)},Y=n(26),K=function(e){var t=e.messagesPage,n=t.dialogs.map(function(e){return r.a.createElement(Y.default,{path:e.path,name:e.name,key:e.id})}),a=t.msgdata.map(function(e){return r.a.createElement(Q,{message:e.message,key:e.id})}),s=t.newMsgBody;return r.a.createElement("div",{className:H.a.dialogswrapper},r.a.createElement("div",{className:H.a.diallist},n),r.a.createElement("div",{className:H.a.messages},r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement("textarea",{value:s,onChange:function(t){var n=t.target.value;e.updateMessageBody(n)},placeholder:"write your message now"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.sendMessage()}},"Send")))))},Z=n(2),q=Object(Z.b)(function(e){return{messagesPage:e.messagesPage}},function(e){return{updateMessageBody:function(t){e({type:"UPDATE_NEW_MSG_BODY",body:t})},sendMessage:function(){e({type:"SEND_MESSAGE"})}}})(K),V=n(13),$=n.n(V),ee=function(e){return r.a.createElement("div",{className:$.a.item},r.a.createElement(W.b,{to:e.path,activeClassName:$.a.active},e.name))},te=n(28),ne=function(e){var t=e.sidePage,n=t.sidebar.map(function(e){return r.a.createElement(ee,{path:e.path,name:e.name,key:e.id})}),a=t.dialogData.slice(0,3).map(function(e){return r.a.createElement(te.default,{path:e.path,name:e.name,key:e.id})});return r.a.createElement("div",null,r.a.createElement("nav",{className:$.a.nav},n,r.a.createElement("h2",null,"Friends"),r.a.createElement("div",{className:$.a.friendrow},a)))},ae=Object(Z.b)(function(e){return{sidePage:e.sidePage}})(ne),re=n(16),se=n(17),oe=n(20),ie=n(18),le=n(21),ce=n(24),ue=n.n(ce),pe=n(49),me=n.n(pe),de=function(e){for(var t=Math.ceil(e.totalUsers/e.pageSize),n=[],a=1;a<t;a++)n.push(a);return r.a.createElement("div",{className:ue.a.container},r.a.createElement("div",{className:ue.a.pages},n.map(function(t){return r.a.createElement("span",{onClick:function(n){e.onPageChanged(t)},className:e.currentPage===t?ue.a.selectedpage:void 0,key:t},t)})),e.users.map(function(t){return r.a.createElement("div",{className:ue.a.usertab,key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(W.b,{to:"/profile/".concat(t.id)},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:me.a,alt:"img"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followProgress.some(function(e){return e===t.id}),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followProgress.some(function(e){return e===t.id}),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))}))},fe=n(50),ge=n.n(fe),Ee=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:ge.a,alt:"loading"}))},he=function(e){function t(){var e,n;Object(re.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(oe.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.getUsersThunk(e,n.props.pageSize)},n}return Object(le.a)(t,e),Object(se.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null," ",this.props.isFetching?r.a.createElement(Ee,null):null,r.a.createElement(de,{totalUsers:this.props.totalUsers,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followProgress:this.props.followProgress}))}}]),t}(r.a.Component),ve=Object(Z.b)(function(e){return{users:e.usersPage.usertabs,pageSize:e.usersPage.pageSize,totalUsers:e.usersPage.totalUsers,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followProgress:e.usersPage.followProgress}},{follow:function(e){return function(t){t(N(!0,e)),u(e).then(function(n){0===n.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(N(!1,e))})}},unfollow:function(e){return function(t){t(N(!0,e)),p(e).then(function(n){0===n.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(N(!1,e))})}},setCurrentPage:S,toggleFollowProgress:N,getUsersThunk:function(e,t){return function(n){n(T(!0)),n(S(e)),c(e,t).then(function(e){n(T(!1)),n({type:"SET_USERS",usertabs:e.items}),n({type:"SET_USERS_COUNT",count:e.totalCount})})}}})(he),be=n(15),Oe=n.n(be),_e=n(51),we=n.n(_e),ye=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:Oe.a.descblock},r.a.createElement("img",{src:e.profile.photos.large,className:Oe.a.avatar,alt:"userPhoto"}),r.a.createElement("div",{className:Oe.a.fullname},e.profile.fullName),r.a.createElement("div",{className:Oe.a.status},r.a.createElement("span",null,"\u0421\u0442\u0430\u0442\u0443\u0441: "),e.profile.aboutMe,r.a.createElement("div",{className:Oe.a.line})),r.a.createElement("div",{className:Oe.a.job},r.a.createElement("div",null,r.a.createElement("span",null,"\u0438\u0449\u0443 \u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0443: "),e.profile.lookingForAJob?"\u0438\u0449\u0443":"\u043d\u0435 \u0438\u0449\u0443"),r.a.createElement("div",null,r.a.createElement("span",null,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: "),e.profile.lookingForAJobDescription)),r.a.createElement("div",{className:Oe.a.contacts},r.a.createElement("div",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: "),r.a.createElement("div",null,r.a.createElement("span",null,"vk:  "),e.profile.contacts.vk),r.a.createElement("div",null,r.a.createElement("span",null,"github:  "),e.profile.contacts.github),r.a.createElement("div",null,r.a.createElement("span",null,"insta:  "),e.profile.contacts.instagram),r.a.createElement("div",null,r.a.createElement("span",null,"twitter:  "),e.profile.contacts.twitter)))):r.a.createElement("div",null,r.a.createElement("img",{src:we.a,alt:"bigphoto"}),r.a.createElement(Ee,null))},Pe=n(29),je=n.n(Pe),ke=n(52),Se=n.n(ke),Te=function(e){return r.a.createElement("div",{className:Se.a.item},r.a.createElement("img",{src:"https://s3.amazonaws.com/artistsnclients/k63/samples/pju_800.JPG",alt:"img"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like"),r.a.createElement("span",null,"(",e.likes,")")))},Ne=function(e){var t=e.posts.map(function(e){return r.a.createElement(Te,{message:e.message,likes:e.likes,key:e.id})}).reverse(),n=r.a.createRef();return r.a.createElement("div",{className:je.a.postsblock},r.a.createElement("h3",null,"myposts"),r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(){var t=n.current.value;e.updatePostText(t)},ref:n,placeholder:"write your message here",value:e.newPostText})),r.a.createElement("div",{className:je.a.button},r.a.createElement("button",{onClick:function(){e.addPost()}},"Add post")),r.a.createElement("div",{className:je.a.posts},t))},De=Object(Z.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{updatePostText:function(t){var n=function(e){return{type:"UPDATE-POST-TEXT",newText:e}}(t);e(n)},addPost:function(){e({type:"ADD-POST"})}}})(Ne),xe=function(e){return r.a.createElement("div",null,r.a.createElement(ye,{profile:e.profile}),r.a.createElement(De,null))},Ue=function(e){function t(){return Object(re.a)(this,t),Object(oe.a)(this,Object(ie.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(se.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=1618),this.props.getUserProfile(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(xe,Object.assign({},this.props,{profile:this.props.profile})))}}]),t}(r.a.Component),Ae=Object(J.e)(Ue),Fe=Object(Z.b)(function(e){return{profile:e.profilePage.profile}},{getUserProfile:function(e){return function(t){m(e).then(function(e){t(function(e){return{type:"SET_USER_PROFILE",profile:e}}(e.data))})}}})(Ae),Ce=n(53),Le=n.n(Ce),Ie=n(34),Ge=n.n(Ie),Me=function(e){return r.a.createElement("header",{className:Ge.a.header},r.a.createElement("img",{src:Le.a,alt:"img logo wide"}),r.a.createElement("div",{className:Ge.a.loginBlock},e.isAuth?e.login:r.a.createElement(W.b,{to:"/login"},"Login")))},Re=function(e){function t(){return Object(re.a)(this,t),Object(oe.a)(this,Object(ie.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(se.a)(t,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return r.a.createElement(Me,this.props)}}]),t}(r.a.Component),Be=Object(Z.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{getAuthUserData:function(){return function(e){d().then(function(t){if(0===t.data.resultCode){var n=t.data.data,a=n.id,r=n.login,s=n.email;e(function(e,t,n){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n}}}(a,s,r))}})}}})(Re);var ze=function(){return r.a.createElement(W.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Be,null),r.a.createElement(ae,null),r.a.createElement("div",{className:"App-content"},r.a.createElement(J.a,{path:"/dialogs",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(J.a,{path:"/profile/:userId?",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(J.a,{path:"/users",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(J.a,{path:"/music",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(J.a,{path:"/settings",render:function(){return r.a.createElement(z,null)}}))))};R.a.render(r.a.createElement(W.a,null,r.a.createElement(Z.a,{store:G},r.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[54,1,2]]]);
//# sourceMappingURL=main.b960a4f8.chunk.js.map