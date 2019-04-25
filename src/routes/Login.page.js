import React, { Component } from 'react'
import { login } from "../util/api";
import auth from '../util/auth'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,

  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePassWordChange = this.handlePassWordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange (event) {
    let { value } = event.target
    this.setState({
      username: value
    })
  }

  handlePassWordChange (event) {
    let { value } = event.target
    this.setState({
      password: value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    login(this.state)
        .then(res => {
          let { code, token } = res.data
          console.log(res.data)
          if (code === 403) {
              this.toHome()
          } else if (code === 200) {
            auth.login(() => {
              localStorage.setItem('token', token)
              this.toPublish()
            })
          }
        })
  }

  toHome () {
    this.props.history.push('/home')
  }

  toPublish() {
    this.props.history.push('/publish')
  }

  render() {

    const { classes } = this.props

    return (
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form action="">
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="username">用户名：</InputLabel>
                <Input id="username"
                       name="username"
                       autoComplete="username"
                       autoFocus
                       onChange={this.handleUsernameChange}/>
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="username">密码：</InputLabel>
                <Input id="password"
                       name="password"
                       autoComplete="password"
                       type="password"
                       autoFocus
                       onChange={this.handlePassWordChange}/>
              </FormControl>
              <div>
                <Button onClick={this.handleSubmit}
                        variant="contained"
                        color="primary">登陆</Button>
              </div>
            </form>
          </Paper>
        </main>
    )
  }
}

export default withStyles(styles)(LoginPage)


