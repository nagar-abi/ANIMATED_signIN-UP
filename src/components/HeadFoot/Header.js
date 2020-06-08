import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';
import SignIn from './sign_in';
import './style.css';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#01B1EF',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const styleSheet = theme=> ( {
  root: {
    flexGrow: 1,
  },
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },
  logo: {
    maxWidth: 160,
    flexGrow: 1,

  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    // boxShadow : 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    
  }
});

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false, open1:false, anchorEl:null};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }
  handleClick1 = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };
  
  handleOpen1 = () => {
    this.setState({open1 : true});
  };

  handleClose1 = () => {
    this.setState({open1:false});
  };

  handleClose = () => {
    this.setState({anchorEl :null});
  
  };

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }
    
    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    const {classes} = this.props
    return (
      <div>
        <AppBar position="fixed" className="navbar1" >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

              
              {/* <Typography color="inherit" variant = "headline">Title</Typography> */}
              <img src="https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png"  className={classes.logo} alt="logo"  />
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
              <ListItem divider>
               <Button color="inherit" 
                       onClick={this.handleOpen1}
               >
               
               <Typography className="theme-font"> Signin</Typography> 
               
               </Button>
               </ListItem>
               <ListItem divider>
               <Button color ="inherit"
               aria-controls="customized-menu"
               aria-haspopup="true"
                //variant="contained"
              // color="white"
              onClick={this.handleClick1}
              button divider
             >
            <Typography className="theme-font"> Follow Us</Typography> 
           </Button>
           </ListItem>
           <StyledMenu
        id="customized-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      >
        <Link underline ="none" color ="inherit"  href="">
        <StyledMenuItem >         
          <ListItemIcon >
            <FacebookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </StyledMenuItem>

        </Link>
          
        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <TwitterIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="twitter" />
        </StyledMenuItem>
        </Link>
        
        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <InstagramIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="instagram" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <PinterestIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="pinterest" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <LinkedInIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="linkedIn" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <WhatsAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="whatsapp" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <YouTubeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="youtube" />
        </StyledMenuItem>
        </Link>
      </StyledMenu>
           

               {/* <ListItem key = {3} button divider> Option 3 </ListItem> */}

             </List>

         </div>
       </SwipeableDrawer>
       <Grid xs={6} >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={this.state.open1}
        onClose={this.handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open1}>
          <Grid xs={12} sm ={6}>
          <div className={classes.paper}>
         
         <SignIn />         
          </div>
          </Grid>
        </Fade>
      </Modal>
      </Grid>
      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props



    return (
      <div>
      <AppBar position="fixed" className="navbar1"  >
        <Toolbar>
          {/* <Typography variant = "headline" style={{flexGrow:1}} color="inherit" >Title</Typography> */}
          {/* <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 1
          </Typography> */}
          <div className={classes.logo}>
          {/* <img src={""} alt="logo" style={{flexGrow:1}}  /> */}
          <img src="https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png"  className={classes.logo} alt="logo"  />
          </div>
          <div className={classes.toolbarButtons}>
          <Button  color="inherit" onClick={this.handleOpen1} >
          <Typography className="theme-font">
          Signin
          </Typography>  
            </Button>
          
          <Button color ="inherit"
          aria-controls="customized-menu"
          aria-haspopup="true"
          //variant="contained"
          // color="white"
          onClick={this.handleClick1}
         >
         <Typography className="theme-font">  Follow Us</Typography>
         </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      >
        <Link underline ="none" color ="inherit"  href="">
        <StyledMenuItem >         
          <ListItemIcon >
            <FacebookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </StyledMenuItem>

        </Link>
          
        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <TwitterIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="twitter" />
        </StyledMenuItem>
        </Link>
        
        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <InstagramIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="instagram" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <PinterestIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="pinterest" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <LinkedInIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="linkedIn" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <WhatsAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="whatsapp" />
        </StyledMenuItem>
        </Link>

        <Link underline ="none" color ="inherit" href="" >
        <StyledMenuItem>
          <ListItemIcon>
            <YouTubeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="youtube" />
        </StyledMenuItem>
        </Link>
      </StyledMenu>
      </div>
        </Toolbar>
      </AppBar>
      <Grid xs={6} >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={this.state.open1}
        onClose={this.handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open1}>
          <Grid xs={12} sm ={6}>
          <div className={classes.paper}>
         
         <SignIn />         
          </div>
          </Grid>
        </Fade>
      </Modal>
      </Grid>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet, { withTheme: true })(ResAppBar);