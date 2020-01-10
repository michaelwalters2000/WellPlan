import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = props => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch(`/api/v1/signups`)
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
      setInfo(body.signups)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  if (info === "user") {
    window.location.href = '/choose';
  }

  return(
    <div className="testbox">
  <form>
  <div className="banner">
    <h1>Find With The Perfect<br/><br/><br/>Advisor For Your<br/><br/><br/>Future{info}</h1>
  </div>
  </form>
  </div>
  )
}


export default HomePage
