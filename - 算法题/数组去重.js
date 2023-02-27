// Write a program to find duplicate in a string array.
// 编写一个程序来查找字符串数组中的重复项。
// string[] strArray = ["Sunday"， "Monday"， "Tuesday"， "Wednesday"， "Sunday"， "Monday"];


// 3.	Write a program to find duplicate in a string array.
// string[] 
const strArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Sunday", "Monday"];

strArray.reduce((total, pre, cur) => {
    const isArray = Array.isArray(total)
    return isArray ? total.concat(cur)
}, [])