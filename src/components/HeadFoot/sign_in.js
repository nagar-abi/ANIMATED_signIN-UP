import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import "./sign-in.css";
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = theme => ({
  appBar: {
    position: 'relative',
   //maxWidth: 6000,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '50%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 2, 2),

  },
  marginTop :{
    marginTop : theme.spacing(1)
  }
}
);

const initialState = {
  email: "",
  password: "",
  resetEmail : "",
  resetEmailError : "",
  emailError: "",
  passwordError: "",

  open : false
};

class SignIN extends React.Component {
  state = initialState;
  
  handleClickOpen = () => {
    this.setState({open : true});
  };

  handleClose = () => {
    this.setState({ open : false});
  };

  handleChange = event => {
    this.setState({
      [event.target.name]:  event.target.value
    });
  };


  validate = () => {
     let emailError = "";
     let passwordError = "";     

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }
    if (emailError || passwordError ) {
      this.setState({ emailError, passwordError});
      return false;
    }
    return true;
  };
  
  validate2=()=>{
    let resetEmailError = "";    
    if (!this.state.resetEmail.includes("@")){
      resetEmailError = "invalid email"
    }
    if (resetEmailError) {
      this.setState({resetEmailError });
      return false;
    }
    return true;
  }
 
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
     // console.log(this.state); //to check console is working fine
      // clear form     
        axios.post('/users/login', {
            Email : this.state.email,
            Password : this.state.password
          } 
                         )
        .then(function (response) {
            console.log(response)
       })
      .catch(function (error) {
          console.log(error)
      }) 
      this.setState(initialState);
    }
  };

  handleReset = event => {
    event.preventDefault();
    const isValid = this.validate2();
    if (isValid) {
      //console.log(this.state.resetEmail); // to check console is working fine
      // clear form     
        axios.post('/users/Forgotpassword', {
            Resetpassword : this.state.email,
          } 
                         )
        .then(function (response) {
            console.log(response)
       })
      .catch(function (error) {
          console.log(error)
      }) 
      this.setState(initialState);
    }
  };

  render() 
  {
    const { classes } = this.props;
    return (
    <div>
    <CssBaseline />     
    <div className={classes.paper}>

        <Avatar alt="AGI DMC" src="https://agidmc.com/images/logo.jpeg"
        />
        <Typography component="h1"  variant="h4" align="center">
          Sign in
        </Typography> 

      <form className={classes.form} onSubmit={this.handleSubmit}>
        <div>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete="email"
            autoFocus
          />          
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        
        <div>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />      
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            classNmae={classes.submit}
            b={2}
          >
            Sign In
          </Button>
             
          <Grid className={classes.marginTop}  container spacing ={2}>
          <Grid item xs={12} sm={12} md={6} lg={7}>
          <Button classNmae={classes.submit}
          variant="outlined" color="primary" onClick={this.handleClickOpen}
          >
          Forgot Password?
          </Button>

              <Dialog  open={this.state.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="form-dialog-title">Reset</DialogTitle>
                <DialogContent>
                <DialogContentText>
                Please enter your email and press send then email 
                reset link will be send to your 
                registered email id.
                </DialogContentText>
                <div>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                name= "resetEmail"
                value={this.state.resetEmail}
                onChange={this.handleChange}
                label="Email Address"
                type="email"
                fullWidth
                />
                <div style={{ fontSize: 12, color: "red" }}>
                {this.state.resetEmailError}
                </div>
                </div>

              </DialogContent>
              <DialogActions>
              <Button onClick={this.handleClose} color="primary">
              Cancel
              </Button>
              <Button onClick={this.handleReset} color="primary">
               Reset
              </Button>
              </DialogActions>
              </Dialog>
              </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
          <Button  variant="outlined" color="primary" >
          New User?
          </Button>
          </Grid>
        </Grid>
      </form>     
      </div>
      </div>
    );
  }
}
export default withStyles(useStyles, { withTheme: true })(SignIN);



























































































































