(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/auth/login"],{"33e4":function(e,t,n){},"48df":function(e,t,n){"use strict";(function(e){n("5af4");a(n("66fd"));var t=a(n("efaa"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"4ea1":function(e,t,n){"use strict";n.r(t);var a=n("a826"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},"958f":function(e,t,n){"use strict";var a=n("33e4"),r=n.n(a);r.a},a22b:function(e,t,n){"use strict";var a=n("b41b"),r=n.n(a);r.a},a826:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a")),r=n("2c5d"),u=o(n("c123")),i=o(n("9766")),c=o(n("544c"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,a,r,u,i){try{var c=e[u](i),o=c.value}catch(s){return void n(s)}c.done?t(o):Promise.resolve(o).then(a,r)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var u=e.apply(t,n);function i(e){s(u,a,r,i,c,"next",e)}function c(e){s(u,a,r,i,c,"throw",e)}i(void 0)}))}}var l={mixins:[u.default,i.default,c.default],data:function(){return{canUseAppleLogin:!1,agreement:!0,username:"",pwd:""}},onLoad:function(){},methods:{loginSuccessCallBack:function(t){this.$util.msg("登陆成功"),this.$store.commit("setToken",t),setTimeout((function(){e.navigateBack()}),1e3)},login:function(){var e=this;return f(a.default.mark((function t(){var n,u,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.agreement){t.next=4;break}return e.$util.msg("请阅读并同意用户服务及隐私协议"),e.$refs.confirmBtn.stop(),t.abrupt("return");case 4:if(n=e.username,u=e.pwd,(0,r.checkStr)(n,"mobile")){t.next=9;break}return e.$util.msg("请输入正确的手机号码"),e.$refs.confirmBtn.stop(),t.abrupt("return");case 9:if(u){t.next=13;break}return e.$util.msg("请输入密码"),e.$refs.confirmBtn.stop(),t.abrupt("return");case 13:return t.next=15,e.$request("user","login",{username:n,pwd:u});case 15:i=t.sent,e.$refs.confirmBtn.stop(),1===i.status?e.loginSuccessCallBack(i.data):e.$util.msg(i.msg);case 18:case"end":return t.stop()}}),t)})))()},navBack:function(){e.navigateBack()},checkAgreement:function(){this.agreement=!this.agreement},navToAgreementDetail:function(e){this.navTo("/pages/public/article?param="+JSON.stringify({module:"article",operation:"getAgreement",data:{type:e}}))}}};t.default=l}).call(this,n("543d")["default"])},b41b:function(e,t,n){},d040:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={mixLoading:function(){return n.e("components/mix-loading/mix-loading").then(n.bind(null,"9ab8"))}},r=function(){var e=this,t=e.$createElement;e._self._c},u=[]},efaa:function(e,t,n){"use strict";n.r(t);var a=n("d040"),r=n("4ea1");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("958f"),n("a22b");var i,c=n("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"75a4e1a4",null,!1,a["a"],i);t["default"]=o.exports}},[["48df","common/runtime","common/vendor"]]]);