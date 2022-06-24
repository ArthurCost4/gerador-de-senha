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

/* 
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ //regras dos modulos webpack
            //expressoes regulares
            exclude: /node_modules/,
            test: /\.js$/, //testar qual que é o arquivo que vc vai ler/analisar e formar o bundle/
            use: { //o que que ele vai usar
                loader: 'babel-loader',
                options: { //presets, pode ser um ou mais presets por isso o array
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
}
*/