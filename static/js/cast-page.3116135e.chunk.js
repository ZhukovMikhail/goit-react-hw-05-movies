"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[53],{3221:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,c,o,i,s,u=t(2690),p=t(6871),l=t(168),f=t(2499),d=f.Z.div(r||(r=(0,l.Z)(["\n  margin: 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),x=f.Z.ul(a||(a=(0,l.Z)(["\n  margin-left: -10px;\n  margin-top: -10px;\n  display: flex;\n  flex-wrap: wrap;\n"]))),g=f.Z.li(c||(c=(0,l.Z)(["\n  margin-left: 10px;\n  margin-top: 10px;\n  list-style: none;\n  flex-basis: calc((100%-50px) / 5);\n  border-radius: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 190px;\n  box-shadow: 4px 5px 6px 0px rgba(54, 51, 51, 0.9);\n  -webkit-box-shadow: 4px 5px 6px 0px rgba(27, 22, 22, 0.9);\n  -moz-box-shadow: 4px 5px 6px 0px rgba(26, 26, 26, 0.9); ;\n"]))),h=f.Z.div(o||(o=(0,l.Z)(["\n  display: flex;\n  height: 100%;\n"]))),v=f.Z.img(i||(i=(0,l.Z)(["\n  display: block;\n  max-width: 100%;\n  align-self: center;\n"]))),m=f.Z.h5(s||(s=(0,l.Z)(["\n  text-align: center;\n  height: 3vw;\n  font-size: 1.5vw;\n  align-self: center;\n"]))),w=t(184),b=function(){var n=(0,p.bx)();return(0,w.jsx)(d,{children:(0,w.jsx)(x,{children:n.credits.cast.map((function(n){return(0,w.jsxs)(g,{children:[(0,w.jsx)(h,{children:(0,w.jsx)(v,{src:n.profile_path?"".concat(u.TS).concat(u.nP).concat(n.profile_path):t(9881),alt:n.name})}),(0,w.jsx)(m,{children:n.name})]},n.id)}))})})}},2690:function(n,e,t){t.d(e,{If:function(){return v},TS:function(){return u},cv:function(){return p},hG:function(){return g},jc:function(){return h},nP:function(){return l},qF:function(){return x},t$:function(){return d},t6:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o),s="c49a81302c69c8f0b079b665aea8a7dd",u="https://image.tmdb.org/t/p",p="/w500",l="/w200",f="/original";i().defaults.baseURL="https://api.themoviedb.org/3";var d=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,i().get("/trending/movie/week?api_key=".concat(s,"&page=").concat(e));case 3:return t=n.sent,r=t.data,console.log("response trendingMovie",r),n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"));case 2:return r=n.sent,a=r.data,console.log("response searchMovie",a),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US&append_to_response=credits,reviews"));case 2:return t=n.sent,r=t.data,console.log("response movieDetails",r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(n,e){var t;return null!==n&&void 0!==n&&null!==(t=n[e])&&void 0!==t&&t.poster_path?"".concat(u).concat(f).concat(n[e].poster_path):"https://materials.basov.com.ua/images/silhouette-map-of-ukraine-vector-illustration-blue-yellow.jpg"},v=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US&page=").concat(t));case 2:return r=n.sent,a=r.data,console.log("response OtherMovies",a),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},9881:function(n,e,t){n.exports=t.p+"static/media/photoMe.bc6b4ea6886b70a7ef87.jpg"}}]);
//# sourceMappingURL=cast-page.3116135e.chunk.js.map