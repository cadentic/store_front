const proxyOptions = {
  target: `http://localhost:${process.env.BACKENDPORT}`,
  ws: false,
  changeOrigin: false
};

module.exports = {
  outputDir: "../backend/public",
  indexPath: "../resources/views/main-site.blade.php",
  productionSourceMap: false,

  css: {
    sourceMap: true
  },

  lintOnSave: false,

  pwa: {
    name: process.env.VUE_APP_NAME
  },

  devServer: {
    proxy: {
      "^/api": proxyOptions
    }
  }
};
