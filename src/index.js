import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import Footer from "./components/footer";
import Header from "./components/header";
import focusContent from "./pages/focus";
import pageTitle from "./pages/pageTitle";
import semantic from "./pages/semantic";
import live from "./pages/live";

import home from "./pages/home";

function App() {
  return (
    <div className="App" tabindex="-1">
      <Header />
      <Router>
        <div className="main">
          <div className="sidenav">
            <span class="navHeader">React A11y Tester</span>
            <hr />
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/pageTitle">Page Title</Link>
              </li>
              <li>
                <Link to="/focus">Focus Management</Link>
              </li>
              <li>
                <Link to="/semantic">HTML Semantics</Link>
              </li>
              <li>
                <Link to="/live">Aria Live</Link>
              </li>
            </ul>
          </div>
          <Route exact path="/home" component={home} />
          <Route path="/focus" component={focusContent} />
          <Route path="/pageTitle" component={pageTitle} />
          <Route path="/semantic" component={semantic} />
          <Route path="/live" component={live} />
        </div>
      </Router>
      <Footer />
    </div>
  );
  function handleFocus() {
    document.querySelector(".App").focus();
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
