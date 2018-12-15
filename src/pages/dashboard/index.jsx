import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuMap from '../../components/MenuMap'
import Info from '../../components/Info'
import Map from '../../components/map'

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
      <div className="header"> <h1>HEADER</h1></div>
      <div className="menu"> <MenuMap /> </div>
      <div className="info"> <Info /> </div>
      <article className="map"> <Map /> </article>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
