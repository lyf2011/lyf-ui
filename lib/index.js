import TabBar from './lyf-tabbar/index'

const components = [
  TabBar,
  //之后会添加更多的组件
]

function install (Vue) {
  components.map = (component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {
  install,
  TabBar,
}

export default {
  install,
  TabBar,
}