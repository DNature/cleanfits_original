import React, {useMemo} from 'react'

export const AppContext = React.createContext();

export function AppProvider ({children}) {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}
