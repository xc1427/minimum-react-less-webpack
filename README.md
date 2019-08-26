# Minimum React + less + webpack boilerplate

## build time
### 关于 webpack
那么至少有 webpack webpack-cli，一个是 core，一个提供命令行。因为使用了 webpack，所以用不到 @babel/cli。

```
yarn add --dev webpack
yarn add --dev webpack-cli
```
### 关于 babel-loader

需要 loader 进行编译
```
yarn add --dev @babel/core
yarn add --dev babel-loader
yarn add --dev babel-preset-env
yarn add --dev babel-preset-react
```

.babelrc 中指明 presets
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
}
```

### 关于 style 方面的 loader

```
yarn add --dev style-loader
yarn add --dev less-loader
yarn add --dev css-loader
yarn add --dev less
```

注意在 webpack.config.js 中配置的顺序是 `['style-loader', 'css-loader', 'less-loader']`。

- 先由 less-loader 把 less 编译成为 css;
- 再由 css-loader 把 css 文件中的样式编译为字符串;
- 再由 style-loader 把样式字符串写到 html 文件里面

注意 css modules 是在 css-loader 里面配置的，使用如下配置：

```js
options: {
  modules: {
    localIdentName: '[name]__[local]__[hash:5]',
  },
},
```

## runtime
React 相关依赖：

```
yarn add react
yarn add react-dom
```

## fixtures
public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
<script src="dist.js"></script>
</html>
```

src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.less';

const App = () => {
  return (
    <p className={styles.container}>
      <h3>Minimum React Demo App</h3>
    </p>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

src/styles.less
```less
.container {
  text-align: center;
}
```

安装一个 web 服务器（比如 http-server） 伺服。

chrome console 里面勾选 _disable cache_ .

## caution
module.rules 里的 test 应使用正则表达式。