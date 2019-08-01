# **loader-react-component-standard**


## 介绍
将 imgcook React 开发规范导出的 React 组件标准化

## 安装
<font color="#333">安装依赖 imgcook-cli</font>
```
imgcook install plugin --name @imgcook/loader-react-component-standard
```

## 说明
* 默认会导入 style.css ，建议开发者可根据需求，通过打包器进行单位转换
* 组件名称会使用当前所在的目录名称，目录名称建议使用小写横线命名，如：card-list

## 示例
imgcook 导出的代码
```javascript
class DvcComponent extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="bd">
          <img
            className="floorBg"
            src={"./images/img_9990_0_3.png"}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<DvcComponent />, document.getElementById('container'));
```

标准化后
```javascript
import React, { Component } from 'react';
import './style.css';

class CardList extends Component {
  render() {
    return (
      <div className="box">
        <div className="bd">
          <img
            className="floorBg"
            src={require('./images/img_9990_0_3.png')}
          />
        </div>
      </div>
    );
  }
}

export default CardList;
```

## 使用
```
# 拉取模块代码
imgcook pull <moduleid> --path <path>
```
### 组件名称会使用 path 的目录名称
示例 <br />
```
imgcook pull 12345 --path card-list
```
输出
```javascript
class CardList extends Component { ... }
```
