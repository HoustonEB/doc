### Node版本管理器nvm
---
**安装**

输入一下命令clone仓库<br/>
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

输入nvm验证是否有反馈,如果没有feedback,再尝试输入`command -v nvm`如果是`nvm:command not found`.安装失败.

mac安装失败因为没有这个文件,运行`touch ~/.bash_profile`,再重新install,reopen terminal. 用以上的命令去验证一下.

**用法**

`nvm ls`查看安装的node版本, default-> 指向当前使用的node版本

`nvm install 8.11.2`安装指定node版本.

`nvm use 8.11.2`使用8.11.2版本的node.
### Express
---
express 是 Node.js 应用最广泛的 web 框架.

express 的官网是 http://expressjs.com/ .

```shell
mkdir node && cd node
npm install express
touch app.js
vi app.js (编辑app.js)
```
### 第三方模块
**utility**
```js
var utility = require('utility');
var express = require('express');

var app = express();
app.get('/', function(req, res) {
var q = req.query.q;
// 将url的query q的值进行md5加密.
res.send(utility.md5(q))
})
```