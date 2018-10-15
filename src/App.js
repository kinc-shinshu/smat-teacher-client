import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Top } from './screens/Top';
import { Edit } from './screens/Edit';
import { Done } from './screens/Done';

class ReactRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Top} />
          <Route path='/edit' component={Edit} />
          <Route path='/done' component={Done} />
          <ul>
            <li><Link className="waves-effect waves-light btn" to="/">Top</Link></li>
            <li><Link className="waves-effect waves-light btn" to="/edit">Edit</Link></li>
            <li><Link className="waves-effect waves-light btn" to="/done">Done</Link></li>
          </ul>
        </div>
      </BrowserRouter>
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
