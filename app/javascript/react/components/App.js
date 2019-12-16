import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import ClientForm from './client/ClientForm'
import ClientFormPage from './client/ClientFormPage'
import AdvisorForm from './advisor/AdvisorForm'

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ClientFormPage}/>
      <Route exact path="/advisors" component={AdvisorForm}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
