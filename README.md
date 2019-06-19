
## 文档地址 ： http://reactcommunity.org/react-transition-group

## Transition
### props 

```
    # children
    type: Function | element

    @param  state :  'entering' | 'entered' | 'exiting' | 'exited'

    {state => (
        <MyComponent className={`fade fade-${state}`} />
    )}

    {state => (
        <div
            style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}
        >
        </div>
    )}

```


```
    # timeout

    # in 是否显示
    type: boolean
    default: false

    # appear
```

```
    # mountOnEnter  
    ## 默认子组件随着transition一起被加载，当mountOnEnter为true时，首次加载会对子组件做一定的延时
    ## 首次加载完成后，即使exited，也处于mounted状态[占位]。除非使用unmountOnExit
    type: boolean
    default: false

    # unmountOnExit
    type: boolean
    default: false
```

```
    监听 
    onEnter
    onEntered
    onEntering
    onExit
    onExited
    onExiting
```


## CssTransition  -- 基于transition ，参数大部分相同
### 利用css来进行变化
### props 
### 发现使用这种方法时， 首次加载可能会出现问题。比如首次加载 in={false}， 但是仍然显示，这是因为此时子组件尚未添加对应的class样式。添加 mountOnEnter 或者 unmountOnExit可以解决问题

```
    # classNames

    classNames={{
        appear: 'my-appear',
        appearActive: 'my-active-appear',
        appearDone: 'my-done-appear',
        enter: 'my-enter',
        enterActive: 'my-active-enter',
        enterDone: 'my-done-enter',
        exit: 'my-exit',
        exitActive: 'my-active-exit',
        exitDone: 'my-done-exit',
    }}

    或者 
    import styles from './styles.css';


    classNames={{ ...styles }}
```