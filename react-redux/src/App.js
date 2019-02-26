import React, { Component } from 'react';
import './App.css';
import store from './store.js'
import {add, minus, cet4} from './action.js'
import {connect} from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  render() {
    return (
      <div className="App">
        计数：{this.props.count}<br></br>
        分数：{this.props.mark}<br></br>
        <button onClick={()=>{this.props.add(3)}}>计数增加</button>
        <button onClick={()=>{this.props.minus(3)}}>计数减少</button>
        <button onClick={()=>{store.dispatch(cet4(10))}}>增加分数</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    mark: state.mark
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add: (num)=>{dispatch(add(num))},
    minus: (num)=>{dispatch(minus(num))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
