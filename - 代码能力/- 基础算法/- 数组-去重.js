const arr = [1, 2, 3, 4, 5, 6, 6, 2, 3]
const newArr = arr.reduce((pre, cur, curIndex, arr) => {
    return pre.includes(cur) ? pre : pre.concat(cur)
}, [])
console.log('newArr', newArr);