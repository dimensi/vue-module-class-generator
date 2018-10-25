import { createGenerator } from '../src/generator'

const pseudoVueComp = {
  $options: {
    name: 'block',
  },
  $style: {
    block: 'BlockClass',
    element: 'element',
    active: 'active',
    isActive: 'isActive',
    colorIsRed: 'colorIsRed',
    colorRed: 'colorRed',
  },
}

const config = {
  prefix: {
    mod: '',
    modKey: '',
  },
}

const config2 = {
  prefix: {
    mod: 'is',
    modKey: 'is',
  },
}

describe('test generator', () => {
  const gen1 = createGenerator(config).bind(pseudoVueComp)
  const gen2 = createGenerator(config2).bind(pseudoVueComp)
  test('should return baseName', () => {
    expect(gen1()).toBe('BlockClass')
  })
  test('should return element class', () => {
    expect(gen1('element')).toBe('element')
  })
  test('should return baseName + mod by bool', () => {
    expect(gen1({ active: true })).toEqual([
      'BlockClass',
      'active',
    ])
    expect(gen2({ active: true })).toEqual([
      'BlockClass',
      'isActive',
    ])
  })
  test('should return element + mod by bool', () => {
    expect(gen1('element', { active: true })).toEqual([
      'element',
      'active',
    ])
    expect(gen2('element', { active: true })).toEqual([
      'element',
      'isActive',
    ])
  })
  test('should return baseName + mod with key', () => {
    expect(gen1({ color: 'red' })).toEqual([
      'BlockClass',
      'colorRed',
    ])
    expect(gen2({ color: 'red' })).toEqual([
      'BlockClass',
      'colorIsRed',
    ])
  })
  test('should return element + mod with key', () => {
    expect(gen1('element', { color: 'red' })).toEqual([
      'element',
      'colorRed',
    ])
    expect(gen2('element', { color: 'red' })).toEqual([
      'element',
      'colorIsRed',
    ])
  })
})
