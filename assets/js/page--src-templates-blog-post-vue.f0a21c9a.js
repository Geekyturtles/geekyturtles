(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(t,e,a){"use strict";var s={props:{record:{},border:{type:Boolean,default:!0}}},i=a(16),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[a("g-link",{staticClass:"post-card-image-link",attrs:{to:t.record.path}},[a("g-image",{staticClass:"post-card-image",attrs:{src:t.record.image,alt:t.record.title}})],1),a("div",{staticClass:"post-card-content"},[a("g-link",{attrs:{to:t.record.path}},[a("p",{staticClass:"uppercase font-medium text-xs text-blue-700 mt-3"},[t._v(t._s(t.record.category.title))]),a("h2",{staticClass:"post-card-title mt-0"},[t._v("\n        "+t._s(t.record.title)+"\n      ")]),a("p",{staticClass:"post-card-excerpt"},[t._v(t._s(t.record.excerpt))])]),a("div",{staticClass:"w-full post-card-meta pt-4"},[a("div",{staticClass:"avatars"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list"},t._l(t.record.author,(function(t){return a("li",{key:t.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[a("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),a("div",{staticClass:"ml-3 pl-3 border-l flex flex-col text-xs leading-none uppercase"},[a("p",[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])]),a("p",[t._v("\n             "+t._s(t.record.timeToRead)+" min\n           ")])])])])])],1)],1)}),[],!1,null,null,null);e.a=r.exports},182:function(t,e){},187:function(t,e,a){"use strict";var s=a(182),i=a.n(s);e.default=i.a},189:function(t,e,a){"use strict";a.r(e);a(36),a(76),a(37);var s={components:{PostListItem:a(176).a},metaInfo:function(){var t=[];return this.$page.blog.tags.forEach((function(e){return t.push(e.title)})),{title:this.$page.blog.title,description:[{name:"description",content:[this.$page.blog.excerpt]}],link:[{rel:"canonical",href:this.$static.metadata.siteUrl+this.$page.blog.path}],meta:[{key:"description",name:"description","data-key":"description",content:[this.$page.blog.excerpt]},{image:this.$page.blog.image.src},{name:"Keywords",content:[this.$page.blog.excerpt+" "+t.join(", ")]}]}}},i=a(16),r=a(187),o=a(0),l=o.a.config.optionMergeStrategies.computed,n={metadata:{siteUrl:"https://geekyturtles.com"}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=n:(e.__staticData=o.a.observable({data:n}),e.computed=l({$static:function(){return e.__staticData.data}},e.computed))},p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[a("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden pt-24"},[a("div",{staticClass:"lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8"},[a("section",{staticClass:"post-header container mx-auto px-0"},[a("span",{staticClass:"text-blue-500 font-medium uppercase tracking-wide text-sm"},[a("g-link",{staticClass:"hover:underline",attrs:{to:t.$page.blog.category.path}},[t._v(t._s(t.$page.blog.category.title))])],1),a("h1",{staticClass:"text-5xl font-medium leading-none mt-0 mb-0"},[t._v(t._s(t.$page.blog.title))]),a("section",{staticClass:"post-author-list mx-0"},[a("div",{staticClass:"post-author-section flex items-center my-2"},[a("div",{staticClass:"flex justify-between items-center"},t._l(t.$page.blog.author,(function(t){return a("span",{key:t.id},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[a("g-image",{staticClass:"h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0),a("div",{staticClass:"pl-3 flex flex-row text-xs leading-none"},[a("p",{staticClass:"mr-4"},t._l(t.$page.blog.author,(function(e,s){return a("span",{key:e.id},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],staticClass:"hover:underline",attrs:{to:e.path}},[t._v(t._s(e.name))]),s<t.$page.blog.author.length-1?a("span",[t._v(" , ")]):t._e()],1)})),0),a("p",{staticClass:"text-gray-700"},[a("time",{attrs:{datetime:t.$page.blog.datetime}},[t._v(t._s(t.$page.blog.humanTime))]),t._v("\n                 ·  "+t._s(t.$page.blog.timeToRead)+" min read\n              ")])])])]),a("section",{staticClass:"post-tags container mx-auto relative py-1"},t._l(t.$page.blog.tags,(function(e){return a("g-link",{key:e.id,staticClass:"post-tag",class:e.title+"-tag",attrs:{to:e.path}},[t._v(" # "+t._s(e.title))])})),1),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-2xl pt-4 pb-10 text-gray-700",domProps:{innerHTML:t._s(t.$page.blog.excerpt)}})])]),a("section",{staticClass:"post-image mx-auto w-full"},[a("g-image",{attrs:{src:t.$page.blog.image}})],1),a("div",{staticClass:"lg:mx-32 md:mx-16 px-4 sm:px-0"},[a("section",{staticClass:"post-content container mx-auto relative text-gray-700"},[a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-content-text text-xl",domProps:{innerHTML:t._s(t.$page.blog.content)}})])]),a("vue-disqus",{attrs:{shortname:"geekyturtles",identifier:t.$page.blog.title}})],1),a("section",{staticClass:"post-related bg-black text-gray-200 pt-10 border-b border-b-gray-900"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4"},[t.$page.previous?a("PostListItem",{attrs:{record:t.$page.previous,border:!1}}):t._e(),t.$page.next?a("PostListItem",{attrs:{record:t.$page.next,border:!1}}):t._e()],1)])])])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(p),"function"==typeof c&&c(p);e.default=p.exports}}]);