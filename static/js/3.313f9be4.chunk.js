(window.webpackJsonpreact_social=window.webpackJsonpreact_social||[]).push([[3],{299:function(e,a,t){e.exports={dialog:"dialogs_dialog__3ELck",active:"dialogs_active__a2Rhq",diallist:"dialogs_diallist__2g_A1",dialogswrapper:"dialogs_dialogswrapper__33kui",messages:"dialogs_messages__1wjuZ",message:"dialogs_message__3p6pF"}},300:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(299),r=t.n(i),c=t(22);a.default=function(e){return s.a.createElement("div",{className:r.a.dialog},s.a.createElement("img",{src:t(302)("".concat(e.path)),alt:"img"}),s.a.createElement(c.b,{to:"/dialogs/"+e.id},e.name))}},302:function(e,a,t){var n={"./dialogitm":300,"./dialogitm.jsx":300,"./jew.png":303,"./jules.png":304,"./lida.png":305,"./nigga.png":306,"./slava.png":307};function s(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id=302},303:function(e,a,t){e.exports=t.p+"static/media/jew.a009fd1f.png"},304:function(e,a,t){e.exports=t.p+"static/media/jules.934d77d6.png"},305:function(e,a,t){e.exports=t.p+"static/media/lida.9d15dc63.png"},306:function(e,a,t){e.exports=t.p+"static/media/nigga.65cf915e.png"},307:function(e,a,t){e.exports=t.p+"static/media/slava.0620e5aa.png"},312:function(e,a,t){"use strict";t.r(a);var n=t(127),s=t(0),i=t.n(s),r=t(299),c=t.n(r),o=function(e){return i.a.createElement("div",{className:c.a.message},e.message)},l=t(300),u=t(89),d=t(128),m=t(33),g=t(72),p=Object(g.a)(100),f=Object(d.a)({form:"dialogs"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(u.a,{component:m.b,validate:[g.b,p],name:"messageBody",placeholder:"write your message here"})),i.a.createElement("button",null,"Send"))})),b=function(e){var a=e.messagesPage,t=a.dialogs.map((function(e){return i.a.createElement(l.default,{path:e.path,name:e.name,key:e.id})})),n=a.msgdata.map((function(e){return i.a.createElement(o,{message:e.message,key:e.id})}));return i.a.createElement("div",{className:c.a.dialogswrapper},i.a.createElement("div",{className:c.a.diallist},t),i.a.createElement("div",{className:c.a.messages},i.a.createElement("div",null,n),i.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.messageBody)}})))},_=t(11),v=t(8),E=t(36),h=t(37),j=t(39),w=t(38),O=t(40),k=t(29),y=function(e){return{isAuth:e.auth.isAuth}};a.default=Object(v.d)(Object(_.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(a){e(Object(n.b)(a))}}})),(function(e){var a=function(a){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(O.a)(t,a),Object(h.a)(t,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(k.a,{to:"/login"})}}]),t}(i.a.Component);return Object(_.b)(y)(a)}))(b)}}]);
//# sourceMappingURL=3.313f9be4.chunk.js.map