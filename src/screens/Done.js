import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import tabletIcon from './tabletIcon.png';
import {Link} from "react-router-dom";

class Progress extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let bar;
    if (this.props.show){
      bar = (
        <div className="progress">
          <div className="determinate" style={{width: this.props.width + "%"}}></div>
        </div>
      );
    } else {
      bar = (
        <div></div>
      );
    }
    return bar;
  }
}

export class Done extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: undefined,
      progress: 0, 
      barShow: true
    };

    const apiUrl = "https://smat-api.herokuapp.com"

    const data = {
      title: "test"
    };
    console.log(this.props.questions);
    fetch(apiUrl + "/rooms", {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({id: json.id});
        this.props.questions.map((c, i) => {
          const question = {
            text: c.text,
            answer: c.answer
          }
          fetch(apiUrl + "/rooms/" + json.id + "/questions", {
            method: 'POST',
            body: JSON.stringify(question),
            headers:{
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(json => {
              console.log(json);
              this.setState({progress: i / this.props.questions.length * 100});
              console.log((i + 1) / this.props.questions.length * 100);
              if ((i + 1) / this.props.questions.length == 1.0){
                this.setState({barShow: false});
              }
            });
        });
      });
    
  }

  render() {
    const roomID = this.state.id;
    return (
      <div>
        <div className="navbar-fixed " >
          <nav>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo">Logo</a>
            </div>
          </nav>
        </div>
        <div className="container">
          <h2 className="center-align" style={{marginTop:"2em"}}>ルーム番号<span style={{fontSize:"3em"}} className="pink-text">{roomID}</span></h2>
          <h3 className="center-align hide-on-small-only" style={{marginBottom:"1em"}}>番号を生徒にお伝えください</h3>
          <Progress width={this.state.progress} show={this.state.barShow} />
        </div>
        <div className="center-align">
          <img src={tabletIcon} alt="" />
        </div>
      </div>
    )
  }
}