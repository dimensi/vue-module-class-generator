import { createGenerator } from './generator'

export const installMixin = (config) => ({
  create () {
    this[config.methodName] = createGenerator
  },
})
