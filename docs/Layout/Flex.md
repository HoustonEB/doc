### Flex伸缩布局
#### 垂直水平居中
```html
<style>
.reg-exr-wrapper {
  display: flex;
  width: 100px;
  height: 100px;
  border: 1px dashed #2ec091;
  color: #333;
  font-size: 14px;

  .div1 {
    width: 50px;
    height: 50px;
    border: 1px dashed orange;
    margin: auto;
  }
}
</style>
<body>
<div className={'reg-exr-wrapper'}>
    <div className={'div1'}>水平垂直居中</div>
</div>
</body>
```