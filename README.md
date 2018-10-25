# vue-module-class-generator
Module class helper generator for vue css modules

## Install
yarn
```
yarn add vue-module-class-generator
```

npm
```
npm i vue-module-class-generator
```

## Usage
### Syntax
```ts
interface Mods {
  [key: string]: boolean | string
}

c(mainClass?: string | Mods, mods?: Mods)
```

### Install as vue plugin
```js
import Vue from 'vue'
import ClassGenerator from 'vue-module-class-generator'

Vue.use(classGenerator, {
  methodName: 'c', // default
  prefix: {
    mod: '', // if 'is' === isActive else 'active'
    modKey: '', // if is === colorIsRed else colorRed
  },
})
```
### Mixin
```js
import { classMixin } from 'vue-module-class-generator'

export default {
  name: 'block',
  mixins: [classMixin(config)]
}
```

### Use in template
```html
<template>
  <div :class="c($style.block, { active, color })">
  </div> <!-- result :class="[$style.block, $style.active, $style.colorRed]" -->
</template>

<script>
import { classMixin } from 'vue-module-class-generator'
export default {
  name: 'block',
  props: {
    active: Boolean,
    color: String,
  },
  mixins: [classMixin()]
}
</script>

<style module>
.block {
  display: block;
}
.active {
  background-color: blue;
}
.colorRed {
  color: red;
}
</style>
```

## Options
`methodName: string` - set methodName in component
```js
import { classMixin } from 'vue-module-class-generator'
export default {
  mixins: [classMixin(), classMixin({ methodName: 'gen' })],
  mounted() {
    typeof this.c === 'function' // true
    typeof this.gen === 'function' // true
  }
}
```

`prefix.mod: string` - set prefix to boolean mode
```js
// prefix.mod = 'is'
c($style.element, { active: true }) // [$style.element, $style.isActive]
// prefix.mod = ''
c($style.element, { active: true }) // [$style.element, $style.active]
```

`prefix.modKey: string` - set prefix to key mode
```js
// prefix.modKey = 'is'
c($style.element, { color: 'red' }) // [$style.element, $style.colorIsRed]
// prefix.modKey = ''
c($style.element, { color: 'red' }) // [$style.element, $style.colorRed]
```