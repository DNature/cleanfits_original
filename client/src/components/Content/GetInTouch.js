import React from 'react'
import Title from '../Title/Title'

const GetInTouch = ({title}) => {
  return(
    <div className="get-in-touch py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <Title title={title} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-6 mx-auto bg-white py-5">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="form-control" name="fullname" id="fullname" placeholder="What is your name?"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="How do we get in touch with you"/>
              </div>
              <div className="form-group">
                <label htmlFor="enquiry">Mesage/Enquiry</label>
                <textarea name="enquiry" id="enquiry" cols="30" rows="10" className="form-control" placeholder="Tell us what's on your mind..."></textarea>
              </div>
              <input type="submit" value="Send Message" className="btn btn-primary"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch