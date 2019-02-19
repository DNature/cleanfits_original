import React, {useState, useContext} from 'react'
import TopHeader from './TopHeader'
import PricingForm from './PricingForm'
//import axios from 'axios'
import {AppContext} from '../../Context'
//import {Link} from 'react-router-dom'
import './index.css'
import SortablePricingTable from './SortablePricingTable';
import Modal from './Modal';

const AdminHome = () => {
  const [isMenuShown, setMenuShown] = useState(true)
  const [currentItem, setCurrentItem] = useState({})
  const {state: {pricing}} = useContext(AppContext)

  // let item = null
  // useEffect(() => {
  //   item !== null &&
  //   console.log(currentItem)
  // }, [item])

  const editPricing = id => {
    let item = pricing.filter(i => i._id === id)
    setCurrentItem({...item[0]})
  }

  const deletePricing = id => {
    console.log(id)
  }

  return(
    <div className="admin-home">
      <Modal currentItem={currentItem}/>
      <TopHeader
        isMenuShown={isMenuShown}
        setMenuShown={setMenuShown}
      />

      <main style={{paddingTop: '100px'}}>
        <div className='pt-3'>
          <div className="container">
            <h1 className="bd-title">Pricing</h1>
            <PricingForm />
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