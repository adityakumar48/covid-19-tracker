(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(30),r=a.n(n),i=(a(38),a(39),a(2)),l=a(18),j=a.n(l),d=a(31),o=a(12),b=a(13),h=a(15),m=a(14),v=a(32),x=a.n(v),O=a(10),u=a.n(O),N=a(0),p=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.summary,a=e.currentDate;return Object(N.jsx)("div",{className:"p-2",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{children:Object(N.jsx)("p",{className:"mt-1 CurrentDateText",children:new Date(a).toDateString()})}),Object(N.jsx)("div",{className:"col-md-4 mt-4 text-center my-auto",children:Object(N.jsx)("div",{className:"card newConfirmedCard card-block justify-content-center",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"newConfirmedh3",children:" New Confirmed Cases"}),Object(N.jsx)("h1",{className:"newConfirmednumber",children:Object(N.jsx)(u.a,{start:0,end:t.NewConfirmed,separator:","})})]})})}),Object(N.jsx)("div",{className:"col-md-4 mt-4 text-center my-auto",children:Object(N.jsx)("div",{className:"card NewDeathsCard card-block justify-content-center",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"NewDeathsh3",children:" New Death Cases"}),Object(N.jsx)("h1",{className:"NewDeathsnumber",children:Object(N.jsx)(u.a,{start:0,end:t.NewDeaths,separator:","})})]})})}),Object(N.jsx)("div",{className:"col-md-4 mt-4 text-center my-auto",children:Object(N.jsx)("div",{className:"card NewRecoveredCard card-block justify-content-center",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"NewRecoveredh3",children:" New Recovered Cases"}),Object(N.jsx)("h1",{className:"NewRecoverednumber",children:Object(N.jsx)(u.a,{start:0,end:t.NewRecovered,separator:","})})]})})}),Object(N.jsx)("div",{className:"col-md-4 mt-4  text-center my-auto",children:Object(N.jsx)("div",{className:"card TotalConfirmedCard card-block justify-content-center",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"TotalConfirmedh3",children:" Total Confirmed Cases"}),Object(N.jsx)("h1",{className:"TotalConfirmednumber",children:Object(N.jsx)(u.a,{start:0,end:t.TotalConfirmed,separator:","})})]})})}),Object(N.jsx)("div",{className:"col-md-4  mt-4 text-center my-auto",children:Object(N.jsx)("div",{className:"card TotalDeathsCard card-block justify-content-center",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"TotalDeathsh3",children:" Total Death Cases"}),Object(N.jsx)("h1",{className:"TotalDeathsnumber",children:Object(N.jsx)(u.a,{start:0,end:t.TotalDeaths,separator:","})})]})})}),Object(N.jsx)("div",{className:"col-md-4 mt-4  text-center my-auto",children:Object(N.jsx)("div",{className:"card recover__card card-block justify-content-center",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"total_recover_h3",children:" Total Recovered Cases"}),Object(N.jsx)("h1",{className:"total_recover_number",children:Object(N.jsx)(u.a,{start:0,end:t.TotalRecovered,separator:","})})]})})})]})})})}}]),a}(s.a.Component),f=a.p+"static/media/spinner.6c6d3203.gif",C=(a(64),function(){return Object(N.jsxs)("div",{className:"mainLoading col-md-12",children:[Object(N.jsx)("img",{src:f,alt:"loading..."})," ",Object(N.jsx)("span",{children:Object(N.jsx)("h1",{children:"Loading ...."})})]})}),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={countries:[],global:[],currentDate:null,loading:!0},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.covid19api.com/summary");case 2:t=e.sent,console.log(t),this.setState({countries:t.data.Countries}),this.setState({global:t.data.Global}),this.setState({currentDate:t.data.Date}),this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(N.jsx)(C,{}):Object(N.jsx)("div",{children:Object(N.jsx)(p,{summary:this.state.global,currentDate:this.state.currentDate})})}}]),a}(s.a.Component);var y=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(g,{})})};var w=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("h1",{children:"Hello Developer"})})};var k=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("h1",{children:"hello India Cases"})})};var D=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("h1",{children:"Hello Thii sis Country Cases"})})};var T=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("h1",{children:"hello Symptoms Checker"})})},_=a(8);var S=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"container-fluid",children:Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col-10 mx-auto",children:Object(N.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(N.jsx)(_.b,{className:"navbar-brand",to:"/",children:"Covid Tracker"}),Object(N.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(N.jsx)("span",{className:"navbar-toggler-icon"})}),Object(N.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(N.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0 ms-auto",children:[Object(N.jsx)("li",{className:"nav-item active",children:Object(N.jsx)(_.b,{activeClassName:"menu_active",exact:!0,className:"nav-link",to:"/",children:"Home"})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(_.b,{activeClassName:"menu_active",className:"nav-link",to:"/symptomschecker",children:"Symptoms Checker"})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(_.b,{activeClassName:"menu_active",className:"nav-link",to:"/countriescases",children:"Countries Cases"})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(_.b,{activeClassName:"menu_active",className:"nav-link",to:"/indiacases",children:"India Cases"})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(_.b,{activeClassName:"menu_active",className:"nav-link",to:"/developer",children:"Developer"})})]})})]})})})})})};var R=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(S,{}),Object(N.jsxs)(i.d,{children:[Object(N.jsx)(i.b,{exact:!0,path:"/",component:y}),Object(N.jsx)(i.b,{path:"/symptomschecker",component:T}),Object(N.jsx)(i.b,{path:"/countriescases",component:D}),Object(N.jsx)(i.b,{path:"/indiacases",component:k}),Object(N.jsx)(i.b,{path:"/developer",component:w}),Object(N.jsx)(i.a,{to:"/"})]})]})};r.a.render(Object(N.jsx)(_.a,{children:Object(N.jsx)(R,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.0b6378d3.chunk.js.map