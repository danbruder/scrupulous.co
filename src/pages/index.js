import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`scrupulous`]} />
    <div id="main">
      <h1>Custom Software</h1>
      <p>Scrupulous builds web applications for businesses.</p>
      <a href="mailto:dan@scrupulous.co?Subject=Hello!" class="contact-us">
        Contact Us
      </a>
    </div>
  </Layout>
)

export default IndexPage
