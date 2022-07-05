import React, { Component } from "react";
import { Helmet } from 'react-helmet';

class PageTitle extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>React is Superb</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        
     
            <div>
            <h1>Page Title Fixes</h1>
            <h2>React-Helmet-Title</h2>
            
            <a href="https://github.com/nfl/react-helmet">
                React Helmet  Documentation
            </a>
            <br />
            <br />
            <h2>After Component Mounts</h2>
            <p>
                You can set the document title after the component has rendered
                using <b>document.title.</b>
            </p>
            <br />
            </div>
        </div>
    );
  }
}
export default PageTitle;
