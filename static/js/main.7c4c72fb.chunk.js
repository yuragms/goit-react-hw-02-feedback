(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c,a,r,o,i,s=n(1),b=n.n(s),d=n(5),j=n.n(d),u=(n(17),n(6)),l=n(7),h=n(8),O=n(11),f=n(10),g=n(2),x=n(3),p=x.a.button(c||(c=Object(g.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  margin-right: 10px;\n"]))),v=n(0),k=function(e){var t=e.options,n=e.onLeaveFeedback;return Object.keys(t).map((function(e){return Object(v.jsxs)(p,{onClick:function(){return n(e)},children:[" ",e]},e)}))},m=x.a.p(a||(a=Object(g.a)(["\n  font-size: 20px;\n  color: grey;\n"]))),F=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.countPositiveFeedbackPercentage;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(m,{children:["Good: ",t]}),Object(v.jsxs)(m,{children:["Neutral: ",n]}),Object(v.jsxs)(m,{children:["Bad: ",c]}),Object(v.jsxs)(m,{children:["Total: ",a]}),Object(v.jsxs)(m,{children:["Positive Feedback: ",r,"%"]})]})},P=x.a.h1(r||(r=Object(g.a)(["\n  font-size: 20px;\n  font-weight: 600;\n"]))),w=x.a.section(o||(o=Object(g.a)(["\n  padding: 10px 40px;\n"]))),y=function(e){var t=e.title,n=e.children;return Object(v.jsxs)(w,{children:[Object(v.jsx)(P,{children:t}),n]})},z=x.a.p(i||(i=Object(g.a)(["\n  font-size: 30px;\n  color: tomato;\n  margin-left: 20px;\n"])));function I(e){var t=e.message;return Object(v.jsx)(z,{children:t})}n(22);var S=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onIncrement=function(t){e.setState((function(e){return Object(u.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,c=t.neutral,a=t.bad;return Math.round(100*n/(n+c+a))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y,{title:"Please leave feedback",children:Object(v.jsx)(k,{options:this.state,onLeaveFeedback:this.onIncrement})}),t||n||c?Object(v.jsx)(y,{title:"Statistics",children:Object(v.jsx)(F,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage()})}):Object(v.jsx)(I,{message:"No feedback given"})]})}}]),n}(s.Component);j.a.render(Object(v.jsx)(b.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.7c4c72fb.chunk.js.map