module.exports = {
  // 开发环境下的代理地址
  devServer: {
    proxy: 'http://localhost:3000'
  },
  // 静态资源打包地址
  outputDir: '../public/admin',
  // HTML 打包地址
  indexPath: process.env.NODE_ENV === 'production'
    ? '../../views/admin.tpl'
    : 'admin.tpl',

  // 部署应用包时的基本 URL 
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        timers: require.resolve("timers-browserify")
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  }
}
