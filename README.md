# High-definition processing for HtmlWebpackPlugin
A webpack plugin to add High-definition processing when using HtmlWebpackPlugin.
[移动端开发自适应解决方案（阿里团队高清方案）](https://www.jianshu.com/p/07669cb3e7c5)

![MIT License](https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667)

## Installation
```
npm i hd-webpack-plugin --save-dev
```

## Usage
```js
const HDWebpackPlugin = require('hd-webpack-plugin')

// webpack config
{
  plugins: [
    new HDWebpackPlugin()
  ]
}
```

## Example Webpack Config
This is a modified version of [WebPack's Plugin documentation](https://webpack.js.org/concepts/plugins/) that includes the Clean Plugin.

```js
const HDWebpackPlugin = require('hd-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

// sample WebPack config
const webpackConfig = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HDWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}

```