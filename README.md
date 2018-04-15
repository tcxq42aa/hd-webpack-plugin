# High-definition processing for HtmlWebpackPlugin
A webpack plugin to add High-definition processing when using HtmlWebpackPlugin.

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
    new HDWebpackPlugin({
      exclude: /index\.html/, // 不需要处理的资源的正则表达式
      designWidth: 375 // 设计稿尺寸（px）
    })
  ]
}
```

## Options
|    Name     |      type      |   Default  | Description
| :--------:  | :------------: | :--------: | :--------
| designWidth | &lt;Number&gt; |  375       | 设计稿宽度（px）
| exclude     | &lt;RegExp&gt; |  null      | 不需要处理的资源的正则表达式


## Example Webpack Config
```js
const HDWebpackPlugin = require('hd-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// sample WebPack config
const webpackConfig = {
  entry: {
    h5: './src/h5/index.js',
    pc: './src/pc/index.js'
  },
  output: {
    filename: '[name].bundle.js',
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
    new HDWebpackPlugin({
      designWidth: 375,
      exclude: /pc\/.html|pc\.css/, // pc页面不需要使用高清方案
    }),
    new HtmlWebpackPlugin({
      template: './src/h5/index.html',
      chunks: ['h5']
    }),
    new HtmlWebpackPlugin({
      template: './src/pc/index.html',
      chunks: ['pc']
    }),
  ]
}

```