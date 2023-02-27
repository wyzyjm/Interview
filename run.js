// var y = 1
// if (function f() { }) {
//     y += typeof f;
// }
// // console.log(y);
// console.log('--', function f() { });

(function () {
    var a = b = 5
})()
console.log(b);