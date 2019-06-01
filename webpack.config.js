const path = require('path');

const config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/lib',
    library: 'Session'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['babel-plugin-add-module-exports']
          }
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  }
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.output.filename = 'sessions.js';
    config.devServer = {
      contentBase: config.output.path
    };
  }

  if (argv.mode === 'production') {
    config.output.filename = 'sessions.min.js';
  }

  return config;
};
