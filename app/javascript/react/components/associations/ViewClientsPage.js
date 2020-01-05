import React, { useState, useEffect } from 'react'
import UserTile from './UserTile'

const ViewClientsPage = props => {
  const [info, setInfo] = useState([])

    useEffect(() => {
      fetch(`/api/v1/clients`)
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
        setInfo(body.clients)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])

    const clientTiles = info.map(clients => {
      return(
        <UserTile
        first={clients.first_name}
        last={clients.last_name}
        phone={clients.phone}
        email={clients.email}
        />
      )
      })


    return(
    <center>
    <br/>
      <div className="advisor-client-question">My Clients</div>
      <br/><br/>
      <div>{clientTiles}</div>
    </center>
    )
  }

export default ViewClientsPage
