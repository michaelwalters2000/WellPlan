import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import ClientFormContainer from './ClientFormContainer'
import ClientFormIndex from './ClientFormIndex'

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ClientFormIndex}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
