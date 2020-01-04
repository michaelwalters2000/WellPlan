import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserTile from './UserTile'

const MatchPage = props => {
const [advisor, setAdvisor] = useState([])
const [info, setInfo] = useState([])

  useEffect(() => {
    fetch(`/api/v1/matches`)
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
      setAdvisor(body.advisor)
      setInfo(body.info)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const userTiles = info.map(user => {
    return(
      <UserTile
      first={user.first_name}
      last={user.last_name}
      phone={user.phone}
      email={user.email}
      />
    )
    })


  return(
  <center>
    <form className="advisor-client-box">
      <div className="advisor-client-question">Match</div>
      <br/>
      <div>{userTiles}</div>
    </form>
  </center>
  )
}

export default MatchPage
