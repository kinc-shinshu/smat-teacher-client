import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';



export class Load extends Component {

  render() {
    return (
      <div>
        <div className="navbar-fixed" >
          <nav>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo">Logo</a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="edit">新しい問題を追加</Link></li>
                <li><Link to="load">作成した問題をロード</Link></li>
                <li><Link to="done">完成</Link></li>
              </ul>
            </div>
          </nav>
        </div>


        <form action="#">

          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
        </form>

        <div className="waves-effect waves-light btn-large">
          <span ><Link to="/" >完成</Link></span>
        </div>

      </div>
    )
  }
}

