import React from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../pages/Home"
import About from '../pages/About';

function Header() {
  return (
    <Router>
      <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={linkStyle} to="/react_page">Home</Link>
        |
        <Link style={linkStyle} to="/react_page/about">About</Link>
      </header>

      <Switch>
        <Route exact path="/react_page">
          <Home />
        </Route>

        <Route path="/react_page/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

// Can also use className and put styles in App.css
const linkStyle = {
  color: "#fff",
  textDecoration: 'none'
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
}

export default Header;
