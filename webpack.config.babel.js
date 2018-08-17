const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js', 
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: 'webpackNumbers', // this exposes the library bundle available as a global variable named webpackNumbers when imported
    libraryTarget: 'umd', // make sure the library compatible with other environments options: var(default) this window umd
    globalObject: 'this',
    // libraryExport: 'default',
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}
