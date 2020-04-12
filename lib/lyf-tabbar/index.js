import TabBar from './TabBar.vue';

TabBar.install = function (Vue) {
  Vue.component(TabBar.name, TabBar);
}

export default TabBar;