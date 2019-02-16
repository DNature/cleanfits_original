import React, {useState, useEffect, useReducer, useContext} from 'react'
import TopHeader from './TopHeader'
import PricingForm from './PricingForm'
import axios from 'axios'
import {AppContext} from '../../Context'
import {Link} from 'react-router-dom'
import './index.css'
import SortablePricingTable from './SortablePricingTable';

const AdminHome = () => {
  const [isMenuShown, setMenuShown] = useState(true)
  const [currentItem, setCurrentItem] = useState({})
  const [scrollPosition, setScrollPosition] = useState(window.scrollY)
  const {state: {pricing}, dispatch} = useContext(AppContext)

  let item = null
  useEffect(() => {
    item !== null && setCurrentItem({...item[0]})
  }, [item])

  const editPricing = id => {
    item = pricing.filter(i => i._id === id)
    setCurrentItem({...item[0]})
    setScrollPosition(0)
    window.scrollTo(0, scrollPosition)
  }

  const deletePricing = id => {
    console.log(id)
  }

  return(
    <div className="admin-home">
      <TopHeader
        isMenuShown={isMenuShown}
        setMenuShown={setMenuShown}
      />

      <main style={{paddingTop: '100px'}}>
        <div className='pt-3'>
          <div className="container">
            <h1 className="bd-title">Pricing</h1>
            <PricingForm currentItem={currentItem}/>
            <SortablePricingTable
              editPricing={editPricing}
              deletePricing={deletePricing}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminHome