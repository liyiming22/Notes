# Hooks
## 技巧&总结
###  使用 `useCallback` 最好开启 eslint
`useEffect` 对于函数依赖，尝试将该函数放置在 `effect` 内，或者使用 `useCallback` 包裹；`useEffect/useCallback/useMemo`，对于 `state` 或者其他属性的依赖，根据 eslint 的提示填入 `deps`；
### `useState` vs `useReducer`
如果不直接使用 `state`，只是想修改 `state`，用 `setState` 的函数入参方式 `setState(c => c + 1)` 代替；如果修改 `state` 的过程依赖了其他属性，尝试将 `state` 和属性聚合，改写成 `useReducer` 的形式。当这些方法都不奏效，使用 `ref`，但是依然要谨慎操作。
### `useState` vs `useRef`
- 当用 `useMemo`, `useCallback` 等API的时候，如果引用了 `useState`，就要把 `useState` 值作为 `deps` 传入，否侧由于 `useMemo`, `useCallback` 缓存了 `useState` 旧的值，无法得到新得值，但是 `useRef` 不同，可以直接读取/改变 `useRef` 里面缓存的数据。

- `useState` 同步改变 `state` 状态之后，无法获取最新的数据。而 `useRef` 可以。

```javascript
export default function App() {
  const [count, setCount] = useState(0)
  const addCnt = () => {
    setCount(count => count + 1)
    // 打印出来的永远都是上一次的 count
    console.log(count)
  }
  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={addCnt}>add</button>
    </div>
  );
}
```

```javascript
export default function App() {
  const count = useRef(0)
  const [, forceUpdate] = useState(null)
  const addCnt = useCallback(() => {
    count.current++
    // 因为 ref 的引用并没发生变化，所以这里需要强制刷新，否则会导致永远展示最初的 current 值
    forceUpdate(count.current)
    console.log(count.current)
  }, [])
  return (
    <div className="App">
      <span>{count.current}</span>
      <button onClick={addCnt}>add</button>
    </div>
  );
}
```