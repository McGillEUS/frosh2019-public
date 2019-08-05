
import React from "react"
import { Link } from "gatsby"
import './App.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import YouTube from "../components/youtube"
import Sponsors from "../images/SponsorPhoto.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      justifyContent: `center`,
      alignItems:`center`,
      height: '17vh',
      display: `flex`,
    }}>
    <h1 style={{
      margin: `0 auto`,
      justifyContent: `center`,
      alignItems:`center`,
      display: `flex`,
      paddingLeft:'15px', paddingRight:'15px'
    }}>
    General Information</h1>
    </div>
    <br></br>
    <p style = {{display: `flex`, paddingLeft:'15px', paddingRight:'15px'}}>Welcome to McGill Engineering! We here at the Engineering Undergraduate Society (EUS) would like to wish you a warm welcome to McGill. The EUS is the student-run representative body of undergraduate students in the Faculty of Engineering, supporting student clubs, design teams, services, groups, and more. Your first chance to get involved in the EUS will be at Orientation Week, or Engineering Frosh, occurring August 29th through September 1st. Engineering Frosh is the largest event of the Fall semester, with the majority of the 800 new engineering students taking part in events such as concert nights, sports, beach day, and more! The team of Engineering Frosh Coordinators, composed entirely of engineering students, has been working hard all summer to bring you the most exciting week possible. Check out our event trailer and our Facebook and Instagram pages below, and email us any time at oweek@mcgilleus.ca.</p>
    <br></br>
    <br></br>
    
    <YouTube youtubeId={`_UH15kKrVmI`} />

    <br></br>
    <br></br>

    <div style={{
      justifyContent: `center`,
      alignItems:`center`,
      height: '17vh',
      display: `flex`,
    }}>

    <h1 style={{paddingLeft:'15px', paddingRight:'15px'}}> Sponsors</h1>
    </div>
    <div style={{
      justifyContent: `center`,
      alignItems:`center`,
      display: `flex`,
    }}>
    <img style = {{display: `flex`}}src={ Sponsors } />
    </div>

  <br></br>
  <br></br>

<div style={{
      justifyContent: `center`,
      alignItems:`center`,
      height: '17vh',
      display: `flex`,
    }}>

    <h1 style={{paddingLeft:'15px', paddingRight:'15px'}}> Map</h1>
    </div>
    <div style={{
      justifyContent: `center`,
      alignItems:`center`,
      display: `flex`,
    }}>
    <div className = "responsive">
                <iframe  src="https://www.google.com/maps/d/embed?mid=1RaEaAYk3DDxatIi5vHlH-9npIWr95XNi" width="640" height="480" style={{display:`flex`}}></iframe>
              </div>
    </div>
  </Layout>
)

export default IndexPage
