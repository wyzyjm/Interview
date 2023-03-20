# ES6

1. 变量声明
   - let, const
   - 都是声明变量, 都是块级作用域, 
   - 区别就是let声明的值可以被改变, const不行, 但这也不是绝对的, 对于复杂数据类型, 对象数组来说, 还是可以改变的, 因为变量指向不变
   - 使用过程中要注意暂时性死区, 没有变量提升, 在声明之前使用的话 就会报错.
2. 展开运算符
3. 解构赋值
   - 可以解构对象,数组, 从众多的属性中,取出部分属性
   - 比如ajax请求结构, 取 data, massage, status等.
   - 解构props
4. 模板字符串
   - 让参数 拼接变得更简单方便, 比如拼接一个文件路径 或 url带参数等
5. 对象的新方法
   - object.keys(): 将key转化为数组
   - object.values(): 将value 转化为数组
   - object.entries(): 将对象转化为数组形式
6. 数组的新方法
   - 刚提到的方法数组 也都可以使用
   - 常用
       - shift():前删 
       - unShift(): 前加
       - pop(): 后删
       - push():后加
       - splice(start,length,value): 随意删,随意加,随意替换
       - sort(): 排序
       - reverse() : 反转
       - join(): 转字符串
   - 遍历:
       - forEach(): 没有返回值
       - map(): 有返回值
       - reduce(): 用法就多了, 它每次循环都能拿到上一次的结果, 初始化的值也可以是任意的类型
       - filter(): 过滤, 举个简单的例子, 任务list的展示,只展示未完成的任务,
       - find(): 查找符合条件的一项, 找到返回该项,找不到就是undefined
       - findIndex(): 也一样,找索引的
       - some(): 查找有符合条件的没,返回值为 boolean值
       - every(): 是否都符合条件, 返回值为boolean
7. Promise 
    - 构造函数, 本身有三种状态, 初始pedding, 成功 , 失败 
    - 改变状态的方法 有 Promise.resolve('成功值'), Promise.reject('失败值'), 状态一旦改变,是不可逆的.
    - 常用来 new Promise实例来 接收异步任务的结果
        - 在new 实例的时候,接受一个函数,在函数中执行异步操作, 然后还有两个参数, resolve 和reject 可以用来返回执行结果
    - 实例然后通过.then方法来捕获 执行结果, 通过接收两个回调函数, 成功 失败
    - 还可以通过.catch来捕获错误
    - 实际应用中最多的是用来处理http请求, 然后结合ES7的 async 和 await来使用.
    - 如果遇到多个请求同时发送来拿结果, 通常会使用Promise.all()来封装, 
        - 全成功就以数组的形式拿到结果, 
        - 如果有失败, 就是第一个失败的结果
    - 然后Promise. race等等其它的方法, 有需要再具体查MDN文档
8. async / awiat
    - async 返回一个promise resolve包装的值.
    - await 后面通过是一个表达式, 通常是一个异步表达式
9.  proxy : 代理
    - Vue3的复杂类型数据都是通过proxy代理的.