import React from 'react'

const AdminLogin = () => {
  return (
    <div className="admin-login" style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      background: "#fff"
    }}>

      <div className="row w-100">
        <div
          className="col-xs-12 col-sm-8 col-md-8 col-lg-4 mx-auto bg-light py-5 px-5"
          style={{borderRadius: '7px'}}>
        <h1 className="bd-title lead text-center mb-4" style={{fontSize: '2.5rem'}}>Cleanfits</h1>
          <form className="admin-login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          <input type="submit" value="LOGIN" className="btn btn-primary"/>
        </form>
        </div>
      </div>

    </div>
  )
}

export default AdminLogin