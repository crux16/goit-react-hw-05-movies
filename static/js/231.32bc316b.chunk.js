"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[231],{5231:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(5861),s=r(9439),a=r(7757),i=r.n(a),c=r(2791),u=r(7689),o=r(1087),l=r(3714),p=r(9791),d="Button_button__wiIYs",h="Button_icon__KeIH3",f=r(184),x=function(e){var t=e.text,r=e.position,n=e.children;return(0,f.jsxs)("button",{className:d,type:"button",children:["left"===r&&(0,f.jsx)("span",{className:h,children:n}),t,"right"===r&&(0,f.jsx)("span",{className:h,children:n})]})},v=r(149),m={movieDetailsContainer:"MovieDetailsPage_movieDetailsContainer__RRyXo",list:"MovieDetailsPage_list__xeLC8"},j=function(){var e,t,r=(0,u.UO)().movieId,a=(0,c.useState)(),d=(0,s.Z)(a,2),h=d[0],j=d[1],w=null!==(e=null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Y5)(r);case 3:t=e.sent,j(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[r]),h?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.rU,{to:w,children:(0,f.jsx)(x,{text:"Go back",position:"left",children:(0,f.jsx)(p.$F,{size:"100%"})})}),(0,f.jsxs)("div",{className:m.movieDetailsContainer,children:[(0,f.jsx)("img",{className:m.image,src:h.poster_path?"https://image.tmdb.org/t/p/w500".concat(h.poster_path):"https://fakeimg.pl/600x400?text=No+Image+Available",alt:h.title}),(0,f.jsxs)("div",{className:m.movieDetailsWrap,children:[(0,f.jsx)("h1",{children:h.title}),(0,f.jsxs)("h4",{children:["User score: ",Math.round(10*h.vote_average),"%"]}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("p",{children:h.genres.map((function(e){return(0,f.jsxs)("span",{children:[" ",e.name]},e.id)}))})]})]}),(0,f.jsx)("hr",{}),(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{className:m.list,children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",children:(0,f.jsx)(x,{text:"Cast",position:"right",children:(0,f.jsx)(p.qiA,{})})})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"reviews",children:(0,f.jsx)(x,{text:"Reviews",position:"right",children:(0,f.jsx)(p.Rbo,{})})})})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(v.a,{}),children:(0,f.jsx)(u.j3,{})})]}):(0,f.jsx)(v.a,{})}},3714:function(e,t,r){r.d(t,{Hx:function(){return p},Y5:function(){return o},mv:function(){return u},uV:function(){return l},wr:function(){return c}});var n=r(5861),s=r(7757),a=r.n(s),i=r(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"f963466200dc6de26d67255f760324c0"};var c=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=231.32bc316b.chunk.js.map