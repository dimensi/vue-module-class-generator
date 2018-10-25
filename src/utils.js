import camelCase from 'camelcase'

export const isString = val => val && typeof val === 'string' && val.length > 0
export const isMods = val => val && typeof val === 'object' && val !== null
export const getDefaultMainClass = (self) => self.$style[self.$options.name]
export const createJoinModeKey = (config) => config.prefix.modKey ? (key, value) => camelCase([key, config.prefix.modKey, value]) : (key, value) => camelCase([key, value])
export const createJoinModeBool = (config) => config.prefix.mod ? (key) => camelCase([config.prefix.mod, key]) : (key) => key
