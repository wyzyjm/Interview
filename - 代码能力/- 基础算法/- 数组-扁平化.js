const arr = [[0, 1], [2, 3], [4, 5]]

const newArr = arr.reduce((pre, cur, index, arr) => {
    return pre.concat(cur)
}, [])
console.log('newArr', newArr);