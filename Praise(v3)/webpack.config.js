const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path=require('path');
const config = {
    entry: {
      index:['./public/x-praise.js','./src/thumbdev.js'],
      style:'./src/index.css'
    },
    output: {
        filename:'[name]-[hash:5].js',
        path:path.join(__dirname,"./static/")
      },
     
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
      },
      plugins: [
       
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'index.html',
          template: 'views/index.html'
        }),new ExtractTextPlugin("index.[hash:5].css")
      ]
  };
  
  module.exports = config;