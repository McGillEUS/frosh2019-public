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
        <div className="container" ref={this.container} style={{alignItems:`center`}}>
          <button type="button" class="button" onClick={this.handleButtonClick} style={{width:350, height:50, position: 'relative', left: '50%',
        transform: 'translate(-50%, 0)', borderRadius:`7px`, backgroundColor:`#a866ce`, alignItems:`center`}}>
           MENU  ▾
          </button>
          {this.state.open && (
            <div class="container">
              <ul style={{width:325, position: 'relative', left: '50%',
        transform: 'translate(-58%, 0)', alignContent:`left`, justifyContent:`left`, boxShadow:'1px 3px 3px 1px #9E9E9E'}}>
                <Link to="/" style={{textDecoration:`none`, color:`#a866ce`}}>Home</Link>
               <br></br>
                <Link to="/faq" style={{textDecoration:`none`, color:`#a866ce`}}>Frequently Asked Questions</Link>
                <br></br>
                <Link to="/staff" style={{textDecoration:`none`, color:`#a866ce`}}>Staff</Link>
                <br></br>
                <Link to="/resources" style={{textDecoration:`none`, color:`#a866ce`}}>Resources</Link>
                <br></br>
                <a target="_blank" href="https://docs.google.com/document/d/19_RjkopuN3saPOAuP6Ioc7gNRP2oCLgYOQLTMjHwvbk/edit" style={{textDecoration:`none`, color: `#a866ce`}}>Bursary Application</a>
                <br></br>
                <Link to="/" style={{textDecoration:`none`, color:`#a866ce`}}>Register Now!</Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;