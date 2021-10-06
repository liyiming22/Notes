# 常见的问题

## [style-loader vs css-loader](https://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader)

`css-loader` 仅仅用来读取 css 文件，并不做任何处理:
```javascript
var css = require("css!./file.css");
// => returns css code from file.css, resolves imports and url(...) 
```

`style-loader` 获取到 css 样式文件并创建 `<style>` 标签将其插入到页面的 `<head>` 中去，使得我们写的样式生效。

## [file-loader vs url-loader](https://stackoverflow.com/questions/49080007/url-loader-vs-file-loader-webpack)

`file-loader` 会在构建过程中将文件 *复制* 到构建的文件夹中去，并将项目中所依赖到该文件的地方通过链接的形式替换。

`url-loader` 会将整个二进制文件内容以 base64 的形式插入到依赖该文件的地方，所以并不会产生额外的请求。可以在 webpack 配置过程中设置文件大小阈值，超过该阈值的会 fallback 到 `file-loader`。

