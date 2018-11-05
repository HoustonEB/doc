## Object.keys()
::: tip
入参-对象<br />
返回-对象可枚举的属性数组
:::
```js
let obj = {a: 1, b: 2};
console.log(Object.keys(obj)); // ["a", "b"]
```
## Object.defineProperty()
::: tip
Object.defineProperty(obj, props, descriptor)<br />
obj => 要在其上定义属性的对象<br />
props => 要定义或者修改的属性<br />
descriptor => 将被定义或修改的属性描述符
:::
### basic usage
```js
let obj = {};
Object.defineProperty(obj, 'newProperty', {value: 'new'});
console.log(obj); // {newProperty: "new"} 
```
#### 对象里目前存在的属性描述符有两种主要形式:
1. 数据描述符. 数据描述符是一个具有值的属性，该值可能是可写的，也可能不是可写的.
2. 存取描述符. 存取描述符是由getter-setter函数对描述的属性.
::: warning
描述符必须是这两种形式之一；不能同时是两者
:::
#### 数据描述符和存储描述符可以同时具有:
1. configurable(为true时,该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除)
2. enumerable(为true时, 才可被枚举)
#### 数据描述符同时具有以下可选键值:
1. value(该属性对应的值。可以是任何有效的JavaScript值（数值，对象，函数等.默认为 undefined.)
2. writable(为true时，value才能被赋值运算符改变.默认为 false.)
```js
let obj = {};
Object.defineProperty(obj, 'a', {
    value: 'new1',
    writable: true,
    enumerable: true
});
Object.defineProperty(obj, 'b', {
    value: 'new2',
    enumerable: false
});
obj.a = 'io'; // writable设置为true时才会被赋值
for(var a in obj) {
    console.log(a, 2) // a (enumerable设置为false时属性不能够通过for..in和Object.keys()遍历输出)
}
console.log(obj)// {a: "io", b: "new2"}
```
#### 存取描述符同时具有以下可选键值:
1. get(当访问该属性时，该方法会被执行.方法执行时没有参数传入.默认为 undefined.)
2. set(当属性值修改时，触发执行该方法.该方法将接受唯一参数,即该属性新的参数值.默认为 undefined)
```js
/*--------------------------*/ 
var o = {};
o.a = 1;
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : true,
  configurable : true,
  enumerable : true
});

// 另一方面，
Object.defineProperty(o, "a", { value : 1 });
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : false,
  configurable : false,
  enumerable : false
});
```
#### Vue双向绑定的简易实现
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <input id="username" type="text">
</body>
<script>
    var ip = document.getElementById('username');
    ip.addEventListener('input', function(e) {
        obj.userName = e.target.value;
        console.log(obj.userName, e.target.value)
    })
    let obj = {};
    Object.defineProperty(obj, 'userName', {
        get: function() {
            return document.getElementById('username').value;
        },
        set: function(value) {
            document.getElementById('username').value = value;
        }
    });
    obj.userName = 'yu';
</script>
</html>
```
## Object.assign()
Object.assign(),用于将所有可被枚举的属性的值从一个或多个源对象复制到目标对象,并返回目标对象.
::: tip
Object.assign(target, ...sources)<br />
target => 目标对象
sources => 被复制的一些源对象
:::
### basic usage
```js
let obj = {};
Object.assign(obj, {a:1});
console.log(obj) // {a: 1}
```
**非深拷贝**
```js
let obj = {};
let obj1 = {a:1, b:{c:0}}
Object.assign(obj, obj1);
console.log(obj); // {a: 1, b: {c: 0}}
obj1.a = 2;
obj.b.c = 3; // 会影响目标对象的值
console.log(obj, 2) // {a: 1, b: {c: 3}}

/*---------深拷贝-------------*/
let obj1 = {a:1, b:{c:0}}
let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.b.c = 3;
console.log(obj2); // { a: 1, b: { c: 0 } }
```
**合并对象**
```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
```
**合并具有相同属性的对象**
```js
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```
**继承属性和不可枚举属性是不能拷贝的**
```js
var obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```
