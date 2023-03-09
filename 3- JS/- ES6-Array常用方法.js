/**
 数组常用方法:
    
    基础:
        shift()
        unShift()
        pop()
        push()  
        splice()    删除. 截取
        join()      转字符串
        sort()      排序
        reverse()   反转
        splice(start,length)
    迭代:
        map((item,index)=>{} )
        forEach((item,index)=>{})
        reduce((total,pre,next)=>{},init)

        find()
        findIndex()
        some()          是否有一个通过
        every()         是否全部符合某个条件
        filter()        过率
 */

const arr = [1, 2, 3, 3, 4, 5, 6]

const every = arr.every(item => item > 0)
console.log('every', every);
const some = arr.some(item => item > 4)
console.log('some', some);
// reduce
// const res_reduce = arr.reduce((pre, cur, curIndex, arr) => {
//     if (curIndex === 0) {
//         console.log('pre', pre);
//         console.log('cur', cur);
//         console.log('curIndex', curIndex);
//         console.log('arr', arr);
//     }
//     return pre.includes(cur) ? pre : pre.concat(cur)
// }, [])
// console.log('res_reduce', res_reduce);

