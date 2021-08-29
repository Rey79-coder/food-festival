const webpack = require("webpack")
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist"
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: "static", // the report outputs to an HTML file in the dist folder
  })
],    
};