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

  if (info > 0) {
    window.location.href = '/choose';
  }

  return(
  <div class="section">
    Homepage
  </div>
  )
}


export default HomePage
