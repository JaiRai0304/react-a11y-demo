import React, { Component } from "react";
import DocumentTitle from "react-document-title";
class PageTitle extends Component {
  render() {
    return (
      <DocumentTitle title="Title using react-document-title">
        <div>
          <h1>Page Title Fixes</h1>
          <h2>React-Document-Title</h2>
          <p>
            Provides a declarative way to specify document.title in a
            single-page app. This component can be used on server side as well.
          </p>
          <a href="https://github.com/gaearon/react-document-title">
            React Document Title Documentation
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
      </DocumentTitle>
    );
  }

  componentDidMount() {
    //document.title = "React is awesome";
  }
}
export default PageTitle;
