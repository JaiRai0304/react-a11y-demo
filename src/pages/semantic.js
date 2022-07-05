import React, { Component } from "react";
import Tablebody from "../components/tablebody";
import Tableheader from "../components/tableheader";
import Tableheaderfrag from "../components/tableheaderfrag";
import Tablebodyfrag from "../components/tablebodyfrag";
import Customtag from "../components/customtag";

class Semantic extends Component {
  handleClick = () => {
    alert("This worked!");
  };
  keyDown = (event) => {
    console.log("event.key is", event.key);
    console.log("event code is", event.code);
    console.log("keycode is ", event.keyCode);
    if (event.key === 'Enter' || event.key == '' || event.code === 'Space' || event.keyCode === 32) {
      this.handleClick();
    }
  }
  render() {
    return (
      <div>
        <h1>Semantic HTML</h1>
        <h2>Extra Divs Added</h2>
        <p>
          In this example below, a component is created with data being added to
          a table,however the data has a wrapper div that can break the
          semantics of the overall table.
        </p>
        <table>
          <tr>
            <Tableheader />
          </tr>
          <tr>
            <Tablebody />
          </tr>
        </table>
        <h2>Fragments</h2>
        <p>
          In this example below, a component is created with data being added to
          a table,however instead we use Fragments to now let the natural
          semantics be placed on the page.{" "}
        </p>
        <table>
          <tr>
            <Tableheaderfrag />
          </tr>
          <tr>
            <Tablebodyfrag />
          </tr>
        </table>
        <h2>Custom Tags</h2>
        <p>
          In this example below, a button is created using non native semantics
          and native semantics. With custom tags, users like to add a role of
          button and tabindex after the fact, however it does not render in
          react.{" "}
        </p>
        <Customtag/>
        <button className="btn btn-primary btn-large">Click me!</button>

        <h2>Click Events</h2>
        <p>
          In this example below, we use a click event on an actionable item and
          non-actionable item. And see how keyboard effects them
        </p>
        <div
          class="btn btn-primary"
          tabIndex="0"
          role="button"
          onClick={this.handleClick}
        >
          Keyboard Button
        </div>
        {/* <div
          class="btn btn-primary"
          tabIndex="0"
          role="button"
          onClick={this.handleClick}
          onKeyDown={this.keyDown}
        >
          Keyboard Button
        </div> */}
        <button
          className="btn btn-primary btn-large"
          onClick={this.handleClick}
        >
          Keyboard Button
        </button>
      </div>
    );
  }
}

export default Semantic;
