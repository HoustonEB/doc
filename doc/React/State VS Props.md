## State
### 修改State
state的修改不能通过直接修改.因为不会 re-render component.
```js 
this.state.property = 'value' 
``` 
修改state的推荐方法是通过.
```js 
this.setState({property: 'value'})
```
---
### State的更新可能是异步的
React为了性能(performance)会将多批次的`setState`统一进行一次更新.
因为**this.props**和**this.state**的值更新是异步的,所以下一次state的更新不能依赖它们.
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
为了修复(fix)这个问题,所以应该利用**setState**的第二个形式(form)=>传入function而不是Object.
传入的函数中第一个参数(argument)是**this.state**,第二个是**this.props**
```js
// 1.传入箭头函数
this.setState(((state, props) => {
    counter: state.counter + props.increment
}))
// 2.传入传统函数
this.setState(function(state, props) {
    return {
        counter: state.counter + props.increment
    }
})
```
---
### State的更新是被合并更新的
当你调用setState()时React会将你提供的Object进行合并入当前的state,例如你的state包含了若干个(several)独立(independent)的变量(variable)
```js
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```
然后你去分离调用setState()独立地更新它们.
```js
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```
这个合并是浅的,因此this.setState({comments})调用时会留下完好无损的(intact)this.state.posts,但是会完全地(completely)替换掉this.state.comments.

--- 
### 数据是向下流的
如果某一个(certain)组件是无状态的(stateless)或是有状态的(stateful),既不是(neither nor)父组件也不是子组件有能力知道的.它们不应该关心是否它被作为函数还是类定义的.
这是为什么state被称为本地的(local)和封装的(encapsulated).它是不能被任何组件访问的(accessible)除了它的拥有者并且可以设置它的值.
一个组件或许会通过props传递它的state给子组件.
```js
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```
这在自定义组件中也适用
```js
<FormattedDate date={this.state.date} />
```
这个FormattedDate组件会得到传来的date通过props,并且不知道它来自Clock的props还是state或是通过手动输入的.
```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```
这通常被称为自上而下的或者单向的(unidirectional)数据流.任何的state都会被特定的(specific)组件所拥有,并且通过这个state派生(derived)而来的data和UI仅仅只能影响这棵树下的组件.
如果你想象一个组件树为一个props的瀑布(waterfall),每一个组件的state就是额外的(additional)水资源,汇入到任意的点,而且是向下的.
为了展示组件是真正孤立的(isolated),创造一个APP组件render一个Clock树.
```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
每一个Clock都拥有自己的计时器,并且独立的更新.
在React APP中,无论是有状态的还是无状态的组件都会被深思熟虑的实现(implementation)细节随着时间的推移去改变,你可以用有状态的组件去包含无状态的组件,反之亦然(vice versa).