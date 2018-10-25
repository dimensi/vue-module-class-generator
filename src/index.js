import { installMixin } from './mixin'

const defaultConfig = {
  methodName: 'c',
  prefix: {
    mod: '',
    modKey: '',
  },
}

export {
  installMixin as classMixin,
}

export default {
  install (Vue, config = defaultConfig) {
    Vue.mixin(installMixin(config))
  },
}
