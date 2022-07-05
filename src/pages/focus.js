import React, { Component } from "react";
import Alert from "../components/alert";
import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
class FocusManage extends Component {
  componentDidMount() {
    document.querySelector(".App").focus();
  }
  constructor(props) {
    super(props);
    this.onInputClick = this.onInputClick.bind(this);
    this.onManualClick = this.onManualClick.bind(this);
    this.onModalClick = this.onModalClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { showResults: false, showManual: false, showModal: false };
  }

  onInputClick() {
    this.setState({ showResults: true });
  }
  onManualClick() {
    this.setState({ showManual: true });
  }
  onModalClick() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }
  afterOpenModal() {
    document.getElementById("modalHeader").focus();
  }

  render() {
    return (
      <div>
        <h1 tabIndex="-1">Focus Management</h1>
        <h2>Manual Managing Focus</h2>
        <p>
          This shows the use of manually setting focus for a rendered component
          using <b>componentDidMount()</b>
        </p>
        {this.state.showManual ? (
          <Alert />
        ) : (
          <div>
            <label htmlFor="fname">Type some text here: </label>
            <input id="fname" type="text" name="fname" />
            <br />
            <button
              className="btn btn-primary btn-large"
              onClick={this.onManualClick}
            >
              Submit Text
            </button>
            <br />
          </div>
        )}
        <br />
        <h2>Modal</h2>
        <p>
          This shows the use of react-modal straight from the react framework.
          Out of the box this is accessible. The one change made is putting
          focus on the top level heading in the modal itself.
        </p>
        <button
          className="btn btn-primary btn-large"
          onClick={this.onModalClick}
        >
          Show Modal
        </button>
        <Modal
          isOpen={this.state.showModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <h2 id="modalHeader" tabIndex="-1">
            Modal Example
          </h2>
          <div>I am a modal and this is my content below</div>
          <button
            className="btn btn-primary btn-large"
            onClick={this.closeModal}
          >
            close
          </button>
        </Modal>
        <br />
        <br />
        <h2>Auto Focus</h2>
        <p>
          This shows the use of autofocus on a input field. Note this only works
          if the input field is injected onto the page.
        </p>
        <button
          className="btn btn-primary btn-large"
          onClick={this.onInputClick}
        >
          Show Input
        </button>
        {this.state.showResults ? (
          <input type="text" name="name" autoFocus />
        ) : null}
      </div>
    );
  }
}
export default FocusManage;
