(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{167:function(t,e,a){"use strict";var s=a(4),n=a(72).includes,o=a(127);s({target:"Array",proto:!0,forced:!a(32)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},168:function(t,e,a){"use strict";a(33),a(167);var s={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},n=a(12),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-between text-xl items-center"},[a("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage}},[t._v("← Prev")]),a("div",{staticClass:"text-base"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),a("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=o.exports},173:function(t,e){},179:function(t,e,a){"use strict";var s=a(173),n=a.n(s);e.default=n.a},184:function(t,e,a){"use strict";a.r(e);var s={metaInfo:{title:"Blog"},components:{PaginationPosts:a(168).a}},n=a(12),o=a(179),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"container-inner mx-auto py-16"},[t._l(t.$page.posts.edges,(function(e){return a("div",{key:e.id,staticClass:"post border-gray-400 border-b mb-12"},[a("h2",{staticClass:"text-3xl font-bold"},[a("g-link",{staticClass:"text-copy-primary",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1),a("div",{staticClass:"text-copy-secondary mb-4"},[a("span",[t._v(t._s(e.node.date))]),a("span",[t._v(" · ")]),a("span",[t._v(t._s(e.node.timeToRead)+" min read")])]),a("div",{staticClass:"text-lg mb-4"},[t._v("\n        "+t._s(e.node.summary)+"\n      ")]),a("div",{staticClass:"mb-8"},[a("g-link",{staticClass:"font-bold uppercase",attrs:{to:e.node.path}},[t._v("Read More")])],1)])})),t.$page.posts.pageInfo.totalPages>1?a("pagination-posts",{attrs:{base:"/blog",totalPages:t.$page.posts.pageInfo.totalPages,currentPage:t.$page.posts.pageInfo.currentPage}}):t._e()],2)])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(r);e.default=r.exports}}]);