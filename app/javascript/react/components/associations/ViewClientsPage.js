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
      let clientphone = clients.phone
      clientphone.toString()
      let phone = clientphone.slice(0, 3) + "-" + clientphone.slice(3, 6) + "-" + clientphone.slice(6, 10)
      return(
        <UserTile
        first={clients.first_name}
        last={clients.last_name}
        phone={phone}
        email={clients.email}
        />
      )
      })


    return(
    <center>
      <br/><br/>
      <div>{clientTiles}</div>
    </center>
    )
  }

export default ViewClientsPage
