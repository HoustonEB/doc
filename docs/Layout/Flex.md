## flex的容器
flex容器拥有6个属性
### 1.flex-direction
决定主轴的方向
1. row 主轴为水平方向,从左开始
2. row-reverse 主轴为水平方向,从右开始
3. column 主轴为垂直方向,从上开始
4. column-reverse 主轴为垂直方向,从下开始
### 2.flex-wrap
决定轴线上元素放不下时.排列的方式
1. wrap 换行
2. wrap-reverse 换行,但是最后一个排在第一行第一个(倒序)
3. nowrap 不换行
### 3.flex-flow
是flex-direction和flex-wrap的简写
`flex-flow: flex-direction || flex-wrap; => flex-flow: row nowrap;`
### 4.justify-content
### 5.align-items
### 6.align-content
#### 利用flex实现垂直水平居中
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