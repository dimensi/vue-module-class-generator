import { installMixin } from './mixin'

export {
  installMixin as classMixin,
}

export default {
  install (Vue, config) {
    Vue.mixin(installMixin(config))
  },
}
