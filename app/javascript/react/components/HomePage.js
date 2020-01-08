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
  <div class="section">

      </div>
  )
}


export default HomePage
