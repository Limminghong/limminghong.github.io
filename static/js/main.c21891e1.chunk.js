(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(49),a(50),a(1)),i=a(5),m=a(6),s=a(8),u=a(7),h=a(9),d=a(15),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutme-text"},r.a.createElement("h1",null,"About Me"),r.a.createElement("hr",null),r.a.createElement("p",null,"My Skillset"))}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"resume-information"},r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(o.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),r.a.createElement("p",null,this.props.schoolDescription))))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"resume-information"},r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(o.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.jobName),r.a.createElement("p",null,this.props.jobDescription))))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"resume-information"},r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:12},"Not going to follow tut")))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"resume-body"},r.a.createElement("h2",null,"Education"),r.a.createElement(p,{startYear:2017,endYear:"Present",schoolName:"National University of Singapore",schoolDescription:"Blah"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Experience"),r.a.createElement(b,{startYear:2019,endYear:2019,jobName:"Intern",jobDescription:"Blah"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Skills"),r.a.createElement(f,null))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={activeTab:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},this.cardProjectOne(),this.cardProjectTwo(),this.cardProjectThree(),this.cardProjectFour()):1===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},this.cardProjectOne()):2===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},this.cardProjectTwo()):3===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},this.cardProjectThree()):4===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},this.cardProjectFour()):void 0}},{key:"cardProjectOne",value:function(){return r.a.createElement(o.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(o.CardTitle,{style:{color:"#fff",height:"176px",background:"url(images/placeholder.png) center / cover"}},"Placeholder 1"),r.a.createElement(o.CardText,null,"Placeholder 1"),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub")))}},{key:"cardProjectTwo",value:function(){return r.a.createElement(o.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(o.CardTitle,{style:{color:"#fff",height:"176px",background:"url(images/placeholder.png) center / cover"}},"Placeholder 2"),r.a.createElement(o.CardText,null,"Placeholder 2"),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub")))}},{key:"cardProjectThree",value:function(){return r.a.createElement(o.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(o.CardTitle,{style:{color:"#fff",height:"176px",background:"url(images/placeholder.png) center / cover"}},"Placeholder 3"),r.a.createElement(o.CardText,null,"Placeholder 3"),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub")))}},{key:"cardProjectFour",value:function(){return r.a.createElement(o.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(o.CardTitle,{style:{color:"#fff",height:"176px",background:"url(images/placeholder.png) center / cover"}},"Placeholder 4"),r.a.createElement(o.CardText,null,"Placeholder 4"),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub")))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catagory-tabs"},r.a.createElement(o.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(o.Tab,null,"All"),r.a.createElement(o.Tab,null,"Robotics"),r.a.createElement(o.Tab,null,"Machine Learning"),r.a.createElement(o.Tab,null,"Web"),r.a.createElement(o.Tab,null,"Apps")),r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-grid"},r.a.createElement("h2",null,"Contact me :)"),r.a.createElement("hr",null),r.a.createElement("div",{className:"contact-list"},r.a.createElement(o.List,null,r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton",color:"white"}},r.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"(+65) 9232 8328")),r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton",color:"white"}},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"minghonglim@gmail.com")),r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton",color:"white"}},r.a.createElement("i",{className:"fa fa-skype","aria-hidden":"true"}),"minghonglim_1")))))}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(o.Grid,{className:"landing-body"},r.a.createElement(o.Cell,{col:12},r.a.createElement("img",{src:"images/avatar.png",alt:"avatar",className:"avatar-img"})),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Penultimate Student at National University of Singapore"),r.a.createElement("hr",null),r.a.createElement("p",null,"My Skillset"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/limminghong/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/Limminghong",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))),r.a.createElement(E,null),r.a.createElement(g,null),r.a.createElement(j,null),r.a.createElement(v,null)))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:y}),r.a.createElement(d.a,{path:"/aboutme",component:E}),r.a.createElement(d.a,{path:"/resume",component:g}),r.a.createElement(d.a,{path:"/projects",component:j}),r.a.createElement(d.a,{path:"/contact",component:v}))}}]),t}(n.Component),C=a(18);var N=function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(o.Layout,null,r.a.createElement(o.Header,{className:"header-colour",title:r.a.createElement(C.b,{style:{textDecoration:"none",color:"white"},to:"/"},"Ming Hong"),scroll:!0},r.a.createElement(o.Navigation,null,r.a.createElement("a",{href:"/aboutme"},"About Me"),r.a.createElement("a",{href:"/resume"},"Resume"),r.a.createElement("a",{href:"/projects"},"Projects"),r.a.createElement("a",{href:"/contact"},"Contact"))),r.a.createElement(o.Drawer,{title:r.a.createElement(C.b,{style:{textDecoration:"none",color:"black"},to:"/"},"Ming Hong")},r.a.createElement(o.Navigation,null,r.a.createElement("a",{href:"/aboutme"},"About Me"),r.a.createElement("a",{href:"/resume"},"Resume"),r.a.createElement("a",{href:"/projects"},"Projects"),r.a.createElement("a",{href:"/contact"},"Contact"))),r.a.createElement(o.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(101),a(102);c.a.render(r.a.createElement(C.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t,a){e.exports=a(103)},49:function(e,t,a){},50:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.c21891e1.chunk.js.map