module.exports = function(api) {
  api.cache(true)

  const presets = ['@babel/preset-env', '@babel/preset-react', 'minify']
  const plugins = [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
  ]
  const ignore = []

  return {
    presets,
    plugins,
    ignore,
  }
}
