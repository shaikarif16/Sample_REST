(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),u=n.n(r),c=(n(14),n(8)),m=n(1),o=n(2),i=n(5),s=function(e){var t={id:null,name:"",username:""},n=Object(a.useState)(t),r=Object(m.a)(n,2),u=r[0],c=r[1],s=function(e){var t=e.target,n=t.name,a=t.value;c(Object(i.a)({},u,Object(o.a)({},n,a)))};return l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),u.name&&u.username&&(e.addUser(u),c(t))}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:u.name,onChange:s}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:u.username,onChange:s}),l.a.createElement("button",null,"Add new user"))},d=function(e){var t=Object(a.useState)(e.currentUser),n=Object(m.a)(t,2),r=n[0],u=n[1];Object(a.useEffect)((function(){u(e.currentUser)}),[e]);var c=function(e){var t=e.target,n=t.name,a=t.value;u(Object(i.a)({},r,Object(o.a)({},n,a)))};return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(r.id,r)}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:r.name,onChange:c}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:r.username,onChange:c}),l.a.createElement("button",null,"Update user"),l.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},E=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Username"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.username),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){e.editRow(t)},className:"button muted-button"},"Edit"),l.a.createElement("button",{onClick:function(){return e.deleteUser(t.id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"No users"))))},b=function(){var e=Object(a.useState)([{id:1,name:"Tania",username:"floppydiskette"},{id:2,name:"Craig",username:"siliconeidolon"},{id:3,name:"Ben",username:"benisphere"}]),t=Object(m.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)({id:null,name:"",username:""}),o=Object(m.a)(u,2),i=o[0],b=o[1],f=Object(a.useState)(!1),p=Object(m.a)(f,2),h=p[0],v=p[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"CRUD App with Hooks"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},h?l.a.createElement(a.Fragment,null,l.a.createElement("h2",null,"Edit user"),l.a.createElement(d,{editing:h,setEditing:v,currentUser:i,updateUser:function(e,t){v(!1),r(n.map((function(n){return n.id===e?t:n})))}})):l.a.createElement(a.Fragment,null,l.a.createElement("h2",null,"Add user"),l.a.createElement(s,{addUser:function(e){e.id=n.length+1,r([].concat(Object(c.a)(n),[e]))}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"View users"),l.a.createElement(E,{users:n,editRow:function(e){v(!0),b({id:e.id,name:e.name,username:e.username})},deleteUser:function(e){v(!1),r(n.filter((function(t){return t.id!==e})))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.15f8e744.chunk.js.map