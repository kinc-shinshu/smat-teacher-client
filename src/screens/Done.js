import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

export class Done extends Component {
  render() {
    return (
      <div style={{background: "blue"}}>
        <h2>Done</h2>
        <p>終わりの画面</p>
      </div>
    )
  }
}