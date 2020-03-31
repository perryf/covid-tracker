(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{229:function(e,t,a){e.exports=a(416)},234:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),i=a.n(l),s=(a(234),a(20)),o="https://covidtracking.com/api",c="".concat(o,"/states"),u="".concat(o,"/states/daily"),m="".concat(o,"/states/info"),p="".concat(o,"/us"),d="".concat(o,"/us/daily"),h=("".concat(o,"/counties"),"".concat(o,"/urls"),"".concat(o,"/screenshots"),"".concat(o,"/press"),a(4)),f=a(460),v=a(477),g=a(473),E=a(474),y=a(459),S=a(417),b=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(S.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(y.a,{color:"inherit",href:"https://github.com/perryf/covid-tracker"},"US COVID 19 Tracker Source Code"),r.a.createElement("span",{style:{fontStyle:"italic"}}," \xa9 Perry Fustero 2020")),r.a.createElement(S.a,{variant:"body2",color:"textSecondary",align:"center"},"All data from ",r.a.createElement(y.a,{color:"inherit",href:"https://covidtracking.com/"},"The COVID Tracking Project")))},C=a(475),O=a(419),T=a(42),D=a.n(T),I=a(22),j=a(17),x=a(461),k=a(476),w=Object(f.a)({chartInputs:{marginBottom:6,display:"flex",flexDirection:"row"},chartInput:{margin:"0 6px",padding:2}}),N=function(e){var t=e.chartDisplay,a=e.chartDateRange,n=e.changeChartDisplay,l=e.changeChartDateRange,i=w();return r.a.createElement("div",{className:i.chartInputs},r.a.createElement(x.a,null,r.a.createElement(k.a,{native:!0,value:t,onChange:n,className:i.chartInput,inputProps:{name:"display",id:"chartDisplayOptions"}},r.a.createElement("option",{value:"positive"},"Total Positive"),r.a.createElement("option",{value:"death"},"Total Deaths"),r.a.createElement("option",{value:"totalTestResults"},"Total Tested"),r.a.createElement("option",{value:"hospitalized"},"Total Hospitalized"),r.a.createElement("option",{value:"positiveIncrease"},"Daily Positive Cases"),r.a.createElement("option",{value:"deathIncrease"},"Daily Deaths"),r.a.createElement("option",{value:"totalTestResultsIncrease"},"Daily Test Results"),r.a.createElement("option",{value:"hospitalizedIncrease"},"Daily Hospitalized"))),r.a.createElement(x.a,null,r.a.createElement(k.a,{native:!0,value:a,onChange:l,className:i.chartInput,inputProps:{name:"date",id:"chartDateOptions"}},r.a.createElement("option",{value:"week"},"Week"),r.a.createElement("option",{value:"month"},"Month"),r.a.createElement("option",{value:"total"},"All Time"))))};N.defaultProps={chartDisplay:"",chartDateRange:"",selectStateCurrent:{},selectStateHistory:[]};var P=N,R=function(e){var t=e.selectStateHistory,a=e.chartDisplay,l=e.chartDateRange,i=Object(I.a)(),s=a||"positive",o=!a.includes("Increase"),c=t.filter((function(e){return function(e,t){switch(t){case"week":var a=D()().subtract(7,"days");return D()(e.dateChecked).isAfter(a);case"month":var n=D()().subtract(1,"months");return D()(e.dateChecked).isAfter(n);default:return!0}}(e,l)})).slice().reverse().map((function(e){return t=e.dateChecked?D()(e.dateChecked).format("M/DD/YY"):"",a=e[s]||0,{time:t,amount:a};var t,a})),u=r.a.createElement(j.l,{dataKey:"time",stroke:i.palette.text.secondary}),m=r.a.createElement(j.m,{stroke:i.palette.text.secondary,tickFormatter:function(e){return isNaN(e)?"":e.toLocaleString()}},r.a.createElement(j.g,{angle:270,position:"left",style:{textAnchor:"middle",fill:i.palette.text.primary}},function(e){switch(e){case"positive":return"Total Tested Positive";case"death":return"Total Deaths";case"totalTestResults":return"Total Tested";case"hospitalized":return"Total Hospitalized";case"positiveIncrease":return"Daily Positive Cases";case"deathIncrease":return"Daily Deaths";case"totalTestResultsIncrease":return"Daily Test Results";case"hospitalizedIncrease":return"Daily Hospitalized";default:return""}}(s))),p=r.a.createElement(j.e,{strokeDasharray:"3 3"}),d=r.a.createElement(j.k,{formatter:function(e){return isNaN(e)?"":e.toLocaleString()}}),h=r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"main",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:i.palette.primary.main,stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:i.palette.primary.main,stopOpacity:0})));return r.a.createElement(n.Fragment,null,r.a.createElement(P,e),r.a.createElement(j.j,{minHeight:290},o?r.a.createElement(j.b,{data:c,margin:{top:8,right:8,bottom:0,left:12}},h,u,m,p,d,r.a.createElement(j.a,{type:"linear",dataKey:"amount",stroke:i.palette.primary.main,fillOpacity:1,fill:"url(#main)"})):r.a.createElement(j.d,{data:c,margin:{top:8,right:8,bottom:0,left:12}},u,m,p,d,r.a.createElement(j.c,{dataKey:"amount",fill:i.palette.primary.main}))))};R.defaultProps={chartDisplay:"",chartDateRange:"",selectStateHistory:[]};var H=R,z=a(96),L=a(463),F=a(464),B=Object(f.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},stateInput:{margin:"0 18px",padding:"2px 12px",background:"white"},toolbar:{paddingRight:24},menuButton:Object(z.a)({marginRight:36},e.breakpoints.down("xs"),{display:"none"}),menuButtonHidden:{display:"none"},title:{flexGrow:1}}})),A=function(e){var t=e.sideOpen,a=(e.handleDrawerOpen,e.selectState),n=e.statesInfo,l=e.changeState,i=B();return r.a.createElement(L.a,{position:"absolute",className:Object(h.a)(i.appBar,t&&i.appBarShift)},r.a.createElement(F.a,{className:i.toolbar,variant:"dense"},!1,r.a.createElement(S.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:i.title},"US COVID 19 Tracker"),r.a.createElement(x.a,null,r.a.createElement(k.a,{native:!0,onChange:function(e){var t=e.target.value;l(t)},className:i.stateInput,value:a,inputProps:{name:"stateDisplay",id:"stateOptions"}},r.a.createElement("option",{value:"us"},"USA"),n.map((function(e){return r.a.createElement("option",{key:e.state,value:e.state},e.state)}))))))};A.defaultProps={selectState:"",statesInfo:[]};var M=A,W=function(){return Math.floor(120*Math.random())+80},Y=function(e){var t=e.statesCurrent,a=Object(I.a)(),l=t.map((function(e){return t=e.state,a=e.positive,{name:t,value:a};var t,a}));return r.a.createElement(n.Fragment,null,r.a.createElement(S.a,{component:"h4",variant:"subtitle1",color:"primary"},"Positive Cases by state"),r.a.createElement(j.j,{minHeight:290},r.a.createElement(j.i,{width:300,height:300},r.a.createElement("linearGradient",{id:"main",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:a.palette.primary.main,stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:a.palette.primary.main,stopOpacity:0})),r.a.createElement(j.k,null),r.a.createElement(j.h,{data:l,dataKey:"value",nameKey:"name",fill:"url(#main)"},l.map((function(e,t){var a=W(),n=W(),l=W(),i="rgb(".concat(a,", ").concat(n,", ").concat(l,")");return r.a.createElement(j.f,{key:"cell-".concat(t),fill:i})}))))))};Y.defaultProps={statesCurrent:[]};var K=a(197),U=a.n(K),G=a(466),V=a(479),J=a(465),q=a(462),X=a(467),$=Object(f.a)((function(e){return{drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),height:"100vh",overflowY:"scroll"},drawerPaperClose:Object(z.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("xs"),{width:e.spacing(9)}),listItem:{cursor:"pointer","&:hover":{background:"#ddd"}},listItemSelected:{background:"#dde"},toolbarIcon:{display:"flex",alignItems:"center",justifyContent:"flex-end",minHeight:48}}})),Q=function(e){var t=e.selectState,a=e.sideOpen,n=e.statesInfo,l=e.changeState,i=e.handleDrawerClose,s=$();return r.a.createElement(V.a,{variant:"permanent",classes:{paper:Object(h.a)(s.drawerPaper,!a&&s.drawerPaperClose)},open:a},r.a.createElement("div",{className:s.toolbarIcon},r.a.createElement(J.a,{onClick:i},r.a.createElement(U.a,null))),r.a.createElement(G.a,null),r.a.createElement(q.a,null,r.a.createElement(X.a,{className:Object(h.a)(s.listItem,"us"===t&&s.listItemSelected),onClick:function(){return l("us")}},"USA"),n.map((function(e){var n=e.state===t,i=a?"".concat(e.name||""," ").concat(e.state?"(".concat(e.state,")"):""):e.state;return r.a.createElement(X.a,{key:e.state,className:Object(h.a)(s.listItem,n&&s.listItemSelected),onClick:function(){return l(e.state)}},i)}))))};Q.defaultProps={selectState:"",statesInfo:[]};var Z=function(e){return e?r.a.createElement(y.a,{color:"inherit",href:e},e):""},_=Object(f.a)({stateStats:{fontSize:14},linkStyle:{color:"#e33371"},notes:{margin:4,fontStyle:"italic"}}),ee=function(e){var t=e.selectStateInfo,a=e.selectStateCurrent,n=e.selectState,l=_(),i=function(e,t){return"us"===e?"USA":t.name?"".concat(t.name," (").concat(t.state,")"):"Select a State"}(n,t),s=Z(t.covid19Site),o=Z(t.covid19SiteSecondary),c=function(e){if(!e)return"";var t="".concat("https://twitter.com","/").concat(e.replace("@",""));return e?r.a.createElement(y.a,{color:"inherit",href:t},t):""}(t.twitter);return r.a.createElement("div",null,r.a.createElement(S.a,{component:"h2",variant:"h6",color:"primary"},i),a.grade&&r.a.createElement(S.a,{component:"p",variant:"caption",color:"textSecondary"},"Data quality grade: ",a.grade),r.a.createElement(S.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total Positive Cases:"," ",a.positive?a.positive.toLocaleString():0),r.a.createElement(S.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total Negative Cases:"," ",a.negative?a.negative.toLocaleString():0),r.a.createElement(S.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total People Tested:"," ",a.totalTestResults?a.totalTestResults.toLocaleString():0),r.a.createElement(S.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total Deaths:"," ",a.death?a.death.toLocaleString():0),r.a.createElement(S.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total Hospitalized:"," ",a.hospitalized?a.hospitalized.toLocaleString():0),r.a.createElement("div",{className:l.linkStyle},s),r.a.createElement("div",{className:l.linkStyle},o),r.a.createElement("div",{className:l.linkStyle},c),r.a.createElement("p",{className:l.notes},t.notes||""))};ee.defaultProps={selectState:"",selectStateInfo:{},selectStateCurrent:{}};var te=ee,ae=a(468),ne=a(472),re=a(471),le=a(469),ie=a(470),se=Object(f.a)({chartInput:{margin:"0 6px",padding:2,maxWidth:250}}),oe=function(e){var t=e.tableDisplay,a=e.changeTableDisplay,n=se();return r.a.createElement(x.a,null,r.a.createElement(k.a,{native:!0,value:t,onChange:a,className:n.chartInput,inputProps:{name:"tableDisplay",id:"tableDisplayOptions"}},r.a.createElement("option",{value:"history"},"History"),r.a.createElement("option",{value:"allStates"},"All States")))};oe.defaultProps={tableDisplay:""};var ce=oe,ue=Object(f.a)((function(e){return{tableHeader:{display:"flex",alignItems:"center",minWidth:360},tableSubtext:{marginLeft:18},sortingColumnHeader:{cursor:"pointer",color:e.palette.primary.main},sortSelected:{color:e.palette.secondary.dark}}})),me=function(e){var t=e.selectStateHistory,a=e.statesCurrent,l=e.usCurrent,i=e.tableDisplay,o=e.changeTableDisplay,c=Object(n.useState)("positive"),u=Object(s.a)(c,2),m=u[0],p=u[1],d=function(e){p(e)},f=ue(),v=a.slice().sort((function(e,t){if("state"===m){if(e[m]<t[m])return-1;if(t[m]<e[m])return 1}else{if(e[m]<t[m])return 1;if(t[m]<e[m])return-1}return 0})),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e[0]&&e[0].positive?{positive:e[0].positive,negative:e[0].negative,hospitalized:e[0].hospitalized,death:e[0].death,totalTestResults:e[0].totalTestResults}:{positive:0,negative:0,hospitalized:0,death:0,totalTestResults:0}}(l),E="history"===i?r.a.createElement(ae.a,{size:"medium"},r.a.createElement(le.a,null,r.a.createElement(ie.a,null,r.a.createElement(re.a,null,"Date"),r.a.createElement(re.a,null,"Tested Positive"),r.a.createElement(re.a,null,"Negative Tests"),r.a.createElement(re.a,null,"Total Tested"),r.a.createElement(re.a,null,"Percent Positive"),r.a.createElement(re.a,null,"Deaths"),r.a.createElement(re.a,null,"Hospitalized"))),r.a.createElement(ne.a,null,t.map((function(e){return r.a.createElement(ie.a,{key:e.hash},r.a.createElement(re.a,null,e.dateChecked?D()(e.dateChecked).format("MM/DD/YYYY"):""),r.a.createElement(re.a,null,e.positive?e.positive.toLocaleString():0," (+",e.positiveIncrease?e.positiveIncrease.toLocaleString():0,")"),r.a.createElement(re.a,null,e.negative?e.negative.toLocaleString():0," (+",e.negativeIncrease?e.negativeIncrease.toLocaleString():0,")"),r.a.createElement(re.a,null,e.totalTestResults?e.totalTestResults.toLocaleString():0," ","(+",e.totalTestResultsIncrease?e.totalTestResultsIncrease.toLocaleString():0,")"),r.a.createElement(re.a,null,e.positive&&e.totalTestResults?"".concat((e.positive/e.totalTestResults*100).toFixed(2),"%"):""),r.a.createElement(re.a,null,e.death?e.death.toLocaleString():0," (+",e.deathIncrease?e.deathIncrease.toLocaleString():0,")"),r.a.createElement(re.a,null,e.hospitalized?e.hospitalized.toLocaleString():0," (+",e.hospitalizedIncrease?e.hospitalizedIncrease.toLocaleString():0,")"))})))):r.a.createElement(ae.a,{size:"medium"},r.a.createElement(le.a,null,r.a.createElement(ie.a,null,r.a.createElement(re.a,null,r.a.createElement("span",{className:Object(h.a)(f.sortingColumnHeader,"state"===m&&f.sortSelected),onClick:function(){return d("state")}},"State")),r.a.createElement(re.a,null,r.a.createElement("span",{className:Object(h.a)(f.sortingColumnHeader,"positive"===m&&f.sortSelected),onClick:function(){return d("positive")}},"Tested Positive")),r.a.createElement(re.a,null,r.a.createElement("span",{className:Object(h.a)(f.sortingColumnHeader,"negative"===m&&f.sortSelected),onClick:function(){return d("negative")}},"Tested Negative")),r.a.createElement(re.a,null,r.a.createElement("span",{className:Object(h.a)(f.sortingColumnHeader,"totalTestResults"===m&&f.sortSelected),onClick:function(){return d("totalTestResults")}},"Total Tested")),r.a.createElement(re.a,null,"Percent Positive"),r.a.createElement(re.a,null,r.a.createElement("span",{className:Object(h.a)(f.sortingColumnHeader,"death"===m&&f.sortSelected),onClick:function(){return d("death")}},"Deaths")),r.a.createElement(re.a,null,r.a.createElement("span",{className:Object(h.a)(f.sortingColumnHeader,"hospitalized"===m&&f.sortSelected),onClick:function(){return d("hospitalized")}},"Hospitalized")))),r.a.createElement(ne.a,null,v.map((function(e){return r.a.createElement(ie.a,{key:e.hash},r.a.createElement(re.a,null,e.state),r.a.createElement(re.a,null,e.positive?e.positive.toLocaleString():""," (",e.positive&&g.positive?(e.positive/g.positive*100).toFixed(2):0,"%)"),r.a.createElement(re.a,null,e.negative?e.negative.toLocaleString():""," (",e.negative&&g.negative?(e.negative/g.negative*100).toFixed(2):0,"%)"),r.a.createElement(re.a,null,e.totalTestResults?e.totalTestResults.toLocaleString():""," ","(",e.totalTestResults&&g.totalTestResults?(e.totalTestResults/g.totalTestResults*100).toFixed(2):0,"%)"),r.a.createElement(re.a,null,e.positive&&e.totalTestResults?"".concat((e.positive/e.totalTestResults*100).toFixed(2),"%"):""),r.a.createElement(re.a,null,e.death?e.death.toLocaleString():0," (",e.death&&g.death?(e.death/g.death*100).toFixed(2):0,"%)"),r.a.createElement(re.a,null,e.hospitalized?e.hospitalized.toLocaleString():0," (",e.hospitalized&&g.hospitalized?(e.hospitalized/g.hospitalized*100).toFixed(2):0,"%)"))}))));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:f.tableHeader},r.a.createElement(ce,{tableDisplay:i,changeTableDisplay:o}),r.a.createElement(S.a,{className:f.tableSubtext,component:"p",variant:"caption",color:"textSecondary"},"history"===i?"(number of new daily increases)":"(percentage of country)")),E)};me.defaultProps={selectStateHistory:[],statesCurrent:[],tableDisplay:"history"};var pe=me,de=Object(f.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},paper:{padding:e.spacing(2),display:"flex",flexDirection:"column"},chartPaper:{height:360},tablePaper:{overflow:"auto"}}})),he=function(e){var t=e.statesCurrent,a=e.statesHistoric,l=e.statesInfo,i=e.usCurrent,o=e.usHistoric,c=Object(n.useState)("us"),u=Object(s.a)(c,2),m=u[0],p=u[1],d=Object(n.useState)("positive"),f=Object(s.a)(d,2),y=f[0],S=f[1],T=Object(n.useState)("total"),D=Object(s.a)(T,2),I=D[0],j=D[1],x=Object(n.useState)("history"),k=Object(s.a)(x,2),w=k[0],N=k[1],P=r.a.useState(!1),R=Object(s.a)(P,2),z=R[0],L=R[1],F=de(),B="us"===m?i[0]:t.find((function(e){return e.state===m})),A="us"===m?o:a.filter((function(e){return e.state===m})),W=l.find((function(e){return e.state===m}));return r.a.createElement("div",{className:F.root},r.a.createElement(g.a,null),r.a.createElement(M,{sideOpen:z,handleDrawerOpen:function(){L(!0)},statesInfo:l,selectState:m,changeState:function(e){p(e)}}),!1,r.a.createElement("main",{className:F.content},r.a.createElement("div",{className:F.appBarSpacer}),r.a.createElement(E.a,{maxWidth:"lg",className:F.container},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(te,{selectState:m,selectStateInfo:W,selectStateCurrent:B})),!1,r.a.createElement(C.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(O.a,{className:Object(h.a)(F.paper,F.chartPaper)},r.a.createElement(H,{selectStateHistory:A,chartDisplay:y,chartDateRange:I,changeChartDisplay:function(e){var t=e.target.value;S(t)},changeChartDateRange:function(e){var t=e.target.value;j(t)}}))),r.a.createElement(C.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(O.a,{className:Object(h.a)(F.paper,F.tablePaper)},r.a.createElement(pe,{selectStateHistory:A,statesCurrent:t,tableDisplay:w,usCurrent:i,changeTableDisplay:function(e){var t=e.target.value;N(t)}})))),r.a.createElement(v.a,{pt:4},r.a.createElement(b,null)))))};he.defaultProps={statesCurrent:[],statesHistoric:[],statesInfo:[],usCurrent:[],usHistoric:[]};var fe=he,ve=(a(415),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),h=o[0],f=o[1],v=Object(n.useState)([]),g=Object(s.a)(v,2),E=g[0],y=g[1],S=Object(n.useState)([]),b=Object(s.a)(S,2),C=b[0],O=b[1],T=Object(n.useState)([]),D=Object(s.a)(T,2),I=D[0],j=D[1];return Object(n.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.info(e)})),fetch(u).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return console.info(e)})),fetch(m).then((function(e){return e.json()})).then((function(e){return y(e.sort((function(e,t){return e.state<t.state?-1:t.state<e.state?1:0})))})).catch((function(e){return console.info(e)})),fetch(p).then((function(e){return e.json()})).then((function(e){return O(e)})).catch((function(e){return console.info(e)})),fetch(d).then((function(e){return e.json()})).then((function(e){return j(e)})).catch((function(e){return console.info(e)}))}),[]),r.a.createElement(fe,{statesCurrent:a,statesHistoric:h,statesInfo:E,usCurrent:C,usHistoric:I})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[229,1,2]]]);
//# sourceMappingURL=main.0410117c.chunk.js.map