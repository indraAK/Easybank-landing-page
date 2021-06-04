const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
   mode: 'production',
   output: {
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
   },
   module: {
      rules: [
         {
            test: /\.s?css$/i,
            use: [
               MiniCssExtractPlugin.loader, // Extract CSS into files
               'css-loader',
               'sass-loader'
            ],
         },
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      })
   ],
   optimization: {
      minimize: true,
      minimizer: [`...`, new CssMinimizerPlugin()]
   }
})