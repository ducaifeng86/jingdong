const { defineConfig } = require('@vue/cli-service')
const CompressionWebpackPlugin = require('compression-webpack-plugin') //引入插件
const IS_PROD = ["production"].includes(process.env.NODE_ENV)// 生产环境
const externals = {// externals
  vue: "Vue"
}
const cdn = {// CDN外链，会插入到index.html中
  dev: {// 开发环境
    css: [],
    js: []
  },
  build: {// 生产环境
    css: [],
    js: [
      "https://cdn.bootcdn.net/ajax/libs/vue/3.2.31/vue.runtime.global.prod.min.js" 
    ]
  }
}
module.exports = {
  publicPath: "./",// 基本路径,相对路径
  outputDir: `${process.env.VUE_APP_OUTPUT_DIR}`,
  configureWebpack: config => {// 环境修改配置
    if (IS_PROD) {
      config.externals = externals
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,// 正在匹配需要压缩的文件后缀
          threshold: 10240,// 大于10kb的会压缩
          deleteOriginalAssets: false // 是否删除原文件
        })
      )
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {//添加CDN参数到htmlWebpackPlugin配置中
      if (IS_PROD) {
        args[0].cdn = cdn.build
      } else {
        args[0].cdn = cdn.dev
      }
      return args
    })
    // 配置图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end();
  }
}
