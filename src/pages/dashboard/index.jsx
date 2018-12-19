import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Profile from '../../components/Profile'
import MenuMap from '../../components/MenuMap'
import Info from '../../components/Info'
import Map from '../../components/map'
import Button from '@material-ui/core/Button'
import DashboardContainer from '../../containers/DashboardContainer'
import './styless.css'
import "react-step-progress-bar/styles.css"

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper, 
    flexGrow: 1,
  },
  inline: {
    display: 'inline',
  },
  margin: {
    margin: theme.spacing.unit,
  },
})

const Dashboard = ({ logout, account }) => (
  <div className="container">
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Button variant="contained" color="primary" className="logout" onClick={() => logout()}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
    
    <div className="header"> 
      <Profile account={account}/> 
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

function DashboardUIPage (props) {
  return (
    <DashboardContainer {...props} >
      <Dashboard />
    </DashboardContainer>
  )
}

DashboardUIPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DashboardUIPage)