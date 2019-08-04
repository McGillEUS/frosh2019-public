import React, { Component } from "react";
import { Link } from "gatsby";

class Dropdown extends Component {
  container = React.createRef();
  state = {
    open: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="DropDown">
        <div className="container" ref={this.container}>
          <button type="button" class="button" onClick={this.handleButtonClick} style={{width:350, height:50, position: 'relative', left: '50%',
        transform: 'translate(-50%, 0)', borderRadius:`7px`, backgroundColor:`#a866ce`}}>
           MENU  ▾
          </button>
          {this.state.open && (
            <div class="container">
              <ul style={{width:350, position: 'relative', left: '50%',
        transform: 'translate(-50%, 0)'}}>
                <Link to="/" style={{textDecoration:`none`}}>Home</Link>
                <br></br>
                <Link to="/faq" style={{textDecoration:`none`}}>Frequently Asked Questions</Link>
                <br></br>
                <Link to="/staff" style={{textDecoration:`none`}}>Staff</Link>
                <br></br>
                <Link to="/resources" style={{textDecoration:`none`}}>Resources</Link>
                <br></br>
                <Link to="/bursary" style={{textDecoration:`none`}}>Bursary Application</Link>
                <br></br>
                <Link to="/" style={{textDecoration:`none`}}>Register Now!</Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;