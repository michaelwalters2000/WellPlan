import React from "react"

const UserTile = props => {
  return (
    <div class="container">
      <div class="card">
      <div class="front side">
        <h1 class="logo">{props.first} {props.last}</h1>
      </div>
      <div class="back side">
    <div class="info">
      <p><span class="property">Phone: </span>{props.phone}</p>
      <p><span class="property">Email: </span>{props.email}</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default UserTile
