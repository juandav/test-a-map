import React from 'react'
import './styless.css'

function Profile (props) {
  return (
    <div className="profile">
      <img style={{ marginLeft: "50px", }} src="/img/profile.png" alt="PF" height="64" width="64"/>
      <div style={{ marginTop: "10px", marginLeft: "10px", }}>
        <h4 style={{ margin: "-2.5% 0", }}> Bienvenido </h4>
        <h1 style={{ margin: "-2.5% 0", }}> {props.account.name} </h1>
      </div>
    </div>)
}

export default Profile