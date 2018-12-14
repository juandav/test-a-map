import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Map from '../../components/map'
import { ProgressBar } from "react-step-progress-bar"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
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
  const { classes } = props
  return (
    <div className="container">

      <header className="header">
        
      </header>

      <div className="menu">
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography component="span" className={classes.inline} color="textPrimary" >
                    Selecciona una región para detallar el porcentaje de tu composición ancestral.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography component="h6" className={classes.inline} color="textPrimary">
                    Region Geografica
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography component="h1" className={classes.inline} color="textPrimary">
                    America
                  </Typography>
                </React.Fragment>
              }
            />
            <Button size="small" variant="contained" color="primary" className={classes.margin}>
              Detalles
            </Button>
          </ListItem>
        </List>
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