import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Current map"/>
      <h1>Hi from the second page</h1>
      <p>Displays the map given to by the selected route</p>
      <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
