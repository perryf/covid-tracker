(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{206:function(e,t,a){e.exports=a(391)},390:function(e,t,a){},391:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),o=a.n(l),s=a(112),i=a(19),c="https://covidtracking.com/api",u="".concat(c,"/states"),m="".concat(c,"/states/daily"),p="".concat(c,"/states/info"),d="".concat(c,"/us"),h="".concat(c,"/us/daily"),v=("".concat(c,"/counties"),"".concat(c,"/urls"),"".concat(c,"/screenshots"),"".concat(c,"/press"),a(5)),f=a(427),E=a(442),g=a(438),y=a(439),S=a(440),b=a(393),T=a(429),C=a(445),D=a(431),O=a(441),j=a(432),x=Object(f.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},stateInput:{margin:"0 18px",padding:"2px 12px",background:"white"},toolbar:{paddingRight:24},title:{flexGrow:1}}})),R=function(e){var t=e.selectState,a=e.statesInfo,n=e.changeState,l=x();return r.a.createElement(T.a,{position:"absolute",className:Object(v.a)(l.appBar)},r.a.createElement(D.a,{className:l.toolbar,variant:"dense"},r.a.createElement(j.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:l.title},"US COVID 19 Tracker"),r.a.createElement(C.a,null,r.a.createElement(O.a,{native:!0,onChange:function(e){var t=e.target.value;n(t)},className:l.stateInput,value:t,inputProps:{name:"stateDisplay",id:"stateOptions"}},r.a.createElement("option",{value:"us"},"USA"),a.map((function(e){return r.a.createElement("option",{key:e.state,value:e.state},e.state)}))))))};R.defaultProps={selectState:"",statesInfo:[]};var k=R,I=a(443),N=function(e){return e?r.a.createElement(I.a,{color:"inherit",href:e},e):""},P=Object(f.a)({stateStats:{fontSize:14},linkStyle:{color:"#e33371"},notes:{margin:4,fontStyle:"italic"}}),H=function(e){var t=e.selectStateInfo,a=e.selectStateCurrent,n=e.selectState,l=P(),o=function(e,t){return"us"===e?"USA":t.name?"".concat(t.name," (").concat(t.state,")"):"Select a State"}(n,t),s=N(t.covid19Site),i=N(t.covid19SiteSecondary),c=function(e){if(!e)return"";var t="".concat("https://twitter.com","/").concat(e.replace("@",""));return e?r.a.createElement(I.a,{color:"inherit",href:t},t):""}(t.twitter);return r.a.createElement("div",null,r.a.createElement(j.a,{component:"h2",variant:"h6",color:"primary"},o),a.grade&&r.a.createElement(j.a,{component:"p",variant:"caption",color:"textSecondary"},"Data quality grade: ",a.grade),r.a.createElement(j.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total Positive Cases:"," ",a.positive?a.positive.toLocaleString():0),r.a.createElement(j.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total Negative Cases:"," ",a.negative?a.negative.toLocaleString():0),r.a.createElement(j.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total People Tested:"," ",a.totalTestResults?a.totalTestResults.toLocaleString():0),r.a.createElement(j.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total Deaths:"," ",a.death?a.death.toLocaleString():0),r.a.createElement(j.a,{component:"p",variant:"body1",color:"textPrimary",className:l.stateStats},"Total Hospitalized:"," ",a.hospitalized?a.hospitalized.toLocaleString():0),r.a.createElement("div",{className:l.linkStyle},s),r.a.createElement("div",{className:l.linkStyle},i),r.a.createElement("div",{className:l.linkStyle},c),r.a.createElement("p",{className:l.notes},t.notes||""))};H.defaultProps={selectState:"",selectStateInfo:{},selectStateCurrent:{}};var z=H,w=a(35),L=a.n(w),F=a(49),A=a(16),B=Object(f.a)({chartInputs:{marginBottom:6,display:"flex",flexDirection:"row"},chartInput:{margin:"0 6px",padding:2}}),M=function(e){var t=e.chartDisplay,a=e.chartDateRange,n=e.changeChartDisplay,l=e.changeChartDateRange,o=B();return r.a.createElement("div",{className:o.chartInputs},r.a.createElement(C.a,null,r.a.createElement(O.a,{native:!0,value:t,onChange:n,className:o.chartInput,inputProps:{name:"display",id:"chartDisplayOptions"}},r.a.createElement("option",{value:"positive"},"Total Positive"),r.a.createElement("option",{value:"death"},"Total Deaths"),r.a.createElement("option",{value:"totalTestResults"},"Total Tested"),r.a.createElement("option",{value:"hospitalized"},"Total Hospitalized"),r.a.createElement("option",{value:"positiveIncrease"},"Daily Positive Cases"),r.a.createElement("option",{value:"deathIncrease"},"Daily Deaths"),r.a.createElement("option",{value:"totalTestResultsIncrease"},"Daily Test Results"),r.a.createElement("option",{value:"hospitalizedIncrease"},"Daily Hospitalized"))),r.a.createElement(C.a,null,r.a.createElement(O.a,{native:!0,value:a,onChange:l,className:o.chartInput,inputProps:{name:"date",id:"chartDateOptions"}},r.a.createElement("option",{value:"week"},"Week"),r.a.createElement("option",{value:"month"},"Month"),r.a.createElement("option",{value:"total"},"All Time"))))};M.defaultProps={chartDisplay:"",chartDateRange:"",selectStateCurrent:{},selectStateHistory:[]};var W=M,Y=function(e){var t=e.selectStateHistory,a=e.chartDisplay,l=e.chartDateRange,o=Object(F.a)(),s=a||"positive",i=!a.includes("Increase"),c=t.filter((function(e){return function(e,t){switch(t){case"week":var a=L()().subtract(7,"days");return L()(e.dateChecked).isAfter(a);case"month":var n=L()().subtract(1,"months");return L()(e.dateChecked).isAfter(n);default:return!0}}(e,l)})).slice().reverse().map((function(e){return t=e.dateChecked?L()(e.dateChecked).format("M/DD/YY"):"",a=e[s]||0,{time:t,amount:a};var t,a})),u=r.a.createElement(A.l,{dataKey:"time",stroke:o.palette.text.secondary}),m=r.a.createElement(A.m,{stroke:o.palette.text.secondary,tickFormatter:function(e){return isNaN(e)?"":e.toLocaleString()}},r.a.createElement(A.g,{angle:270,position:"left",offset:20,style:{textAnchor:"middle",fill:o.palette.text.primary}},function(e){switch(e){case"positive":return"Total Tested Positive";case"death":return"Total Deaths";case"totalTestResults":return"Total Tested";case"hospitalized":return"Total Hospitalized";case"positiveIncrease":return"Daily Positive Cases";case"deathIncrease":return"Daily Deaths";case"totalTestResultsIncrease":return"Daily Test Results";case"hospitalizedIncrease":return"Daily Hospitalized";default:return""}}(s))),p=r.a.createElement(A.e,{strokeDasharray:"3 3"}),d=r.a.createElement(A.k,{formatter:function(e){return isNaN(e)?"":e.toLocaleString()}}),h=r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"main",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:o.palette.primary.main,stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:o.palette.primary.main,stopOpacity:0})));return r.a.createElement(n.Fragment,null,r.a.createElement(W,e),r.a.createElement(A.j,{minHeight:290},i?r.a.createElement(A.b,{data:c,margin:{top:8,right:8,bottom:0,left:30}},h,u,m,p,d,r.a.createElement(A.a,{type:"linear",dataKey:"amount",stroke:o.palette.primary.main,fillOpacity:1,fill:"url(#main)"})):r.a.createElement(A.d,{data:c,margin:{top:8,right:8,bottom:0,left:30}},u,m,p,d,r.a.createElement(A.c,{dataKey:"amount",fill:o.palette.primary.main}))))};Y.defaultProps={chartDisplay:"",chartDateRange:"",selectStateHistory:[]};var K=Y,U=function(){return Math.floor(120*Math.random())+80},G=function(e){var t=e.statesCurrent,a=Object(F.a)(),l=t.map((function(e){return t=e.state,a=e.positive,{name:t,value:a};var t,a}));return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{component:"h4",variant:"subtitle1",color:"primary"},"Positive Cases by state"),r.a.createElement(A.j,{minHeight:290},r.a.createElement(A.i,{width:300,height:300},r.a.createElement("linearGradient",{id:"main",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:a.palette.primary.main,stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:a.palette.primary.main,stopOpacity:0})),r.a.createElement(A.k,null),r.a.createElement(A.h,{data:l,dataKey:"value",nameKey:"name",fill:"url(#main)"},l.map((function(e,t){var a=U(),n=U(),l=U(),o="rgb(".concat(a,", ").concat(n,", ").concat(l,")");return r.a.createElement(A.f,{key:"cell-".concat(t),fill:o})}))))))};G.defaultProps={statesCurrent:[]};var V=a(433),J=a(437),q=a(436),X=a(434),$=a(435),Q=Object(f.a)({chartInput:{margin:"0 6px",padding:2,maxWidth:250}}),Z=function(e){var t=e.tableDisplay,a=e.changeTableDisplay,n=e.selectState,l=Q();return r.a.createElement(C.a,null,r.a.createElement(O.a,{native:!0,value:t,onChange:a,className:l.chartInput,inputProps:{name:"tableDisplay",id:"tableDisplayOptions"}},r.a.createElement("option",{value:"history"},n?n.toUpperCase():""," History"),r.a.createElement("option",{value:"allStates"},"All States")))};Z.defaultProps={tableDisplay:"",selectState:""};var _=Z,ee=Object(f.a)((function(e){return{tableHeader:{display:"flex",alignItems:"center",minWidth:360},tableSubtext:{marginLeft:18},sortingColumnHeader:{cursor:"pointer",color:e.palette.primary.main},sortSelected:{color:e.palette.secondary.dark}}})),te=function(e){var t=e.selectStateHistory,a=e.statesCurrent,l=e.selectState,o=e.usCurrent,s=e.tableDisplay,c=e.changeTableDisplay,u=Object(n.useState)("positive"),m=Object(i.a)(u,2),p=m[0],d=m[1],h=function(e){return d(e)},f=ee(),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e[0]&&e[0].positive?{positive:e[0].positive,negative:e[0].negative,hospitalized:e[0].hospitalized,death:e[0].death,totalTestResults:e[0].totalTestResults}:{positive:0,negative:0,hospitalized:0,death:0,totalTestResults:0}}(o),g=a.slice().sort(function(e){return function(t,a){if("percentPositive"===e){var n=t.positive/t.totalTestResults,r=a.positive/a.totalTestResults;if(n<r)return 1;if(r<n)return-1}else if("state"===e){if(t[e]<a[e])return-1;if(a[e]<t[e])return 1}else{if(t[e]<a[e])return 1;if(a[e]<t[e])return-1}return 0}}(p));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:f.tableHeader},r.a.createElement(_,{tableDisplay:s,selectState:l,changeTableDisplay:c}),r.a.createElement(j.a,{className:f.tableSubtext,component:"p",variant:"caption",color:"textSecondary"},"history"===s?"* number in (parenthesis) = number of new daily increases":"* number in (parenthesis) = percentage of country")),"history"===s?r.a.createElement(V.a,null,r.a.createElement(X.a,null,r.a.createElement($.a,null,r.a.createElement(q.a,null,"Date"),r.a.createElement(q.a,null,"Tested Positive"),r.a.createElement(q.a,null,"Negative Tests"),r.a.createElement(q.a,null,"Total Tested"),r.a.createElement(q.a,null,"Positives / All Tests"),r.a.createElement(q.a,null,"Deaths"),r.a.createElement(q.a,null,"Death Rate"),r.a.createElement(q.a,null,"Hospitalized"))),r.a.createElement(J.a,null,t.map((function(e){return r.a.createElement($.a,{key:e.hash},r.a.createElement(q.a,null,e.dateChecked?L()(e.dateChecked).format("MM/DD/YYYY"):""),r.a.createElement(q.a,null,e.positive?e.positive.toLocaleString():0," (+",e.positiveIncrease?e.positiveIncrease.toLocaleString():0,")"),r.a.createElement(q.a,null,e.negative?e.negative.toLocaleString():0," (+",e.negativeIncrease?e.negativeIncrease.toLocaleString():0,")"),r.a.createElement(q.a,null,e.totalTestResults?e.totalTestResults.toLocaleString():0," ","(+",e.totalTestResultsIncrease?e.totalTestResultsIncrease.toLocaleString():0,")"),r.a.createElement(q.a,null,e.positive&&e.totalTestResults?(e.positive/e.totalTestResults*100).toFixed(2):""),r.a.createElement(q.a,null,e.death?e.death.toLocaleString():0," (+",e.deathIncrease?e.deathIncrease.toLocaleString():0,")"),r.a.createElement(q.a,null,e.deathRate?e.deathRate:""),r.a.createElement(q.a,null,e.hospitalized?e.hospitalized.toLocaleString():0," (+",e.hospitalizedIncrease?e.hospitalizedIncrease.toLocaleString():0,")"))})))):r.a.createElement(V.a,null,r.a.createElement(X.a,null,r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement("span",{className:Object(v.a)(f.sortingColumnHeader,"state"===p&&f.sortSelected),onClick:function(){return h("state")}},"State")),r.a.createElement(q.a,null,r.a.createElement("span",{className:Object(v.a)(f.sortingColumnHeader,"positive"===p&&f.sortSelected),onClick:function(){return h("positive")}},"Tested Positive")),r.a.createElement(q.a,null,r.a.createElement("span",{className:Object(v.a)(f.sortingColumnHeader,"negative"===p&&f.sortSelected),onClick:function(){return h("negative")}},"Tested Negative")),r.a.createElement(q.a,null,r.a.createElement("span",{className:Object(v.a)(f.sortingColumnHeader,"totalTestResults"===p&&f.sortSelected),onClick:function(){return h("totalTestResults")}},"Total Tested")),r.a.createElement(q.a,{className:Object(v.a)(f.sortingColumnHeader,"percentPositive"===p&&f.sortSelected),onClick:function(){return h("percentPositive")}},"Positives / All Tests"),r.a.createElement(q.a,null,r.a.createElement("span",{className:Object(v.a)(f.sortingColumnHeader,"death"===p&&f.sortSelected),onClick:function(){return h("death")}},"Deaths")),r.a.createElement(q.a,null,r.a.createElement("span",{className:Object(v.a)(f.sortingColumnHeader,"deathRate"===p&&f.sortSelected),onClick:function(){return h("deathRate")}},"Death Rate")),r.a.createElement(q.a,null,r.a.createElement("span",{className:Object(v.a)(f.sortingColumnHeader,"hospitalized"===p&&f.sortSelected),onClick:function(){return h("hospitalized")}},"Hospitalized")))),r.a.createElement(J.a,null,g.map((function(e){return r.a.createElement($.a,{key:e.hash},r.a.createElement(q.a,null,e.state),r.a.createElement(q.a,null,e.positive?e.positive.toLocaleString():""," (",e.positive&&E.positive?(e.positive/E.positive*100).toFixed(2):0,"%)"),r.a.createElement(q.a,null,e.negative?e.negative.toLocaleString():""," (",e.negative&&E.negative?(e.negative/E.negative*100).toFixed(2):0,"%)"),r.a.createElement(q.a,null,e.totalTestResults?e.totalTestResults.toLocaleString():""," ","(",e.totalTestResults&&E.totalTestResults?(e.totalTestResults/E.totalTestResults*100).toFixed(2):0,"%)"),r.a.createElement(q.a,null,e.positive&&e.totalTestResults?(e.positive/e.totalTestResults*100).toFixed(2):""),r.a.createElement(q.a,null,e.death?e.death.toLocaleString():0," (",e.death&&E.death?(e.death/E.death*100).toFixed(2):0,"%)"),r.a.createElement(q.a,null,e.deathRate?e.deathRate:""),r.a.createElement(q.a,null,e.hospitalized?e.hospitalized.toLocaleString():0," (",e.hospitalized&&E.hospitalized?(e.hospitalized/E.hospitalized*100).toFixed(2):0,"%)"))})))))};te.defaultProps={selectState:"",selectStateHistory:[],statesCurrent:[],usCurrent:[],tableDisplay:"history"};var ae=te,ne=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(I.a,{color:"inherit",href:"https://github.com/perryf/covid-tracker"},"US COVID 19 Tracker Source Code"),r.a.createElement("span",{style:{fontStyle:"italic"}}," \xa9 Perry Fustero 2020")),r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},"All data from ",r.a.createElement(I.a,{color:"inherit",href:"https://covidtracking.com/"},"The COVID Tracking Project")))},re=Object(f.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},paper:{padding:e.spacing(2),display:"flex",flexDirection:"column"},chartPaper:{height:360},tablePaper:{overflowX:"auto",overflowY:"hidden"}}})),le=function(e){var t=e.statesCurrent,a=e.statesHistoric,l=e.statesInfo,o=e.usCurrent,s=e.usHistoric,c=Object(n.useState)("us"),u=Object(i.a)(c,2),m=u[0],p=u[1],d=Object(n.useState)("positive"),h=Object(i.a)(d,2),f=h[0],T=h[1],C=Object(n.useState)("total"),D=Object(i.a)(C,2),O=D[0],j=D[1],x=Object(n.useState)("history"),R=Object(i.a)(x,2),I=R[0],N=R[1],P=re(),H="us"===m?o[0]:t.find((function(e){return e.state===m})),w="us"===m?s:a.filter((function(e){return e.state===m})),L=l.find((function(e){return e.state===m}));return r.a.createElement("div",{className:P.root},r.a.createElement(g.a,null),r.a.createElement(k,{statesInfo:l,selectState:m,changeState:function(e){p(e)}}),r.a.createElement("main",{className:P.content},r.a.createElement("div",{className:P.appBarSpacer}),r.a.createElement(y.a,{maxWidth:"lg",className:P.container},r.a.createElement(S.a,{container:!0,spacing:2},r.a.createElement(S.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(z,{selectState:m,selectStateInfo:L,selectStateCurrent:H})),!1,r.a.createElement(S.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(b.a,{className:Object(v.a)(P.paper,P.chartPaper)},r.a.createElement(K,{selectStateHistory:w,chartDisplay:f,chartDateRange:O,changeChartDisplay:function(e){var t=e.target.value;T(t)},changeChartDateRange:function(e){var t=e.target.value;j(t)}}))),r.a.createElement(S.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(b.a,{className:Object(v.a)(P.paper,P.tablePaper)},r.a.createElement(ae,{selectState:m,tableDisplay:I,selectStateHistory:w,statesCurrent:t,usCurrent:o,changeTableDisplay:function(e){var t=e.target.value;N(t)}})))),r.a.createElement(E.a,{pt:4},r.a.createElement(ne,null)))))};le.defaultProps={statesCurrent:[],statesHistoric:[],statesInfo:[],usCurrent:[],usHistoric:[]};var oe=le,se=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),v=c[0],f=c[1],E=Object(n.useState)([]),g=Object(i.a)(E,2),y=g[0],S=g[1],b=Object(n.useState)([]),T=Object(i.a)(b,2),C=T[0],D=T[1],O=Object(n.useState)([]),j=Object(i.a)(O,2),x=j[0],R=j[1];return Object(n.useEffect)((function(){fetch(u).then((function(e){return e.json()})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];l(e.map((function(e){return Object(s.a)({},e,{deathRate:e.death&&e.positive?(e.death/e.positive*100).toFixed(2):0})})))})).catch((function(e){return console.error(e)})),fetch(m).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return console.error(e)})),fetch(p).then((function(e){return e.json()})).then((function(e){S(e.sort((function(e,t){return e.state<t.state?-1:t.state<e.state?1:0})))})).catch((function(e){return console.error(e)})),fetch(d).then((function(e){return e.json()})).then((function(e){return D(e)})).catch((function(e){return console.error(e)})),fetch(h).then((function(e){return e.json()})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];R(e.map((function(e){return Object(s.a)({},e,{deathRate:e.death&&e.positive?(e.death/e.positive*100).toFixed(2):0})})))})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement(oe,{statesCurrent:a,statesHistoric:v,statesInfo:y,usCurrent:C,usHistoric:x})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(390);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.3558a8a9.chunk.js.map