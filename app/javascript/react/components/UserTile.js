import React from "react"
import { Link } from "react-router-dom"

const UserTile = props => {
  return (
    <div className="grid-x">
          Name: {props.name}
          Email: {props.email}
    </div>
  )
}

export default UserTile
