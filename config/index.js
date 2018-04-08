'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: {},

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    // host: 'ygtp4k.natappfree.cc',
    port: 8084, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    proxyTable: {
       '/wxToken':{//此处并非一定和url一致。
          //cd myGitRepository/repository/vuex-axios-weui/vuex-axios-weui/node_JS-SDK_signature node index.js
          // target:'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=ww0a9529e47596a49e&corpsecret=Bf12qqT5h6m8Xh7WpBJ2dgDA9Np2OCjBcz9YADZWqEE',
          target:"http://localhost:1342",
          changeOrigin:true,//允许跨域
          pathRewrite:{
            '^/wxToken': ''
          }
        }
    },

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
