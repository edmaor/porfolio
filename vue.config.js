const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/projects/' : '/',
  transpileDependencies: true,
  outputDir: 'docs',
  chainWebpack: (config) => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .end();
  }
})
