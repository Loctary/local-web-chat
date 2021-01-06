(this["webpackJsonplocal-web-chat"]=this["webpackJsonplocal-web-chat"]||[]).push([[0],{112:function(e,t){},180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(0),c=n.n(a),s=n(13),i=n.n(s),o=n(24),u=n(29),l=n(87),d=n(220),b=n(216),p=n(217),f=n(221),j=n(218),m=n(219),x=n(213),h=n(215),g="PENDING",O="SUCCESS",v="FAILURE",y=function(e,t){return{type:e,payload:t}};function w(e){var t=function(t){return y("".concat(e,"/").concat(g),t)};return t.type=e,t.pending="".concat(e,"/").concat(g),t.success="".concat(e,"/").concat(O),t.failure="".concat(e,"/").concat(v),t}var k=w("users/CREATE_USER"),S=[],M=function(e){return e.users},I=n(210),C=Object(I.a)({root:{display:"flex",flexDirection:"column"},username:function(e){return{display:"flex",height:"25px !important",flexDirection:e.isMine?"row-reverse":"row",position:"relative",top:5,"& p":{padding:"0 .5rem",color:"#41b3a3",fontWeight:"bold",fontStyle:"italic"}}},container:function(e){return{display:"flex",justifyContent:"flex-end",alignItems:"center",flexDirection:e.isMine?"row":"row-reverse"}},message:function(e){var t=e.isMine;return{position:"relative",borderRadius:".75rem",padding:".25rem .5rem",wordBreak:"break-word",flex:"1 10px",maxWidth:"fit-content",backgroundColor:t?"#3f51b5":"#c5cbe3",color:"#fff","&:before":{display:e.isLastMessage?"block":"none",content:"''",position:"absolute",left:t?void 0:0,right:t?0:void 0,bottom:0,width:".75rem",height:".75rem",zIndex:-1,backgroundColor:t?"#3f51b5":"#c5cbe3"}}},iconPlaceholder:{alignSelf:"flex-end",flex:"0 35px",width:35,height:35}}),B=function(e){var t=e.message,n=t.createdBy,c=t.message,s=e.isFirstMessage,i=e.isLastMessage,u=Object(a.useContext)(q),l=Object(o.c)(M),d=n===u,b=C({isMine:d,isLastMessage:i}),p=Object(a.useMemo)((function(){return l.find((function(e){return e.id===n}))}),[l]);return Object(r.jsxs)("div",{className:b.root,children:[s&&Object(r.jsxs)("div",{className:b.username,children:[Object(r.jsx)("div",{className:b.iconPlaceholder}),Object(r.jsx)(x.a,{variant:"body2",children:p&&p.username})]}),Object(r.jsxs)("div",{className:b.container,children:[Object(r.jsx)("div",{className:b.message,children:Object(r.jsx)(x.a,{style:{wordWrap:"break-all"},children:c})}),Object(r.jsx)("div",{className:b.iconPlaceholder,children:i&&Object(r.jsx)(h.a,{color:d?"primary":"secondary",fontSize:"large"})})]})]})},N=c.a.memo(B),E=w("messages/POST_MESSAGE"),L=w("messages/LOAD_MESSAGES"),D=function(e){return e.messages},P=n(62),R=Object(I.a)((function(e){var t;return{container:{position:"relative"},appBar:{borderTop:"1px solid rgba(0, 0, 0, .12)",backgroundColor:"#fafafa",position:"fixed",boxSizing:"border-box",width:"100%",maxWidth:"450px",bottom:0},messages:(t={margin:"0 1rem",paddingBottom:61,scrollBehavior:"smooth"},Object(P.a)(t,"".concat(e.breakpoints.up("xs")," and (orientation: landscape)"),{paddingBottom:53}),Object(P.a)(t,e.breakpoints.up("sm"),{paddingBottom:69}),t),form:{display:"flex",alignItems:"center",width:"100%"},button:{marginLeft:".5rem"}}})),F=function(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(-1),l=Object(u.a)(i,2),d=l[0],x=l[1],h=Object(a.useRef)(null),g=Object(a.useRef)(null),O=Object(a.useRef)(null),v=Object(o.c)(D),y=Object(a.useContext)(q),w=R(),k=function(){return h.current&&h.current.scrollIntoView&&h.current.scrollIntoView()};Object(a.useLayoutEffect)((function(){v&&(window.innerHeight-g.current.getBoundingClientRect().bottom>=-125&&k(),x((function(e){return e+1})))}),[v]);var S=Object(a.useMemo)((function(){return d>0?(v||[]).slice(-d):[]}),[v,d]);return Object(r.jsxs)("div",{className:w.container,children:[v&&d<v.length&&Object(r.jsx)(b.a,{fullWidth:!0,type:"button",onClick:function(){x((function(e){var t=e+25;return S<=v.length?t:v.length}))},children:"Load more"}),Object(r.jsx)("div",{className:w.messages,ref:g,children:S.map((function(e,t){return Object(r.jsx)(N,{message:e,isLastMessage:!S[t+1]||S[t+1].createdBy!==e.createdBy,isFirstMessage:!S[t-1]||S[t-1].createdBy!==e.createdBy},"by-".concat(e.createdBy,"-at-").concat(e.timestamp))}))}),Object(r.jsx)("div",{ref:h}),Object(r.jsx)(p.a,{position:"static",className:w.appBar,children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c.trim()&&e(E({createdBy:y,message:c,timestamp:(new Date).getTime()})),k(),s(""),O.current.focus()},className:w.form,noValidate:!0,children:[Object(r.jsx)(f.a,{inputProps:{"data-testid":"message-input"},autoFocus:!0,inputRef:O,placeholder:"Message",fullWidth:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)(j.a,{"data-testid":"message-submit",type:"submit",className:w.button,children:Object(r.jsx)(m.a,{})})]})})]})},T=n(88),W=n(15),A=n.n(W),z=n(63),U=n(20),G=n.n(U),V=Object(I.a)({wrapper:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{marginTop:".5rem"}}),_=function(){var e=Object(z.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.getItem("users");case 2:if(t=e.sent){e.next=6;break}return e.next=6,G.a.setItem("users",[]);case 6:return e.abrupt("return",t||[]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){var t=e.setId,n=Object(o.b)(),c=Object(a.useState)(""),s=Object(u.a)(c,2),i=s[0],l=s[1],d=V(),p=function(){var e=Object(z.a)(A.a.mark((function e(r){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,_();case 3:a=e.sent,c=Math.max.apply(Math,[0].concat(Object(T.a)(a.map((function(e){return e.id})))))+1,t(c),n(k({users:a,user:{username:i,id:c}}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:d.wrapper,children:Object(r.jsxs)("form",{onSubmit:p,className:d.form,children:[Object(r.jsx)(f.a,{required:!0,inputProps:{"data-testid":"username-input"},autoFocus:!0,label:"Username",variant:"outlined",value:i,onChange:function(e){return l(e.target.value)}}),Object(r.jsx)(b.a,{disabled:!i,"data-testid":"username-submit",size:"large",color:"primary",variant:"contained",type:"submit",fullWidth:!0,className:d.button,children:"Enter chat"})]})})},q=Object(a.createContext)(null),H=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(l.a)();return Object(r.jsx)(d.a,{theme:s,children:Object(r.jsx)(q.Provider,{value:n,children:n?Object(r.jsx)(F,{}):Object(r.jsx)(J,{setId:c})})})},Y=n(22),K=n(40),Q=n(85),X=n(89),Z=n(17),$=n(86),ee=n.n($),te=A.a.mark(ae),ne=A.a.mark(ce),re=A.a.mark(se);function ae(){var e,t;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Z.c)(D);case 3:return e=n.sent,n.next=6,G.a.getItem("messages");case 6:if(t=n.sent){n.next=10;break}return n.next=10,G.a.setItem("messages",[]);case 10:if(ee()(t||[],e)){n.next=14;break}return n.next=14,Object(Z.b)({type:L.success,payload:t||[]});case 14:n.next=20;break;case 16:return n.prev=16,n.t0=n.catch(0),n.next=20,Object(Z.b)({type:L.failure});case 20:case"end":return n.stop()}}),te,null,[[0,16]])}function ce(e){var t,n;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,G.a.getItem("messages");case 4:if(r.t0=r.sent,r.t0){r.next=7;break}r.t0=[];case 7:return(n=r.t0).push(t),r.next=11,G.a.setItem("messages",n);case 11:return r.next=13,Object(Z.b)({type:E.success,payload:t});case 13:return r.next=15,Object(Z.b)(L());case 15:r.next=21;break;case 17:return r.prev=17,r.t1=r.catch(1),r.next=21,Object(Z.b)({type:E.failure});case 21:case"end":return r.stop()}}),ne,null,[[1,17]])}function se(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.d)(E.pending,ce);case 2:return e.next=4,Object(Z.d)(L.pending,ae);case 4:case"end":return e.stop()}}),re)}var ie=A.a.mark(ue),oe=A.a.mark(le);function ue(e){var t,n,r;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,n=t.user,r=t.users,a.next=5,G.a.setItem("users",r.concat(n));case 5:return a.next=7,Object(Z.b)({type:k.success,payload:r.concat(n)});case 7:return a.next=9,Object(Z.b)({type:L.pending});case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(Z.b)({type:k.failure});case 15:case"end":return a.stop()}}),ie,null,[[1,11]])}function le(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.d)(k.pending,ue);case 2:case"end":return e.stop()}}),oe)}var de=A.a.mark(be);function be(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield([Object(Z.a)(se),Object(Z.a)(le)],"t0",1);case 1:case"end":return e.stop()}}),de)}var pe=Object(K.withReduxStateSync)(Object(Y.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.success:return t.payload;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.success:return t.payload;default:return e}}})),fe={blacklist:[E.pending,L.pending,k.pending]},je=Object(X.a)(),me=[Object(K.createStateSyncMiddleware)(fe),je],xe=Object(Y.createStore)(pe,{},Object(Q.composeWithDevTools)(Y.applyMiddleware.apply(void 0,me)));je.run(be),Object(K.initMessageListener)(xe),Object(K.initStateWithPrevTab)(xe);var he=function(){return Object(r.jsx)(o.a,{store:xe,children:Object(r.jsx)(H,{})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,222)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(180);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(he,{})}),document.getElementById("root")),ge()},84:function(e,t){}},[[181,1,2]]]);
//# sourceMappingURL=main.ab702963.chunk.js.map