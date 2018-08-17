const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/app.js'
  ],

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          'less-loader', // compiles Less to CSS
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            } // compiles Less to CSS
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    })
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: './dist'
  }
};
