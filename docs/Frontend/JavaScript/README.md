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