const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports  = {
    mode:'production',
    entry : { 
        index: './src/index.js',
       // brands: './node_modules/@fortawesome/fontawesome-free/js/brands.min',
       // solid: './node_modules/@fortawesome/fontawesome-free/js/solid.min',
       // fontawesome: './node_modules/@fortawesome/fontawesome-free/js/fontawesome.min'
     },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname,'dist')
    },
    module:{
        rules :[
            {
                test: /\.html$/i,
                use:'html-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}

