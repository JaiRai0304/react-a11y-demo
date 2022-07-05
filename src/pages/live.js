import React, { Component, Suspense } from "react";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";
import Announcer from "react-a11y-announcer";
const LazyComponent = React.lazy(() => import("../components/alertstandard"));
class Live extends Component {
  state = {
    announcement: "",
    a11yMessage: "",
  };
  constructor(props) {
    super(props);
    this.onInputClick = this.onInputClick.bind(this);
    this.state = { announcement: "", a11yMessage: "", lazyLoad: false };
  }
  handleClick = () => {
    this.setState({
      announcement: "Here's a new announcement!",
    });
  };
  onInputClick() {
    this.setState({ lazyLoad: true });
  }
  render() {
    return (
      <div>
        <h1>Aria Live Fixes</h1>
        <h2>React Aria Live</h2>
        <p>This example shows the usage of the Aria Live Announcer Package</p>
        <LiveAnnouncer>
          <LiveMessage message={this.state.a11yMessage} aria-live="assertive" />
          <button
            className="btn btn-primary btn-large"
            onClick={() => {
              this.setState({ a11yMessage: "React is awesome!" });
            }}
          >
            Press me
          </button>
        </LiveAnnouncer>

        <h2>React A11y Announcer</h2>
        <p>This example shows the usage of the React A11y Announcer Package</p>
        <Announcer text={this.state.announcement}> </Announcer>
        <div className="App-header">
          <button
            className="btn btn-primary btn-large"
            type="button"
            onClick={this.handleClick}
          >
            Trigger new announcement
          </button>
        </div>
        <h2>Lazy Loading</h2>
        <p>This shows off the use of lazy loading a component.</p>

        <button
          className="btn btn-primary btn-large"
          onClick={this.onInputClick}
        >
          Show Input
        </button>
        {this.state.lazyLoad ? (
          <Suspense fallback={<div>Loading....</div>}>
            <LazyComponent />
          </Suspense>
        ) : null}
      </div>
    );
  }
}
export default Live;
