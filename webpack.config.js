module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'athens.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            js: 'babel-loader'
          }
        }
      }

    ]

  },
  // devServer: {
  // //   host: 127.0.0.1,
  //   hot: true,
  //   inline: true,
  //   port: 80
  // }
}