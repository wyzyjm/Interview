// Write a program to find duplicate in a string array.
// 编写一个程序来查找字符串数组中的重复项。
// string[] strArray = ["Sunday"， "Monday"， "Tuesday"， "Wednesday"， "Sunday"， "Monday"];


// 3.	Write a program to find duplicate in a string array.
// string[] 
const strArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Sunday", "Monday"];

const newArr = strArray.reduce((pre, cur) => {
    // pre.push(cur) push返回数组的长度
    console.log('cur', cur, pre.push(cur));
    return pre.includes(cur) ? pre : pre.concat(cur)
}, [])
console.log('newArr', newArr);