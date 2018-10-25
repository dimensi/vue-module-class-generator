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
    const conf = {
      ...defaultConfig,
      ...config,
      prefix: {
        ...defaultConfig.prefix,
        ...config.prefix,
      },
    }
    this[config.methodName] = createGenerator(conf)
  },
})
