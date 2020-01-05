import React from "react"

const UserTile = props => {
  return (
    <div className="grid-x">
          Name: {props.first} {props.last}<br/>
          Phone: {props.phone}<br/>
          Email: {props.email}<br/><br/>
    </div>
  )
}

export default UserTile
