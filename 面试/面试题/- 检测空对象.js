// 检测空对象
const obj = {}

// const isEmpty = Object.keys(obj).length === 0
const isEmpty = JSON.stringify(obj) === '{}'
console.log('isEmpty', isEmpty);

