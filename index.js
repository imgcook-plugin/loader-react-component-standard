const toCamel = require('./utils/toCamel')

const imports = `import React, { Component } from 'react';\nimport './style.css';\n\n`;
const regex = /"(\.\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|][\.png|\.jpg])"/img;

/**
 * @param fileValue: 文件内容，生成的代码
 * @param option: { filePath, index, config }
 */
const loader = async (fileValue, option) => {

  if (
    option.item.panelName === 'index.js' &&
    option.moduleData.dsl === 'react-taobao-standard'
  ) {
    const filePath = option.filePath;
    const componentName = toCamel(filePath.slice(filePath.lastIndexOf('/') + 1));

    fileValue = fileValue
      .replace('DvcComponent', componentName)    // 修改组件名称
      .replace('React.Component', 'Component')
      .replace(/ReactDOM.render(.*);/, '')       // 删除 ReactDOM.render 代码
      .replace(regex, 'require(\'$1\')');        // 将引用本地的图片路径修改为 require('图片路径')

    fileValue = `${imports}${fileValue}\nexport default ${componentName};`
  }

  return fileValue;
}

module.exports = (...args) => {
  return loader(...args).catch(err => {
    console.log(err);
  });
};