(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{578:function(t,s,a){},621:function(t,s,a){"use strict";a(578)},659:function(t,s,a){"use strict";a.r(s);a(50),a(79),a(615),a(105),a(20),a(37),a(618),a(52);var e=a(12),i=a(32),r=a.n(i),c=a(647),n=a(646),_={data:function(){return{format:c.a,parseISO:n.a,articlesList:[]}},mounted:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.get("https://backend.tendermint.com/cosmos/tag/tutorial");case 2:t.articlesList=s.sent.data.map((function(t){return{date:new Date(t.date).toISOString().substr(0,10),title:t.title,link:t.link,image:t.image.replace("/max/1024/","/max/768/")}})).slice(0,6);case 3:case"end":return s.stop()}}),s)})))()}},o=(a(621),a(0)),l=Object(o.a)(_,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"search__container"},[a("div",{staticClass:"search",on:{click:function(s){return t.$emit("search",!0)}}},[a("div",{staticClass:"search__icon"},[a("icon-search")],1),a("div",{staticClass:"search__text"},[t._v("Search")])])]),a("div",{staticClass:"h1"},[t._v(t._s(t.$frontmatter.title))]),t._m(0),a("div",{staticClass:"sections__wrapper"},[a("div",{staticClass:"sections"},t._l(t.$frontmatter.sections,(function(s){return a("router-link",{staticClass:"sections__item",attrs:{tag:"a",to:s.url}},[a("div",{staticClass:"sections__item__wrapper"},[a("div",{staticClass:"sections__item__title"},[t._v(t._s(s.title))]),a("div",{staticClass:"sections__item__desc"},[t._v(t._s(s.desc))])]),a("div",{staticClass:"sections__item__tags"},t._l(s.tags,(function(s){return a("div",{staticClass:"sections__item__tags__item"},[t._v(t._s(s))])})),0)])})),1)]),a("div",{staticClass:"h2"},[t._v("Articles")]),a("div",{staticClass:"stack"},t._l(t.articlesList,(function(s){return a("a",{staticClass:"stack__item",attrs:{href:s.link,target:"_blank",rel:"noreferrer noopener"}},[a("img",{staticClass:"stack__item__image",attrs:{src:s.image,alt:"Image"}}),a("div",{staticClass:"stack__item__text"},[a("div",{staticClass:"stack__item__h1"},[t._v(t._s(s.title))]),a("div",{staticClass:"stack__item__p"},[t._v(t._s(t.format(t.parseISO(s.date),"MMM d, yyyy")))])])])})),0),a("div",{staticClass:"h2"},[t._v("Videos")]),a("div",{staticClass:"stack"},t._l(t.$frontmatter.stack,(function(s){return a("a",{staticClass:"stack__item",attrs:{href:s.url,target:"_blank",rel:"noreferrer noopener"}},[a("img",{staticClass:"stack__item__image",attrs:{src:s.imgSrc,alt:"Image"}}),a("div",{staticClass:"stack__item__text"},[a("div",{staticClass:"stack__item__h1"},[t._v(t._s(s.title))]),a("div",{staticClass:"stack__item__p"},[t._v(t._s(s.duration))])])])})),0),a("tm-help-support")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"intro"},[s("div",{staticClass:"p__alt"},[this._v("Learn how to use "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noreferrer noopener"}},[this._v("Cosmos SDK")]),this._v(", the world’s most popular framework for building application-specific blockchains.")])])}],!1,null,"55b1bec4",null);s.default=l.exports}}]);