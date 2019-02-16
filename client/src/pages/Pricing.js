import React, {useState, useEffect, useContext} from 'react'
import PricingTable from '../components/Content/PricingTable'
import {AppContext} from '../Context'
import Layout from '../Layout'
import PricingCard from '../components/Content/PricingCard';

const Pricing = ({location}) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if(window.scrollY > scrollPosition) {
      setScrollPosition(0)
      //window.scrollTo(0, scrollPosition)
    }
  })

  const {state: {pricing}, dispatch} = useContext(AppContext);

  return(
    <Layout pathname={location.pathname}>
      <div className="container">
        <PricingTable title="Subscribe"/>
        <div className="row">
          {pricing.length > 0
            ? pricing.map(item => (
              <div
                key={item._id}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-between">
                  <PricingCard item={item} />
              </div>
            ))
            : <p>Loading...</p>
          }
        </div>
      </div>
    </Layout>
  )
}

export default Pricing