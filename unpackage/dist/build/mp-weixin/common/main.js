(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0847":function(n,o,t){},2139:function(n,o,t){"use strict";t.r(o);var e=t("3874"),c=t.n(e);for(var u in e)"default"!==u&&function(n){t.d(o,n,function(){return e[n]})}(u);o["default"]=c.a},3874:function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=t("1644"),c={globalData:{text:"vue与nvue通用的全局变量管理"},onLaunch:function(){console.log("App Launch"),n.login({provider:"weixin",success:function(n){getApp().globalData.code=n.code,(0,e.loginWx)({code:n.code}).then(function(n){getApp().globalData.token=n.token,console.log(n)})}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};o.default=c}).call(this,t("543d")["default"])},c605:function(n,o,t){"use strict";var e=t("0847"),c=t.n(e);c.a},d245:function(n,o,t){"use strict";t.r(o);var e=t("2139");for(var c in e)"default"!==c&&function(n){t.d(o,n,function(){return e[n]})}(c);t("c605");var u,l,a=t("2877"),i=Object(a["a"])(e["default"],u,l,!1,null,null,null);o["default"]=i.exports}},[["5083","common/runtime","common/vendor"]]]);