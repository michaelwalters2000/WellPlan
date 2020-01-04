import React from "react"
import { Link } from "react-router-dom"

const MatchTile = props => {
  return (
    <div className="grid-x">
          Id: {props.id}<br/>
          Level: {props.level}<br/>
          Score: {props.score}<br/>
          User Id: {props.user}
    </div>
  )
}

export default MatchTile
