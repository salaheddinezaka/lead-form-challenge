import React from 'react'
import ReactDOM from 'react-dom'
import { LeadForm } from './pages/lead-form'
import reportWebVitals from './reportWebVitals'
import './reset.css'
import { MortgageLeadProvider } from './state/context'

ReactDOM.render(
  <React.StrictMode>
    <MortgageLeadProvider>
      <LeadForm />
    </MortgageLeadProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
