/**
 * Created by charles on 2018/3/21.
 */
const fs = require('fs');
const path = require('path');
const pluginName = 'HDPlugin';
const px2remLoaderFile = require.resolve('px2rem-loader')
const _ = require('lodash');
let inlineScript = fs.readFileSync(path.resolve(__dirname, 'hd.js'), 'utf-8')

class HDPlugin {
  constructor(options = {}) {
    // default options
    this.options = {
      designWidth: 375,
      ...options
    };
    inlineScript = inlineScript.replace('baseDpr', 1).replace('remUnit', 100);
  }

  // 动态注入 px2rem-loader
  injectPx2remLoader(resource, loaders) {
    const REGEX = /\/node_modules\/(?:[\.\w]+@)?css-loader\//
    const idx = _.findIndex(loaders, path => REGEX.test(path.loader.replace(/\\/g, '/')))
    const isInNodeModules = resource.includes('/node_modules/')
    if (idx === -1 || isInNodeModules) return;
    loaders.splice(idx + 1, 0, {
      loader: px2remLoaderFile,
      options: {
        remUnit: 75 / 2 * this.options.designWidth / 375,
        threeVersion: true
      },
    })
  }

  apply(compiler) {

    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(pluginName, (data, cb) => {
        const headRegExp = /(<\/head\s*>)/i;
        data.html = data.html.replace(headRegExp, match => '<script type="text/javascript">'+ inlineScript + '</script>' + match);
      });
    });
    compiler.hooks.normalModuleFactory.tap(pluginName, (data) => {
      data.hooks.afterResolve.tapAsync(pluginName, (compiler, callback) => {
        this.injectPx2remLoader(compiler.resource, compiler.loaders);
        callback()
      })
    });
  }
}


module.exports = HDPlugin;
