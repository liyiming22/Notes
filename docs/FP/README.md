# Functional Programming

## 函数式编程的几个技术
- map & reduce
- pipeline（现在 JavaScript 也有 pipeline 语法糖了，只是还处于 stage - 1 阶段）
- recursing
- currying
- hoc

## Advantages
- Bugs-Free Code
- Efficient Parallel Programming
- Efficiency
- Supports Nested Functions
- Lazy Evaluation

::: tip
describe **what** to do rather than **how** to do
:::

由于没有循环体，少了临时变量，以及变量倒来倒去的逻辑

## 柯里化
把一个函数的多个参数分解成多个函数，然后把函数多层封装起来，每层函数返回一个函数去接收下一个参数。
```javascript
import _ from 'lodash'

const add = (a, b) => a + b
const curriedAdd = _.curry(add)
const plusOne = curriedAdd(1)
const plusTwo = curriedAdd(2)
```
简单实现一个 currying function
```javascript
function curry(fnc) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return fnc.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
```
或者采用闭包保存参数的方式, 更加通用，包装函数的参数长度可以不固定，实现了完美的延迟计算
```javascript
// demo function goes here...
const add = (...args) => args.reduce((a, b) => a + b)

function curry(fnc) {
  const args = []
  return function curried(...rest) {
    // 代表最后一次调用函数
    if (0 === reset.length)   return fnc(...args)
    args.push(...rest)
    return curried
  }
}
```
