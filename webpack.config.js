var config = {
   entry: './main.js',

   output: {
      path: __dirname,
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSSW
            }
          ]
        }
      ]
    }
}

module.exports = config;
