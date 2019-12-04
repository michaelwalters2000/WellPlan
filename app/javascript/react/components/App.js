import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import ClientFormContainer from './ClientFormContainer'
import ClientFormPage from './ClientFormPage'

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ClientFormPage}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
