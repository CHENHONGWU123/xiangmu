import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
// 引入路由
import router from '@/router'
// 引入vuex 仓库
import store from '@/store'
//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav";

//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);

// 引入mock数据
import "@/mock/mockServe";


new Vue({
  render: h => h(App),
  // 注册路由：底下写法KV 一致省略V 【router小写】
  router,
  //注册vuex仓库
  store,

}).$mount('#app')
