(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["address"],{"0eaf":function(e,t,n){"use strict";n("b0c0");var r=n("7a23"),a=Object(r["S"])("data-v-97148694");Object(r["B"])("data-v-97148694");var c={class:"simple-header van-hairline--bottom"},d={key:1},o={class:"simple-header-name"},s=Object(r["i"])("i",{class:"nbicon nbmore"},null,-1),i=Object(r["i"])("div",{class:"block"},null,-1);Object(r["z"])();var u=a((function(e,t,n,a,u,f){return Object(r["y"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("header",c,[a.isback?(Object(r["y"])(),Object(r["f"])("i",d,"      ")):(Object(r["y"])(),Object(r["f"])("i",{key:0,class:"nbicon nbfanhui",onClick:t[1]||(t[1]=function(){return a.goBack.apply(a,arguments)})})),Object(r["i"])("div",o,Object(r["K"])(n.name),1),s]),i],64)})),f=n("6c02"),l={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup:function(e,t){var n=Object(r["D"])(e.noback),a=Object(f["d"])(),c=function(){e.back?a.push({path:e.back}):a.go(-1),t.emit("callback")};return{goBack:c,isback:n}}};n("3215");l.render=u,l.__scopeId="data-v-97148694";t["a"]=l},2703:function(e,t,n){"use strict";n("bbfd")},3215:function(e,t,n){"use strict";n("a5f6")},"3f49":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return d})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return i}));var r=n("a27e");function a(e){return r["a"].post("/address",e)}function c(e){return r["a"].put("/address",e)}function d(e){return r["a"].delete("/address/".concat(e))}function o(){return r["a"].get("/address/default")}function s(){return r["a"].get("/address",{pageNumber:1,pageSize:1e3})}function i(e){return r["a"].get("/address/".concat(e))}},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),c=n("e8b5"),d=n("861d"),o=n("7b0b"),s=n("50c4"),i=n("8418"),u=n("65f0"),f=n("1dde"),l=n("b622"),b=n("2d00"),p=l("isConcatSpreadable"),m=9007199254740991,j="Maximum allowed index exceeded",O=b>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=f("concat"),v=function(e){if(!d(e))return!1;var t=e[p];return void 0!==t?!!t:c(e)},y=!O||!h;r({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,r,a,c,d=o(this),f=u(d,0),l=0;for(t=-1,r=arguments.length;t<r;t++)if(c=-1===t?d:arguments[t],v(c)){if(a=s(c.length),l+a>m)throw TypeError(j);for(n=0;n<a;n++,l++)n in c&&i(f,l,c[n])}else{if(l>=m)throw TypeError(j);i(f,l++,c)}return f.length=l,f}})},a5f6:function(e,t,n){},a821:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"address-box"},c={class:"address-item"};function d(e,t,n,d,o,s){var i=Object(r["G"])("s-header"),u=Object(r["G"])("van-address-list");return Object(r["y"])(),Object(r["f"])("div",a,[Object(r["i"])(i,{name:"地址管理",back:"create-order"==e.from?"":"/user"},null,8,["back"]),Object(r["i"])("div",c,["mine"!=e.from?(Object(r["y"])(),Object(r["f"])(u,{key:0,modelValue:e.chosenAddressId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.chosenAddressId=t}),list:e.list,"default-tag-text":"默认",onAdd:d.onAdd,onEdit:d.onEdit,onSelect:d.select},null,8,["modelValue","list","onAdd","onEdit","onSelect"])):(Object(r["y"])(),Object(r["f"])(u,{key:1,modelValue:e.chosenAddressId,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.chosenAddressId=t}),list:e.list,"default-tag-text":"默认",onAdd:d.onAdd,onEdit:d.onEdit},null,8,["modelValue","list","onAdd","onEdit"]))])])}n("99af"),n("d81d");var o=n("5530"),s=(n("96cf"),n("1da1")),i=n("0eaf"),u=n("3f49"),f=n("6c02"),l={components:{sHeader:i["a"]},setup:function(){var e=Object(f["c"])(),t=Object(f["d"])(),n=Object(r["C"])({chosenAddressId:"1",list:[],from:e.query.from});Object(r["v"])(Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["e"])();case 2:if(t=e.sent,r=t.data,r){e.next=7;break}return n.list=[],e.abrupt("return");case 7:n.list=r.map((function(e){return{id:e.addressId,name:e.userName,tel:e.userPhone,address:"".concat(e.provinceName," ").concat(e.cityName," ").concat(e.regionName," ").concat(e.detailAddress),isDefault:!!e.defaultFlag}}));case 8:case"end":return e.stop()}}),e)}))));var a=function(){t.push({path:"/address-edit",query:{type:"add",from:n.from}})},c=function(e){t.push({path:"address-edit",query:{type:"edit",addressId:e.id,from:n.from}})},d=function(e){t.push({path:"create-order",query:{addressId:e.id,from:n.from}})};return Object(o["a"])(Object(o["a"])({},Object(r["L"])(n)),{},{onAdd:a,onEdit:c,select:d})}};n("2703");l.render=d;t["default"]=l},bbfd:function(e,t,n){},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,c=n("1dde"),d=n("ae40"),o=c("map"),s=d("map");r({target:"Array",proto:!0,forced:!o||!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=address.be496cca.js.map