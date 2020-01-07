import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = props => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch(`/api/v1/sessions`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then((body) => {
      setInfo(body.role)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
  <center>
      <div className="advisor-client-question"></div>
      <br/>Home
      <div>{info}</div>
  </center>
  )
}


export default HomePage


// <div class="section">
// 	<div class="section__item">
// 		<div class="section__box">
// 			<a href="#0" class="r-link ai-element ai-element_type1 ai-element4">
// 				<span class="ai-element__label">I'm a link</span>
// 			</a>
// 		</div>
// 		<div class="section__box">
// 			<button class="r-button ai-element ai-element_type1 ai-element4">
// 				<span class="ai-element__label">I'm a button</span>
// 			</button>
// 		</div>
// 	</div>
// </div>
// <div class="section">
// 	<div class="section__item">
// 		<div class="section__box">
// 			<a href="#0" class="r-link ai-element ai-element_type1 ai-element5">
// 				<span class="ai-element__label">I'm a link</span>
// 			</a>
// 		</div>
// 		<div class="section__box">
// 			<button class="r-button ai-element ai-element_type1 ai-element5">
// 				<span class="ai-element__label">I'm a button</span>
// 			</button>
// 		</div>
// 	</div>
// </div>
// <div class="section">
// 	<div class="section__item">
// 		<div class="section__box">
// 			<a href="#0" class="r-link ai-element ai-element_type3 ai-element6">
// 				<span class="ai-element__label">I'm a link</span>
// 			</a>
// 		</div>
// 		<div class="section__box">
// 			<button class="r-button ai-element ai-element_type3 ai-element6">
// 				<span class="ai-element__label">I'm a button</span>
// 			</button>
// 		</div>
// 	</div>
// </div>
// <div class="section">
// 	<div class="section__item">
// 		<div class="section__box">
// 			<a href="#0" class="r-link ai-element ai-element_type3 ai-element7">
// 				<span class="ai-element__label">I'm a link</span>
// 			</a>
// 		</div>
// 		<div class="section__box">
// 			<button class="r-button ai-element ai-element_type3 ai-element7">
// 				<span class="ai-element__label">I'm a button</span>
// 			</button>
// 		</div>
// 	</div>
// </div>
// <div class="section">
// 	<div class="section__item">
// 		<div class="section__box">
// 			<a href="#0" class="r-link ai-element ai-element_type3 ai-element8">
// 				<span class="ai-element__label">I'm a link</span>
// 			</a>
// 		</div>
// 		<div class="section__box">
// 			<button class="r-button ai-element ai-element_type3 ai-element8">
// 				<span class="ai-element__label">I'm a button</span>
// 			</button>
// 		</div>
// 	</div>
// </div>
// <div class="section">
// 	<div class="section__item">
// 		<div class="section__box">
// 			<a href="#0" class="r-link ai-element ai-element_type3 ai-element9">
// 				<span class="ai-element__label">I'm a link</span>
// 			</a>
// 		</div>
// 		<div class="section__box">
// 			<button class="r-button ai-element ai-element_type3 ai-element9">
// 				<span class="ai-element__label">I'm a button</span>
// 			</button>
// 		</div>
// 	</div>
// </div>
//
