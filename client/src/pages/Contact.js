import React from 'react'
import Layout from '../Layout'

const Contact = ({location}) => {
  return(
    <Layout pathname={location.pathname}>
      <p className="lead">contact</p>
    </Layout>
  )
}

export default Contact