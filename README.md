[TOC]

# redux 状态管理

### redux 的基本使用

1. 安装redux

   ```npm i redux —save```

2. 新建store

   通过reducer建立，根据老的state和action (action.type) ,生成新的 state

   ![image-20180506112929170](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506112929170.png)

---

### react和redux的结合使用

* redux 只是同步的，处理异步的需要  redux-thunk 插件
  * ```npm i redux-thunk —save``` 
  * 使用 applyMiddleware 开启 thunk 中间件
  * Action可以返回函数，使用dispatch提交action

![image-20180506155049759](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506155049759.png)



![image-20180506155119469](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506155119469.png)



​	![image-20180506155143853](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506155143853.png)



![image-20180506155203356](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506155203356.png)



* 下载调试工具，并开启。

  * Chrome搜索 Redux DevTools 安装
  * 新建store的时候判断window.devToolsExtension
  * 调试窗的redux选项卡，实时看到state

  ![image-20180506163657164](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506163657164.png)

  ​	

  ![image-20180506163711704](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506163711704.png)

  ​

* 使用 react-redux 连接 react 和 redux

  * ```npm install react-redux --save ```   
  * 忘记subscribe，记住reducer，action和dispatch即可
  * React-redux提供Provider和connect两个接口来链接

  ​

* React-redux具体使用

  * Provider组件在应用最外层，传入store即可，只用一次
  * Connect负责从外部获取组件需要的参数
  * Connect可以用装饰器的方式来写

  ![image-20180506165147872](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506165147872.png)

  ​

![image-20180506165206021](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506165206021.png)



* 使用装饰器优化connect代码

  * Npm run eject弹出个性化配置

  * Npm install babel-plugin-transform-decorators-legacy插件

  * Package.json里babel加上plugins配置

    ![image-20180506165616387](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506165616387.png)

    ![image-20180506165632844](/var/folders/xl/7sk0rp350jn4_rdsyr3460v40000gn/T/abnerworks.Typora/image-20180506165632844.png)




# react-router4

