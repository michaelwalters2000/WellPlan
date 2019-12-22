import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import ClientForm from './client/ClientForm'
import ClientFormPage from './client/ClientFormPage'
import AdvisorFormPage from './advisor/AdvisorFormPage'

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/clients" component={ClientFormPage}/>
      <Route exact path="/advisors" component={AdvisorFormPage}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
