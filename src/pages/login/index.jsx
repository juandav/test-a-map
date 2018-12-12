import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

class LoginPageContainer extends Component {
  constructor (props) {
    super(props)
  }
  doClick = () => {
    // const { history } = this.props
    // history.push("/Dashboard")
    // console.log( this.props)
    // here action redux
  }
  render () {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ...this.props,
        doClick: this.doClick
      })
    })
  }
}

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 800,
  },
  title: {
    fontSize: 18,
  },
  layout: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
  centeredCardContainer: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

const Form = ({ doClick, classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Login
      </Typography>
      <TextField
        id="username"
        rows={1}
        label="Username"
        defaultValue="admin"
        margin="normal"
      />
      <TextField
        id="password"
        rows={1}
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => doClick()}>Login</Button>
    </CardActions>
  </Card>
)

function LoginUIPage (props) {
  const { classes } = props
  return (
    <div className={classes.layout}>
      <div className={classes.centeredCardContainer}>
        <LoginPageContainer {...props} >
          <Form />
        </LoginPageContainer>
      </div>
    </div>
  )
}

LoginUIPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginUIPage)