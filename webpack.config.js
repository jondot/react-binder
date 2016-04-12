module.exports = {
  entry: './binder.js',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015', 'stage-0'
          ]
        }
      }
    ]
  }
}

