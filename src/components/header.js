import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Frosh3019Logo.png"
import Background from "../images/HeaderBackground.png"
import '../pages/App.css'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Header = ({ siteTitle }) => (
  
  <span className="logo">
  <header style = {{backgroundImage: `url(${Background})`, marginBottom: `1.45rem`}}>
      <img src={Logo} style={{height: 400, position: 'relative', left: '50%',
        transform: 'translate(-50%, 0)'}} alt="" />
      <h1 style= {{position: 'relative', left: `44%`, transform: 'translate(0, -50%)', color: `white`}} alt="">Frosh 3019</h1>
      <h2 style= {{position: 'relative', left: `40%`, transform: 'translate(0, -50%)', color: `white`}} alt="">The Frosh of Tomorrow</h2>
      <DropdownButton/>
    </header>
    </span>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
