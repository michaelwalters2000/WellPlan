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
    let phonearray = []
    let area = advisor.phone[0] + advisor.phone[1] + advisor.phone[2] + '-' + advisor.phone[3] + advisor.phone[4] + advisor.phone[5] + '-' + advisor.phone[6] + advisor.phone[7] + advisor.phone[8] + advisor.phone[9]
    return(
      <UserTile
      first={advisor.first_name}
      last={advisor.last_name}
      phone={area}
      email={advisor.email}
      />
    )
    })


  return(
  <center>
    <div>{advisorTiles}</div>
  </center>
  )
}

export default ViewAdvisorPage
