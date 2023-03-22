# sessionStorage, cookie 和 localStorage

-   都是客户端存储数据的方式

1. 存储大小
    - cookie: 4k
    - sessionStorage 和 localStorage: 5M 以上
2. 有效期
    - cookie: 可以设置有效期,若没有设置有效期,浏览器关闭就失效了;
    - sessionStorage: 仅在当前浏览器窗口关闭之前有效.
    - localStorage: 如果不手动删除,永久有效
3. 作用域
    - cookie: 所有同源窗口中都是有效的
    - sessionStorage: 仅在同一个浏览器窗口下有效
    - localStorage: 同一浏览器,所有同源窗口有效
4. 通信
    - cookie: 是在浏览器和 服务器之间来回传递的
    - localStorage 和 sessionStorage: 仅在客户端保存
5. 场景
    - cookie: 判断用户是否登录过网站,以便实现下次自动登录 或记住密码
    - sessionStorage: 敏感账号一次性登录.
    - localStorage: 用于长期登录.
