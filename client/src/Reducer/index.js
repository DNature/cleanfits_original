
const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PRICING_REQUEST_STARTED':
      return {...state, pricingStatus: 'PENDING'}
    case 'ADD_PRICING_REQUEST_SUCCESS':
      return {...state, pricingStatus: 'RESOLVED'}
    case 'ADD_PRICING_REQUEST_ERROR':
      return {...state, pricingStatus: 'REJECTED'}
    case 'ADD_PRICING':
      return Object.assign({}, state, {
        pricing: [...state.pricing, action.payload]
      })
    case 'SET_PRICING':
      const pricing = [...state.pricing, ...action.payload]
      return Object.assign({}, state, {
        pricing: [...state.pricing, ...action.payload]
      })
    default:
      return state
  }
}

export default reducer