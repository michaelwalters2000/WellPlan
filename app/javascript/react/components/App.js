import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import ClientFormContainer from './ClientFormContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ClientFormContainer}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
