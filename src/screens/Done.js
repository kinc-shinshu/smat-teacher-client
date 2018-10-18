import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import tabletIcon from './tabletIcon.png';
import {Link} from "react-router-dom";

export class Done extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: undefined,
      questions: this.props.questions
    };

    const apiUrl = "https://smat-api.herokuapp.com"

    const data = {
      title: "test"
    }

    fetch(apiUrl + "/rooms", {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({id:json.id});
        this.state.questions.map((c) =>{
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
            });
        })
      });
  }

  render() {
    const roomID = this.state.id;
    return (
      <div>
        <div className="container">
          <h2 className="center-align" style={{marginTop:"2em"}}>ルーム番号<span style={{fontSize:"3em"}} className="pink-text">{roomID}</span></h2>
          <h3 className="center-align hide-on-small-only" style={{marginBottom:"1em"}}>番号を生徒にお伝えください</h3>
        </div>
        <div className="center-align">
          <img src={tabletIcon} />
        </div>
      </div>
    )
  }
}