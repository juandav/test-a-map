import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { withStyles, } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import LoginContainer from '../../containers/LoginContainer'
import { validate, asyncValidate } from '../../utils/form'

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

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const renderPasswordField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    type="password"
    autoComplete="current-password"
  />
)

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <CardContent>
        <Field name="email" component={renderTextField} label="Email" />
        <Field name="password" component={renderPasswordField} label="Password" />
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          fullWidth
          color="primary"
          onClick={reset}
          disabled={pristine || submitting}
          >
          Clear
        </Button>
        <Button
          type="submit"
          fullWidth
          color="primary"
          disabled={pristine || submitting}
        >
          Login
        </Button>
      </CardActions>
    </form>
  )
}

const ReduxForm = reduxForm({
  form: 'Form',
  validate,
  asyncValidate,
})(Form)

const LoginForm = props =>  <ReduxForm onSubmit={props.login} />

function LoginUIPage (props) {
  const { classes } = props
  return (
    <div className={classes.layout}>
      <div className={classes.centeredCardContainer}>
        <Card className={classes.card}>
            <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
              Login
            </Typography>
            <LoginContainer {...props} >
              <LoginForm />
            </LoginContainer>
        </Card>
      </div>
    </div>
  )
}

LoginUIPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginUIPage)