import React, {useContext} from 'react'
import { pathInEnv } from '../../utils';

const PricingCard = ({item}) => {
  return(
    <div className="card mb-3 w-100" style={{position: 'relative'}}>
      <div style={{position: 'relative'}}>
        <img
          src={pathInEnv(`/images/${item.image}`)} className="card-img-top"
          alt={String(item.image).split('.')[0]}
          style={{objectFit: 'cover', height: '250px'}}
          />
        <div
          className="badge badge-danger"
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            fontSize: '1.2rem'
          }}><span className="naira">N</span>{item.price}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <a href="#" className="btn btn-outline-primary">Add to Cart</a>
      </div>
    </div>
  )
}

export default PricingCard