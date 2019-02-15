import React from 'react'
import Experience from '../components/Content/Experience'
import HowItWorks from '../components/Content/HowItWorks'
import PricingTable from '../components/Content/PricingTable'
import GetInTouch from '../components/Content/GetInTouch'

import Layout from '../Layout'
const Home = ({location}) => {
  return (
    <Layout pathname={location.pathname}>
      <main style={{display: "block"}}>
        <Experience />
        <HowItWorks title="How it Works"/>
        <PricingTable title="Pricing"/>
        <GetInTouch title="Get In Touch" />
      </main>
    </Layout>
  )
}

export default Home;



// className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center px-3"
//             style={{
//               minHeight: '50vh',
//               flexDirection: 'column',
//               textAlign: 'center'
//             }}