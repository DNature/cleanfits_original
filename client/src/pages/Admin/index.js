import React, {useState} from 'react'
import TopHeader from './TopHeader'
import {Link} from 'react-router-dom'
import './index.css'

const AdminHome = () => {
  const [isMenuShown, setMenuShown] = useState(true);


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
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminHome