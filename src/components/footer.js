import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Facebook from "../images/FacebookLogo.png"
import Instagram from "../images/InstaLogo.png"

const Footer = ({ siteTitle }) => (
  
  <span className="logo">
  <footer style = {{backgroundColor:`#260040`}}>
      <h2 style = {{position:`relative`, color: `white`, paddingTop:`15px`, paddingLeft:`15px`}}>McGill EUS Frosh 2019</h2>
      <section>
                <p style = {{position:`relative`, color: `white`, paddingLeft:`15px`}}>Address ⌭ 845 Sherbrooke St W  &bull; Montreal, QC &bull; H3A 0G4</p>
                <p style = {{position:`relative`, color: `white`, paddingLeft:`15px`}}>Phone ⌭ (514) 398-4455</p>
                <p style = {{position:`relative`, color: `white`, textDecoration:`none`, paddingLeft:`15px`}}><a href="#" style={{color: `white`, textDecoration:`none`}}>Email ⌭ oweek.communications@mcgilleus.ca</a></p>
                <div style={{
      justifyContent: `center`,
      alignItems:`center`,
      height: '17vh',
      display: `flex`
    }}>
               <a href="https://www.facebook.com/EngineeringFrosh/" className="icon fa-facebook alt"><img src={Facebook} style={{paddingRight: '30px'}}></img></a>
             <a href="https://www.instagram.com/EngineeringFrosh/" className="icon fa-instagram alt"><img src={Instagram}/></a>
            </div>
           
        </section>
        <div style={{
      justifyContent: `center`,
      alignItems:`center`,
      height: '17vh',
      display: `flex`
    }}>
        <p className="copyright" style = {{position:`relative`, color: `white`}}>&copy; McGill EUS 2019 <br/>Made with 💕 by Sam Cattani </p>
   </div>
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
