(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{320:function(e,t,n){"use strict";n.r(t);var r=n(23),c=n(9),o=(n(47),n(15),n(28),n(29),{name:"Documentation",components:{docs:n(286).a},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,e.params,t.next=3,Promise.all([n("documentation",{deep:!0}).only(["title","description","path","order","slug"]).sortBy("createdAt","asc").fetch()]);case 3:return c=t.sent,o=Object(r.a)(c,1),l=o[0],t.abrupt("return",{articles:l});case 7:case"end":return t.stop()}}),t)})))()}}),l=n(46),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("docs",{attrs:{treeDocs:e.articles}},[n("div",{staticClass:"article "},[n("h3",{},[e._v("\n        Documentation\n      ")]),e._v(" "),n("p",[e._v("\n        Hey\n      ")])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);