import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

export class Top extends Component {

  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
  }

  change = (e) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    fileReader.readAsText(file);
    fileReader.onloadend = (event) => {
      const json = JSON.parse(event.target.result);
      this.setState({questions: json});
      console.log(JSON.parse(event.target.result));
    }
  }

  render() {

    const items = this.state.questions.map((c, i) =>{
      return<a href={"/edit/"+c.text} className="collection-item">{c.text}<a href="#delete" className="secondary-content"><i
          className="material-icons">delete</i></a></a>
    });

    return (
      <div>
        <div className="navbar-fixed" >
          <nav>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo">Logo</a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="edit/:id">新しい問題を追加</Link></li>
                <li>
                  <label className="white-text" style={{fontSize:"1em"}}>
                    <a>
                      作成した問題をロード
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
          <div className="collection">
            {items}
            <a href="/edit/Alvin" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
          </div>
        </div>
      </div>
    )
  }
}


