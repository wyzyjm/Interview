// 检测空对象
const obj = {}

// const isEmpty = Object.keys(obj).length === 0    // 方法一
const isEmpty = JSON.stringify(obj) === '{}'        // 方法二


console.log('isEmpty', isEmpty);

