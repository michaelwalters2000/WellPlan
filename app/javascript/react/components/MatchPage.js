import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MatchTile from './MatchTile'

const MatchPage = props => {
const [matches, setMatches] = useState([])

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
      setMatches(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const matchTiles = matches.map(match => {
    return(
      <MatchTile
      key={match.id}
      id={match.id}
      score={match.score}
      />
    )
    })


  return(
  <center>
    <form className="advisor-client-box">
      <div className="advisor-client-question">Match</div>
      <br/>
      <div>{matchTiles}</div>
    </form>
  </center>
  )
}

export default MatchPage
