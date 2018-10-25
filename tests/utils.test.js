import { camelCase } from '../src/utils'

describe('test helpers', () => {
  test('camelcase', () => {
    expect(camelCase(['foo', 'bar'])).toBe('fooBar')
    expect(camelCase(['foo', 'bar', 'baz'])).toBe('fooBarBaz')
  })
})
