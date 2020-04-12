<!-- TabBar -->
<template>
  <div class='tab-bar'>
    <tab-bar-item v-for="(tab, index) in tabList" :key="index" :path="tab.path">
      <template v-slot:icon><img :src="tab.icon"></template>
      <template v-slot:iconActive><img :src="tab.icon_active"></template>
      <template v-slot:text>
        <span>{{tab.text}}</span>
      </template>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  name:'TabBar',
  props: {
    tabList: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
  },
  components: {
    TabBarItem
  },
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  methods: {
  },
  created() {

  },
  mounted() {

  },
}
</script>
<style scoped src="../../static/tabbar/tabbar.css"></style>