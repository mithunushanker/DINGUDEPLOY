(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a(25),c=a.n(n),i=a(9),r=a(15),l=a.n(r),o=a(18),b=a(13);b.a.initializeApp({apiKey:"AIzaSyAosx0z5Agz85zQjkOIpJMwjd3rpYgvAxY",authDomain:"chatlify-a475a.firebaseapp.com",projectId:"chatlify-a475a",storageBucket:"chatlify-a475a.appspot.com",messagingSenderId:"766839319490",appId:"1:766839319490:web:13228c172ae9a636a7445b",measurementId:"G-XBDM7WL7C7"});var j=b.a.auth(),d=new b.a.auth.GoogleAuthProvider,h=b.a.firestore(),u=b.a.storage(),p=(a(42),a.p,a(2));var x=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=(t[0],t[1],Object(s.useState)("")),n=Object(i.a)(a,2),c=(n[0],n[1],Object(s.useState)("")),r=Object(i.a)(c,2),l=(r[0],r[1],Object(s.useState)("")),o=Object(i.a)(l,2),b=(o[0],o[1],Object(s.useState)("")),h=Object(i.a)(b,2);return h[0],h[1],Object(p.jsxs)("div",{className:"main-credential",children:[Object(p.jsx)("nav",{class:"navbar navbar-dark justify-content-center fixed-top",children:Object(p.jsx)("span",{class:"navbar-brand heading font-weight-bolder mb-0 h1 pr-3",children:">>DINGU"})}),Object(p.jsx)("div",{id:"SignIn",children:Object(p.jsx)("div",{class:"form-container sign-in-container mb-4",id:"Signin",children:Object(p.jsxs)("form",{className:"SignIn-Form py-3",action:"#",children:[Object(p.jsx)("h3",{className:"form-title",children:"Sign in to continue"}),Object(p.jsx)("div",{class:"social-container",children:Object(p.jsxs)("button",{type:"button",className:"btn btn-lg btn-block google-signin-btn",onClick:function(){j.signInWithPopup(d).catch(alert)},children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"#fff",className:"bi bi-google pb-1 mr-2",viewBox:"0 0 16 16",children:Object(p.jsx)("path",{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"})}),Object(p.jsx)("span",{className:"signin-text font-weight-bolder h6 text-white text-capitalize",children:"Sign In with Google"})]})})]})})})]})},m=a(14),O=a(23),v=(a(44),a(63));a(45);var g=function(){var e=Object(m.a)(j),t=Object(i.a)(e,1)[0];return Object(p.jsx)("div",{className:"Navbar",children:Object(p.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(p.jsxs)("h1",{className:"heading font-weight-bolder ml-4 mt-1",children:[">>DINGU",Object(p.jsx)("span",{className:"sub-brand-name text-white font-weight-bolder",children:" Chat"})]}),Object(p.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{class:"navbar-toggler-icon"})}),Object(p.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(p.jsxs)("ul",{class:"navbar-nav ml-auto",children:[Object(p.jsxs)("li",{class:"nav-item m-2 d-inline-flex",children:[Object(p.jsx)(v.a,{className:"avatar",src:t.photoURL,style:{height:"1000",width:"100"}}),Object(p.jsx)("span",{className:"user-name mt-2 ml-2",children:t.displayName})]}),Object(p.jsx)("li",{class:"nav-item m-2",children:Object(p.jsx)("button",{id:"signoutbtn",className:"btn mr-3",onClick:function(){j.signOut()},children:Object(p.jsxs)("b",{children:[Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-box-arrow-right mr-2 mb-1",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]}),Object(p.jsx)("span",{className:"signout-btn-text",children:"Sign out"})]})})})]})})]})})};var f=function(){var e=(new Date).toISOString().slice(0,10),t=Object(s.useState)("Compose your message"),a=Object(i.a)(t,2),n=a[0],c=a[1],r=Object(m.a)(j),d=Object(i.a)(r,1)[0],x=Object(s.useState)([]),f=Object(i.a)(x,2),w=f[0],y=f[1],N=Object(s.useState)(""),S=Object(i.a)(N,2),k=S[0],C=S[1],z=Object(s.useState)(""),A=Object(i.a)(z,2),I=A[0],M=A[1],L=Object(s.useState)(!0),B=Object(i.a)(L,2),T=B[0],V=B[1];Object(s.useEffect)((function(){var e=[],t=h.collection("files").orderBy("createdat").onSnapshot((function(t){t.forEach((function(t){e.push(Object(O.a)(Object(O.a)({},t.data()),{},{key:t.id}))})),y(e)}));return function(){return t()}}),[]),console.log(w);var D=function(){var t=Object(o.a)(l.a.mark((function t(){var a,s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(V(!1),!(k.size>1999999)){t.next=7;break}k.value="",alert("Hey ".concat(d.displayName," We Limit The File Size To 1 MB To Provide More Study Materials Please Reduce The File Size To 1MB")),V(!0),t.next=16;break;case 7:return a=u.ref(),s=a.child(k.name),t.next=11,s.put(k);case 11:return t.next=13,s.getDownloadURL();case 13:return n=t.sent,t.next=16,h.collection("files").doc().set({url:n,uploadedby:d.displayName,photourl:d.photoURL,name:I,uploadedon:e,createdat:b.a.firestore.FieldValue.serverTimestamp(),uid:d.uid}).then((function(){V(!0)}));case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)(g,{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"posts",children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),w.length>0?w.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"form "+(e.uid===d.uid?"if true":"if false"),children:[Object(p.jsx)(v.a,{className:"avatar ml-2 mt-3 "+(e.uid===d.uid?"avatar-true mt-4":"avatar-false mt-4"),src:e.photourl},e.key),Object(p.jsxs)("div",{className:"nav-tab ml-1",align:"left",children:[Object(p.jsx)("span",{className:"user-info text-monospace",children:e.uploadedby},e.key),Object(p.jsxs)("div",{className:"nav-link mb-3 "+(e.uid===d.uid?"if tru":"if fals"),children:[Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-file-earmark-arrow-down mb-2",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"}),Object(p.jsx)("path",{d:"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"})]}),Object(p.jsx)("a",{className:"file-info ",href:e.url,style:{fontSize:"14px"},children:e.name.toUpperCase()},e.key),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"date text-monospace ",children:e.uploadedon},e.key)]},e.key)]},e.key)]},e.key)})})):Object(p.jsx)("h2",{align:"center",style:{color:"rgb(0,228,114)"},children:"NO MESSAGES :( "})]}),Object(p.jsx)("div",{className:"message-typing-box",children:Object(p.jsxs)("nav",{className:"navbar fixed-bottom navbar-expand-sm",id:"message-typing-box",children:[Object(p.jsx)("h5",{className:"text mr-1",style:{color:"rgb(0,228,114)"},children:""}),Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("input",{type:"text",className:"form-control mt-3",placeholder:n,onFocus:function(){c("")},onBlur:function(){c("Compose your message")},value:I,onChange:function(e){M(e.target.value)}}),Object(p.jsx)("input",{type:"file",id:"file",accept:"application/pdf",onChange:function(e){C(e.target.files[0])}}),Object(p.jsx)("label",{for:"file",className:"file-btn-label text-dark",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"currentColor",className:"bi bi-paperclip",viewBox:"0 0 16 16",children:Object(p.jsx)("path",{d:"M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"})})}),T?Object(p.jsx)("button",{className:"button-send btn-group-sm",onClick:D,children:Object(p.jsx)("i",{className:"fa fa-send pt-1"})}):Object(p.jsx)("div",{style:{marginTop:"17px",marginLeft:"5px"},class:"spinner-border text-light ",role:"status",children:Object(p.jsx)("span",{class:"sr-only",children:"Loading..."})})]})]})})]})};a(50);var w=function(){var e=Object(m.a)(j),t=Object(i.a)(e,2),a=t[0],s=t[1];return j.onAuthStateChanged((function(e){console.log(e)})),s?Object(p.jsx)("div",{className:"parent container-fluid",children:Object(p.jsx)("div",{className:"child",class:"spinner-border text-light ",style:{marginTop:"250px",marginLeft:"700px"},role:"status",children:Object(p.jsx)("span",{class:"sr-only",children:"Loading..."})})}):a?Object(p.jsx)("div",{children:Object(p.jsx)(f,{})}):Object(p.jsx)(x,{})};c.a.render(Object(p.jsx)(w,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.5c6c2de6.chunk.js.map