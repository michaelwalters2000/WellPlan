import React from "react"
import { Link } from "react-router-dom"

const UserTile = props => {
  return (
    <div className="grid-x">
          Name: {props.first} {props.last}<br/>
          Phone: {props.phone}<br/>
          Email: {props.email}
    </div>
  )
}

export default UserTile
