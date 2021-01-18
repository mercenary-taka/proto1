module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: '/proto1',
  devServer: {
    port: 8081,
    disableHostCheck: true
  }
};
