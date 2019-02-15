import React, {useState, useEffect} from 'react'
import PricingTable from '../components/Content/PricingTable'
import Layout from '../Layout'

const Pricing = ({location}) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if(window.scrollY > scrollPosition) {
      setScrollPosition(0)
      window.scrollTo(0, scrollPosition)
    }
  })

  return(
    <Layout pathname={location.pathname}>
      <div className="container">
        <PricingTable title="Subscribe"/>
      </div>
    </Layout>
  )
}

export default Pricing