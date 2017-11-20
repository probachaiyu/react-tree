import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../Home/Home.js";
import Tree1 from "../Tree1/Tree1.js";
import Tree2 from "../Tree2/Tree2.js";
import Tree3 from "../Tree3/Tree3.js";
import Tree4 from "../Tree4/Tree4.js";
import Tree5 from "../Tree5/Tree5.js";
import Tree6 from "../Tree6/Tree6.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/react-d3-tree">React D3 Tree</Link></li>
          <li><Link to="/react-checkbox-tree">React Checkbox Tree</Link></li>
          <li><Link to="/react-sortable-tree">React Sortable Tree</Link></li>
          <li><Link to="/react-json-view">React Json View</Link></li>
          <li><Link to="/treeview-react-bootstrap">Treeview React Bootstrap</Link></li>
          <li><Link to="/react-dropdown-tree-select">React Dropdown Tree Select</Link></li>
        </ul>
        </div>
        
        <div>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/react-d3-tree" component={Tree1} />
      <Route exact path="/react-checkbox-tree" component={Tree2} />
       <Route exact path="/react-sortable-tree" component={Tree3} />
        <Route exact path="/react-json-view" component={Tree4} />
        <Route exact path="/treeview-react-bootstrap" component={Tree5} />
        <Route exact path="/react-dropdown-tree-select" component={Tree6} />

  </div>
</div>
  </Router>
    );
  }
}

export default App;
