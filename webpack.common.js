const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'images/[hash][ext]'
   },
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: 'html-loader',
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Easybank landing page',
         template: './src/index.html'
      })
   ]
}