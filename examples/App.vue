<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar :tabList="tabList" />
  </div>
</template>

<script>
import {TabBar} from "lyf-lib"
export default {
  components: {
    TabBar
  },
  data() {
    return {
      tabList: [
        {
          path: '/home',
          icon: require("./assets/img/tabbar/home.svg"),
          icon_active: require("./assets/img/tabbar/home_active.svg"),
          text: "首页"
        },
        {
          path: '/category',
          icon: require("./assets/img/tabbar/category.svg"),
          icon_active: require("./assets/img/tabbar/category_active.svg"),
          text: "分类"
        },
        {
          path: '/cart',
          icon: require("./assets/img/tabbar/cart.svg"),
          icon_active: require("./assets/img/tabbar/cart_active.svg"),
          text: "购物车"
        },
        {
          path: '/profile',
          icon: require("./assets/img/tabbar/profile.svg"),
          icon_active: require("./assets/img/tabbar/profile_active.svg"),
          text: "我的"
        },
      ]
    }
  }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
