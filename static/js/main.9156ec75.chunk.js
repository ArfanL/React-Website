(this.webpackJsonpmyportfoliosite=this.webpackJsonpmyportfoliosite||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),o=a.n(l),c=(a(47),a(48),a(2)),i=a(4),s=a(6),m=a(7),u=a(9),p=a(8),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{width:"100%",margin:"auto"}},n.a.createElement(c.Grid,{className:"landing-grid"},n.a.createElement(c.Cell,{col:12},n.a.createElement("img",{src:"https://lh3.googleusercontent.com/pw/ACtC-3eVyh1mZLQ2qOF-jCgZVDCPyUpzLKPakCbMe9MehPHtEh5DBJVs3iU6WqMxFxCJ7AIHr8nz_tD4jxSOvZw8ROqPqTO2FVOzpcMb2uSdaGIXQlwDxPIAwLSTbPrsqnJF69qHjDrTnHAQgwrpRE27YiywCg=w735-h979-no?authuser=0",alt:"avatar",className:"avatar-img"}),n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",null,"Welcome to my Page"),n.a.createElement("hr",null),n.a.createElement("p",null,"HTML/CSS | JavaScript | Node.js | Python | C# | Java"),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.linkedin.com/in/arfan-lokman",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),n.a.createElement("a",{href:"https://github.com/arfanl",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),a}(r.Component),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:2}),n.a.createElement(c.Cell,{className:"about-col",col:8},n.a.createElement("h1",null,"About Me"),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("p",null,"I am currently a Computer Science student that will be graduating December 2020 and I am aspiring to be a Software Engineer. At this current time, I have an interest in learning full stack and expanding my knowledge by learning Typescript, Express, React, Angular, and Node.js. In my free time, my hobbies consist of calisthenics, doing gymnastics, and participating in competitive programming. "))))}}]),a}(r.Component),E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Contact Page"))}}]),a}(r.Component),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={activeTab:0},r}return Object(m.a)(a,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?n.a.createElement(c.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://miro.medium.com/max/500/1*Qbm5_d5EYIbYa1-jN4JmSg.jpeg) center / cover"}}," C minus Compiler"),n.a.createElement(c.CardText,null,"This is my project wrote in python that makes a compiler for c minus."),n.a.createElement(c.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/ArfanL/c-compiler"},n.a.createElement(c.Button,{colored:!0},"GitHub"))),n.a.createElement(c.CardMenu,{style:{color:"#fff"}},n.a.createElement(c.IconButton,{name:"share"}))):1===this.state.activeTab?n.a.createElement(c.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://cdn.discordapp.com/attachments/710867865544163358/738208634734903406/-0pRdN01PmawfLWQyBD1oGcysMvDse7ONQ9ZmcZ64ax1g8e-3rBboTuqiGgm94VMqcuwpyxHdZCs8-NzbCYlFTfd7gTG_xte9ZXY.png) center / cover"}}," Call of Halo"),n.a.createElement(c.CardText,null,"This is my First Person Shooter project that was made in Unity."),n.a.createElement(c.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/ArfanL/Call-of-Halo"},n.a.createElement(c.Button,{colored:!0},"GitHub"))),n.a.createElement(c.CardMenu,{style:{color:"#fff"}},n.a.createElement(c.IconButton,{name:"share"}))):void 0}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"category-tabs"},n.a.createElement(c.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},n.a.createElement(c.Tab,null,"Compilers"),n.a.createElement(c.Tab,null,"Call of Halo")),n.a.createElement("section",{className:"projects-grid"},n.a.createElement(c.Grid,{className:"projects-grid"},n.a.createElement(c.Cell,{col:12},n.a.createElement("div",{className:"content"},this.toggleCategories())))))}}]),a}(r.Component),f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(c.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),n.a.createElement("p",null,this.props.schoolDescription)))}}]),a}(r.Component),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(c.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.jobName),n.a.createElement("p",null,this.props.jobDescription)))}}]),a}(r.Component),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:12},n.a.createElement("div",{style:{display:"static"}},this.props.skill," ",n.a.createElement(c.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress})," ")))}}]),a}(r.Component),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:4},n.a.createElement("h2",{style:{paddingTop:"1em"}},"Arfan Lokman"),n.a.createElement("h4",{style:{color:"grey"}},"Objective"),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),n.a.createElement("p",null,"To obtain a full-time position in the Computer Science field with preference of Software Engineering."),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),n.a.createElement("h5",null,"Address"),n.a.createElement("p",null,"10331 Marble Egret Dr, Jacksonville, FL 32257"),n.a.createElement("h5",null,"Phone"),n.a.createElement("p",null,"(904) 207-4633"),n.a.createElement("h5",null,"Email"),n.a.createElement("p",null,"arfanlok@gmail.com"),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),n.a.createElement(c.Cell,{className:"resume-right-col",col:8},n.a.createElement("h2",null,"Education"),n.a.createElement(f,{startYear:2017,endYear:2020,schoolName:"University of North Florida",schoolDescription:"\u2022\tBachelor of Science in Computing & Information Science \u2013 Computer Science"}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Experience"),n.a.createElement(g,{startYear:2018,endYear:"Current",jobName:"Technician Assistant, UNF ITS Help Desk",jobDescription:"\u2022\tAssisted a userbase of 17,000+ with software and hardware deployment and support for an enterprise system.\r \u2022\tProvided live support troubleshooting software problems with users of different types of devices and operating systems such as Linux, Macintosh, and Windows.\r\n\u2022\tEnsured users were assigned correct Active Directory roles to access proper system resources\r\n"}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Skills"),n.a.createElement(y,{skill:"Python",progress:100}),n.a.createElement(y,{skill:"Java",progress:80}),n.a.createElement(y,{skill:"C#",progress:70}),n.a.createElement(y,{skill:"Html/css",progress:70}),n.a.createElement(y,{skill:"Javascript",progress:70}),n.a.createElement(y,{skill:"Node.js",progress:50}),n.a.createElement(y,{skill:"Unity",progress:50}))))}}]),a}(r.Component),C=function(){return n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:h}),n.a.createElement(i.a,{path:"/aboutme",component:d}),n.a.createElement(i.a,{path:"/contact",component:E}),n.a.createElement(i.a,{path:"/projects",component:b}),n.a.createElement(i.a,{path:"/resume",component:v}))},j=a(14);var w=function(){return n.a.createElement("div",{className:"demo-big-content"},n.a.createElement(c.Layout,null,n.a.createElement(c.Header,{className:"header-color",title:n.a.createElement(j.b,{style:{textDecoration:"none",color:"white"},to:"/"},"Home"),scroll:!0},n.a.createElement(c.Navigation,null,n.a.createElement(j.b,{to:"/resume"},"Resume"),n.a.createElement(j.b,{to:"/aboutme"},"About Me"),n.a.createElement(j.b,{to:"/projects"},"Projects"))),n.a.createElement(c.Drawer,{title:n.a.createElement(j.b,{style:{textDecoration:"none",color:"black"},to:"/"},"Home")},n.a.createElement(c.Navigation,null,n.a.createElement(j.b,{to:"/resume"},"Resume"),n.a.createElement(j.b,{to:"/aboutme"},"About Me"),n.a.createElement(j.b,{to:"/projects"},"Projects"))),n.a.createElement(c.Content,null,n.a.createElement("div",{className:"page-content"}),n.a.createElement(C,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(99),a(100);o.a.render(n.a.createElement(j.a,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports=a(101)},47:function(e,t,a){},48:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.9156ec75.chunk.js.map