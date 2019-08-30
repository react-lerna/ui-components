module.exports = function (api) {
  api.cache(true);

  const presets = [ "@babel/preset-env", "@babel/preset-react", "minify" ];
  const plugins = [ 'babel-plugin-styled-components' ];
  const ignore = [  ];

  return {
    presets,
    plugins,
    ignore,
  };
};
