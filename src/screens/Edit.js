import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import MathJax from 'react-mathjax';
import { Link } from "react-router-dom";



class MathBox extends Component {
  constructor(props){
    super(props)
    const initText = this.props.init;
    this.state = {
      timer: undefined,
      input: initText,
      output: this.parse(initText)
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
    const input = document.querySelector("#" + this.props.name);
    const cursor = input.selectionStart;
    const before = this.state.input.slice(0, cursor);
    const after = this.state.input.slice(cursor);
    const changed_text = before + text + after;
    this.props.updateState({
      [this.props.name]: changed_text
    });
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

  times = () => {
    this.add("*");
  }

  div = () => {
    this.add("/");
  }

  change = (e) => {
    const input = e.target.value;
    const result = this.parse(input);
    this.setState({
      input: input
    });
    this.props.updateState({
      [this.props.name]: input
    })
    clearTimeout(this.state.timer);
    this.setState({
      timer: setTimeout(() => {
        this.setState({
          output: result
        });
      }, 300)
    });
  }

  render() {
    return (
      <div>
        <div className="card white">
          <div className="card-content flow-text" style={{minHeight: "6em"}}>
            <MathJax.Provider>
              <MathJax.Node formula={this.state.output} />
            </MathJax.Provider>
          </div>
        </div>
        <button className="waves-effect waves-light btn-large" onClick={this.sqrt} style={{fontSize: "0.8em"}}>
          <MathJax.Provider>
            <MathJax.Node formula="\sqrt{\boxed{\phantom{0}}}" />
          </MathJax.Provider>
        </button>
        <button className="waves-effect waves-light btn-large" onClick={this.frac} style={{fontSize: "0.6em"}}>
          <MathJax.Provider>
            <MathJax.Node formula="\frac{\boxed{\phantom{0}}}{\boxed{\phantom{0}}}" />
          </MathJax.Provider>
        </button>
        <button className="waves-effect waves-light btn-large" onClick={this.index} style={{fontSize: "0.8em"}}>
          <MathJax.Provider>
            <MathJax.Node formula="\boxed{\phantom{0}}^{\boxed{\phantom{0}}}" />
          </MathJax.Provider>
        </button>
        <button className="waves-effect waves-light btn-large" onClick={this.times} style={{fontSize: "1.2em"}}>
          <MathJax.Provider>
            <MathJax.Node formula="\times" />
          </MathJax.Provider>
        </button>
        <button className="waves-effect waves-light btn-large" onClick={this.div} style={{fontSize: "1.2em"}}>
          <MathJax.Provider>
            <MathJax.Node formula="\div" />
          </MathJax.Provider>
        </button>
        <div className="input-field">
          <input id={this.props.name} type="text" value={this.state.input} onChange={this.change} style={{fontSize: "2em"}}/>
        </div>
      </div>
    );
  }
}


export class Edit extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: this.props.questions,
      text: "ax^{2}+bx+c=0",
      answer: "[-b+-#{b^{2}-4ac}]%[2a]"
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(state){
    this.setState(state);
  }

  addQuestion = (e) => {
    const question = {
      text: this.state.text,
      answer: this.state.answer
    };
    const changed = this.state.questions.concat(question);
    this.setState({questions: changed}, () => {
      console.log(this.state.questions);
      this.props.updateState(this.state);
    });
  }

  render() {
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
          <div className="card-panel grey lighten-4">
            <h4>問題</h4>
            <MathBox name="text" init="ax^{2}+bx+c=0" updateState={this.updateState}/>
          </div>
          <div className="card-panel grey lighten-4">
            <h4>解答</h4>
            <MathBox name="answer" init="[-b+-#{b^{2}-4ac}]%[2a]" updateState={this.updateState}/>
          </div>

          <span><a className="waves-effect waves-light btn-large" onClick={this.addQuestion}>完成</a></span>
          <span><Link to={"/"} className="waves-effect waves-light btn-large">問題一覧へGo</Link></span>
        </div>
      </div>
    );
  }
}
