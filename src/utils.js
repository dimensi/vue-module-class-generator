export const isString = val => val && typeof val === 'string' && val.length > 0
export const isMods = val => val && typeof val === 'object' && val !== null
export const getDefaultMainClass = (self) => self.$style[self.$options.name]
const firstUpperCase = (text) => text.substring(0, 1).toUpperCase() + text.substring(1)
const firstLowerCase = (text) => text.substring(0, 1).toLowerCase() + text.substring(1)
export const camelCase = (inputs) => inputs.reduce((acc, text, i) => {
  if (i === 0) return acc + firstLowerCase(text)
  return acc + firstUpperCase(text)
}, '')
export const createJoinModeKey = (config) => config.prefix.modKey ? (key, value) => camelCase([key, config.prefix.modKey, value]) : (key, value) => camelCase([key, value])
export const createJoinModeBool = (config) => config.prefix.mod ? (key) => camelCase([config.prefix.mod, key]) : (key) => key
