## Promise 基础应用
Promise 是异步编程的一种解决办法,比传统的异步解决方法更加好用比如(回调,事件).
#### Promise的异步处理
常见用法
```js
    let p = Promise.resolve(1);
    p.then(function (v) {
        console.log(v);
        return new Promise(((resolve, reject) => {
            setTimeout(function () {
                resolve(v * 4);
            }, 2000)
        }))
    }).then(function (v) {
        console.log(v);
    })
    // 1, 4
``` 
### Promise的错误处理
```js
    let p1 = Promise.resolve(1);
    p1
    .then(function(v) {
        console.log(v);
        foo(); // 报个错
        return Promise.resolve(3) // 不会执行到这
    }, function(err) {
        console.log(err) // 只会接受上一个Promise的错误信息
    })
    .then(function(v) {
        console.log(v) // 不会执行到这
    }, function(err) {
        console.log('错误问题', err) // 接受上一个Promise的报错,foo => undefined
        return '错误仍然可以传值'
    })
    .then(function(v) {
        console.log(v); // '错误仍然可以传值'
    }, function(err) {
        console.log(err);
    })
    // 1
    // Promise.html:40 错误问题 ReferenceError: foo is not defined
```
### Promise的穿透
```js
let p2 = Promise.resolve(1).then(Promise.resolve(2)).then(function(v) {
    console.log(v); // 1 => then中参数传入非函数时,解释为then(null),
                    // 导致前一个Promise的结果穿透到下一个Promise中,所以then中要传入函数.
});
let p3 = Promise.resolve(1).then(return Promise.resolve(2)).then(function(v) {
    console.log(v) // Uncaught SyntaxError: Unexpected token return
});
Promise.resolve(1).then(null).then((v) => {
  console.log(v) // 1 穿透
})

Promise.resolve(1).then(return 2).then((v) => {
  console.log(v) // Uncaught SyntaxError: Unexpected token return
})

Promise.resolve(1).then(() => {
  return 2
}).then((v) => {
  console.log(v) // 2
})
```
### 链式调用以及返回值
```js
var p = new Promise(function(resolve, reject){
  resolve(1);
});
p.then(function(value){               //第一个then
  console.log(value); // 1
  return value * 2;
}).then(function(value){              //第二个then
  console.log(value); // 2
}).then(function(value){              //第三个then
  console.log(value); // underfined
  return Promise.resolve('resolve'); 
}).then(function(value){              //第四个then
  console.log(value); // 'resolve'
  return Promise.reject('reject');
}).then(function(value){              //第五个then
  console.log('resolve: '+ value); // 不到这里，没有值
}, function(err){
  console.log('reject: ' + err);  // 'reject'
})
```
### Promise 状态eg
```js
var p1 = new Promise(function(resolve,reject){
  resolve(1);
});
var p2 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve(2);  
  }, 500);      
});
var p3 = new Promise(function(resolve,reject){
  setTimeout(function(){
    reject(3);  
  }, 500);      
});
// 直接返回1
console.log(p1); // Promise {<resolved>: 1}
// 由于加入了异步，而且是事件循环中的宏任务，所以暂时处于pending状态，underfined
console.log(p2); // Promise {<pending>}
// 同理，pending状态
console.log(p3); // Promise {<pending>}

// 直接加到下一个事件循环，暂时没输出，最后会输出resolve 2
setTimeout(function(){
  console.log(p2); // Promise {<resolved>: 2}
}, 1000);
// 同理，在下一个事件循环，最后会输出reject 3
setTimeout(function(){
  console.log(p3); // Promise {<rejected>: 3}
}, 1000);

// promise属于事件循环中的微任务，所以要比上两个setTimeout输出的快，1
p1.then(function(value){
  console.log(value); // 1
});
// 同理，2
p2.then(function(value){
  console.log(value); // 2
});
// 这里注意是catch,所以输出3
p3.catch(function(err){
  console.log(err); // 3
});
// 最终结果
Promise {<resolved>: 1}
Promise {<pending>}
Promise {<pending>}
1
Promise {<pending>}
2
3
Promise {<resolved>: 2}
Promise {<rejected>: 3}
```