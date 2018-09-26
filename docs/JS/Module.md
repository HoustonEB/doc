## 概述

历史上,JS没有模块化(module)的思想,无法将一个大型项目,分割成互相依赖的小部分,再用简单的方法拼接起来.比如 Ruby 的`require`,Python 的`import`,甚至就连 CSS 都有`@import`,但是JavaScript 任何这方面的支持都没有,这对开发大型的,复杂的项目形成了巨大障碍。

在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

```js
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

上面代码的实质是整体加载`fs`模块（即加载`fs`的所有方法），生成一个对象（`_fs`），然后再从这个对象上面读取 3 个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从`fs`模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

## 模块的严格模式

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict";`。

严格模式主要有以下限制。

- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用`with`语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀 0 表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量`delete prop`，会报错，只能删除属性`delete global[prop]`
- `eval`不会在它的外层作用域引入变量
- `eval`和`arguments`不能被重新赋值
- `arguments`不会自动反映函数参数的变化
- 不能使用`arguments.callee`
- 不能使用`arguments.caller`
- 禁止`this`指向全局对象
- 不能使用`fn.caller`和`fn.arguments`获取函数调用的堆栈
- 增加了保留字（比如`protected`、`static`和`interface`）

ES6 模块之中，顶层的`this`指向`undefined`，即不应该在顶层代码使用`this`。

```js
import React, {Component} from 'react';

console.log(this, 23) // undefined
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 12
        }
    }
    
    render() {
        console.log(this, 24)// 指向这个默认类
        return (
            <div className={'asset-process-wrapper'}></div>
        )
    }
}
```

## export

模块功能主要由两个命令组成:

1. export(暴露模块对外的接口)

2. import(输入其它模块提供的功能)

一个文件就是一个模块,其中的变量外部访问不到.除非利用export.

export的几种写法:

```js
// 第一种写法
export let test = 190;

// 第二种写法(推荐)
let test1 = 1;
let test2 = 2;
let sum = function (test1, test2) {
   return test1 + test2
}
export {test1, test2, sum};

// 引入的文件
import AssetProcess, {test1, test2, sum as change} from './AssetProcess';
// sum可以起个别名change
console.log(test1, test2, change(test1, test2)) // 1, 2, 3
```

**数据实时性**--加载模块暴露的数据,如果模块文件中的数据改变,则引入该数据的文件也会改变.

这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新，详见下文《Module 的加载实现》一节。

```js
// 第二种写法(推荐)
let test1 = 1;
let test2 = 2;
let sum = function (test1, test2) {
   return test1 + test2
}

export {test1, test2, sum};

setTimeout(() => {
    test1 = 100;
}, 500);

// 引入的文件==>模块中改变值后,在延迟获取会获取到最新值
setTimeout(() => {
    console.log(test1, 'delay')
}, 1000);
```

## import

import命令输入的变量是不可修改的.

```js
import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;
```

`import`语句会执行所加载的模块，因此可以有下面的写法

```js
import 'lodash';
```

从同一个类中加载不同属性,不会重复加载module.

```js
import { foo } from 'my_module';
import { bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';
```

一个模块中不要同时用CommonJS和import.因为import会先执行,会引起问题.

```js
require('core-js/modules/es6.symbol');
require('core-js/modules/es6.promise');
import React from 'React';// 可能会报错
```



