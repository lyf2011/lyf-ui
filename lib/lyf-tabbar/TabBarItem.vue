<!-- TabBarItem -->
<template>
  <div class='tab-bar-item' @click="clickItem">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="iconActive"></slot>
    </div>
    <div :style="{color:styleColor}">
      <slot name="text">首页</slot>
    </div>
  </div>
</template>

<script>

export default {
  inject: {
    activeColor: {
      default: "#ff5777"
    },
    normalColor: {
      default: "#000000"
    },
  },
  props: {
    path: {
      type: String,
      required: true,
      default() {
        return ''
      }
    }
  },
  components: {},
  data() {
    return {
    };
  },
  computed: {
    isActive() {
      return this.path === this.$route.path
    },
    styleColor() {
      return this.isActive ? this.activeColor : this.normalColor
    }
  },
  watch: {},
  methods: {
    clickItem() {
      this.$router.replace(this.path)
    }
  },
  created() {

  },
  mounted() {

  },
}
</script>
<style scoped src="../../static/tabbar/tabbaritem.css"></style>