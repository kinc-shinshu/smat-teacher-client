import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import MathJax from 'react-mathjax';

export class Top extends Component {

  constructor(props){
    super(props);
    this.state = {
      questions: this.props.questions
    };
  }


  change = (e) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    fileReader.readAsText(file);
    fileReader.onloadend = (event) => {
      const json = JSON.parse(event.target.result);

      const oldJson = this.state.questions;
      const newJson = oldJson.concat(json);
      this.setState({questions: newJson}, () => {
        this.props.updateState(this.state);
      });

    }
  }

  click = () => {
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
        console.log(json.id);
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

  deleteClick = (e) => {
    const key = e.target.getAttribute("questionId");
    const target = this.state.questions[key];
    const deleted = this.state.questions.filter((q, i) => q !== target);
    this.setState({questions: deleted});
  }

  render() {


    const items = this.state.questions.map((c, i) => {
      return (
        <a  href={"/edit/"+c.text} className="collection-item" style={{minHeight: "5em"}}>
          <MathJax.Provider>
            <MathJax.Node formula={c.text} className="left"/>
          </MathJax.Provider>
          <a href="#delete" className="secondary-content "><i
            className="material-icons" questionId={i} onClick={this.deleteClick}>delete</i></a>
        </a>
      );
    });

    return (
      <div>
        <div className="navbar-fixed" >
          <nav>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo">Logo</a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="edit/:id" onClick={() =>{this.props.updateState(this.state);} }>新しい問題を追加</Link></li>
                <li>
                  <label className="white-text" style={{fontSize:"1em"}}>
                    <a>作成した問題をロード
                      <input type="file" style={{display:"None"}} onChange={this.change} />
                    </a>
                  </label>
                </li>
                <li><Link to="done">完成</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <h5>問題一覧</h5>
          <div className="collection left-align">
            {items}
            <a href="/edit/Alvin" className="collection-item " style={{minHeight: "5em"}}>
              <MathJax.Provider>
                <MathJax.Node formula={"ax^{2}+bx+c=0"} className="left" />
              </MathJax.Provider>
              <a href="#delete" className="secondary-content"><i className="material-icons">delete</i></a></a>
          </div>
        </div>
      </div>
    )
  }
}






