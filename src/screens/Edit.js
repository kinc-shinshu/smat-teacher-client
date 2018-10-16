import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import MathJax from 'react-mathjax';
import {Link} from "react-router-dom";

export class Edit extends Component {
  constructor(props){
    super(props)
    const tex = props.match.params.id;
    this.state = {
      timer: undefined,
      input: tex, 
      output: tex
    }
  }

  parse = (text) => {
    let result = text.replace(/\*/g, "\\times");
    result = result.replace(/\//g, "\\div");
    result = result.replace(/\+-/g, "\\pm");
    result = result.replace(/-\+/g, "\\mp");
    const ss = result.match(/#{.+?}/g);
    if (ss != null){
      for (let s of ss){
        let k = s.match(/[^#]+/g);
        result = result.replace(s, "\\sqrt{" + k[0].slice(1, -1) + "}");
      }
    }
    const fs = result.match(/\[.+?]%\[.+?]/g);
    if (fs != null){
      for (let f of fs){
        console.log(f);
        let k = f.match(/[^%]+/g);
        result = result.replace(f, "\\frac{" + k[0].slice(1, -1) + "}{" + k[1].slice(1, -1) + "}");
      }
    }
    result = result.replace(/@|#|\$|%|&/, "");
    console.log(result);
    return result
  }

  ansify = (text) => {
    let result = text.replace(/[0-9a-w]+/g, "\\boxed{\\phantom{0}}");
    return result;
  }

  add = (text) => {
    const input = document.querySelector("#input");
    const cursor = input.selectionStart;
    const before = this.state.input.slice(0, cursor);
    const after = this.state.input.slice(cursor);
    const changed_text = before + text + after;
    this.setState({
      input: changed_text, 
      output: this.parse(changed_text)
    }, () => {
      input.focus();
      input.setSelectionRange(cursor, cursor + text.length);
    });
  }

  sqrt = () => {
    this.add("#{?}");
  }

  frac = () => {
    this.add("[?]%[?]");
  }

  index = () => {
    this.add("?^{?}");
  }

  change = (e) => {
    const input = e.target.value;
    const result = this.parse(input);
    this.setState({
      input: input
    });
    clearTimeout(this.state.timer);
    this.state.timer = setTimeout(() => {
      this.setState({
        output: result
      });
    }, 300);
  }

  render() {
    return (
      <div className="container">
        <h2></h2>
        
        <div className="card blue-grey lighten-4">
          <div className="card-content flow-text" style={{minHeight: "6em"}}>
            <MathJax.Provider>
              <MathJax.Node formula={this.state.output} />
            </MathJax.Provider>
          </div>
        </div>

        <nav>
          <div class="nav-wrapper">
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <a onClick={this.sqrt} style={{minHeight: "3em", minWidth: "8em"}}>
                  <MathJax.Provider>
                    <MathJax.Node formula="\sqrt{\boxed{\phantom{0}}}" />
                  </MathJax.Provider>
                </a>
              </li>
              <li>
                <a onClick={this.frac} style={{minHeight: "3em", minWidth: "8em"}}>
                  <MathJax.Provider>
                    <MathJax.Node formula="\frac{\boxed{\phantom{0}}}{\boxed{\phantom{0}}}" />
                  </MathJax.Provider>
                </a>
              </li>
              <li>
                <a onClick={this.index} style={{minHeight: "3em", minWidth: "8em"}}>
                  <MathJax.Provider>
                    <MathJax.Node formula="\boxed{\phantom{0}}^{\boxed{\phantom{0}}}" />
                  </MathJax.Provider>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="input-field">
          <input id="input" type="text" value={this.state.input} onChange={this.change} style={{fontSize: "2em"}}/>
        </div>

        <span ><Link to="/" className="waves-effect waves-light btn-large">完成</Link></span>

      </div>
    );
  }
}