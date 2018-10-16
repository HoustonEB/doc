## Object.defineProperty
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

