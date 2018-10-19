import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Top } from './screens/Top';
import { Edit } from './screens/Edit';
import { Done } from './screens/Done';


class ReactRouter extends Component {

  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(state){
    this.setState(state);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/'
                 render={props => <Top updateState={this.updateState} questions={this.state.questions}/>} />
          <Route path='/edit/:id'
                 render={props => <Edit updateState={this.updateState} questions={this.state.questions}/>} />
          <Route path='/done'
                 render={props => <Done questions={this.state.questions}/>} />
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
