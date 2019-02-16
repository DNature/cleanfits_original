import React from 'react'
import reducer from '../Reducer'
import axios from 'axios'
import { pathInEnv } from '../utils';
const AppContext = React.createContext()

const initialState = {
  pricing: [],
  pricingStatus: null,
  cart: [],
  name: 'francis'
}

function AppProvider ({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  React.useEffect(() => {
    axios({
      url: pathInEnv('/api/v1/pricing'),
      method: 'GET'
    })
      .then(response => {
        console.log(response.data)
        dispatch({type: 'SET_PRICING', payload: response.data.pricingList})
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

const AppConsumer = AppContext.Consumer

export { AppContext, AppProvider, AppConsumer }
