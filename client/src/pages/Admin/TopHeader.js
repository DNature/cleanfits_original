import React from 'react'
import {Link} from 'react-router-dom'

const TopHeader = () => {
  return(
    <header className="bg-dark fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          backgroundColor: '#fff',
          zIndex: 1500
        }}>
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand h1" to="/">Cleanfits</Link>
          <div className="controls d-flex justify-content-end">
            <div className="dropdown">
              <button
                type="button"
                className="btn dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  background: 'transparent',
                  color: "#fff"
                }}
              >
                <i className="fas fa-cog"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/admin/settings">Settings</a>
                <a className="dropdown-item" href="/">Go to Main Site</a>
              </div>
            </div>

            <Link to="signup" className="btn" style={{background: 'transparent', color: "#fff"}}>LOGOUT</Link>

          </div>
        </div>
      </nav>

      <div className="container">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Link</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Link</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Link</Link>
          </li>
        </ul>
      </div>

    </header>
  )
}

export default TopHeader



