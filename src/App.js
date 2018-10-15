import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class ReactRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/friends' component={Friends} />
          <ul>
            <li><Link className="waves-effect waves-light btn" to="/">Home</Link></li>
            <li><Link className="waves-effect waves-light btn" to="/about">About</Link></li>
            <li><Link className="waves-effect waves-light btn" to="/friends">Friends</Link></li>
          </ul>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div style={{background: "red"}}>
        <h2>Home</h2>
        <p>Welcome to</p>
      </div>
    )
  } 
}

class About extends Component {
  render() {
    return (
      <div style={{background: "green"}}>
        <h2>About</h2>
        <p>勘弁してください</p>
      </div>
    )
  } 
}

class Friends extends Component {
  render() {
    return (
      <div style={{background: "blue"}}>
        <h2>Friends</h2>
        <p>ここにフレンズのリストを書きます</p>
      </div>
    )
  } 
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactRouter />
      </div>
    );
  }
}

export default App;
