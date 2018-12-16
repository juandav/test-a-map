import React from 'react'
import { ProgressBar } from "react-step-progress-bar"
import './styless.css'

function Info () {
  return (
    <div className="info-ca">
      <h2 style={{marginLeft: "10px",}}>Composición Ancestral</h2>
      <p style={{marginLeft: "10px",}}>
        Tu ADN cuenta la historia de quién eres y cómo estas conectado
        a las poblaciones de todo el mundo.
      </p>
      <p style={{marginLeft: "10px",}}>
        Rastrea tu herencia a través de los siglos y descubre pistas
        sobre dónde vivieron tus ancestros y cuando.
      </p>
      <br/>
      <div style={{marginLeft: "10px", zIndex: -1, position: "absolute"}}>
        <ProgressBar
          percent={100}
          width={800}
          height={20}
          filledBackground="linear-gradient(to right, #EFEFFF, #02386F)"
        />
      </div>
      <br/>
    </div>
  )
}

export default Info