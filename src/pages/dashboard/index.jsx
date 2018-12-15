import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Profile from '../../components/Profile'
import MenuMap from '../../components/MenuMap'
import Info from '../../components/Info'
import Map from '../../components/map'
import Button from '@material-ui/core/Button'

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
      <Button variant="contained" color="primary" className="logout">
        Logout
      </Button>
      <div className="header"> 
        <Profile /> 
      </div>
      <div className="menu">
        <MenuMap /> 
      </div>
      <div className="info">
        <Info />
      </div>
      <div className="map"> 
        <Map /> 
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
