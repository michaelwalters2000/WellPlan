import React from "react"
import { Link } from "react-router-dom"

const AdvisorTile = props => {
  return (
    <div className="grid-x">
          Name: {props.first} {props.last}<br/>
          Phone: {props.phone}<br/>
          Email: {props.email}<br/>
    </div>
  )
}

export default AdvisorTile
