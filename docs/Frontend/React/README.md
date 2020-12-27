# Hooks

`useEffect` 对于函数依赖，尝试将该函数放置在 `effect` 内，或者使用 `useCallback` 包裹；`useEffect/useCallback/useMemo`，对于 `state` 或者其他属性的依赖，根据 eslint 的提示填入 `deps`；如果不直接使用 `state`，只是想修改 `state`，用 `setState` 的函数入参方式 `setState(c => c + 1)` 代替；如果修改 `state` 的过程依赖了其他属性，尝试将 `state` 和属性聚合，改写成 `useReducer` 的形式。当这些方法都不奏效，使用 `ref`，但是依然要谨慎操作。
