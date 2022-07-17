const path = require('path');//commonJS


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public', 'assets', 'js'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }]
    },
    devtool: 'source-map'
  };
  //SOUCER MAP SERVE PARA A GENTE LOCALIZAR AS LINHA DE CODIGO ORIGINAL E NA ONDE FORAM AFETADAS
