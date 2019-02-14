import React from 'react'
import Layout from '../Layout'

const About = ({location}) => {
  return(
    <Layout pathname={location.pathname}>
      <p className="lead">about</p>
    </Layout>
  )
}

export default About