import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MatchTile from './MatchTile'
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

  const matchTiles = advisor.map(match => {
    return(
      <MatchTile
      key={match.id}
      id={match.id}
      level={match.level}
      score={match.score}
      user={info}
      />
    )
    })

  const userTiles = info.map(user => {
    return(
      <UserTile
      name={user.first_name}
      email={user.email}
      />
    )
    })


  return(
  <center>
    <form className="advisor-client-box">
      <div className="advisor-client-question">Match</div>
      <br/>
      <div>{matchTiles}</div>
      <div>{userTiles}</div>
    </form>
  </center>
  )
}

export default MatchPage
