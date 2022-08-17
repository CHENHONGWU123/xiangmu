<template>
  <div>
    <h1>我是根组件</h1>
    <Header></Header>
    <!-- 路由组件显示的地方 -->
    <router-view></router-view>
    <!-- 在Home Search显示 在登录 注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 通知vuex发请求，获取数据存储仓库
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
