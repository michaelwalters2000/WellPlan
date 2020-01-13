import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AdvisorOrClientPage = props => {
  return(
  <center>
  <link rel="stylesheet" href="..../assets/images/brick.30.07.png"/>
    <form className="advisor-client-box">
      <div className="advisor-client-question">I am a</div>
      <div className="colums">
        <div><Link to={`/clients/`} className="client-box">Client</Link></div>
        <div><Link to={`/advisors/`} className="advisor-box">Advisor</Link></div>
      </div>
    </form>
  </center>
  )
}

export default AdvisorOrClientPage
