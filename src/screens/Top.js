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
                <li><Link to="edit">追加</Link></li>
                <li><a href="#">ロード</a></li>
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
        <footer className="page-footer grey darken-2">
          <div className="footer-copyright">
            <div className="container">
              © 2018 SmaT powered by KINC.
              <a className="grey-text text-lighten-4 right" href="#!">Github</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
