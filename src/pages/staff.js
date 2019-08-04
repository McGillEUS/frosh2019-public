import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Dog from "../images/Dog.png"

const StaffPage = () => (
  <Layout>
    <SEO title="Leaders x Staff x Coords" />
    <h1 style={{
      margin: `0 auto`,
      justifyContent: `center`,
      alignItems:`center`,
      display: `flex`
    }}>
    Coming soon! For now, here's a picture of a dog :)</h1>
    <img style={{display:`flex`}} src={Dog}></img>
  </Layout>
)

export default StaffPage
