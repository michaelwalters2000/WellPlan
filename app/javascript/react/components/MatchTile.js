import React from "react"
import { Link } from "react-router-dom"

const MatchTile = props => {
  return (
    <div className="grid-x">
          Id: {props.id}<br/>
          Score: {props.score}
    </div>
  )
}

export default MatchTile