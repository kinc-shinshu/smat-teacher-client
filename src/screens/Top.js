import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

export class Top extends Component {
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
        <div className="container">
          <h5>問題一覧</h5>
          <div className="collection">
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
            <a href="#!" className="collection-item">Alvin<a href="#delete" className="secondary-content"><i
              className="material-icons">delete</i></a></a>
          </div>
        </div>
      </div>
    )
  }
}

