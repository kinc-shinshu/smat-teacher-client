import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import tabletIcon from './tabletIcon.png';

export class Done extends Component {
  render() {
    var roomID = "111";
    return (
      <div>
        <div className="container">
          <h2 className="center-align" style={{marginTop:"2em"}}>ルーム番号<span style={{fontSize:"3em"}} className="pink-text">{roomID}</span></h2>
          <h3 className="center-align hide-on-small-only" style={{marginBottom:"1em"}}>番号を生徒にお伝えください</h3>
        </div>
        <div className="center-align">
          <img src={tabletIcon} alt="" />
        </div>
      </div>
    )
  }
}