import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Frosh3019Logo.png"
import Background from "../images/HeaderBackground.png"
import '../pages/App.css'
import Dropdown from '../components/dropdown'


const Header = ({ siteTitle }) => (
  
  <span className="logo">
  <header style = {{backgroundImage: `url(${Background})`, marginBottom: `1.45rem`}}>
      <img src={Logo} style={{height: 400, position: 'relative', left: '50%',
        transform: 'translate(-50%, 0)'}} alt="" />
        <div style = {{margin: `0 auto`,
        justifyContent: `center`,
        alignItems:`center`,
        height:`13vh`,
        display: `flex`}}>
      <h1 style= {{color: `white`}}> <Link
          to="/" style={{color:`white`, textDecoration:`none`}}>Frosh 3019</Link></h1>
      </div>
      <div style = {{margin: `0 auto`,
        justifyContent: `center`,
        alignItems:`center`,
        height:`13vh`,
        display: `flex`}}>
      <h2 style= {{color: `white`}}>The Frosh of Tomorrow</h2>
      </div>
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
