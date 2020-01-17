import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MatchTile from './MatchTile'

const MatchPage = props => {
const [info, setInfo] = useState([])
const[link, setLink] = useState(<div class="loader">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
);

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
    setLink(
    <div class="container">
    <br/><br/>
      <a className="matchlink" onClick={reloadPage} href="/viewadvisor" class="button">Meet My Advisor</a>
    </div>)
  }

  function switchPage() {
    setTimeout(redirect, 6000)
  }

  return(
  <center>
      <br/>
      <div>{switchPage()}</div>
      <center className="match-link"><br/>{link}</center>
  </center>
  )
}

export default MatchPage
