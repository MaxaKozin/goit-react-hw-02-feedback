(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={statbar:"Statistics_statbar__2uvEA",stats:"Statistics_stats__3stUL",box:"Statistics_box__YhXxQ",name:"Statistics_name__1lWR1"}},function(e,t,a){e.exports={Section:"Section_Section__LqS2d",heading:"Section_heading__93ND4"}},function(e,t,a){e.exports={box:"FeedbackOptions_box__2GXn4",btn:"FeedbackOptions_btn__1rp9P"}},,,,,function(e,t,a){e.exports={message:"Notification_message__eciZi"}},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),l=(a(16),a(6)),s=a(7),i=a(10),m=a(9),u=a(2),d=a.n(u),b=function(e){var t=e.title,a=e.children;return c.a.createElement("section",{className:d.a.Section},c.a.createElement("h2",{className:d.a.heading},t),a)},g=a(8),p=a.n(g),E=function(e){var t=e.message;return c.a.createElement("p",{className:p.a.message},t)},f=a(1),_=a.n(f),v=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,t||a||n?c.a.createElement("div",{className:_.a.stats},c.a.createElement("div",{className:_.a.statbar,style:{background:"linear-gradient(to right, #0a0, #0a0 ".concat(o,", #a00 ").concat(o,", #a00 100%)")}}),c.a.createElement("div",{className:_.a.box},c.a.createElement("p",{className:_.a.name},"Good: ",c.a.createElement("br",null),t),c.a.createElement("p",{className:_.a.name},"Neutral: ",c.a.createElement("br",null),a),c.a.createElement("p",{className:_.a.name},"Bad: ",c.a.createElement("br",null),n),c.a.createElement("p",{className:_.a.name},"Total: ",c.a.createElement("br",null),r),c.a.createElement("p",{className:_.a.name},"Positive feedback: ",c.a.createElement("br",null),o))):c.a.createElement(E,{message:"No feedback given"}))},h=a(3),k=a.n(h),N=function(e){var t=e.options,a=e.onIncrement;return c.a.createElement("div",{className:k.a.box},t.map((function(e){return c.a.createElement("button",{className:k.a.btn,name:e,key:e,onClick:a},e.replace(e[0],e[0].toUpperCase()))})))},S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){e.setState((function(e){return e.total?{total:e.total+1}:{total:e.good+e.bad+e.neutral+1}}))},e.countPositiveFeedbackPercentage=function(){e.setState((function(e){return{positivePercentage:"".concat(Math.round(e.good/e.total*100),"%")}}))},e.incrementHandler=function(t){e.countTotalFeedback();var a=t.target.name,n={};e.setState((function(e){return n[a]=e[a]+1,n})),e.countPositiveFeedbackPercentage()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{title:"Please leave feedback"},c.a.createElement(N,{options:["good","neutral","bad"],onIncrement:this.incrementHandler})),c.a.createElement(b,{title:"Statistics"},c.a.createElement(v,{good:t,neutral:a,bad:n,total:r,positivePercentage:o})))}}]),a}(n.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.52b4018d.chunk.js.map