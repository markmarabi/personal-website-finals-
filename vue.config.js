const path = require('path')

module.exports = {
  outputDir: 'dist',
  assetsDir: 'assets',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}

