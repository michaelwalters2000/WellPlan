import React, { useState, useEffect } from 'react'
import UserTile from './UserTile'

const ViewAdvisorPage = props => {
const [advisor, setAdvisor] = useState([])
const [info, setInfo] = useState([])

  useEffect(() => {
    fetch(`/api/v1/advisors`)
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
      setInfo(body.advisors)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const advisorTiles = info.map(advisor => {
    return(
      <UserTile
      first={advisor.first_name}
      last={advisor.last_name}
      phone={advisor.phone}
      email={advisor.email}
      />
    )
    })


  return(
  <center>
  <br/>
    <div className="advisor-client-question">Advisor</div>
    <br/>
    <div>{advisorTiles}</div>
  </center>
  )
}

export default ViewAdvisorPage
