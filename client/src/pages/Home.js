import React from 'react'

import Layout from '../Layout'
const Home = () => {
  return (
    <Layout>
      <main style={{display: "block"}}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-item-center text-center" style={{flexDirection: 'column'}}>
              <h1 className="bd-title">Experience Premium Servies</h1>
              <p className="lead mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis voluptas repellendus id aliquid animi.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{overflow: 'hidden'}}>
              <img src="/images/shirts.jpeg" className="img-fluid" alt="Picture of shirts in hangers"/>
            </div>
          </div>
        </div>
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