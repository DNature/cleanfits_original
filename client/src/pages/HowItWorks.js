import React from 'react'
import Layout from '../Layout'

const HowItWorks = ({location}) => {
  return(
    <Layout pathname={location.pathname}>
      <p className="lead">how it works</p>
    </Layout>
  )
}

export default HowItWorks