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
    window.location.replace("https://sheltered-tor-66167.herokuapp.com/viewadvisor")
  }

  function switchPage() {
    setTimeout(redirect, 5500)
  }

  return(
  <center>
      <br/>
      <div>{switchPage()}</div>
      <center><br/>{link}</center>
  </center>
  )
}

export default MatchPage
