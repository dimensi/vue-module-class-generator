export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        c (mainClass, mods) {
          if (mainClass && typeof mainClass === 'object') {
            mods = mainClass
            mainClass = this.$style[this.$options.name]
          }
          if (!mainClass) mainClass = this.$style[this.$options.name]
          if (!mods || !Object.keys(mods).length) return mainClass
          return Object.keys(mods).reduce(
            (acc, key) => {
              if (mods[key] && typeof mods[key] === 'boolean') acc.push(this.$style[key])
              if (mods[key] && typeof mods[key] === 'string') {
                acc.push(this.$style[camelCase([key, mods[key]])])
              }
              return acc
            },
            [mainClass]
          )
        },
      }
    })
  }
}
