# Patterns
## 声明式编程
只需要描述 _这个组件长什么样子_ ，而不是去描述 _怎么样让这个组件长成这个样子_ 。
```jsx
<div>
  { 
    currentAuthorize === authorize
    ? <MatchComponent>
    : <NoMatchComponent>
  }
</div>
```
以上代码存在的问题：
- 系统中多个模块都需要权限控制，所以会出现代码的冗余
- 一旦权限判断逻辑需要改变，多处代码都需要作出更改

React 中使用声明式编程设计组件的好处：
- 减少了重复劳动
- 提高了代码的可维护性：只需要更改相关功能的代码，组件的代码不需要改动

 优化后的部分代码，api 设计部分可参考 react-route、antd pro 的 authorized 组件源码
```jsx
<Authorized 
    authorize={['admin','guest']}
    noMatch={<div>无权访问</div>}
/>
    <div>权限通过后显示的内容</div>
</Authorized> 
```

## 组合模式
```jsx
<Tab>
  <TabItem active={true} onClick={onClick}>One</TabItem>
  <TabItem active={false} onClick={onClick}>Two</TabItem>
  <TabItem active={false} onClick={onClick}>Three</TabItem>
</Tab>
```
 每次都需要手动传递一堆 `props`。可以使用 `React.Children.map` 和 `React.cloneElement` 来篡改 `Children`，最后渲染篡改后的 `Children` 就好了。
 ```jsx
 const newChildren = React.Children.map(this.props.children, (child, index) => {
  if (child.type) {
    return React.cloneElement(child, {
      active: activeIndex === index,
      onClick: () => setActiveIndex(index)
    })
  } else {
    return child
  }
})

return (
  <>
    { newChildren }
  </>
)

 <Tabs>
  <TabItem>One</TabItem>
  <TabItem>Two</TabItem>
  <TabItem>Three</TabItem>
</Tabs>
 ```
