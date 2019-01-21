const resolve = require("path").resolve;
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: resolve(__dirname, "../lib/markdown-compiler"),
            options: {
              raw: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
};
