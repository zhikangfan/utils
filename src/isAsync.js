/*
* 判断传入的函数是否是async函数
* */
function isAsyncFunction(func) {
    return func[Symbol.toStringTag] === 'AsyncFunction';
}
async function test() {

}
console.log(isAsyncFunction(test))

function test2() {}
console.log(isAsyncFunction(test2))
function test3() {
    return new Promise(() => {})
}
console.log(isAsyncFunction(test3), 'test3_1');
console.log(isAsyncFunction(test3()), 'test3');

