(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{453:function(t,e,r){"use strict";r(12),r(8),r(11),r(3),r(15),r(10),r(16);var n=r(2),o=(r(28),r(199),r(200),r(454),r(208)),c=r(437),l=r(92),d=r(13);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},454:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("81b1dc02",content,!0,{sourceMap:!1})},455:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},515:function(t,e,r){"use strict";r.r(e);r(12),r(8),r(11),r(3),r(15),r(10),r(16);var n=r(33),o=r(2);r(85),r(62);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ListPage2",data:function(){return{apiserverurl:"",loading:!0,expanded:[],tvpiheaders:[{text:"番組情報",align:"start",sortable:!1,value:"title",filter:this.watchedFilter},{text:"",value:"data-table-expand"}],tvpilist:[]}},computed:{indexedItems:function(){return this.tvpilist.map((function(t,e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({id:e},t)}))}},created:function(){localStorage.apiserverurl&&(this.apiserverurl=localStorage.apiserverurl),this.reloadList()},methods:{reloadList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.tvpilist=[],r=t.apiserverurl+"/v1/tvpi/list.json",console.log(r),e.next=6,t.$axios.$get(r);case 6:n=e.sent,t.tvpilist=n,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},watchedFilter:function(t,e,r){return console.log(t),console.log(e),!r.watched},onClickRecordingItem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t.title),e.loading=!0,n=e.apiserverurl+"/v1/tvp/recording",r.next=5,e.$axios.$post(n,t);case 5:t.watched=!0,e.loading=!1;case 7:case"end":return r.stop()}}),r)})))()},onClickWatchedItem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t.title),e.loading=!0,n=e.apiserverurl+"/v1/tvp/watched",r.next=5,e.$axios.$post(n,t);case 5:t.watched=!0,e.loading=!1;case 7:case"end":return r.stop()}}),r)})))()},onClickNoWatchItem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t.title),e.loading=!0,n=e.apiserverurl+"/v1/tvp/nowatch",r.next=5,e.$axios.$post(n,t);case 5:t.watched=!0,e.loading=!1;case 7:case"end":return r.stop()}}),r)})))()}}},d=l,v=r(93),h=r(135),f=r.n(h),m=r(453),x=r(511),_=r(513),w=r(188),k=r(512),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{staticClass:"text-left"},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.tvpiheaders,"hide-default-header":!0,items:t.indexedItems,loading:t.loading,"loading-text":"番組情報をロード中","no-data-text":"データがありません","items-per-page":100,"footer-props":{"items-per-page-options":[50,100,150,200,-1]},"mobile-breakpoint":0,"single-expand":!0,expanded:t.expanded,"item-key":"id","show-expand":""},on:{"update:expanded":function(e){t.expanded=e},"update:page":function(e){return t.$vuetify.goTo(0)}},scopedSlots:t._u([{key:"item.title",fn:function(e){var n=e.item;return[r("v-card",{staticClass:"d-flex text-left",attrs:{flat:""}},[r("v-card",{staticClass:"mr-auto",attrs:{flat:""}},[r("v-card",{staticClass:"d-flex flex-nowrap d-block d-sm-inline mr-2",class:{amber:n.latestWork,"black--text":n.latestWork},attrs:{dark:!n.latestWork,flat:""}},[r("div",{staticClass:"d-block d-sm-inline text-left mr-2"},[t._v("\n                "+t._s(n.title)+"\n              ")]),t._v(" "),n.latestWork?r("v-icon",{staticClass:"mr-2",attrs:{dense:""}},[t._v("mdi-movie-open-star")]):t._e(),t._v(" "),n.subtitle?r("v-icon",{staticClass:"mr-2",attrs:{dense:""}},[t._v("mdi-closed-caption")]):t._e(),t._v(" "),n.dubbing?r("v-icon",{staticClass:"mr-2",attrs:{dense:""}},[t._v("mdi-account-voice")]):t._e(),t._v(" "),n.watched?r("v-icon",{staticClass:"mr-2",attrs:{dense:""}},[t._v("mdi-archive-eye")]):t._e()],1),t._v(" "),r("v-card",{staticClass:"d-flex text-left text-caption flex-nowrap d-block d-sm-inline mr-2",attrs:{flat:""}},[t._v(t._s(n.channelName))])],1),t._v(" "),r("v-card",{staticClass:"d-flex flex-nowrap",attrs:{flat:""}},[r("v-icon",{staticClass:"mr-2",attrs:{dense:""},on:{click:function(e){return t.onClickRecordingItem(n)}}},[t._v("mdi-content-save")]),t._v(" "),r("v-icon",{staticClass:"mr-2",attrs:{dense:""},on:{click:function(e){return t.onClickWatchedItem(n)}}},[t._v("mdi-database-eye")]),t._v(" "),r("v-icon",{attrs:{dense:""},on:{click:function(e){return t.onClickNoWatchItem(n)}}},[t._v("mdi-database-eye-off")])],1)],1),t._v(" "),r("div",{staticClass:"text-left text-caption"},[t._v("\n          "+t._s(n.contentDescription)+"\n        ")])]}},{key:"expanded-item",fn:function(e){var n=e.headers,o=e.item;return[r("td",{attrs:{colspan:n.length}},[t._v(t._s(o.originTitle))])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCard:m.a,VCol:x.a,VDataTable:_.a,VIcon:w.a,VRow:k.a})}}]);