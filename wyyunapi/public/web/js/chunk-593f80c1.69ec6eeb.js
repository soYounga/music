(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-593f80c1"],{"8bb5":function(s,a,e){},d920:function(s,a,e){"use strict";var n=e("8bb5"),t=e.n(n);t.a},e854:function(s,a,e){"use strict";e.r(a);var n=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{attrs:{id:"personaldetail"}},[e("div",{staticClass:"wrap"},[e("h3",[s._v("基本信息")]),e("p",[s._v("昵称："+s._s(s.personal.name))]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.isshow,expression:"isshow"}]},[s._v("别名:"+s._s(s.alias))]),e("p",[s._v("简介:"+s._s(s.personal.briefDesc))])])])},t=[],i={name:"personaldetail",data:function(){return{personal:[],alias:"",isshow:!0}},props:["gid"],methods:{getpsersonal:function(s){var a=this;this.axios.get("/artists?id="+s).then((function(s){a.personal=s.data.artist,a.alias=a.personal.alias[0],0==a.personal.alias.length&&(a.isshow=!1)}))}},mounted:function(){this.getpsersonal(this.gid)}},o=i,r=(e("d920"),e("2877")),l=Object(r["a"])(o,n,t,!1,null,"1271519e",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-593f80c1.69ec6eeb.js.map