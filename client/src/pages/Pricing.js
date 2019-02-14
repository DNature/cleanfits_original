import React from 'react'
import Layout from '../Layout'

const Pricing = ({location}) => {
  return(
    <Layout pathname={location.pathname}>
      <p className="lead">pricing </p>
    </Layout>
  )
}

export default Pricing