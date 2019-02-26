import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Prompt} from 'react-router-dom'
import Home from './components/Home.js'
import A from './components/A.js'
import B from './components/B.js'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isBlocking: true
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Prompt 
              when={this.state.isBlocking}
              message={location =>
                `你确定要离开当前页面跳转至${location.pathname}`
              }
            ></Prompt>
            <Link to="/">跳转Home页  </Link>
            <Link to="/a/10">跳转A页  </Link>
            <Link to="/b">跳转B页  </Link>
            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route> */}
            <Switch>
              <Route path="/a/:id" component={A}></Route>
              <Route path="/b" children={B}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
