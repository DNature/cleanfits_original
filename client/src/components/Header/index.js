import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = ({pathname = ""}) => {
  console.log(pathname)
  return(
    <header className={pathname === "/" ? 'header': null}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          backgroundColor: '#fff',
          zIndex: 1500,
          borderBottom: '1px solid #ccc'
        }}>
        <div className="container">
          <Link className="navbar-brand" to="/">Cleanfits</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {/* <li className={pathname === '/products' ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to="/products">Products</Link>
              </li> */}
              <li className={pathname === '/pricing' ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className={pathname === '/how-it-works' ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to="/how-it-works">How it Works</Link>
              </li>
              <li className={pathname === '/about' ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className={pathname === '/contact' ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <Link to="signup" className="btn btn-light">Signup</Link>
          </div>
        </div>
      </nav>
      <br />
      <br />
      {pathname === '/' ?  (
        <div className="overlay">
          <div className="container" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            height: '100vh'
          }}>
            <h1 className="text-white hero-title">On-Demand Premium Dry Cleaning Services</h1>
            <Link to="/signup" className="btn btn-primary btn-lg mt-5">SIGN ME UP</Link>
          </div>
        </div>
      ) : null}

    </header>
  )
}

export default Header