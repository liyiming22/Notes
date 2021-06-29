# This is JavaScript notes
## ESM vs CJS
### 相互引用
1. `ESM` 模块只能 `import` 而不能 `require`。

2. `ESM` 模块可以 `import` `CJS` 模块，但是只能通过*默认导入*的模式，比如`import _ from 'lodash'`，而不能使用声明式的导入方式，比如 `import {shuffle} from 'lodash'`。(That’s because CJS scripts compute their named exports as they execute, whereas ESM’s named exports must be computed during the parsing phase.
)

3. `ESM` 模块可以 `require` `CJS` 模块，包括声明式导出的，但是依然会有很多问题，类似 Webpack 或者 Rollup 这样的工具甚至不知道该怎么出处理 `ESM` 里的 `require` 代码。

4. Node 默认支持的是 `CJS` 标准，你需要选择 `.mjs` 这样的后缀或者在 `package.json` 文件中设置 `"type": "module"` 才能开启 `ESM` 模式。通过这种方式开启的话，如果有 `CJS` 规范的文件，就需要将后缀改成 `.cjs`。

### 加载
`CJS` 中的 `require` 是同步的，他不会返回一个 `promise` 或者是执行一个回调函数。`require` 从磁盘或者网络中读取文件然后立即执行。

`ESM` 中的模块 `loader` 异步加载模块，首先解析 `import` 和 `export` 而不是去执行，在解析阶段，模块 `loader` 可以在声明式的 `import` 中检测错误并且抛出而不运行任何依赖的代码。

The ESM module loader then asynchronously downloads and parses any scripts that you imported, and then scripts that your scripts imported, building out a “module graph” of dependencies, until eventually it finds a script that doesn’t import anything. Finally, that script is allowed to execute, and then scripts that depend on that are allowed to run, and so on.

ES 模块中所有的依赖是并行下载，最后按顺序执行。

### 差异
`CJS` 不能 `require` `ESM` 最大的原因是 `CJS` 不支持 Top-level await。


```javascript
(async () => {
    const {foo} = await import('./foo.mjs');
})();
```

### ES 模块中实现 `require`
```javascript
import { createRequire } from 'module'; 
const require = createRequire(import.meta.url);  
const {foo} = require('./foo.cjs');
```

## Promise
`Promise.catch` 只是 `promise.then(undefined, onRejected);` 方法的一个别名。也就是说，这个方法用来注册当 `promise` 对象状态变为 `Rejected` 时的回调。

静态方法 `Promise.resolve(value)` 可以认为是 `new Promise()` 方法的快捷方式。
```javascript
Promise.resolve('foo');

new Promise((resolve) => { resolve('foo') });
```


每次调用 `then` 方法都会返回一个**新** `promise` 对象。


## 对象
### Js 对象的两种属性
数据属性（_data properties_）和访问器属性（_accessor properties_）
### Data properties
- `configurable`: 默认为 `true`。当 `configurable` 为 `false` 时，表示修饰的属性不可被删除、更改，不能被转化为访问器属性。(注意此操作不可逆，并且内部属性除了 `writable` 之外再使用 `Object.defineProperty` 会抛出错误)

- `enumerable`：默认为 `true`，在 `for-in` 循环中 return。

- `writable`：默认为 `true`。

- `value`

::: danger
注意，以上所说的默认为 `true` 是字面量定义对象属性的时候。如果通过 `Object.defineProperty` 定义的属性，均为 `false`。
:::

```javascript
const test = {}
Object.defineProperty(test, 'name', {
    value: 333
})
```
### Accessor properties
对象只有 `getter` 的属性无法被改写，在非严格模式下会被忽略，严格模式下会抛出错误。

对象只有 `setter` 的属性无法被读取，在非严格模式下会返回 `undefined`，严格模式下会抛出错误。
### 合并对象
```javascript
const dest = {}
const res = Object.assign(dest, { id: 1 })
console.log(res === dest)   // true
```

## `Promise.resolve` vs `new Promise(resolve => resolve())`

> The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.

1. 如果传入的值是一个 `Promise`，那么回调的方式会产生两次额外的 tick，看以下代码:

```javascript
const p = new Promise(resovle => setTimeout(resovle));

new Promise(resolve => resolve(p)).then(() => {
  console.log("tick 4");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
}).then(() => {
  console.log("tick 3");
})

tick 1
tick 2
tick 4
tick 3
```

```javascript
const p = new Promise(resolve => setTimeout(resolve));

Promise.resolve(p).then(() => {
  console.log("tick 4");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
}).then(() => {
  console.log("tick 3");
});

tick 4
tick 1
tick 2
tick 3
```

如果传入 `Promise.resolve()` 值为一个 `Promise`，那么 `Promise.resolve(value) === value`

2. 如果传入一个 `undefined` 值，`Promise.resolve` 会以同步的方式抛出错误，而回调的形式会返回一个 `rejected` 的 `Promise`。
```javascript
function someFunction(someObject) {
  someObject.resolved = true;
  return Promise.resolve(someObject);
}

function someFunction(someObject) {
  return new Promise(function(resolve) {
    someObject.resolved = true;
    resolve(someObject);
  });
}
```

参考 [stackoverflow](https://stackoverflow.com/questions/26711243/promise-resolve-vs-new-promiseresolve)
参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
