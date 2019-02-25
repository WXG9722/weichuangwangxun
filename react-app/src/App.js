import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/home">跳转Home页</Link>
            <Route path="/home" component={Home}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
