import React, {useState, useEffect} from 'react'
import PricingForm from './PricingForm';


const Modal = ({currentItem}) => {
  console.log(currentItem)
  const newValues = {...currentItem}
  console.log(newValues)
  const [values, setValues] = useState({...newValues})

  useEffect(() => {
    setValues({...newValues})
  }, [currentItem])

  const submitPricingForm = e => {
    e.preventDefault()
    console.log(values)
  }

  return(
    <div className="modal fade" id="editPricingModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Update Pricing</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          {Object.keys(values).length > 0
            ? (
              <form className="pricing-from" onSubmit={submitPricingForm}>
                <div className="form-group">
                  <label htmlFor="name">Name of Product</label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={e => setValues({...values, name: e.target.value})}
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name of Product"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price of Product</label>
                  <input
                    type="number"
                    value={values.price}
                    onChange={e => setValues({...values, price: e.target.value})}
                    className="form-control"
                    name="price"
                    id="price"
                    placeholder="Price of Product"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="discount">Discount (if any, in percentage)</label>
                  <input
                    type="number"
                    value={values.discount}
                    onChange={e => setValues({...values, discount: e.target.value})}
                    name="discount"
                    id="discount"
                    className="form-control"
                    placeholder="Discount eg 10 for  10%"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Featured Image</label>
                  <input
                    type="file"
                    onChange={e => setValues({...values, image: e.target.files[0]})}
                    name="image"
                    id="image"
                    className="form-control"
                  />
                </div>
                <div className="buttons">
                  <input type="submit" value="Save Changes" className="btn btn-primary float-left" />
                  <button type="button" className="btn btn-danger float-right" data-dismiss="modal">Discard Changes</button>
                </div>
                {/* {pricingStatus === 'PENDING' && (
                  <button class="btn btn-light ml-2" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span class="sr-only">Loading...</span>
                  </button>
                )} */}
              </form>
            ) : <p>Loading Form</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal