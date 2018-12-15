import React from 'react'
import { ProgressBar } from "react-step-progress-bar"
import './styless.css'

function Info () {
  return (
    <div className="info-ca">
      <h2>Composición Ancestral</h2>
      <p>
        Tu ADN cuenta la historia de quién eres y cómo estas conectado
        a las poblaciones de todo el mundo.
      </p>
      <p>
        Rastrea tu herencia a través de los siglos y descubre pistas
        sobre dónde vivieron tus ancestros y cuando.
      </p>

      <ProgressBar
        percent={100}
        width={700}
        height={20}
        filledBackground="linear-gradient(to right, #EFEFFF, #02386F)"
      />
    </div>
  )
}

export default Info