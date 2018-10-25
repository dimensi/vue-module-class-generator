import { isMods, getDefaultMainClass, isString, createJoinModeKey, createJoinModeBool } from './utils'

export const createGenerator = (config) => {
  const joinModeKey = createJoinModeKey(config)
  const joinModeBool = createJoinModeBool(config)

  return function generator (mainClass, mods) {
    const classes = {
      main: mainClass,
      mods,
    }

    if (!mainClass && !mods) {
      return getDefaultMainClass(this)
    }

    if (isString(mainClass) && !mods) {
      return mainClass
    }

    if (isMods(mainClass) && !mods) {
      classes.main = getDefaultMainClass(this)
      classes.mods = mainClass
    }

    return Object.keys(classes.mods).reduce(
      (acc, key) => {
        if (classes.mods[key] && typeof classes.mods[key] === 'boolean') {
          acc.push(this.$style[joinModeBool(key)])
        }
        if (classes.mods[key] && typeof classes.mods[key] === 'string') {
          acc.push(this.$style[joinModeKey(key, classes.mods[key])])
        }
        return acc
      },
      [classes.main]
    )
  }
}
