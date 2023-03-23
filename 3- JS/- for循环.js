// for 循环
const array = [1, 2, 3]
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}
// for in 遍历对象
const obj = {
    name: "小明",
    age: 18
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

//  for of 遍历可迭代对象 : 数组, 字符串
for (const iterator of 'array') {
    console.log('iterator', iterator);
}

// do / while 