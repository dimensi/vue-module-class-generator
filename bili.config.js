
module.exports = {
  input: 'src/index.js',
  filename: 'index[suffix].js',
  format: ['es', 'cjs'],
  banner: true,
  plugin: [
    require('rollup-plugin-clear')({
      targets: ['./dist/'],
    }),
  ],
  exports: 'named',
}
