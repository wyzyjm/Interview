/* 
    for in 遍历可枚举:
        对象
        数组
 */
const object = {
    name: "小明",
    age: 18
}
// const arr = [1, 2, 3]
for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key]
        console.log("element", element)
    }
}
