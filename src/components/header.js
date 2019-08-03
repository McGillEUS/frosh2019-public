import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Frosh3019Logo.png"

const Header = ({ siteTitle }) => (
  <header style = {{backgroundColor: `black`}}>
        <span className="logo"><img src={Logo} alt="" /></span>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
