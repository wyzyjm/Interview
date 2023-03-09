// 数组中的元素被分成三组，输出[1,2,3,4,5,6]->[[1,2,3]，[4,5,6]]

const arr = [1, 2, 3, 4, 5, 6]
function splitArr(arr) {
    let newArr = []
    newArr = [arr.splice(0, 3), arr]
    return newArr
}
console.log('splitArr', splitArr(arr));