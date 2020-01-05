import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MatchTile from './MatchTile'

const MatchPage = props => {
const [advisor, setAdvisor] = useState([])
const [info, setInfo] = useState([])
const[link, setLink] = useState(<div></div>);

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
      setInfo(body.info)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const advisorTiles = info.map(user => {
    return(
      <MatchTile
      first={user.first_name}
      last={user.last_name}
      phone={user.phone}
      email={user.email}
      />
    )
    })

    const reloadPage = (event) => {
      document.reload()
    }

  function redirect() {
    setLink(<h1><Link onClick={reloadPage} to={`/viewadvisor/`} className="meet-advisor">Meet My Advisor !</Link></h1>);

  }

  function switchPage() {
    setTimeout(redirect, 3000)
  }

  return(
  <center>
      <div className="advisor-client-question"></div>
      <br/>
      <div>{switchPage()}</div>
      <center>{link}</center>
  </center>
  )
}

export default MatchPage
