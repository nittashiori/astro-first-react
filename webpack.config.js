export default (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
    ],
  });
  return defaultConfig;
};