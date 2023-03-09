// 请用javascript写一个函数来实现以下要求:(限制时间:10分钟)
// a. input是一个int数组，output是一个新的int数组
// B .如果输入数组A =[2,1,5,9]，则输出数组B为[45,90,18,10]
// c .线索:
// B [0] = [1] * [2] * [3], 
// B [1] = [0] * [2] * [3], 
// B [2] = [0] * [1] * [3], 
// B [3] = [0] * [1] * [2]

function arrFn(arr) {
    return arr.map((item, index, array) => array.reduce((pre, cur) => cur === item ? pre : pre * cur, 1))
}
const arr = [2, 1, 5, 9]
console.log(arrFn(arr));