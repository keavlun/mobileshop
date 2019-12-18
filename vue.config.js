module.exports = {
  configureWebpack:{
    reslove:{
      extensions: [],
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}