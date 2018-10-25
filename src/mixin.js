import { createGenerator } from './generator'

const defaultConfig = {
  methodName: 'c',
  prefix: {
    mod: '',
    modKey: '',
  },
}
export const installMixin = (config = defaultConfig) => ({
  create () {
    if (!this.$options.name) return
    this[config.methodName] = createGenerator
  },
})
