(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{176:function(t,e,a){"use strict";var s={props:{record:{},border:{type:Boolean,default:!0}}},i=a(16),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[a("g-link",{staticClass:"post-card-image-link",attrs:{to:t.record.path}},[a("g-image",{staticClass:"post-card-image",attrs:{src:t.record.image,alt:t.record.title}})],1),a("div",{staticClass:"post-card-content"},[a("g-link",{attrs:{to:t.record.path}},[a("p",{staticClass:"uppercase font-medium text-xs text-blue-700 mt-3"},[t._v(t._s(t.record.category.title))]),a("h2",{staticClass:"post-card-title mt-0"},[t._v("\n        "+t._s(t.record.title)+"\n      ")]),a("p",{staticClass:"post-card-excerpt"},[t._v(t._s(t.record.excerpt))])]),a("div",{staticClass:"w-full post-card-meta pt-4"},[a("div",{staticClass:"avatars"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list"},t._l(t.record.author,(function(t){return a("li",{key:t.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[a("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),a("div",{staticClass:"ml-3 pl-3 border-l flex flex-col text-xs leading-none uppercase"},[a("p",[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])]),a("p",[t._v("\n             "+t._s(t.record.timeToRead)+" min\n           ")])])])])])],1)],1)}),[],!1,null,null,null);e.a=r.exports},183:function(t,e){},188:function(t,e,a){"use strict";var s=a(183),i=a.n(s);e.default=i.a},190:function(t,e,a){"use strict";a.r(e);var s={components:{PostListItem:a(176).a},metaInfo:function(){return{title:"Home",link:[{rel:"canonical",href:this.$static.metadata.siteUrl}]}}},i=a(16),r=a(188),o=a(0),c=o.a.config.optionMergeStrategies.computed,l={metadata:{siteUrl:"https://geekyturtles.com"}},n=function(t){var e=t.options;e.__staticData?e.__staticData.data=l:(e.__staticData=o.a.observable({data:l}),e.computed=c({$static:function(){return e.__staticData.data}},e.computed))},d=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden",staticStyle:{"margin-top":"65px"}},[e("div",{staticClass:"flex flex-wrap with-large pt-16 pb-16 mx-4 sm:-mx-4"},this._l(this.$page.entries.edges,(function(t){return e("PostListItem",{key:t.node.id,attrs:{record:t.node}})})),1)])])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(d),"function"==typeof n&&n(d);e.default=d.exports}}]);