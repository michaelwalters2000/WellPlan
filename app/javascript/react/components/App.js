import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import AdvisorOrClientPage from './AdvisorOrClientPage'
import MatchPage from './match/MatchPage'
import ClientFormPage from './client/ClientFormPage'
import AdvisorFormPage from './advisor/AdvisorFormPage'
import ViewClientsPage from './associations/ViewClientsPage'
import ViewAdvisorPage from './associations/ViewAdvisorPage'
import HomePage from './HomePage'

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/choose" component={AdvisorOrClientPage}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/clients" component={ClientFormPage}/>
      <Route exact path="/advisors" component={AdvisorFormPage}/>
      <Route exact path="/matches" component={MatchPage}/>
      <Route exact path="/viewclients" component={ViewClientsPage}/>
      <Route exact path="/viewadvisor" component={ViewAdvisorPage}/>

    </Switch>
    </BrowserRouter>
  )
}

export default App
