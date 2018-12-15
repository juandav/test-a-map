import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Map from '../../components/map'
import { ProgressBar } from "react-step-progress-bar"
import MenuMap from '../../components/MenuMap'

import './styless.css'
import "react-step-progress-bar/styles.css"

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  margin: {
    margin: theme.spacing.unit,
  },
})

function Dashboard(props) {
  return (
   <div className="container">

      <header className="header">
        
      </header>

      <div className="menu">
        <MenuMap />
      </div>

      <div className="info">
        <h2>Composición Ancestral</h2>
        <p>
          Tu ADN cuenta la historia de quién eres y cómo estas conectado
          a las poblaciones de todo el mundo.
        </p>
        <p>
          Rastrea tu herencia a través de los siglos y descubre pistas
          sobre dónde vivieron tus ancestros y cuando.
        </p>
      </div>

      <div className="progress">
        <ProgressBar
          percent={100}
          width={700}
          height={20}
          filledBackground="linear-gradient(to right, #EFEFFF, #02386F)"
        />
      </div>

      <article className="map">
        <Map />
      </article>

      <footer className="footer"></footer>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)