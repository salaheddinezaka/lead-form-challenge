import React, { createContext, useContext, useReducer } from 'react'
import { initialState, LeadReducer } from './reducer'

const LeadContext = createContext()

export const MortgageLeadProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LeadReducer, initialState)
  return (
    <LeadContext.Provider value={{ state, dispatch }}>
      {children}
    </LeadContext.Provider>
  )
}

export const useLeadContext = () => useContext(LeadContext)