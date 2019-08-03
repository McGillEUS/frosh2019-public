import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Frosh3019Logo.png"
import Background from "../images/HeaderBackground.png"

const Footer = ({ siteTitle }) => (
  
  <span className="logo">
  <footer style = {{backgroundColor:`#260040`}}>
      <h2 style = {{position:`relative`, color: `white`}}>McGill EUS Frosh 2019</h2>
      <section>
            <dl className="alt">
                <h3 style = {{position:`relative`, color: `white`}}>Address</h3>
                <h4 style = {{position:`relative`, color: `white`}}>845 Sherbrooke St W  &bull; Montreal, QC &bull; H3A 0G4</h4>
                <h3 style = {{position:`relative`, color: `white`}}>Phone</h3>
                <h4 style = {{position:`relative`, color: `white`}}>(514) 398-4455</h4>
                <h3 style = {{position:`relative`, color: `white`}}>Email</h3>
                <h4 style = {{position:`relative`, color: `white`}}><a href="#">oweek.communications@mcgilleus.ca</a></h4>
            </dl>
            <ul className="icons">
                <li><a href="https://www.facebook.com/EngineeringFrosh/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/EngineeringFrosh/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright" style = {{position:`relative`, color: `white`}}>&copy; McGill EUS 2019</p>
        <p className="copyright" style = {{position:`relative`, color: `white`}}> Made with ❤️ by Sam Cattani </p>
    </footer>
    </span>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
