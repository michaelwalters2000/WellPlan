import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AdvisorOrClientPage = props => {
  return(
  <center>
  <link rel="stylesheet" href="..../assets/images/brick.30.07.png"/>
    <form className="advisor-client-box">
      <div className="advisor-client-question">I am a</div>
      <div className="colums">
      <div className="option-box2">
      <a id="optionbox" href="/clients" className="r-link ai-element22 ai-element_type1 ai-element1">
				<span id="blue" className="ai-element__label">Client</span>
			</a>
      </div>
      <div className="option-box3">
      <a id="optionbox" href="/advisors" className="r-link ai-element22 ai-element_type1 ai-element1">
        <span id="blue" className="ai-element__label">Advisor</span>
      </a>
      </div>
      </div>
    </form>
  </center>
  )
}

export default AdvisorOrClientPage
