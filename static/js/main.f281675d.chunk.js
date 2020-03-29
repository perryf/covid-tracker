(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{232:function(e,t,a){e.exports=a(420)},237:function(e,t,a){},419:function(e,t,a){},420:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),l=a.n(c),o=(a(237),a(27)),i=a(55),s=a(4),u=a(465),m=a(480),d=a(485),p=a(479),h=a(39),f=a.n(h),E=a(19),g=a(467),v=a(484),S=a(31),y=Object(u.a)({chartInputs:{marginBottom:6,display:"flex",flexDirection:"row"},chartInput:{margin:"0 6px",padding:2},chartOptions:{display:"flex",flexDirection:"row"},dataLabel:{fontSize:"0.8rem"},radioButton:{padding:4}}),b=function(e){e.selectStateInfo,e.selectStateCurrent;var t=e.selectStateHistory,a=(e.selectState,e.chartDisplay),n=e.chartDateRange,c=e.changeChartDisplay,l=e.changeChartDateRange,o=Object(E.a)(),i=y(),s=a||"positive",u=function(e){switch(e){case"positive":return"Total Tested Positive";case"death":return"Total Deaths";case"totalTestResults":return"Total Tested";case"hospitalized":return"Total Hospitalized";default:return""}}(s),m=t.filter((function(e){return function(e,t){switch(t){case"week":var a=f()().subtract(7,"days");return f()(e.dateChecked).isAfter(a);case"month":var n=f()().subtract(1,"months");return f()(e.dateChecked).isAfter(n);default:return!0}}(e,n)})).slice().reverse().map((function(e){return t=e.dateChecked?f()(e.dateChecked).format("MM/DD/YYYY"):"",a=e[s]||0,{time:t,amount:a};var t,a}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.chartInputs},r.a.createElement(g.a,null,r.a.createElement(v.a,{native:!0,value:a,onChange:c,className:i.chartInput,inputProps:{name:"display",id:"chartDisplayOptions"}},r.a.createElement("option",{value:"positive"},"Positive Cases"),r.a.createElement("option",{value:"death"},"Deaths"),r.a.createElement("option",{value:"totalTestResults"},"Total Tested"),r.a.createElement("option",{value:"hospitalized"},"Hospitalized"))),r.a.createElement(g.a,null,r.a.createElement(v.a,{native:!0,value:n,onChange:l,className:i.chartInput,inputProps:{name:"date",id:"chartDateOptions"}},r.a.createElement("option",{value:"week"},"Past Week"),r.a.createElement("option",{value:"month"},"Past Month"),r.a.createElement("option",{value:"total"},"Total")))),!1,r.a.createElement(S.e,{minHeight:290},r.a.createElement(S.b,{data:m,margin:{top:8,right:8,bottom:0,left:12}},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"main",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:o.palette.primary.main,stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:o.palette.primary.main,stopOpacity:0}))),r.a.createElement(S.g,{dataKey:"time",stroke:o.palette.text.secondary}),r.a.createElement(S.h,{stroke:o.palette.text.secondary},r.a.createElement(S.d,{angle:270,position:"left",style:{textAnchor:"middle",fill:o.palette.text.primary}},u)),r.a.createElement(S.c,{strokeDasharray:"3 3"}),r.a.createElement(S.f,null),r.a.createElement(S.a,{type:"linear",dataKey:"amount",stroke:o.palette.primary.main,fillOpacity:1,fill:"url(#main)"},!1))))};b.defaultProps={selectState:"",selectStateInfo:{},selectStateCurrent:{},selectStateHistory:[]};var O=b,j=a(482),w=a(470),C=a(423),k=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(C.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(w.a,{color:"inherit",href:"https://github.com/perryf/covid-tracker"},"COVID 19 Tracker Source Code")),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",align:"center"},"All data from ",r.a.createElement(w.a,{color:"inherit",href:"https://covidtracking.com/"},"The COVID Tracking Project")))},I=a(471),x=a(483),D=a(192),T=a.n(D),P=a(422),N=a(190),B=a(191),H=a.n(B),R=a(472),z=a(487),Y=a(469),M=a(473),A=Object(u.a)((function(e){return{drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),height:"100vh",overflowY:"scroll"},drawerPaperClose:Object(i.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),listItem:{cursor:"pointer","&:hover":{background:"#ddd"}},listItemSelected:{background:"#dde"},toolbarIcon:Object(N.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar)}})),W=function(e){var t=e.selectState,a=e.sideOpen,n=e.statesInfo,c=e.changeState,l=e.handleDrawerClose,o=A();return r.a.createElement(z.a,{variant:"permanent",classes:{paper:Object(s.a)(o.drawerPaper,!a&&o.drawerPaperClose)},open:a},r.a.createElement("div",{className:o.toolbarIcon},r.a.createElement(I.a,{onClick:l},r.a.createElement(H.a,null))),r.a.createElement(R.a,null),r.a.createElement(Y.a,null,r.a.createElement(M.a,{className:Object(s.a)(o.listItem,"us"===t&&o.listItemSelected),onClick:function(){return c("us")}},"USA"),n.map((function(e){var n=e.state===t,l=a?"".concat(e.name||""," ").concat(e.state?"(".concat(e.state,")"):""):e.state;return r.a.createElement(M.a,{key:e.state,className:Object(s.a)(o.listItem,n&&o.listItemSelected),onClick:function(){return c(e.state)}},l)}))))};W.defaultProps={selectState:"",statesInfo:[]};var F=W,G=a(481),V="https://covidtracking.com/api",J="".concat(V,"/states"),K="".concat(V,"/states/daily"),L="".concat(V,"/states/info"),U="".concat(V,"/us"),q="".concat(V,"/us/daily"),X=("".concat(V,"/counties"),"".concat(V,"/urls"),"".concat(V,"/screenshots"),"".concat(V,"/press"),a(474)),$=a(478),Q=a(477),Z=a(475),_=a(476),ee=function(e){e.selectStateInfo,e.selectStateCurrent;var t=e.selectStateHistory;e.selectState;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"History"),r.a.createElement(X.a,{size:"medium"},r.a.createElement(Z.a,null,r.a.createElement(_.a,null,r.a.createElement(Q.a,null,"Date"),r.a.createElement(Q.a,null,"Tested Positive"),r.a.createElement(Q.a,null,"Negative Tests"),r.a.createElement(Q.a,null,"Total Tested"),r.a.createElement(Q.a,null,"Percent Positive"),r.a.createElement(Q.a,null,"Deaths"),r.a.createElement(Q.a,null,"Hospitalized"))),r.a.createElement($.a,null,t.map((function(e){return r.a.createElement(_.a,{key:e.hash},r.a.createElement(Q.a,null,e.dateChecked?f()(e.dateChecked).format("MM/DD/YYYY"):""),r.a.createElement(Q.a,null,e.positive||""," (+",e.positiveIncrease||0,")"),r.a.createElement(Q.a,null,e.negative||""," (+",e.negativeIncrease||0,")"),r.a.createElement(Q.a,null,e.totalTestResults||""," (+",e.totalTestResultsIncrease||0,")"),r.a.createElement(Q.a,null,e.positive&&e.totalTestResults?"".concat(Math.round(e.positive/e.totalTestResults*100,2),"%"):""),r.a.createElement(Q.a,null,e.death||0," (+",e.death||0,")"),r.a.createElement(Q.a,null,e.hospitalized||0," (+",e.hospitalized||0,")"))})))))};ee.defaultProps={selectState:"",selectStateInfo:{},selectStateCurrent:{},selectStateHistory:[]};var te=ee,ae=function(e){return e?r.a.createElement(w.a,{color:"inherit",href:e},e):""},ne=Object(u.a)({linkStyle:{color:"#e33371"},notes:{margin:4,fontStyle:"italic"}}),re=function(e){var t=e.selectStateInfo,a=e.selectStateCurrent,n=e.selectState,c=ne(),l=function(e,t,a){return"us"===e?"USA":t.name?"".concat(t.name," (").concat(t.state,")"):"Select a State"}(n,t),o=ae(t.covid19Site),i=ae(t.covid19SiteSecondary);return r.a.createElement("div",null,r.a.createElement(C.a,{component:"h2",variant:"h6",color:"primary"},l),a.grade&&r.a.createElement(C.a,{component:"p",variant:"caption",color:"textSecondary"},"Data quality grade: ",a.grade),r.a.createElement("div",{className:c.linkStyle},o),r.a.createElement("div",{className:c.linkStyle},i),r.a.createElement("p",{className:c.notes},t.notes||""))};re.defaultProps={selectState:"",selectStateInfo:{},selectStateCurrent:{}};var ce=re,le=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},toolbar:{paddingRight:24},menuButton:Object(i.a)({marginRight:36},e.breakpoints.down("sm"),{display:"none"}),menuButtonHidden:{display:"none"},paper:{padding:e.spacing(2),display:"flex",flexDirection:"column"},chartPaper:{height:360},tablePaper:{overflow:"auto"},title:{flexGrow:1}}})),oe=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(o.a)(l,2),u=i[0],h=i[1],f=Object(n.useState)([]),E=Object(o.a)(f,2),g=E[0],v=E[1],S=Object(n.useState)([]),y=Object(o.a)(S,2),b=y[0],w=y[1],D=Object(n.useState)([]),N=Object(o.a)(D,2),B=N[0],H=N[1],R=Object(n.useState)("positive"),z=Object(o.a)(R,2),Y=z[0],M=z[1],A=Object(n.useState)("total"),W=Object(o.a)(A,2),V=W[0],X=W[1],$=Object(n.useState)("us"),Q=Object(o.a)($,2),Z=Q[0],_=Q[1],ee=r.a.useState(!1),ae=Object(o.a)(ee,2),ne=ae[0],re=ae[1];Object(n.useEffect)((function(){fetch(J).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.info(e)})),fetch(K).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return console.info(e)})),fetch(L).then((function(e){return e.json()})).then((function(e){return v(e.sort((function(e,t){return e.name<t.name?-1:t.name<e.name?1:0})))})).catch((function(e){return console.info(e)})),fetch(U).then((function(e){return e.json()})).then((function(e){return w(e)})).catch((function(e){return console.info(e)})),fetch(q).then((function(e){return e.json()})).then((function(e){return H(e)})).catch((function(e){return console.info(e)}))}),[]);var oe=le(),ie="us"===Z?b[0]:a.find((function(e){return e.state===Z})),se="us"===Z?B:u.filter((function(e){return e.state===Z})),ue=g.find((function(e){return e.state===Z}));return r.a.createElement("div",{className:oe.root},r.a.createElement(p.a,null),r.a.createElement(m.a,{position:"absolute",className:Object(s.a)(oe.appBar,ne&&oe.appBarShift)},r.a.createElement(G.a,{className:oe.toolbar},r.a.createElement(I.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){re(!0)},className:Object(s.a)(oe.menuButton,ne&&oe.menuButtonHidden)},r.a.createElement(T.a,null)),r.a.createElement(C.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:oe.title},"COVID 19 Tracker"))),r.a.createElement(F,{sideOpen:ne,statesInfo:g,selectState:Z,changeState:function(e){_(e)},handleDrawerClose:function(){re(!1)}}),r.a.createElement("main",{className:oe.content},r.a.createElement("div",{className:oe.appBarSpacer}),r.a.createElement(j.a,{maxWidth:"lg",className:oe.container},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(ce,{selectState:Z,selectStateInfo:ue,selectStateCurrent:ie})),r.a.createElement(x.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(P.a,{className:Object(s.a)(oe.paper,oe.chartPaper)},r.a.createElement(O,{selectStateCurrent:ie,selectStateHistory:se,selectStateInfo:ue,selectState:Z,chartDisplay:Y,chartDateRange:V,changeChartDisplay:function(e){var t=e.target.value;M(t)},changeChartDateRange:function(e){var t=e.target.value;X(t)}}))),r.a.createElement(x.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(P.a,{className:Object(s.a)(oe.paper,oe.tablePaper)},r.a.createElement(te,{selectStateCurrent:ie,selectStateHistory:se,selectStateInfo:ue,selectState:Z})))),r.a.createElement(d.a,{pt:4},r.a.createElement(k,null)))))};a(419);var ie=function(){return r.a.createElement("div",null,r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.f281675d.chunk.js.map